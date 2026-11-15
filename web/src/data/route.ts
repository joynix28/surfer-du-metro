// The tour: several real lines, station by station, from the Île-de-France Mobilités GTFS.
// The run is endless, so the legs are played in a loop; the scenery follows the line you are on.
import raw from './j.json';

export type Zone = 'paris' | 'banlieue' | 'seine' | 'foret' | 'ville';

interface RawStation { name: string; lat: number; lon: number }
interface RawBranch { name: string; stations: RawStation[] }

const branches = (raw as { branches: RawBranch[] }).branches;

/** One leg of the tour: a line, its colour and its stations in running order. */
interface Leg { line: string; color: string; zone: Zone; names: string[] }

const LINE_COLORS: Record<string, string> = {
  J: '#6c4b9e', A: '#d6408f', B: '#4f8fc6', C: '#f0a01e', D: '#2e8b57', E: '#a55fa0',
  '1': '#f2c230', '8': '#a3b23c', '9': '#c9c22b', T2: '#a3417a', T9: '#1f6fb5',
};

/** The station names come from the open GTFS file; the order is the one trains actually run. */
function jStations() {
  const b = branches.find((x) => x.name.includes('Poissy'));
  return b ? b.stations.map((s) => s.name) : [];
}

const LEGS: Leg[] = [
  { line: 'J', color: LINE_COLORS.J, zone: 'ville', names: jStations() },
  {
    line: 'A', color: LINE_COLORS.A, zone: 'paris',
    names: ['Nanterre-Préfecture', 'La Défense', 'Charles de Gaulle - Étoile', 'Auber', 'Châtelet - Les Halles', 'Gare de Lyon', 'Nation', 'Vincennes', 'Val de Fontenay'],
  },
  {
    line: '1', color: LINE_COLORS['1'], zone: 'paris',
    names: [
      'Château de Vincennes', 'Bérault', 'Saint-Mandé', 'Porte de Vincennes', 'Nation', 'Reuilly - Diderot', 'Gare de Lyon',
      'Bastille', 'Saint-Paul (Le Marais)', 'Hôtel de Ville', 'Châtelet', 'Louvre - Rivoli', 'Palais Royal - Musée du Louvre',
      'Tuileries', 'Concorde', 'Champs-Élysées - Clemenceau', 'Franklin D. Roosevelt', 'George V', 'Charles de Gaulle - Étoile',
      'Argentine', 'Porte Maillot', 'Les Sablons', 'Pont de Neuilly', 'Esplanade de la Défense', 'La Défense',
    ],
  },
  {
    line: '8', color: LINE_COLORS['8'], zone: 'paris',
    names: [
      'Invalides', 'Concorde', 'Madeleine', 'Opéra', 'Richelieu - Drouot', 'Grands Boulevards', 'Bonne Nouvelle',
      'Strasbourg - Saint-Denis', 'République', 'Filles du Calvaire', 'Saint-Sébastien - Froissart', 'Chemin Vert', 'Bastille',
      'Ledru-Rollin', 'Faidherbe - Chaligny', 'Reuilly - Diderot', 'Montgallet', 'Daumesnil', 'Michel Bizot', 'Porte Dorée',
      'Porte de Charenton', 'Liberté', 'Charenton - Écoles', 'École Vétérinaire de Maisons-Alfort', 'Maisons-Alfort - Stade',
      'Maisons-Alfort - Les Juilliottes', 'Créteil - L\'Échat', 'Créteil - Université', 'Créteil - Préfecture',
    ],
  },
  {
    line: '9', color: LINE_COLORS['9'], zone: 'paris',
    names: [
      'Pont de Sèvres', 'Billancourt', 'Marcel Sembat', 'Porte de Saint-Cloud', 'Exelmans', 'Michel-Ange - Molitor',
      'Michel-Ange - Auteuil', 'Jasmin', 'Ranelagh', 'La Muette', 'Rue de la Pompe', 'Trocadéro', 'Iéna', 'Alma - Marceau',
      'Franklin D. Roosevelt', 'Saint-Philippe-du-Roule', 'Miromesnil', 'Saint-Augustin', 'Havre - Caumartin',
      'Chaussée d\'Antin - La Fayette', 'Richelieu - Drouot', 'Grands Boulevards', 'Bonne Nouvelle',
      'Strasbourg - Saint-Denis', 'République', 'Oberkampf', 'Saint-Ambroise', 'Voltaire', 'Charonne', 'Rue des Boulets',
      'Nation', 'Buzenval', 'Maraîchers', 'Porte de Montreuil', 'Robespierre', 'Croix de Chavaux', 'Mairie de Montreuil',
    ],
  },
  {
    line: 'T2', color: LINE_COLORS.T2, zone: 'seine',
    names: [
      'Porte de Versailles', 'Porte d\'Issy', 'Suzanne Lenglen', 'Henri Farman', 'Issy - Val de Seine', 'Jacques-Henri Lartigue',
      'Les Moulineaux', 'Meudon-sur-Seine', 'Brimborion', 'Musée de Sèvres', 'Parc de Saint-Cloud', 'Les Milons', 'Les Coteaux',
      'Suresnes - Longchamp', 'Belvédère', 'Puteaux', 'La Défense', 'Faubourg de l\'Arche', 'Les Fauvelles', 'Charlebourg',
      'Jacqueline Auriol', 'Victor Basch', 'Parc Pierre Lagravère', 'Pont de Bezons',
    ],
  },
  {
    line: 'T9', color: LINE_COLORS.T9, zone: 'banlieue',
    names: [
      'Porte de Choisy', 'Châteaudun - Barbès', 'Cimetière Parisien d\'Ivry', 'La Briqueterie', 'Germaine Tailleferre',
      'Beethoven - Concorde', 'Musée MAC VAL', 'Mairie de Vitry-sur-Seine', 'Camille Groult', 'Constant Coquelin',
      'Watteau - Rondenay', 'Trois Communes', 'Verdun - Hoche', 'Rouget de Lisle', 'Carle - Darthé', 'Four - Peary',
      'Christophe Colomb', 'Les Saules', 'Orly - Gaston Viens',
    ],
  },
];

