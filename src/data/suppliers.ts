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
import santeLines from './suppliers-i18n/sante.lines.json';

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
  price_btn?: string;
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
  /* Real product catalog grouped by line, with photos, volume, price, certs. Language-neutral. */
  catalog?: { line: string; items: { name: string; img: string; volume?: string; price?: string; certs?: string[] }[] }[];
  /* Certifications/registrations declared by the company (shown with a caveat). */
  certs?: string[];
  /* Downloadable terms sheet (per language, path under /public). */
  termsFile?: Partial<Record<Lang, string>>;
  priceFile?: Partial<Record<Lang, string>>;
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
    'Очищающее средство со слабокислым pH 5.5, близким к состоянию здоровой кожи; гипоаллергенное, увлажняет, успокаивает и укрепляет барьер кожи.',
    'Гель на основе ромашковой воды. Быстро успокаивает, охлаждает и увлажняет кожу, раздражённую улицей, солнцем, УФ, отоплением или кондиционером.',
    'Тонер на основе экстракта ромашки и азулена вместо очищенной воды, с 50 000 ppm экстракта мяты горы Чирисан для успокоения и увлажнения; технология Aquaporin для глубокого увлажнения.',
    'Мягко кислотное гипоаллергенное очищающее молочко (pH 5.5), снимает дневной макияж и даже солнцезащиту, оставляя увлажняющий барьер без стянутости.',
    'Лосьон с настоящим синим азуленом на ромашковой воде. Содержит пантенол и церамид NP; прошёл гипоаллергенные тесты для чувствительной и детской кожи.',
    'Солнцезащитная эссенция на ромашковой воде с 11 видами гиалуроновой кислоты; увлажняет весь день и защищает от УФ. Экстракт софоры успокаивает и удерживает влагу.',
    'Смываемая крем-маска на ромашковой воде с 1 000 ppm гуайазулена, 20 000 ppm дэкспантенола и 8 видами гиалуроновой кислоты. Увлажняет, успокаивает и смягчает кожу.',
    'Крем натурального синего цвета азулена без искусственных красителей. Сильное успокоение, удержание влаги и защита, баланс воды и себума для здоровья кожи.',
    'Успокаивающий уход Azulene Soother в компактном формате стика.',
    'Тканевая маска из биоцеллюлозы, эссенция на 87% ромашковой воде для быстрого успокоения и увлажнения. Восстанавливающий лист 4-го поколения плотно прилегает и доставляет активные компоненты.',
    'Несохнущая гелевая моделирующая маска с 79% ромашковой воды и азуленом. Мгновенно успокаивает разогретую кожу и укрепляет барьер влаги.',
    'Ампула для чувствительной кожи с высоким содержанием азулена (известна среди эстетических брендов). Сильное успокоение, удержание влаги и защита.',
    'Сыворотка-эксфолиант с PHA и LHA на ромашковой воде. Мягко удаляет ороговевшие клетки без раздражения, увлажняет и придаёт сияние.',
    'Мист-спрей для успокоения, расслабления, увлажнения и питания уставшей и раздражённой кожи.',
    'Тонер-пэды из гелифицированного натурального бамбукового волокна. Мягко прилегают, предотвращают потерю влаги и доставляют активные компоненты весь день с эффектом обёртывания.',
    'Сменный блок для тонер-пэдов Azulene Soother Semi-Gel.',
    'Слабокислый успокаивающий тонер, контролирует избыток себума и улучшает поры; подходит для ежедневного ухода даже за чувствительной кожей.',
    'Полугелевая маска для лица и шеи с выраженным антибактериальным и противовоспалительным действием; быстро успокаивает кожу и помогает при несовершенствах.',
    'Веганский пэд из экологичных материалов (хлопок и Tencel). Не рвётся и не растягивается, прилегает без раздражения, впитывает тонер в кожу.',
    'Надёжное масло жожоба из Израиля высшего сорта, сертификат USDA. Нерафинированное холодного отжима — выше антиоксидантный эффект; структура близка к барьеру кожи, помогает восстановить и укрепить его.',
    'Надёжное масло жожоба из Израиля высшего сорта, сертификат USDA. Нерафинированное холодного отжима — выше антиоксидантный эффект; структура близка к барьеру кожи, помогает восстановить и укрепить его.',
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
    price_btn: 'Скачать прайс-лист (PDF)',
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
    priceFile: {
      ru: '/docs/sante-price-ru.pdf', en: '/docs/sante-price-en.pdf', ko: '/docs/sante-price-ko.pdf', zh: '/docs/sante-price-zh.pdf', ja: '/docs/sante-price-ja.pdf', it: '/docs/sante-price-it.pdf', de: '/docs/sante-price-de.pdf', fr: '/docs/sante-price-fr.pdf', tr: '/docs/sante-price-tr.pdf',
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

/* Dedicated, indexable line pages (SEO): one per important product line. */
export interface SupplierLineItem {
  name: string;
  volume?: string;
  price?: string;
  certs?: string[];
}
export interface SupplierLineContent {
  seoTitle: string;
  seoDesc: string;
  tagline: string;
  about: string[];
  itemNotes: string[];
}
export interface SupplierLinePage {
  slug: string;
  supplierSlug: string;
  category: CategoryKey;
  items: SupplierLineItem[];
  i18n: Partial<Record<Lang, SupplierLineContent>>;
}
export const linePageContent = (p: SupplierLinePage, lang: Lang): SupplierLineContent => p.i18n[lang] ?? p.i18n.ru!;

export const supplierBySlug = (slug: string): SupplierProfile | undefined => suppliers.find((s) => s.slug === slug);
export const supplierSlugs = suppliers.map((s) => s.slug);

export const linePages: SupplierLinePage[] = santeLines as SupplierLinePage[];
export const linePageBySlug = (supplierSlug: string, slug: string): SupplierLinePage | undefined =>
  linePages.find((p) => p.supplierSlug === supplierSlug && p.slug === slug);
/** Localized content with ru fallback. */
export const supplierContent = (p: SupplierProfile, lang: Lang): SupplierContent => p.i18n[lang] ?? p.i18n.ru!;
