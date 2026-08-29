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
import type { CategoryKey, CountryKey } from './site';
import doobomRu from './suppliers-i18n/doobom.ru.json';
import doobomEn from './suppliers-i18n/doobom.en.json';
import doobomKo from './suppliers-i18n/doobom.ko.json';
import doobomZh from './suppliers-i18n/doobom.zh.json';
import doobomJa from './suppliers-i18n/doobom.ja.json';
import doobomIt from './suppliers-i18n/doobom.it.json';
import doobomDe from './suppliers-i18n/doobom.de.json';
import doobomFr from './suppliers-i18n/doobom.fr.json';
import doobomTr from './suppliers-i18n/doobom.tr.json';
import doobomEs from './suppliers-i18n/doobom.es.json';
import doobomPt from './suppliers-i18n/doobom.pt.json';
import doobomCatalog from './suppliers-i18n/doobom.catalog.json';
import cocoRu from './suppliers-i18n/cocospack.ru.json';
import cocoCatalog from './suppliers-i18n/cocospack.catalog.json';
import cocoEn from './suppliers-i18n/cocospack.en.json';
import cocoKo from './suppliers-i18n/cocospack.ko.json';
import cocoZh from './suppliers-i18n/cocospack.zh.json';
import cocoJa from './suppliers-i18n/cocospack.ja.json';
import cocoIt from './suppliers-i18n/cocospack.it.json';
import cocoDe from './suppliers-i18n/cocospack.de.json';
import cocoFr from './suppliers-i18n/cocospack.fr.json';
import cocoTr from './suppliers-i18n/cocospack.tr.json';
import cocoEs from './suppliers-i18n/cocospack.es.json';
import cocoPt from './suppliers-i18n/cocospack.pt.json';
import sunpureRu from './suppliers-i18n/sunpure.ru.json';
import sunpureEn from './suppliers-i18n/sunpure.en.json';
import sunpureKo from './suppliers-i18n/sunpure.ko.json';
import sunpureZh from './suppliers-i18n/sunpure.zh.json';
import sunpureJa from './suppliers-i18n/sunpure.ja.json';
import sunpureIt from './suppliers-i18n/sunpure.it.json';
import sunpureDe from './suppliers-i18n/sunpure.de.json';
import sunpureFr from './suppliers-i18n/sunpure.fr.json';
import sunpureTr from './suppliers-i18n/sunpure.tr.json';
import sunpureEs from './suppliers-i18n/sunpure.es.json';
import sunpurePt from './suppliers-i18n/sunpure.pt.json';
import bioptRu from './suppliers-i18n/biopt.ru.json';
import bioptEn from './suppliers-i18n/biopt.en.json';
import bioptKo from './suppliers-i18n/biopt.ko.json';
import bioptZh from './suppliers-i18n/biopt.zh.json';
import bioptJa from './suppliers-i18n/biopt.ja.json';
import bioptIt from './suppliers-i18n/biopt.it.json';
import bioptDe from './suppliers-i18n/biopt.de.json';
import bioptFr from './suppliers-i18n/biopt.fr.json';
import bioptTr from './suppliers-i18n/biopt.tr.json';
import bioptEs from './suppliers-i18n/biopt.es.json';
import bioptPt from './suppliers-i18n/biopt.pt.json';
import loobeeRu from './suppliers-i18n/loobee.ru.json';
import loobeeEn from './suppliers-i18n/loobee.en.json';
import loobeeKo from './suppliers-i18n/loobee.ko.json';
import loobeeZh from './suppliers-i18n/loobee.zh.json';
import loobeeJa from './suppliers-i18n/loobee.ja.json';
import loobeeIt from './suppliers-i18n/loobee.it.json';
import loobeeDe from './suppliers-i18n/loobee.de.json';
import loobeeFr from './suppliers-i18n/loobee.fr.json';
import loobeeTr from './suppliers-i18n/loobee.tr.json';
import loobeeEs from './suppliers-i18n/loobee.es.json';
import loobeePt from './suppliers-i18n/loobee.pt.json';
import loobeeCatalog from './suppliers-i18n/loobee.catalog.json';
import multifitRu from './suppliers-i18n/multifit.ru.json';
import multifitCatalog from './suppliers-i18n/multifit.catalog.json';
import multifitEn from './suppliers-i18n/multifit.en.json';
import multifitKo from './suppliers-i18n/multifit.ko.json';
import multifitZh from './suppliers-i18n/multifit.zh.json';
import multifitJa from './suppliers-i18n/multifit.ja.json';
import multifitIt from './suppliers-i18n/multifit.it.json';
import multifitDe from './suppliers-i18n/multifit.de.json';
import multifitFr from './suppliers-i18n/multifit.fr.json';
import multifitTr from './suppliers-i18n/multifit.tr.json';
import multifitEs from './suppliers-i18n/multifit.es.json';
import multifitPt from './suppliers-i18n/multifit.pt.json';
import cubecapCatalog from './suppliers-i18n/cubecap.catalog.json';
import cubecapRu from './suppliers-i18n/cubecap.ru.json';
import cubecapEn from './suppliers-i18n/cubecap.en.json';
import cubecapKo from './suppliers-i18n/cubecap.ko.json';
import cubecapZh from './suppliers-i18n/cubecap.zh.json';
import cubecapJa from './suppliers-i18n/cubecap.ja.json';
import cubecapIt from './suppliers-i18n/cubecap.it.json';
import cubecapDe from './suppliers-i18n/cubecap.de.json';
import cubecapFr from './suppliers-i18n/cubecap.fr.json';
import cubecapTr from './suppliers-i18n/cubecap.tr.json';
import cubecapEs from './suppliers-i18n/cubecap.es.json';
import cubecapPt from './suppliers-i18n/cubecap.pt.json';
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
import dongdonggurimooCatalog from './suppliers-i18n/dongdonggurimoo.catalog.json';
import ckRegeonCatalog from './suppliers-i18n/ck-regeon.catalog.json';
import jetsglobalCatalog from './suppliers-i18n/jetsglobal.catalog.json';
import pineworldCatalog from './suppliers-i18n/pineworld.catalog.json';
import kiftCatalog from './suppliers-i18n/kift.catalog.json';
import icelmediCatalog from './suppliers-i18n/icelmedi.catalog.json';
import tdlCatalog from './suppliers-i18n/three-days-love.catalog.json';
import licorneCatalog from './suppliers-i18n/licorne.catalog.json';
import dreamcosCatalog from './suppliers-i18n/dreamcos.catalog.json';
import santeLines from './suppliers-i18n/sante.lines.json';
import dongdonggurimooLines from './suppliers-i18n/dongdonggurimoo.lines.json';
import pineworldLines from './suppliers-i18n/pineworld.lines.json';
import dreamcosLines from './suppliers-i18n/dreamcos.lines.json';
import jetsglobalLines from './suppliers-i18n/jetsglobal.lines.json';
import kiftLines from './suppliers-i18n/kift.lines.json';
import ckRegeonLines from './suppliers-i18n/ck-regeon.lines.json';
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
import jetsRu from './suppliers-i18n/jetsglobal.ru.json';
import jetsEn from './suppliers-i18n/jetsglobal.en.json';
import jetsKo from './suppliers-i18n/jetsglobal.ko.json';
import jetsZh from './suppliers-i18n/jetsglobal.zh.json';
import jetsJa from './suppliers-i18n/jetsglobal.ja.json';
import jetsIt from './suppliers-i18n/jetsglobal.it.json';
import jetsDe from './suppliers-i18n/jetsglobal.de.json';
import jetsFr from './suppliers-i18n/jetsglobal.fr.json';
import jetsTr from './suppliers-i18n/jetsglobal.tr.json';
import jetsEs from './suppliers-i18n/jetsglobal.es.json';
import jetsPt from './suppliers-i18n/jetsglobal.pt.json';
import pineRu from './suppliers-i18n/pineworld.ru.json';
import pineEn from './suppliers-i18n/pineworld.en.json';
import pineKo from './suppliers-i18n/pineworld.ko.json';
import pineZh from './suppliers-i18n/pineworld.zh.json';
import pineJa from './suppliers-i18n/pineworld.ja.json';
import pineIt from './suppliers-i18n/pineworld.it.json';
import pineDe from './suppliers-i18n/pineworld.de.json';
import pineFr from './suppliers-i18n/pineworld.fr.json';
import pineTr from './suppliers-i18n/pineworld.tr.json';
import pineEs from './suppliers-i18n/pineworld.es.json';
import pinePt from './suppliers-i18n/pineworld.pt.json';
import kiftRu from './suppliers-i18n/kift.ru.json';
import kiftEn from './suppliers-i18n/kift.en.json';
import kiftKo from './suppliers-i18n/kift.ko.json';
import kiftZh from './suppliers-i18n/kift.zh.json';
import kiftJa from './suppliers-i18n/kift.ja.json';
import kiftIt from './suppliers-i18n/kift.it.json';
import kiftDe from './suppliers-i18n/kift.de.json';
import kiftFr from './suppliers-i18n/kift.fr.json';
import kiftTr from './suppliers-i18n/kift.tr.json';
import kiftEs from './suppliers-i18n/kift.es.json';
import kiftPt from './suppliers-i18n/kift.pt.json';
import icelmediRu from './suppliers-i18n/icelmedi.ru.json';
import icelmediEn from './suppliers-i18n/icelmedi.en.json';
import icelmediKo from './suppliers-i18n/icelmedi.ko.json';
import icelmediZh from './suppliers-i18n/icelmedi.zh.json';
import icelmediJa from './suppliers-i18n/icelmedi.ja.json';
import icelmediIt from './suppliers-i18n/icelmedi.it.json';
import icelmediDe from './suppliers-i18n/icelmedi.de.json';
import icelmediFr from './suppliers-i18n/icelmedi.fr.json';
import icelmediTr from './suppliers-i18n/icelmedi.tr.json';
import icelmediEs from './suppliers-i18n/icelmedi.es.json';
import icelmediPt from './suppliers-i18n/icelmedi.pt.json';
import tdlRu from './suppliers-i18n/three-days-love.ru.json';
import tdlEn from './suppliers-i18n/three-days-love.en.json';
import tdlKo from './suppliers-i18n/three-days-love.ko.json';
import tdlZh from './suppliers-i18n/three-days-love.zh.json';
import tdlJa from './suppliers-i18n/three-days-love.ja.json';
import tdlIt from './suppliers-i18n/three-days-love.it.json';
import tdlDe from './suppliers-i18n/three-days-love.de.json';
import tdlFr from './suppliers-i18n/three-days-love.fr.json';
import tdlTr from './suppliers-i18n/three-days-love.tr.json';
import tdlEs from './suppliers-i18n/three-days-love.es.json';
import tdlPt from './suppliers-i18n/three-days-love.pt.json';
import licorneRu from './suppliers-i18n/licorne.ru.json';
import licorneEn from './suppliers-i18n/licorne.en.json';
import licorneKo from './suppliers-i18n/licorne.ko.json';
import licorneZh from './suppliers-i18n/licorne.zh.json';
import licorneJa from './suppliers-i18n/licorne.ja.json';
import licorneIt from './suppliers-i18n/licorne.it.json';
import licorneDe from './suppliers-i18n/licorne.de.json';
import licorneFr from './suppliers-i18n/licorne.fr.json';
import licorneTr from './suppliers-i18n/licorne.tr.json';
import licorneEs from './suppliers-i18n/licorne.es.json';
import licornePt from './suppliers-i18n/licorne.pt.json';

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
  gallery_h?: string;
  gallery_note?: string;
  video_h?: string;
  video_note?: string;
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
  /* Optional band under the hero: one dated fact about the brand (a retail
     launch, an award) plus the slug of the article that unpacks it. */
  spotlight?: { label: string; title: string; text: string; cta: string; post: string };
  terms?: { label: string; value: string }[];
  /* Подпись под блоком личного визита. Общая строка card_visited_d говорит
     «был на заводе», и для производителей это верно. У BIOPT визит был в офис
     компании, поэтому подпись задаётся здесь и перекрывает общую. */
  visitNote?: string;
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
  /* Where the supplier manufactures. The catalog splits by country before it
     splits by category. Omitted means Korea — that is where the platform
     started and where every supplier published before August 2026 sits. */
  country?: CountryKey;
  name: string; // company display name (language-neutral)
  brand: string; // primary brand (language-neutral)
  status: 'visited' | 'provided';
  visitDate?: string;
  visitGallery?: string[];
  /* Фотографии объектов и оборудования в работе, присланные самим поставщиком.
     Отдельно от visitGallery: тот блок подписан «Проверено — личный визит» и
     говорит о том, что мы видели своими глазами. Здесь — материалы компании,
     и подпись это называет прямо (устав, два статуса и ничего между ними). */
  gallery?: string[];
  /* Ролики самого поставщика, лежащие на нашем домене. Не встраиваем чужой
     плеер: он приносит на страницу имя канала, кнопку «смотреть там» и витрину
     остальных роликов производителя — то есть прямой канал к нему, а прямые
     каналы поставщика мы не публикуем (CONTENT-RULES, §7). Файл отдаётся нами,
     играет в карточке и до нажатия не грузится вовсе. Названия латиницей —
     это коды моделей, они одинаковы во всех одиннадцати языках. */
  videos?: { src: string; poster: string; name: string }[];
  brandColors: { deep: string; sky: string; accent: string; bg: string };
  /* How the brand carries itself, taken from its own site and packaging. Our
     layout stays the same everywhere; this decides the accents on top of it —
     shape language, background motif, and whether headings run serif. So a
     buyer arriving from the brand's own site recognises it on our page.
       clinical — professional / lab (Dr.SANTE, DermaRegeon, cellmedics)
       natural  — plant, cica, vegan (LEBELAGE, LICORNE)
       soft     — home care, pastel (RAVIEL)
       playful  — young, bright (KIFT)
       premium  — warm, gold, aesthetic (THREE DAYS LOVE)
       pop      — colour-block, fragrance (DUFT&DOFT / Dreamcos group)
       minimal  — white space, serif, monogram (tom-tit-tot) */
  voice?: 'clinical' | 'natural' | 'soft' | 'playful' | 'premium' | 'pop' | 'minimal';
  /* Photo for a product line that has no products in the photo catalog — the
     line is sold (it is in the price list) but the supplier sent no packshots
     for it. Keyed by the line name as written in i18n.lines. Real photographs
     from the brand's own materials only; never a drawing (docs/IMAGERY.md). */
  lineShots?: Record<string, string>;
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
  facts: ['С 2003 года', 'Собственная разработка и производство', 'Экспорт в 30+ стран', '8 000+ салонов и клиник', 'Профессиональный сегмент'],
  channels: ['Клиники эстетики', 'Дерматологические клиники', 'Кабинеты восточной медицины', 'Салоны красоты'],
  lines: [
    { name: 'Azulene Soother', note: 'Успокаивающая линейка с гуайазуленом и ромашковой водой: быстро снижает раздражение, понижает температуру кожи и укрепляет барьер, работая с первопричинами проблем чувствительной кожи. Кремы, сыворотки, маски, лосьоны, мисты, гели, солнцезащитные эссенции.' },
    { name: 'Artemisia AKA', note: 'Линейка для проблемной и раздражённой кожи: по данным компании, оказывает выраженное успокаивающее действие и помогает визуально уменьшить признаки раздражения. Ампулы, кремы и маски для восстановления и барьерного ухода.' },
    { name: 'Collagen Leader', note: 'Коллагеновый уход, ориентированный на упругость и возрастную кожу.' },
    { name: 'Hyalquad Core', note: 'Интенсивное увлажнение на комплексе гиалуроновой кислоты.' },
    { name: 'Elsol', note: 'Линейка растительных масел на основе премиального израильского масла жожоба с сертификатом USDA — нерафинированного, холодного отжима. По данным компании, его структура близка к барьеру кожи и помогает восстановить и укрепить его.' },
    { name: 'Hair Care', note: 'Уход за волосами и кожей головы на ромашковой воде: шампунь и уход с запатентованным комплексом YUKMIJIHWANG, гуайазуленом и эко-керамидным маслом. Флаконы 500 мл и дорожные стики.' },
  ],
  tech: [
    { name: 'Гуайазулен + ромашковая вода', note: 'Real Blue Calming Solution — успокаивает раздражённую кожу, снижает её температуру и укрепляет защитный барьер.' },
    { name: 'LHASOL™', note: 'Фирменный ингредиент 4-го поколения — стабилизированный LHA в высокой концентрации. По данным компании, оказывает отшелушивающее действие на ороговевшие клетки и помогает проблемной коже вернуться к здоровому слабокислому pH.' },
  ],
  formats: ['Ампулы', 'Сыворотки', 'Кремы', 'Маски', 'Тонеры и пэды', 'Очищающие средства', 'Солнцезащита', 'Мисты', 'Масла'],
  exportNote: 'Продукция Dr.SANTE поставляется более чем в 30 стран — среди них США, Канада, Чехия, Греция, Япония, Китай и Тайвань — и представлена более чем в 8 000 салонов и клиник эстетики по всему миру. Официальные партнёры, по данным компании, работают в Китае, Японии, на Тайване, в Канаде, на Гавайях, в Австралии (онлайн), Гонконге, Макао, Греции, Аргентине и России. Компания участвует в выставках Cosmoprof, Beautyworld, InterCHARM и K-Beauty Expo.',
  terms: [
    { label: 'Форматы сотрудничества', value: 'Оптовые поставки готовой продукции; OEM/ODM — собственная разработка и производство.' },
    { label: 'Минимальный заказ', value: 'Ориентировочно от $4 000 на первый заказ; небольшие партии по отдельным позициям.' },
    { label: 'Цены', value: 'Цены по запросу. Экспортный прайс-лист не публикуем — актуальные цены и базис поставки покупатель получает на стадии сделки через Teranova.' },
    { label: 'Как идёт работа', value: 'Заявка → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата под ключ.' },
  ],
  consentNote: 'Данные и материалы предоставлены компанией SANTE COSMETICS и публикуются с её письменного согласия. Teranova координирует и сопровождает сделку.',
  catalog_notes: [
    'Очищающее средство со слабокислым pH 5.5, близким к состоянию здоровой кожи; гипоаллергенное, увлажняет, успокаивает и укрепляет барьер кожи.',
    'Мягко кислотное гипоаллергенное очищающее молочко (pH 5.5), снимает дневной макияж и даже солнцезащиту, оставляя увлажняющий барьер без стянутости.',
    'Тонер на основе экстракта ромашки и азулена вместо очищенной воды, с 50 000 ppm экстракта мяты горы Чирисан для успокоения и увлажнения; технология Aquaporin для глубокого увлажнения.',
    'Гель на основе ромашковой воды. Быстро успокаивает, охлаждает и увлажняет кожу, раздражённую улицей, солнцем, УФ, отоплением или кондиционером.',
    'Успокаивающий уход Azulene Soother в компактном формате стика.',
    'Лосьон с настоящим синим азуленом на ромашковой воде. Содержит пантенол и церамид NP; прошёл гипоаллергенные тесты для чувствительной и детской кожи.',
    'Ампула для чувствительной кожи с высоким содержанием азулена (известна среди эстетических брендов). Сильное успокоение, удержание влаги и защита.',
    'Крем натурального синего цвета азулена без искусственных красителей. Сильное успокоение, удержание влаги и защита, баланс воды и себума для здоровья кожи.',
    'Смываемая крем-маска на ромашковой воде с 1 000 ppm гуайазулена, 20 000 ppm дэкспантенола и 8 видами гиалуроновой кислоты. Увлажняет, успокаивает и смягчает кожу.',
    'Сыворотка-эксфолиант с PHA и LHA на ромашковой воде. Мягко удаляет ороговевшие клетки без раздражения, увлажняет и придаёт сияние.',
    'Тканевая маска из биоцеллюлозы, эссенция на 87% ромашковой воде для быстрого успокоения и увлажнения. Восстанавливающий лист 4-го поколения плотно прилегает и доставляет активные компоненты.',
    'Полугелевая тканевая маска на ромашковой воде с гуайазуленом: успокаивает и увлажняет. В комплекте отдельный лист для шеи. Полотно — гелированное натуральное бамбуковое волокно, плотно прилегает и удерживает влагу.',
    'Несохнущая гелевая моделирующая маска с 79% ромашковой воды и азуленом. Мгновенно успокаивает разогретую кожу и укрепляет барьер влаги.',
    'Мист-спрей для успокоения, расслабления, увлажнения и питания уставшей и раздражённой кожи.',
    'Солнцезащитная эссенция на ромашковой воде с 11 видами гиалуроновой кислоты; увлажняет весь день и защищает от УФ. Экстракт софоры успокаивает и удерживает влагу.',
    'Увлажняющий кушон на ромашковой воде с гуайазуленом: тонкое естественное покрытие, пантенол и церамид NP. Безвоздушная упаковка и пуховка rubycell, в комплекте сменный блок.',
    'BB-крем линии Azulene Soother: лёгкое покрытие на уходовой основе из ромашковой воды и гуайазулена. Объём 35 г.',
    'Профессиональный массажный крем на ромашковой воде с гуайазуленом, оливковым маслом, маслом зародышей пшеницы и маслом ши. Не требует снятия салфеткой, подходит для лица, тела и аппаратных процедур. Объём 1 000 мл.',
    'Тонер-пэды из гелифицированного натурального бамбукового волокна. Мягко прилегают, предотвращают потерю влаги и доставляют активные компоненты весь день с эффектом обёртывания.',
    'Сменный блок для тонер-пэдов Azulene Soother Semi-Gel.',
    'Слабокислый успокаивающий тонер, контролирует избыток себума и улучшает поры; подходит для ежедневного ухода даже за чувствительной кожей.',
    'Успокаивающая ампула с экстрактом полыни. По данным компании, LHA-SOL™ и ниацинамид мягко регулируют избыток себума и работают с порами, а AKA-DERM™ — смесь шести растительных экстрактов и увлажняющих компонентов.',
    'Успокаивающий крем с экстрактом полыни, LHA-SOL™ и AKA-DERM™ для чувствительной кожи с расширенными порами. CERAVITE™ поддерживает увлажнение и укрепляет барьер кожи.',
    'Полугелевая маска для лица и шеи: по данным компании, помогает поддерживать кожу чистой и комфортной, быстро успокаивает её и улучшает вид несовершенств.',
    'Веганский пэд из экологичных материалов (хлопок и Tencel). Не рвётся и не растягивается, прилегает без раздражения, впитывает тонер в кожу.',
    'BB-крем линии Artemisia AKA с уходовой основой для чувствительной и склонной к высыпаниям кожи. Объём 35 г.',
    'Тонер линии Collagen Leader с гидролизованным коллагеном для упругости и увлажнения. Три формата: 500 и 200 мл, а также Bubble Toner 100 мл.',
    'Ампула с гидролизованным коллагеном и пептидным комплексом для упругости и плотности кожи. Объём 100 мл.',
    'Крем с гидролизованным коллагеном, средой кондиционирования стволовых клеток человека и шестью видами пептидов. Церамид NP, пантенол, витамин B12 и вода розы столистной — для увлажнения и сияния. Объём 150 г.',
    'Тканевая маска линии Collagen Leader для упругости и увлажнения. Упаковка — 10 листов.',
    'Ампула системы HyalQuad-4: четыре типа гиалуроновой кислоты разной молекулярной массы для увлажнения на разной глубине. Объём 100 мл.',
    'Крем системы HyalQuad-4 с комплексом TE HA, сакраном, скваланом и маслом ши; по данным компании, NAD и ресвератрол поддерживают сияние кожи. Объёмы 50 и 200 г.',
    'Надёжное масло жожоба из Израиля высшего сорта, сертификат USDA. Нерафинированное холодного отжима — выше антиоксидантный эффект; структура близка к барьеру кожи, помогает восстановить и укрепить его.',
    'Надёжное масло жожоба из Израиля высшего сорта, сертификат USDA. Нерафинированное холодного отжима — выше антиоксидантный эффект; структура близка к барьеру кожи, помогает восстановить и укрепить его.',
    'Шампунь на ромашковой воде с запатентованным комплексом YUKMIJIHWANG и экстрактом коры магнолии. Гуайазулен и эко-керамидное масло питают кожу головы и волосы. Без ингредиентов животного происхождения, минерального масла, искусственных красителей, семи видов парабенов и силиконов. Флакон 500 мл и стики 5 мл.',
    'Уход для волос той же линии: гуайазулен и эко-керамидное масло смягчают волосы и облегчают расчёсывание. Флакон 500 мл и стики 5 мл.',
    'Парфюмированный крем для рук с пантенолом и гиалуроновой кислотой, аромат Rosewood Vanilla. Лёгкая текстура, быстро впитывается и не оставляет липкости. Объём 55 мл.',
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
  catalog_notes: ["Парфюмированный крем для рук флагманского бренда группы DUFT&DOFT; 6 ароматов на выбор.", "Парфюмированный крем для рук с укреплением водного барьера кожи; 6 ароматов.", "Парфюмированный мист для тела; 7 ароматов на выбор.", "Ароматический мист для волос и тела линии Fine Fragrance; 4 аромата.", "Парфюмированный лосьон для тела; 5 ароматов на выбор.", "Парфюмированный гель для душа; 4 аромата на выбор.", "Расслабляющий спа-гель для душа; 3 аромата на выбор.", "Парфюмированный скраб для тела линии Signature; 4 аромата.", "Парфюмированный пилинг-мист для тела с ароматом Apple Sophy.", "Парфюмированный шампунь для волос линии Enriched Perfume.", "Парфюмированный кондиционер для волос с ароматом Sophy Sophy.", "Парфюмированный тоник для кожи головы с кофеином линии Signature.", "Сыворотка с глутатионом для сияния и выравнивания тона кожи.", "Восстанавливающая сыворотка с бакучиолом (растительная альтернатива ретинолу).", "Очищающая сыворотка для ухода за порами.", "Питательный крем с пантенолом линии Crown для интенсивного питания кожи.", "Витаминная ампула с морковью линии Crown для сияния кожи.", "Ампула Master Benone линии Crown с идебеноном и коллагеном; по данным компании, работает с пигментацией и следами постакне.", "Восстанавливающая ампула с коллагеном и EGF-комплексом линии Crown.", "Солнцезащитный кушон с эссенцией и эффектом тон-ап, SPF50+ PA+++.", "CC-крем с покрытием и солнцезащитой SPF50+ PA+++.", "Палетка теней для век на 9 оттенков.", "Консилер для маскировки несовершенств.", "Компактные румяна Sweet Candy.", "Ухаживающее масло для губ; 3 оттенка на выбор.", "Кушон-консилер с солнцезащитой SPF50+ PA+++ линии City Girl.", "Солнцезащитный крем с эффектом тон-ап и PDRN, SPF50+ PA++++.", "Глянцевый тинт для губ линии City Girl.", "Ароматизированный гель для душа линии Fresh Flash.", "Средство для интимной гигиены с ампульным концентратом; 2 варианта.", "Твёрдый парфюмированный бальзам для тела."],
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
    { name: 'RUDIA', note: 'Функциональный уход для чувствительной кожи с активными формулами (глутатион, ниацинамид, бакучиол): сыворотки и питательные кремы. Перезапуск бренда в 2026 году.' },
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
  catalog_notes: ["Ампула с коллагеном для упругости и увлажнения кожи, 30 мл.", "Ампула с керамидами для укрепления защитного барьера и увлажнения кожи, 30 мл.", "Ампула с центеллой (CICA) для успокоения чувствительной кожи, 30 мл.", "Ампула с витамином C для сияния и выравнивания тона кожи, 30 мл.", "Восстанавливающий крем с центеллой для успокоения и защиты кожи, 70 мл.", "Восстанавливающий крем с керамидами для укрепления барьера кожи, 70 мл.", "Восстанавливающий крем с муцином улитки для питания и регенерации кожи, 70 мл.", "Гидрогелевые патчи с коллагеном для упругости и увлажнения кожи вокруг глаз, 60 шт.", "Концентрированная ампула с центеллой и мадекассосидом для успокоения и тонуса кожи, 35 мл.", "Питательный крем с центеллой и мадекассосидом для смягчения и восстановления кожи, 55 мл.", "Тонер с центеллой и мадекассосидом для очищения и увлажнения кожи, 120 мл.", "Ампула с прополисом, миррой и центеллой для питания и увлажнения кожи, 15 мл.", "Успокаивающий мист с центеллой для увлажнения и освежения кожи в течение дня, 120 мл.", "Увлажняющий тонер с центеллой для смягчения и подготовки кожи к уходу, 150 мл.", "Увлажняющая эмульсия с центеллой для смягчения и питания кожи, 150 мл.", "Сыворотка с липосомным комплексом центеллы (80 000 ppm) для успокоения кожи, 35 мл.", "Сыворотка с липосомным ретинолом (10 000 ppm) для обновления и упругости кожи, 35 мл.", "Сыворотка с пантенолом (100 000 ppm) для увлажнения и восстановления кожи, 35 мл.", "Сыворотка с липосомным глутатионом (80 000 ppm) для сияния кожи, 35 мл.", "Пропитанные пэды с центеллой для успокоения и мягкого тонизирования кожи, 60 шт.", "Пропитанные пэды с ретинолом для обновления и выравнивания текстуры кожи, 60 шт.", "Пропитанные пэды с глутатионом для сияния и тонизирования кожи, 60 шт.", "Пропитанные пэды с пантенолом для увлажнения и восстановления кожи, 60 шт.", "Ампула с 5% гиалуроновой кислоты для глубокого увлажнения кожи, 30 мл.", "Ампула с 7% пантенола для увлажнения и восстановления кожи, 30 мл.", "Высококонцентрированная сыворотка с центеллой для интенсивного успокоения кожи, 20 г.", "Высококонцентрированная сыворотка с глутатионом для сияния кожи, 20 г.", "Высококонцентрированная сыворотка с PDRN для упругости и восстановления кожи, 20 г.", "Тканевые маски с центеллой для успокоения кожи, 10 шт.", "Тканевые маски с мадекассосидом для восстановления и тонуса кожи, 10 шт.", "Тканевые маски с муцином улитки для питания и регенерации кожи, 10 шт.", "Тканевые маски с зелёным чаем для очищения и баланса кожи, 10 шт.", "Тканевые маски с витаминами для сияния и тонуса кожи, 10 шт.", "Тканевые маски с алоэ для увлажнения и успокоения кожи, 10 шт.", "Ампульные тканевые маски с центеллой для интенсивного успокоения кожи, 10 шт.", "Ежедневные тканевые маски с витаминами для сияния кожи, 30 шт.", "Компактный солнцезащитный крем SPF50+ PA++++ в удобном дорожном формате, 40 мл.", "Солнцезащитный стик SPF50 широкого спектра UVA+UVB, 20 г.", "Очищающая пенка с муцином улитки для мягкого ежедневного умывания, 100 мл.", "Водостойкий солнцезащитный крем SPF50+ PA++++ в дорожном формате, 40 мл.", "Успокаивающий солнцезащитный крем с центеллой SPF50+ PA++++, 50 г.", "Охлаждающий солнцезащитный кушон SPF50+ PA++++ для удобного нанесения, 20 г.", "Очищающая пенка с зелёным чаем для мягкого умывания и баланса кожи, 100 мл.", "Глиняная очищающая пенка с углём для глубокого очищения пор, 180 мл.", "Тональная основа с коллагеном и матирующим эффектом, оттенок Natural Beige, 100 мл.", "Набор ухода с центеллой: тонер и эмульсия для увлажнения кожи.", "Набор глубокого увлажнения Super Aqua: тонер и эмульсия.", "Набор из 3 кремов для рук с ароматами ши, сандала и франжипани, по 30 г.", "Набор ухода с центеллой: тонер, эмульсия, ампула и крем.", "Набор из 10 ампул с прополисом и центеллой, по 15 мл каждая."],

  tagline: 'Широкая линейка корейской косметики под двумя собственными брендами',
  descriptor: 'Корейская косметическая компания: бренды LEBELAGE и HEEYUL',
  origin: 'Корея',
  about: [
    'DONGDONGGURIMOO CO., LTD. — корейская косметическая компания из Сеула, владелец брендов LEBELAGE и HEEYUL. LEBELAGE — бренд ухода за кожей и декоративной косметики с акцентом на натуральные и функциональные составы. HEEYUL — специализированный бренд по уходу за волосами, включая линию против выпадения.',
    'Ассортимент охватывает полный цикл ухода: очищение, тонеры, эссенции и ампулы, кремы и сыворотки, тканевые маски и патчи, солнцезащиту, уход за телом и руками, а также декоративную косметику и парфюмерию. Действующий прайс включает 351 товарную позицию в 30 категориях.',
    'По данным компании, продукция поставляется на зарубежные рынки, включая Россию и страны Юго-Восточной Азии. Для части позиций указаны регистрационные номера MoCRA (США), CPNP (ЕС) и SCPN (Великобритания).',
  ],
  facts: ['Два собственных бренда: LEBELAGE и HEEYUL', '351 позиция в 30 категориях', 'Регистрации MoCRA · CPNP · SCPN (по части позиций)', 'Уход, макияж, солнцезащита и уход за волосами', 'Экспортный опыт — по данным компании'],
  channels: ['Импортёры и дистрибьюторы косметики', 'Розничные и дрогери-сети', 'Маркетплейсы и e-commerce', 'Салоны и специализированные магазины'],
  lines: [
    { name: 'LEBELAGE', note: 'Основной бренд компании: уход за кожей и декоративная косметика. Очищение, тонеры, эссенции, ампулы, сыворотки, кремы, тканевые маски и патчи, солнцезащита, уход за телом и руками, макияж и парфюмерия.' },
    { name: 'HEEYUL', note: 'Специализированный бренд по уходу за волосами и кожей головы: линия против выпадения волос (шампунь, кондиционер, тоник, ампула), а также наборы ухода в традициях корейской фитотерапии.' },
  ],
  tech: [
    { name: 'Функциональные активы в составах', note: 'Линейки построены вокруг известных косметических активов: коллаген, центелла (Cica), витамин C, гиалуроновая кислота, PDRN, глутатион, ретинол, пептиды, пантенол, керамиды, ниацинамид, муцин улитки, чайное дерево.' },
    { name: 'Широкая продуктовая матрица', note: 'Крупнейшие категории прайса — декоративная косметика (47 позиций), тканевые маски (42), кремы (39), пенки для умывания (32) и ампулы (25): можно собрать стартовый ассортимент под конкретный канал продаж.' },
    { name: 'Регистрации для экспортных рынков', note: 'В прайсе указаны номера регистраций: MoCRA (США) — по 240 позициям, EU CPNP — по 77, UK SCPN — по 76. Актуальность подтверждается документами на стадии сделки.' },
  ],
  formats: ['Очищение и пенки', 'Тонеры и мисты', 'Эссенции и ампулы', 'Сыворотки и кремы', 'Тканевые маски и патчи', 'Солнцезащита', 'Уход за волосами', 'Уход за телом и руками', 'Декоративная косметика', 'Парфюмерия'],
  exportNote: 'По данным компании, продукция брендов поставляется на зарубежные рынки, включая Россию и страны Юго-Восточной Азии. Конкретные территории, действующие дистрибьюторы и возможные ограничения уточняются на стадии сделки через Teranova.',
  terms: [
    { label: 'Форматы сотрудничества', value: 'Оптовые поставки готовой продукции брендов LEBELAGE и HEEYUL.' },
    { label: 'Минимальный заказ', value: 'Уточняется по позиции и объёму на стадии сделки.' },
    { label: 'Цены', value: 'Ориентировочный оптовый диапазон (Supply Price, июль 2026); точные цены и базис поставки — по запросу.' },
    { label: 'Как идёт работа', value: 'Заявка → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата под ключ.' },
  ],
  consentNote: 'Данные и материалы предоставлены компанией DONGDONGGURIMOO CO., LTD. и публикуются с её согласия. Прямые контакты производителя не раскрываются. Teranova координирует и сопровождает сделку.',
  seoTitle: 'LEBELAGE и HEEYUL — корейская косметика оптом · Teranova',
  seoDesc: 'DONGDONGGURIMOO — корейская косметическая компания, бренды LEBELAGE и HEEYUL: уход, маски, солнцезащита, макияж, уход за волосами. 351 позиция. Поставки и сопровождение сделки через Teranova.',
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
  catalog_notes: [
    'Профессиональный двухкомпонентный набор для интенсивного косметического ухода за кожей головы: флакон с лиофилизированным порошком PTD-DBM 200 мг и флакон-растворитель 5 мл. Содержимое второго флакона переносят в первый и полностью растворяют непосредственно перед процедурой. По протоколу компании стандартная доза в кабинете — около 5 мл мезотерапией за сеанс, с поправкой на диффузное или локальное выпадение и чувствительность кожи головы. Компания указывает противопоказания: аллергия на компоненты, активная инфекция кожи головы, псориаз, экзема или открытые раны, беременность и грудное вскармливание — как мера предосторожности. Упаковка — 5 наборов.',
    'Ежедневный шампунь линии «WNT ON» — второй шаг четырёхступенчатого ухода, после скалера. Бережно очищает кожу головы и волосы, освежает и поддерживает ощущение чистоты и лёгкости. Без парабенов, сульфатов и искусственных красителей. Объём 500 мл.',
    'Скальп-скалер — первый шаг ухода: массируют 2–3 минуты и смывают. Снимает отмершие клетки и излишки себума с кожи головы перед основным уходом. Объём 300 мл.',
    'Маска-уход для волос линии «WNT ON» — третий шаг: смягчает, увлажняет и облегчает расчёсывание, придаёт волосам ощущение плотности. Объём 250 мл.',
    'Несмываемый тоник для кожи головы — завершающий шаг ухода, применяется 2–3 раза в неделю. Наносится равномерно, не смывается и не оставляет липкости. Объём 50 мл.',
  ],
  tagline: 'Наука о восстановлении баланса кожи головы и волос',
  descriptor: 'Корейская биотех-компания: бренды HAIRREGEON и HERIBON',
  origin: 'Корея',
  about: [
    'CK Regeon Inc. — корейская биотехнологическая компания, основанная в 2016 году в Сеуле (Yonsei Engineering Research Park). Её возглавляет профессор Kang-Yell Choi, исследователь сигнального пути Wnt с более чем двадцатилетним опытом в регенеративной науке. Косметический портфель компании объединён под именем DermaRegeon и состоит из двух линий: HAIRREGEON для профессионального канала и HERIBON для домашнего ухода.',
    'За обеими линиями стоят десять лет исследований Wnt-сигналинга, пять патентов в США, Евросоюзе, Корее и Китае и, по данным компании, регуляторные уведомления, оформленные в девяти странах. Технология «WNT ON» работает через белок CXXC5: PTD-DBM и KY19382 нарушают его связывание с белком Dishevelled и восстанавливают подавленный сигнальный путь Wnt/β-catenin в клетках кожи головы. Механизм описан в рецензируемых журналах — Journal of Investigative Dermatology (2017), British Journal of Pharmacology (2020 и 2021), Cells (2023) и Journal of Experimental Medicine (2015).',
    'Важно для корректной коммуникации: опубликованные исследования описывают механизм действия компонентов на доклиническом уровне — клеточные культуры, ex vivo и пилотные наблюдения, — а не подтверждают клиническую эффективность готовых продуктов. HAIRREGEON и HERIBON выпускаются и продаются как косметические средства, а не медицинские изделия, и не позиционируются как лечение алопеции.',
  ],
  facts: ['Биотех-компания, основана в 2016 году', '5 патентов: США, ЕС, Корея, Китай', 'Публикации в JID, BJP, Cells и JEM', 'Регистрации и уведомления в 9 странах', 'Два бренда: HAIRREGEON и HERIBON'],
  channels: ['Импортёры и дистрибьюторы косметики', 'Аптечные и специализированные сети', 'Салоны, дерматологические клиники и трихологические студии', 'Маркетплейсы и e-commerce'],
  lines: [
    { name: 'HAIRREGEON', note: 'Профессиональная линия интенсивного косметического ухода за кожей головы — для клиник, салонов и трихологических студий. Флагман: PTD-DBM Hair Booster, двухкомпонентный набор из флакона с лиофилизированным порошком 200 мг и флакона-растворителя 5 мл, пять наборов в упаковке. Смешивается непосредственно перед процедурой; компания рекомендует сочетать с MTS-микронидлингом 0,5–1,5 мм с интервалом в две недели и отмечает, что заметный результат обычно наблюдают после двенадцати недель курса. Производство по ISO 22716, срок годности 36 месяцев.' },
    { name: 'HERIBON', note: 'Домашняя линия ежедневного ухода «WNT ON» из четырёх шагов, в порядке применения: скальп-скалер 300 мл, шампунь 500 мл, маска-уход 250 мл и несмываемый тоник 50 мл. Подходит для всех типов кожи головы — чувствительной, жирной и сухой; без парабенов, сульфатов и искусственных красителей. Срок годности 36 месяцев в закрытой упаковке, после вскрытия компания рекомендует использовать в течение 12 месяцев.' },
  ],
  tech: [
    { name: 'Технология «WNT ON»', note: 'Собственная разработка компании. PTD-DBM и KY19382 подавляют белок CXXC5, который компания называет ключевым фактором выпадения волос, и восстанавливают подавленный сигнальный путь Wnt/β-catenin в клетках кожи головы — переводя его из состояния «WNT OFF» в «WNT ON».' },
    { name: 'Пептид PTD-DBM', note: 'Действующий компонент профессиональной линии HAIRREGEON. Механизм конкурентного связывания CXXC5 описан в публикации Journal of Investigative Dermatology (2017) на доклиническом уровне.' },
    { name: 'MetaAct и KY19382', note: 'MetaAct — активатор PKM2, работает в HAIRREGEON в паре с PTD-DBM и усиливает активацию Wnt-пути. KY19382 — действующий компонент HERIBON, запатентован в США, Евросоюзе, Корее и Китае; красноватый оттенок продуктов HERIBON даёт сам KY19382, а не краситель.' },
    { name: 'Патенты и публикации', note: 'Пять зарегистрированных патентов в США, ЕС, Корее и Китае — на композицию WNT Hair и на сам пептид PTD-DBM. Механизм описан в четырёх рецензируемых журналах: Journal of Investigative Dermatology (2017), British Journal of Pharmacology (2020 и 2021), Cells (2023) и Journal of Experimental Medicine (2015).' },
  ],
  formats: ['Ампулы и бустеры', 'Шампуни', 'Скальп-скалеры (пилинг кожи головы)', 'Маски и уход для волос', 'Тоники для кожи головы'],
  exportNote: 'Косметические бренды компании запущены в 2025 году; компания участвует в международных отраслевых выставках и развивает дистрибуцию. По данным компании, часть рынков уже закрыта эксклюзивными и условно-эксклюзивными соглашениями — в Юго-Восточной Азии, Европе и СНГ. Свободные территории и условия по конкретному рынку подтверждаются на стадии запроса через Teranova.',
  terms: [
    { label: 'Форматы сотрудничества', value: 'Оптовые поставки готовой продукции брендов HAIRREGEON и HERIBON. OEM/ODM обсуждается по запросу.' },
    { label: 'Территории', value: 'Часть рынков закрыта эксклюзивными и условно-эксклюзивными соглашениями. Свободные территории подтверждаются на стадии запроса.' },
    { label: 'Объёмы и цены', value: 'Минимальные объёмы и цены подтверждаются на стадии запроса. Прайс-лист не публикуется.' },
    { label: 'Как идёт работа', value: 'Заявка → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата под ключ.' },
  ],
  consentNote: 'Данные и материалы предоставлены компанией CK Regeon Inc. и публикуются с её письменного согласия с сохранением исходного содержания. Прайс-лист не публикуется. Прямые контакты производителя не раскрываются. Teranova координирует и сопровождает сделку.',
  seoTitle: 'CK Regeon (DermaRegeon) — уход за кожей головы из Кореи · Teranova',
  seoDesc: 'CK Regeon — корейская биотех-компания: бренды HAIRREGEON и HERIBON, технология WNT ON, пять патентов в США, ЕС, Корее и Китае, регистрации MoCRA, CPNP, SCPN и Dermatest. Оптовые поставки и сопровождение сделки через Teranova.',
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
    pres_btn: 'Скачать презентацию (PDF)',
    terms_disc: 'Объёмы и условия подтверждаются на стадии запроса через Teranova. Прайс-лист не публикуется, прямые контакты производителя не раскрываются. Продукция представлена как косметические средства; описанные исследования относятся к механизму действия компонентов и носят доклинический характер.',
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
    voice: 'clinical',
    /* Collagen Leader, Hyalquad Core and Hair Care are in the price list but had
       no photos at all; these are the brand's own shots from santeshop.co.kr. */
    lineShots: {
      'Collagen Leader': '/img/suppliers/sante/lines/collagen-leader-toner.webp',
      'Hyalquad Core': '/img/suppliers/sante/lines/hyalquad-core-cream.webp',
      'Hair Care': '/img/suppliers/sante/lines/sante-amour-perfume-diffuser.webp',
    },
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
    /* Прайс не публикуется: SANTE COSMETICS 18.08.2026 письменно попросила снять
       экспортные цены — прайс закрытый. Цены — по запросу на стадии сделки. */
    presFile: {
      ru: '/docs/sante-presentation-ru.pdf', en: '/docs/sante-presentation-en.pdf', ko: '/docs/sante-presentation-ko.pdf', zh: '/docs/sante-presentation-zh.pdf', ja: '/docs/sante-presentation-ja.pdf', it: '/docs/sante-presentation-it.pdf', de: '/docs/sante-presentation-de.pdf', fr: '/docs/sante-presentation-fr.pdf', tr: '/docs/sante-presentation-tr.pdf', es: '/docs/sante-presentation-es.pdf', pt: '/docs/sante-presentation-pt.pdf',
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
    status: 'visited',
    visitDate: '2026-07-31',
    visitGallery: [
      '/img/suppliers/dreamcos/visit/visit-1.jpg',
      '/img/suppliers/dreamcos/visit/visit-2.jpg',
      '/img/suppliers/dreamcos/visit/visit-3.jpg',
      '/img/suppliers/dreamcos/visit/visit-4.jpg',
      '/img/suppliers/dreamcos/visit/visit-5.jpg',
      '/img/suppliers/dreamcos/visit/visit-6.jpg',
      '/img/suppliers/dreamcos/visit/visit-7.jpg',
      '/img/suppliers/dreamcos/visit/visit-8.jpg',
    ],
    brandColors: { deep: '#1c1c22', sky: '#f2c500', accent: '#ff4d8d', bg: '#fdf7e6' },
    voice: 'pop',
    catalog: dreamcosCatalog as { line: string; items: { name: string; img: string }[] }[],
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
    status: 'visited',
    visitDate: '2026-07-30',
    visitGallery: [
      '/img/suppliers/dongdonggurimoo/visit/visit-1.jpg',
      '/img/suppliers/dongdonggurimoo/visit/visit-2.jpg',
      '/img/suppliers/dongdonggurimoo/visit/visit-3.jpg',
      '/img/suppliers/dongdonggurimoo/visit/visit-4.jpg',
      '/img/suppliers/dongdonggurimoo/visit/visit-5.jpg',
      '/img/suppliers/dongdonggurimoo/visit/visit-6.jpg',
      '/img/suppliers/dongdonggurimoo/visit/visit-7.jpg',
      '/img/suppliers/dongdonggurimoo/visit/visit-8.jpg',
    ],
    brandColors: { deep: '#1f5945', sky: '#4e9c7f', accent: '#d4a373', bg: '#f2f7f4' },
    voice: 'natural',
    lineShots: {
      /* LEBELAGE is the flagship skincare brand — its name is printed on the
         packs in the catalog. HEEYUL is hair and scalp care, and none of its
         products are in our photo set, so its card stays without a photo rather
         than borrowing a LEBELAGE bottle. */
      LEBELAGE: '/img/suppliers/dongdonggurimoo/products/dr-ceramide-cure-cream.jpg',
    },
    catalog: dongdonggurimooCatalog as { line: string; items: { name: string; img: string }[] }[],
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
    voice: 'clinical',
    catalog: ckRegeonCatalog as { line: string; items: { name: string; img: string }[] }[],
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
    certs: ['MoCRA (US)', 'CPNP (EU)', 'SCPN (UK)', 'Dermatest (DE)'],
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
  {
    slug: 'jetsglobal',
    category: 'cosmetics',
    name: 'JETSGLOBAL',
    brand: 'TOM-TIT-TOT',
    status: 'provided',
    brandColors: { deep: '#26282f', sky: '#9aa0ad', accent: '#f2621f', bg: '#f6f4f0' },
    voice: 'minimal',
    /* The lines block names lines by positioning, the catalog by product family —
       so the pairing is stated here rather than guessed. */
    lineShots: {
      'Aesthetic Premium': '/img/suppliers/jetsglobal/products/n20-pigment-ampoule.jpg',
      'Daily Skincare': '/img/suppliers/jetsglobal/products/s7-repair-cream.jpg',
    },
    catalog: jetsglobalCatalog as { line: string; items: { name: string; img: string }[] }[],
    termsFile: {
      ru: '/docs/jetsglobal-terms-ru.pdf', en: '/docs/jetsglobal-terms-en.pdf', ko: '/docs/jetsglobal-terms-ko.pdf', zh: '/docs/jetsglobal-terms-zh.pdf', ja: '/docs/jetsglobal-terms-ja.pdf', it: '/docs/jetsglobal-terms-it.pdf', de: '/docs/jetsglobal-terms-de.pdf', fr: '/docs/jetsglobal-terms-fr.pdf', tr: '/docs/jetsglobal-terms-tr.pdf', es: '/docs/jetsglobal-terms-es.pdf', pt: '/docs/jetsglobal-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/jetsglobal-price-ru.pdf', en: '/docs/jetsglobal-price-en.pdf', ko: '/docs/jetsglobal-price-ko.pdf', zh: '/docs/jetsglobal-price-zh.pdf', ja: '/docs/jetsglobal-price-ja.pdf', it: '/docs/jetsglobal-price-it.pdf', de: '/docs/jetsglobal-price-de.pdf', fr: '/docs/jetsglobal-price-fr.pdf', tr: '/docs/jetsglobal-price-tr.pdf', es: '/docs/jetsglobal-price-es.pdf', pt: '/docs/jetsglobal-price-pt.pdf',
    },
    presFile: {
      ru: '/docs/jetsglobal-presentation-ru.pdf',
      en: '/docs/jetsglobal-presentation-en.pdf',
      ko: '/docs/jetsglobal-presentation-ko.pdf',
      zh: '/docs/jetsglobal-presentation-zh.pdf',
      ja: '/docs/jetsglobal-presentation-ja.pdf',
      it: '/docs/jetsglobal-presentation-it.pdf',
      de: '/docs/jetsglobal-presentation-de.pdf',
      fr: '/docs/jetsglobal-presentation-fr.pdf',
      tr: '/docs/jetsglobal-presentation-tr.pdf',
      es: '/docs/jetsglobal-presentation-es.pdf',
      pt: '/docs/jetsglobal-presentation-pt.pdf',
    },
    certs: [],
    i18n: {
      ru: mk(jetsRu as any),
      en: mk(jetsEn as any),
      ko: mk(jetsKo as any),
      zh: mk(jetsZh as any),
      ja: mk(jetsJa as any),
      it: mk(jetsIt as any),
      de: mk(jetsDe as any),
      fr: mk(jetsFr as any),
      tr: mk(jetsTr as any),
      es: mk(jetsEs as any),
      pt: mk(jetsPt as any),
    },
  },
  {
    slug: 'pineworld',
    category: 'cosmetics',
    name: 'PINE WORLD',
    brand: 'RAVIEL',
    status: 'provided',
    brandColors: { deep: '#4a3350', sky: '#b48fc4', accent: '#e08bb0', bg: '#f9f3f8' },
    voice: 'soft',
    lineShots: {
      /* "Base products" = the vitamin / panthenol basics group in the catalog. */
      'Базовые продукты': '/img/suppliers/pineworld/products/multi-vitamin-dark-spot-serum.jpg',
      'Base products': '/img/suppliers/pineworld/products/multi-vitamin-dark-spot-serum.jpg',
    },
    catalog: pineworldCatalog as { line: string; items: { name: string; img: string }[] }[],
    termsFile: {
      ru: '/docs/pineworld-terms-ru.pdf', en: '/docs/pineworld-terms-en.pdf', ko: '/docs/pineworld-terms-ko.pdf', zh: '/docs/pineworld-terms-zh.pdf', ja: '/docs/pineworld-terms-ja.pdf', it: '/docs/pineworld-terms-it.pdf', de: '/docs/pineworld-terms-de.pdf', fr: '/docs/pineworld-terms-fr.pdf', tr: '/docs/pineworld-terms-tr.pdf', es: '/docs/pineworld-terms-es.pdf', pt: '/docs/pineworld-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/pineworld-price-ru.pdf', en: '/docs/pineworld-price-en.pdf', ko: '/docs/pineworld-price-ko.pdf', zh: '/docs/pineworld-price-zh.pdf', ja: '/docs/pineworld-price-ja.pdf', it: '/docs/pineworld-price-it.pdf', de: '/docs/pineworld-price-de.pdf', fr: '/docs/pineworld-price-fr.pdf', tr: '/docs/pineworld-price-tr.pdf', es: '/docs/pineworld-price-es.pdf', pt: '/docs/pineworld-price-pt.pdf',
    },
    presFile: {
      ru: '/docs/pineworld-presentation-ru.pdf',
      en: '/docs/pineworld-presentation-en.pdf',
      ko: '/docs/pineworld-presentation-ko.pdf',
      zh: '/docs/pineworld-presentation-zh.pdf',
      ja: '/docs/pineworld-presentation-ja.pdf',
      it: '/docs/pineworld-presentation-it.pdf',
      de: '/docs/pineworld-presentation-de.pdf',
      fr: '/docs/pineworld-presentation-fr.pdf',
      tr: '/docs/pineworld-presentation-tr.pdf',
      es: '/docs/pineworld-presentation-es.pdf',
      pt: '/docs/pineworld-presentation-pt.pdf',
    },
    certs: [],
    i18n: {
      ru: mk(pineRu as any),
      en: mk(pineEn as any),
      ko: mk(pineKo as any),
      zh: mk(pineZh as any),
      ja: mk(pineJa as any),
      it: mk(pineIt as any),
      de: mk(pineDe as any),
      fr: mk(pineFr as any),
      tr: mk(pineTr as any),
      es: mk(pineEs as any),
      pt: mk(pinePt as any),
    },
  },
  {
    slug: 'kift',
    category: 'cosmetics',
    name: 'KIFT COMPANY',
    brand: 'KIFT',
    status: 'provided',
    brandColors: { deep: '#2a2350', sky: '#8f86e0', accent: '#f5c518', bg: '#f4f2fd' },
    voice: 'playful',
    catalog: kiftCatalog as { line: string; items: { name: string; img: string }[] }[],
    termsFile: {
      ru: '/docs/kift-terms-ru.pdf', en: '/docs/kift-terms-en.pdf', ko: '/docs/kift-terms-ko.pdf', zh: '/docs/kift-terms-zh.pdf', ja: '/docs/kift-terms-ja.pdf', it: '/docs/kift-terms-it.pdf', de: '/docs/kift-terms-de.pdf', fr: '/docs/kift-terms-fr.pdf', tr: '/docs/kift-terms-tr.pdf', es: '/docs/kift-terms-es.pdf', pt: '/docs/kift-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/kift-price-ru.pdf', en: '/docs/kift-price-en.pdf', ko: '/docs/kift-price-ko.pdf', zh: '/docs/kift-price-zh.pdf', ja: '/docs/kift-price-ja.pdf', it: '/docs/kift-price-it.pdf', de: '/docs/kift-price-de.pdf', fr: '/docs/kift-price-fr.pdf', tr: '/docs/kift-price-tr.pdf', es: '/docs/kift-price-es.pdf', pt: '/docs/kift-price-pt.pdf',
    },
    presFile: {
      ru: '/docs/kift-presentation-ru.pdf', en: '/docs/kift-presentation-en.pdf', ko: '/docs/kift-presentation-ko.pdf', zh: '/docs/kift-presentation-zh.pdf', ja: '/docs/kift-presentation-ja.pdf', it: '/docs/kift-presentation-it.pdf', de: '/docs/kift-presentation-de.pdf', fr: '/docs/kift-presentation-fr.pdf', tr: '/docs/kift-presentation-tr.pdf', es: '/docs/kift-presentation-es.pdf', pt: '/docs/kift-presentation-pt.pdf',
    },
    certs: [],
    i18n: {
      ru: mk(kiftRu as any),
      en: mk(kiftEn as any),
      ko: mk(kiftKo as any),
      zh: mk(kiftZh as any),
      ja: mk(kiftJa as any),
      it: mk(kiftIt as any),
      de: mk(kiftDe as any),
      fr: mk(kiftFr as any),
      tr: mk(kiftTr as any),
      es: mk(kiftEs as any),
      pt: mk(kiftPt as any),
    },
  },
  {
    slug: 'icelmedi',
    category: 'cosmetics',
    name: 'iCELmedi Co., Ltd.',
    brand: 'cellmedics · KERASON',
    status: 'provided',
    brandColors: { deep: '#0e3b4a', sky: '#3c93a8', accent: '#17788f', bg: '#eef6f9' },
    voice: 'clinical',
    catalog: icelmediCatalog as { line: string; items: { name: string; img: string }[] }[],
    termsFile: {
      ru: '/docs/icelmedi-terms-ru.pdf', en: '/docs/icelmedi-terms-en.pdf', ko: '/docs/icelmedi-terms-ko.pdf', zh: '/docs/icelmedi-terms-zh.pdf', ja: '/docs/icelmedi-terms-ja.pdf', it: '/docs/icelmedi-terms-it.pdf', de: '/docs/icelmedi-terms-de.pdf', fr: '/docs/icelmedi-terms-fr.pdf', tr: '/docs/icelmedi-terms-tr.pdf', es: '/docs/icelmedi-terms-es.pdf', pt: '/docs/icelmedi-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/icelmedi-price-ru.pdf', en: '/docs/icelmedi-price-en.pdf', ko: '/docs/icelmedi-price-ko.pdf', zh: '/docs/icelmedi-price-zh.pdf', ja: '/docs/icelmedi-price-ja.pdf', it: '/docs/icelmedi-price-it.pdf', de: '/docs/icelmedi-price-de.pdf', fr: '/docs/icelmedi-price-fr.pdf', tr: '/docs/icelmedi-price-tr.pdf', es: '/docs/icelmedi-price-es.pdf', pt: '/docs/icelmedi-price-pt.pdf',
    },
    presFile: {
      ru: '/docs/icelmedi-presentation-ru.pdf', en: '/docs/icelmedi-presentation-en.pdf', ko: '/docs/icelmedi-presentation-ko.pdf', zh: '/docs/icelmedi-presentation-zh.pdf', ja: '/docs/icelmedi-presentation-ja.pdf', it: '/docs/icelmedi-presentation-it.pdf', de: '/docs/icelmedi-presentation-de.pdf', fr: '/docs/icelmedi-presentation-fr.pdf', tr: '/docs/icelmedi-presentation-tr.pdf', es: '/docs/icelmedi-presentation-es.pdf', pt: '/docs/icelmedi-presentation-pt.pdf',
    },
    certs: [],
    i18n: {
      ru: mk(icelmediRu as any),
      en: mk(icelmediEn as any),
      ko: mk(icelmediKo as any),
      zh: mk(icelmediZh as any),
      ja: mk(icelmediJa as any),
      it: mk(icelmediIt as any),
      de: mk(icelmediDe as any),
      fr: mk(icelmediFr as any),
      tr: mk(icelmediTr as any),
      es: mk(icelmediEs as any),
      pt: mk(icelmediPt as any),
    },
  },
  {
    slug: 'three-days-love',
    category: 'cosmetics',
    name: 'THREE DAYS LOVE CO., LTD.',
    brand: 'ThreeDaysLove · RETURN 10 · TIME 72 · EXOMERE',
    status: 'provided',
    brandColors: { deep: '#7a2415', sky: '#f0a184', accent: '#e0562e', bg: '#fdf0ea' },
    voice: 'premium',
    /* Карточку линии RETURN 10 поставщик 20.08.2026 попросил показывать
       снимком Return 10 Peptide 3 Types MTS Set — файл взят с их же магазина
       по ссылке, которую они прислали. Ключи на все языки: имя линии в блоке
       lines у каждого языка своё, а lineShot ищет по нему. */
    lineShots: {
      'RETURN 10 — Home-MTS und Peptidpflege': '/img/suppliers/three-days-love/products/return10-peptide-3type-mts-set.jpg',
      'RETURN 10 — MTS domiciliare e cura con peptidi': '/img/suppliers/three-days-love/products/return10-peptide-3type-mts-set.jpg',
      'RETURN 10 — MTS domiciliario y cuidado con péptidos': '/img/suppliers/three-days-love/products/return10-peptide-3type-mts-set.jpg',
      'RETURN 10 — MTS doméstico e cuidado com péptidos': '/img/suppliers/three-days-love/products/return10-peptide-3type-mts-set.jpg',
      'RETURN 10 — MTS à domicile et soins peptidiques': '/img/suppliers/three-days-love/products/return10-peptide-3type-mts-set.jpg',
      'RETURN 10 — evde MTS ve peptit bakımı': '/img/suppliers/three-days-love/products/return10-peptide-3type-mts-set.jpg',
      'RETURN 10 — home MTS and peptide care': '/img/suppliers/three-days-love/products/return10-peptide-3type-mts-set.jpg',
      'RETURN 10 — домашний MTS и пептидный уход': '/img/suppliers/three-days-love/products/return10-peptide-3type-mts-set.jpg',
      'RETURN 10 — ホームMTSおよびペプチドケア': '/img/suppliers/three-days-love/products/return10-peptide-3type-mts-set.jpg',
      'RETURN 10 — 홈 MTS 및 펩타이드 케어': '/img/suppliers/three-days-love/products/return10-peptide-3type-mts-set.jpg',
    },
    catalog: tdlCatalog as { line: string; items: { name: string; img: string }[] }[],
    termsFile: {
      ru: '/docs/three-days-love-terms-ru.pdf', en: '/docs/three-days-love-terms-en.pdf', ko: '/docs/three-days-love-terms-ko.pdf', zh: '/docs/three-days-love-terms-zh.pdf', ja: '/docs/three-days-love-terms-ja.pdf', it: '/docs/three-days-love-terms-it.pdf', de: '/docs/three-days-love-terms-de.pdf', fr: '/docs/three-days-love-terms-fr.pdf', tr: '/docs/three-days-love-terms-tr.pdf', es: '/docs/three-days-love-terms-es.pdf', pt: '/docs/three-days-love-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/three-days-love-price-ru.pdf', en: '/docs/three-days-love-price-en.pdf', ko: '/docs/three-days-love-price-ko.pdf', zh: '/docs/three-days-love-price-zh.pdf', ja: '/docs/three-days-love-price-ja.pdf', it: '/docs/three-days-love-price-it.pdf', de: '/docs/three-days-love-price-de.pdf', fr: '/docs/three-days-love-price-fr.pdf', tr: '/docs/three-days-love-price-tr.pdf', es: '/docs/three-days-love-price-es.pdf', pt: '/docs/three-days-love-price-pt.pdf',
    },
    presFile: {
      ru: '/docs/three-days-love-presentation-ru.pdf', en: '/docs/three-days-love-presentation-en.pdf', ko: '/docs/three-days-love-presentation-ko.pdf', zh: '/docs/three-days-love-presentation-zh.pdf', ja: '/docs/three-days-love-presentation-ja.pdf', it: '/docs/three-days-love-presentation-it.pdf', de: '/docs/three-days-love-presentation-de.pdf', fr: '/docs/three-days-love-presentation-fr.pdf', tr: '/docs/three-days-love-presentation-tr.pdf', es: '/docs/three-days-love-presentation-es.pdf', pt: '/docs/three-days-love-presentation-pt.pdf',
    },
    certs: [],
    i18n: {
      ru: mk(tdlRu as any),
      en: mk(tdlEn as any),
      ko: mk(tdlKo as any),
      zh: mk(tdlZh as any),
      ja: mk(tdlJa as any),
      it: mk(tdlIt as any),
      de: mk(tdlDe as any),
      fr: mk(tdlFr as any),
      tr: mk(tdlTr as any),
      es: mk(tdlEs as any),
      pt: mk(tdlPt as any),
    },
  },
  {
    slug: 'licorne',
    category: 'cosmetics',
    name: 'Limetree Co., Ltd.',
    brand: 'LICORNE Cosmetics',
    status: 'provided',
    brandColors: { deep: '#2f5d3a', sky: '#a9d4b5', accent: '#4e9c6b', bg: '#eef7f0' },
    voice: 'natural',
    lineShots: {
      /* "Targeted & premium care" — the Vitafill ampoule stands for it. */
      'Таргетированный и премиум-уход': '/img/suppliers/licorne/products/vitafill-ampoule.jpg',
      'Targeted & premium care': '/img/suppliers/licorne/products/vitafill-ampoule.jpg',
    },
    catalog: licorneCatalog as { line: string; items: { name: string; img: string }[] }[],
    termsFile: {
      ru: '/docs/licorne-terms-ru.pdf', en: '/docs/licorne-terms-en.pdf', ko: '/docs/licorne-terms-ko.pdf', zh: '/docs/licorne-terms-zh.pdf', ja: '/docs/licorne-terms-ja.pdf', it: '/docs/licorne-terms-it.pdf', de: '/docs/licorne-terms-de.pdf', fr: '/docs/licorne-terms-fr.pdf', tr: '/docs/licorne-terms-tr.pdf', es: '/docs/licorne-terms-es.pdf', pt: '/docs/licorne-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/licorne-price-ru.pdf', en: '/docs/licorne-price-en.pdf', ko: '/docs/licorne-price-ko.pdf', zh: '/docs/licorne-price-zh.pdf', ja: '/docs/licorne-price-ja.pdf', it: '/docs/licorne-price-it.pdf', de: '/docs/licorne-price-de.pdf', fr: '/docs/licorne-price-fr.pdf', tr: '/docs/licorne-price-tr.pdf', es: '/docs/licorne-price-es.pdf', pt: '/docs/licorne-price-pt.pdf',
    },
    presFile: {
      ru: '/docs/licorne-presentation-ru.pdf', en: '/docs/licorne-presentation-en.pdf', ko: '/docs/licorne-presentation-ko.pdf', zh: '/docs/licorne-presentation-zh.pdf', ja: '/docs/licorne-presentation-ja.pdf', it: '/docs/licorne-presentation-it.pdf', de: '/docs/licorne-presentation-de.pdf', fr: '/docs/licorne-presentation-fr.pdf', tr: '/docs/licorne-presentation-tr.pdf', es: '/docs/licorne-presentation-es.pdf', pt: '/docs/licorne-presentation-pt.pdf',
    },
    /* Markets where copies of the registration documents are on file with us
       (handed over by Limetree in August 2026), newest archive first. */
    certs: ['EU CPNP', 'EU CPSR', 'MoCRA', 'PMDA', 'NMPA', 'HSA', 'NPRA', 'TFDA', 'EAC'],
    i18n: {
      ru: mk(licorneRu as any),
      en: mk(licorneEn as any),
      ko: mk(licorneKo as any),
      zh: mk(licorneZh as any),
      ja: mk(licorneJa as any),
      it: mk(licorneIt as any),
      de: mk(licorneDe as any),
      fr: mk(licorneFr as any),
      tr: mk(licorneTr as any),
      es: mk(licorneEs as any),
      pt: mk(licornePt as any),
    },
  },
  {
    slug: 'cubecap',
    category: 'cosmetics',
    country: 'kr',
    name: 'CUBE CAP CO., LTD.',
    brand: 'COCAPS',
    status: 'provided',
    /* Фиолетовый — с их собственной упаковки COCAPS; синий — из логотипа. */
    brandColors: { deep: '#3b2a63', sky: '#8b7ac0', accent: '#1f7ec4', bg: '#f3f0f9' },
    voice: 'clinical',
    catalog: cubecapCatalog as { line: string; items: { name: string; img: string }[] }[],
    certs: [],
    /* Прайс не публикуется: цены COCAPS на витрину не передавались, по запросу. */
    termsFile: {
      ru: '/docs/cubecap-terms-ru.pdf', en: '/docs/cubecap-terms-en.pdf', ko: '/docs/cubecap-terms-ko.pdf', zh: '/docs/cubecap-terms-zh.pdf', ja: '/docs/cubecap-terms-ja.pdf', it: '/docs/cubecap-terms-it.pdf', de: '/docs/cubecap-terms-de.pdf', fr: '/docs/cubecap-terms-fr.pdf', tr: '/docs/cubecap-terms-tr.pdf', es: '/docs/cubecap-terms-es.pdf', pt: '/docs/cubecap-terms-pt.pdf',
    },
    presFile: {
      ru: '/docs/cubecap-presentation-ru.pdf', en: '/docs/cubecap-presentation-en.pdf', ko: '/docs/cubecap-presentation-ko.pdf', zh: '/docs/cubecap-presentation-zh.pdf', ja: '/docs/cubecap-presentation-ja.pdf', it: '/docs/cubecap-presentation-it.pdf', de: '/docs/cubecap-presentation-de.pdf', fr: '/docs/cubecap-presentation-fr.pdf', tr: '/docs/cubecap-presentation-tr.pdf', es: '/docs/cubecap-presentation-es.pdf', pt: '/docs/cubecap-presentation-pt.pdf',
    },
    i18n: {
      ru: mk(cubecapRu as any),
      en: mk(cubecapEn as any),
      ko: mk(cubecapKo as any),
      zh: mk(cubecapZh as any),
      ja: mk(cubecapJa as any),
      it: mk(cubecapIt as any),
      de: mk(cubecapDe as any),
      fr: mk(cubecapFr as any),
      tr: mk(cubecapTr as any),
      es: mk(cubecapEs as any),
      pt: mk(cubecapPt as any),
    },
  },
  {
    slug: 'doobom',
    category: 'cosmetics',
    country: 'kr',
    name: 'DOOBOM Co., Ltd.',
    brand: 'DOOBOM',
    status: 'provided',
    /* Мятно-бирюзовый — с их презентации бренда. */
    brandColors: { deep: '#14504a', sky: '#5cc2b1', accent: '#2f9c8a', bg: '#eef7f5' },
    voice: 'clinical',
    certs: ['FDA', 'EU CPNP', 'MoCRA'],
    catalog: doobomCatalog as { line: string; items: { name: string; img: string }[] }[],
    /* Прайс не публикуется: экспортный прайс DOOBOM не передавала, цены — по запросу. */
    termsFile: {
      ru: '/docs/doobom-terms-ru.pdf', en: '/docs/doobom-terms-en.pdf', ko: '/docs/doobom-terms-ko.pdf', zh: '/docs/doobom-terms-zh.pdf', ja: '/docs/doobom-terms-ja.pdf', it: '/docs/doobom-terms-it.pdf', de: '/docs/doobom-terms-de.pdf', fr: '/docs/doobom-terms-fr.pdf', tr: '/docs/doobom-terms-tr.pdf', es: '/docs/doobom-terms-es.pdf', pt: '/docs/doobom-terms-pt.pdf',
    },
    presFile: {
      ru: '/docs/doobom-presentation-ru.pdf', en: '/docs/doobom-presentation-en.pdf', ko: '/docs/doobom-presentation-ko.pdf', zh: '/docs/doobom-presentation-zh.pdf', ja: '/docs/doobom-presentation-ja.pdf', it: '/docs/doobom-presentation-it.pdf', de: '/docs/doobom-presentation-de.pdf', fr: '/docs/doobom-presentation-fr.pdf', tr: '/docs/doobom-presentation-tr.pdf', es: '/docs/doobom-presentation-es.pdf', pt: '/docs/doobom-presentation-pt.pdf',
    },
    i18n: {
      ru: mk(doobomRu as any),
      en: mk(doobomEn as any),
      ko: mk(doobomKo as any),
      zh: mk(doobomZh as any),
      ja: mk(doobomJa as any),
      it: mk(doobomIt as any),
      de: mk(doobomDe as any),
      fr: mk(doobomFr as any),
      tr: mk(doobomTr as any),
      es: mk(doobomEs as any),
      pt: mk(doobomPt as any),
    },
  },
  {
    slug: 'cocospack',
    category: 'adjacent',
    country: 'kr',
    name: 'COCOSPACK Co., Ltd.',
    brand: 'COCOSPACK',
    status: 'provided',
    /* Индиго — точный цвет их логотипа. */
    brandColors: { deep: '#0c0060', sky: '#5b5bd6', accent: '#2d2da8', bg: '#eeeefc' },
    voice: 'clinical',
    certs: ['ISO 9001', 'ISO 14001', 'ISO 22716', 'ISO 15378'],
    /* Каталог собран по их «Product Catalogue 2021»: серия = карточка, объёмы из таблиц. */
    catalog: cocoCatalog as { line: string; items: { name: string; img: string; volume?: string }[] }[],
    /* Прайс не публикуется: упаковка считается по проекту, цены — по запросу. */
    termsFile: {
      ru: '/docs/cocospack-terms-ru.pdf', en: '/docs/cocospack-terms-en.pdf', ko: '/docs/cocospack-terms-ko.pdf', zh: '/docs/cocospack-terms-zh.pdf', ja: '/docs/cocospack-terms-ja.pdf', it: '/docs/cocospack-terms-it.pdf', de: '/docs/cocospack-terms-de.pdf', fr: '/docs/cocospack-terms-fr.pdf', tr: '/docs/cocospack-terms-tr.pdf', es: '/docs/cocospack-terms-es.pdf', pt: '/docs/cocospack-terms-pt.pdf',
    },
    presFile: {
      ru: '/docs/cocospack-presentation-ru.pdf', en: '/docs/cocospack-presentation-en.pdf', ko: '/docs/cocospack-presentation-ko.pdf', zh: '/docs/cocospack-presentation-zh.pdf', ja: '/docs/cocospack-presentation-ja.pdf', it: '/docs/cocospack-presentation-it.pdf', de: '/docs/cocospack-presentation-de.pdf', fr: '/docs/cocospack-presentation-fr.pdf', tr: '/docs/cocospack-presentation-tr.pdf', es: '/docs/cocospack-presentation-es.pdf', pt: '/docs/cocospack-presentation-pt.pdf',
    },
    i18n: {
      ru: mk(cocoRu as any),
      en: mk(cocoEn as any),
      ko: mk(cocoKo as any),
      zh: mk(cocoZh as any),
      ja: mk(cocoJa as any),
      it: mk(cocoIt as any),
      de: mk(cocoDe as any),
      fr: mk(cocoFr as any),
      tr: mk(cocoTr as any),
      es: mk(cocoEs as any),
      pt: mk(cocoPt as any),
    },
  },
  {
    slug: 'multifit',
    category: 'industrial',
    country: 'cn',
    name: 'BeiJing Multifit Electrical Technology Co., Ltd.',
    brand: 'MULTIFIT',
    status: 'provided',
    /* Синий и жёлтый — с их каталогов: солнце и панель. */
    brandColors: { deep: '#123a63', sky: '#4f8fce', accent: '#f2b21c', bg: '#eef4fa' },
    voice: 'clinical',
    certs: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'CE'],
    /* Каталог и прайс собраны из их материалов 12.06.2026: два каталога 2026 года
       и полные квотации XLS по всем моделям (EXW Shantou, ярус от 10 шт). */
    catalog: multifitCatalog as { line: string; items: { name: string; img: string; volume?: string }[] }[],
    termsFile: {
      ru: '/docs/multifit-terms-ru.pdf', en: '/docs/multifit-terms-en.pdf', ko: '/docs/multifit-terms-ko.pdf', zh: '/docs/multifit-terms-zh.pdf', ja: '/docs/multifit-terms-ja.pdf', it: '/docs/multifit-terms-it.pdf', de: '/docs/multifit-terms-de.pdf', fr: '/docs/multifit-terms-fr.pdf', tr: '/docs/multifit-terms-tr.pdf', es: '/docs/multifit-terms-es.pdf', pt: '/docs/multifit-terms-pt.pdf',
    },
    priceFile: {
      ru: '/docs/multifit-price-ru.pdf', en: '/docs/multifit-price-en.pdf', ko: '/docs/multifit-price-ko.pdf', zh: '/docs/multifit-price-zh.pdf', ja: '/docs/multifit-price-ja.pdf', it: '/docs/multifit-price-it.pdf', de: '/docs/multifit-price-de.pdf', fr: '/docs/multifit-price-fr.pdf', tr: '/docs/multifit-price-tr.pdf', es: '/docs/multifit-price-es.pdf', pt: '/docs/multifit-price-pt.pdf',
    },
    presFile: {
      ru: '/docs/multifit-presentation-ru.pdf', en: '/docs/multifit-presentation-en.pdf', ko: '/docs/multifit-presentation-ko.pdf', zh: '/docs/multifit-presentation-zh.pdf', ja: '/docs/multifit-presentation-ja.pdf', it: '/docs/multifit-presentation-it.pdf', de: '/docs/multifit-presentation-de.pdf', fr: '/docs/multifit-presentation-fr.pdf', tr: '/docs/multifit-presentation-tr.pdf', es: '/docs/multifit-presentation-es.pdf', pt: '/docs/multifit-presentation-pt.pdf',
    },
    gallery: [
      /* Первые четыре — кадры из проектных роликов, присланных 28.08.2026.
         Это единственные снимки с названных объектов, и единственные, где
         виден масштаб рядом с человеком и управление с телефона. Стоят первыми
         намеренно: их видит покупатель, который дальше первой строки не идёт. */
      '/img/suppliers/multifit/gallery/case-malaysia-operator.jpg',
      '/img/suppliers/multifit/gallery/case-pakistan-app-control.jpg',
      '/img/suppliers/multifit/gallery/case-lebanon-tripoli.jpg',
      '/img/suppliers/multifit/gallery/case-usa-ground-array.jpg',
      '/img/suppliers/multifit/gallery/robot-rooftop-array.jpg',
      '/img/suppliers/multifit/gallery/robot-industrial-roof.jpg',
      '/img/suppliers/multifit/gallery/g2-rooftop-fleet.jpg',
      '/img/suppliers/multifit/gallery/g2-ground-array.jpg',
      '/img/suppliers/multifit/gallery/g2-desert-array.jpg',
      '/img/suppliers/multifit/gallery/t1-rooftop.jpg',
      '/img/suppliers/multifit/gallery/t1-long-rows.jpg',
      '/img/suppliers/multifit/gallery/brush-c-rooftop.jpg',
      '/img/suppliers/multifit/gallery/brush-d-operator.jpg',
      '/img/suppliers/multifit/gallery/brush-e-panel.jpg',
    ],
    videos: [
      { src: '/video/multifit/mulr-d-pro.mp4', poster: '/video/multifit/mulr-d-pro.jpg', name: 'MULR-D Pro' },
      { src: '/video/multifit/mulr-e.mp4', poster: '/video/multifit/mulr-e.jpg', name: 'MULR-E' },
      { src: '/video/multifit/mr-t1.mp4', poster: '/video/multifit/mr-t1.jpg', name: 'MR-T1' },
      { src: '/video/multifit/mr-g3.mp4', poster: '/video/multifit/mr-g3.jpg', name: 'MR-G3' },
      /* Проектные кейсы, присланные MULTIFIT 28.08.2026 после нашей просьбы о
         материалах приличного качества. Названия — страны объектов, они
         одинаково читаются во всех одиннадцати языках. Ливанский ролик несёт
         в кадре собственную подпись объекта: 300 kW, Триполи, модель MR-G2.
         Ролики из США и Ливана сняты вертикально; чтобы сетка не ломалась,
         они вписаны в кадр 1280×720 с размытой подложкой, без обрезки. */
      { src: '/video/multifit/case-lebanon.mp4', poster: '/video/multifit/case-lebanon.jpg', name: 'Lebanon · MR-G2' },
      { src: '/video/multifit/case-malta.mp4', poster: '/video/multifit/case-malta.jpg', name: 'Malta' },
      { src: '/video/multifit/case-malaysia.mp4', poster: '/video/multifit/case-malaysia.jpg', name: 'Malaysia' },
      { src: '/video/multifit/case-pakistan.mp4', poster: '/video/multifit/case-pakistan.jpg', name: 'Pakistan' },
      { src: '/video/multifit/case-usa.mp4', poster: '/video/multifit/case-usa.jpg', name: 'USA' },
    ],
    i18n: {
      ru: mk(multifitRu as any),
      en: mk(multifitEn as any),
      ko: mk(multifitKo as any),
      zh: mk(multifitZh as any),
      ja: mk(multifitJa as any),
      it: mk(multifitIt as any),
      de: mk(multifitDe as any),
      fr: mk(multifitFr as any),
      tr: mk(multifitTr as any),
      es: mk(multifitEs as any),
      pt: mk(multifitPt as any),
    },
  },
{
    slug: 'sunpure',
    category: 'chemical',
    country: 'in',
    name: 'Sunpure Extracts Pvt. Ltd.',
    brand: 'Sunpure',
    status: 'provided',
    /* Зелень листа и тёплое золото куркумы — гамма их собственной брошюры. */
    brandColors: { deep: '#1d4a2b', sky: '#4e9a5f', accent: '#d9a441', bg: '#eef5ee' },
    voice: 'natural',
    /* Перечень со страницы сертификатов их брошюры; статус Star Export House
       присвоен правительством Индии. Копии — на стадии сделки. */
    certs: ['ISO 9001:2015', 'GMP', 'HALAL', 'FSSAI', 'Star Export House', 'DUNS', 'FIEO', 'Spices Board India', 'AYUSHEXCIL'],
    /* Прайса нет: компания обещала индикативные цены и MOQ — придут, добавим priceFile. */
    termsFile: {
      ru: '/docs/sunpure-terms-ru.pdf', en: '/docs/sunpure-terms-en.pdf', ko: '/docs/sunpure-terms-ko.pdf', zh: '/docs/sunpure-terms-zh.pdf', ja: '/docs/sunpure-terms-ja.pdf', it: '/docs/sunpure-terms-it.pdf', de: '/docs/sunpure-terms-de.pdf', fr: '/docs/sunpure-terms-fr.pdf', tr: '/docs/sunpure-terms-tr.pdf', es: '/docs/sunpure-terms-es.pdf', pt: '/docs/sunpure-terms-pt.pdf',
    },
    presFile: {
      ru: '/docs/sunpure-presentation-ru.pdf', en: '/docs/sunpure-presentation-en.pdf', ko: '/docs/sunpure-presentation-ko.pdf', zh: '/docs/sunpure-presentation-zh.pdf', ja: '/docs/sunpure-presentation-ja.pdf', it: '/docs/sunpure-presentation-it.pdf', de: '/docs/sunpure-presentation-de.pdf', fr: '/docs/sunpure-presentation-fr.pdf', tr: '/docs/sunpure-presentation-tr.pdf', es: '/docs/sunpure-presentation-es.pdf', pt: '/docs/sunpure-presentation-pt.pdf',
    },
    i18n: {
      ru: mk(sunpureRu as any),
      en: mk(sunpureEn as any),
      ko: mk(sunpureKo as any),
      zh: mk(sunpureZh as any),
      ja: mk(sunpureJa as any),
      it: mk(sunpureIt as any),
      de: mk(sunpureDe as any),
      fr: mk(sunpureFr as any),
      tr: mk(sunpureTr as any),
      es: mk(sunpureEs as any),
      pt: mk(sunpurePt as any),
    },
  },
  {
    slug: 'biopt',
    category: 'cosmetics',
    name: 'BIOPT Co., Ltd.',
    brand: 'VENDERMA',
    status: 'visited',
    visitDate: '2026-08-13',
    visitGallery: [
      '/img/suppliers/biopt/visit/visit-1.jpg',
      '/img/suppliers/biopt/visit/visit-2.jpg',
      '/img/suppliers/biopt/visit/visit-3.jpg',
      '/img/suppliers/biopt/visit/visit-4.jpg',
      '/img/suppliers/biopt/visit/visit-5.jpg',
      '/img/suppliers/biopt/visit/visit-6.jpg',
      '/img/suppliers/biopt/visit/visit-7.jpg',
    ],
    /* Красный акцент Red Calming и тёплое золото EXO REJUVA — обе гаммы взяты
       из их собственной презентации и упаковки. */
    brandColors: { deep: '#2b2b2f', sky: '#e8b7b0', accent: '#c0392b', bg: '#f7f1ee' },
    voice: 'clinical',
    /* Каталога по позициям нет: пакшотов на белом фоне поставщик не присылал,
       в презентации они врезаны в таблицы по 163 px. Линии показаны своими
       фотографиями из их же материалов; названия линий латиницей и одинаковы
       во всех одиннадцати языках, поэтому ключ здесь один на линию. */
    lineShots: {
      'Red Calming Cica Exosome': '/img/suppliers/biopt/lines/red-calming.jpg',
      'EXO REJUVA Ultra Lifting': '/img/suppliers/biopt/lines/exo-rejuva.jpg',
      'EXO REJUVA Mela-C': '/img/suppliers/biopt/lines/mela-c.jpg',
      'ERI-Pro': '/img/suppliers/biopt/lines/eri-pro.jpg',
    },
    /* Прайс не публикуется: условие письменного согласия BIOPT от 18.08.2026 —
       экспортные цены в открытом доступе не размещаются. Отсюда нет priceFile. */
    certs: ['ISO 9001'],
    termsFile: {
      ru: '/docs/biopt-terms-ru.pdf', en: '/docs/biopt-terms-en.pdf', ko: '/docs/biopt-terms-ko.pdf', zh: '/docs/biopt-terms-zh.pdf', ja: '/docs/biopt-terms-ja.pdf', it: '/docs/biopt-terms-it.pdf', de: '/docs/biopt-terms-de.pdf', fr: '/docs/biopt-terms-fr.pdf', tr: '/docs/biopt-terms-tr.pdf', es: '/docs/biopt-terms-es.pdf', pt: '/docs/biopt-terms-pt.pdf',
    },
    presFile: {
      ru: '/docs/biopt-presentation-ru.pdf', en: '/docs/biopt-presentation-en.pdf', ko: '/docs/biopt-presentation-ko.pdf', zh: '/docs/biopt-presentation-zh.pdf', ja: '/docs/biopt-presentation-ja.pdf', it: '/docs/biopt-presentation-it.pdf', de: '/docs/biopt-presentation-de.pdf', fr: '/docs/biopt-presentation-fr.pdf', tr: '/docs/biopt-presentation-tr.pdf', es: '/docs/biopt-presentation-es.pdf', pt: '/docs/biopt-presentation-pt.pdf',
    },
    i18n: {
      ru: mk(bioptRu as any),
      en: mk(bioptEn as any),
      ko: mk(bioptKo as any),
      zh: mk(bioptZh as any),
      ja: mk(bioptJa as any),
      it: mk(bioptIt as any),
      de: mk(bioptDe as any),
      fr: mk(bioptFr as any),
      tr: mk(bioptTr as any),
      es: mk(bioptEs as any),
      pt: mk(bioptPt as any),
    },
  },
  {
    slug: 'loobee',
    category: 'cosmetics',
    name: 'SEUNGGUN COSMETICS CO., LTD.',
    brand: 'LOOBEE',
    status: 'provided',
    /* Мягкая зелень с их собственного каталога: бренд подан как clean beauty. */
    brandColors: { deep: '#1f5f45', sky: '#8fc7ac', accent: '#3e9b72', bg: '#edf6f1' },
    voice: 'natural',
    catalog: loobeeCatalog as { line: string; items: { name: string; img: string; volume?: string; certs?: string[] }[] }[],
    /* Знаки с их материалов, оба нейтральны к языку страницы. Протоколы —
       на стадии сделки: в согласии от 18.08.2026 они этого не запрещают, но и
       копий не прикладывали. */
    certs: ['Vegan', 'Dermatest® EXCELLENT'],
    /* priceFile нет и не будет: пункт 5 письменного согласия — экспортный
       прайс EXW конфиденциален и не публикуется ни на площадке, ни в любом
       другом открытом канале. */
    termsFile: {
      ru: '/docs/loobee-terms-ru.pdf', en: '/docs/loobee-terms-en.pdf', ko: '/docs/loobee-terms-ko.pdf', zh: '/docs/loobee-terms-zh.pdf', ja: '/docs/loobee-terms-ja.pdf', it: '/docs/loobee-terms-it.pdf', de: '/docs/loobee-terms-de.pdf', fr: '/docs/loobee-terms-fr.pdf', tr: '/docs/loobee-terms-tr.pdf', es: '/docs/loobee-terms-es.pdf', pt: '/docs/loobee-terms-pt.pdf',
    },
    presFile: {
      ru: '/docs/loobee-presentation-ru.pdf', en: '/docs/loobee-presentation-en.pdf', ko: '/docs/loobee-presentation-ko.pdf', zh: '/docs/loobee-presentation-zh.pdf', ja: '/docs/loobee-presentation-ja.pdf', it: '/docs/loobee-presentation-it.pdf', de: '/docs/loobee-presentation-de.pdf', fr: '/docs/loobee-presentation-fr.pdf', tr: '/docs/loobee-presentation-tr.pdf', es: '/docs/loobee-presentation-es.pdf', pt: '/docs/loobee-presentation-pt.pdf',
    },
    i18n: {
      ru: mk(loobeeRu as any),
      en: mk(loobeeEn as any),
      ko: mk(loobeeKo as any),
      zh: mk(loobeeZh as any),
      ja: mk(loobeeJa as any),
      it: mk(loobeeIt as any),
      de: mk(loobeeDe as any),
      fr: mk(loobeeFr as any),
      tr: mk(loobeeTr as any),
      es: mk(loobeeEs as any),
      pt: mk(loobeePt as any),
    },
  },
];

