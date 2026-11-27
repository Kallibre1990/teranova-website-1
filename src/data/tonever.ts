import profileru from './suppliers-i18n/tonever.ru.json';
import copyru from '../../docs/tonever-copy/ru.json';
import profileen from './suppliers-i18n/tonever.en.json';
import copyen from '../../docs/tonever-copy/en.json';
import profileko from './suppliers-i18n/tonever.ko.json';
import copyko from '../../docs/tonever-copy/ko.json';
import profilezh from './suppliers-i18n/tonever.zh.json';
import copyzh from '../../docs/tonever-copy/zh.json';
import profileja from './suppliers-i18n/tonever.ja.json';
import copyja from '../../docs/tonever-copy/ja.json';
import profileit from './suppliers-i18n/tonever.it.json';
import copyit from '../../docs/tonever-copy/it.json';
import profilede from './suppliers-i18n/tonever.de.json';
import copyde from '../../docs/tonever-copy/de.json';
import profilefr from './suppliers-i18n/tonever.fr.json';
import copyfr from '../../docs/tonever-copy/fr.json';
import profiletr from './suppliers-i18n/tonever.tr.json';
import copytr from '../../docs/tonever-copy/tr.json';
import profilees from './suppliers-i18n/tonever.es.json';
import copyes from '../../docs/tonever-copy/es.json';
import profilept from './suppliers-i18n/tonever.pt.json';
import copypt from '../../docs/tonever-copy/pt.json';
import profilehe from './suppliers-i18n/tonever.he.json';
import copyhe from '../../docs/tonever-copy/he.json';
import profilehi from './suppliers-i18n/tonever.hi.json';
import copyhi from '../../docs/tonever-copy/hi.json';
import profilear from './suppliers-i18n/tonever.ar.json';
import copyar from '../../docs/tonever-copy/ar.json';
import type { SupplierProfile, SupplierLinePage, SupplierContent } from './suppliers';
import type { Lang } from '../i18n/ui';
import { publicLocaleCodes } from '../i18n/locale-policy.mjs';
import { tonever2026, type Tonever2026Product } from './tonever-2026';

// T-20261119-032: each document name keeps its own evidence. No inferred rename.
const toneverItemsSlugs = ['the-pamin', 'lumilook', 'rebelook', 'ready-booster', 'axis-ampoule', '72k-film-ampoule', 'lumeniq-cream', 'nude-fixer', 'aurora-serum'];
const payloads = {ru: profileru, en: profileen, ko: profileko, zh: profilezh, ja: profileja, it: profileit, de: profilede, fr: profilefr, tr: profiletr, es: profilees, pt: profilept, he: profilehe, hi: profilehi, ar: profilear};
const translations = Object.fromEntries(publicLocaleCodes.map((lang) => {
  const payload = payloads[lang as Lang] as { content: Omit<SupplierContent, 'ui'>; ui: SupplierContent['ui'] };
  if (!payload) throw new Error(`Missing TONEVER translation: ${lang}`);
  const extension = tonever2026[lang as Lang];
  const lines = payload.content.lines.map((line, index) => {
    const product = extension.products[toneverItemsSlugs[index] as Tonever2026Product];
    return product ? { ...line, note: product.about[0] } : line;
  });
  return [lang, {
    ...payload.content,
    about: [...payload.content.about.slice(0, 3), extension.profileIntro, ...payload.content.about.slice(3)],
    lines,
    catalog_notes: lines.map((line) => line.note),
    tech: extension.tech.map((item) => ({ name: item.title, note: item.note })),
    ui: { ...payload.ui, tech_note: extension.ingredientsNote },
  }];
})) as Record<Lang, SupplierContent>;

export const toneverItems = [
  { slug: 'the-pamin', name: 'THE PAMIN', volume: tonever2026.en.products['the-pamin'].format, volumeI18n: Object.fromEntries(publicLocaleCodes.map((lang) => [lang, tonever2026[lang as Lang].products['the-pamin'].format])), img: '/img/suppliers/tonever/the-pamin.png', actives: ['Human Adipocyte Conditioned Media Extract', 'Sodium DNA', 'Hydrolyzed Collagen', 'Niacinamide', 'Madecassoside', 'Panthenol', 'Ceramide NP'] },
  { slug: 'lumilook', name: 'LUMILOOK', volume: '7 ml + 7 ml', img: '/img/suppliers/tonever/lumilook.png' },
  { slug: 'rebelook', name: 'REBELOOK', img: '/img/suppliers/tonever/rebelook.png' },
  { slug: 'ready-booster', name: 'READY BOOSTER', volume: '200 ml', img: '/img/suppliers/tonever/ready-booster.png' },
  { slug: 'axis-ampoule', name: 'AXIS AMPOULE', volume: '100 ml', img: '/img/suppliers/tonever/axis-ampoule.png' },
  { slug: '72k-film-ampoule', name: '72K FILM AMPOULE', volume: '50 ml', img: '/img/suppliers/tonever/72k-film-ampoule.png' },
  { slug: 'lumeniq-cream', name: 'LUMENIQ CREAM', volume: '100 ml', img: '/img/suppliers/tonever/lumeniq-cream.png' },
  { slug: 'nude-fixer', name: 'NUDE FIXER', volume: '30 ml', img: '/img/suppliers/tonever/nude-fixer.png' },
  // Only a concept silhouette was supplied. Do not invent a packshot or volume.
  { slug: 'aurora-serum', name: 'AURORA SERUM' },
];

export const toneverProfile: SupplierProfile = {
  slug: 'tonever', name: 'TONEVER', brand: 'TONEVER', category: 'cosmetics', country: 'kr',
  status: 'provided', voice: 'premium',
  brandColors: { deep: 'oklch(28% 0.015 75)', sky: 'oklch(75% 0.05 80)', accent: 'oklch(45% 0.055 75)', bg: 'oklch(98% 0.012 85)' },
  catalog: [{ line: 'TONEVER', items: toneverItems }],
  i18n: translations,
};

const copies = {ru: copyru, en: copyen, ko: copyko, zh: copyzh, ja: copyja, it: copyit, de: copyde, fr: copyfr, tr: copytr, es: copyes, pt: copypt, he: copyhe, hi: copyhi, ar: copyar};
export const toneverLines: SupplierLinePage[] = toneverItems.map((item, index) => ({
  slug: item.slug, supplierSlug: 'tonever', category: 'cosmetics', lineName: item.name, items: [item],
  i18n: Object.fromEntries(publicLocaleCodes.map((lang) => {
    const copy = copies[lang as Lang] as { products: { slug: string; about: string[] }[] };
    const product = copy?.products[index];
    if (!product || product.slug !== item.slug) throw new Error(`TONEVER product mismatch: ${lang}/${item.slug}`);
    const extension = tonever2026[lang as Lang];
    const expanded = extension.products[item.slug as Tonever2026Product];
    const about = expanded ? [...expanded.about, extension.ingredientsNote] : product.about;
    return [lang, {
      seoTitle: `${item.name} · TONEVER · Teranova`, seoDesc: about[0],
      tagline: expanded?.format ?? product.about[0].split(/[.!?。]/)[0], about, itemNotes: expanded ? [] : [product.about[0]],
    }];
  })),
}));