/** Zones the names make obvious; everything else follows the leg. */
function zoneOf(name: string, fallback: Zone): Zone {
  const n = name.toLowerCase();
  if (n.includes('la défense') || n.includes('esplanade')) return 'ville';
  if (n.includes('trocadéro') || n.includes('iéna') || n.includes('alma')) return 'paris';
  if (n.includes('sèvres') || n.includes('saint-cloud') || n.includes('meudon') || n.includes('issy') || n.includes('suresnes') || n.includes('puteaux') || n.includes('boulogne')) return 'seine';
  if (n.includes('vincennes') || n.includes('créteil') || n.includes('montreuil') || n.includes('orly') || n.includes('vitry') || n.includes('maisons-alfort') || n.includes('charenton')) return 'banlieue';
  if (n.includes('nanterre') || n.includes('bezons') || n.includes('argenteuil')) return 'ville';
  return fallback;
}

/** Landmark to build beside the track at this station. */
function landmarkOf(name: string): 'eiffel' | 'defense' | null {
  const n = name.toLowerCase();
  if (n.includes('trocadéro') || n.includes('iéna') || n.includes('alma') || n.includes('pont de sèvres')) return 'eiffel';
  if (n.includes('la défense') || n.includes('esplanade')) return 'defense';
  return null;
}

export const LINE = 'J';
export const LINE_COLOR = LINE_COLORS.J;
/** Metres of track per station. At 20 m/s that is about 19 seconds between station signs. */
export const STATION_LEN = 380;

export interface Station {
  index: number;
  name: string;
  short: string;
  zone: Zone;
  line: string;
  color: string;
  landmark: 'eiffel' | 'defense' | null;
  d0: number;
  d1: number;
}

const flat: { name: string; leg: Leg }[] = [];
for (const leg of LEGS) {
  for (const name of leg.names) {
    if (!name) continue;
    // keep the loop short: skip a station that just appeared on the previous leg
    if (flat.length && flat[flat.length - 1].name === name) continue;
    flat.push({ name, leg });
  }
}

export const stations: Station[] = flat.map((s, index) => ({
  index,
  name: s.name,
  short: s.name.replace(/^Gare\s+/i, '').toUpperCase(),
  zone: zoneOf(s.name, s.leg.zone),
  line: s.leg.line,
  color: s.leg.color,
  landmark: landmarkOf(s.name),
  d0: index * STATION_LEN,
  d1: (index + 1) * STATION_LEN,
}));

export function stationIndexAt(d: number) {
  return Math.max(0, Math.floor(d / STATION_LEN)) % stations.length;
}
export function stationAt(d: number) {
  return stations[stationIndexAt(d)];
}
/** Zone at a distance, including the last 20 m of a station that melt into the next one. */
export function zoneAt(d: number): Zone {
  return stationAt(Math.max(0, d + 20)).zone;
}
/** The line a stretch of track belongs to. */
export function lineAt(d: number) {
  return stationAt(Math.max(0, d + 20));
}
