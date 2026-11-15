// The runner: our own character, built from primitives and animated by hand (no model file, no clips).
// The cop is a static figure placed on the platforms; the one that chases is drawn in the intro.
import * as THREE from 'three';

export type FigureState = 'idle' | 'run' | 'air' | 'slide' | 'stumble' | 'die' | 'spray' | 'cuffed';

const BASE = {
  hoodie: new THREE.MeshLambertMaterial({ color: 0x2e7f8c }),
  hoodieDark: new THREE.MeshLambertMaterial({ color: 0x256a76 }),
  trim: new THREE.MeshLambertMaterial({ color: 0xffcf3f }),
  pants: new THREE.MeshLambertMaterial({ color: 0x333a4a }),
  pantsDark: new THREE.MeshLambertMaterial({ color: 0x272d3a }),
  skin: new THREE.MeshLambertMaterial({ color: 0xe0ac86 }),
  shoe: new THREE.MeshLambertMaterial({ color: 0xf3f3ef }),
  sole: new THREE.MeshLambertMaterial({ color: 0x30353d }),
  bag: new THREE.MeshLambertMaterial({ color: 0xb9862f }),
  cap: new THREE.MeshLambertMaterial({ color: 0xd6543f }),
  capDark: new THREE.MeshLambertMaterial({ color: 0xb8462f }),
  hair: new THREE.MeshLambertMaterial({ color: 0x2a2119 }),
};

function part(geo: THREE.BufferGeometry, mat: THREE.Material): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = false;
  m.frustumCulled = false;
  return m;
}

/** A capsule whose top sits at the group origin and which hangs downwards. */
function limb(r: number, len: number, mat: THREE.Material): THREE.Mesh {
  const g = new THREE.CapsuleGeometry(r, Math.max(0.02, len - r * 2), 3, 8);
  g.translate(0, -len / 2, 0);
  return part(g, mat);
}

export class Figure {
  root = new THREE.Group();
  /** Body tilt (lean into lane changes, fall backwards when caught). */
  tilt = new THREE.Group();
  private hips = new THREE.Group();
  private torso = new THREE.Group();
  private head = new THREE.Group();
  private shoulders: THREE.Group[] = [];
  private elbows: THREE.Group[] = [];
  private legs: THREE.Group[] = [];
  private knees: THREE.Group[] = [];
  private phase = 0;
  private t = 0;
  private hard = 0;
  mats!: Record<string, THREE.MeshLambertMaterial>;
  /** Where the right hand is, so a prop (spray can) can be held. */
  hand = new THREE.Group();

