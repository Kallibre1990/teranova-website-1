import type { SupplierProfile } from './suppliers';
import type { Lang } from '../i18n/ui';
import { publicLocaleCodes } from '../i18n/locale-policy.mjs';
import catalog from './suppliers-i18n/agafar.catalog.json';
import ru from './suppliers-i18n/agafar.ru.json';
import en from './suppliers-i18n/agafar.en.json';
import ko from './suppliers-i18n/agafar.ko.json';
import zh from './suppliers-i18n/agafar.zh.json';
import ja from './suppliers-i18n/agafar.ja.json';
import it from './suppliers-i18n/agafar.it.json';
import de from './suppliers-i18n/agafar.de.json';
import fr from './suppliers-i18n/agafar.fr.json';
import tr from './suppliers-i18n/agafar.tr.json';
import es from './suppliers-i18n/agafar.es.json';
import pt from './suppliers-i18n/agafar.pt.json';
import he from './suppliers-i18n/agafar.he.json';
import hi from './suppliers-i18n/agafar.hi.json';

const translations = { ru, en, ko, zh, ja, it, de, fr, tr, es, pt, he, hi };
for (const lang of publicLocaleCodes) {
  if (!translations[lang as Lang]) throw new Error(`Missing AGAFAR locale: ${lang}`);
}
export const agafarEditorial = (lang: Lang) => translations[lang].editorial;

export const agafarProfile: SupplierProfile = {
  slug: 'agafar', name: 'AGAFAR', brand: 'AGAFAR', category: 'cosmetics', country: 'kr',
  // A meeting is not a factory inspection. Release task 095 owns visibility.
  status: 'provided',
  brandColors: { deep: 'oklch(28% 0.05 255)', sky: 'oklch(85% 0.03 255)', accent: 'oklch(42% 0.12 255)', bg: 'oklch(98% 0.008 85)' },
  voice: 'clinical',
  catalog,
  // Presentation and terms files are supplied by dependent task 094.
  i18n: Object.fromEntries(Object.entries(translations).map(([lang, value]) => [lang, { ...value.content, ui: value.ui }])),
};

export const agafarDeviceImages: Record<string, string> = {
  'Transfer': 'tech/transfer.webp',
  'agafar Point Plus': 'scenes/agafar-point-plus.webp',
  'agafar Point Plus Pro': 'tech/point-plus-pro.webp',
  'agafar Line S': 'tech/line-s.webp',
  'agafar S': 'tech/agafar-s.webp',
  'PLASMA': 'tech/plasma.webp',
  'agafar LED PDT Light': 'tech/led-pdt-light.webp',
  'Face Fitness Turn Up': 'tech/face-fitness-turn-up.webp',
  'PLAZION': 'scenes/plazion.webp',
};
