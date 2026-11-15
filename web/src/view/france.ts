// Painted textures for the Île-de-France skin: Haussmann stone, brick, glass towers, train liveries,
// station signs and water. Everything is drawn on a canvas at start-up, so the game ships no image files.
import * as THREE from 'three';
import { LINE, LINE_COLOR } from '../data/route';

function canvas(w: number, h: number) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return { c, g: c.getContext('2d') as CanvasRenderingContext2D };
}
function texture(c: HTMLCanvasElement, repeat = false) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}
function seeded(seed: number) {
  let s = (seed * 2654435761) % 2147483647 || 1;
  return () => ((s = (s * 16807) % 2147483647) / 2147483647);
}
const FONT = '"DejaVu Sans", "Roboto", system-ui, -apple-system, sans-serif';

export type FacadeKind = 'h5' | 'h4' | 'pav' | 'wh' | 'tower';

export const SPEC: Record<FacadeKind, { len: number; height: number; floors: number; cols: number; shop: boolean; stone: string; trim: string; balcony: number[] }> = {
  h5: { len: 15, height: 20.5, floors: 6, cols: 5, shop: true, stone: '#d7d0c2', trim: '#eee8db', balcony: [1, 4] },
  h4: { len: 12, height: 15.5, floors: 5, cols: 4, shop: true, stone: '#cfc8b8', trim: '#eae3d4', balcony: [1] },
  pav: { len: 9, height: 6.2, floors: 2, cols: 3, shop: false, stone: '#e0d8c6', trim: '#f6efe0', balcony: [] },
  wh: { len: 18, height: 9, floors: 3, cols: 6, shop: false, stone: '#a46b55', trim: '#c08a72', balcony: [] },
  tower: { len: 16, height: 46, floors: 14, cols: 5, shop: false, stone: '#5b7c8f', trim: '#7e9dad', balcony: [] },
};

const SHOPS = ['CAFÉ', 'TABAC', 'BOULANGERIE', 'PHARMACIE', 'HÔTEL', 'BRASSERIE'];
const AWNING = ['#8c2f36', '#1e5a3f', '#2b4a7a', '#8a5a1e'];

