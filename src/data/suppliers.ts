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
import santeEs from './suppliers-i18n/sante.es.json';
import santePt from './suppliers-i18n/sante.pt.json';
import santeCatalog from './suppliers-i18n/sante.catalog.json';
import santeLines from './suppliers-i18n/sante.lines.json';
import dreamcosEn from './suppliers-i18n/dreamcos.en.json';
import dreamcosKo from './suppliers-i18n/dreamcos.ko.json';
import dreamcosZh from './suppliers-i18n/dreamcos.zh.json';
import dreamcosJa from './suppliers-i18n/dreamcos.ja.json';
import dreamcosIt from './suppliers-i18n/dreamcos.it.json';
import dreamcosDe from './suppliers-i18n/dreamcos.de.json';
import dreamcosFr from './suppliers-i18n/dreamcos.fr.json';
import dreamcosTr from './suppliers-i18n/dreamcos.tr.json';
import dreamcosEs from './suppliers-i18n/dreamcos.es.json';
import dreamcosPt from './suppliers-i18n/dreamcos.pt.json';
import dongEn from './suppliers-i18n/dongdonggurimoo.en.json';
import dongKo from './suppliers-i18n/dongdonggurimoo.ko.json';
import dongZh from './suppliers-i18n/dongdonggurimoo.zh.json';
import dongJa from './suppliers-i18n/dongdonggurimoo.ja.json';
import dongIt from './suppliers-i18n/dongdonggurimoo.it.json';
import dongDe from './suppliers-i18n/dongdonggurimoo.de.json';
import dongFr from './suppliers-i18n/dongdonggurimoo.fr.json';
import dongTr from './suppliers-i18n/dongdonggurimoo.tr.json';
import dongEs from './suppliers-i18n/dongdonggurimoo.es.json';
import dongPt from './suppliers-i18n/dongdonggurimoo.pt.json';
import ckrEn from './suppliers-i18n/ck-regeon.en.json';
import ckrKo from './suppliers-i18n/ck-regeon.ko.json';
import ckrZh from './suppliers-i18n/ck-regeon.zh.json';
import ckrJa from './suppliers-i18n/ck-regeon.ja.json';
import ckrIt from './suppliers-i18n/ck-regeon.it.json';
import ckrDe from './suppliers-i18n/ck-regeon.de.json';
import ckrFr from './suppliers-i18n/ck-regeon.fr.json';
import ckrTr from './suppliers-i18n/ck-regeon.tr.json';
import ckrEs from './suppliers-i18n/ck-regeon.es.json';
import ckrPt from './suppliers-i18n/ck-regeon.pt.json';

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
  pres_btn?: string;
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
  presFile?: Partial<Record<Lang, string>>;
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
  seoTitle: 'SANTE COSMETICS (Dr.SANTE) — косметика из Кореи · Teranova',
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
    pres_btn: 'Скачать презентацию (PDF)',
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

/* DREAMCOS — head company of a Korean cosmetics group (InterCHARM Korea 2026).
   Published with written consent from the group's brand-holding entities
   (General Brands, Inc. and Celebritykorea Corporation) for LatAm markets.
   Group = 4 divisions: Dreamcos (platform/export), General Brands (skincare/
   fragrance brands), Celebritykorea (color/skincare brands), Atoz International
   (own OEM/ODM factory, ISO 9001 / ISO 22716 GMP). No product photos yet — the
   profile runs on text blocks; catalog(photos) intentionally omitted. */
