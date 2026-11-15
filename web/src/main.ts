// Start-up, game states and the frame loop.
import * as THREE from 'three';
import { Sim } from './sim/sim';
import { solve, type Spec } from './sim/track';
import { World } from './view/world';
import { Audio } from './audio';
import { bindInput, type Action } from './input';
import { UI, type Screen, type ShopView } from './ui';
import { t, type Key } from './i18n';
import { stations } from './data/route';
import { loadMeta, saveMeta, findSkin, findBoard, findTheme, priceOf, owned, grant, boxRoll, nameOf, type ShopItem, type Meta } from './meta';
import { load, save } from './storage';
import { OB, trainLength, speedAt, SPEED, laneX, MOVER } from './config';
import type { ObKind, PowerKind, SimEvent } from './sim/types';

interface Boot {
  set(p: number, label?: string): void;
  done(): void;
  fail(msg: string): void;
}
declare global {
  interface Window {
    __boot?: Boot;
    __run?: unknown;
  }
}

const TEST = new URLSearchParams(location.search).has('test');
const boot: Boot = window.__boot || {
  set() {},
  done() { document.getElementById('loader')?.remove(); },
  fail(m) { console.error(m); },
};
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

async function main() {
  const canvas = document.getElementById('game') as HTMLCanvasElement;
  const mobile = matchMedia('(pointer: coarse)').matches || Math.min(screen.width, screen.height) < 600;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !mobile, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const maxPR = Math.min(window.devicePixelRatio || 1, 2);
  let pixelRatio = mobile ? Math.min(maxPR, 1.35) : maxPR;
  renderer.setPixelRatio(pixelRatio);

  boot.set(0.9, t('preparing'));
  await nextFrame();
  // everything in the scene is drawn at start-up: no model files to download
  const world = new World({ shadowSize: mobile ? 1024 : 2048 });
  boot.set(0.95);
  await nextFrame();
  const sim = new Sim(1);
  const audio = new Audio();
  audio.setMuted(load('muted', false));
  let best = load('best', 0);
  let bank = load('bank', 0);
  let keyBank = load('keys', 0);
  const meta: Meta = loadMeta();
  let revives = 0; // per run: the price doubles each time
  let bankedCoins = 0;
  const reviveCost = () => Math.min(64, 1 << revives);
  let state: Screen = 'intro';
  let overTimer = 0;
  const horned = new Set<number>();
  const passed = new Set<number>();
  let ambT = 9;
  let shopReturn: Screen = 'start';

  let vw = 0, vh = 0;
  const resize = () => {
    const w = window.innerWidth, h = window.innerHeight;
    vw = w;
    vh = h;
    // a focused button can scroll the page inside a WebView: keep the view pinned at the top
    if (window.scrollY !== 0) window.scrollTo(0, 0);
    renderer.setSize(w, h, false);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    world.resize(w, h);
  };
  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', () => setTimeout(resize, 200));
  window.visualViewport?.addEventListener('resize', resize);
  resize();
  // A WebView can lay the page out before its final size is known (orientation lock, keyboard, bars):
  // check the size every frame so the camera never keeps a stale aspect ratio.
  const checkSize = () => {
    if (window.innerWidth !== vw || window.innerHeight !== vh) resize();
    if (window.scrollY !== 0) window.scrollTo(0, 0);
  };

  const toggleMute = () => {
    audio.unlock();
    audio.setMuted(!audio.muted);
    save('muted', audio.muted);
    ui.setMuted(audio.muted);
  };
  const shopView = (): ShopView => ({
    coins: bank,
    keys: keyBank,
    stock: meta.stock,
    owned: { char: meta.chars, board: meta.boards, theme: meta.themes },
    equip: meta.equip,
  });
  const applyLook = () => {
    world.player.figure.setSkin(findSkin(meta.equip.char));
    world.setIntroSkin(findSkin(meta.equip.char));
    world.player.setBoardColors(findBoard(meta.equip.board).deck, findBoard(meta.equip.board).stripe);
    world.setTheme(findTheme(meta.equip.theme));
  };
  let ui: UI;
  ui = new UI(document.getElementById('ui')!, {
    play: () => play(),
    skipIntro: () => skipIntro(),
    resume: () => resume(),
    pause: () => pause(),
    restart: () => { toTitle(false); play(); },
    home: () => toTitle(true),
    toggleMute,
    langChanged: () => {},
    revive: () => revive(),
    openShop: () => {
      shopReturn = state === 'pause' ? 'pause' : 'start';
      audio.unlock();
      audio.click();
      ui.shopOpen(shopView());
    },
    closeShop: () => ui.show(shopReturn),
    buy: (kind, id) => buy(kind, id),
    buyUnit: (kind) => buyUnit(kind),
    equip: (kind, id) => { equipItem(kind, id); audio.click(); ui.shopRefresh(shopView()); },
    box: () => openBox(),
  }, audio.muted);
  applyLook();

  function equipItem(kind: ShopItem['kind'], id: string) {
    if (kind === 'char') meta.equip.char = id;
    else if (kind === 'board') meta.equip.board = id;
    else meta.equip.theme = id;
    saveMeta(meta);
    applyLook();
  }
  function buy(kind: ShopItem['kind'], id: string) {
    const it: ShopItem = { kind, id };
    if (owned(meta, it)) { equipItem(kind, id); audio.click(); ui.shopRefresh(shopView()); return; }
    const price = priceOf(it);
    if (bank < price) { ui.note(t('notEnough')); audio.bump(); return; }
    bank -= price;
    save('bank', bank);
    grant(meta, it);
    // a new board also fills the bag
    if (kind === 'board') meta.stock += 3;
    equipItem(kind, id);
    audio.power();
    ui.note(`${nameOf(it)} !`);
    ui.shopRefresh(shopView());
  }
  function buyUnit(kind: 'board' | 'key') {
    const price = kind === 'board' ? 200 : 1500;
    if (bank < price) { ui.note(t('notEnough')); audio.bump(); return; }
    bank -= price;
    save('bank', bank);
    if (kind === 'board') meta.stock += 1;
    else { keyBank += 1; save('keys', keyBank); }
    saveMeta(meta);
    audio.coin(2);
    ui.shopRefresh(shopView());
  }
  function openBox() {
    const price = 1500;
    if (bank < price) { ui.note(t('notEnough')); audio.bump(); return; }
    bank -= price;
    const r = boxRoll(meta);
    if (r.item) {
      grant(meta, r.item);
      if (r.item.kind === 'board') meta.stock += 2;
      saveMeta(meta);
      ui.note(`${t('youGot')} ${nameOf(r.item)}`);
    } else {
      bank += r.coins || 0;
      ui.note(`+${r.coins} ${t('coinsTotal')}`);
    }
    save('bank', bank);
    audio.power();
    ui.flash('power');
    ui.shopRefresh(shopView());
  }
  let seed = (Date.now() % 100000) + 1;
  function toTitle(show: boolean) {
    seed = (seed * 48271) % 2147483647;
    world.endArrest();
    revives = 0;
    bankedCoins = 0;
    sim.reset(seed, !load('tutorialDone', false));
    world.resetScenery();
    world.fx.clear();
    audio.stopMusic();
    overTimer = 0;
    state = 'start';
    ui.setStart(best, bank);
    if (show) ui.show('start');
  }
  function revive() {
    if (state !== 'over') return;
    const cost = reviveCost();
    if (keyBank < cost) return;
    keyBank -= cost;
    save('keys', keyBank);
    revives++;
    bankedCoins = sim.coins;
    world.endArrest();
    sim.revive();
    state = 'play';
    audio.unlock();
    audio.power();
    ui.show('play');
  }
  function skipIntro() {
    if (state !== 'intro') return;
    audio.unlock();
    world.endIntro();
    state = 'start';
    ui.show('start');
  }
  function play() {
    audio.unlock();
    audio.click();
    if (state === 'over') toTitle(false);
    if (state !== 'start') return;
    state = 'play';
    sim.start();
    audio.startMusic();
    ui.show('play');
  }
  function pause() {
    if (state !== 'play') return;
    state = 'pause';
    audio.stopMusic();
    ui.show('pause');
  }
  function resume() {
    if (state !== 'pause') return;
    audio.unlock();
    state = 'play';
    audio.startMusic();
    ui.show('play');
  }
  function onAction(a: Action) {
    if (a === 'mute') { toggleMute(); return; }
    if (state === 'intro') { skipIntro(); return; }
    if (state === 'start') { if (a === 'up' || a === 'confirm') play(); return; }
    if (state === 'over') { if ((a === 'up' || a === 'confirm') && overTimer > 0.6) { toTitle(false); play(); } return; }
    if (state === 'pause') { if (a === 'pause' || a === 'confirm') resume(); return; }
    audio.unlock();
    if (a === 'pause') pause();
    else if (a === 'left') sim.left();
    else if (a === 'right') sim.right();
    else if (a === 'up') sim.jump();
    else if (a === 'down') sim.down();
    else if (a === 'double') {
      if (sim.alive && sim.furyT === 0 && meta.stock > 0) {
        meta.stock--;
        saveMeta(meta);
        sim.fury(9);
      } else if (meta.stock === 0) ui.toast(t('noBoard'), 1200);
    }
  }
  bindInput(document.getElementById('ui')!, onAction, () => state === 'play');
  document.addEventListener('visibilitychange', () => { if (document.hidden && !TEST) pause(); });

  function handle(ev: SimEvent) {
    world.event(ev);
    switch (ev.type) {
      case 'jump': audio.jump(ev.super); break;
      case 'slide': audio.slide(); break;
      case 'lane': audio.lane(); break;
      case 'bump': audio.bump(); break;
      case 'land': if (ev.fall > 0.5) audio.land(); break;
      case 'coin': audio.coin(ev.streak); break;
      case 'power': audio.power(); ui.toast(t(ev.kind)); ui.flash('power'); break;
      case 'key': audio.coin(4); keyBank++; save('keys', keyBank); ui.flash('power'); break;
      case 'board': meta.stock++; saveMeta(meta); audio.coin(3); ui.toast(`${t('board')} +1`, 1000); break;
      case 'fury': audio.boost(); ui.flash('power'); ui.toast(t('fury'), 1200); break;
      case 'furyEnd': break;
      case 'revive': ui.flash('power'); break;
      case 'powerEnd': audio.powerEnd(); break;
      case 'level': audio.level(); ui.toast(t('mult') + ' ×' + ev.mult); break;
      case 'stumble': audio.stumble(); ui.flash('hit'); ui.toast(t('careful'), 1600); break;
      case 'crash': {
        world.arrest();
        ui.hint('');
        audio.crash();
        audio.stopMusic();
        ui.flash('crash');
        const score = Math.floor(sim.score);
        const newBest = score > best;
        if (newBest) { best = score; save('best', best); }
        bank += sim.coins - bankedCoins;
        bankedCoins = sim.coins;
        save('bank', bank);
        ui.result({ score, coins: sim.coins, distance: Math.floor(sim.d), best, newBest, reviveCost: reviveCost(), canRevive: keyBank >= reviveCost() });
        overTimer = 0;
        break;
      }
      case 'hint': {
        const k = ev.hint;
        const key = (k === 'ramp' ? 'hintRamp' : 'hint' + k[0].toUpperCase() + k.slice(1) + (ui.touch ? 'Touch' : 'Keys')) as Key;
        ui.hint(t(key), 2400);
        break;
      }
    }
  }

  // frame time watch: lower the pixel ratio when frames are slow, raise it back when there is room
  let ft = 0, fn = 0, goodFor = 0;
  function watchPerf(dt: number) {
    if (TEST || state !== 'play') return;
    ft += dt; fn++;
    if (fn < 60) return;
    const avg = ft / fn;
    ft = 0; fn = 0;
    if (avg > 1 / 45 && pixelRatio > 0.75) {
      pixelRatio = Math.max(0.75, pixelRatio - 0.25);
      renderer.setPixelRatio(pixelRatio);
      resize();
      goodFor = 0;
    } else if (avg < 1 / 57) {
      goodFor += 1;
      if (goodFor > 5 && pixelRatio < maxPR) {
        pixelRatio = Math.min(maxPR, pixelRatio + 0.25);
        renderer.setPixelRatio(pixelRatio);
        resize();
        goodFor = 0;
      }
    } else goodFor = 0;
  }

  function tick(dt: number, draw = true) {
    checkSize();
    if (state === 'intro') {
      const cue = world.takeIntroCue();
      if (cue === 'spray') audio.spray();
      else if (cue === 'whistle') audio.whistle();
      else if (cue === 'bolt') audio.stumble();
      if (world.introFinished) skipIntro();
    }
    if (state === 'play') sim.update(dt);
    const events = sim.drainEvents();
    for (const ev of events) handle(ev);
    if (state === 'play' && !sim.alive) {
      overTimer += dt;
      if (overTimer > 2.6) { state = 'over'; ui.show('over'); }
    } else if (state === 'over') overTimer += dt;
    if (state === 'play' && sim.d > 260 && !load('tutorialDone', false)) save('tutorialDone', true);
    if (state === 'play' || state === 'pause' || state === 'over') world.player.update(sim, state === 'pause' ? 0 : dt, events);
    world.sync(sim, state === 'pause' ? 0 : dt, state === 'start');
    const st = world.takeStation();
    if (st && state === 'play') {
      ui.station(st.short, st.line, st.color, `SORTIE · LIGNE ${st.line}`);
      audio.chime();
      window.setTimeout(() => { if (state === 'play') audio.announcement(); }, 750);
      window.setTimeout(() => { if (state === 'play') audio.doorBeep(); }, 1600);
    }
    audio.tempo = 108 + (sim.speed - SPEED.start) * 1.6;
    // moving trains: horn once when one is 90 m away, rumble louder as it closes in
    let rumble = 0;
    if (state === 'play' && sim.alive) {
      for (const o of sim.obs) {
        if (o.kind !== 'mtrain' || o.d1 < sim.d) continue;
        const gap = Math.max(0, o.d0 - sim.d);
        if (gap < 130) rumble = Math.max(rumble, 1 - gap / 130);
        if (gap < 90 && !horned.has(o.id)) { horned.add(o.id); audio.horn(); }
      }
      if (horned.size > 50) horned.clear();
    }
    // a train running past the runner
    if (state === 'play' && sim.alive) {
      for (const o of sim.obs) {
        if (o.kind === 'mtrain' && o.d1 < sim.d && !passed.has(o.id)) {
          passed.add(o.id);
          audio.trainPass();
        }
      }
      if (passed.size > 60) passed.clear();
    }
    // platform life: babble, door beeps, a jingle now and then
    if (state === 'play' && sim.alive) {
      ambT -= dt;
      if (ambT <= 0) {
        ambT = 13 + Math.random() * 15;
        const r = Math.random();
        if (r < 0.45) audio.chatter();
        else if (r < 0.75) audio.doorBeep();
        else audio.jingle();
      }
    }
    audio.rumble(rumble);
    ui.hud(Math.floor(sim.score), sim.coins, sim.mult, sim.power, keyBank, meta.stock, sim.furyT > 0 ? sim.furyT / 9 : 0);
    if (draw) renderer.render(world.scene, world.camera);
  }

  toTitle(false);
  boot.set(0.97);
  await nextFrame();
  world.sync(sim, 0, true);
  world.warm(renderer);
  boot.set(1);
  // the opening scene plays first, then the title screen
  world.beginIntro();
  state = 'intro';
  ui.show('intro');
  boot.done();
  if (location.search.includes('debug')) {
    const diag = document.createElement('div');
    diag.style.cssText = 'position:fixed;left:4px;bottom:4px;z-index:99;font:10px monospace;color:#0f0;background:rgba(0,0,0,.6);padding:2px 4px;pointer-events:none';
    document.body.appendChild(diag);
    setInterval(() => {
      const r = canvas.getBoundingClientRect();
      const hud = document.getElementById('hud');
      const left = document.querySelector('.hud-left') as HTMLElement | null;
      const cs = hud ? getComputedStyle(hud) : null;
      const hr = hud ? hud.getBoundingClientRect() : null;
      const lr = left ? left.getBoundingClientRect() : null;
      diag.textContent = `${window.innerWidth}x${window.innerHeight} dpr${(window.devicePixelRatio || 1).toFixed(2)} canvas${Math.round(r.width)}x${Math.round(r.height)} hud[${hud?.className}] op${cs?.opacity} rect${hr ? Math.round(hr.x) + ',' + Math.round(hr.y) + ' ' + Math.round(hr.width) + 'x' + Math.round(hr.height) : '-'} left${lr ? Math.round(lr.x) + ',' + Math.round(lr.y) : '-'}`;
    }, 500);
  }
  setTimeout(resize, 250);
  setTimeout(resize, 1200);
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;

  let last = performance.now();
  const loop = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    tick(dt);
    watchPerf(dt);
    requestAnimationFrame(loop);
  };
  if (!TEST) requestAnimationFrame(loop);
  else renderer.render(world.scene, world.camera);

  const sceneryReady = Promise.resolve(true);

  if (TEST) {
    const ahead = (a: number) => sim.d + a;
    window.__run = {
      ready: true,
      sceneryReady,
      sim, world, renderer, stations,
      start(o: { seed?: number; tutorial?: boolean; noSpawn?: boolean; invincible?: boolean; speed?: number } = {}) {
        sim.noSpawn = !!o.noSpawn;
        sim.invincible = !!o.invincible;
        sim.speedOverride = o.speed || 0;
        sim.reset(o.seed ?? 7, !!o.tutorial);
        world.resetScenery();
        world.fx.clear();
        state = 'start';
        play();
        return sim.snapshot();
      },
      title() { toTitle(true); tick(0); return true; },
      step(sec: number, dt = 1 / 60, draw = false) {
        const n = Math.max(1, Math.round(sec / dt));
        for (let i = 0; i < n; i++) tick(dt, false);
        if (draw) renderer.render(world.scene, world.camera);
        return sim.snapshot();
      },
      /** Step until the runner has reached distance d (or stopped). */
      stepTo(d: number, dt = 1 / 60, draw = false) {
        let guard = 0;
        while (sim.d < d && guard++ < 20000 && state === 'play' && sim.alive) tick(dt, false);
        if (draw) renderer.render(world.scene, world.camera);
        return sim.snapshot();
      },
      render() { renderer.render(world.scene, world.camera); return true; },
      state() { return { screen: state, ...sim.snapshot() }; },
      clear() { sim.clearWorld(); return true; },
      place(kind: ObKind, lane: number, at: number, cars = 1) {
        const d0 = ahead(at);
        const len = kind === 'train' ? trainLength(cars) : kind === 'mtrain' ? trainLength(cars) / (1 + MOVER.ratio) : OB[kind].depth;
        return sim.addOb({ kind, lane, d0, d1: d0 + len, cars }).id;
      },
      coin(lane: number, at: number, y = 0.85) { sim.addCoin(lane, ahead(at), y); return true; },
      power(kind: PowerKind, lane: number, at: number) { sim.addPower(kind, lane, ahead(at), 1.1); return true; },
      input(a: Action) { onAction(a); return true; },
      stats() {
        let objects = 0;
        world.scene.traverse(() => objects++);
        const info = renderer.info;
        return {
          objects, programs: info.programs ? info.programs.length : -1, calls: info.render.calls, triangles: info.render.triangles,
          geometries: info.memory.geometries, textures: info.memory.textures, pixelRatio: renderer.getPixelRatio(), created: sim.created,
        };
      },
      /** A bot that follows the path the solver found, playing the real simulation through real collisions. */
      autopilot(seedN: number, length: number, dt = 1 / 60) {
        sim.noSpawn = true;
        sim.invincible = false;
        sim.speedOverride = 0;
        sim.reset(seedN, false);
        while (sim.track.frontier < length + 50) sim.track.ensure(length + 50);
        const specs: Spec[] = sim.obs.map((o) => Sim.specOf(o));
        const res = solve(specs, 0, sim.track.frontier, [1], speedAt, true, 1);
        if (!res.path) return { ok: false, reason: 'no path' };
        state = 'start';
        play();
        let stumbles = 0, jumps = 0, slides = 0, lanes = 0;
        const STEPLEN = 0.5;
        const pathLane = (d: number) => res.path![Math.max(0, Math.min(res.path!.length - 1, Math.round(d / STEPLEN)))].lane;
        let guard = 0;
        while (sim.d < length && sim.alive && guard++ < 400000) {
          const v = sim.speed;
          const want = pathLane(sim.d + v * 0.1 + 0.6);
          if (want !== sim.lane && sim.laneT >= 1) { (want < sim.lane ? sim.left() : sim.right()); lanes++; }
          for (const o of sim.obs) {
            if (o.lane !== sim.lane && Math.abs(sim.x - laneX(o.lane)) > 0.9) continue;
            const ahead = o.d0 - sim.d;
            if ((o.kind === 'low' || o.kind === 'hurdle') && sim.grounded && ahead > 0 && ahead < v * 0.2 + 0.8) { sim.jump(); jumps++; }
            if (o.kind === 'overhead' && ahead > 0 && ahead < v * 0.1 + 1.0 && !sim.sliding) { sim.down(); slides++; }
          }
          const before = sim.sinceStumble;
          tick(dt, false);
          if (sim.sinceStumble < before) stumbles++;
        }
        const near = sim.alive ? [] : sim.obs.filter((o) => o.d1 > sim.d - 12 && o.d0 < sim.d + 12).map((o) => `${o.kind}:${o.lane}:${o.d0.toFixed(1)}-${o.d1.toFixed(1)}`);
        const pl = sim.alive ? '' : [-10, -8, -6, -4, -2, 0, 2, 4, 6].map((k) => pathLane(sim.d + k) + (res.path![Math.round((sim.d + k) / STEPLEN)]?.top ? 't' : '')).join(',');
        return { ok: sim.alive && sim.d >= length, d: +sim.d.toFixed(1), x: +sim.x.toFixed(2), y: +sim.y.toFixed(2), lane: sim.lane, stumbles, jumps, slides, lanes, alive: sim.alive, near, pl, sliding: sim.sliding };
      },
      /** Build a long map with a fresh simulation and check, apart from the generator's own check, that it can be run through. */
      mapCheck(seedN: number, length: number) {
        const s2 = new Sim(seedN);
        s2.noSpawn = true;
        s2.reset(seedN, false);
        while (s2.track.frontier < length) s2.track.ensure(length);
        const specs: Spec[] = s2.obs.map((o) => Sim.specOf(o));
        const res = solve(specs, 0, s2.track.frontier, [1], speedAt, false);
        const kinds: Record<string, number> = {};
        for (const o of specs) kinds[o.kind] = (kinds[o.kind] || 0) + 1;
        // barriers in one lane never closer together than a jump takes
        let tight = 0;
        for (let l = 0; l < 3; l++) {
          const b = specs.filter((x) => x.lane === l && x.kind !== 'train' && x.kind !== 'ramp' && x.kind !== 'mtrain').sort((a, c) => a.d0 - c.d0);
          for (let i = 1; i < b.length; i++) if (b[i].d0 - b[i - 1].d1 < speedAt(b[i].d0) * 0.7) tight++;
        }
        return { ok: res.ok, failAt: Math.round(res.failAt), near: res.ok ? [] : specs.filter((x) => x.d1 > res.failAt - 30 && x.d0 < res.failAt + 15).map((x) => `${x.kind}:${x.lane}:${x.d0.toFixed(1)}-${x.d1.toFixed(1)}`), length: Math.round(s2.track.frontier), obstacles: specs.length, kinds, chunks: s2.track.chunks, fallbacks: s2.track.failures, tight, coins: s2.coinList.length, powers: s2.powers.length };
      },
    };
  }
}

main().catch((e) => {
  console.error(e);
  boot.fail(t('loadFail'));
});
