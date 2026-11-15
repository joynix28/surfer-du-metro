// Line-side props: the trains, the barriers and the gantries. All built from primitives, so the game
// needs no 3D model files at all.
import * as THREE from 'three';
import { trainTexture, cabTexture, stripeTexture, graffitiTexture } from './france';

const ZINC = new THREE.MeshLambertMaterial({ color: 0x707880 });
const DARK = new THREE.MeshLambertMaterial({ color: 0x272c33 });
const STEEL = new THREE.MeshLambertMaterial({ color: 0x8b939c });
const BLUE = new THREE.MeshLambertMaterial({ color: 0x2f5fae });
const WHITE = new THREE.MeshLambertMaterial({ color: 0xf2f2ee });
const PLUM = new THREE.MeshLambertMaterial({ color: 0x6c4b9e });

function mesh(geo: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** One car, 6.6 m of body inside the 6.74 m collision box. */
export function trainProto(variant: number): THREE.Object3D {
  const g = new THREE.Group();
  const livery = new THREE.MeshLambertMaterial({ map: trainTexture(variant) });
  const cab = new THREE.MeshLambertMaterial({ map: cabTexture() });
  g.add(mesh(new THREE.BoxGeometry(2.24, 2.42, 6.58), livery, 0, 1.83, 0));
  // rounded roof: an ellipsoid cap that hides the box edge, then the grey roof panel
  const cap = mesh(new THREE.SphereGeometry(1, 18, 8), new THREE.MeshLambertMaterial({ color: variant % 2 ? '#e8ebef' : '#dfe4ea' }), 0, 3.0, 0);
  cap.scale.set(1.13, 0.4, 3.3);
  g.add(cap);
  const roofPanel = mesh(new THREE.SphereGeometry(1, 16, 8), new THREE.MeshLambertMaterial({ color: 0x6e767e }), 0, 3.14, 0);
  roofPanel.scale.set(0.98, 0.22, 3.2);
  g.add(roofPanel);
  // cab ends (hidden between cars, visible at the head and tail of a rake)
  for (const s of [-1, 1]) {
    const end = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.4), cab);
    end.position.set(0, 1.83, s * 3.295);
    if (s < 0) end.rotation.y = Math.PI;
    end.castShadow = false;
    g.add(end);
    // visor over the windscreen and the coupler under it
    const visor = mesh(new THREE.BoxGeometry(2.26, 0.1, 0.26), ZINC, 0, 2.92, s * 3.33);
    g.add(visor);
    const nose = mesh(new THREE.BoxGeometry(1.0, 0.34, 0.2), DARK, 0, 0.72, s * 3.34);
    g.add(nose);
  }
  g.add(mesh(new THREE.BoxGeometry(2.06, 0.26, 6.3), ZINC, 0, 3.17, 0));
  g.add(mesh(new THREE.BoxGeometry(0.9, 0.12, 1.2), new THREE.MeshLambertMaterial({ color: 0x4c535c }), 0, 3.34, 0.4));
  // pantograph, folded
  g.add(mesh(new THREE.BoxGeometry(1.0, 0.06, 0.06), STEEL, 0, 3.5, -1.4));
  g.add(mesh(new THREE.BoxGeometry(0.06, 0.5, 0.06), STEEL, 0.3, 3.28, -1.4));
  g.add(mesh(new THREE.BoxGeometry(0.06, 0.5, 0.06), STEEL, -0.3, 3.28, -1.4));
  // underframe and bogies
  g.add(mesh(new THREE.BoxGeometry(1.96, 0.5, 5.9), DARK, 0, 0.5, 0));
  for (const z of [-2.05, 2.05]) {
    g.add(mesh(new THREE.BoxGeometry(1.8, 0.42, 1.5), DARK, 0, 0.33, z));
    for (const x of [-0.92, 0.92]) {
      const w = mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.16, 12), STEEL, x, 0.42, z);
      w.rotation.z = Math.PI / 2;
      g.add(w);
    }
  }
  return g;
}