/* Dedicated, indexable line pages (SEO): one per important product line. */
export interface SupplierLineItem {
  name: string;
  img?: string;
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
  /** Display name of the line, e.g. "Azulene Soother". */
  lineName?: string;
  items: SupplierLineItem[];
  i18n: Partial<Record<Lang, SupplierLineContent>>;
}
export const linePageContent = (p: SupplierLinePage, lang: Lang): SupplierLineContent => p.i18n[lang] ?? p.i18n.ru!;

export const supplierBySlug = (slug: string): SupplierProfile | undefined => suppliers.find((s) => s.slug === slug);
export const supplierSlugs = suppliers.map((s) => s.slug);

export const linePages: SupplierLinePage[] = [
  ...santeLines, ...dongdonggurimooLines, ...pineworldLines, ...dreamcosLines,
  ...jetsglobalLines, ...kiftLines, ...ckRegeonLines,
] as SupplierLinePage[];
/** Lines of one supplier, in catalog order — used to link them from the profile. */
export const linePagesBySupplier = (slug: string): SupplierLinePage[] =>
  linePages.filter((p) => p.supplierSlug === slug);
export const linePageBySlug = (supplierSlug: string, slug: string): SupplierLinePage | undefined =>
  linePages.find((p) => p.supplierSlug === supplierSlug && p.slug === slug);
/** Localized content with ru fallback. */
export const supplierContent = (p: SupplierProfile, lang: Lang): SupplierContent => p.i18n[lang] ?? p.i18n.ru!;
