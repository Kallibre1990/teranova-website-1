/* Generator for supplier terms/price PDFs (all languages), rendered locally with a
   full CJK font so Japanese/Chinese glyphs are not dropped.

   Background: the previous PDFs were printed in an environment without CJK fonts, so
   kanji/hanzi silently fell out (empty gaps) in ja/zh — see decision journal D-175.
   This script re-generates all 22 PDFs from the SAME data the website uses, so the
   text is guaranteed complete and consistent across languages.

   Content sources (single source of truth = the site data, no invented text):
   - Terms  : content.terms[] + content.descriptor + ui.terms_h + ui.terms_disc
              (ru mirrors src/data/suppliers.ts `santeRu`; other langs read the JSON).
   - Price  : neutral rows from src/data/suppliers-i18n/sante.price.json (name/volume/
              price are language-neutral); localized headings below.
   - Footer disclaimer of BOTH docs = ui.terms_disc (unified, complete in all langs).

   Run:  node scripts/gen-supplier-pdfs.mjs   (macOS, Google Chrome + Noto Sans CJK)
   Output overwrites public/docs/sante-<terms|price>-<lang>.pdf                        */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { deckHTML } from './pres-deck.mjs';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'src/data/suppliers-i18n');
const OUT = process.env.PDF_OUT || path.join(ROOT, 'public/docs');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

/* PDF_LANGS=tr,de — пересобрать только эти языки (точечная починка без полного прогона). */
const ALL_LANGS = ['ru', 'en', 'ko', 'zh', 'ja', 'it', 'de', 'fr', 'tr', 'es', 'pt'];
const LANGS = process.env.PDF_LANGS ? process.env.PDF_LANGS.split(',').filter((l) => ALL_LANGS.includes(l)) : ALL_LANGS;

const SIGN = 'Teranova Group · info@teranovagroup.com · teranovagroup.com · 2026';

/* Brand colours and manner come from the site data, not from a second copy here:
   the audit (D-404) already caught what happens when the same fact lives in two
   files. Read src/data/suppliers.ts and let it win; the `colors` below survive
   only as a fallback (they also carry `line`, which the site does not need). */
function brandFromSite() {
  const src = fs.readFileSync(path.join(ROOT, 'src/data/suppliers.ts'), 'utf8');
  const re =
    /slug: '([^']+)',[\s\S]{0,4000}?brandColors: \{ deep: '([^']+)', sky: '([^']+)', accent: '([^']+)', bg: '([^']+)' \},(?:\s*voice: '([^']+)',)?/g;
  const out = {};
  for (const [, slug, deep, sky, accent, bg, voice] of src.matchAll(re)) {
    out[slug] = { deep, sky, accent, bg, voice };
  }
  return out;
}
const SITE_BRAND = brandFromSite();

/* Русские подписи дека для поставщиков, у которых ru-копия лежит inline
   (sante, dreamcos) — в их ruPres.ui есть только заголовки разделов. */
const RU_UI = {
  profile_sup: 'Профиль поставщика',
  about_h: 'О компании', lines_h: 'Линейки продукции', tech_h: 'Подход и производство',
  catalog_h: 'Каталог продукции', products_h: 'Продукция', formats_h: 'Форматы продукции',
  export_h: 'Экспорт и рынки', certs_h: 'Сертификаты и регистрации',
  cta_h: 'Заинтересовал поставщик?',
  cta_d: 'Напишите нам — Teranova организует переговоры, проверку и сопровождение сделки от первого контакта до поставки.',
};

/* Per-supplier config. `id` = file prefix (public/docs/<id>-<terms|price>-<lang>.pdf),
   `json` = data prefix in suppliers-i18n (<json>.<lang>.json + <json>.price.json).
   ru terms mirror src/data/suppliers.ts <slug>Ru (keep in sync). Run one supplier with
   `node scripts/gen-supplier-pdfs.mjs <id>`, or all when no arg. */
