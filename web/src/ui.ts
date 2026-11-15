// The DOM layer: title screen, HUD, pause and result screens. Plain elements, no framework.
import { t, getLang, setLang, LANGS, LANG_LABEL, type Key } from './i18n';
import type { PowerKind } from './sim/types';
import { POWER_TIME } from './config';
import { SKINS, BOARDS, THEMES, priceOf, type ShopItem } from './meta';

export type Screen = 'intro' | 'start' | 'play' | 'pause' | 'over' | 'shop';
export interface UIHandlers {
  play(): void;
  resume(): void;
  pause(): void;
  restart(): void;
  home(): void;
  toggleMute(): void;
  langChanged(): void;
  skipIntro(): void;
  revive(): void;
  openShop(): void;
  buy(kind: ShopItem['kind'], id: string): void;
  equip(kind: ShopItem['kind'], id: string): void;
  box(): void;
  closeShop(): void;
}

export interface ShopView {
  coins: number;
  keys: number;
  stock: number;
  owned: { char: string[]; board: string[]; theme: string[] };
  equip: { char: string; board: string; theme: string };
}

const ICON = {
  pause: '<svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
  sound: '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  muted: '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  coin: '<span class="coin-ico"></span>',
  key: '<svg viewBox="0 0 24 24"><path d="M14 3a6 6 0 0 0-5.6 8.2L3 16.6V21h4.4l1.4-1.4V18h1.6v-1.6h1.5l1.1-1.1A6 6 0 1 0 14 3zm2.2 4.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6z" fill="currentColor"/></svg>',
};
const POWER_ICON: Record<PowerKind, string> = { magnet: 'U', shoes: '⇧', double: '×2', board: '≋' };

export class UI {
  root: HTMLElement;
  private el: Record<string, HTMLElement> = {};
  screen: Screen = 'start';
  private hintTimer = 0;
  private toastTimer = 0;
  private stationTimer = 0;
  touch = matchMedia('(pointer: coarse)').matches;
  private last = { score: -1, coins: -1, mult: -1, power: '', keys: -1, boards: -1, fury: -1 };
  private tab: 'char' | 'board' | 'theme' | 'box' = 'char';
  private view: ShopView | null = null;

