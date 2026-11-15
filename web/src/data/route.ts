// The tour of the line J, station by station, taken from the official GTFS file (Île-de-France Mobilités).
// The run is endless: the tour loops, so the scenery cycles through Paris, the suburbs, the Seine valley
// and Mantes before starting again.
import raw from './j.json';

export type Zone = 'paris' | 'banlieue' | 'seine' | 'foret' | 'ville';

interface RawStation { name: string; lat: number; lon: number }
interface RawBranch { name: string; stations: RawStation[] }

const branches = (raw as { branches: RawBranch[] }).branches;

/** What the camera sees around each station. */
const ZONES: Record<string, Zone> = {
  'Gare Saint-Lazare': 'paris',
  'Asnières-sur-Seine': 'banlieue',
  'Bois-Colombes': 'banlieue',
  Colombes: 'banlieue',
  'Le Stade': 'banlieue',
  Argenteuil: 'ville',
  Sannois: 'banlieue',
  'Ermont - Eaubonne': 'ville',
  'Houilles - Carrières-sur-Seine': 'ville',
  Poissy: 'ville',
  'Villennes-sur-Seine': 'seine',
  'Vernouillet - Verneuil': 'seine',
  'Les Clairières de Verneuil': 'foret',
  'Les Mureaux': 'ville',
  'Aubergenville Élisabethville': 'seine',
  'Épône - Mézières': 'foret',
  'Mantes Station': 'ville',
  'Mantes-la-Jolie': 'ville',
  "Val d'Argenteuil": 'seine',
  'Cormeilles-en-Parisis': 'banlieue',
  'La Frette - Montigny': 'seine',
  Herblay: 'seine',
  'Conflans-Sainte-Honorine': 'ville',
  "Conflans Fin d'Oise": 'seine',
  Maurecourt: 'seine',
  Andrésy: 'seine',
  'Chanteloup-les-Vignes': 'banlieue',
  'Triel-sur-Seine': 'seine',
  'Vaux-sur-Seine': 'seine',
  'Thun le Paradis': 'seine',
  'Meulan - Hardricourt': 'seine',
  Juziers: 'seine',
  Gargenville: 'seine',
  'Issou - Porcheville': 'seine',
  Limay: 'seine',
};

/** Branch order of the tour: Mantes via Poissy, then Ermont, then Mantes via Conflans. */
const ORDER = ['Poissy', 'Ermont', 'Conflans'];

const names: string[] = [];
for (const key of ORDER) {
  const b = branches.find((x) => x.name.includes(key));
  if (!b) continue;
  for (const s of b.stations) if (!names.includes(s.name)) names.push(s.name);
}

export const LINE = 'J';
export const LINE_COLOR = '#6c4b9e';
/** Metres of track per station. At 20 m/s that is about 19 seconds between station signs. */
export const STATION_LEN = 380;

export interface Station { index: number; name: string; short: string; zone: Zone; d0: number; d1: number }

export const stations: Station[] = names.map((name, index) => ({
  index,
  name,
  short: name.replace(/^Gare\s+/i, '').toUpperCase(),
  zone: ZONES[name] || 'banlieue',
  d0: index * STATION_LEN,
  d1: (index + 1) * STATION_LEN,
}));

export function stationIndexAt(d: number) {
  return Math.max(0, Math.floor(d / STATION_LEN)) % stations.length;
}
export function stationAt(d: number) {
  return stations[stationIndexAt(d)];
}
/** Zone at a distance, including the last 60 m of a station that melt into the next one. */
export function zoneAt(d: number): Zone {
  return stationAt(Math.max(0, d + 20)).zone;
}
