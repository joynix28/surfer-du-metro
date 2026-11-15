// Line-side props: the trains, the barriers and the gantries. All built from primitives, so the game
// needs no 3D model files at all.
import * as THREE from 'three';
import { trainTexture, stripeTexture, graffitiTexture } from './france';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

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
  g.add(mesh(new THREE.BoxGeometry(2.24, 2.42, 6.58), livery, 0, 1.83, 0));
  // rounded roof: an ellipsoid cap that hides the box edge, then the grey roof panel
  const cap = mesh(new THREE.SphereGeometry(1, 18, 8), new THREE.MeshLambertMaterial({ color: variant % 2 ? '#e8ebef' : '#dfe4ea' }), 0, 3.0, 0);
  cap.scale.set(1.13, 0.4, 3.3);
  g.add(cap);
  const roofPanel = mesh(new THREE.SphereGeometry(1, 16, 8), new THREE.MeshLambertMaterial({ color: 0x6e767e }), 0, 3.14, 0);
  roofPanel.scale.set(0.98, 0.22, 3.2);
  g.add(roofPanel);
  // plain end wall at both ends (the nose piece covers the head and tail of the rake)
  for (const s of [-1, 1]) {
    g.add(mesh(new THREE.BoxGeometry(2.24, 2.42, 0.06), new THREE.MeshLambertMaterial({ color: variant % 3 === 1 ? 0xd6dde3 : 0xe3e7ea }), 0, 1.83, s * 3.3));
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
  // a stone band under the deck, spanning the cutting
  g.add(mesh(new THREE.BoxGeometry(17, 0.5, 4.4), dark, 0, 6.1, 0));
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

/** A key pickup: bow, shaft and two teeth, gold, standing up. */
export function keyProto(): THREE.Object3D {
  const g = new THREE.Group();
  const gold = new THREE.MeshLambertMaterial({ color: 0xffd24a, emissive: 0x6b4a00 });
  const bow = mesh(new THREE.TorusGeometry(0.17, 0.055, 8, 16), gold, 0, 0.22, 0);
  g.add(bow);
  g.add(mesh(new THREE.BoxGeometry(0.07, 0.42, 0.07), gold, 0, -0.09, 0));
  g.add(mesh(new THREE.BoxGeometry(0.17, 0.07, 0.07), gold, 0.05, -0.24, 0));
  g.add(mesh(new THREE.BoxGeometry(0.12, 0.07, 0.07), gold, 0.03, -0.34, 0));
  return g;
}

/** The rounded nose of a rake: ellipsoid shell, windscreen, headlights and a lower fairing. */
export function noseProto(variant: number): THREE.Object3D {
  const g = new THREE.Group();
  const live = [0xe9ecef, 0xdfe4e8, 0xf0f2f4][variant % 3];
  const body = new THREE.MeshLambertMaterial({ color: live });
  const dark = new THREE.MeshLambertMaterial({ color: 0x1a222c });
  const shell = mesh(new THREE.SphereGeometry(1, 20, 12), body, 0, 1.82, 0.28);
  shell.scale.set(1.12, 1.2, 0.72);
  g.add(shell);
  // windscreen, raked back
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.66, 0.82), new THREE.MeshLambertMaterial({ color: 0x141d26 }));
  screen.position.set(0, 2.14, 0.86);
  screen.rotation.x = -0.22;
  g.add(screen);
  const visor = mesh(new THREE.BoxGeometry(1.8, 0.08, 0.22), new THREE.MeshLambertMaterial({ color: 0x2f363e }), 0, 2.58, 0.82);
  g.add(visor);
  // destination blind
  const blind = mesh(new THREE.BoxGeometry(1.0, 0.2, 0.06), new THREE.MeshLambertMaterial({ color: 0x0f1720 }), 0, 2.38, 0.9);
  g.add(blind);
  // headlights and marker lights
  for (const x of [-0.66, 0.66]) {
    const lamp = mesh(new THREE.SphereGeometry(0.13, 10, 8), new THREE.MeshLambertMaterial({ color: 0xfff6d8, emissive: 0x6b5a20 }), x, 1.28, 0.86);
    g.add(lamp);
    const bezel = mesh(new THREE.TorusGeometry(0.15, 0.035, 6, 12), dark, x, 1.28, 0.84);
    g.add(bezel);
  }
  // fairing under the nose and the coupler
  g.add(mesh(new THREE.BoxGeometry(1.7, 0.5, 0.7), new THREE.MeshLambertMaterial({ color: 0x2b3138 }), 0, 0.62, 0.62));
  g.add(mesh(new THREE.BoxGeometry(0.5, 0.22, 0.5), new THREE.MeshLambertMaterial({ color: 0x3b424a }), 0, 0.5, 0.95));
  return g;
}

/** A stylised Eiffel Tower, far enough to read as a silhouette above the roofs. */
export function eiffelProto(): THREE.Object3D {
  const parts: THREE.BufferGeometry[] = [];
  const push = (g: THREE.BufferGeometry, x: number, y: number, z: number, ry = 0) => {
    g.rotateY(ry);
    g.translate(x, y, z);
    parts.push(g);
  };
  // four legs, in three tapering sections
  const sections = [
    { y0: 0, y1: 16, a0: 10.5, a1: 7.2 },
    { y0: 16, y1: 34, a0: 7.2, a1: 4.2 },
    { y0: 34, y1: 50, a0: 4.2, a1: 1.8 },
  ];
  for (const sec of sections) {
    const h = sec.y1 - sec.y0;
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const a0 = sec.a0, a1 = sec.a1;
        const box = new THREE.BoxGeometry(1.5, h, 1.5);
        const cx = (sx * (a0 + a1)) / 2;
        const cz = (sz * (a0 + a1)) / 2;
        // lean the leg so the tower tapers: approximate with a shear
        const pos = box.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < pos.count; i++) {
          const t = (pos.getY(i) + h / 2) / h;
          pos.setX(i, pos.getX(i) + (sx * (a1 - a0)) * t * 0.5);
          pos.setZ(i, pos.getZ(i) + (sz * (a1 - a0)) * t * 0.5);
        }
        box.computeVertexNormals();
        push(box, cx, sec.y0 + h / 2, cz);
      }
    }
    // a platform at the top of the section
    const w = sec.a1 * 2.2;
    push(new THREE.BoxGeometry(w, 0.9, w), 0, sec.y1, 0);
  }
  // upper shaft, spire and antenna
  push(new THREE.CylinderGeometry(1.5, 2.6, 12, 8), 0, 56, 0);
  push(new THREE.CylinderGeometry(0.3, 1.4, 8, 8), 0, 66, 0);
  push(new THREE.CylinderGeometry(0.12, 0.3, 6, 6), 0, 73, 0);
  push(new THREE.SphereGeometry(0.5, 8, 6), 0, 76, 0);
  const geo = mergeGeometries(parts)!;
  const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: 0x6a5a48 }));
  m.name = 'eiffel';
  return m;
}
