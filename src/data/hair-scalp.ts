/* Подборка «Волосы и кожа головы».

   Это не восьмая категория каталога, а срез внутри косметики: семь групп
   верхнего уровня описывают отрасли, а уход за волосами — ниша внутри одной из
   них. Отдельная страница нужна потому, что покупатель ищет «корейский шампунь»,
   а не «косметику», и в общей витрине из двадцати трёх косметических компаний
   профильные ему не видны.

   Страница ничего не дублирует: карточки ведут на уже опубликованные профили,
   позиции берутся из тех же каталогов. Состав ведём руками, а не поиском по
   слову «hair»: у HANSCOS линия называется «Body, Hair and Home», и по ключевому
   слову в неё попадают крем для рук, помада и диффузор.

   Фотографии распределены неравномерно, и раскладка это учитывает. У CK Regeon
   все пять позиций вырезаны по контуру и составляют ровный набор — поэтому
   компания вынесена в отдельный разворот. У DUFT&DOFT снимки рекламные, со
   сценой и фоном; рядом с вырезанным флаконом они смотрелись бы чужеродно,
   поэтому идут миниатюрами в карточке. У остальных фотографий по волосам нет. */

export type HairTier = 'brands' | 'oem' | 'materials';

/** Шаг ухода — для карты покрытия наверху страницы. Порядок применения:
    очищение кожи головы, мытьё, уход, несмываемое, профессиональное. */
export type HairStep = 'scaler' | 'shampoo' | 'treatment' | 'leavein' | 'pro';
export const hairSteps: HairStep[] = ['scaler', 'shampoo', 'treatment', 'leavein', 'pro'];

export interface HairItem {
  name: string;
  /** Короткое имя для разворота: в ряду из четырёх флаконов повторять «HERIBON
      WNT ON» перед каждым названием незачем, марка стоит в шапке разворота. */
  short?: string;
  /** Без шага позиция не попадает в карту покрытия. Так помечено то, что товаром
      не является: у SkinRoom это марка, которую они построили, а не артикул. */
  step?: HairStep;
  img?: string;
  volume?: string;
}

export interface HairEntry {
  /** slug поставщика из suppliers.ts — по нему берём имя, страну и статус */
  slug: string;
  tier: HairTier;
  /** Бренд именно по волосам. У поставщика в профиле стоит его главная марка, и
      она часто про другое: у CK Regeon это DermaRegeon — линия для кожи лица.
      Без значения берём марку из профиля. */
  brand?: string;
  /** Ведущая компания подборки: идёт отдельным разворотом, в сетку не попадает. */
  featured?: boolean;
  /** Снимки для карточки в сетке — отобраны вручную, не все подряд. У DUFT&DOFT
      из четырёх кадров два групповые: бутылки на снегу и набор на камне. В
      плитке 92 пикселя они читаются как мусор, поэтому берём только одиночные.
      Максимум два: это намёк на товар, а не галерея. */
  shots?: string[];
  items: HairItem[];
}

export const hairTiers: HairTier[] = ['brands', 'oem', 'materials'];

const CK = '/img/suppliers/ck-regeon/cutout';
const DD = '/img/suppliers/dreamcos/products';
const SA = '/img/suppliers/sante/products';

export const hairScalp: HairEntry[] = [
  {
    slug: 'ck-regeon',
    brand: 'HAIRREGEON · HERIBON',
    tier: 'brands',
    featured: true,
    items: [
      { name: 'HERIBON WNT ON Scalp Scaler', short: 'Scalp Scaler', step: 'scaler', volume: '300 ml', img: `${CK}/heribon-wnt-on-scalp-scaler.webp` },
      { name: 'HERIBON WNT ON Shampoo', short: 'Shampoo', step: 'shampoo', volume: '500 ml', img: `${CK}/heribon-wnt-on-shampoo.webp` },
      { name: 'HERIBON WNT ON Hair Treatment', short: 'Hair Treatment', step: 'treatment', volume: '250 ml', img: `${CK}/heribon-wnt-on-hair-treatment.webp` },
      { name: 'HERIBON WNT ON Hair Tonic', short: 'Hair Tonic', step: 'leavein', volume: '50 ml', img: `${CK}/heribon-wnt-on-hair-tonic.webp` },
      { name: 'PTD-DBM Hair Booster', step: 'pro', volume: '200 mg + 5 ml', img: `${CK}/ptd-dbm-hair-booster.webp` },
    ],
  },
  {
    slug: 'dongdonggurimoo',
    brand: 'HEEYUL',
    tier: 'brands',
    /* Линия HEEYUL описана в профиле, но её позиции компания нам не передавала —
       поэтому список пуст, а не заполнен догадками. */
    items: [],
  },
  {
    slug: 'dreamcos',
    brand: 'DUFT&DOFT',
    tier: 'brands',
    shots: [`${DD}/duftndoft-perfume-hair-rinse.jpg`, `${DD}/duftndoft-caffeine-hair-tonic.jpg`],
    items: [
      { name: 'Enriched Perfume Hair Shampoo', step: 'shampoo', volume: '500 ml', img: `${DD}/duftndoft-perfume-hair-shampoo.jpg` },
      { name: 'Enriched Perfume Hair Rinse', step: 'treatment', volume: '500 ml', img: `${DD}/duftndoft-perfume-hair-rinse.jpg` },
      { name: 'Signature Perfume Caffeine Hair Tonic', step: 'leavein', volume: '150 ml', img: `${DD}/duftndoft-caffeine-hair-tonic.jpg` },
      { name: 'Fine Fragrance Hair & Body Mist', step: 'leavein', volume: '150 ml', img: `${DD}/duftndoft-hair-body-mist.jpg` },
    ],
  },
  {
    slug: 'sante',
    tier: 'brands',
    shots: [`${SA}/azulene-soother-shampoo.png`, `${SA}/azulene-soother-treatment.png`],
    items: [
      { name: 'Azulene Soother Shampoo', step: 'shampoo', volume: '500 ml', img: `${SA}/azulene-soother-shampoo.png` },
      { name: 'Azulene Soother Treatment', step: 'treatment', volume: '500 ml', img: `${SA}/azulene-soother-treatment.png` },
    ],
  },
  {
    slug: 'hanscos',
    tier: 'oem',
    items: [
      { name: 'Essential Repair Shampoo & Rinse', step: 'shampoo' },
      { name: 'Pure Sphere Perfume Hair Mist', step: 'leavein' },
    ],
  },
  {
    slug: 'skinroom',
    brand: 'LAPIN Arc en ciel',
    tier: 'oem',
    /* Марка, а не артикул: в карту покрытия не считается. */
    items: [{ name: 'LAPIN Arc en ciel' }],
  },
  {
    slug: 'sunpure',
    tier: 'materials',
    items: [],
  },
];

/** Сколько позиций закрывает каждый шаг ухода. Считаем из данных, чтобы цифра
    в карте покрытия не разошлась с карточками при следующей правке. */
export const stepCount = (step: HairStep): number =>
  hairScalp.reduce((n, e) => n + e.items.filter((i) => i.step === step).length, 0);

/** Статьи блога по теме — порядок от общего к частному. */
export const hairArticles = [
  'korean-scalp-care-category',
  'heribon-four-step-routine',
  'professional-scalp-boosters',
  'wnt-cxxc5-scalp-science',
];