const SUPPLIERS = [
  {
    /* noPrice: SANTE COSMETICS 18.08.2026 письменно попросила не публиковать экспортный
       прайс — он закрытый. Прайс-PDF для этого поставщика не собираем. */
    id: 'sante', json: 'sante', supplier: 'SANTE COSMETICS', brand: 'Dr.SANTE', basis: 'FOB Korea', noPrice: true,
    colors: { deep: '#12306e', sky: '#4ca6fc', bg: '#f3f8ff', line: '#e6ebf3' },
    pres: true,
    certs: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'MoCRA', 'CPNP', 'HALAL', 'NMPA', 'SCPN', 'DAV'],
    ruPres: {
      tagline: 'Ваш успех — наша радость',
      descriptor: 'Профессиональная эстетическая косметика из Кореи',
      about: [
        'SANTE COSMETICS (бренд Dr.SANTE) — корейский эстетический бренд с более чем 20-летней историей (с 2003 года). Компания разрабатывает и производит профессиональную уходовую косметику, сочетая многолетний практический опыт, профессиональные знания и внимание к здоровью кожи.',
        'Философия бренда — здоровье и красота кожи одновременно. Продукция создаётся для профессионального сегмента и ориентирована на чувствительную, сухую, раздражённую и возрастную кожу.',
      ],
      facts: ['Эстетический бренд', 'С 2003 года', 'Собственная разработка и производство', 'Профессиональный сегмент', 'Экспорт за рубеж'],
      lines: [
        { name: 'Azulene Soother', note: 'Успокаивающая линейка с гуайазуленом и ромашковой водой: быстро снижает раздражение, понижает температуру кожи и укрепляет барьер, работая с первопричинами проблем чувствительной кожи. Кремы, сыворотки, маски, лосьоны, мисты, гели, солнцезащитные эссенции.' },
        { name: 'Artemisia AKA', note: 'Линейка для проблемной и раздражённой кожи: по данным компании, оказывает выраженное успокаивающее действие и помогает визуально уменьшить признаки раздражения. Ампулы, кремы и маски для восстановления и барьерного ухода.' },
        { name: 'Collagen Leader', note: 'Коллагеновый уход, ориентированный на упругость и возрастную кожу.' },
        { name: 'Hyalquad Core', note: 'Интенсивное увлажнение на комплексе гиалуроновой кислоты.' },
        { name: 'Elsol', note: 'Линейка растительных масел на основе премиального израильского масла жожоба с сертификатом USDA — нерафинированного, холодного отжима. По данным компании, его структура близка к барьеру кожи и помогает восстановить и укрепить его.' },
        { name: 'Hair Care', note: 'Линейка ухода за волосами и кожей головы. Состав и полный ассортимент уточняются на стадии сделки.' },
      ],
      tech: [
        { name: 'Гуайазулен + ромашковая вода', note: 'Real Blue Calming Solution — успокаивает раздражённую кожу, снижает её температуру и укрепляет защитный барьер.' },
        { name: 'LHASOL™', note: 'Фирменный ингредиент 4-го поколения — стабилизированный LHA в высокой концентрации. По данным компании, оказывает отшелушивающее действие на ороговевшие клетки и помогает проблемной коже вернуться к здоровому слабокислому pH.' },
      ],
      formats: ['Ампулы', 'Сыворотки', 'Кремы', 'Маски', 'Тонеры и пэды', 'Очищающие средства', 'Солнцезащита', 'Мисты', 'Масла'],
      exportNote: 'Продукция Dr.SANTE поставляется за рубеж. По данным компании, официальные партнёры есть в Китае, Японии, на Тайване, в Канаде, на Гавайях, в Австралии (онлайн), Гонконге, Макао, Греции, Аргентине и России.',
      certs_note: 'Заявлено компанией. Копии подтверждающих документов предоставляются на стадии сделки.',
      ui: { about_h: 'О компании', lines_h: 'Линейки продукции', tech_h: 'Фирменные решения', formats_h: 'Форматы продукции', export_h: 'Экспорт', certs_h: 'Сертификаты и регистрации' },
    },
    ruTerms: {
      descriptor: 'Профессиональная эстетическая косметика из Кореи',
      terms_h: 'Условия сотрудничества',
      terms_disc:
        'Цены и условия ориентировочные и уточняются на стадии сделки через Teranova. Прямые контакты производителя не публикуются. Документ не является публичной офертой.',
      terms: [
        { label: 'Форматы сотрудничества', value: 'Оптовые поставки готовой продукции; OEM/ODM — собственная разработка и производство.' },
        { label: 'Минимальный заказ', value: 'Ориентировочно от $4 000 на первый заказ; небольшие партии по отдельным позициям.' },
        { label: 'Цены', value: 'Цены по запросу. Экспортный прайс-лист не публикуем — актуальные цены и базис поставки покупатель получает на стадии сделки через Teranova.' },
        { label: 'Как идёт работа', value: 'Заявка → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата под ключ.' },
      ],
    },
  },
  {
    id: 'dreamcos', json: 'dreamcos', supplier: 'DREAMCOS', brand: 'K-beauty', basis: 'EXW/FOB Korea',
    colors: { deep: '#23232b', sky: '#a9843f', bg: '#f4f1ec', line: '#e7e2d9' },
    pres: true,
    certs: ['ISO 9001', 'ISO 22716 (GMP)', 'CPNP', 'CPSR', 'FSC'],
    ruPres: {
      tagline: 'Партнёр для вывода косметического бренда на мировой рынок',
      descriptor: 'Корейская косметическая группа: OEM/ODM-производство и собственные бренды',
      about: [
        'DREAMCOS — головная компания корейской косметической группы, которая объединяет разработку, производство и вывод брендов на международный рынок. В группу входят собственный OEM/ODM-завод Atoz International и бренд-подразделения General Brands и Celebritykorea, каждое со своим портфелем марок.',
        'Группа работает как платформа полного цикла: от разработки формулы и образца до производства, упаковки, экспорта и маркетинга. Продукция поставляется в страны Азии, Северной Америки и Европы через розничные сети и маркетплейсы.',
        'Компания отмечена как экспортёр на национальном уровне и входит в число перспективных предприятий Республики Корея.',
      ],
      facts: ['Косметическая группа полного цикла', 'Собственный OEM/ODM-завод (Atoz International)', 'ISO 9001 · ISO 22716 (GMP)', 'Портфель из 7 брендов', 'Экспорт в Азию, Америку и Европу'],
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
      certs_note: 'Заявлено компанией. ISO 9001 и ISO 22716 (GMP) оформлены на производство группы (Atoz International). Копии подтверждающих документов предоставляются на стадии сделки.',
      ui: { about_h: 'О компании', lines_h: 'Бренды группы', tech_h: 'Возможности и технологии', formats_h: 'Форматы продукции', export_h: 'Экспорт и рынки', certs_h: 'Сертификаты и регистрации' },
    },
    ruTerms: {
      descriptor: 'Корейская косметическая группа: OEM/ODM-производство и собственные бренды',
      terms_h: 'Условия сотрудничества',
      terms_disc:
        'Цены и условия ориентировочные и уточняются на стадии сделки через Teranova. Прямые контакты производителя не публикуются. Документ не является публичной офертой.',
      terms: [
        { label: 'Форматы сотрудничества', value: 'Оптовые поставки готовой продукции по брендам; OEM/ODM — разработка и производство под маркой заказчика.' },
        { label: 'Минимальный заказ', value: 'Уточняется по бренду и позиции на стадии сделки.' },
        { label: 'Цены', value: 'Ориентировочный оптовый диапазон: SALMON:LAB — на условиях FOB, остальные бренды — EXW; точные цены по запросу.' },
        { label: 'Как идёт работа', value: 'Заявка → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата под ключ.' },
      ],
    },
  },
  /* Newer suppliers ship their ru copy as <slug>.ru.json, so no inline ruTerms/ruPres. */
  {
    id: 'dongdonggurimoo', json: 'dongdonggurimoo', supplier: 'DONGDONGGURIMOO', brand: 'LEBELAGE · HEEYUL',
    basis: 'Supply Price · ₩1,480 = $1',
    colors: { deep: '#1f5945', sky: '#4e9c7f', bg: '#eef4f0', line: '#dde8e2' },
    pres: true,
    certs: ['MoCRA', 'EU CPNP', 'UK SCPN', 'NMPA'],
  },
  {
    /* noPrice: CK REGEON 20.08.2026 письменно попросила не показывать цены на
       страницах — прайс был прислан отдельно 07.07 как коммерческое условие и в
       разрешение на публикацию от 28.07 не входил. Прайс-PDF не собираем. */
    id: 'ck-regeon', json: 'ck-regeon', supplier: 'CK REGEON', brand: 'DermaRegeon',
    basis: 'EXW/FCA Korea', noPrice: true,
    colors: { deep: '#10353f', sky: '#2e7d8f', bg: '#eaf4f4', line: '#d5e6e6' },
    pres: true,
    certs: ['MoCRA (US)', 'CPNP (EU)', 'SCPN (UK)', 'Dermatest (DE)'],
  },
  {
    /* pres:false — the image-rich presentation is built separately (gen_pres_supplier.py);
       this script only makes the branded terms + price sheets. */
    id: 'jetsglobal', json: 'jetsglobal', supplier: 'JETSGLOBAL', brand: 'TOM-TIT-TOT',
    basis: 'EXW Korea · order ≥ $3,000',
    colors: { deep: '#2b2e3a', sky: '#8a6f45', bg: '#f5f3ef', line: '#e6e2da' },
    pres: false,
    certs: [],
  },
  {
    id: 'pineworld', json: 'pineworld', supplier: 'PINE WORLD', brand: 'RAVIEL',
    basis: 'FOB Korea',
    colors: { deep: '#3d2c39', sky: '#9a6f85', bg: '#f8f2f5', line: '#ece1e6' },
    pres: false,
    certs: [],
  },
  {
    id: 'kift', json: 'kift', supplier: 'KIFT COMPANY', brand: 'KIFT',
    basis: 'EXW Suwon, Korea',
    colors: { deep: '#14294d', sky: '#5b7fb0', bg: '#f1f6fb', line: '#dde7f2' },
    pres: false,
    certs: [],
  },
  {
    id: 'icelmedi', json: 'icelmedi', supplier: 'iCELmedi Co., Ltd.', brand: 'cellmedics · KERASON',
    basis: 'FOB Korea',
    colors: { deep: '#0e3b4a', sky: '#3c93a8', bg: '#eef6f9', line: '#d9e8ee' },
    pres: true,
    certs: [],
  },
  {
    id: 'three-days-love', json: 'three-days-love', supplier: 'THREE DAYS LOVE CO., LTD.', brand: 'ThreeDaysLove · RETURN 10 · TIME 72 · EXOMERE',
    basis: 'FOB Korea',
    colors: { deep: '#7a2415', sky: '#e0562e', bg: '#fdf0ea', line: '#f4dacd' },
    pres: true,
    certs: [],
  },
  {
    id: 'licorne', json: 'licorne', supplier: 'Limetree Co., Ltd.', brand: 'LICORNE Cosmetics',
    basis: 'FOB Korea',
    colors: { deep: '#2f5d3a', sky: '#4e9c6b', bg: '#eef7f0', line: '#d5e9db' },
    pres: true,
    certs: [],
  },
  /* noPrice у всех четырёх ниже: экспортный прайс эти компании не передавали,
     цены на сайте не публикуются — печатать нечего, придумывать нельзя. */
  {
    id: 'cubecap', json: 'cubecap', supplier: 'CUBE CAP CO., LTD.', brand: 'COCAPS', noPrice: true,
    colors: { deep: '#14294d', sky: '#5b7fb0', bg: '#f1f6fb', line: '#dde7f2' },
    pres: true,
    certs: [],
  },
  {
    id: 'doobom', json: 'doobom', supplier: 'DOOBOM Co., Ltd.', brand: 'DOOBOM', noPrice: true,
    colors: { deep: '#14294d', sky: '#5b7fb0', bg: '#f1f6fb', line: '#dde7f2' },
    pres: true,
    certs: ['FDA', 'EU CPNP', 'MoCRA'],
  },
  {
    id: 'cocospack', json: 'cocospack', supplier: 'COCOSPACK Co., Ltd.', brand: 'COCOSPACK', noPrice: true,
    colors: { deep: '#14294d', sky: '#5b7fb0', bg: '#f1f6fb', line: '#dde7f2' },
    pres: true,
    certs: ['ISO 9001', 'ISO 14001', 'ISO 22716', 'ISO 15378'],
  },
  {
    /* Прайс — из квотаций Виктора от 12.06.2026 (XLS по всем моделям), ярус MOQ 10+. */
    id: 'multifit', json: 'multifit', supplier: 'BeiJing Multifit Electrical Technology Co., Ltd.', brand: 'MULTIFIT',
    basis: 'EXW Shantou',
    colors: { deep: '#14294d', sky: '#5b7fb0', bg: '#f1f6fb', line: '#dde7f2' },
    pres: true,
    certs: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'CE'],
  },
  {
    /* noPrice: у Sunpure на 24.08.2026 прайса ещё нет — компания обещала прислать
       индикативные экспортные цены и MOQ. Появятся — добавим sunpure.price.json. */
    id: 'sunpure', json: 'sunpure', supplier: 'Sunpure Extracts Pvt. Ltd.', brand: 'Sunpure',
    basis: 'FOB India', noPrice: true,
    colors: { deep: '#1d4a2b', sky: '#4e9a5f', bg: '#eef5ee', line: '#dde9dd' },
    pres: true,
    certs: ['ISO 9001:2015', 'GMP', 'HALAL', 'FSSAI', 'Star Export House', 'DUNS', 'FIEO', 'Spices Board India', 'AYUSHEXCIL'],
  },
  {
    /* noPrice здесь не «прайса пока нет», а условие письменного согласия BIOPT
       от 18.08.2026: экспортные цены в открытом доступе не размещаются. Прайс
       не публикуем ни на странице, ни в PDF — ни сейчас, ни позже. */
    id: 'biopt', json: 'biopt', supplier: 'BIOPT Co., Ltd.', brand: 'VENDERMA',
    basis: 'FOB Korea', noPrice: true,
    colors: { deep: '#2b2b2f', sky: '#c0392b', bg: '#f7f1ee', line: '#ecdedb' },
    pres: true,
    certs: ['ISO 9001'],
  },
  {
    /* noPrice — пункт 5 письменного согласия SEUNGGUN COSMETICS от 18.08.2026:
       прайс EXW считается конфиденциальной коммерческой информацией и не
       публикуется ни на площадке, ни в любом другом открытом канале. */
    id: 'loobee', json: 'loobee', supplier: 'SEUNGGUN COSMETICS CO., LTD.', brand: 'LOOBEE',
    basis: 'EXW Korea', noPrice: true,
    colors: { deep: '#1f5f45', sky: '#3e9b72', bg: '#edf6f1', line: '#dbe9e1' },
    pres: true,
    certs: ['Vegan', 'Dermatest® EXCELLENT'],
  },
];

