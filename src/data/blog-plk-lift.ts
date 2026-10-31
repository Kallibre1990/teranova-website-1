/* PLK Lift editorial cluster. Facts are limited to the 28 October 2026
   catalogue and the GTBZ-22J material; prices, MOQ and unsupported capacity
   ranges are deliberately absent. */
import type { BlogPost, BlogPostContent } from './blog';
import type { Lang } from '../i18n/ui';

type Copy = { title: string; excerpt: string; heading: string; body: string };
const entry = (copy: Copy): BlogPostContent => ({
  title: copy.title, excerpt: copy.excerpt, seoTitle: `${copy.title} · Teranova`, seoDesc: copy.excerpt,
  sections: [{ h: copy.heading, p: [copy.body] }],
});
const LANGS: Lang[] = ['ru', 'en', 'ko', 'zh', 'ja', 'it', 'de', 'fr', 'tr', 'es', 'pt', 'he', 'hi'];
const post = (slug: string, hero: string, copy: Record<string, Copy>): BlogPost => ({
  slug, category: 'overview', date: '2026-11-01', related: ['plk-lift', 'industrial'], supplier: 'plk-lift', hero,
  /* The catalogue's product names are unchanged across locales.  English is
     the established neutral fallback for the ten machine locales until their
     editorial translations land; strict-content still gets a complete map. */
  i18n: Object.fromEntries(LANGS.map((lang) => [lang, entry(copy[lang] ?? copy.en)])),
});

export const plkLiftPosts: BlogPost[] = [
  post('plk-lift-catalogue-overview', '/img/suppliers/plk-lift/catalog/hero.jpg', {
    ru: { title: 'Каталог PLK Lift: подтверждённые группы оборудования', excerpt: 'В каталоге PLK Lift есть подъёмные столы, краны на гусеничном ходу, подъёмники и вакуумное оборудование.', heading: 'Что подтверждает каталог', body: 'Каталог, полученный 28 октября 2026 года, показывает шесть групп оборудования и телескопический дизельный подъёмник GTBZ-22J. Страница не выводит цены, минимальные объёмы заказа и характеристики, которых в этом каталоге нет.' },
    en: { title: 'PLK Lift catalogue: confirmed equipment groups', excerpt: 'The PLK Lift catalogue shows lift tables, crawler cranes, aerial lifts and vacuum lifting equipment.', heading: 'What the catalogue confirms', body: 'The catalogue received on 28 October 2026 shows six equipment groups and the GTBZ-22J telescopic diesel boom lift. This page does not publish prices, minimum order quantities or specifications absent from that catalogue.' },
    ko: { title: 'PLK Lift 카탈로그: 확인된 장비 그룹', excerpt: 'PLK Lift 카탈로그에는 리프트 테이블, 크롤러 크레인, 고소작업대와 진공 리프팅 장비가 있습니다.', heading: '카탈로그에서 확인되는 내용', body: '2026년 10월 28일에 받은 카탈로그에는 여섯 가지 장비 그룹과 GTBZ-22J 텔레스코픽 디젤 붐 리프트가 있습니다. 이 페이지에는 카탈로그에 없는 가격, 최소 주문 수량 또는 사양을 게시하지 않습니다.' },
  }),
  post('plk-lift-gtbz-22j', '/img/suppliers/plk-lift/catalog/hero.jpg', {
    ru: { title: 'GTBZ-22J: телескопический дизельный подъёмник в материалах PLK Lift', excerpt: 'GTBZ-22J указан в каталожных материалах PLK Lift как телескопический дизельный подъёмник.', heading: 'Позиция в каталоге', body: 'GTBZ-22J включён в полученные материалы PLK Lift в разделе телескопических подъёмников. Для запроса можно указать модель и рынок: доступность, документы и коммерческие условия уточняются отдельно.' },
    en: { title: 'GTBZ-22J: telescopic diesel boom lift in PLK Lift material', excerpt: 'PLK Lift catalogue material identifies GTBZ-22J as a telescopic diesel boom lift.', heading: 'The catalogue entry', body: 'GTBZ-22J appears in the received PLK Lift material under telescopic boom lifts. A request can name the model and market; availability, documents and commercial terms are clarified separately.' },
    ko: { title: 'GTBZ-22J: PLK Lift 자료의 텔레스코픽 디젤 붐 리프트', excerpt: 'PLK Lift 카탈로그 자료는 GTBZ-22J를 텔레스코픽 디젤 붐 리프트로 표기합니다.', heading: '카탈로그 항목', body: 'GTBZ-22J는 받은 PLK Lift 자료에서 텔레스코픽 붐 리프트 항목에 포함됩니다. 문의 시 모델과 시장을 알려 주시면 공급 가능 여부, 서류와 상업 조건을 별도로 확인합니다.' },
  }),
  post('plk-lift-vacuum-lifting-equipment', '/img/suppliers/plk-lift/catalog/vacuum-lifter.jpg', {
    ru: { title: 'Вакуумное подъёмное оборудование PLK Lift', excerpt: 'В каталоге PLK Lift показаны вакуумные захваты для работ с листовыми материалами.', heading: 'Оборудование в каталоге', body: 'Раздел вакуумного оборудования содержит вакуумный захват и присоски PLK Lift. Чтобы сверить комплектацию под конкретную задачу, в запросе полезно назвать материал, габариты и условия работы.' },
    en: { title: 'PLK Lift vacuum lifting equipment', excerpt: 'The PLK Lift catalogue shows vacuum lifters for handling sheet materials.', heading: 'Equipment in the catalogue', body: 'The vacuum equipment section contains a PLK Lift vacuum lifter and suction cups. For a configuration check on a specific job, a request should identify the material, dimensions and working conditions.' },
    ko: { title: 'PLK Lift 진공 리프팅 장비', excerpt: 'PLK Lift 카탈로그에는 판재 취급을 위한 진공 리프터가 표시되어 있습니다.', heading: '카탈로그의 장비', body: '진공 장비 섹션에는 PLK Lift 진공 리프터와 흡착 패드가 있습니다. 특정 작업의 구성 확인을 위해 문의에 재질, 치수와 작업 조건을 적어 주십시오.' },
  }),
  post('plk-lift-lift-tables-and-scissor-lifts', '/img/suppliers/plk-lift/catalog/scissor-lift.jpg', {
    ru: { title: 'Подъёмные столы и ножничные платформы PLK Lift', excerpt: 'Каталог PLK Lift включает стационарный подъёмный стол и ножничную платформу.', heading: 'Две группы в каталоге', body: 'В материалах PLK Lift отдельно показаны стационарный ножничный подъёмный стол и мобильная ножничная платформа. Их параметры и исполнение под конкретный объект уточняют до сделки.' },
    en: { title: 'PLK Lift lift tables and scissor lifts', excerpt: 'The PLK Lift catalogue includes a stationary lift table and a scissor lift.', heading: 'Two catalogue groups', body: 'PLK Lift material separately shows a stationary scissor lift table and a mobile scissor lift. Their parameters and configuration for a particular site are clarified before a deal.' },
    ko: { title: 'PLK Lift 리프트 테이블과 시저 리프트', excerpt: 'PLK Lift 카탈로그에는 고정식 리프트 테이블과 시저 리프트가 포함됩니다.', heading: '카탈로그의 두 그룹', body: 'PLK Lift 자료에는 고정식 시저 리프트 테이블과 이동식 시저 리프트가 별도로 나옵니다. 특정 현장의 사양과 구성은 거래 전에 확인합니다.' },
  }),
];