  constructor() {
    // one set of materials per figure, so a character can be recoloured without touching the others
    const M = (this.mats = {
      hoodie: BASE.hoodie.clone(),
      hoodieDark: BASE.hoodieDark.clone(),
      trim: BASE.trim.clone(),
      pants: BASE.pants.clone(),
      pantsDark: BASE.pantsDark.clone(),
      skin: BASE.skin.clone(),
      shoe: BASE.shoe.clone(),
      sole: BASE.sole.clone(),
      bag: BASE.bag.clone(),
      cap: BASE.cap.clone(),
      capDark: BASE.capDark.clone(),
      hair: BASE.hair.clone(),
    });
    const g = this.root;
    g.add(this.tilt);
    this.tilt.add(this.hips);

    const pelvis = part(new THREE.BoxGeometry(0.34, 0.2, 0.24), M.pants);
    pelvis.position.y = 0.02;
    this.hips.add(pelvis);

    this.torso.position.y = 0.08;
    this.hips.add(this.torso);
    const chest = part(new THREE.CapsuleGeometry(0.22, 0.22, 4, 10), M.hoodie);
    chest.scale.set(0.96, 1, 0.72);
    chest.position.y = 0.28;
    this.torso.add(chest);
    const hem = part(new THREE.BoxGeometry(0.38, 0.09, 0.28), M.hoodieDark);
    hem.position.y = 0.06;
    this.torso.add(hem);
    const zip = part(new THREE.BoxGeometry(0.05, 0.42, 0.02), M.trim);
    zip.position.set(0, 0.3, -0.15);
    this.torso.add(zip);
    const pocket = part(new THREE.BoxGeometry(0.2, 0.09, 0.02), M.hoodieDark);
    pocket.position.set(0, 0.14, -0.155);
    this.torso.add(pocket);
    const neck = part(new THREE.CylinderGeometry(0.062, 0.075, 0.09, 8), M.skin);
    neck.position.y = 0.54;
    this.torso.add(neck);
    const shoulders = part(new THREE.BoxGeometry(0.42, 0.13, 0.26), M.hoodie);
    shoulders.position.y = 0.44;
    this.torso.add(shoulders);
    const hood = part(new THREE.SphereGeometry(0.17, 10, 8), M.hoodieDark);
    hood.scale.set(1, 0.8, 0.7);
    hood.position.set(0, 0.5, 0.12);
    this.torso.add(hood);
    const bag = part(new THREE.BoxGeometry(0.26, 0.32, 0.14), M.bag);
    bag.position.set(0, 0.3, 0.21);
    this.torso.add(bag);
    const strap = part(new THREE.BoxGeometry(0.045, 0.3, 0.035), M.trim);
    strap.position.set(0.12, 0.36, 0.13);
    strap.rotation.z = 0.12;
    this.torso.add(strap);
    // the tag on the bag uses the same paint as the intro
    const patch = part(new THREE.BoxGeometry(0.13, 0.09, 0.01), new THREE.MeshLambertMaterial({ color: 0xffcf3f }));
    patch.position.set(-0.06, 0.31, 0.28);
    this.torso.add(patch);

    this.head.position.y = 0.58;
    this.torso.add(this.head);
    const skull = part(new THREE.SphereGeometry(0.148, 12, 10), M.skin);
    skull.position.y = 0.08;
    this.head.add(skull);
    const eyeMat = new THREE.MeshLambertMaterial({ color: 0x181c22 });
    for (const sx of [-0.052, 0.052]) {
      const eye = part(new THREE.SphereGeometry(0.019, 8, 6), eyeMat);
      eye.position.set(sx, 0.085, -0.133);
      this.head.add(eye);
    }
    const hair = part(new THREE.SphereGeometry(0.151, 12, 10), M.hair);
    hair.scale.set(1, 0.72, 1);
    hair.position.set(0, 0.12, 0.02);
    this.head.add(hair);
    const cap = part(new THREE.CylinderGeometry(0.158, 0.152, 0.11, 12), M.cap);
    cap.position.y = 0.17;
    this.head.add(cap);
    const brim = part(new THREE.BoxGeometry(0.27, 0.03, 0.18), M.capDark);
    brim.position.set(0, 0.145, -0.17);
    this.head.add(brim);
    const button = part(new THREE.SphereGeometry(0.022, 6, 5), M.capDark);
    button.position.y = 0.23;
    this.head.add(button);

    for (const side of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.25, 0.47, -0.01);
      this.torso.add(shoulder);
      shoulder.add(limb(0.068, 0.29, M.hoodie));
      const elbow = new THREE.Group();
      elbow.position.y = -0.29;
      shoulder.add(elbow);
      elbow.add(limb(0.058, 0.27, M.hoodieDark));
      elbow.add(part(new THREE.SphereGeometry(0.062, 8, 6), M.hoodieDark));
      const hand = part(new THREE.SphereGeometry(0.062, 8, 6), M.skin);
      hand.position.y = -0.27;
      elbow.add(hand);
      this.shoulders.push(shoulder);
      this.elbows.push(elbow);
      if (side > 0) {
        this.hand.position.y = -0.29;
        elbow.add(this.hand);
      }
    }

