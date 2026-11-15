// The meta-game: what the player owns, what is equipped, and the shop catalogue.
import { load, save } from './storage';

export interface Skin {
  id: string;
  name: string;
  price: number;
  hood: string;
  hoodDark: string;
  cap: string;
  capDark: string;
  pants: string;
  pantsDark: string;
  bag: string;
  skin: string;
  trim: string;
}

export interface Board {
  id: string;
  name: string;
  price: number;
  deck: string;
  stripe: string;
}

export interface Theme {
  id: string;
  name: string;
  price: number;
  fog: string;
  grass: string;
  leaf: string;
  pave: string;
  building: string;
  night: number; // 0 = normal, 1 = darker
}

export const SKINS: Skin[] = [
  { id: 'yanis', name: 'Yanis', price: 0, hood: '#2e7f8c', hoodDark: '#256a76', cap: '#d6543f', capDark: '#b8462f', pants: '#333a4a', pantsDark: '#272d3a', bag: '#b9862f', skin: '#e0ac86', trim: '#ffcf3f' },
  { id: 'nadia', name: 'Nadia', price: 1200, hood: '#6c4b9e', hoodDark: '#563a80', cap: '#ffcf3f', capDark: '#d9a521', pants: '#2b2f3a', pantsDark: '#22262f', bag: '#1f2430', skin: '#c98d63', trim: '#ffcf3f' },
  { id: 'sofiane', name: 'Sofiane', price: 1800, hood: '#1f3f6b', hoodDark: '#17324f', cap: '#f1f1ec', capDark: '#c9c9c2', pants: '#2f3540', pantsDark: '#252a33', bag: '#c4382f', skin: '#a9714c', trim: '#ffcf3f' },
  { id: 'lea', name: 'Léa', price: 2400, hood: '#d97a5a', hoodDark: '#b25f42', cap: '#f1f1ec', capDark: '#c9c9c2', pants: '#33384a', pantsDark: '#282d3c', bag: '#2e8b8b', skin: '#e8bb95', trim: '#ffe08a' },
  { id: 'kevin', name: 'Kevin', price: 3200, hood: '#d9a521', hoodDark: '#b3861a', cap: '#20518f', capDark: '#173d6d', pants: '#2b303c', pantsDark: '#22262f', bag: '#1b1f27', skin: '#b57c53', trim: '#fff2c0' },
  { id: 'ines', name: 'Inès', price: 4000, hood: '#2f5d43', hoodDark: '#254936', cap: '#d98ca8', capDark: '#b56f89', pants: '#2a2f38', pantsDark: '#21252c', bag: '#e8ddc9', skin: '#8f5f3f', trim: '#ffcf3f' },
];

export const BOARDS: Board[] = [
  { id: 'classic', name: 'Classique', price: 0, deck: '#2a3550', stripe: '#3f6dff' },
  { id: 'sunset', name: 'Coucher de soleil', price: 600, deck: '#7a2f4f', stripe: '#ff9f43' },
  { id: 'neon', name: 'Néon', price: 1200, deck: '#141a2a', stripe: '#3ee0ff' },
  { id: 'gold', name: 'Or', price: 2000, deck: '#3a2a10', stripe: '#ffcf3f' },
  { id: 'graffiti', name: 'Graffiti', price: 3000, deck: '#1b1f27', stripe: '#d1402f' },
];

