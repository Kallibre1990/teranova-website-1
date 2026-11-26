import type { Lang } from '../i18n/ui';
import type master from './tonever-2026/ru.json';
import ru from './tonever-2026/ru.json';
import en from './tonever-2026/en.json';
import ko from './tonever-2026/ko.json';
import zh from './tonever-2026/zh.json';
import ja from './tonever-2026/ja.json';
import it from './tonever-2026/it.json';
import de from './tonever-2026/de.json';
import fr from './tonever-2026/fr.json';
import tr from './tonever-2026/tr.json';
import es from './tonever-2026/es.json';
import pt from './tonever-2026/pt.json';
import he from './tonever-2026/he.json';
import hi from './tonever-2026/hi.json';
import ar from './tonever-2026/ar.json';
import { publicLocaleCodes } from '../i18n/locale-policy.mjs';

export type Tonever2026 = typeof master;
const files = { ru, en, ko, zh, ja, it, de, fr, tr, es, pt, he, hi, ar };
export const tonever2026 = Object.fromEntries(publicLocaleCodes.map((lang) => {
  const copy = files[lang as Lang];
  if (!copy) throw new Error(`Missing TONEVER 2026 locale: ${lang}`);
  return [lang, copy];
})) as Record<Lang, Tonever2026>;

export const tonever2026Products = ['the-pamin', 'rebelook', 'ready-booster', '72k-film-ampoule'] as const;
export type Tonever2026Product = typeof tonever2026Products[number];
export const toneverEditorialPhotos = [
  { product: 'the-pamin', src: '/img/suppliers/tonever/2026/the-pamin.webp', w: 1560, h: 1154 },
  { product: 'rebelook', src: '/img/suppliers/tonever/2026/rebelook.webp', w: 1560, h: 866 },
  { product: 'ready-booster', src: '/img/suppliers/tonever/2026/ready-booster.webp', w: 1560, h: 1104 },
  { product: '72k-film-ampoule', src: '/img/suppliers/tonever/2026/72k-film-ampoule.webp', w: 1560, h: 1100 },
] as const;