/** Red and white works barrier with blue ball finials — the one that always blocks the pavement. */
export function lowBarrierProto(): THREE.Object3D {
  const g = new THREE.Group();
  const striped = new THREE.MeshLambertMaterial({ map: stripeTexture('#e9e6e0', '#c4382f') });
  for (const x of [-1.02, 1.02]) {
    g.add(mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.98, 8), WHITE, x, 0.49, 0));
    g.add(mesh(new THREE.SphereGeometry(0.11, 10, 8), BLUE, x, 1.04, 0));
  }
  for (const y of [0.44, 0.76]) {
    const plank = mesh(new THREE.BoxGeometry(2.06, 0.21, 0.08), striped, 0, y, 0);
    g.add(plank);
  }
  g.add(mesh(new THREE.BoxGeometry(0.08, 0.08, 0.5), STEEL, -1.02, 0.12, 0));
  g.add(mesh(new THREE.BoxGeometry(0.08, 0.08, 0.5), STEEL, 1.02, 0.12, 0));
  return g;
}

/** Metal crowd barrier: jump over it, its top bar sits at 1.25 m. */
export function hurdleProto(): THREE.Object3D {
  const g = new THREE.Group();
  const striped = new THREE.MeshLambertMaterial({ map: stripeTexture('#f0eee8', '#c4382f') });
  for (const x of [-1.05, 1.05]) g.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.22, 8), STEEL, x, 0.61, 0));
  g.add(mesh(new THREE.BoxGeometry(2.16, 0.14, 0.09), striped, 0, 1.2, 0));
  g.add(mesh(new THREE.BoxGeometry(2.1, 0.06, 0.06), STEEL, 0, 0.55, 0));
  for (let i = -4; i <= 4; i++) g.add(mesh(new THREE.BoxGeometry(0.04, 0.62, 0.04), STEEL, i * 0.22, 0.86, 0));
  for (const x of [-1.05, 1.05]) {
    g.add(mesh(new THREE.BoxGeometry(0.08, 0.08, 0.45), STEEL, x, 0.04, 0));
    g.add(mesh(new THREE.SphereGeometry(0.08, 8, 6), BLUE, x, 1.28, 0));
  }
  return g;
}

/** A gantry with a yellow exit sign: roll under it. */
export function overheadProto(): THREE.Object3D {
  const g = new THREE.Group();
  const sign = new THREE.MeshLambertMaterial({ map: exitTexture() });
  for (const x of [-1.18, 1.18]) {
    g.add(mesh(new THREE.BoxGeometry(0.12, 2.6, 0.12), STEEL, x, 1.3, 0));
    g.add(mesh(new THREE.BoxGeometry(0.4, 0.08, 0.4), STEEL, x, 0.04, 0));
  }
  g.add(mesh(new THREE.BoxGeometry(2.6, 0.16, 0.16), STEEL, 0, 2.62, 0));
  const board = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 0.62), sign);
  board.position.set(0, 2.2, 0.09);
  board.castShadow = true;
  g.add(board);
  const back = mesh(new THREE.BoxGeometry(2.16, 0.68, 0.08), DARK, 0, 2.2, 0);
  g.add(back);
  return g;
}

function exitTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 152;
  const g = c.getContext('2d') as CanvasRenderingContext2D;
  g.fillStyle = '#f2c230';
  g.fillRect(0, 0, 512, 152);
  g.fillStyle = '#1b1f26';
  g.fillRect(6, 6, 500, 140);
  g.fillStyle = '#f2c230';
  g.font = '800 74px "DejaVu Sans", system-ui, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('SORTIE →', 256, 80);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/** The coin is a metro token: a gold disc with a hole, standing upright. */
export function tokenProto(): THREE.Object3D {
  const g = new THREE.Group();
  const gold = new THREE.MeshLambertMaterial({ color: 0xffc94a, emissive: 0x6b4300 });
  const ring = mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.06, 20), gold, 0, 0, 0);
  ring.rotation.x = Math.PI / 2;
  g.add(ring);
  const hole = mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.08, 14), new THREE.MeshLambertMaterial({ color: 0x101010 }), 0, 0, 0);
  hole.rotation.x = Math.PI / 2;
  g.add(hole);
  const notch = mesh(new THREE.BoxGeometry(0.08, 0.16, 0.07), PLUM, 0, 0.22, 0);
  g.add(notch);
  return g;
}

