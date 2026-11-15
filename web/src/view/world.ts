// The three.js scene. The runner stays at z = 0 and the world is drawn relative to it, so numbers stay small.
// Light count, materials and meshes are all made up front; play only moves instances.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Instanced } from './pools';
import { Fx } from './fx';
import { PlayerView } from './player';
import { trackTexture, pavingTexture, groundTexture, skyTexture, glowTexture, powerTexture, rampTexture, HORIZON } from './textures';
import { waterTexture, distantTexture } from './france';
import { buildings, treeProto, benchProto, type BuildingDef } from './buildings';
import { trainProto, lowBarrierProto, hurdleProto, overheadProto, tokenProto, graffitiProto, canopyProto, bridgeProto, ediculeProto } from './props';
import { copProto } from './figures';
import { StationSigns } from './signs';
import { Intro, type IntroCue } from './intro3d';
import { LANE_W, laneX, CAR_LEN, CAR_GAP, VIEW_AHEAD, OB } from '../config';
import type { Sim } from '../sim/sim';
import type { SimEvent, PowerKind, Ob } from '../sim/types';
import { Rng } from '../sim/rng';
import { zoneAt, stationIndexAt, stations, type Station, type Zone } from '../data/route';

const m4 = new THREE.Matrix4();
const q = new THREE.Quaternion();
const e = new THREE.Euler();
const v = new THREE.Vector3();
const one = new THREE.Vector3(1, 1, 1);
const sc = new THREE.Vector3();
const POWER_COLORS: Record<PowerKind, THREE.Color> = {
  magnet: new THREE.Color('#ff5a64'), shoes: new THREE.Color('#3ee08a'), double: new THREE.Color('#ffc23d'),
};
const LIGHT = new THREE.Color(1.0, 0.92, 0.65);
const LIGHT_RED = new THREE.Color(1.0, 0.25, 0.2);
const WHITE = new THREE.Color(1, 1, 1);
const FLAT = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
const GROUND_LEN = 300;
const BUILD_AHEAD = 172; // buildings drop out before the track does: they are a few pixels wide out there
const SIDEWALK_IN = 3.9; // inner edge of the sidewalk from the track centre
const SIDEWALK_OUT = 7.4;

interface Placed { pool: number; side: number; d: number; len: number; depth: number }

/** How often each kind of building appears in each zone, and how much space the trees leave. */
const WEIGHTS: Record<Zone, [string, number][]> = {
  paris: [['h5', 7], ['h4', 3]],
  banlieue: [['h4', 4], ['pav', 3], ['h5', 1]],
  seine: [['pav', 4], ['h4', 2], ['wh', 1]],
  foret: [['pav', 2]],
  ville: [['h4', 4], ['h5', 2], ['pav', 1]],
};

export class World {
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  sun: THREE.DirectionalLight;
  player: PlayerView;
  fx: Fx;
  private pools: Record<string, Instanced> = {};
  private trains: Instanced[] = [];
  private coins: Instanced;
  private halos: Instanced;
  private powerCards: Record<PowerKind, Instanced>;
  private poles: Instanced;
  private cops: Instanced;
  private walls: Instanced[] = [];
  private canopies: Instanced;
  private bridges: Instanced;
  private edicules: Instanced;
  private skyline: Instanced;
  private trees: Instanced;
  private benches: Instanced;
  private signs: StationSigns;
  private intro: Intro;
  private introActive = false;
  private defs: BuildingDef[] = [];
  private buildingPools: Instanced[] = [];
  private scrollTex: THREE.Texture[] = [];
  private placed: Placed[] = [];
  private nextBuilding = [0, 0];
  private rng = new Rng(99);
  private camY = 0;
  private shake = 0;
  private flash = 0;
  private aspect = 1;
  private zone: Zone | null = null;
  private fogTarget = new THREE.Color(HORIZON);
  private grassMat!: THREE.MeshLambertMaterial;
  private paveMat!: THREE.MeshLambertMaterial;
  private water: THREE.Mesh[] = [];
  private stationIdx = -1;
  private pending: Station | null = null;
  private tint = new THREE.Color(1, 1, 1);
  time = 0;