const dreamcosRu: SupplierContent = {
  tagline: 'Партнёр для вывода косметического бренда на мировой рынок',
  descriptor: 'Корейская косметическая группа: OEM/ODM-производство и собственные бренды',
  origin: 'Корея',
  about: [
    'DREAMCOS — головная компания корейской косметической группы, которая объединяет разработку, производство и вывод брендов на международный рынок. В группу входят собственный OEM/ODM-завод Atoz International и бренд-подразделения General Brands и Celebritykorea, каждое со своим портфелем марок.',
    'Группа работает как платформа полного цикла: от разработки формулы и образца до производства, упаковки, экспорта и маркетинга. Продукция поставляется в страны Азии, Северной Америки и Европы через розничные сети и маркетплейсы.',
    'Компания отмечена как экспортёр на национальном уровне и входит в число перспективных предприятий Республики Корея.',
  ],
  facts: ['Косметическая группа полного цикла', 'Собственный OEM/ODM-завод (Atoz International)', 'ISO 9001 · ISO 22716 (GMP)', 'Портфель из 7 брендов', 'Экспорт в Азию, Америку и Европу'],
  channels: ['Импортёры и дистрибьюторы косметики', 'Розничные и аптечные сети', 'Маркетплейсы и e-commerce', 'Собственные и мультибрендовые магазины'],
  lines: [
    { name: 'DUFT&DOFT', note: 'Флагманский бренд группы: парфюмированный уход за телом, руками и волосами и нишевый парфюм. Широко представлен в корейской рознице (сеть Olive Young).' },
    { name: 'SALMON:LAB', note: 'Премиальный восстанавливающий уход с PDRN на основе ДНК лосося: ампулы, сыворотки и кремы линии VGENE, пятиступенчатая система ухода.' },
    { name: 'RUDIA', note: 'Функциональный уход для чувствительной кожи с активными формулами (глутатион, ретинол, бакучиол): сыворотки и питательные кремы. Перезапуск бренда в 2026 году.' },
    { name: 'LOVELYCC', note: 'Доступная декоративная косметика и солнцезащита для молодой аудитории: CC-кремы, кушоны, тинты, тени. Флагманский собственный бренд группы.' },
    { name: 'LADYBIZ', note: 'Декоративная косметика: лип-тинты, тени, кушон-консилеры. Стильный и практичный макияж на каждый день.' },
    { name: 'NOLIE', note: 'Премиальный уход за телом и средства личной гигиены для молодой аудитории.' },
    { name: 'CAMIHOUSE', note: 'Розничная и акселерирующая платформа группы для вывода косметических брендов на зарубежные рынки, включая флагманские офлайн-магазины.' },
  ],
  tech: [
    { name: 'OEM/ODM полного цикла', note: 'Собственный завод группы Atoz International (Седжон): разработка, производство, упаковка. Образцы за 7–10 дней, до ~20 тонн продукции в сутки, 7 линий упаковки.' },
    { name: 'PDRN на ДНК лосося', note: 'Премиальная восстанавливающая косметика бренда SALMON:LAB (линия VGENE) на основе PDRN — полинуклеотидов из ДНК лосося.' },
    { name: 'Парфюмерная разработка', note: 'Собственная экспертиза в парфюмированном уходе за телом и волосами и нишевом парфюме (бренды DUFT&DOFT, NOLIE).' },
  ],
  formats: ['Сыворотки и ампулы', 'Кремы и эмульсии', 'Маски', 'CC-кремы и кушоны', 'Тинты, тени, консилеры', 'Солнцезащита', 'Парфюм и мисты для тела', 'Уход за волосами', 'Средства гигиены'],
  exportNote: 'Продукция брендов группы поставляется в страны Азии, Юго-Восточной Азии, Северной Америки и Европы через розничные сети и маркетплейсы (в том числе Olive Young, Tmall, Amazon, iHerb, Qoo10, Shopee). Для рынков Латинской Америки материалы публикуются через Teranova.',
  terms: [
    { label: 'Форматы сотрудничества', value: 'Оптовые поставки готовой продукции по брендам; OEM/ODM — разработка и производство под маркой заказчика.' },
    { label: 'Минимальный заказ', value: 'Уточняется по бренду и позиции на стадии сделки.' },
    { label: 'Цены', value: 'Ориентировочный оптовый диапазон: SALMON:LAB — на условиях FOB, остальные бренды — EXW; точные цены по запросу.' },
    { label: 'Как идёт работа', value: 'Заявка → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата под ключ.' },
  ],
  consentNote: 'Данные и материалы предоставлены компаниями группы Dreamcos (General Brands, Inc. и Celebritykorea Corporation) и публикуются с их письменного согласия для рынков Латинской Америки. Прямые контакты производителя не раскрываются. Teranova координирует и сопровождает сделку.',
  seoTitle: 'DREAMCOS — корейская косметическая группа · Teranova',
  seoDesc: 'DREAMCOS — головная компания корейской косметической группы: собственный OEM/ODM-завод и бренды DUFT&DOFT, SALMON:LAB, RUDIA, LOVELYCC, LADYBIZ, NOLIE. Поставки и сопровождение сделки через Teranova.',
  ui: {
    profile_sup: 'Профиль поставщика',
    about_h: 'О компании',
    for_whom: 'Для кого:',
    lines_h: 'Бренды группы',
    catalog_h: 'Каталог продукции',
    tech_h: 'Возможности и технологии',
    products_h: 'Продукция',
    products_note: 'Бренды группы Dreamcos охватывают уход за кожей, декоративную косметику, солнцезащиту и парфюмированный уход за телом.',
    formats_h: 'Форматы продукции',
    export_h: 'Экспорт и рынки',
    terms_h: 'Условия сотрудничества',
    download_btn: 'Скачать условия (PDF)',
    price_btn: 'Скачать прайс-лист (PDF)',
    pres_btn: 'Скачать презентацию (PDF)',
    terms_disc: 'Цены и условия ориентировочные и уточняются на стадии сделки через Teranova. Прямые контакты производителя не публикуются.',
    cta_h: 'Заинтересовал этот производитель?',
    cta_d: 'Свяжитесь с нами — Teranova организует переговоры, проверку и сопровождение сделки от первого контакта до поставки.',
    cta_btn: 'Связаться через Teranova',
    more: 'Открыть профиль →',
    verified_suppliers: 'Проверенные поставщики',
    certs_h: 'Сертификаты и регистрации',
    certs_note: 'Заявлено компанией. ISO 9001 и ISO 22716 (GMP) оформлены на производство группы (Atoz International). Копии подтверждающих документов предоставляются на стадии сделки.',
  },
};