/** One facade, from the pavement to the cornice, drawn at the right proportions for its building. */
export function facadeTexture(kind: FacadeKind, variant: number): THREE.CanvasTexture {
  const s = SPEC[kind];
  const W = kind === 'tower' ? 512 : 448;
  const H = Math.round((W * s.height) / s.len);
  const { c, g } = canvas(W, H);
  const rnd = seeded(variant * 7919 + kind.charCodeAt(0) * 131 + kind.length);
  const ppm = W / s.len;

  // ---- masonry base -------------------------------------------------------
  g.fillStyle = s.stone;
  g.fillRect(0, 0, W, H);
  if (kind === 'wh') {
    // brick: courses every 0.28 m, with mortar lines
    const bh = Math.max(4, 0.28 * ppm);
    for (let y = 0; y < H; y += bh) {
      g.fillStyle = `rgba(0,0,0,${0.03 + rnd() * 0.05})`;
      g.fillRect(0, y, W, 1.5);
      for (let x = (y / bh) % 2 ? bh : 0; x < W; x += bh * 2.1) {
        g.fillStyle = `rgba(255,240,225,${0.03 + rnd() * 0.07})`;
        g.fillRect(x, y, bh * 0.9, bh - 1.5);
      }
    }
  } else if (kind === 'tower') {
    const gr = g.createLinearGradient(0, 0, W, H);
    gr.addColorStop(0, '#6f93a6');
    gr.addColorStop(0.45, '#3d5a6b');
    gr.addColorStop(1, '#557c90');
    g.fillStyle = gr;
    g.fillRect(0, 0, W, H);
  } else {
    // limestone: light grain, faint joints, weathering streaks
    for (let i = 0; i < 1400; i++) {
      g.fillStyle = `rgba(${rnd() > 0.5 ? '255,250,238' : '90,78,60'},${0.02 + rnd() * 0.06})`;
      g.fillRect(rnd() * W, rnd() * H, 2 + rnd() * 5, 2 + rnd() * 16);
    }
    const course = 0.55 * ppm;
    for (let y = 0; y < H; y += course) {
      g.fillStyle = 'rgba(120,105,84,0.13)';
      g.fillRect(0, y, W, 1);
    }
    for (let i = 0; i < 26; i++) {
      const x = rnd() * W;
      const grd = g.createLinearGradient(0, 0, 0, H);
      grd.addColorStop(0, 'rgba(64,58,48,0)');
      grd.addColorStop(1, `rgba(64,58,48,${0.04 + rnd() * 0.06})`);
      g.fillStyle = grd;
      g.fillRect(x, rnd() * H * 0.4, 2 + rnd() * 8, H);
    }
  }

  if (kind === 'tower') return texture(c);

  const shopH = s.shop ? 4.2 : 0;
  const floorH = (s.height - shopH) / s.floors;
  // ---- floors -------------------------------------------------------------
  for (let f = 0; f < s.floors; f++) {
    const yTop = H - (shopH + (f + 1) * floorH) * ppm;
    const yBot = H - (shopH + f * floorH) * ppm;
    // cornice line between floors
    g.fillStyle = s.trim;
    g.fillRect(0, yBot - 3, W, 5);
    g.fillStyle = 'rgba(70,60,46,0.18)';
    g.fillRect(0, yBot + 2, W, 3);

    const ww = (kind === 'pav' ? 1.05 : 1.2) * ppm;
    const wh = (kind === 'pav' ? 1.35 : 1.95) * ppm;
    const slot = W / s.cols;
    for (let i = 0; i < s.cols; i++) {
      const cx = slot * (i + 0.5);
      const x = cx - ww / 2;
      const y = yTop + (floorH * ppm - wh) * 0.55;
      // surround
      g.fillStyle = s.trim;
      g.fillRect(x - 4, y - 5, ww + 8, wh + 9);
      // glass
      const gr = g.createLinearGradient(0, y, 0, y + wh);
      gr.addColorStop(0, '#283543');
      gr.addColorStop(0.55, '#41556a');
      gr.addColorStop(1, '#5b7288');
      g.fillStyle = gr;
      g.fillRect(x, y, ww, wh);
      // mullions + reflection
      g.fillStyle = 'rgba(18,24,32,0.85)';
      g.fillRect(x + ww / 2 - 1.5, y, 3, wh);
      g.fillRect(x, y + wh * 0.52, ww, 2.5);
      g.fillStyle = 'rgba(255,255,255,0.16)';
      g.beginPath();
      g.moveTo(x + ww * 0.12, y + wh);
      g.lineTo(x + ww * 0.55, y);
      g.lineTo(x + ww * 0.78, y);
      g.lineTo(x + ww * 0.34, y + wh);
      g.closePath();
      g.fill();
      // shutters on the suburban houses
      if (kind === 'pav' && rnd() > 0.25) {
        g.fillStyle = variant % 2 ? '#7d94a6' : '#8d7f6a';
        g.fillRect(x - ww * 0.36, y - 3, ww * 0.3, wh + 6);
        g.fillRect(x + ww + ww * 0.06, y - 3, ww * 0.3, wh + 6);
        g.strokeStyle = 'rgba(0,0,0,0.25)';
        g.lineWidth = 1.5;
        for (let k = 1; k < 7; k++) {
          g.beginPath();
          g.moveTo(x - ww * 0.36, y + (wh / 7) * k);
          g.lineTo(x - ww * 0.06, y + (wh / 7) * k);
          g.moveTo(x + ww + ww * 0.06, y + (wh / 7) * k);
          g.lineTo(x + ww + ww * 0.36, y + (wh / 7) * k);
          g.stroke();
        }
      }
      // curtain
      if (rnd() > 0.62) {
        g.fillStyle = 'rgba(240,232,214,0.55)';
        g.fillRect(x, y, ww, wh * 0.3);
      }
    }
    // balcony: cast-iron railing across the facade, with flower boxes
    if (s.balcony.includes(f)) {
      const bh = 0.85 * ppm;
      const by = yBot - bh;
      g.fillStyle = 'rgba(40,36,30,0.18)';
      g.fillRect(0, yBot - 2, W, 6);
      g.fillStyle = '#2c2f33';
      g.fillRect(0, by + bh - 4, W, 6);
      g.fillRect(0, by, W, 4);
      g.strokeStyle = 'rgba(44,47,51,0.9)';
      g.lineWidth = 2;
      for (let x = 6; x < W; x += 11) {
        g.beginPath();
        g.moveTo(x, by + 3);
        g.lineTo(x, by + bh - 3);
        g.stroke();
      }
      for (let i = 0; i < 4; i++) {
        const bx = W * (0.16 + i * 0.23);
        g.fillStyle = '#3d5033';
        g.fillRect(bx, by + bh - 12, 24, 9);
        g.fillStyle = '#b8433f';
        for (let k = 0; k < 5; k++) g.fillRect(bx + 3 + k * 4, by + bh - 16 - (k % 2) * 3, 4, 5);
      }
    }
  }

  // ---- ground floor -------------------------------------------------------
  if (s.shop) {
    const gy = H - shopH * ppm;
    g.fillStyle = variant % 2 ? '#cfc0a6' : '#c9b99e';
    g.fillRect(0, gy, W, shopH * ppm);
    const awning = AWNING[variant % AWNING.length];
    const shops = 2;
    for (let i = 0; i < shops; i++) {
      const x = (W / shops) * i + 10;
      const w = W / shops - 20;
      // window + door
      g.fillStyle = '#1b232c';
      g.fillRect(x, gy + 0.9 * ppm, w, shopH * ppm - 1.35 * ppm);
      g.fillStyle = 'rgba(160,190,210,0.18)';
      g.fillRect(x + 6, gy + 1.0 * ppm, w * 0.42, shopH * ppm - 1.6 * ppm);
      // awning
      const ah = 0.62 * ppm;
      g.fillStyle = awning;
      g.fillRect(x - 4, gy + 0.28 * ppm, w + 8, ah);
      g.fillStyle = 'rgba(255,255,255,0.28)';
      for (let k = 0; k < w; k += 22) g.fillRect(x - 4 + k, gy + 0.28 * ppm, 11, ah);
      g.fillStyle = 'rgba(0,0,0,0.22)';
      g.fillRect(x - 4, gy + 0.28 * ppm + ah, w + 8, 5);
      // sign band
      g.fillStyle = '#20262e';
      g.fillRect(x - 4, gy - 0.34 * ppm, w + 8, 0.6 * ppm);
      g.fillStyle = '#f0d79a';
      g.font = `700 ${Math.round(0.3 * ppm)}px ${FONT}`;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(SHOPS[(variant + i * 3) % SHOPS.length], x + w / 2, gy - 0.03 * ppm);
    }
    // pilasters between the shops
    g.fillStyle = 'rgba(120,104,82,0.25)';
    g.fillRect(0, gy, 7, shopH * ppm);
    g.fillRect(W - 7, gy, 7, shopH * ppm);
  } else if (kind === 'pav') {
    // front door and a small step
    const gy = H;
    const dw = 1.0 * ppm;
    g.fillStyle = '#5c4634';
    g.fillRect(W / 2 - dw / 2, gy - 1.55 * ppm, dw, 1.55 * ppm);
    g.fillStyle = '#2b2520';
    g.fillRect(W / 2 - dw / 2 + 4, gy - 1.5 * ppm, dw - 8, 1.42 * ppm);
    g.fillStyle = '#c9b99e';
    g.fillRect(W / 2 - dw / 2 - 6, gy - 0.16 * ppm, dw + 12, 0.16 * ppm);
  } else if (kind === 'wh') {
    // corrugated metal band over the loading bays
    const gy = H - 3.1 * ppm;
    g.fillStyle = '#2c333a';
    g.fillRect(0, gy, W, 3.1 * ppm);
    for (let i = 0; i < 4; i++) {
      g.fillStyle = 'rgba(150,175,190,0.16)';
      g.fillRect(10 + i * (W / 4), gy + 0.5 * ppm, W / 4 - 22, 2.1 * ppm);
    }
    g.fillStyle = '#1d2328';
    g.fillRect(0, gy - 10, W, 10);
  }

  // ---- cornice and grime --------------------------------------------------
  g.fillStyle = s.trim;
  g.fillRect(0, 0, W, Math.max(4, 0.32 * ppm));
  g.fillStyle = 'rgba(50,44,36,0.22)';
  g.fillRect(0, Math.max(4, 0.32 * ppm), W, 4);
  const dirt = g.createLinearGradient(0, H - 1.6 * ppm, 0, H);
  dirt.addColorStop(0, 'rgba(48,42,34,0)');
  dirt.addColorStop(1, 'rgba(48,42,34,0.28)');
  g.fillStyle = dirt;
  g.fillRect(0, H - 1.6 * ppm, W, 1.6 * ppm);
  return texture(c);
}

