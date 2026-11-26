// Internal draft: routes must wait for all 11 reviewed translations.
import source from '../../docs/exsolu/products.json';
import images from '../../docs/exsolu/image-manifest.json';
import { koreanCopy, koreanBoosters, koreanSkincare } from './exsolu-ko';

import { japaneseCopy, japaneseBoosters, japaneseSkincare } from './exsolu-ja';

import { chineseCopy, chineseBoosters, chineseSkincare } from './exsolu-zh';

import { germanCopy, germanBoosters, germanSkincare } from './exsolu-de';

import { frenchCopy, frenchBoosters, frenchSkincare } from './exsolu-fr';

import { portugueseCopy, portugueseBoosters, portugueseSkincare } from './exsolu-pt';

import { spanishCopy, spanishBoosters, spanishSkincare } from './exsolu-es';

import { italianCopy, italianBoosters, italianSkincare } from './exsolu-it';

import { turkishCopy, turkishBoosters, turkishSkincare } from './exsolu-tr';

export const exsoluDraftLocales = ['en', 'ru', 'ko', 'ja', 'zh', 'de', 'fr', 'it', 'es', 'pt', 'tr'] as const;
export type ExsoluLocale = typeof exsoluDraftLocales[number];
export type ExsoluView = 'company' | 'skin-boosters' | 'skincare';

const copy = {
  tr: turkishCopy,
  pt: portugueseCopy,
  es: spanishCopy,
  it: italianCopy,
  fr: frenchCopy,
  de: germanCopy,
  ko: koreanCopy,
  ja: japaneseCopy,
  zh: chineseCopy,
  en: {
    company: 'NOVAMEDINTL / EXSOLU', professionalTitle: 'Professional cosmetic care', skincare: 'Everyday skincare',
    about: 'We develop and manufacture professional cosmetic products and everyday skincare under our EXSOLU brand. Our work includes formulation research, customized OEM/ODM development and production quality control.',
    story: 'EXSOLU brings together “Extraordinary” and “Solution”. We connect professional skincare with daily home care through two complementary product ranges.',
    ingredients: 'Key ingredients', description: 'Product description', pack: 'Pack',
    attribution: 'The descriptions and effects below are stated by NOVAMEDINTL in its product materials. They are cosmetic product descriptions, rather than independently established clinical outcomes.',
    caution: 'We provide standard cosmetic documentation for the professional range. Product classification and permitted use depend on the destination market. Follow the product instructions; this catalog does not provide a treatment protocol.',
    compositionNote: 'Selected ingredients are shown where disclosed in our product materials; these lists are not complete INCI declarations.',
    professional: 'We offer 17 products in our professional range, including formulations with biopolymers, exosomes and ingredients for skin and scalp care.',
    daily: 'Our five skincare products include a night mask and serums for hydration, firmness and a more radiant-looking complexion.',
    notice: 'Follow the product instructions and the requirements of the destination market.',
    nad: 'Manufacturer instruction: Do not inject. Nebulizer format; follow the manufacturer’s instructions.',
  },
  ru: {
    company: 'NOVAMEDINTL / EXSOLU', professionalTitle: 'Профессиональный косметический уход', skincare: 'Ежедневный уход за кожей',
    about: 'Мы разрабатываем и производим профессиональную косметику и средства для ежедневного ухода под собственным брендом EXSOLU. Занимаемся исследованием рецептур, индивидуальной разработкой OEM/ODM и контролем качества производства.',
    story: 'Название EXSOLU соединяет слова Extraordinary и Solution. В двух взаимодополняющих линейках мы связываем профессиональный уход за кожей с повседневным домашним уходом.',
    ingredients: 'Ключевые ингредиенты', description: 'Описание продукта', pack: 'Упаковка',
    attribution: 'Описания и эффекты ниже заявлены NOVAMEDINTL в материалах о продукции. Это описания косметических средств, а не независимо подтверждённые клинические результаты.',
    caution: 'Для профессиональной линейки мы предоставляем стандартную косметическую документацию. Классификация и допустимое применение зависят от рынка назначения. Следуйте инструкции к продукту; каталог не содержит протоколов процедур.',
    compositionNote: 'Указаны отдельные ингредиенты, раскрытые в наших материалах о продукции. Эти списки не заменяют полный состав INCI.',
    professional: 'В профессиональной линейке 17 продуктов, включая рецептуры с биополимерами, экзосомами и ингредиентами для ухода за кожей и кожей головы.',
    daily: 'Пять средств для ухода включают ночную маску и сыворотки для увлажнения, упругости и более сияющего вида кожи.',
    notice: 'Соблюдайте инструкцию к продукту и требования рынка назначения.',
    nad: 'Указание производителя: не вводить инъекционно. Формат для небулайзера; соблюдайте инструкцию производителя.',
  },
} as const;