/** A hoarding along the tracks, covered in tags. */
export function graffitiProto(variant: number): THREE.Object3D {
  const g = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({ map: graffitiTexture(variant) });
  const body = mesh(new THREE.BoxGeometry(7.2, 2.6, 0.24), wall, 0, 1.3, 0);
  g.add(body);
  g.add(mesh(new THREE.BoxGeometry(7.4, 0.14, 0.4), DARK, 0, 2.66, 0));
  for (const x of [-3.3, 3.3]) g.add(mesh(new THREE.BoxGeometry(0.14, 2.7, 0.4), STEEL, x, 1.35, 0.16));
  return g;
}

/** Platform canopy: roof slab, fascia and posts on the track side. */
export function canopyProto(): THREE.Object3D {
  const g = new THREE.Group();
  const roof = new THREE.MeshLambertMaterial({ color: 0x3d454e });
  const light = new THREE.MeshLambertMaterial({ color: 0xe8e3d4 });
  g.add(mesh(new THREE.BoxGeometry(3.6, 0.18, 26), roof, 0, 4.25, 0));
  g.add(mesh(new THREE.BoxGeometry(0.16, 0.55, 26), light, -1.75, 3.95, 0));
  g.add(mesh(new THREE.BoxGeometry(3.6, 0.1, 26), new THREE.MeshLambertMaterial({ color: 0xf0d24a }), -1.7, 3.68, 0));
  for (const z of [-11, 0, 11]) {
    g.add(mesh(new THREE.BoxGeometry(0.12, 4.2, 0.12), roof, -1.55, 2.1, z));
    g.add(mesh(new THREE.BoxGeometry(0.3, 0.1, 0.3), DARK, -1.55, 0.05, z));
  }
  return g;
}

/** A stone road bridge over the line, for the riverside stretches. */
export function bridgeProto(): THREE.Object3D {
  const g = new THREE.Group();
  const stone = new THREE.MeshLambertMaterial({ color: 0xa8a091 });
  const dark = new THREE.MeshLambertMaterial({ color: 0x7d7568 });
  // abutments on both sides of the cutting
  for (const side of [-1, 1]) {
    const wall = mesh(new THREE.BoxGeometry(1.6, 6.4, 5), stone, side * 8.4, 3.2, 0);
    g.add(wall);
    g.add(mesh(new THREE.BoxGeometry(2.0, 0.2, 5.2), dark, side * 8.4, 6.5, 0));
  }
  // deck and parapets
  g.add(mesh(new THREE.BoxGeometry(18, 1.2, 5), stone, 0, 6.9, 0));
  for (const z of [-2.3, 2.3]) {
    g.add(mesh(new THREE.BoxGeometry(18, 0.75, 0.35), dark, 0, 7.85, z));
  }
  // an arch under the deck, so the bridge reads as an arch from the track
  const arch = new THREE.Mesh(new THREE.TorusGeometry(4.6, 0.42, 6, 16, Math.PI), stone);
  arch.rotation.set(0, Math.PI / 2, Math.PI);
  arch.position.set(0, 6.2, 0);
  arch.castShadow = true;
  g.add(arch);
  return g;
}

/** A Guimard-style metro entrance on the Paris pavement. */
export function ediculeProto(): THREE.Object3D {
  const g = new THREE.Group();
  const green = new THREE.MeshLambertMaterial({ color: 0x2f5d43 });
  const gold = new THREE.MeshLambertMaterial({ color: 0xd9c26a });
  g.add(mesh(new THREE.BoxGeometry(2.2, 0.24, 1.5), new THREE.MeshLambertMaterial({ color: 0x8c8478 }), 0, 0.12, 0));
  for (const x of [-0.9, 0.9]) {
    const post = mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.2, 8), green, x, 1.22, 0);
    g.add(post);
    const lamp = mesh(new THREE.SphereGeometry(0.14, 8, 6), new THREE.MeshLambertMaterial({ color: 0xffd977, emissive: 0x6b5320 }), x, 2.4, 0);
    g.add(lamp);
  }
  const sign = mesh(new THREE.BoxGeometry(2.3, 0.55, 0.16), green, 0, 2.55, 0);
  g.add(sign);
  const letters = mesh(new THREE.BoxGeometry(1.5, 0.16, 0.18), gold, 0, 2.55, -0.02);
  g.add(letters);
  return g;
}
