// Buildings of the Île-de-France skin. Each kind is one small group of boxes (body + roof + chimneys)
// that Instanced can draw many times; the station zone picks which kinds appear.
import * as THREE from 'three';
import { facadeTexture, SPEC, type FacadeKind } from './france';

export interface BuildingDef {
  kind: FacadeKind;
  variant: number;
  proto: THREE.Object3D;
  len: number;
  depth: number;
  height: number;
}

const DEPTH: Record<FacadeKind, number> = { h5: 12, h4: 10, pav: 8, wh: 13, tower: 16 };

const ZINC = new THREE.MeshLambertMaterial({ color: 0x6f767e });
const SLATE = new THREE.MeshLambertMaterial({ color: 0x4b5158 });
const BRICK = new THREE.MeshLambertMaterial({ color: 0x9d6752 });
const CONCRETE = new THREE.MeshLambertMaterial({ color: 0xb9b3a6 });
const METAL = new THREE.MeshLambertMaterial({ color: 0x59606a });

function mesh(geo: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** A four-sided sloped roof (mansard): square base, smaller square top. */
function mansard(w: number, d: number, h: number, inset: number, mat: THREE.Material) {
  const r = Math.SQRT1_2;
  const g = new THREE.CylinderGeometry(r * (1 - inset), r, h, 4, 1, false, Math.PI / 4);
  g.scale(w, 1, d);
  return mesh(g, mat, 0, h / 2, 0);
}

/** A pyramid roof (the classic pavillon). */
function pyramid(w: number, d: number, h: number, mat: THREE.Material) {
  const g = new THREE.ConeGeometry(Math.SQRT1_2, h, 4, 1, false, Math.PI / 4);
  g.scale(w, 1, d);
  return mesh(g, mat, 0, h / 2, 0);
}

function chimney(w: number, h: number, d: number, x: number, y: number, z: number) {
  return mesh(new THREE.BoxGeometry(w, h, d), BRICK, x, y, z);
}

function make(kind: FacadeKind, variant: number): BuildingDef {
  const s = SPEC[kind];
  const len = s.len;
  const height = s.height;
  const depth = DEPTH[kind];
  const g = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({ map: facadeTexture(kind, variant) });
  g.add(mesh(new THREE.BoxGeometry(len, height, depth), wall, 0, height / 2, 0));

  if (kind === 'h5' || kind === 'h4') {
    const rh = kind === 'h5' ? 2.9 : 2.3;
    g.add(mansard(len + 0.55, depth + 0.55, rh, 0.18, ZINC));
    // dormer windows poking out of the zinc roof
    const n = kind === 'h5' ? 4 : 3;
    for (let i = 0; i < n; i++) {
      const x = -len / 2 + (len / n) * (i + 0.5);
      g.add(mesh(new THREE.BoxGeometry(1.15, 1.2, 0.7), ZINC, x, height + rh * 0.42, depth / 2 - 0.1));
      g.add(mesh(new THREE.BoxGeometry(0.8, 0.85, 0.12), new THREE.MeshLambertMaterial({ color: 0x1e262f }), x, height + rh * 0.42, depth / 2 + 0.27));
    }
    for (let i = 0; i < 3; i++) {
      g.add(chimney(0.75, 1.5, 0.75, -len / 2 + 1.6 + i * (len / 2.6), height + rh + 0.6, (i % 2 ? 1 : -1) * (depth / 2 - 2.4)));
    }
  } else if (kind === 'pav') {
    const rh = 2.7;
    g.add(pyramid(len + 0.7, depth + 0.7, rh, SLATE));
    g.add(chimney(0.7, 1.9, 0.7, len / 2 - 1.4, height + rh * 0.45, -depth / 2 + 1.6));
    // garden wall on the street side
    g.add(mesh(new THREE.BoxGeometry(len, 0.9, 0.35), CONCRETE, 0, 0.45, -depth / 2 - 1.6));
  } else if (kind === 'wh') {
    g.add(mesh(new THREE.BoxGeometry(len + 0.4, 0.5, depth + 0.4), METAL, 0, height + 0.2, 0));
    for (let i = 0; i < 3; i++) {
      g.add(mesh(new THREE.BoxGeometry(len / 4, 0.9, depth / 3), METAL, -len / 3 + i * (len / 3), height + 0.9, 0));
    }
  } else {
    // tower: mechanical floor, antennas
    g.add(mesh(new THREE.BoxGeometry(len + 0.4, 1.2, depth + 0.4), CONCRETE, 0, height + 0.6, 0));
    g.add(mesh(new THREE.BoxGeometry(1.4, 4.5, 1.4), METAL, len / 5, height + 3.4, 0));
    g.add(mesh(new THREE.BoxGeometry(0.2, 5.5, 0.2), METAL, len / 5, height + 6.5, 0));
  }

  return { kind, variant, proto: g, len, depth, height };
}

let cache: BuildingDef[] | null = null;

/** Every building kind, three variants of the houses, one of the rest. */
export function buildings(): BuildingDef[] {
  if (cache) return cache;
  const out: BuildingDef[] = [];
  for (let v = 0; v < 3; v++) out.push(make('h5', v));
  for (let v = 0; v < 3; v++) out.push(make('h4', v));
  for (let v = 0; v < 3; v++) out.push(make('pav', v));
  out.push(make('wh', 0));
  out.push(make('tower', 0));
  cache = out;
  return out;
}

/** A plane tree: trunk, two canopies, planted along the pavement. */
export function treeProto(): { proto: THREE.Object3D; len: number; depth: number } {
  const g = new THREE.Group();
  const bark = new THREE.MeshLambertMaterial({ color: 0x5c4a3a });
  const leaf = new THREE.MeshLambertMaterial({ color: 0x54723c });
  const leaf2 = new THREE.MeshLambertMaterial({ color: 0x678545 });
  g.add(mesh(new THREE.CylinderGeometry(0.16, 0.24, 3.4, 6), bark, 0, 1.7, 0));
  g.add(mesh(new THREE.IcosahedronGeometry(1.32, 0), leaf, 0, 4.5, 0));
  g.add(mesh(new THREE.IcosahedronGeometry(0.95, 0), leaf2, 0.62, 5.25, 0.28));
  g.add(mesh(new THREE.IcosahedronGeometry(0.82, 0), leaf, -0.58, 5.05, -0.3));
  return { proto: g, len: 3.2, depth: 3.2 };
}

/** A bench and a lamp for the platform edge — small life on the pavement. */
export function benchProto(): THREE.Object3D {
  const g = new THREE.Group();
  const wood = new THREE.MeshLambertMaterial({ color: 0x7d5a3a });
  const iron = new THREE.MeshLambertMaterial({ color: 0x2b3138 });
  g.add(mesh(new THREE.BoxGeometry(1.7, 0.1, 0.5), wood, 0, 0.46, 0));
  g.add(mesh(new THREE.BoxGeometry(1.7, 0.5, 0.08), wood, 0, 0.72, 0.22));
  for (const x of [-0.7, 0.7]) g.add(mesh(new THREE.BoxGeometry(0.1, 0.46, 0.45), iron, x, 0.23, 0));
  return g;
}