// Narrow public copy: physiological and therapeutic claims from the source
// remain in the internal manifest and are deliberately not projected here.
const boosterDescriptions: Record<string, [string, string]> = {
  PCL: ['Cosmetic formulation with particle-free PCL colloid and hyaluronic acid, positioned for skin firmness and density.', 'Косметическая рецептура с безчастичным коллоидом PCL и гиалуроновой кислотой, предназначенная для ухода за упругостью и плотностью кожи.'],
  dPLLA: ['Low-molecular-weight dPLLA formulation positioned for skin firmness and density.', 'Рецептура с низкомолекулярным dPLLA для ухода за упругостью и плотностью кожи.'],
  DAEMU: ['Professional cosmetic care positioned as a preparatory step before subsequent care.', 'Профессиональный косметический уход, представленный как подготовительный этап перед последующим уходом.'],
  YURI: ['Professional cosmetic care positioned for a firmer-looking facial contour.', 'Профессиональный косметический уход для более подтянутого вида контура лица.'],
  PP: ['Professional cosmetic care positioned for skin firmness and elasticity.', 'Профессиональный косметический уход за упругостью и эластичностью кожи.'],
  'BOOST SOLUTION': ['Cosmetic care with exosomes, collagen tripeptide and hyaluronic acid for hydration and elasticity.', 'Косметический уход с экзосомами, коллагеновым трипептидом и гиалуроновой кислотой для увлажнения и эластичности.'],
  'HYDRO-WHITE': ['Cosmetic care with exosomes, hyaluronic acid and tranexamic acid for hydration and a more even-looking skin tone.', 'Косметический уход с экзосомами, гиалуроновой и транексамовой кислотами для увлажнения и более ровного на вид тона кожи.'],
  'EXO-PLUS': ['Professional scalp care with PDRN-coated exosomes.', 'Профессиональный уход за кожей головы с экзосомами с PDRN-покрытием.'],
  'EXOBENE-S': ['Cosmetic care with exosomes, hyaluronic acid and amino acids for smoother, firmer, hydrated-looking skin.', 'Косметический уход с экзосомами, гиалуроновой кислотой и аминокислотами для более гладкой, упругой и увлажнённой на вид кожи.'],
  'EXOBENE-H': ['Scalp and hair care with exosomes, niacinamide, biotin and copper peptide.', 'Уход за кожей головы и волосами с экзосомами, ниацинамидом, биотином и медным пептидом.'],
  SOSU: ['Ginseng-based product in our professional wellness range.', 'Продукт на основе женьшеня в нашей профессиональной линейке wellness.'],
  SAMSHIN: ['Herbal product in our professional wellness range.', 'Продукт на растительной основе в нашей профессиональной линейке wellness.'],
  NOPA: ['Herbal product in our professional wellness range.', 'Продукт на растительной основе в нашей профессиональной линейке wellness.'],
  'DANGUN-S': ['Ginseng-based formulation in the DANGUN wellness range.', 'Рецептура на основе женьшеня в линейке DANGUN wellness.'],
  'DANGUN-SS': ['An alternative concentration within the DANGUN wellness range.', 'Вариант концентрации в линейке DANGUN wellness.'],
  'DANGUN-SM': ['A distinct formulation within the DANGUN wellness range.', 'Отдельная рецептура в линейке DANGUN wellness.'],
  'NAD+ AIR SHOT': ['NAD+ 100 mg and NMN 40 mg per vial. Nebulizer format.', 'NAD+ 100 мг и NMN 40 мг на флакон. Формат для небулайзера.'],
};

function imageFor(id: string) {
  const image = images.images.find((entry) => entry.product === id);
  if (!image) throw new Error(`EXSOLU image missing: ${id}`);
  return image.file;
}

function localPack(pack: string, lang: ExsoluLocale) {
  if (lang === 'tr') return pack.replace(/vials/g, 'flakon').replace(/vial/g, 'flakon').replace(/box/g, 'kutu').replace(/ea/g, 'adet');
  if (lang === 'pt') return pack.replace(/vials/g, 'frascos').replace(/vial/g, 'frasco').replace(/box/g, 'caixa').replace(/ea/g, 'unidades');
  if (lang === 'es') return pack.replace(/vials/g, 'viales').replace(/vial/g, 'vial').replace(/box/g, 'caja').replace(/ea/g, 'unidades');
  if (lang === 'it') return pack.replace(/vials/g, 'flaconcini').replace(/vial/g, 'flaconcino').replace(/box/g, 'confezione').replace(/ea/g, 'unità');
  if (lang === 'fr') return pack.replace(/vials/g, 'flacons').replace(/vial/g, 'flacon').replace(/box/g, 'boîte').replace(/ea/g, 'unités');
  if (lang === 'de') return pack.replace(/vials/g, 'Fläschchen').replace(/vial/g, 'Fläschchen').replace(/box/g, 'Packung').replace(/ea/g, 'Stück');
  if (lang === 'zh') return pack.replace(/vials/g, '瓶').replace(/vial/g, '瓶').replace(/box/g, '盒').replace(/ea/g, '件');
  if (lang === 'en') return pack.replace(/ea/g, 'units');
  if (lang === 'ja') return pack.replace(/vials/g, 'バイアル').replace(/vial/g, 'バイアル').replace(/box/g, '箱').replace(/ea/g, '個');
  if (lang === 'ko') return pack.replace(/vials/g, '바이알').replace(/vial/g, '바이알').replace(/box/g, '상자').replace(/ea/g, '개');
  return pack.replace(/mL/g, 'мл').replace(/mg/g, 'мг').replace(/\b4 vials\b/g, '4 флакона').replace(/vials/g, 'флаконов').replace(/vial/g, 'флакон').replace(/box/g, 'коробка').replace(/ea/g, 'шт.');
}

