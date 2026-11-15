// The opening: a real little scene in the 3D world. The runner walks up to a hoarding beside the
// tracks, shakes a can and paints ACAB letter by letter, then a blue officer turns up and he bolts.
import * as THREE from 'three';
import { Figure, copProto } from './figures';
import type { Fx } from './fx';

export type IntroCue = 'spray' | 'whistle' | 'bolt' | null;

const WALL_W = 6.4;
const WALL_H = 3.1;
const WALL_X = -4.85;
const WALL_Z = -3.2;
const WALL_Y = 0.25;
const LENGTH = 9.2;

const LETTERS = ['A', 'C', 'A', 'B'];
const PAINT = '#ffcf3f';
const PAINT_DARK = '#ffb01f';

function ease(a: number, b: number, t: number) {
  const k = t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t);
  return a + (b - a) * k;
}

export class Intro {
  group = new THREE.Group();
  private canvas = document.createElement('canvas');
  private tex: THREE.CanvasTexture;
  private base!: HTMLCanvasElement;
  private runner = new Figure();
  private cop = copProto();
  private can = new THREE.Group();
  private t = 0;
  private painted = 0;
  private cue: IntroCue = null;
  private sprayT = 0;
  private pos = new THREE.Vector3();
  private look = new THREE.Vector3();
  private fov = 54;
  private nozzle = new THREE.Vector3();

  constructor(scene: THREE.Scene) {
    this.canvas.width = 768;
    this.canvas.height = 384;
    this.tex = new THREE.CanvasTexture(this.canvas);
    this.tex.colorSpace = THREE.SRGBColorSpace;
    this.tex.anisotropy = 4;
    this.buildWall();
    this.buildRunner();
    this.buildCop();
    this.buildCan();
    this.group.visible = false;
    scene.add(this.group);
  }