  constructor(quality: { shadowSize: number }) {
    const s = this.scene;
    s.background = skyTexture();
    s.fog = new THREE.Fog(HORIZON, 45, 205);
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.3, 260);
    const hemi = new THREE.HemisphereLight(0xdcecff, 0x8a7a62, 1.3);
    s.add(hemi);
    this.sun = new THREE.DirectionalLight(0xfff1dc, 2.05);
    this.sun.position.set(9, 22, 4);
    this.sun.target.position.set(0, 0, -14);
    this.sun.castShadow = true;
    const sh = this.sun.shadow;
    sh.mapSize.set(quality.shadowSize, quality.shadowSize);
    Object.assign(sh.camera, { left: -16, right: 16, top: 30, bottom: -30, near: 2, far: 70 });
    sh.bias = -0.0008;
    sh.normalBias = 0.03;
    s.add(this.sun, this.sun.target);

    this.buildGround();
    // poles along the track, every 16 m
    const post = new THREE.BoxGeometry(0.18, 6.9, 0.18).translate(0, 3.45, 0);
    const arm = new THREE.BoxGeometry(1.9, 0.12, 0.12).translate(-0.85, 6.6, 0);
    const lamp = new THREE.BoxGeometry(0.5, 0.14, 0.3).translate(-1.7, 6.48, 0);
    const poleGeo = mergeGeometries([post, arm, lamp])!;
    const poleMesh = new THREE.Mesh(poleGeo, new THREE.MeshLambertMaterial({ color: 0x59606b }));
    this.poles = new Instanced(poleMesh, 40, s, { cast: true, name: 'pole' });

    // obstacles, all of ours
    this.pools.low = new Instanced(lowBarrierProto(), 24, s, { cast: true, receive: true });
    this.pools.hurdle = new Instanced(hurdleProto(), 24, s, { cast: true, receive: true });
    this.pools.overhead = new Instanced(overheadProto(), 24, s, { cast: true, receive: true });
    this.pools.ramp = new Instanced(rampMesh(), 16, s, { cast: true, receive: true });
    this.trains = [new Instanced(trainProto(0), 46, s, { cast: true, receive: true, colors: true }), new Instanced(trainProto(1), 46, s, { cast: true, receive: true, colors: true })];