export function exsoluContent(lang: ExsoluLocale) {
  if (!exsoluDraftLocales.includes(lang)) throw new Error(`EXSOLU translation unavailable: ${lang}`);
  const index = lang === 'en' ? 0 : 1;
  const boosters = source.lines.skin_boosters.groups.flatMap((group) => group.products.map((product) => {
    const pair = boosterDescriptions[product.name];
    if (!pair) throw new Error(`EXSOLU public description missing: ${product.name}`);
    const id = product.name === 'NAD+ AIR SHOT' ? 'nad-air-shot' : product.name.toLowerCase().replaceAll(' ', '-');
    const p = product as unknown as Record<string, string>;
    return {
      id, name: product.name, image: imageFor(id), pack: localPack(product.pack, lang),
      description: lang === 'tr' ? turkishBoosters[product.name].description : lang === 'pt' ? portugueseBoosters[product.name].description : lang === 'es' ? spanishBoosters[product.name].description : lang === 'it' ? italianBoosters[product.name].description : lang === 'fr' ? frenchBoosters[product.name].description : lang === 'de' ? germanBoosters[product.name].description : lang === 'zh' ? chineseBoosters[product.name].description : lang === 'ja' ? japaneseBoosters[product.name].description : lang === 'ko' ? koreanBoosters[product.name].description : pair[index],
      ingredients: lang === 'tr' ? turkishBoosters[product.name].ingredients : lang === 'pt' ? portugueseBoosters[product.name].ingredients : lang === 'es' ? spanishBoosters[product.name].ingredients : lang === 'it' ? italianBoosters[product.name].ingredients : lang === 'fr' ? frenchBoosters[product.name].ingredients : lang === 'de' ? germanBoosters[product.name].ingredients : lang === 'zh' ? chineseBoosters[product.name].ingredients : lang === 'ja' ? japaneseBoosters[product.name].ingredients : lang === 'ko' ? koreanBoosters[product.name].ingredients : p[`ingredients_${lang}`] ?? p[`design_${lang}`] ?? '',
      caution: id === 'nad-air-shot' ? copy[lang].nad : '',
    };
  }));
  const skincare = source.lines.skincare.products.map((product) => ({
    id: product.code.toLowerCase(), name: lang === 'tr' ? turkishSkincare[product.code].name : lang === 'pt' ? portugueseSkincare[product.code].name : lang === 'es' ? spanishSkincare[product.code].name : lang === 'it' ? italianSkincare[product.code].name : lang === 'fr' ? frenchSkincare[product.code].name : lang === 'de' ? germanSkincare[product.code].name : lang === 'zh' ? chineseSkincare[product.code].name : lang === 'ja' ? japaneseSkincare[product.code].name : lang === 'ko' ? koreanSkincare[product.code].name : product[`name_${lang}`], image: imageFor(product.code.toLowerCase()),
    pack: localPack(product.pack, lang), description: lang === 'tr' ? turkishSkincare[product.code].description : lang === 'pt' ? portugueseSkincare[product.code].description : lang === 'es' ? spanishSkincare[product.code].description : lang === 'it' ? italianSkincare[product.code].description : lang === 'fr' ? frenchSkincare[product.code].description : lang === 'de' ? germanSkincare[product.code].description : lang === 'zh' ? chineseSkincare[product.code].description : lang === 'ja' ? japaneseSkincare[product.code].description : lang === 'ko' ? koreanSkincare[product.code].description : product[`directions_${lang}`],
    ingredients: lang === 'tr' ? turkishSkincare[product.code].ingredients : lang === 'pt' ? portugueseSkincare[product.code].ingredients : lang === 'es' ? spanishSkincare[product.code].ingredients : lang === 'it' ? italianSkincare[product.code].ingredients : lang === 'fr' ? frenchSkincare[product.code].ingredients : lang === 'de' ? germanSkincare[product.code].ingredients : lang === 'zh' ? chineseSkincare[product.code].ingredients : lang === 'ja' ? japaneseSkincare[product.code].ingredients : lang === 'ko' ? koreanSkincare[product.code].ingredients : product[`key_ingredients_${lang}`], caution: '',
  }));
  return { ...copy[lang], boosters, skincareProducts: skincare };
}
