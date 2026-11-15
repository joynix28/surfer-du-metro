// The runner in the scene: our own figure, its state driven by the simulation, plus lean and turn.
import * as THREE from 'three';
import type { Sim } from '../sim/sim';
import type { SimEvent } from '../sim/types';
import { laneX } from '../config';
import { Figure, type FigureState } from './figures';

const UNIT = new THREE.Vector3(1, 1, 1);

export class PlayerView {
  root = new THREE.Group();
  figure = new Figure();
  private lean = 0;
  private leanV = 0;
  private yaw = 0;
  private yawV = 0;
  private stumbleT = 0;
  private menuT = 0;

  constructor(scene: THREE.Scene) {
    this.root.add(this.figure.root);
    this.figure.root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) m.frustumCulled = false;
    });
    scene.add(this.root);
  }

  private spring(dt: number, target: number, k: 'lean' | 'yaw', kv: 'leanV' | 'yawV', stiff: number, damp: number) {
    const c = 2 * Math.sqrt(stiff) * damp;
    let t = Math.min(dt, 0.05);
    while (t > 0) {
      const h = Math.min(t, 1 / 120);
      this[kv] += (stiff * (target - this[k]) - c * this[kv]) * h;
      this[k] += this[kv] * h;
      t -= h;
    }
  }

  reset() {
    this.lean = 0;
    this.leanV = 0;
    this.yaw = 0;
    this.yawV = 0;
    this.stumbleT = 0;
    this.root.scale.set(1, 1, 1);
    this.root.rotation.set(0, 0, 0);
    this.figure.reset();
  }

  menu(dt: number) {
    this.menuT += dt;
    this.figure.update(dt, 'idle');
    this.root.position.set(0, 0, 0);
    this.root.rotation.set(0, Math.sin(this.menuT * 0.4) * 0.25, 0);
  }

  update(sim: Sim, dt: number, events: SimEvent[]) {
    this.root.rotation.y = 0;
    for (const e of events) {
      if (e.type === 'land') {
        // small squash on landing
        this.root.scale.set(1.06, 0.94, 1.06);
      } else if (e.type === 'stumble') {
        this.stumbleT = 0.55;
      }
    }
    this.stumbleT = Math.max(0, this.stumbleT - dt);
    this.root.scale.lerp(UNIT, Math.min(1, dt * 8));

    let state: FigureState = 'run';
    if (!sim.alive) state = 'die';
    else if (this.stumbleT > 0) state = 'stumble';
    else if (sim.sliding) state = 'slide';
    else if (!sim.grounded) state = 'air';
    this.figure.update(dt, state, sim.speed);

    // lane changes: lean and turn toward where we are going, on damped springs
    const toGo = laneX(sim.lane) - sim.x;
    const dir = sim.alive && Math.abs(toGo) > 0.35 ? Math.sign(toGo) : 0;
    const air = sim.grounded ? 1 : 0.6;
    this.spring(dt, dir * air, 'lean', 'leanV', 700, 0.7);
    this.spring(dt, dir * 0.4 * air, 'yaw', 'yawV', 1000, 0.62);
    this.root.position.set(sim.x, sim.y, 0);
    this.root.rotation.z = -this.lean * 0.18;
    this.figure.root.rotation.y = -this.yaw;
  }
}
