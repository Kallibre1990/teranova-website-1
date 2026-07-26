/* Real suppliers published WITH written consent — the opposite of demoSuppliers.
   First entry: SANTE COSMETICS / Dr.SANTE (InterCHARM Korea 2026; written consent
   to publish logo, product images and catalogs on the Teranova platform, 2026-07-20).

   Content is localized per language in `i18n` (ru is the source of truth). Neutral,
   language-independent fields (slug, name, brand, status, brand colors) live on the
   profile itself. This shape is what the supplier pipeline fills per company.

   RULES honored (docs/CONTENT-RULES.md): status 'provided' (fair, not a factory
   visit); origin "Korea" only (no city); no invented metrics or unverified certs;
   no supplier personal contacts (contact via Teranova). All copy from the supplier's
   own site/catalog. */
import type { CategoryKey } from './site';
import type { Lang } from '../i18n/ui';
import santeEn from './suppliers-i18n/sante.en.json';
import santeKo from './suppliers-i18n/sante.ko.json';
import santeZh from './suppliers-i18n/sante.zh.json';
import santeJa from './suppliers-i18n/sante.ja.json';
import santeIt from './suppliers-i18n/sante.it.json';
import santeDe from './suppliers-i18n/sante.de.json';
import santeFr from './suppliers-i18n/sante.fr.json';
import santeTr from './suppliers-i18n/sante.tr.json';
import santeCatalog from './suppliers-i18n/sante.catalog.json';

export interface SupplierLine {
  name: string;
  note: string;
}
export interface SupplierTech {
  name: string;
  note: string;
}
export interface SupplierUI {
  profile_sup: string;
  about_h: string;
  for_whom: string;
  lines_h: string;
  catalog_h: string;
  tech_h: string;
  products_h: string;
  products_note: string;
  formats_h: string;
  export_h: string;
  terms_h?: string;
  download_btn?: string;
  terms_disc?: string;
  cta_h: string;
  cta_d: string;
  cta_btn: string;
  more: string;
  verified_suppliers: string;
  certs_h?: string;
  certs_note?: string;
}
export interface SupplierContent {
  tagline: string;
  descriptor: string;
  origin: string;
  about: string[];
  facts: string[];
  channels: string[];
  lines: SupplierLine[];
  tech: SupplierTech[];
  formats: string[];
  exportNote: string;
  terms?: { label: string; value: string }[];
  consentNote: string;
  /* Per-product short notes, aligned by flat index with profile.catalog items. */
  catalog_notes?: string[];
  seoTitle: string;
  seoDesc: string;
  ui: SupplierUI;
}
export interface SupplierProfile {
  slug: string;
  category: CategoryKey;
  name: string; // company display name (language-neutral)
  brand: string; // primary brand (language-neutral)
  status: 'visited' | 'provided';
  brandColors: { deep: string; sky: string; accent: string; bg: string };
  /* Real product catalog grouped by line, with product photos. Language-neutral. */
  catalog?: { line: string; items: { name: string; img: string }[] }[];
  /* Certifications/registrations declared by the company (shown with a caveat). */
  certs?: string[];
  /* Downloadable terms sheet (per language, path under /public). */
  termsFile?: Partial<Record<Lang, string>>;
  i18n: Partial<Record<Lang, SupplierContent>>;
}