    for (const side of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(side * 0.1, -0.02, 0);
      this.hips.add(hip);
      hip.add(limb(0.083, 0.44, M.pants));
      const knee = new THREE.Group();
      knee.position.y = -0.44;
      hip.add(knee);
      knee.add(limb(0.07, 0.42, M.pantsDark));
      knee.add(part(new THREE.SphereGeometry(0.073, 8, 6), M.pantsDark));
      const shoe = part(new THREE.BoxGeometry(0.15, 0.09, 0.29), M.shoe);
      shoe.position.set(0, -0.44, -0.05);
      knee.add(shoe);
      const sole = part(new THREE.BoxGeometry(0.155, 0.03, 0.3), M.sole);
      sole.position.set(0, -0.49, -0.05);
      knee.add(sole);
      this.legs.push(hip);
      this.knees.push(knee);
    }
  }

  /** Recolours this figure (the shop's characters are colour sets). */
  setSkin(s: { hood: string; hoodDark: string; cap: string; capDark: string; pants: string; pantsDark: string; bag: string; skin: string; trim: string }) {
    this.mats.hoodie.color.set(s.hood);
    this.mats.hoodieDark.color.set(s.hoodDark);
    this.mats.trim.color.set(s.trim);
    this.mats.pants.color.set(s.pants);
    this.mats.pantsDark.color.set(s.pantsDark);
    this.mats.bag.color.set(s.bag);
    this.mats.skin.color.set(s.skin);
    this.mats.cap.color.set(s.cap);
    this.mats.capDark.color.set(s.capDark);
  }

  reset() {
    this.root.position.set(0, 0, 0);
    this.root.rotation.set(0, 0, 0);
    this.tilt.rotation.set(0, 0, 0);
    this.phase = 0;
    this.t = 0;
    this.hard = 0;
  }

  /** `dt` seconds, the state of the run, and the speed in m/s. */
  update(dt: number, state: FigureState, speed = 0) {
    this.t += dt;
    const stride = 2.1 + speed * 0.16;
    if (state === 'run') this.phase += dt * Math.min(14, (Math.PI * 2 * speed) / stride);
    else if (state === 'idle') this.phase += dt * 1.2;
    const p = this.phase;
    const [legA, legB] = this.legs;
    const [kneeA, kneeB] = this.knees;
    const [armA, armB] = this.shoulders;
    const [elbA, elbB] = this.elbows;
    let hipY = 0.9;
    let tilt = 0.16;
    let roll = 0;

    if (state === 'run') {
      const s = Math.sin(p), c = Math.cos(p);
      legA.rotation.x = s * 0.92;
      legB.rotation.x = -s * 0.92;
      kneeA.rotation.x = -Math.max(0, c) * 1.5 - 0.12;
      kneeB.rotation.x = -Math.max(0, -c) * 1.5 - 0.12;
      armA.rotation.x = -s * 0.85;
      armB.rotation.x = s * 0.85;
      armA.rotation.z = 0.13;
      armB.rotation.z = -0.13;
      elbA.rotation.x = -0.55 - Math.max(0, -s) * 0.55;
      elbB.rotation.x = -0.55 - Math.max(0, s) * 0.55;
      hipY = 0.9 - Math.abs(s) * 0.02;
      this.hips.position.x = s * 0.014;
      this.torso.rotation.x = 0.16;
      this.torso.rotation.y = s * 0.1;
      this.head.rotation.y = Math.sin(p * 0.5) * 0.1;
      tilt = 0.2;
    } else if (state === 'air') {
      legA.rotation.x = -0.6;
      legB.rotation.x = 0.32;
      kneeA.rotation.x = -1.2;
      kneeB.rotation.x = -0.6;
      armA.rotation.x = -1.6;
      armB.rotation.x = -1.25;
      armA.rotation.z = 0.5;
      armB.rotation.z = -0.5;
      elbA.rotation.x = -0.85;
      elbB.rotation.x = -0.95;
      this.hips.position.x = 0;
      this.torso.rotation.set(0.1, 0, 0);
      this.head.rotation.y = 0;
      tilt = 0.1;
    } else if (state === 'slide') {
      hipY = 0.42;
      legA.rotation.x = -1.3;
      legB.rotation.x = -0.55;
      kneeA.rotation.x = -1.5;
      kneeB.rotation.x = -1.9;
      armA.rotation.x = 0.7;
      armB.rotation.x = -0.5;
      armA.rotation.z = 0.55;
      armB.rotation.z = -0.35;
      elbA.rotation.x = -0.9;
      elbB.rotation.x = -0.6;
      this.hips.position.x = 0;
      this.torso.rotation.set(-0.5, 0, 0);
      this.head.rotation.y = 0;
      tilt = -1.05;
    } else if (state === 'spray') {
      // arm up, can against the wall, weight on one leg
      legA.rotation.x = 0.12;
      legB.rotation.x = -0.16;
      kneeA.rotation.x = -0.1;
      kneeB.rotation.x = -0.24;
      armA.rotation.x = 0.1;
      armA.rotation.z = 0.16;
      armB.rotation.x = -2.35 + Math.sin(this.t * 6.5) * 0.1;
      armB.rotation.z = -0.28;
      elbA.rotation.x = -0.3;
      elbB.rotation.x = -0.28;
      hipY = 0.9 + Math.sin(this.t * 6.5) * 0.008;
      this.hips.position.x = 0;
      this.torso.rotation.set(0.06, -0.16, 0);
      this.head.rotation.y = -0.22;
      tilt = 0.03;
    } else if (state === 'cuffed') {
      // hands behind the back, head down, caught
      legA.rotation.x = 0.06;
      legB.rotation.x = -0.06;
      kneeA.rotation.x = -0.08;
      kneeB.rotation.x = -0.1;
      armA.rotation.x = 0.95;
      armB.rotation.x = 0.95;
      armA.rotation.z = -0.5;
      armB.rotation.z = 0.5;
      elbA.rotation.x = -1.5;
      elbB.rotation.x = -1.5;
      hipY = 0.88;
      this.hips.position.x = 0;
      this.torso.rotation.set(0.16, 0, 0);
      this.head.rotation.y = 0;
      tilt = 0.1;
    } else if (state === 'stumble') {
      this.hard = 0.5;
      legA.rotation.x = 0.5;
      legB.rotation.x = -0.4;
      kneeA.rotation.x = -0.7;
      kneeB.rotation.x = -0.95;
      armA.rotation.x = -2.2;
      armB.rotation.x = -1.95;
      armA.rotation.z = 0.95;
      armB.rotation.z = -0.95;
      elbA.rotation.x = -0.4;
      elbB.rotation.x = -0.5;
      this.hips.position.x = 0;
      this.torso.rotation.set(0.02, 0, 0);
      this.head.rotation.y = 0;
      tilt = 0.05;
      roll = Math.sin(this.t * 18) * 0.18;
    } else if (state === 'die') {
      this.hard = 1.2;
      legA.rotation.x = 0.45;
      legB.rotation.x = -0.1;
      kneeA.rotation.x = -0.65;
      kneeB.rotation.x = -0.3;
      armA.rotation.x = -2.4;
      armB.rotation.x = -2.15;
      armA.rotation.z = 0.85;
      armB.rotation.z = -0.85;
      hipY = 0.55;
      this.hips.position.x = 0;
      this.torso.rotation.set(-0.25, 0, 0);
      this.head.rotation.y = 0.3;
      tilt = -0.85;
    } else {
      const b = Math.sin(this.t * 1.6);
      legA.rotation.x = 0.05;
      legB.rotation.x = -0.05;
      kneeA.rotation.x = -0.06;
      kneeB.rotation.x = -0.06;
      armA.rotation.x = 0.06 + b * 0.03;
      armB.rotation.x = 0.04 - b * 0.03;
      armA.rotation.z = 0.15;
      armB.rotation.z = -0.15;
      elbA.rotation.x = -0.3;
      elbB.rotation.x = -0.28;
      hipY = 0.9 + b * 0.008;
      this.hips.position.x = 0;
      this.torso.rotation.set(0.03 + b * 0.01, 0, 0);
      this.head.rotation.y = Math.sin(this.t * 0.5) * 0.18;
      tilt = 0.02;
    }

    const k = this.hard > 0 ? 1 : Math.min(1, dt * 14);
    this.hard = Math.max(0, this.hard - dt);
    this.hips.position.y += (hipY - this.hips.position.y) * k;
    this.tilt.rotation.x += (tilt - this.tilt.rotation.x) * k;
    this.tilt.rotation.z += (roll - this.tilt.rotation.z) * Math.min(1, dt * 16);
  }
}

