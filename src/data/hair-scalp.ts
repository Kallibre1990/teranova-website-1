/* Подборка «Волосы и кожа головы».

   Это не восьмая категория каталога, а срез внутри косметики: семь категорий
   верхнего уровня описывают отрасли, а уход за волосами — ниша внутри одной из
   них. Отдельная страница нужна потому, что покупатель ищет «корейский шампунь»,
   а не «косметику», и в общей витрине из двадцати трёх косметических компаний
   профильные ему не видны.

   Страница ничего не дублирует: карточки ведут на уже опубликованные профили,
   позиции берутся из тех же каталогов. Состав ведём руками, а не поиском по
   слову «hair»: у HANSCOS линия называется «Body, Hair and Home», и по ключевому
   слову в неё попадают крем для рук, помада и диффузор.

   Порядок внутри уровня — от профильных компаний к тем, у кого волосы одно из
   направлений. */

export type HairTier = 'brands' | 'oem' | 'materials';

export interface HairEntry {
  /** slug поставщика из suppliers.ts — по нему берём имя, бренд, страну и статус */
  slug: string;
  tier: HairTier;
  /** Бренд именно по волосам. У поставщика в профиле стоит его главная марка, и
      она часто про другое: у CK Regeon это DermaRegeon — линия для кожи лица.
      Здесь ставим ту, под которой выпускается уход за волосами. Без значения
      берём марку из профиля. */
  brand?: string;
  /** Позиции по волосам. Имена собственные, одинаковы во всех языках. */
  items: string[];
}

export const hairTiers: HairTier[] = ['brands', 'oem', 'materials'];

export const hairScalp: HairEntry[] = [
  {
    slug: 'ck-regeon',
    brand: 'HAIRREGEON · HERIBON',
    tier: 'brands',
    items: [
      'PTD-DBM Hair Booster',
      'HERIBON WNT ON Scalp Scaler',
      'HERIBON WNT ON Shampoo',
      'HERIBON WNT ON Hair Treatment',
      'HERIBON WNT ON Hair Tonic',
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
    items: [
      'DUFT&DOFT Enriched Perfume Hair Shampoo',
      'DUFT&DOFT Enriched Perfume Hair Rinse',
      'DUFT&DOFT Signature Perfume Caffeine Hair Tonic',
      'DUFT&DOFT Fine Fragrance Hair & Body Mist',
    ],
  },
  {
    slug: 'sante',
    tier: 'brands',
    items: ['Azulene Soother Shampoo', 'Azulene Soother Treatment'],
  },
  {
    slug: 'hanscos',
    tier: 'oem',
    items: ['Essential Repair Shampoo & Rinse', 'Pure Sphere Perfume Hair Mist'],
  },
  {
    slug: 'skinroom',
    brand: 'LAPIN Arc en ciel',
    tier: 'oem',
    items: ['LAPIN Arc en ciel'],
  },
  {
    slug: 'sunpure',
    tier: 'materials',
    items: [],
  },
];

/** Статьи блога по теме — порядок от общего к частному. */
export const hairArticles = [
  'korean-scalp-care-category',
  'heribon-four-step-routine',
  'professional-scalp-boosters',
  'wnt-cxxc5-scalp-science',
];