const santeRu: SupplierContent = {
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
  terms: [
    { label: 'Форматы сотрудничества', value: 'Оптовые поставки готовой продукции; OEM/ODM — собственная разработка и производство.' },
    { label: 'Минимальный заказ', value: 'Ориентировочно от $4 000 на первый заказ; небольшие партии по отдельным позициям.' },
    { label: 'Цены', value: 'Ориентировочный оптовый диапазон FOB; точные цены — по запросу на стадии сделки.' },
    { label: 'Как идёт работа', value: 'Заявка → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата под ключ.' },
  ],
  consentNote: 'Данные и материалы предоставлены компанией SANTE COSMETICS и публикуются с её письменного согласия. Teranova координирует и сопровождает сделку.',
  catalog_notes: [
    'Очищающее средство линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Гель линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Тонер линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Очищающее средство линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Лосьон линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Солнцезащитное средство линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Крем-маска линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Крем линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Гель-стик линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Маска линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Моделирующая маска линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Ампульный концентрат линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Сыворотка линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Мист линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Тонер-пэды линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Тонер-пэды линейки Azulene Soother — успокаивающий уход для чувствительной и склонной к раздражению кожи.',
    'Тонер линейки Artemisia AKA — уход для проблемной, склонной к воспалениям кожи.',
    'Маска линейки Artemisia AKA — уход для проблемной, склонной к воспалениям кожи.',
    'Тонер-пэды линейки Artemisia AKA — уход для проблемной, склонной к воспалениям кожи.',
    'Масло линейки Elsol — питательный уход за кожей.',
    'Масло линейки Elsol — питательный уход за кожей.',
  ],
  seoTitle: 'SANTE COSMETICS (Dr.SANTE) — корейская эстетическая косметика · Teranova Group',
  seoDesc: 'SANTE COSMETICS (Dr.SANTE) — профессиональная эстетическая косметика из Кореи. Линейки Azulene Soother, Artemisia AKA, Collagen Leader, Hyalquad Core для чувствительной и проблемной кожи. Поставки и сопровождение сделки через Teranova.',
  ui: {
    profile_sup: 'Профиль поставщика',
    about_h: 'О компании',
    for_whom: 'Для кого:',
    lines_h: 'Продуктовые линейки',
    catalog_h: 'Каталог продукции',
    tech_h: 'Фирменные решения',
    products_h: 'Продукция',
    products_note: 'Профессиональные форматы Dr.SANTE — очищение, тонизирование, ампулы, кремы, маски, солнцезащита и масла. Линейки Azulene Soother и AKA объединены единым визуальным языком бренда.',
    formats_h: 'Форматы продукции',
    export_h: 'Экспорт',
    terms_h: 'Условия сотрудничества',
    download_btn: 'Скачать условия (PDF)',
    terms_disc: 'Цены и условия ориентировочные и уточняются на стадии сделки через Teranova. Прямые контакты производителя не публикуются.',
    cta_h: 'Заинтересовал этот производитель?',
    cta_d: 'Свяжитесь с нами — Teranova организует переговоры, проверку и сопровождение сделки от первого контакта до поставки.',
    cta_btn: 'Связаться через Teranova',
    more: 'Открыть профиль →',
    verified_suppliers: 'Проверенные поставщики',
    certs_h: 'Сертификаты и регистрации',
    certs_note: 'Заявлено компанией. Копии подтверждающих документов предоставляются на стадии сделки.',
  },
};

/* Translator agents return { content: {...}, ui: {...} }; flatten to SupplierContent. */
const mk = (j: { content: Record<string, unknown>; ui: SupplierUI }): SupplierContent => ({ ...(j.content as unknown as Omit<SupplierContent, 'ui'>), ui: j.ui });

export const suppliers: SupplierProfile[] = [
  {
    slug: 'sante',
    category: 'cosmetics',
    name: 'SANTE COSMETICS',
    brand: 'Dr.SANTE',
    status: 'provided',
    brandColors: { deep: '#12306e', sky: '#4ca6fc', accent: '#ff2552', bg: '#f3f8ff' },
    catalog: santeCatalog as { line: string; items: { name: string; img: string }[] }[],
    certs: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'MoCRA', 'CPNP', 'HALAL', 'NMPA', 'SCPN', 'DAV'],
    termsFile: {
      ru: '/docs/sante-terms-ru.pdf',
      en: '/docs/sante-terms-en.pdf',
      ko: '/docs/sante-terms-ko.pdf',
      zh: '/docs/sante-terms-zh.pdf',
      ja: '/docs/sante-terms-ja.pdf',
      it: '/docs/sante-terms-it.pdf',
      de: '/docs/sante-terms-de.pdf',
      fr: '/docs/sante-terms-fr.pdf',
      tr: '/docs/sante-terms-tr.pdf',
    },
    i18n: {
      ru: santeRu,
      en: mk(santeEn),
      ko: mk(santeKo),
      zh: mk(santeZh),
      ja: mk(santeJa),
      it: mk(santeIt),
      de: mk(santeDe),
      fr: mk(santeFr),
      tr: mk(santeTr),
    },
  },
];

export const supplierBySlug = (slug: string): SupplierProfile | undefined => suppliers.find((s) => s.slug === slug);
export const supplierSlugs = suppliers.map((s) => s.slug);
/** Localized content with ru fallback. */
export const supplierContent = (p: SupplierProfile, lang: Lang): SupplierContent => p.i18n[lang] ?? p.i18n.ru!;