/** A police officer standing on the platform, hands behind the back. */
export function copProto(): THREE.Object3D {
  const g = new THREE.Group();
  const navy = new THREE.MeshLambertMaterial({ color: 0x1c2c4c });
  const navy2 = new THREE.MeshLambertMaterial({ color: 0x24385e });
  const white = new THREE.MeshLambertMaterial({ color: 0xe9edf2 });
  const dark = new THREE.MeshLambertMaterial({ color: 0x151b26 });
  const skin = new THREE.MeshLambertMaterial({ color: 0xd9a179 });

  for (const x of [-0.11, 0.11]) {
    const leg = part(new THREE.BoxGeometry(0.17, 0.78, 0.2), navy);
    leg.position.set(x, 0.39, 0);
    g.add(leg);
    const shoe = part(new THREE.BoxGeometry(0.18, 0.1, 0.3), dark);
    shoe.position.set(x, 0.05, -0.04);
    g.add(shoe);
  }
  const body = part(new THREE.CapsuleGeometry(0.23, 0.4, 4, 10), navy);
  body.scale.set(1, 1, 0.68);
  body.position.y = 1.12;
  g.add(body);
  const band = part(new THREE.CylinderGeometry(0.235, 0.235, 0.09, 12), white);
  band.scale.set(1, 1, 0.7);
  band.position.y = 1.18;
  g.add(band);
  for (const side of [-1, 1]) {
    const arm = part(new THREE.CapsuleGeometry(0.075, 0.35, 3, 8), navy2);
    arm.position.set(side * 0.28, 1.1, 0.02);
    arm.rotation.z = side * 0.16;
    g.add(arm);
  }
  const head = part(new THREE.SphereGeometry(0.13, 12, 10), skin);
  head.position.y = 1.55;
  g.add(head);
  const kepi = part(new THREE.CylinderGeometry(0.155, 0.145, 0.16, 12), navy);
  kepi.position.y = 1.68;
  g.add(kepi);
  const brim = part(new THREE.BoxGeometry(0.28, 0.03, 0.16), dark);
  brim.position.set(0, 1.61, -0.15);
  g.add(brim);
  const badge = part(new THREE.CylinderGeometry(0.045, 0.045, 0.02, 8), white);
  badge.rotation.x = Math.PI / 2;
  badge.position.set(0, 1.66, -0.15);
  g.add(badge);
  const cord = part(new THREE.BoxGeometry(0.02, 0.24, 0.02), white);
  cord.position.set(0.08, 1.32, -0.12);
  g.add(cord);
  const whistle = part(new THREE.CylinderGeometry(0.035, 0.035, 0.1, 8), white);
  whistle.rotation.x = Math.PI / 2;
  whistle.position.set(0.08, 1.2, -0.14);
  g.add(whistle);
  return g;
}