/* Price-sheet headings per language. 9 langs are the exact strings from the existing
   good PDFs; ja/zh headings are restored to the intended standard terms (the old PDFs
   had these very words dropped by the missing font — 製品/容量 survived, 参考/価格/规格/
   批发价 were reconstructed). USD suffix is appended in the template. */
const PRICE_H = {
  ru: { title: 'Ориентировочный прайс-лист', product: 'Товар', volume: 'Объём', price: 'Опт. цена' },
  en: { title: 'Indicative price list', product: 'Product', volume: 'Volume', price: 'Wholesale' },
  ko: { title: '참고용 가격표', product: '제품', volume: '용량', price: '도매가' },
  zh: { title: '参考价格表', product: '产品', volume: '规格', price: '批发价' },
  ja: { title: '参考価格表', product: '製品', volume: '容量', price: '価格' },
  it: { title: 'Listino prezzi indicativo', product: 'Prodotto', volume: 'Formato', price: 'Ingrosso' },
  de: { title: 'Indikative Preisliste', product: 'Produkt', volume: 'Größe', price: 'Großhandel' },
  fr: { title: 'Liste de prix indicative', product: 'Produit', volume: 'Format', price: 'Gros' },
  tr: { title: 'Yaklaşık fiyat listesi', product: 'Ürün', volume: 'Hacim', price: 'Toptan' },
  es: { title: 'Lista de precios orientativa', product: 'Producto', volume: 'Volumen', price: 'Mayorista' },
  pt: { title: 'Lista de preços indicativa', product: 'Produto', volume: 'Volume', price: 'Atacado' },
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* Цена на коммерческом документе печатается с двумя знаками: «3.00», а не «3.0»
   и не «23». В данных лежит и «9.75», и «3.6», и «23» — все три верны по смыслу,
   но в одной таблице выглядят неряшливо. Правим только чистые числа: значения
   вроде «US$ 7.50 EXW» или «REQUEST» отдаём как есть. */
const money = (v) => (/^\d+(\.\d+)?$/.test(String(v).trim())
  ? Number(String(v).trim()).toFixed(2)
  : String(v));

function termsData(cfg, lang) {
  /* Older suppliers keep their ru copy inline (ruTerms); newer ones ship a <slug>.ru.json
     alongside the other locales, so every language reads the same way. */
  if (lang === 'ru' && cfg.ruTerms) return cfg.ruTerms;
  const j = JSON.parse(fs.readFileSync(path.join(DATA, `${cfg.json}.${lang}.json`), 'utf8'));
  return { descriptor: j.content.descriptor, terms: j.content.terms, terms_h: j.ui.terms_h, terms_disc: j.ui.terms_disc };
}

const FONT = "'Noto Sans CJK JP','Noto Sans CJK SC','Noto Sans CJK KR','Hiragino Sans','PingFang SC','Apple SD Gothic Neo','Helvetica Neue',Arial,sans-serif";

const baseCSS = (C) => `
  @page { size: A4; margin: 16mm 16mm 14mm; }
  * { box-sizing: border-box; }
  body { font-family: ${FONT}; color: #1c2430; margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .hd { display: flex; justify-content: space-between; align-items: baseline; }
  .hd .b { font-weight: 800; letter-spacing: .06em; color: ${C.deep}; font-size: 15px; }
  /* Без uppercase: в турецкой локали заглавные превращают i в İ и коверкают
     названия брендов (Limetree -> LİMETREE, Cosmetics -> COSMETİCS). */
  .hd .r { font-size: 10px; letter-spacing: .14em; color: ${C.sky}; font-weight: 700; }
  hr.top { border: 0; border-top: 2px solid ${C.deep}; margin: 8px 0 20px; }
  h1 { color: ${C.deep}; font-size: 25px; font-weight: 800; margin: 0 0 4px; }
  .sub { color: #6b7583; font-size: 12px; margin: 0 0 20px; }
  .disc { color: #98a1ad; font-size: 10px; line-height: 1.55; margin-top: 16px; }
  .sign { color: #6b7583; font-size: 10px; font-weight: 700; margin-top: 8px; }
`;

function termsHTML(cfg, lang) {
  const C = cfg.colors;
  const d = termsData(cfg, lang);
  const rows = d.terms
    .map(
      (t) => `<div class="row"><div class="lab">${esc(t.label)}</div><div class="val">${esc(t.value)}</div></div>`
    )
    .join('');
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>${baseCSS(C)}
    .row { display: grid; grid-template-columns: 32% 1fr; gap: 18px; padding: 12px 0; border-bottom: 1px solid ${C.line}; }
    .lab { font-weight: 700; color: ${C.deep}; font-size: 12.5px; }
    .val { color: #2c3542; font-size: 12.5px; line-height: 1.5; }
  </style></head><body>
    <div class="hd"><span class="b">TERANOVA GROUP</span><span class="r">${esc(d.terms_h)}</span></div>
    <hr class="top">
    <h1>${cfg.supplier} · ${cfg.brand}</h1>
    <div class="sub">${esc(d.descriptor)}</div>
    ${rows}
    <div class="disc">${esc(d.terms_disc)}</div>
    <div class="sign">${SIGN}</div>
  </body></html>`;
}

function priceHTML(cfg, lang, priceLines) {
  const C = cfg.colors;
  const h = PRICE_H[lang];
  const disc = termsData(cfg, lang).terms_disc;
  let body = '';
  for (const grp of priceLines) {
    body += `<tr class="grp"><td colspan="3">${esc(grp.line)}</td></tr>`;
    for (const it of grp.items) {
      const REQ = { ru: 'по запросу', en: 'on request', ko: '문의', zh: '询价', ja: '応相談', it: 'su richiesta', de: 'auf Anfrage', fr: 'sur demande', tr: 'talep üzerine', es: 'a consultar', pt: 'sob consulta' };
      const priceCell = it.price === 'REQUEST' ? `<span class="req">${esc(REQ[lang])}</span>` : `$${esc(money(it.price))}`;
      body += `<tr><td class="nm">${esc(it.name)}</td><td class="vol">${esc(it.volume)}</td><td class="pr">${priceCell}</td></tr>`;
    }
  }
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>${baseCSS(C)}
    table { width: 100%; border-collapse: collapse; }
    thead th { background: ${C.bg}; color: ${C.deep}; font-size: 10.5px; letter-spacing: .04em; text-transform: uppercase; font-weight: 700; text-align: left; padding: 9px 10px; }
    thead th.pr { text-align: right; }
    tr.grp td { background: ${C.bg}; color: ${C.deep}; font-weight: 800; font-size: 12px; padding: 8px 10px; border-top: 1px solid ${C.line}; }
    tbody td { font-size: 11px; padding: 6px 10px; border-bottom: 1px solid #eef1f6; }
    td.nm { color: #222b38; }
    td.vol { color: #5b6675; white-space: nowrap; }
    td.pr { text-align: right; color: ${C.deep}; font-weight: 700; white-space: nowrap; }
    td.pr .req { font-weight: 600; font-size: 10px; color: #8a8a8a; font-style: italic; }
  </style></head><body>
    <div class="hd"><span class="b">TERANOVA GROUP</span><span class="r">${cfg.supplier} · ${cfg.brand} · ${cfg.basis}</span></div>
    <hr class="top">
    <h1>${esc(h.title)}</h1>
    <div class="sub">${cfg.supplier} · ${cfg.brand}</div>
    <table>
      <thead><tr><th>${esc(h.product)}</th><th>${esc(h.volume)}</th><th class="pr">${esc(h.price)}, USD</th></tr></thead>
      <tbody>${body}</tbody>
    </table>
    <div class="disc">${esc(disc)}</div>
    <div class="sign">${SIGN}</div>
  </body></html>`;
}

function presData(cfg, lang) {
  /* Дек берёт заголовки из ui целиком; у «старых» поставщиков ru лежит inline,
     там certs_note хранится на верхнем уровне — доносим его в ui. */
  if (lang === 'ru' && cfg.ruPres) {
    const p = cfg.ruPres;
    return { ...p, certs: cfg.certs, ui: { ...RU_UI, ...(p.ui || {}), certs_note: p.certs_note } };
  }
  const j = JSON.parse(fs.readFileSync(path.join(DATA, `${cfg.json}.${lang}.json`), 'utf8'));
  const c = j.content, u = j.ui;
  return {
    tagline: c.tagline, descriptor: c.descriptor, about: c.about, facts: c.facts, lines: c.lines,
    tech: c.tech, formats: c.formats, exportNote: c.exportNote, certs: cfg.certs, certs_note: u.certs_note,
    ui: u,
  };
}

function presHTML(cfg, lang) {
  const C = cfg.colors;
  const d = presData(cfg, lang);
  const disc = termsData(cfg, lang).terms_disc;
  const tags = (arr) => arr.map((t) => `<span class="tag">${esc(t)}</span>`).join('');
  const about = d.about.map((p) => `<p>${esc(p)}</p>`).join('');
  const lines = d.lines.map((l) => `<div class="card"><div class="cn">${esc(l.name)}</div><div class="cd">${esc(l.note)}</div></div>`).join('');
  const tech = d.tech.map((t) => `<div class="trow"><div class="tn">${esc(t.name)}</div><div class="td">${esc(t.note)}</div></div>`).join('');
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>${baseCSS(C)}
    h2 { color: ${C.deep}; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; margin: 18px 0 8px; padding-bottom: 4px; border-bottom: 1px solid ${C.line}; }
    p { margin: 5px 0; font-size: 11.5px; line-height: 1.55; color: #2c3542; }
    .tag { display: inline-block; background: ${C.bg}; color: ${C.deep}; font-weight: 700; font-size: 10px; padding: 3px 10px; border-radius: 20px; margin: 0 5px 5px 0; }
    .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-top: 4px; }
    .card { border: 1px solid ${C.line}; border-radius: 7px; padding: 9px 11px; break-inside: avoid; }
    .cn { font-weight: 800; color: ${C.deep}; font-size: 12px; letter-spacing: .02em; margin-bottom: 3px; }
    .cd { font-size: 10px; color: #444d5a; line-height: 1.45; }
    .trow { padding: 7px 0; border-bottom: 1px solid ${C.line}; break-inside: avoid; }
    .tn { font-weight: 700; color: ${C.deep}; font-size: 11.5px; }
    .td { font-size: 10.5px; color: #444d5a; line-height: 1.45; }
    .note { color: #98a1ad; font-size: 9.5px; line-height: 1.5; margin-top: 5px; }
  </style></head><body>
    <div class="hd"><span class="b">TERANOVA GROUP</span><span class="r">${cfg.supplier} · ${cfg.brand}</span></div>
    <hr class="top">
    <h1>${cfg.supplier}</h1>
    <div class="sub"><i>${esc(d.tagline)}</i> — ${esc(d.descriptor)}</div>
    <div>${tags(d.facts)}</div>
    <h2>${esc(d.ui.about_h)}</h2>
    ${about}
    <h2>${esc(d.ui.lines_h)}</h2>
    <div class="cards">${lines}</div>
    <h2>${esc(d.ui.tech_h)}</h2>
    ${tech}
    <h2>${esc(d.ui.certs_h)}</h2>
    ${d.certs && d.certs.length ? `<div>${tags(d.certs)}</div>` : ''}
    <div class="note">${esc(d.certs_note)}</div>
    <h2>${esc(d.ui.formats_h)}</h2>
    <div>${tags(d.formats)}</div>
    <h2>${esc(d.ui.export_h)}</h2>
    <p>${esc(d.exportNote)}</p>
    <div class="disc">${esc(disc)}</div>
    <div class="sign">${SIGN}</div>
  </body></html>`;
}

const PROF = fs.mkdtempSync(path.join(os.tmpdir(), 'spdf-prof-'));
const CHROME_ARGS = [
  '--headless', '--disable-gpu', '--no-pdf-header-footer', '--no-first-run',
  '--no-default-browser-check', '--disable-extensions', '--disable-background-networking',
  '--disable-sync', '--disable-default-apps', `--user-data-dir=${PROF}`,
];
/* Chrome (new headless) prints the PDF fine but sometimes never exits, so instead of
   waiting for the process we poll until the output file is written and its size is
   stable, then kill Chrome. */
/* Обложечное фото: у поставщиков оно называется по-разному (у SANTE — PNG
   с другим именем), поэтому перебираем известные варианты. */
function heroOf(cfg) {
  const dir = path.join(ROOT, 'src/assets/suppliers', cfg.id);
  for (const n of ['hero.jpg', 'hero.png', 'hero-serum.png', 'products.jpg', 'products.png']) {
    const p = path.join(dir, n);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

/* Каталог для страницы с фото: к каждой позиции добавляем абсолютный путь —
   Chrome читает картинки с диска по file://. */
function catalogOf(cfg) {
  const f = path.join(DATA, `${cfg.json}.catalog.json`);
  if (!fs.existsSync(f)) return null;
  const cat = JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const g of cat) {
    for (const it of g.items) {
      const abs = path.join(ROOT, 'public', it.img.replace(/^\//, ''));
      it.abs = fs.existsSync(abs) ? abs : null;
    }
  }
  return cat;
}

async function toPDF(html, outfile) {
  const tmp = path.join(os.tmpdir(), `spdf-${Math.abs(hash(outfile))}.html`);
  fs.writeFileSync(tmp, html);
  try { fs.unlinkSync(outfile); } catch { /* first run */ }
  /* detached: свой process group, чтобы ниже убить Chrome со всеми его
     потомками. Прежде SIGKILL уходил только родителю, а вспомогательные
     процессы оставались жить: один такой провисел двое суток и продолжал
     дописывать PDF, из-за чего часть документов оставалась без водяного знака
     и с чужими свойствами — правки выглядели как случайно откатившиеся. */
  const ch = spawn(CHROME, [...CHROME_ARGS, `--print-to-pdf=${outfile}`, `file://${tmp}`],
    { stdio: 'ignore', detached: true });
  const t0 = Date.now();
  let last = -1, stable = 0, ok = false;
  while (Date.now() - t0 < 25000) {
    await sleep(350);
    if (fs.existsSync(outfile)) {
      const sz = fs.statSync(outfile).size;
      if (sz > 1200 && sz === last) { if (++stable >= 2) { ok = true; break; } } else stable = 0;
      last = sz;
    }
  }
  try { process.kill(-ch.pid, 'SIGKILL'); } catch { /* группа уже мертва */ }
  try { ch.kill('SIGKILL'); } catch { /* already gone */ }
  await sleep(120);
  fs.unlinkSync(tmp);
  if (!ok) throw new Error(`PDF not produced: ${outfile}`);
}
function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }

const only = process.argv[2]; // optional supplier id filter
const targets = only ? SUPPLIERS.filter((s) => s.id === only) : SUPPLIERS;
if (only && targets.length === 0) { console.error(`Unknown supplier id: ${only}`); process.exit(1); }

let n = 0;
for (const cfg of targets) {
  /* Site palette wins, so a colour changed on the website reaches the PDFs too. */
  const site = SITE_BRAND[cfg.id];
  if (site) {
    cfg.colors = { ...cfg.colors, deep: site.deep, sky: site.sky, accent: site.accent, bg: site.bg };
    cfg.voice = site.voice;
  }
  const priceLines = cfg.noPrice
    ? null
    : JSON.parse(fs.readFileSync(path.join(DATA, `${cfg.json}.price.json`), 'utf8'));
  process.stdout.write(`\n${cfg.id}:`);
  for (const lang of LANGS) {
    await toPDF(termsHTML(cfg, lang), path.join(OUT, `${cfg.id}-terms-${lang}.pdf`));
    n += 1;
    if (priceLines) {
      await toPDF(priceHTML(cfg, lang, priceLines), path.join(OUT, `${cfg.id}-price-${lang}.pdf`));
      n += 1;
    }
    await toPDF(deckHTML(cfg, lang, presData(cfg, lang), termsData(cfg, lang), catalogOf(cfg), heroOf(cfg)),
      path.join(OUT, `${cfg.id}-presentation-${lang}.pdf`));
    n += 1;
    process.stdout.write(` ${lang}`);
  }
}
fs.rmSync(PROF, { recursive: true, force: true });
console.log(`\nГотово: ${n} PDF в ${path.relative(ROOT, OUT)}/`);

/* Водяной знак — обязательная часть конвейера, а не отдельный шаг «на потом».
   Chrome печатает документ без знака и с грязными свойствами; забыть второй шаг
   значит выложить прайс без знака и заново засорить историю репозитория
   меняющейся датой. Поэтому вызываем сами. Скрипт идемпотентен: повторный
   прогон не двоит знак. */
await new Promise((resolve, reject) => {
  const args = ['scripts/watermark_pdfs.py', ...(only ? [only] : [])];
  const wm = spawn('python3', args, { cwd: ROOT, stdio: 'inherit' });
  wm.on('exit', (code) => (code === 0
    ? resolve()
    : reject(new Error(`watermark_pdfs.py вышел с кодом ${code} — PDF остались без знака`))));
  wm.on('error', reject);
});