    this.coins = new Instanced(tokenProto(), 320, s, { cast: false });
    const glowMat = new THREE.MeshBasicMaterial({ map: glowTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), glowMat);
    glow.name = 'glow';
    this.halos = new Instanced(glow, 340, s, { colors: true });
    for (const p of this.halos.parts) p.mesh.renderOrder = 4;
    const card = (k: PowerKind) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: powerTexture(k), transparent: true, alphaTest: 0.1 }));
      m.name = 'power-' + k;
      return new Instanced(m, 4, s);
    };
    this.powerCards = { magnet: card('magnet'), shoes: card('shoes'), double: card('double') };

    // buildings, trees and benches: the Île-de-France skin
    this.defs = buildings();
    for (const d of this.defs) this.buildingPools.push(new Instanced(d.proto, 22, s, { cast: true, receive: true, colors: true, name: 'b' + d.kind }));
    this.trees = new Instanced(treeProto().proto, 70, s, { cast: true, receive: true, colors: true });
    this.benches = new Instanced(benchProto(), 8, s, { cast: true, receive: true });
    this.cops = new Instanced(copProto(), 4, s, { cast: true, receive: true });
    this.walls = [new Instanced(graffitiProto(0), 4, s, { cast: true, receive: true }), new Instanced(graffitiProto(1), 4, s, { cast: true, receive: true })];
    this.canopies = new Instanced(canopyProto(), 4, s, { cast: true, receive: true });
    this.bridges = new Instanced(bridgeProto(), 3, s, { cast: true, receive: true });
    this.edicules = new Instanced(ediculeProto(), 4, s, { cast: true, receive: true });
    const far = new THREE.MeshLambertMaterial({ map: distantTexture(), color: 0xb9b5ab });
    this.skyline = new Instanced(new THREE.Mesh(new THREE.BoxGeometry(14, 1, 14), far), 10, s, { name: 'skyline' });
    this.signs = new StationSigns(s);
    this.intro = new Intro(s);

    this.player = new PlayerView(s);
    this.fx = new Fx(s);
  }

  private buildGround() {
    const s = this.scene;
    const z = -GROUND_LEN / 2 + 30;
    const track = trackTexture();
    track.repeat.set(3, GROUND_LEN / LANE_W);
    const trackMesh = new THREE.Mesh(new THREE.PlaneGeometry(LANE_W * 3, GROUND_LEN), new THREE.MeshLambertMaterial({ map: track }));
    trackMesh.rotation.x = -Math.PI / 2;
    trackMesh.position.set(0, 0, z);
    trackMesh.receiveShadow = true;
    s.add(trackMesh);
    // gravel strip between the tracks and the sidewalk
    const edge = trackTexture();
    edge.repeat.set(0.3, GROUND_LEN / LANE_W);
    edge.offset.x = 0.35;
    for (const side of [-1, 1]) {
      const w = SIDEWALK_IN - LANE_W * 1.5;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, GROUND_LEN), new THREE.MeshLambertMaterial({ map: edge }));
      m.rotation.x = -Math.PI / 2;
      m.position.set(side * (LANE_W * 1.5 + w / 2), 0, z);
      m.receiveShadow = true;
      s.add(m);
    }
    const pave = pavingTexture();
    pave.repeat.set(2, GROUND_LEN / 1.75);
    this.paveMat = new THREE.MeshLambertMaterial({ map: pave });
    const curbMat = new THREE.MeshLambertMaterial({ color: 0x9a9286 });
    for (const side of [-1, 1]) {
      const w = SIDEWALK_OUT - SIDEWALK_IN;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, GROUND_LEN), this.paveMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(side * (SIDEWALK_IN + w / 2), 0.25, z);
      m.receiveShadow = true;
      s.add(m);
      const curb = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.25, GROUND_LEN), curbMat);
      curb.position.set(side * (SIDEWALK_IN - 0.1), 0.125, z);
      curb.receiveShadow = true;
      s.add(curb);
    }
    const grass = groundTexture();
    grass.repeat.set(20, GROUND_LEN / 6);
    this.grassMat = new THREE.MeshLambertMaterial({ map: grass });
    const g = new THREE.Mesh(new THREE.PlaneGeometry(160, GROUND_LEN), this.grassMat);
    g.rotation.x = -Math.PI / 2;
    g.position.set(0, -0.02, z);
    g.receiveShadow = true;
    s.add(g);
    // the Seine, shown near the river stations
    const water = waterTexture();
    water.repeat.set(6, GROUND_LEN / 22);
    const waterMat = new THREE.MeshLambertMaterial({ map: water });
    // the line runs along the left bank: water on the -x side, quay wall at its edge
    const w = new THREE.Mesh(new THREE.PlaneGeometry(66, GROUND_LEN), waterMat);
    w.rotation.x = -Math.PI / 2;
    w.position.set(-48, 0.16, z);
    w.visible = false;
    s.add(w);
    this.water.push(w);
    const quay = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.45, GROUND_LEN), new THREE.MeshLambertMaterial({ color: 0x9c9384 }));
    quay.position.set(-15.6, 0.18, z);
    quay.visible = false;
    quay.receiveShadow = true;
    s.add(quay);
    this.water.push(quay);
    // overhead wires: uniform along the track, so they never need to move
    const wireMat = new THREE.MeshBasicMaterial({ color: 0x2b2f36 });
    for (let l = 0; l < 3; l++) {
      const w = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, GROUND_LEN), wireMat);
      w.position.set(laneX(l), 6.45, z);
      s.add(w);
    }
    this.scrollTex = [track, edge, pave, grass, water];
  }

  resize(w: number, h: number) {
    this.aspect = w / h;
    this.camera.aspect = this.aspect;
    this.camera.updateProjectionMatrix();
  }

  event(ev: SimEvent) {
    const fx = this.fx;
    switch (ev.type) {
      case 'coin':
        fx.burst(ev.x, ev.y, 0, 5, 0xffd75a, { speed: 2.4, up: 1.5, size: 0.4, life: 0.35, grav: 3 });
        break;
      case 'power':
        fx.burst(ev.x, ev.y, 0, 26, POWER_COLORS[ev.kind], { speed: 5, up: 2, size: 0.55, life: 0.6, grav: 2 });
        this.flash = 0.25;
        break;
      case 'land':
        if (ev.fall > 0.6) fx.burst(this.player.root.position.x, this.player.root.position.y + 0.1, 0.2, 6, 0x9a8f80, { speed: 2, up: 0.6, size: 0.5, life: 0.4, grav: 1 });
        break;
      case 'stumble':
        this.shake = 0.35;
        fx.burst(ev.x, ev.y + 1, -0.3, 10, 0xffffff, { speed: 3.5, up: 1, size: 0.35, life: 0.35 });
        break;
      case 'bump':
        this.shake = 0.15;
        break;
      case 'crash':
        this.shake = 0.8;
        fx.burst(ev.x, ev.y + 1, -0.6, 28, 0xffb347, { speed: 6, up: 2, size: 0.6, life: 0.6, grav: 5 });
        break;
    }
  }

  /** Plays the opening scene instead of the title-screen idle shot. */
  beginIntro() {
    this.introActive = true;
    this.player.root.visible = false;
    this.intro.start();
  }
  endIntro() {
    this.introActive = false;
    this.player.root.visible = true;
    this.intro.hide();
  }
  get introRunning() {
    return this.introActive;
  }
  get introFinished() {
    return this.intro.finished;
  }
  takeIntroCue(): IntroCue {
    return this.intro.takeCue();
  }

  /** The station the runner has just entered, if any (consumed by the HUD). */
  takeStation(): Station | null {
    const st = this.pending;
    this.pending = null;
    return st;
  }

  sync(sim: Sim, dt: number, menu: boolean) {
    this.time += dt;
    const pd = sim.d;
    const zOf = (d: number) => -(d - pd);
    for (const t of this.scrollTex) t.offset.y = (pd / (GROUND_LEN / t.repeat.y)) % 1;

    // zone: announced station, fog, ground and river
    const idx = stationIndexAt(pd);
    if (idx !== this.stationIdx) {
      this.stationIdx = idx;
      this.pending = stations[idx % stations.length];
    }
    const zone = zoneAt(this.pending ? this.pending.d0 : pd);
    if (zone !== this.zone) this.applyZone(zone);
    const fog = this.scene.fog as THREE.Fog;
    fog.color.lerp(this.fogTarget, Math.min(1, dt * 1.2));

    // obstacles
    for (const k in this.pools) this.pools[k].begin();
    for (const t of this.trains) t.begin();
    const movers: Ob[] = [];
    for (const o of sim.obs) {
      if (o.d0 > pd + VIEW_AHEAD || o.d1 < pd - 12) continue;
      const x = laneX(o.lane);
      if (o.kind === 'train' || o.kind === 'mtrain') {
        const pool = this.trains[o.variant % this.trains.length];
        for (let c = 0; c < o.cars; c++) {
          const dc = o.d0 + c * (CAR_LEN + CAR_GAP) + CAR_LEN / 2;
          m4.makeTranslation(x, 0, zOf(dc));
          pool.add(m4, WHITE);
        }
        if (o.kind === 'mtrain') movers.push(o);
      } else {
        m4.makeTranslation(x, 0, zOf((o.d0 + o.d1) / 2));
        this.pools[o.kind].add(m4);
      }
    }
    for (const k in this.pools) this.pools[k].end();
    for (const t of this.trains) t.end();

    // coins + glow
    this.coins.begin();
    this.halos.begin();
    q.setFromEuler(e.set(0, this.time * 3.2, 0));
    const camQ = this.camera.quaternion;
    const gold = new THREE.Color(1.0, 0.72, 0.22).multiplyScalar(0.26);
    for (const c of sim.coinList) {
      if (c.d > pd + VIEW_AHEAD - 20 || c.d < pd - 3) continue;
      const z = zOf(c.d);
      m4.compose(v.set(c.x, c.y, z), q, one);
      this.coins.add(m4);
      m4.compose(v.set(c.x, c.y, z + 0.05), camQ, sc.set(0.55, 0.55, 0.55));
      this.halos.add(m4, gold);
    }
    // power-up cards
    for (const k in this.powerCards) this.powerCards[k as PowerKind].begin();
    for (const p of sim.powers) {
      if (p.d > pd + VIEW_AHEAD - 20) continue;
      const z = zOf(p.d);
      const bob = Math.sin(this.time * 3 + p.d) * 0.12;
      m4.compose(v.set(laneX(p.lane), p.y + bob, z), camQ, sc.set(1.1, 1.1, 1.1));
      this.powerCards[p.kind].add(m4);
      m4.compose(v.set(laneX(p.lane), p.y + bob, z + 0.05), camQ, sc.set(1.7, 1.7, 1.7));
      this.halos.add(m4, POWER_COLORS[p.kind]);
    }
    for (const k in this.powerCards) this.powerCards[k as PowerKind].end();
    // moving trains: headlights that blink, and a band of light thrown on the track ahead of them
    for (const o of movers) {
      const x = laneX(o.lane);
      const z = zOf(o.d0) + 0.08;
      const blink = 0.75 + 0.25 * Math.sin(this.time * 14 + o.id);
      const far = Math.max(0, o.d0 - pd);
      const size = 1.6 + far * 0.035;
      for (const side of [-1, 1]) {
        const on = side < 0 ? blink : 1.75 - blink;
        m4.compose(v.set(x + side * 0.72, 0.95, z), camQ, sc.set(size, size, size));
        this.halos.add(m4, LIGHT.clone().multiplyScalar(on));
      }
      m4.compose(v.set(x, 2.9, z), camQ, sc.set(1.1, 1.1, 1.1));
      this.halos.add(m4, LIGHT_RED.clone().multiplyScalar(blink));
      const len = 18;
      m4.compose(v.set(x, 0.06, z + len / 2), FLAT, sc.set(2.2, len, 1));
      this.halos.add(m4, LIGHT.clone().multiplyScalar(0.35 + 0.15 * blink));
    }
    this.coins.end();
    this.halos.end();

    // poles
    this.poles.begin();
    const first = Math.floor((pd - 10) / 16) * 16;
    for (let d = first; d < pd + VIEW_AHEAD; d += 16) {
      m4.makeTranslation(SIDEWALK_IN + 0.3, 0.25, zOf(d));
      this.poles.add(m4);
      m4.makeRotationY(Math.PI).setPosition(-SIDEWALK_IN - 0.3, 0.25, zOf(d + 8));
      this.poles.add(m4);
    }
    this.poles.end();

    this.syncBuildings(pd, zOf);
    this.signs.update(pd, zOf);
    this.syncPublic(pd, zOf);
    this.syncStations(pd, zOf);

    // runner, camera, effects
    if (menu) this.player.menu(dt);
    if (this.introActive) this.updateIntroCamera(dt);
    else this.updateCamera(sim, dt, menu);
    const speedFactor = menu || !sim.alive ? 0 : Math.max(0, Math.min(1, (sim.speed - 14) / 12));
    this.fx.update(dt, this.camera, menu || !sim.alive ? 0 : sim.speed, speedFactor);
    if (!menu && sim.alive) {
      const px = sim.x, py = sim.y;
      if (sim.power.shoes > 0 && Math.random() < dt * 30) this.fx.burst(px + (Math.random() - 0.5) * 0.4, py + 0.1, 0.3, 1, 0x3ee08a, { speed: 0.6, up: 0.4, size: 0.3, life: 0.4, grav: 0 });
      if (sim.power.magnet > 0 && Math.random() < dt * 20) this.fx.burst(px, py + 1.2, 0, 1, 0xff5a64, { speed: 1.5, up: 0, size: 0.25, life: 0.3, grav: 0, world: false });
      if (sim.power.double > 0 && Math.random() < dt * 12) this.fx.burst(px, py + 2.0, 0, 1, 0xffc23d, { speed: 0.8, up: 0.8, size: 0.25, life: 0.5, grav: 0, world: false });
    }
  }

  private applyZone(zone: Zone) {
    this.zone = zone;
    const palette: Record<Zone, { fog: string; grass: string; pave: string; tint: string }> = {
      paris: { fog: '#efdfc6', grass: '#82946a', pave: '#ded7c9', tint: '#fffbef' },
      banlieue: { fog: '#ecdcc6', grass: '#7d9559', pave: '#d4cbbc', tint: '#ffffff' },
      seine: { fog: '#dbe7ea', grass: '#6f8b58', pave: '#c9c1b2', tint: '#f6f9fb' },
      foret: { fog: '#cfd9c8', grass: '#4e7040', pave: '#bcb6a7', tint: '#f2f7ee' },
      ville: { fog: '#e9dcc8', grass: '#7b9359', pave: '#d6cebf', tint: '#fffcf4' },
    };
    const p = palette[zone];
    this.fogTarget.set(p.fog);
    this.grassMat.color.set(p.grass);
    this.paveMat.color.set(p.pave);
    this.tint.set(p.tint);
    const river = zone === 'seine';
    for (const w of this.water) w.visible = river;
  }

  private pickBuilding(zone: Zone): number {
    const options = WEIGHTS[zone];
    let total = 0;
    for (const [, w] of options) total += w;
    let r = this.rng.next() * total;
    let kind = options[0][0];
    for (const [k, w] of options) {
      if ((r -= w) <= 0) { kind = k; break; }
    }
    const pool = this.defs.map((d, i) => ({ d, i })).filter((x) => x.d.kind === kind);
    return pool[this.rng.pick(pool.map((_, i) => i))].i;
  }

  private syncBuildings(pd: number, zOf: (d: number) => number) {
    this.placed = this.placed.filter((h) => h.d + h.len / 2 > pd - 70);
    for (const side of [0, 1]) {
      if (this.nextBuilding[side] < pd - 70) this.nextBuilding[side] = pd - 70;
      let guard = 0;
      while (this.nextBuilding[side] < pd + BUILD_AHEAD && guard++ < 40) {
        const d = this.nextBuilding[side];
        const zone = zoneAt(d);
        // along the Seine the left bank is water: no buildings on that side
        if (zone === 'seine' && side === 1) {
          this.nextBuilding[side] += 30;
          continue;
        }
        const pool = this.pickBuilding(zone);
        const def = this.defs[pool];
        this.placed.push({ pool, side, d: d + def.len / 2, len: def.len, depth: def.depth });
        const gap = zone === 'foret' ? this.rng.range(16, 34) : zone === 'seine' ? this.rng.range(4, 16) : this.rng.range(1, 7);
        this.nextBuilding[side] += def.len + gap;
      }
    }
    for (const p of this.buildingPools) p.begin();
    for (const h of this.placed) {
      const sgn = h.side === 0 ? 1 : -1;
      m4.makeRotationY(sgn > 0 ? -Math.PI / 2 : Math.PI / 2)
        .setPosition(sgn * (SIDEWALK_OUT + 0.8 + h.depth / 2), 0, zOf(h.d));
      const warm = 0.93 + this.rng.next() * 0.07;
      this.buildingPools[h.pool].add(m4, new THREE.Color(warm, warm, warm).multiply(this.tint));
    }
    for (const p of this.buildingPools) p.end();

    // trees along the pavement, denser in the forest and along the Seine
    const zNow = zoneAt(pd + 80);
    const spacing = zNow === 'foret' ? 9 : zNow === 'seine' ? 15 : zNow === 'paris' ? 26 : 19;
    this.trees.begin();
    for (const side of [0, 1]) {
      const sgn = side === 0 ? 1 : -1;
      const start = Math.ceil((pd - 70) / spacing) * spacing;
      for (let d = start; d < pd + VIEW_AHEAD; d += spacing) {
        if (side === 1 && zoneAt(d) === 'seine') continue;
        m4.makeTranslation(sgn * (SIDEWALK_OUT - 0.5), 0.25, zOf(d));
        this.trees.add(m4, new THREE.Color(0.9 + this.rng.next() * 0.1, 0.95 + this.rng.next() * 0.05, 0.9));
      }
    }
    this.trees.end();

    // a bench now and then, on the platform side
    this.benches.begin();
    for (const side of [0, 1]) {
      const sgn = side === 0 ? 1 : -1;
      const start = Math.ceil((pd - 70) / 84) * 84;
      for (let d = start; d < pd + VIEW_AHEAD; d += 84) {
        m4.makeRotationY(sgn > 0 ? Math.PI : 0).setPosition(sgn * (SIDEWALK_OUT - 0.9), 0.25, zOf(d));
        this.benches.add(m4);
      }
    }
    this.benches.end();
  }


  /** Hoardings along the track and the canopies over the platforms. */
  private syncStations(pd: number, zOf: (d: number) => number) {
    for (const w of this.walls) w.begin();
    const step = 150;
    for (let d = Math.ceil((pd - 70) / step) * step; d < pd + VIEW_AHEAD; d += step) {
      const side = Math.round(d / step) % 2 === 0 ? 1 : -1;
      const variant = Math.round(d / step) % 2;
      m4.makeRotationY(side > 0 ? -Math.PI / 2 : Math.PI / 2).setPosition(side * (SIDEWALK_OUT + 0.9), 0, zOf(d));
      this.walls[variant].add(m4);
    }
    for (const w of this.walls) w.end();

    this.canopies.begin();
    const first = stationIndexAt(pd - 40);
    const last = stationIndexAt(pd + 220);
    for (let i = first; i <= last; i++) {
      const st = stations[i % stations.length];
      const z = zOf(st.d0 + 34);
      if (z > 4) continue;
      for (const side of [-1, 1]) {
        m4.makeRotationY(side > 0 ? Math.PI : 0).setPosition(side * (SIDEWALK_OUT - 1.6), 0.25, z);
        this.canopies.add(m4);
      }
    }
    this.canopies.end();

    // bridges over the line on the riverside stretches, metro entrances in Paris
    this.bridges.begin();
    for (let d = Math.ceil((pd - 120) / 620) * 620; d < pd + 300; d += 620) {
      const zone = zoneAt(d);
      if (zone !== 'seine' && zone !== 'ville') continue;
      m4.makeTranslation(0, 0, zOf(d));
      this.bridges.add(m4);
    }
    this.bridges.end();

    this.edicules.begin();
    for (let d = Math.ceil((pd - 80) / 420) * 420; d < pd + 240; d += 420) {
      if (zoneAt(d) !== 'paris') continue;
      m4.makeRotationY(Math.PI).setPosition(-(SIDEWALK_OUT - 1.2), 0.25, zOf(d + 60));
      this.edicules.add(m4);
    }
    this.edicules.end();

    // a hazy skyline behind the roofs: far enough to stay a backdrop, only on the built-up side
    this.skyline.begin();
    for (let d = Math.ceil((pd - 140) / 120) * 120; d < pd + 280; d += 120) {
      const zone = zoneAt(d);
      if (zone === 'seine' || zone === 'foret') continue;
      const h = 22 + ((((d / 120) * 7) | 0) % 26);
      m4.makeScale(1, h, 1).setPosition(78 + (((d / 120) * 11) | 0) % 30, h / 2, zOf(d));
      this.skyline.add(m4);
    }
    this.skyline.end();
  }

  /** The blue cop on the platform, at every other station. */
  private syncPublic(pd: number, zOf: (d: number) => number) {
    this.cops.begin();
    const first = stationIndexAt(pd - 40);
    const last = stationIndexAt(pd + 220);
    for (let i = first; i <= last; i++) {
      if (i % 2) continue;
      const st = stations[i % stations.length];
      const z = zOf(st.d0 + 58);
      if (z > 2) continue;
      const side = i % 4 === 0 ? 1 : -1;
      m4.makeRotationY(side > 0 ? Math.PI / 2 : -Math.PI / 2).setPosition(side * (SIDEWALK_OUT - 1.4), 0.25, z);
      this.cops.add(m4);
    }
    this.cops.end();
  }

  resetScenery() {
    this.placed = [];
    this.nextBuilding = [-70, -70];
    this.stationIdx = -1;
    this.pending = null;
    this.player.reset();
  }

  private updateIntroCamera(dt: number) {
    const c = this.intro.update(dt, this.fx);
    const cam = this.camera;
    cam.position.copy(c.pos);
    if (Math.abs(cam.fov - c.fov) > 0.05) {
      cam.fov = c.fov;
      cam.updateProjectionMatrix();
    }
    cam.lookAt(c.look);
  }

  private updateCamera(sim: Sim, dt: number, menu: boolean) {
    const cam = this.camera;
    const portrait = Math.max(0, Math.min(1, (1.2 - this.aspect) / 0.72));
    if (menu) {
      const t = this.time * 0.15;
      const wide = this.aspect > 1.25;
      cam.position.set(Math.sin(t) * 0.8 + (wide ? -1.2 : 0), 1.7 + portrait * 0.5, -4.6 - portrait * 1.6);
      cam.fov = 50 + portrait * 16;
      cam.updateProjectionMatrix();
      cam.lookAt(wide ? -2.2 : 0, wide ? 0.95 : 0.25 - portrait * 0.35, 0);
      this.camY = 0;
      return;
    }
    const target = sim.grounded ? sim.y : Math.max(sim.groundY, Math.min(sim.y, this.camY + 1.0));
    this.camY += (target - this.camY) * Math.min(1, dt * 5);
    const dist = 4.6 + portrait * 1.5;
    const height = 2.4 + portrait * 0.85;
    const sx = sim.x * 0.72;
    let ox = 0, oy = 0;
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt);
      const a = this.shake * 0.5;
      ox = (Math.random() - 0.5) * a;
      oy = (Math.random() - 0.5) * a;
    }
    cam.position.set(sx + ox, this.camY + height + oy, dist);
    const speedFactor = Math.max(0, Math.min(1, (sim.speed - 12) / 15));
    const fov = 56 + portrait * 8 + speedFactor * 9;
    if (Math.abs(cam.fov - fov) > 0.01) {
      cam.fov += (fov - cam.fov) * Math.min(1, dt * 3);
      cam.updateProjectionMatrix();
    }
    cam.lookAt(sim.x * 0.85, this.camY + 1.45, -9);
  }

  takeFlash() {
    const f = this.flash;
    this.flash = 0;
    return f;
  }

  /** Put one of every instanced thing in view, so every shader (and shadow shader) compiles now, not mid-run. */
  warm(renderer: THREE.WebGLRenderer) {
    const all = [...Object.values(this.pools), ...this.trains, this.coins, this.halos, this.poles, ...Object.values(this.powerCards), ...this.buildingPools, this.trees, this.benches, this.cops, ...this.walls, this.canopies, this.skyline, this.bridges, this.edicules];
    for (const p of all) {
      p.begin();
      m4.makeTranslation(0, 1, -6);
      p.add(m4, new THREE.Color(1, 1, 1));
      p.end();
    }
    this.signs.warm(renderer);
    this.fx.warm(this.camera);
    renderer.compile(this.scene, this.camera);
    renderer.render(this.scene, this.camera);
    for (const p of all) { p.begin(); p.end(); }
    this.fx.clear();
  }
}

/** A wedge: 0 m high at the near end (+z), the train's height at the far end (-z). */
function rampMesh() {
  const w = OB.ramp.halfW, L = OB.ramp.depth / 2, H = OB.ramp.yt;
  const p = [
    [-w, 0, L], [w, 0, L], [-w, 0, -L], [w, 0, -L], [-w, H, -L], [w, H, -L],
  ];
  const tris: number[][] = [
    [0, 1, 5], [0, 5, 4],
    [0, 4, 2],
    [1, 3, 5],
    [2, 4, 5], [2, 5, 3],
  ];
  const pos: number[] = [], uv: number[] = [];
  for (const t of tris) for (const i of t) {
    pos.push(...p[i]);
    uv.push((p[i][0] + w) / (2 * w), (L - p[i][2]) / (2 * L) * 3 + p[i][1] * 0.3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ map: rampTexture(), side: THREE.FrontSide }));
  m.name = 'ramp';
  return m;
}