  constructor(root: HTMLElement, h: UIHandlers, muted: boolean) {
    this.root = root;
    root.innerHTML = `
      <div class="hud" id="hud">
        <div class="hud-left">
          <button class="icon-btn" id="btn-pause" aria-label="pause">${ICON.pause}</button>
          <button class="icon-btn" id="btn-mute" aria-label="mute"></button>
        </div>
        <div class="hud-right">
          <div class="score" id="score">0</div>
          <div class="hud-row"><span class="mult" id="mult">×1</span><span class="keys">${ICON.key}<b id="keys">0</b></span><span class="board-ico" id="boards">0</span><span class="coins">${ICON.coin}<b id="coins">0</b></span></div>
          <div class="fury" id="fury"><i></i></div>
          <div class="powers" id="powers"></div>
        </div>
        <div class="hint" id="hint"></div>
        <div class="toast" id="toast"></div>
        <div class="station" id="station">
          <span class="line" id="station-line">J</span>
          <span class="names"><b id="station-name"></b><small id="station-sub"></small></span>
        </div>
      </div>
      <div class="flash" id="flash"></div>
      <section class="screen intro" id="s-intro">
        <div class="intro-mark"><span class="line">J</span><b data-k="title"></b><small>ÎLE-DE-FRANCE · RER &amp; MÉTRO</small></div>
        <div class="intro-skip" id="intro-skip" data-k="skip"></div>
      </section>
      <section class="screen shop" id="s-shop">
        <div class="shop-panel">
          <div class="shop-head">
            <h2 data-k="shop"></h2>
            <div class="wallet">
              <span class="coins">${ICON.coin}<b id="shop-coins">0</b></span>
              <span class="keys">${ICON.key}<b id="shop-keys">0</b></span>
              <span class="board-ico">🛹<b id="shop-boards">0</b></span>
            </div>
            <button class="icon-btn" id="shop-close">✕</button>
          </div>
          <div class="tabs" id="shop-tabs">
            <button class="tab on" data-tab="char" data-k="tabChars"></button>
            <button class="tab" data-tab="board" data-k="tabBoards"></button>
            <button class="tab" data-tab="theme" data-k="tabThemes"></button>
            <button class="tab" data-tab="box" data-k="tabBox"></button>
          </div>
          <div class="shop-grid" id="shop-grid"></div>
          <div class="shop-note" id="shop-note"></div>
        </div>
      </section>
      <section class="screen start" id="s-start">
        <div class="panel">
          <h1 data-k="title"></h1>
          <p class="tag" data-k="tagline"></p>
          <div class="stats"><div><small data-k="best"></small><b id="best">0</b></div><div><small data-k="coinsTotal"></small><b id="bank">0</b></div></div>
          <button class="big" id="btn-play" data-k="play"></button>
          <p class="ctrl" id="ctrl"></p>
          <div class="row">
            <button class="chip shop" id="btn-shop" data-k="shop"></button>
            <button class="chip" id="btn-lang"></button>
            <button class="chip" id="btn-mute2"></button>
          </div>
        </div>
      </section>
      <section class="screen pause" id="s-pause">
        <div class="panel">
          <h2 data-k="paused"></h2>
          <button class="big" id="btn-resume" data-k="resume"></button>
          <button class="ghost" id="btn-shop-pause" data-k="shop"></button>
          <button class="ghost" id="btn-restart" data-k="restart"></button>
          <button class="ghost" id="btn-home" data-k="home"></button>
        </div>
      </section>
      <section class="screen over" id="s-over">
        <div class="panel">
          <h2 data-k="over"></h2>
          <div class="badge" id="newbest" data-k="newBest"></div>
          <div class="result">
            <div><small data-k="score"></small><b id="r-score">0</b></div>
            <div><small data-k="coins"></small><b id="r-coins">0</b></div>
            <div><small data-k="distance"></small><b id="r-dist">0</b></div>
            <div><small data-k="best"></small><b id="r-best">0</b></div>
          </div>
          <button class="big revive" id="btn-revive"></button>
          <button class="big" id="btn-again" data-k="again"></button>
          <button class="ghost" id="btn-home2" data-k="home"></button>
        </div>
      </section>`;
    root.querySelectorAll<HTMLElement>('[id]').forEach((e) => (this.el[e.id] = e));
    const tap = (id: string, fn: () => void) => this.el[id].addEventListener('click', (e) => { e.stopPropagation(); fn(); });
    tap('btn-play', () => h.play());
    tap('btn-pause', () => h.pause());
    tap('btn-resume', () => h.resume());
    tap('btn-shop-pause', () => h.openShop());
    tap('btn-restart', () => h.restart());
    tap('btn-home', () => h.home());
    tap('btn-home2', () => h.home());
    tap('btn-again', () => h.restart());
    tap('btn-revive', () => h.revive());
    tap('btn-mute', () => h.toggleMute());
    tap('btn-mute2', () => h.toggleMute());
    tap('btn-shop', () => h.openShop());
    tap('shop-close', () => h.closeShop());
    this.el['shop-tabs'].addEventListener('click', (e) => {
      const b = (e.target as HTMLElement).closest('.tab') as HTMLElement | null;
      if (!b) return;
      this.tab = b.dataset.tab as typeof this.tab;
      for (const tab of this.el['shop-tabs'].querySelectorAll('.tab')) tab.classList.toggle('on', tab === b);
      this.renderShop();
    });
    this.el['shop-grid'].addEventListener('click', (e) => {
      const card = (e.target as HTMLElement).closest('.card') as HTMLElement | null;
      if (!card) return;
      const kind = card.dataset.kind || '';
      const id = card.dataset.id || '';
      if (kind === 'box') h.box();
      else if (card.classList.contains('owned')) h.equip(kind as ShopItem['kind'], id);
      else h.buy(kind as ShopItem['kind'], id);
    });
    tap('intro-skip', () => h.skipIntro());
    this.el['s-intro'].addEventListener('click', () => h.skipIntro());
    tap('btn-lang', () => {
      const i = LANGS.indexOf(getLang());
      setLang(LANGS[(i + 1) % LANGS.length]);
      this.texts();
      h.langChanged();
    });
    // on a phone, any tap on the title screen starts the game (buttons stop propagation themselves)
    this.el['s-start'].addEventListener('click', () => h.play());
    this.el['s-over'].addEventListener('click', () => h.restart());
    for (const b of root.querySelectorAll('button')) b.addEventListener('pointerdown', (e) => e.stopPropagation());
    this.setMuted(muted);
    this.texts();
  }