/** Side livery of one car: cream body, plum window band, doors, yellow line. */
export function trainTexture(variant: number): THREE.CanvasTexture {
  const W = 1024, H = 384;
  const { c, g } = canvas(W, H);
  const rnd = seeded(variant * 3571 + 13);
  g.fillStyle = variant % 2 ? '#e8ebef' : '#dfe4ea';
  g.fillRect(0, 0, W, H);
  // roof edge
  g.fillStyle = '#2d333b';
  g.fillRect(0, 0, W, 26);
  g.fillStyle = 'rgba(255,255,255,0.18)';
  g.fillRect(0, 26, W, 5);
  // window band
  g.fillStyle = '#232c36';
  g.fillRect(0, 108, W, 118);
  // windows
  const doors = [150, 690];
  for (let x = 40; x < W - 40; x += 132) {
    if (doors.some((d) => Math.abs(d - x) < 90)) continue;
    const gr = g.createLinearGradient(x, 112, x, 220);
    gr.addColorStop(0, '#35505f');
    gr.addColorStop(0.5, '#16222c');
    gr.addColorStop(1, '#2b4553');
    g.fillStyle = gr;
    g.fillRect(x, 114, 100, 104);
    g.fillStyle = 'rgba(255,255,255,0.13)';
    g.fillRect(x + 8, 118, 26, 96);
  }
  // doors with glass panels
  for (const dx of doors) {
    g.fillStyle = LINE_COLOR;
    g.fillRect(dx - 46, 96, 92, 232);
    g.fillStyle = '#151c24';
    g.fillRect(dx - 34, 108, 30, 96);
    g.fillRect(dx + 4, 108, 30, 96);
    g.fillStyle = 'rgba(255,255,255,0.12)';
    g.fillRect(dx - 34, 108, 10, 96);
    g.fillStyle = '#f4f6f8';
    g.font = `700 34px ${FONT}`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(LINE, dx, 240);
  }
  // lower band and doors' kick plates
  g.fillStyle = LINE_COLOR;
  g.fillRect(0, 250, W, 16);
  g.fillStyle = '#f0c94a';
  g.fillRect(0, 272, W, 10);
  g.fillStyle = '#2b3138';
  g.fillRect(0, 300, W, H - 300);
  // grime and highlights
  for (let i = 0; i < 120; i++) {
    g.fillStyle = `rgba(40,40,40,${rnd() * 0.05})`;
    g.fillRect(rnd() * W, 300 + rnd() * 60, 20 + rnd() * 90, 4 + rnd() * 20);
  }
  const gloss = g.createLinearGradient(0, 0, 0, H);
  gloss.addColorStop(0, 'rgba(255,255,255,0.22)');
  gloss.addColorStop(0.4, 'rgba(255,255,255,0)');
  gloss.addColorStop(1, 'rgba(0,0,0,0.18)');
  g.fillStyle = gloss;
  g.fillRect(0, 0, W, H);
  return texture(c);
}