  private buildWall() {
    const base = document.createElement('canvas');
    base.width = this.canvas.width;
    base.height = this.canvas.height;
    const b = base.getContext('2d') as CanvasRenderingContext2D;
    const W = base.width, H = base.height;
    const rnd = (() => {
      let s = 8123;
      return () => ((s = (s * 16807) % 2147483647) / 2147483647);
    })();
    b.fillStyle = '#8f918c';
    b.fillRect(0, 0, W, H);
    for (let i = 0; i < 2200; i++) {
      b.fillStyle = `rgba(${rnd() > 0.5 ? '255,255,250' : '40,42,40'},${0.02 + rnd() * 0.06})`;
      b.fillRect(rnd() * W, rnd() * H, 2 + rnd() * 22, 2 + rnd() * 8);
    }
    // hoarding panels, joints, a rusted rail along the bottom
    b.strokeStyle = 'rgba(52,54,52,0.35)';
    b.lineWidth = 3;
    for (let x = 0; x <= W; x += W / 4) {
      b.beginPath(); b.moveTo(x, 0); b.lineTo(x, H); b.stroke();
    }
    b.fillStyle = 'rgba(52,54,52,0.22)';
    b.fillRect(0, H - 34, W, 34);
    b.fillStyle = 'rgba(255,255,255,0.10)';
    b.fillRect(0, 8, W, 6);
    // old faded tags underneath
    b.save();
    b.globalAlpha = 0.22;
    b.translate(430, 250);
    b.rotate(-0.05);
    b.font = '900 54px "DejaVu Sans", system-ui, sans-serif';
    b.fillStyle = '#3f6f8f';
    b.fillText('ZONE', 0, 0);
    b.restore();
    this.base = base;
    const mat = new THREE.MeshLambertMaterial({ map: this.tex });
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(WALL_W, WALL_H), mat);
    wall.position.set(WALL_X, WALL_Y + WALL_H / 2, WALL_Z);
    wall.rotation.y = Math.PI / 2;
    wall.receiveShadow = true;
    this.group.add(wall);
    // frame, back and feet
    const steel = new THREE.MeshLambertMaterial({ color: 0x4b5158 });
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.18, WALL_H + 0.2, WALL_W + 0.2), new THREE.MeshLambertMaterial({ color: 0x6d7176 }));
    back.position.set(WALL_X - 0.12, WALL_Y + WALL_H / 2, WALL_Z);
    back.castShadow = true;
    back.receiveShadow = true;
    this.group.add(back);
    for (const z of [-WALL_W / 2 + 0.2, 0, WALL_W / 2 - 0.2]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.16, WALL_H + 0.35, 0.16), steel);
      post.position.set(WALL_X + 0.06, WALL_Y + (WALL_H + 0.35) / 2, WALL_Z + z);
      post.castShadow = true;
      this.group.add(post);
    }
    this.paint(0);
  }

  private buildRunner() {
    const f = this.runner;
    f.root.position.set(-2.75, 0, WALL_Z);
    f.root.rotation.y = Math.PI / 2;
    this.group.add(f.root);
  }

  private buildCop() {
    this.cop.position.set(-1.5, 0, 7);
    this.cop.rotation.y = Math.PI;
    this.cop.visible = false;
    this.group.add(this.cop);
  }

  private buildCan() {
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.24, 10), new THREE.MeshLambertMaterial({ color: 0xf1f1ec }));
    body.position.y = -0.03;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.058, 0.07, 10), new THREE.MeshLambertMaterial({ color: 0xd6543f }));
    band.position.y = 0.0;
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.06, 8), new THREE.MeshLambertMaterial({ color: 0x22262c }));
    cap.position.set(0, 0.14, -0.02);
    this.can.add(body, band, cap);
    this.can.rotation.set(Math.PI / 2, 0, 0);
    this.can.position.set(0, 0, -0.08);
    this.can.visible = false;
    this.runner.hand.add(this.can);
  }

  start() {
    this.t = 0;
    this.painted = 0;
    this.cue = null;
    this.group.visible = true;
    this.cop.visible = false;
    this.can.visible = false;
    this.runner.root.position.set(-2.75, 0, WALL_Z);
    this.runner.root.rotation.y = Math.PI / 2;
    this.paint(0);
  }

  hide() {
    this.group.visible = false;
  }

  setSkin(sk: Parameters<Figure['setSkin']>[0]) {
    this.runner.setSkin(sk);
  }

  takeCue(): IntroCue {
    const c = this.cue;
    this.cue = null;
    return c;
  }

  /** Paints the wall up to `p` (0..1 of the four letters). */
  private paint(p: number) {
    const g = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    const W = this.canvas.width, H = this.canvas.height;
    g.clearRect(0, 0, W, H);
    g.drawImage(this.base, 0, 0);
    if (p <= 0) {
      this.tex.needsUpdate = true;
      return;
    }
    const cell = W / 4.6;
    const x0 = W / 2 - (cell * LETTERS.length) / 2 + cell / 2;
    g.font = `900 ${Math.round(H * 0.62)}px "DejaVu Sans", system-ui, sans-serif`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    const y = H * 0.54;
    for (let i = 0; i < LETTERS.length; i++) {
      const pr = Math.max(0, Math.min(1, p * LETTERS.length - i));
      if (pr <= 0) break;
      const cx = x0 + i * cell;
      g.save();
      g.beginPath();
      g.rect(cx - cell / 2, 10, cell * pr, H);
      g.clip();
      g.fillStyle = PAINT_DARK;
      g.fillText(LETTERS[i], cx + 3, y + 4);
      g.fillStyle = PAINT;
      g.fillText(LETTERS[i], cx, y);
      g.globalAlpha = 0.3;
      g.fillStyle = '#fff3b8';
      g.fillText(LETTERS[i], cx - 2, y - 3);
      g.restore();
      if (pr >= 0.98) {
        // drips
        for (let k = 0; k < 3; k++) {
          const dx = cx - cell * 0.32 + k * cell * 0.3;
          const len = 10 + ((i * 7 + k * 13) % 26);
          g.fillStyle = PAINT;
          g.fillRect(dx, y + H * 0.2, 5, len);
          g.beginPath();
          g.arc(dx + 2.5, y + H * 0.2 + len, 3.4, 0, Math.PI * 2);
          g.fill();
        }
      }
    }
    this.tex.needsUpdate = true;
  }

  /** Advances the scene and returns the camera the title screen should use. */
  update(dt: number, fx: Fx): { pos: THREE.Vector3; look: THREE.Vector3; fov: number } {
    this.t += dt;
    const t = this.t;
    const f = this.runner;

    // --- painting ---------------------------------------------------------
    const paintStart = 0.9;
    const paintEnd = 4.0;
    const p = Math.max(0, Math.min(1, (t - paintStart) / (paintEnd - paintStart)));
    if (Math.abs(p - this.painted) > 0.0015) {
      this.painted = p;
      this.paint(p);
    }
    const spraying = t > paintStart - 0.2 && t < paintEnd + 0.15;

    if (spraying) {
      if (this.cue === null && t > paintStart - 0.2) this.cue = 'spray';
      f.update(dt, 'spray');
      this.can.visible = true;
      // spray mist at the nozzle, a few grains per frame
      this.sprayT += dt;
      this.can.getWorldPosition(this.nozzle);
      const n = this.sprayT > 0.03 ? 2 : 0;
      if (n) {
        this.sprayT = 0;
        fx.burst(this.nozzle.x - 0.1, this.nozzle.y + 0.02, this.nozzle.z, n, 0xffcf3f, { speed: 0.9, up: 0.5, size: 0.13, life: 0.3, grav: 0.4 });
      }
      // the runner walks along the hoarding with the wet edge, arm up
      const front = Math.min(0.98, p);
      f.root.rotation.y = Math.PI / 2 - (front - 0.5) * 0.42;
      f.root.position.z += (WALL_Z + 1.9 - p * 3.6 + 0.3 - f.root.position.z) * Math.min(1, dt * 6);
      f.root.position.x = -2.72;
    } else if (t > 4.0 && t < 6.1) {
      f.update(dt, 'idle');
      this.can.visible = false;
      // step back from the wall to look at the work
      const k = Math.min(1, (t - 4.0) / 0.8);
      f.root.position.set(-2.75 + k * 0.9, 0, WALL_Z - k * 0.35);
      f.root.rotation.y = Math.PI / 2 - k * 0.25;
    } else if (t >= 6.1 && t < 7.4) {
      // the officer arrives, whistle, the runner turns
      this.cop.visible = true;
      const k = Math.min(1, (t - 6.1) / 1.1);
      // he comes along the pavement, from the right of the frame, towards the runner
      this.cop.position.set(-3.55, 0.02 + Math.abs(Math.sin(t * 9)) * 0.03, ease(1.2, -1.2, k));
      this.cop.rotation.y = 0;
      if (this.cue === null) this.cue = 'whistle';
      f.update(dt, 'stumble');
      // he backs away from the wall, eyes on the officer
      f.root.position.x = ease(-2.72, -2.05, k);
      f.root.position.z = ease(-3.55, -2.55, k);
      f.root.rotation.y = ease(Math.PI / 2, 2.45, k);
    } else if (t >= 7.4) {
      // bolt down the track, the officer after him
      const k = t - 7.4;
      f.update(dt, 'run', 11);
      f.root.rotation.y = Math.PI;
      f.root.position.set(-2.05 - k * 0.1, 0, -2.55 - k * 8);
      this.cop.position.set(-3.55, 0.02 + Math.abs(Math.sin(t * 9)) * 0.03, -1.9 - k * 3.2);
      if (this.cue === null && t > 7.5) this.cue = 'bolt';
    } else {
      f.update(dt, 'idle');
      this.can.visible = false;
    }

    // --- camera: a wide-angle shot that follows the wet edge, then reveals the tag ----
    let px = 0, py = 0, pz = 0, lx = 0, ly = 0, lz = 0, fov = 70;
    const edgeZ = WALL_Z + 1.9 - p * 3.6; // the letter being painted, along the wall
    if (t < 0.9) {
      const k = ease(0, 1, t / 0.9);
      px = ease(2.6, 2.2, k); py = ease(2.6, 2.45, k); pz = ease(3.8, 3.1, k);
      lx = WALL_X + 1.5; ly = 1.95; lz = ease(WALL_Z + 0.4, WALL_Z + 1.0, k);
      fov = 70;
    } else if (t < 4.0) {
      const k = ease(0, 1, (t - 0.9) / 3.1);
      px = ease(2.2, 1.9, k); py = 2.4; pz = ease(3.1, 2.7, k);
      lx = WALL_X + 1.35; ly = ease(1.95, 1.85, k); lz = edgeZ;
      fov = 72;
    } else if (t < 6.1) {
      const k = ease(0, 1, (t - 4.0) / 2.1);
      px = ease(1.9, 3.1, k); py = ease(2.4, 2.5, k); pz = ease(2.7, 4.6, k);
      lx = ease(WALL_X + 1.35, WALL_X + 1.2, k); ly = ease(1.85, 1.7, k); lz = ease(WALL_Z + 0.2, WALL_Z + 0.3, k);
      fov = ease(72, 78, k);
    } else if (t < 7.4) {
      const k = ease(0, 1, (t - 6.1) / 1.3);
      px = ease(3.1, 2.5, k); py = 2.45; pz = ease(4.6, 4.9, k);
      lx = ease(WALL_X + 1.2, -3.3, k); ly = ease(1.7, 1.5, k); lz = ease(WALL_Z + 0.3, -2.0, k);
      fov = ease(78, 74, k);
    } else {
      const k = ease(0, 1, Math.min(1, (t - 7.4) / 1.3));
      px = ease(2.5, 1.7, k); py = ease(2.45, 2.3, k); pz = ease(4.9, 3.9, k);
      lx = ease(-2.3, -1.8, k); ly = ease(1.45, 1.3, k); lz = ease(-1.1, -6.5, k);
      fov = ease(74, 70, k);
    }
    this.pos.set(px, py, pz);
    this.look.set(lx, ly, lz);
    this.fov = fov;
    this.cop.rotation.z = Math.sin(t * 9) * 0.03;
    return { pos: this.pos, look: this.look, fov: this.fov };
  }

  get finished() {
    return this.t > LENGTH;
  }
}
