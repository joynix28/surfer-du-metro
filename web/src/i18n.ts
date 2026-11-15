// Two languages, picked from the browser (French first — this is a game about the Île-de-France).
import { load, save } from './storage';

export type Lang = 'fr' | 'en';
const S = {
  fr: {
    title: 'Surfer Du Metro', tagline: 'Évitez les rames. Semez le contrôleur.', play: 'JOUER', best: 'Record', coinsTotal: 'Jetons',
    ctrlKeys: '← → / A D changer de voie · ↑ W Espace sauter · ↓ S glisser · Échap pause',
    ctrlTouch: 'Glisse à gauche/droite pour changer de voie · en haut pour sauter · en bas pour glisser',
    tapToStart: 'Touche l’écran pour commencer', paused: 'Pause', resume: 'Reprendre', restart: 'Recommencer', home: 'Accueil',
    over: 'Attrapé !', score: 'Score', coins: 'Jetons', distance: 'Distance', newBest: 'Nouveau record !', again: 'Rejouer',
    preparing: 'Préparation…', loading: 'Chargement', loadFail: 'Chargement impossible. Recharge la page.',
    hintJumpKeys: '↑ pour sauter', hintJumpTouch: 'Glisse vers le haut pour sauter',
    hintSlideKeys: '↓ pour passer dessous', hintSlideTouch: 'Glisse vers le bas pour passer dessous',
    hintLaneKeys: '← → pour changer de voie', hintLaneTouch: 'Glisse à gauche ou à droite',
    hintRamp: 'Monte la rampe pour courir sur la rame',
    magnet: 'Aimant', shoes: 'Chaussures à ressorts', double: 'Score doublé', careful: 'Attention ! Encore un choc et tu es attrapé', mute: 'Couper le son', sound: 'Son',
    mult: 'Multiplicateur', meters: 'm', lang: 'Langue', skip: 'Toucher pour passer', keys: 'clés', keyOne: 'clé', revive: 'Sauver', board: 'Planche',
  },
  en: {
    title: 'Surfer Du Metro', tagline: 'Dodge the trains. Lose the guard.', play: 'PLAY', best: 'Best', coinsTotal: 'Tokens',
    ctrlKeys: '← → / A D change lane · ↑ W Space jump · ↓ S slide · Esc pause',
    ctrlTouch: 'Swipe left/right to change lane · up to jump · down to slide',
    tapToStart: 'Tap to start', paused: 'Paused', resume: 'Resume', restart: 'Restart', home: 'Home',
    over: 'Caught!', score: 'Score', coins: 'Tokens', distance: 'Distance', newBest: 'New best!', again: 'Play again',
    preparing: 'Getting ready…', loading: 'Loading', loadFail: 'Could not load. Please refresh.',
    hintJumpKeys: 'Press ↑ to jump', hintJumpTouch: 'Swipe up to jump',
    hintSlideKeys: 'Press ↓ to slide under', hintSlideTouch: 'Swipe down to slide under',
    hintLaneKeys: 'Press ← → to dodge', hintLaneTouch: 'Swipe left or right to dodge',
    hintRamp: 'Run up the ramp onto the train',
    magnet: 'Magnet', shoes: 'Spring shoes', double: 'Double score', careful: 'Careful! One more hit and you are caught', mute: 'Mute', sound: 'Sound',
    mult: 'Multiplier', meters: 'm', lang: 'Language', skip: 'Tap to skip', keys: 'keys', keyOne: 'key', revive: 'Save me', board: 'Hoverboard',
  },
};
export type Key = keyof (typeof S)['fr'];

export function detectLang(): Lang {
  // French by default: the game is set in the Île-de-France, the switch is there for everyone else.
  const saved = load<string | null>('lang', null);
  return saved === 'en' ? 'en' : 'fr';
}

let lang: Lang = detectLang();
export const getLang = () => lang;
export function setLang(l: Lang) {
  lang = l;
  save('lang', l);
  document.documentElement.lang = l;
}
export const t = (k: Key) => S[lang][k];
export const LANGS: Lang[] = ['fr', 'en'];
export const LANG_LABEL: Record<Lang, string> = { fr: 'FR', en: 'EN' };