const dongdongguriRu: SupplierContent = {
  tagline: 'Широкая линейка корейской косметики под двумя собственными брендами',
  descriptor: 'Корейская косметическая компания: бренды LEBELAGE и HEEYUL',
  origin: 'Корея',
  about: [
    'DONGDONGGURIMOO CO., LTD. — корейская косметическая компания из Сеула, владелец брендов LEBELAGE и HEEYUL. LEBELAGE — бренд ухода за кожей и декоративной косметики с акцентом на натуральные и функциональные составы. HEEYUL — специализированный бренд по уходу за волосами, включая линию против выпадения.',
    'Ассортимент охватывает полный цикл ухода: очищение, тонеры, эссенции и ампулы, кремы и сыворотки, тканевые маски и патчи, солнцезащиту, уход за телом и руками, а также декоративную косметику и парфюмерию. Действующий прайс включает 355 товарных позиций в 30 категориях.',
    'По данным компании, продукция поставляется на зарубежные рынки, включая Россию и страны Юго-Восточной Азии. Для части позиций указаны регистрационные номера MoCRA (США), CPNP (ЕС) и SCPN (Великобритания).',
  ],
  facts: ['Два собственных бренда: LEBELAGE и HEEYUL', '355 позиций в 30 категориях', 'Регистрации MoCRA · CPNP · SCPN (по части позиций)', 'Уход, макияж, солнцезащита и уход за волосами', 'Экспортный опыт — по данным компании'],
  channels: ['Импортёры и дистрибьюторы косметики', 'Розничные и дрогери-сети', 'Маркетплейсы и e-commerce', 'Салоны и специализированные магазины'],
  lines: [
    { name: 'LEBELAGE', note: 'Основной бренд компании: уход за кожей и декоративная косметика. Очищение, тонеры, эссенции, ампулы, сыворотки, кремы, тканевые маски и патчи, солнцезащита, уход за телом и руками, макияж и парфюмерия.' },
    { name: 'HEEYUL', note: 'Специализированный бренд по уходу за волосами и кожей головы: линия против выпадения волос (шампунь, кондиционер, тоник, ампула), а также наборы ухода в традициях корейской фитотерапии.' },
  ],
  tech: [
    { name: 'Функциональные активы в составах', note: 'Линейки построены вокруг известных косметических активов: коллаген, центелла (Cica), витамин C, гиалуроновая кислота, PDRN, глутатион, ретинол, пептиды, пантенол, керамиды, ниацинамид, муцин улитки, чайное дерево.' },
    { name: 'Широкая продуктовая матрица', note: 'Крупнейшие категории прайса — декоративная косметика (51 позиция), тканевые маски (42), кремы (39), пенки для умывания (32) и ампулы (25): можно собрать стартовый ассортимент под конкретный канал продаж.' },
    { name: 'Регистрации для экспортных рынков', note: 'В прайсе указаны номера регистраций: MoCRA (США) — по 240 позициям, EU CPNP — по 77, UK SCPN — по 76. Актуальность подтверждается документами на стадии сделки.' },
  ],
  formats: ['Очищение и пенки', 'Тонеры и мисты', 'Эссенции и ампулы', 'Сыворотки и кремы', 'Тканевые маски и патчи', 'Солнцезащита', 'Уход за волосами', 'Уход за телом и руками', 'Декоративная косметика', 'Парфюмерия'],
  exportNote: 'По данным компании, продукция брендов поставляется на зарубежные рынки, включая Россию и страны Юго-Восточной Азии. Конкретные территории, действующие дистрибьюторы и возможные ограничения уточняются на стадии сделки через Teranova.',
  terms: [
    { label: 'Форматы сотрудничества', value: 'Оптовые поставки готовой продукции брендов LEBELAGE и HEEYUL.' },
    { label: 'Минимальный заказ', value: 'Уточняется по позиции и объёму на стадии сделки; в прайсе указаны кратность короба и паллетная логистика.' },
    { label: 'Цены', value: 'Ориентировочный оптовый диапазон (Supply Price, июль 2026); точные цены и базис поставки — по запросу.' },
    { label: 'Как идёт работа', value: 'Заявка → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата под ключ.' },
  ],
  consentNote: 'Данные и материалы предоставлены компанией DONGDONGGURIMOO CO., LTD. и публикуются с её согласия. Прямые контакты производителя не раскрываются. Teranova координирует и сопровождает сделку.',
  seoTitle: 'LEBELAGE и HEEYUL — корейская косметика оптом · Teranova',
  seoDesc: 'DONGDONGGURIMOO — корейская косметическая компания, бренды LEBELAGE и HEEYUL: уход, маски, солнцезащита, макияж, уход за волосами. 355 позиций. Поставки и сопровождение сделки через Teranova.',
  ui: {
    profile_sup: 'Профиль поставщика',
    about_h: 'О компании',
    for_whom: 'Для кого:',
    lines_h: 'Бренды компании',
    catalog_h: 'Каталог продукции',
    tech_h: 'Возможности и ассортимент',
    products_h: 'Продукция',
    products_note: 'Бренды LEBELAGE и HEEYUL охватывают уход за кожей, декоративную косметику, солнцезащиту и уход за волосами.',
    formats_h: 'Форматы продукции',
    export_h: 'Экспорт и рынки',
    terms_h: 'Условия сотрудничества',
    download_btn: 'Скачать условия (PDF)',
    price_btn: 'Скачать прайс-лист (PDF)',
    pres_btn: 'Скачать презентацию (PDF)',
    terms_disc: 'Цены и условия ориентировочные и уточняются на стадии сделки через Teranova. Прямые контакты производителя не публикуются.',
    cta_h: 'Заинтересовал этот производитель?',
    cta_d: 'Свяжитесь с нами — Teranova организует переговоры, проверку и сопровождение сделки от первого контакта до поставки.',
    cta_btn: 'Связаться через Teranova',
    more: 'Открыть профиль →',
    verified_suppliers: 'Проверенные поставщики',
    certs_h: 'Сертификаты и регистрации',
    certs_note: 'Заявлено компанией. Регистрационные номера MoCRA, CPNP и SCPN указаны в прайс-листе по части позиций; копии подтверждающих документов предоставляются на стадии сделки. Регистрация или листинг не является одобрением регулятора.',
  },
};