  texts() {
    document.documentElement.lang = getLang();
    document.title = t('title');
    this.root.querySelectorAll<HTMLElement>('[data-k]').forEach((e) => (e.textContent = t(e.dataset.k as Key)));
    this.el.ctrl.textContent = this.touch ? t('ctrlTouch') : t('ctrlKeys');
    this.el['btn-lang'].textContent = t('lang') + ' · ' + LANG_LABEL[getLang()];
  }

  setMuted(m: boolean) {
    this.el['btn-mute'].innerHTML = m ? ICON.muted : ICON.sound;
    this.el['btn-mute2'].innerHTML = (m ? ICON.muted : ICON.sound) + `<span>${t(m ? 'mute' : 'sound')}</span>`;
  }

  show(s: Screen) {
    this.screen = s;
    this.root.dataset.screen = s;
    for (const k of ['intro', 'start', 'pause', 'over', 'shop'] as const) this.el['s-' + k].classList.toggle('on', s === k);
    this.el.hud.classList.toggle('on', s === 'play' || s === 'pause');
    if (s !== 'play') this.hint('');
    if (s === 'start') this.el.station.classList.remove('on');
    if (s === 'start') this.el['btn-play'].focus({ preventScroll: true });
    if (s === 'over') this.el['btn-again'].focus({ preventScroll: true });
    if (s === 'pause') this.el['btn-resume'].focus({ preventScroll: true });
  }

  setStart(best: number, bank: number) {
    this.el.best.textContent = String(best);
    this.el.bank.textContent = String(bank);
  }

  hud(score: number, coins: number, mult: number, power: Record<PowerKind, number>, keys = 0, boards = 0, fury = 0) {
    if (keys !== this.last.keys) {
      this.el.keys.textContent = String(keys);
      this.last.keys = keys;
    }
    if (boards !== this.last.boards) {
      this.el.boards.textContent = String(boards);
      this.last.boards = boards;
    }
    const f = Math.round(fury * 20) / 20;
    if (f !== this.last.fury) {
      this.last.fury = f;
      this.el.fury.classList.toggle('on', f > 0);
      (this.el.fury.firstElementChild as HTMLElement).style.transform = `scaleX(${f})`;
    }
    if (score !== this.last.score) {
      this.el.score.textContent = String(score).padStart(6, '0');
      this.last.score = score;
    }
    if (coins !== this.last.coins) {
      this.el.coins.textContent = String(coins);
      this.last.coins = coins;
      this.el.coins.parentElement!.classList.remove('pop');
      void this.el.coins.offsetWidth;
      this.el.coins.parentElement!.classList.add('pop');
    }
    if (mult !== this.last.mult) {
      this.el.mult.textContent = '×' + mult;
      this.el.mult.classList.toggle('hot', mult > 1);
      this.last.mult = mult;
    }
    const key = (Object.keys(power) as PowerKind[]).map((k) => (power[k] > 0 ? k + Math.ceil(power[k] * 10) : '')).join();
    if (key !== this.last.power) {
      this.last.power = key;
      this.el.powers.innerHTML = (Object.keys(power) as PowerKind[])
        .filter((k) => power[k] > 0)
        .map((k) => `<div class="pw ${k}"><i>${POWER_ICON[k]}</i><span>${t(k)}</span><em style="transform:scaleX(${(power[k] / POWER_TIME[k]).toFixed(3)})"></em></div>`)
        .join('');
    }
  }

  hint(text: string, ms = 2200) {
    const e = this.el.hint;
    window.clearTimeout(this.hintTimer);
    e.textContent = text;
    e.classList.toggle('on', !!text);
    if (text) this.hintTimer = window.setTimeout(() => e.classList.remove('on'), ms);
  }

  toast(text: string, ms = 1400) {
    const e = this.el.toast;
    window.clearTimeout(this.toastTimer);
    e.textContent = text;
    e.classList.add('on');
    this.toastTimer = window.setTimeout(() => e.classList.remove('on'), ms);
  }

