/* DEMO suppliers for catalog category pages — FICTIONAL placeholders, clearly
   labelled «Демо» in the UI. Names are invented (not real brands); contacts are
   non-real (example.com / 0000 phones). Localized parts (role, status, blurb,
   tags) come from the dictionaries, so this file stays language-neutral.
   Replace with real verified suppliers later. */
import type { CategoryKey } from './site';

export interface DemoSupplier {
  name: string;
  initials: string;
  role: 'maker' | 'oem' | 'exporter'; // -> pages.group.role_*
  status: 'visited' | 'provided'; // -> verify.card_visited/provided
  blurb: number; // index into pages.group.blurbs
  tags: number[]; // indexes into the category's items (sub-niches)
  email: string;
  phone: string;
}

const p = (n: string) => `+82 (00) 0000-${n}`;

export const demoSuppliers: Record<CategoryKey, DemoSupplier[]> = {
  marine: [
    { name: 'Haeyang Marine Supply', initials: 'HM', role: 'maker', status: 'visited', blurb: 0, tags: [0, 1], email: 'demo@haeyang-marine.example', phone: p('1011') },
    { name: 'Daejin Ship Equipment', initials: 'DS', role: 'exporter', status: 'provided', blurb: 2, tags: [2, 3], email: 'demo@daejin-ship.example', phone: p('1012') },
    { name: 'Saebit Deck Co.', initials: 'SD', role: 'maker', status: 'provided', blurb: 3, tags: [1, 4], email: 'demo@saebit-deck.example', phone: p('1013') },
    { name: 'Nara Propulsion', initials: 'NP', role: 'maker', status: 'visited', blurb: 1, tags: [2, 5], email: 'demo@nara-propulsion.example', phone: p('1014') },
  ],
  cosmetics: [
    { name: 'Sodam Cosmetic', initials: 'SC', role: 'oem', status: 'visited', blurb: 1, tags: [0, 1], email: 'demo@sodam-cosmetic.example', phone: p('2011') },
    { name: 'Yeon Lab', initials: 'YL', role: 'oem', status: 'provided', blurb: 1, tags: [1, 2], email: 'demo@yeon-lab.example', phone: p('2012') },
    { name: 'Pureun Beauty', initials: 'PB', role: 'maker', status: 'provided', blurb: 0, tags: [3, 4], email: 'demo@pureun-beauty.example', phone: p('2013') },
    { name: 'Maru Skincare', initials: 'MS', role: 'exporter', status: 'visited', blurb: 2, tags: [0, 5], email: 'demo@maru-skincare.example', phone: p('2014') },
  ],
  medical: [
    { name: 'Mirae Medi', initials: 'MM', role: 'maker', status: 'visited', blurb: 0, tags: [0, 3], email: 'demo@mirae-medi.example', phone: p('3011') },
    { name: 'Sumi Aesthetics', initials: 'SA', role: 'exporter', status: 'provided', blurb: 2, tags: [0, 1], email: 'demo@sumi-aesthetics.example', phone: p('3012') },
    { name: 'Jeong Medical', initials: 'JM', role: 'maker', status: 'provided', blurb: 3, tags: [4, 5], email: 'demo@jeong-medical.example', phone: p('3013') },
    { name: 'Haneul MedTech', initials: 'HM', role: 'oem', status: 'visited', blurb: 1, tags: [2, 3], email: 'demo@haneul-medtech.example', phone: p('3014') },
  ],
  industrial: [
    { name: 'Daon CNC', initials: 'DC', role: 'maker', status: 'visited', blurb: 0, tags: [0, 1], email: 'demo@daon-cnc.example', phone: p('4011') },
    { name: 'Seojin Machinery', initials: 'SM', role: 'maker', status: 'provided', blurb: 0, tags: [2, 3], email: 'demo@seojin-machinery.example', phone: p('4012') },
    { name: 'Hando Automation', initials: 'HA', role: 'exporter', status: 'provided', blurb: 2, tags: [2, 4], email: 'demo@hando-automation.example', phone: p('4013') },
    { name: 'Garam Tooling', initials: 'GT', role: 'maker', status: 'visited', blurb: 3, tags: [5, 4], email: 'demo@garam-tooling.example', phone: p('4014') },
  ],
  transport: [
    { name: 'Daero Motors', initials: 'DM', role: 'maker', status: 'visited', blurb: 0, tags: [0, 1], email: 'demo@daero-motors.example', phone: p('5011') },
    { name: 'Hanwoori Trucks', initials: 'HT', role: 'exporter', status: 'provided', blurb: 2, tags: [0, 5], email: 'demo@hanwoori-trucks.example', phone: p('5012') },
    { name: 'Saero Special Vehicles', initials: 'SV', role: 'maker', status: 'provided', blurb: 0, tags: [2, 4], email: 'demo@saero-special.example', phone: p('5013') },
    { name: 'Jisan Bus', initials: 'JB', role: 'maker', status: 'visited', blurb: 3, tags: [1, 5], email: 'demo@jisan-bus.example', phone: p('5014') },
  ],
  adjacent: [
    { name: 'Maru Materials', initials: 'MM', role: 'maker', status: 'visited', blurb: 0, tags: [0, 5], email: 'demo@maru-materials.example', phone: p('6011') },
    { name: 'Saebom Packaging', initials: 'SP', role: 'maker', status: 'provided', blurb: 3, tags: [1, 5], email: 'demo@saebom-packaging.example', phone: p('6012') },
    { name: 'Daon Eco', initials: 'DE', role: 'exporter', status: 'provided', blurb: 2, tags: [2, 3], email: 'demo@daon-eco.example', phone: p('6013') },
    { name: 'Nuri Tech', initials: 'NT', role: 'maker', status: 'visited', blurb: 0, tags: [4, 3], email: 'demo@nuri-tech.example', phone: p('6014') },
  ],
  chemical: [
    { name: 'Cheonggu Chem', initials: 'CC', role: 'maker', status: 'visited', blurb: 0, tags: [0, 1], email: 'demo@cheonggu-chem.example', phone: p('7011') },
    { name: 'Saemul Polymers', initials: 'SP', role: 'maker', status: 'provided', blurb: 0, tags: [1, 2], email: 'demo@saemul-polymers.example', phone: p('7012') },
    { name: 'Hanseo Materials', initials: 'HM', role: 'exporter', status: 'provided', blurb: 2, tags: [3, 4], email: 'demo@hanseo-materials.example', phone: p('7013') },
    { name: 'Boram Chemical', initials: 'BC', role: 'maker', status: 'visited', blurb: 3, tags: [0, 5], email: 'demo@boram-chemical.example', phone: p('7014') },
  ],
};