/* CK Regeon — cosmetics only. Regulatory guardrails (journal D-210): never "FDA approved"
   (MoCRA listing is not FDA approval), no claims of treating hair loss, no injectable/MTS
   use, and the published research is preclinical (cells, ex vivo, animal models). */
const ckRegeonRu: SupplierContent = {
  tagline: 'Косметический уход за кожей головы и волосами на научной основе',
  descriptor: 'Корейская биотех-компания: бренды HAIRREGEON и HERIBON',
  origin: 'Корея',
  about: [
    'CK Regeon Inc. — корейская биотехнологическая компания, основанная в 2016 году в Сеуле (Yonsei Engineering Research Park). Компанию возглавляет профессор Kang-Yell Choi — исследователь сигнального пути Wnt с более чем двадцатилетним научным стажем. Бренд-портфель компании в косметике объединён под именем DermaRegeon.',
    'Продукты построены вокруг собственной технологии «WNT ON»: компоненты KY19382 и гесперидин, а также пептид PTD-DBM, направленные на модуляцию сигнального пути Wnt/β-catenin через белок CXXC5. Механизм описан в рецензируемых научных публикациях — Journal of Investigative Dermatology (2017) и British Journal of Pharmacology (2021).',
    'Важно для корректной коммуникации: опубликованные исследования носят доклинический характер (клеточные культуры, ex vivo и модели на животных) и описывают механизм действия компонентов, а не подтверждают клиническую эффективность готовых продуктов. Продукция позиционируется как косметический уход за кожей головы и волосами.',
  ],
  facts: ['Биотех-компания, основана в 2016 году', 'Технология «WNT ON» (CXXC5 / Wnt-сигналинг)', 'Публикации в JID (2017) и BJP (2021)', 'Два бренда: HAIRREGEON и HERIBON', 'Запуск косметических брендов — 2025 год'],
  channels: ['Импортёры и дистрибьюторы косметики', 'Аптечные и специализированные сети', 'Салоны и трихологические студии', 'Маркетплейсы и e-commerce'],
  lines: [
    { name: 'HAIRREGEON', note: 'Профессиональная интенсивная линия ухода за кожей головы. Флагман — PTD-DBM Hair Booster: двухкомпонентный набор (лиофилизированный порошок и растворитель), упаковка из пяти наборов.' },
    { name: 'HERIBON', note: 'Домашняя линия ежедневного ухода «WNT ON» из четырёх шагов: шампунь (500 мл), скальп-скалер (300 мл), маска-уход для волос (250 мл) и тоник для кожи головы (50 мл).' },
  ],
  tech: [
    { name: 'Технология «WNT ON»', note: 'Собственная разработка компании на основе компонентов KY19382 и гесперидина, направленных на модуляцию сигнального пути Wnt/β-catenin через белок CXXC5.' },
    { name: 'Пептид PTD-DBM', note: 'Компонент профессиональной линии HAIRREGEON. Механизм конкурентного связывания CXXC5 описан в публикации Journal of Investigative Dermatology (2017) на доклиническом уровне.' },
    { name: 'Научная база', note: 'Исследования механизма опубликованы в рецензируемых журналах: Journal of Investigative Dermatology (2017) и British Journal of Pharmacology (2021). Работы выполнены на клеточных культурах, ex vivo и моделях на животных.' },
  ],
  formats: ['Ампулы и бустеры', 'Шампуни', 'Скальп-скалеры (пилинг кожи головы)', 'Маски и уход для волос', 'Тоники для кожи головы'],
  exportNote: 'Компания развивает международную дистрибуцию косметических брендов, запущенных в 2025 году, и участвует в отраслевых выставках в Азии. Территории, действующие дистрибьюторы и условия по рынкам уточняются на стадии сделки через Teranova.',
  terms: [
    { label: 'Форматы сотрудничества', value: 'Оптовые поставки готовой продукции брендов HAIRREGEON и HERIBON.' },
    { label: 'Минимальный заказ', value: 'HAIRREGEON — от 5 упаковок. HERIBON — кратно упаковке по каждой позиции (шампунь от 20 шт., скалер и маска от 25 шт., тоник от 100 шт.).' },
    { label: 'Цены', value: 'Ориентировочный оптовый диапазон; HERIBON — на условиях EXW/FOB Korea при заказе от 10 000 USD, HAIRREGEON — FCA. Точные цены — по запросу.' },
    { label: 'Как идёт работа', value: 'Заявка → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата под ключ.' },
  ],
  consentNote: 'Данные и материалы предоставлены компанией CK Regeon Inc. и публикуются с её письменного согласия с сохранением исходного содержания. Прямые контакты производителя не раскрываются. Teranova координирует и сопровождает сделку.',
  seoTitle: 'CK Regeon — уход за кожей головы из Кореи · Teranova',
  seoDesc: 'CK Regeon (DermaRegeon) — корейская биотех-компания: бренды HAIRREGEON и HERIBON, технология WNT ON. Косметический уход за кожей головы и волосами. Поставки через Teranova.',
  ui: {
    profile_sup: 'Профиль поставщика',
    about_h: 'О компании',
    for_whom: 'Для кого:',
    lines_h: 'Бренды компании',
    catalog_h: 'Каталог продукции',
    tech_h: 'Технология и научная база',
    products_h: 'Продукция',
    products_note: 'Бренды HAIRREGEON и HERIBON — косметический уход за кожей головы и волосами.',
    formats_h: 'Форматы продукции',
    export_h: 'Экспорт и рынки',
    terms_h: 'Условия сотрудничества',
    download_btn: 'Скачать условия (PDF)',
    price_btn: 'Скачать прайс-лист (PDF)',
    pres_btn: 'Скачать презентацию (PDF)',
    terms_disc: 'Цены и условия ориентировочные и уточняются на стадии сделки через Teranova. Прямые контакты производителя не публикуются. Продукция представлена как косметические средства; описанные исследования относятся к механизму действия компонентов и носят доклинический характер.',
    cta_h: 'Заинтересовал этот производитель?',
    cta_d: 'Свяжитесь с нами — Teranova организует переговоры, проверку и сопровождение сделки от первого контакта до поставки.',
    cta_btn: 'Связаться через Teranova',
    more: 'Открыть профиль →',
    verified_suppliers: 'Проверенные поставщики',
    certs_h: 'Сертификаты и регистрации',
    certs_note: 'Заявлено компанией. Копии подтверждающих документов и регистраций предоставляются на стадии сделки. Регистрация или листинг не является одобрением регулятора.',
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
      es: '/docs/sante-terms-es.pdf',
      pt: '/docs/sante-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/sante-price-ru.pdf', en: '/docs/sante-price-en.pdf', ko: '/docs/sante-price-ko.pdf', zh: '/docs/sante-price-zh.pdf', ja: '/docs/sante-price-ja.pdf', it: '/docs/sante-price-it.pdf', de: '/docs/sante-price-de.pdf', fr: '/docs/sante-price-fr.pdf', tr: '/docs/sante-price-tr.pdf', es: '/docs/sante-price-es.pdf', pt: '/docs/sante-price-pt.pdf',
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
      es: mk(santeEs),
      pt: mk(santePt),
    },
  },
  {
    slug: 'dreamcos',
    category: 'cosmetics',
    name: 'DREAMCOS',
    brand: 'Dreamcos Group',
    status: 'provided',
    brandColors: { deep: '#23232b', sky: '#3a3a44', accent: '#c9a15f', bg: '#f7f5f2' },
    certs: ['ISO 9001', 'ISO 22716 (GMP)', 'CPNP', 'CPSR', 'FSC'],
    termsFile: {
      ru: '/docs/dreamcos-terms-ru.pdf', en: '/docs/dreamcos-terms-en.pdf', ko: '/docs/dreamcos-terms-ko.pdf',
      zh: '/docs/dreamcos-terms-zh.pdf', ja: '/docs/dreamcos-terms-ja.pdf', it: '/docs/dreamcos-terms-it.pdf',
      de: '/docs/dreamcos-terms-de.pdf', fr: '/docs/dreamcos-terms-fr.pdf', tr: '/docs/dreamcos-terms-tr.pdf',
      es: '/docs/dreamcos-terms-es.pdf', pt: '/docs/dreamcos-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/dreamcos-price-ru.pdf', en: '/docs/dreamcos-price-en.pdf', ko: '/docs/dreamcos-price-ko.pdf',
      zh: '/docs/dreamcos-price-zh.pdf', ja: '/docs/dreamcos-price-ja.pdf', it: '/docs/dreamcos-price-it.pdf',
      de: '/docs/dreamcos-price-de.pdf', fr: '/docs/dreamcos-price-fr.pdf', tr: '/docs/dreamcos-price-tr.pdf',
      es: '/docs/dreamcos-price-es.pdf', pt: '/docs/dreamcos-price-pt.pdf',
    },
    presFile: {
      ru: '/docs/dreamcos-presentation-ru.pdf', en: '/docs/dreamcos-presentation-en.pdf', ko: '/docs/dreamcos-presentation-ko.pdf',
      zh: '/docs/dreamcos-presentation-zh.pdf', ja: '/docs/dreamcos-presentation-ja.pdf', it: '/docs/dreamcos-presentation-it.pdf',
      de: '/docs/dreamcos-presentation-de.pdf', fr: '/docs/dreamcos-presentation-fr.pdf', tr: '/docs/dreamcos-presentation-tr.pdf',
      es: '/docs/dreamcos-presentation-es.pdf', pt: '/docs/dreamcos-presentation-pt.pdf',
    },
    i18n: {
      ru: dreamcosRu,
      en: mk(dreamcosEn),
      ko: mk(dreamcosKo),
      zh: mk(dreamcosZh),
      ja: mk(dreamcosJa),
      it: mk(dreamcosIt),
      de: mk(dreamcosDe),
      fr: mk(dreamcosFr),
      tr: mk(dreamcosTr),
      es: mk(dreamcosEs),
      pt: mk(dreamcosPt),
    },
  },
  {
    slug: 'dongdonggurimoo',
    category: 'cosmetics',
    name: 'DONGDONGGURIMOO',
    brand: 'LEBELAGE · HEEYUL',
    status: 'provided',
    brandColors: { deep: '#1f5945', sky: '#4e9c7f', accent: '#d4a373', bg: '#f2f7f4' },
    certs: ['MoCRA', 'EU CPNP', 'UK SCPN', 'NMPA'],
    termsFile: {
      ru: '/docs/dongdonggurimoo-terms-ru.pdf',
      en: '/docs/dongdonggurimoo-terms-en.pdf',
      ko: '/docs/dongdonggurimoo-terms-ko.pdf',
      zh: '/docs/dongdonggurimoo-terms-zh.pdf',
      ja: '/docs/dongdonggurimoo-terms-ja.pdf',
      it: '/docs/dongdonggurimoo-terms-it.pdf',
      de: '/docs/dongdonggurimoo-terms-de.pdf',
      fr: '/docs/dongdonggurimoo-terms-fr.pdf',
      tr: '/docs/dongdonggurimoo-terms-tr.pdf',
      es: '/docs/dongdonggurimoo-terms-es.pdf',
      pt: '/docs/dongdonggurimoo-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/dongdonggurimoo-price-ru.pdf',
      en: '/docs/dongdonggurimoo-price-en.pdf',
      ko: '/docs/dongdonggurimoo-price-ko.pdf',
      zh: '/docs/dongdonggurimoo-price-zh.pdf',
      ja: '/docs/dongdonggurimoo-price-ja.pdf',
      it: '/docs/dongdonggurimoo-price-it.pdf',
      de: '/docs/dongdonggurimoo-price-de.pdf',
      fr: '/docs/dongdonggurimoo-price-fr.pdf',
      tr: '/docs/dongdonggurimoo-price-tr.pdf',
      es: '/docs/dongdonggurimoo-price-es.pdf',
      pt: '/docs/dongdonggurimoo-price-pt.pdf',
    },
    presFile: {
      ru: '/docs/dongdonggurimoo-presentation-ru.pdf',
      en: '/docs/dongdonggurimoo-presentation-en.pdf',
      ko: '/docs/dongdonggurimoo-presentation-ko.pdf',
      zh: '/docs/dongdonggurimoo-presentation-zh.pdf',
      ja: '/docs/dongdonggurimoo-presentation-ja.pdf',
      it: '/docs/dongdonggurimoo-presentation-it.pdf',
      de: '/docs/dongdonggurimoo-presentation-de.pdf',
      fr: '/docs/dongdonggurimoo-presentation-fr.pdf',
      tr: '/docs/dongdonggurimoo-presentation-tr.pdf',
      es: '/docs/dongdonggurimoo-presentation-es.pdf',
      pt: '/docs/dongdonggurimoo-presentation-pt.pdf',
    },
    i18n: {
      ru: dongdongguriRu,
      en: mk(dongEn as any),
      ko: mk(dongKo as any),
      zh: mk(dongZh as any),
      ja: mk(dongJa as any),
      it: mk(dongIt as any),
      de: mk(dongDe as any),
      fr: mk(dongFr as any),
      tr: mk(dongTr as any),
      es: mk(dongEs as any),
      pt: mk(dongPt as any),
    },
  },
  {
    slug: 'ck-regeon',
    category: 'cosmetics',
    name: 'CK REGEON',
    brand: 'DermaRegeon',
    status: 'provided',
    brandColors: { deep: '#10353f', sky: '#2e7d8f', accent: '#4fbfae', bg: '#eff7f7' },
    termsFile: {
      ru: '/docs/ck-regeon-terms-ru.pdf',
      en: '/docs/ck-regeon-terms-en.pdf',
      ko: '/docs/ck-regeon-terms-ko.pdf',
      zh: '/docs/ck-regeon-terms-zh.pdf',
      ja: '/docs/ck-regeon-terms-ja.pdf',
      it: '/docs/ck-regeon-terms-it.pdf',
      de: '/docs/ck-regeon-terms-de.pdf',
      fr: '/docs/ck-regeon-terms-fr.pdf',
      tr: '/docs/ck-regeon-terms-tr.pdf',
      es: '/docs/ck-regeon-terms-es.pdf',
      pt: '/docs/ck-regeon-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/ck-regeon-price-ru.pdf',
      en: '/docs/ck-regeon-price-en.pdf',
      ko: '/docs/ck-regeon-price-ko.pdf',
      zh: '/docs/ck-regeon-price-zh.pdf',
      ja: '/docs/ck-regeon-price-ja.pdf',
      it: '/docs/ck-regeon-price-it.pdf',
      de: '/docs/ck-regeon-price-de.pdf',
      fr: '/docs/ck-regeon-price-fr.pdf',
      tr: '/docs/ck-regeon-price-tr.pdf',
      es: '/docs/ck-regeon-price-es.pdf',
      pt: '/docs/ck-regeon-price-pt.pdf',
    },
    presFile: {
      ru: '/docs/ck-regeon-presentation-ru.pdf',
      en: '/docs/ck-regeon-presentation-en.pdf',
      ko: '/docs/ck-regeon-presentation-ko.pdf',
      zh: '/docs/ck-regeon-presentation-zh.pdf',
      ja: '/docs/ck-regeon-presentation-ja.pdf',
      it: '/docs/ck-regeon-presentation-it.pdf',
      de: '/docs/ck-regeon-presentation-de.pdf',
      fr: '/docs/ck-regeon-presentation-fr.pdf',
      tr: '/docs/ck-regeon-presentation-tr.pdf',
      es: '/docs/ck-regeon-presentation-es.pdf',
      pt: '/docs/ck-regeon-presentation-pt.pdf',
    },
    i18n: {
      ru: ckRegeonRu,
      en: mk(ckrEn as any),
      ko: mk(ckrKo as any),
      zh: mk(ckrZh as any),
      ja: mk(ckrJa as any),
      it: mk(ckrIt as any),
      de: mk(ckrDe as any),
      fr: mk(ckrFr as any),
      tr: mk(ckrTr as any),
      es: mk(ckrEs as any),
      pt: mk(ckrPt as any),
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
