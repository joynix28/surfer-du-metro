// Station boards over the tracks: one board per upcoming station, painted with the real name taken from
// the GTFS file. Boards are reused as the runner moves on, so only four textures exist at any time.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Instanced } from './pools';
import { paintSign, SIGN_W, SIGN_H } from './france';
import { stationIndexAt, stations } from '../data/route';

const BOARD_W = 4.6;
const BOARD_H = 1.15;
const SIGN_D = 34; // how far after the station boundary the board stands

interface Slot {
  group: THREE.Group;
  canvas: HTMLCanvasElement;
  g: CanvasRenderingContext2D;
  tex: THREE.CanvasTexture;
  station: number;
}

export class StationSigns {
  private slots: Slot[] = [];
  private gantry: Instanced;
  private posts: THREE.Mesh;
  private m = new THREE.Matrix4();

  constructor(scene: THREE.Scene) {
    const steel = new THREE.MeshLambertMaterial({ color: 0x6d747c });
    // two posts and a top beam, as one geometry so the whole gantry is a single instanced draw
    const g = mergeGeometries([
      new THREE.BoxGeometry(0.16, 7.6, 0.16).translate(-4.3, 3.8, 0),
      new THREE.BoxGeometry(0.16, 7.6, 0.16).translate(4.3, 3.8, 0),
      new THREE.BoxGeometry(8.8, 0.16, 0.16).translate(0, 7.55, 0),
      new THREE.BoxGeometry(8.8, 0.16, 0.16).translate(0, 6.9, 0),
    ])!;
    this.posts = new THREE.Mesh(g, steel);
    this.posts.castShadow = true;
    this.gantry = new Instanced(this.posts, 4, scene, { cast: true, name: 'gantry' });

    for (let i = 0; i < 4; i++) {
      const group = new THREE.Group();
      const canvas = document.createElement('canvas');
      canvas.width = SIGN_W;
      canvas.height = SIGN_H;
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      const mat = new THREE.MeshBasicMaterial({ map: tex });
      const board = new THREE.Mesh(new THREE.PlaneGeometry(BOARD_W, BOARD_H), mat);
      board.position.set(0, 6.85, 0.12);
      group.add(board);
      const back = new THREE.Mesh(new THREE.BoxGeometry(BOARD_W + 0.1, BOARD_H + 0.1, 0.14), new THREE.MeshLambertMaterial({ color: 0x22282f }));
      back.position.set(0, 6.85, 0);
      group.add(back);
      group.visible = false;
      scene.add(group);
      this.slots.push({ group, canvas, g: canvas.getContext('2d') as CanvasRenderingContext2D, tex, station: -1 });
    }
  }

  update(pd: number, zOf: (d: number) => number) {
    const first = stationIndexAt(pd - 40);
    const last = stationIndexAt(pd + 220);
    let used = 0;
    this.gantry.begin();
    for (let i = first; i <= last && used < this.slots.length; i++) {
      const st = stations[i % stations.length];
      const d = st.d0 + SIGN_D;
      const z = zOf(d);
      if (z > 1) continue;
      const slot = this.slots[used++];
      if (slot.station !== i) {
        slot.station = i;
        paintSign(slot.g, st.short, st.line, st.color, `SORTIE · LIGNE ${st.line}`);
        slot.tex.needsUpdate = true;
      }
      slot.group.position.set(0, 0, z);
      slot.group.visible = true;
      this.m.makeTranslation(0, 0, z);
      this.gantry.add(this.m);
    }
    for (let k = used; k < this.slots.length; k++) this.slots[k].group.visible = false;
    this.gantry.end();
  }

  warm(renderer: THREE.WebGLRenderer) {
    for (const s of this.slots) {
      paintSign(s.g, stations[0].short, stations[0].line, stations[0].color, `SORTIE · LIGNE ${stations[0].line}`);
      s.tex.needsUpdate = true;
      renderer.initTexture(s.tex);
      s.group.visible = true;
      s.group.position.set(0, 0, -20);
    }
    this.gantry.begin();
    this.m.makeTranslation(0, 0, -20);
    this.gantry.add(this.m);
    this.gantry.end();
  }
}