/** Cab end: destination blind, windscreen, headlights, skirt. */
export function cabTexture(): THREE.CanvasTexture {
  const W = 256, H = 320;
  const { c, g } = canvas(W, H);
  g.fillStyle = '#e7ebf0';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#2c333b';
  g.fillRect(0, 0, W, 22);
  // destination blind
  g.fillStyle = '#101820';
  g.fillRect(26, 30, 204, 34);
  g.fillStyle = '#ffb84d';
  g.font = `700 19px ${FONT}`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('MANTES-LA-JOLIE', 128, 48);
  // windscreen, rounded
  g.fillStyle = '#141d26';
  g.beginPath();
  g.moveTo(24, 78);
  g.quadraticCurveTo(128, 66, 232, 78);
  g.lineTo(222, 178);
  g.quadraticCurveTo(128, 190, 34, 178);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(170,215,240,0.16)';
  g.beginPath();
  g.moveTo(44, 82);
  g.lineTo(112, 78);
  g.lineTo(58, 172);
  g.lineTo(40, 172);
  g.closePath();
  g.fill();
  // wipers
  g.strokeStyle = '#0b1015';
  g.lineWidth = 5;
  g.beginPath(); g.moveTo(84, 182); g.lineTo(150, 96); g.moveTo(196, 182); g.lineTo(136, 98); g.stroke();
  // headlights and marker lights
  for (const x of [40, 216]) {
    g.fillStyle = '#2b3138';
    g.beginPath(); g.arc(x, 214, 21, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#ffe9a8';
    g.beginPath(); g.arc(x, 214, 14, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#fffbe8';
    g.beginPath(); g.arc(x - 3, 210, 6, 0, Math.PI * 2); g.fill();
  }
  g.fillStyle = '#d1452f';
  g.fillRect(112, 202, 32, 9);
  // line badge on the nose
  g.fillStyle = '#ffffff';
  g.beginPath(); g.arc(128, 238, 17, 0, Math.PI * 2); g.fill();
  g.fillStyle = LINE_COLOR;
  g.beginPath(); g.arc(128, 238, 13, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#ffffff';
  g.font = `800 18px ${FONT}`;
  g.fillText(LINE, 128, 239);
  // livery bands and skirt
  g.fillStyle = LINE_COLOR;
  g.fillRect(0, 264, W, 20);
  g.fillStyle = '#f0c94a';
  g.fillRect(0, 286, W, 9);
  g.fillStyle = '#262c33';
  g.fillRect(0, 296, W, H - 296);
  g.fillStyle = '#3b424a';
  g.fillRect(100, 300, 56, 20);
  return texture(c);
}

/** The board over the tracks: line badge, station name, exits. */
export const SIGN_W = 1024;
export const SIGN_H = 256;
export function paintSign(g: CanvasRenderingContext2D, name: string, sub: string) {
  const W = SIGN_W, H = SIGN_H;
  g.clearRect(0, 0, W, H);
  g.fillStyle = '#0b2748';
  g.fillRect(0, 0, W, H);
  const gr = g.createLinearGradient(0, 0, 0, H);
  gr.addColorStop(0, 'rgba(255,255,255,0.12)');
  gr.addColorStop(1, 'rgba(0,0,0,0.25)');
  g.fillStyle = gr;
  g.fillRect(0, 0, W, H);
  // line roundel
  g.fillStyle = '#ffffff';
  g.beginPath(); g.arc(112, 128, 78, 0, Math.PI * 2); g.fill();
  g.fillStyle = LINE_COLOR;
  g.beginPath(); g.arc(112, 128, 66, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#ffffff';
  g.font = `800 96px ${FONT}`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(LINE, 112, 132);
  // station name, shrunk to fit
  let size = 104;
  do {
    g.font = `800 ${size}px ${FONT}`;
    size -= 4;
  } while (g.measureText(name).width > 700 && size > 40);
  g.textAlign = 'left';
  g.fillStyle = '#ffffff';
  g.fillText(name, 218, 108);
  g.font = `600 40px ${FONT}`;
  g.fillStyle = '#ffd24a';
  g.fillText(sub, 222, 184);
  g.fillStyle = '#ffffff';
  g.fillRect(0, H - 10, W, 10);
  g.fillStyle = '#ffd24a';
  g.fillRect(0, H - 10, W * 0.35, 10);
}

export function signTexture(name: string, sub: string): THREE.CanvasTexture {
  const { c, g } = canvas(SIGN_W, SIGN_H);
  paintSign(g, name, sub);
  return texture(c);
}


/** A hoarding covered in our own tags, with drips — the wall from the intro. */
export function graffitiTexture(variant: number): THREE.CanvasTexture {
  const W = 512, H = 192;
  const { c, g } = canvas(W, H);
  const rnd = seeded(variant * 811 + 53);
  g.fillStyle = variant % 2 ? '#b3aca0' : '#a9a49a';
  g.fillRect(0, 0, W, H);
  for (let i = 0; i < 300; i++) {
    g.fillStyle = `rgba(${rnd() > 0.5 ? '255,255,250' : '60,56,50'},${0.02 + rnd() * 0.05})`;
    g.fillRect(rnd() * W, rnd() * H, 3 + rnd() * 26, 2 + rnd() * 10);
  }
  // panel joints and a rusted rail
  g.strokeStyle = 'rgba(70,66,60,0.35)';
  g.lineWidth = 2;
  for (let x = 0; x < W; x += 128) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
  g.fillStyle = 'rgba(70,66,60,0.25)';
  g.fillRect(0, H - 22, W, 22);
  // tags
  const gold = '#ffcf3f', red = '#d1452f', teal = '#2e8b8b';
  g.save();
  g.translate(26, 118);
  g.rotate(-0.04);
  g.font = '900 62px "DejaVu Sans", system-ui, sans-serif';
  g.fillStyle = gold;
  g.fillText('ACAB', 0, 0);
  g.strokeStyle = 'rgba(30,26,20,0.5)';
  g.lineWidth = 2;
  g.strokeText('ACAB', 0, 0);
  for (let i = 0; i < 5; i++) {
    const x = 12 + i * 26 + rnd() * 10;
    g.fillStyle = gold;
    g.fillRect(x, 6, 4, 10 + rnd() * 26);
  }
  g.restore();
  g.save();
  g.translate(288, 66);
  g.rotate(0.05);
  g.font = '900 48px "DejaVu Sans", system-ui, sans-serif';
  g.fillStyle = red;
  g.fillText('IDF', 0, 0);
  g.strokeStyle = red;
  g.lineWidth = 5;
  g.beginPath();
  g.ellipse(78, -16, 96, 40, 0, 0, Math.PI * 2);
  g.stroke();
  g.restore();
  g.save();
  g.translate(392, 152);
  g.rotate(-0.06);
  g.font = '800 40px "DejaVu Sans", system-ui, sans-serif';
  g.fillStyle = teal;
  g.fillText('LIGNE J', 0, 0);
  g.restore();
  // scribbles
  g.strokeStyle = 'rgba(40,36,32,0.35)';
  g.lineWidth = 3;
  for (let i = 0; i < 4; i++) {
    g.beginPath();
    const x = 60 + rnd() * 380, y = 30 + rnd() * 60;
    g.moveTo(x, y);
    g.quadraticCurveTo(x + 30, y - 20, x + 60, y + 6);
    g.stroke();
  }
  return texture(c);
}

/** Distant skyline: a hazy facade for the towers that peek over the roofs. */
export function distantTexture(): THREE.CanvasTexture {
  const W = 128, H = 256;
  const { c, g } = canvas(W, H);
  const gr = g.createLinearGradient(0, 0, 0, H);
  gr.addColorStop(0, '#9fb4c6');
  gr.addColorStop(1, '#c8ccc9');
  g.fillStyle = gr;
  g.fillRect(0, 0, W, H);
  g.fillStyle = 'rgba(255,255,255,0.16)';
  for (let y = 10; y < H; y += 14) g.fillRect(0, y, W, 5);
  g.fillStyle = 'rgba(40,50,60,0.10)';
  for (let x = 6; x < W; x += 16) g.fillRect(x, 0, 4, H);
  return texture(c);
}

/** Small platform board under the canopy: white with the station name. */
export function platformTexture(name: string): THREE.CanvasTexture {
  const W = 512, H = 128;
  const { c, g } = canvas(W, H);
  g.fillStyle = '#f4f2ec';
  g.fillRect(0, 0, W, H);
  g.fillStyle = LINE_COLOR;
  g.fillRect(0, 0, 14, H);
  g.fillStyle = '#12305a';
  g.font = `800 46px ${FONT}`;
  g.textAlign = 'left';
  g.textBaseline = 'middle';
  let size = 46;
  do {
    g.font = `800 ${size}px ${FONT}`;
    size -= 2;
  } while (g.measureText(name).width > 420 && size > 20);
  g.fillText(name, 36, H / 2);
  return texture(c);
}

/** Water for the Seine: slow, dark, with a few bright ripples. */
export function waterTexture(): THREE.CanvasTexture {
  const S = 256;
  const { c, g } = canvas(S, S);
  const gr = g.createLinearGradient(0, 0, 0, S);
  gr.addColorStop(0, '#3f7d97');
  gr.addColorStop(0.5, '#356b86');
  gr.addColorStop(1, '#4a88a0');
  g.fillStyle = gr;
  g.fillRect(0, 0, S, S);
  const rnd = seeded(77);
  for (let i = 0; i < 180; i++) {
    g.strokeStyle = `rgba(${rnd() > 0.5 ? '210,230,235' : '20,40,50'},${0.05 + rnd() * 0.14})`;
    g.lineWidth = 1 + rnd() * 2;
    const y = rnd() * S;
    g.beginPath();
    g.moveTo(rnd() * S, y);
    g.lineTo(rnd() * S, y + rnd() * 3 - 1.5);
    g.stroke();
  }
  const t = texture(c, true);
  return t;
}

/** Diagonal red/white stripes for the line-side barriers. */
export function stripeTexture(a: string, b: string): THREE.CanvasTexture {
  const S = 128;
  const { c, g } = canvas(S, S);
  g.fillStyle = a;
  g.fillRect(0, 0, S, S);
  g.fillStyle = b;
  for (let k = -2; k < 4; k++) {
    g.beginPath();
    g.moveTo(k * 48, S); g.lineTo(k * 48 + 24, S); g.lineTo(k * 48 + 24 + S, 0); g.lineTo(k * 48 + S, 0);
    g.closePath();
    g.fill();
  }
  return texture(c, true);
}