export const THEMES: Theme[] = [
  { id: 'paris', name: 'Paris', price: 0, fog: '#e9dcc8', grass: '#7d9559', leaf: '#54723c', pave: '#d4cbbc', building: '#ffffff', night: 0 },
  { id: 'neon', name: 'Néon', price: 2500, fog: '#2a1b4a', grass: '#2b3a5a', leaf: '#3f2b6b', pave: '#2f3550', building: '#b9a8ff', night: 0.45 },
  { id: 'automne', name: 'Automne', price: 2000, fog: '#e8c39a', grass: '#8a7a3f', leaf: '#c46a2a', pave: '#cdb79a', building: '#fff1dd', night: 0 },
  { id: 'hiver', name: 'Hiver', price: 3000, fog: '#dfe8f2', grass: '#cfd8e2', leaf: '#dfe8ef', pave: '#d8dde4', building: '#f4f8ff', night: 0 },
  { id: 'ete', name: 'Été', price: 2500, fog: '#ffe9c4', grass: '#8fae5c', leaf: '#5f8f3f', pave: '#e0cfae', building: '#fff6e2', night: 0 },
];

export interface Meta {
  chars: string[];
  boards: string[];
  themes: string[];
  equip: { char: string; board: string; theme: string };
  /** skateboards in the bag, ready to be launched with a double tap */
  stock: number;
}

const DEFAULT: Meta = {
  chars: ['yanis'],
  boards: ['classic'],
  themes: ['paris'],
  equip: { char: 'yanis', board: 'classic', theme: 'paris' },
  stock: 3,
};

export function loadMeta(): Meta {
  const m = load<Meta>('meta', DEFAULT);
  return {
    chars: Array.isArray(m.chars) && m.chars.length ? m.chars : ['yanis'],
    boards: Array.isArray(m.boards) && m.boards.length ? m.boards : ['classic'],
    themes: Array.isArray(m.themes) && m.themes.length ? m.themes : ['paris'],
    equip: {
      char: m.equip?.char || 'yanis',
      board: m.equip?.board || 'classic',
      theme: m.equip?.theme || 'paris',
    },
    stock: Math.max(0, Math.min(999, m.stock ?? 3)),
  };
}
export function saveMeta(m: Meta) {
  save('meta', m);
}

export const findSkin = (id: string) => SKINS.find((s) => s.id === id) || SKINS[0];
export const findBoard = (id: string) => BOARDS.find((b) => b.id === id) || BOARDS[0];
export const findTheme = (id: string) => THEMES.find((t) => t.id === id) || THEMES[0];

export type ShopItem = { kind: 'char' | 'board' | 'theme'; id: string };

/** Everything the shop can give, cheapest first. */
export function allItems(): ShopItem[] {
  return [
    ...SKINS.map((s) => ({ kind: 'char' as const, id: s.id })),
    ...BOARDS.map((b) => ({ kind: 'board' as const, id: b.id })),
    ...THEMES.map((t) => ({ kind: 'theme' as const, id: t.id })),
  ];
}

export function owned(m: Meta, it: ShopItem) {
  if (it.kind === 'char') return m.chars.includes(it.id);
  if (it.kind === 'board') return m.boards.includes(it.id);
  return m.themes.includes(it.id);
}

export function priceOf(it: ShopItem) {
  if (it.kind === 'char') return findSkin(it.id).price;
  if (it.kind === 'board') return findBoard(it.id).price;
  return findTheme(it.id).price;
}

export function nameOf(it: ShopItem) {
  if (it.kind === 'char') return findSkin(it.id).name;
  if (it.kind === 'board') return findBoard(it.id).name;
  return findTheme(it.id).name;
}

export function grant(m: Meta, it: ShopItem) {
  if (it.kind === 'char' && !m.chars.includes(it.id)) m.chars.push(it.id);
  if (it.kind === 'board' && !m.boards.includes(it.id)) m.boards.push(it.id);
  if (it.kind === 'theme' && !m.themes.includes(it.id)) m.themes.push(it.id);
}

/** Mystery box: a random item the player does not own yet, or coins if everything is owned. */
export function boxRoll(m: Meta): { item?: ShopItem; coins?: number } {
  const missing = allItems().filter((it) => !owned(m, it) && priceOf(it) > 0);
  if (!missing.length) return { coins: 900 };
  const it = missing[Math.floor(Math.random() * missing.length)];
  return { item: it };
}