  // ---------------------------------------------------------------- shop
  shopOpen(view: ShopView) {
    this.view = view;
    this.show('shop');
    this.renderShop();
  }
  shopRefresh(view: ShopView) {
    this.view = view;
    this.renderShop();
  }
  note(text: string) {
    const e = this.el['shop-note'];
    e.textContent = text;
    e.classList.add('on');
    window.clearTimeout((this as unknown as { nt?: number }).nt);
    (this as unknown as { nt?: number }).nt = window.setTimeout(() => e.classList.remove('on'), 1800);
  }
  private renderShop() {
    const v = this.view;
    if (!v) return;
    this.el['shop-coins'].textContent = String(v.coins);
    this.el['shop-keys'].textContent = String(v.keys);
    this.el['shop-boards'].textContent = String(v.stock);
    const grid = this.el['shop-grid'];
    const money = t('coinsTotal');
    if (this.tab === 'box') {
      grid.innerHTML = `<button class="card box" data-kind="box" data-id="box">
        <span class="sw boxico">?</span>
        <b>${t('box')}</b>
        <small>${1500} ${t('coinOne')}</small>
      </button>`;
      return;
    }
    const list = this.tab === 'char' ? SKINS : this.tab === 'board' ? BOARDS : THEMES;
    grid.innerHTML = list.map((it) => {
      const kind = this.tab === 'char' ? 'char' : this.tab === 'board' ? 'board' : 'theme';
      const own = kind === 'char' ? v.owned.char.includes(it.id) : kind === 'board' ? v.owned.board.includes(it.id) : v.owned.theme.includes(it.id);
      const eq = kind === 'char' ? v.equip.char === it.id : kind === 'board' ? v.equip.board === it.id : v.equip.theme === it.id;
      const a = kind === 'char' ? (it as typeof SKINS[0]).hood : kind === 'board' ? (it as typeof BOARDS[0]).deck : (it as typeof THEMES[0]).fog;
      const b = kind === 'char' ? (it as typeof SKINS[0]).cap : kind === 'board' ? (it as typeof BOARDS[0]).stripe : (it as typeof THEMES[0]).grass;
      const price = priceOf({ kind, id: it.id });
      const poor = !own && v.coins < price;
      const label = eq ? t('equipped') : own ? t('equip') : `${price} ${money}`;
      return `<button class="card ${own ? 'owned' : ''} ${eq ? 'eq' : ''} ${poor ? 'poor' : ''}" data-kind="${kind}" data-id="${it.id}">
        <span class="sw ${kind}" style="--a:${a};--b:${b}"></span>
        <b>${it.name}</b>
        <small>${label}</small>
      </button>`;
    }).join('');
  }

  /** The station board that slides in when the runner reaches a new stop. */
  station(name: string, line: string, color: string, sub: string, ms = 3000) {
    this.el['station-name'].textContent = name;
    this.el['station-sub'].textContent = sub;
    this.el['station-line'].textContent = line;
    this.el['station-line'].style.background = color;
    const e = this.el.station;
    e.classList.remove('on');
    void e.offsetWidth;
    e.classList.add('on');
    window.clearTimeout(this.stationTimer);
    this.stationTimer = window.setTimeout(() => e.classList.remove('on'), ms);
  }

  flash(kind: 'hit' | 'crash' | 'power') {
    const e = this.el.flash;
    e.className = 'flash';
    void e.offsetWidth;
    e.className = 'flash ' + kind;
  }

  result(r: { score: number; coins: number; distance: number; best: number; newBest: boolean; reviveCost?: number; canRevive?: boolean }) {
    const rb = this.el['btn-revive'];
    if (r.reviveCost && r.reviveCost > 0) {
      rb.style.display = '';
      rb.classList.toggle('off', !r.canRevive);
      const n = r.reviveCost;
      (rb as HTMLButtonElement).disabled = !r.canRevive;
      rb.innerHTML = `${t('revive')} · ${n} ${n > 1 ? t('keys') : t('keyOne')}`;
    } else {
      rb.style.display = 'none';
    }
    this.el['r-score'].textContent = String(r.score);
    this.el['r-coins'].textContent = String(r.coins);
    this.el['r-dist'].textContent = r.distance + ' ' + t('meters');
    this.el['r-best'].textContent = String(r.best);
    this.el.newbest.classList.toggle('on', r.newBest);
  }
}
