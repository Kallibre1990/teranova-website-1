/* Real suppliers published WITH written consent — the opposite of demoSuppliers.
   First entry: SANTE COSMETICS / Dr.SANTE (InterCHARM Korea 2026; written consent
   to publish logo, product images and catalogs on the Teranova platform, 2026-07-20).

   Content is Russian for this first pass (single-language preview); it moves to
   i18n (src/i18n/locales/*) when the profile is localized to all 9 languages.

   All copy below is drawn from the supplier's OWN materials (their site + catalog),
   honoring docs/CONTENT-RULES.md:
   - status = 'provided' (met at the fair, no factory visit → NOT 'visited').
   - No city ("Busan") — only "Korea".
   - No boastful invented metrics and no certifications as fact (copies not received).
   - No supplier personal contacts — all contact goes through Teranova. */
import type { CategoryKey } from './site';

export interface SupplierLine {
  name: string;
  note: string;
}
export interface SupplierTech {
  name: string;
  note: string;
}

export interface SupplierProfile {
  slug: string;
  category: CategoryKey;
  name: string; // company display name
  brand: string; // primary brand
  status: 'visited' | 'provided';
  tagline: string; // brand slogan (from the business card)
  descriptor: string; // one-line under the name
  origin: string; // country line — "Korea", never a city
  about: string[]; // paragraphs
  facts: string[]; // neutral chips (no boastful numbers)
  channels: string[]; // who the products are for (professional segment)
  lines: SupplierLine[]; // product ranges
  tech: SupplierTech[]; // signature ingredients / technologies
  formats: string[]; // product formats
  exportNote: string; // export reach, no invented figures
  seoKeywords: string; // meta keywords line (also feeds meta description)
  /* Supplier brand accent palette (used to theme the profile). Derived from the
     Dr.SANTE logo + site: deep indigo wordmark, sky-blue accent, magenta pop. */
  brandColors: { deep: string; sky: string; accent: string; bg: string };
  consentNote: string;
}

export const suppliers: SupplierProfile[] = [
  {
    slug: 'sante',
    category: 'cosmetics',
    name: 'SANTE COSMETICS',
    brand: 'Dr.SANTE',
    status: 'provided',
    tagline: 'Ваш успех — наша радость',
    descriptor: 'Профессиональная эстетическая косметика из Кореи',
    origin: 'Корея',
    about: [
      'SANTE COSMETICS (бренд Dr.SANTE) — корейский эстетический бренд с более чем 20-летней историей (с 2003 года). Компания разрабатывает и производит профессиональную уходовую косметику, сочетая многолетний практический опыт, профессиональные знания и внимание к здоровью кожи.',
      'Философия бренда — здоровье и красота кожи одновременно. Продукция создаётся для профессионального сегмента и ориентирована на чувствительную, сухую, раздражённую и возрастную кожу.',
    ],
    facts: ['Эстетический бренд', 'С 2003 года', 'Собственная разработка и производство', 'Профессиональный сегмент', 'Экспорт за рубеж'],
    channels: ['Клиники эстетики', 'Дерматологические клиники', 'Кабинеты восточной медицины', 'Салоны красоты'],
    lines: [
      { name: 'Azulene Soother', note: 'Успокаивающая линейка с гуайазуленом и ромашковой водой: быстро снижает раздражение, понижает температуру кожи и укрепляет барьер, работая с первопричинами проблем чувствительной кожи. Кремы, сыворотки, маски, лосьоны, мисты, гели, солнцезащитные эссенции.' },
      { name: 'Artemisia AKA', note: 'Линейка для проблемной и раздражённой кожи с выраженным успокаивающим и противовоспалительным действием: ампулы, кремы и маски для восстановления и барьерного ухода.' },
      { name: 'Collagen Leader', note: 'Коллагеновый уход, ориентированный на упругость и возрастную кожу.' },
      { name: 'Hyalquad Core', note: 'Интенсивное увлажнение на комплексе гиалуроновой кислоты.' },
    ],
    tech: [
      { name: 'Гуайазулен + ромашковая вода', note: 'Real Blue Calming Solution — успокаивает раздражённую кожу, снижает её температуру и укрепляет защитный барьер.' },
      { name: 'LHASOL™', note: 'Фирменный кератолитический ингредиент 4-го поколения — стабилизированный LHA в высокой концентрации; помогает проблемной коже вернуться к здоровому слабокислому pH.' },
    ],
    formats: ['Ампулы', 'Сыворотки', 'Кремы', 'Маски', 'Тонеры и пэды', 'Очищающие средства', 'Солнцезащита', 'Мисты', 'Масла'],
    exportNote: 'Продукция Dr.SANTE поставляется за рубеж, включая рынки США и Японии.',
    seoKeywords: 'корейская эстетическая косметика, профессиональный уход за кожей, Dr.SANTE, азуленовая косметика, косметика для чувствительной кожи, OEM косметика Корея',
    brandColors: { deep: '#12306e', sky: '#4ca6fc', accent: '#ff2552', bg: '#f3f8ff' },
    consentNote: 'Данные и материалы предоставлены компанией SANTE COSMETICS и публикуются с её письменного согласия. Teranova координирует и сопровождает сделку.',
  },
];

export const supplierBySlug = (slug: string): SupplierProfile | undefined => suppliers.find((s) => s.slug === slug);
export const supplierSlugs = suppliers.map((s) => s.slug);
