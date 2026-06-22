/* ============================================================
   TERANOVA — i18n dictionaries (ru / en / ko)
   Texts live here, never hard-coded in markup.
   Content rules (LOCKED) — see /.skills/seo + ТЗ §7:
   - The word "guarantee" is forbidden in any language.
   - Two verification statuses are a documented fact, not a promise.
   - Demand-first; "on demand" block.
   - Presence on the ground: Korea, Japan, China, Turkey; others on request.
   - Footer: joint brand of AIA Group Ltd & Teranova Group Ltd.
   ============================================================ */

export const languages = {
  ru: 'Русский',
  en: 'English',
  ko: '한국어',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ru';

/* The RU dictionary is the reference shape; en/ko must match it. */
const ru = {
  htmlLang: 'ru',
  langShort: 'RU',

  nav: {
    catalog: 'Каталог',
    verify: 'Как мы проверяем',
    buyers: 'Под заказ',
    suppliers: 'Поставщикам',
    about: 'О нас',
    faq: 'FAQ',
    contacts: 'Контакты',
  },

  common: {
    cta_request: 'Оставить заявку',
    menu: 'Меню',
    close: 'Закрыть',
    to_top: 'Наверх',
    skip: 'Перейти к содержимому',
    switch_lang: 'Сменить язык',
  },

  meta: {
    home_title: 'Teranova Group — проверенные корейские поставщики и сопровождение сделок',
    home_desc: 'Подбор проверенных корейских поставщиков и полное сопровождение сделки: судовое снабжение, K-beauty (OEM/ODM), медицинские товары, промышленное оборудование.',
  },

  cats: {
    marine: { name: 'Судовое снабжение', blurb: 'Судовое оборудование, арматура, насосы, палубная фурнитура, канаты.' },
    cosmetics: { name: 'K-beauty (OEM/ODM)', blurb: 'Уход, K-beauty, декоративная косметика, контрактное производство, опт.' },
    medical: { name: 'Медицинские товары', blurb: 'Расходные материалы, перчатки, инфузионные системы, приборы.' },
    industrial: { name: 'Промышленное оборудование', blurb: 'Насосы, электродвигатели, арматура, редукторы, комплектующие.' },
  },

  status: {
    visited: 'Проверено — личный визит',
    provided: 'Данные предоставлены компанией',
  },

  hero: {
    badge: 'На земле в Корее · Бусан',
    title_metal: 'Проверенные корейские поставщики',
    title_rest: 'и сопровождение сделки',
    sub: 'Мы подбираем производителей в Корее, по возможности лично выезжаем на производство и сопровождаем сделку от запроса до отгрузки — для покупателей из СНГ, Европы и других регионов.',
    cta_primary: 'Оставить заявку',
    cta_secondary: 'Как мы проверяем',
    stats: [
      { n: '4', l: 'категории', s: 'судовое · K-beauty · медицина · индустрия' },
      { n: '4', l: 'страны на земле', s: 'Корея · Япония · Китай · Турция' },
      { n: '3', l: 'языка переговоров', s: 'RU · EN · KO' },
    ],
  },

  verify: {
    eyebrow: 'Доверие',
    title: 'Проверка на месте, а не на словах',
    sub: 'Доверие в нашем сервисе строится на личном присутствии. Мы не выдаём абстрактных обещаний — мы фиксируем конкретный факт: визит к поставщику и его документацию.',
    card_visited_t: 'Проверено — личный визит',
    card_visited_d: 'Мы лично побывали в офисе и/или на производстве, встретились с руководством и сделали фотофиксацию визита.',
    card_provided_t: 'Данные предоставлены компанией',
    card_provided_d: 'Информация получена от самой компании. Личный визит ещё не состоялся — это честно отражено в статусе.',
    note: 'Статус — это документированный факт визита, а не оценка качества товара. Условия качества фиксируются в договоре с поставщиком.',
    link: 'Как мы проверяем',
  },

  categories: {
    eyebrow: 'Категории',
    title: 'Четыре направления',
    sub: 'Направления, по которым мы работаем с корейскими поставщиками. По грузовому, пассажирскому транспорту и спецтехнике — под запрос.',
    suppliers_word: 'поставщиков',
    demo_note: 'Каталог наполняется — сейчас в нём демонстрационные данные.',
    link: 'Смотреть каталог',
  },

  ondemand: {
    eyebrow: 'Под заказ',
    title: 'Нужного нет в каталоге? Найдём под заказ',
    sub: 'Модель «спрос вперёд»: вы описываете потребность — мы подбираем корейских поставщиков, собираем предложения, помогаем выбрать и сопровождаем сделку до отгрузки.',
    points: [
      'Уточняем требования и формируем задание',
      'Собираем предложения от проверенных поставщиков',
      'Помогаем выбрать по вашим критериям',
      'Сопровождаем: документы, оплата, логистика, таможня',
    ],
    form_title: 'Оставить заявку',
    form_note: 'После отправки мы свяжемся с вами, уточним детали и подготовим предложение. Точные цены и условия — индивидуально под ваш запрос.',
  },

  presence: {
    eyebrow: 'Присутствие',
    title: 'На земле — в Азии',
    sub: 'Мы работаем с поставщиками напрямую, в их часовом поясе и на их языке. Юридическая база и команда — в Бусане, Корея.',
    on_ground: 'На земле',
    on_request_t: 'Другие направления',
    on_request_d: 'Под запрос — подключаем партнёров и проверенных представителей.',
    items: [
      { place: 'Корея', note: 'Бусан — база и команда' },
      { place: 'Япония', note: 'Присутствие на земле' },
      { place: 'Китай', note: 'Присутствие на земле' },
      { place: 'Турция', note: 'Присутствие на земле' },
    ],
  },

  how: {
    eyebrow: 'Процесс',
    title: 'Как это работает',
    sub: 'Четыре шага от запроса до поставки. Это и есть наш сервис — не просто каталог.',
    steps: [
      { t: 'Запрос', d: 'Вы описываете товар или категорию, объём и сроки. Мы уточняем детали.' },
      { t: 'Подбор и проверка', d: 'Находим подходящих корейских поставщиков. По возможности выезжаем на производство.' },
      { t: 'Сопровождение сделки', d: 'Координируем переговоры, контроль качества, оплату и документы через проверенных партнёров.' },
      { t: 'Доставка', d: 'Организуем таможенное оформление, логистику и отгрузку из Кореи.' },
    ],
  },

  form: {
    company: 'Компания',
    contact: 'Контактное лицо',
    email: 'Email',
    phone: 'Телефон / мессенджер',
    need: 'Что нужно (товар / категория)',
    volume: 'Объём',
    timeline: 'Сроки',
    comment: 'Комментарий',
    submit: 'Отправить заявку',
    required_hint: 'Поля со знаком * обязательны. Данные используются только для обработки заявки.',
    ph_company: 'Ваша компания',
    ph_contact: 'Имя и фамилия',
    ph_email: 'business@email.com',
    ph_phone: '+7 / +82 …',
    ph_need: 'Например: гидрогелевые маски, OEM',
    ph_volume: 'Например: 50 000 шт',
    ph_timeline: 'Например: 6–8 недель',
    ph_comment: 'Дополнительные детали, требования, сертификация…',
  },

  thanks: {
    title: 'Заявка отправлена',
    body: 'Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время.',
    back: 'Вернуться на главную',
  },

  notfound: {
    title: 'Страница скоро появится',
    body: 'Этот раздел ещё в работе. Вернитесь на главную — там уже всё готово.',
    back: 'На главную',
  },

  footer: {
    blurb: 'Подбор проверенных корейских поставщиков и сопровождение сделок для международных покупателей.',
    nav_title: 'Навигация',
    contact_title: 'Контакты',
    loc: 'Бусан, Южная Корея',
    joint_brand: 'Совместный бренд AIA Group Ltd и Teranova Group Ltd.',
    disclaimer: 'Часть данных в каталоге носит демонстрационный характер. Цены — средние ориентировочные (EXW) и не являются офертой. Teranova Group организует и сопровождает сделки через проверенных партнёров и не является производителем.',
    rights: '© 2025 Teranova Group · AIA Group Ltd.',
  },
};

const en: typeof ru = {
  htmlLang: 'en',
  langShort: 'EN',

  nav: {
    catalog: 'Catalog',
    verify: 'How we verify',
    buyers: 'On demand',
    suppliers: 'For suppliers',
    about: 'About',
    faq: 'FAQ',
    contacts: 'Contacts',
  },

  common: {
    cta_request: 'Submit a request',
    menu: 'Menu',
    close: 'Close',
    to_top: 'To top',
    skip: 'Skip to content',
    switch_lang: 'Switch language',
  },

  meta: {
    home_title: 'Teranova Group — verified Korean suppliers & deal support',
    home_desc: 'Sourcing of verified Korean suppliers and full deal support: marine supply, K-beauty (OEM/ODM), medical goods, industrial equipment.',
  },

  cats: {
    marine: { name: 'Marine supply', blurb: 'Marine equipment, valves, pumps, deck hardware, ropes.' },
    cosmetics: { name: 'K-beauty (OEM/ODM)', blurb: 'Skincare, K-beauty, color cosmetics, contract manufacturing, wholesale.' },
    medical: { name: 'Medical goods', blurb: 'Disposables, gloves, IV infusion sets, devices.' },
    industrial: { name: 'Industrial equipment', blurb: 'Pumps, electric motors, valves, gear reducers, components.' },
  },

  status: {
    visited: 'Verified — site visit',
    provided: 'Company-provided data',
  },

  hero: {
    badge: 'On the ground in Korea · Busan',
    title_metal: 'Verified Korean suppliers',
    title_rest: 'and full deal support',
    sub: 'We source manufacturers in Korea, visit production sites in person where possible and support the deal from inquiry to shipment — for buyers in the CIS, Europe and beyond.',
    cta_primary: 'Submit a request',
    cta_secondary: 'How we verify',
    stats: [
      { n: '4', l: 'categories', s: 'marine · K-beauty · medical · industrial' },
      { n: '4', l: 'countries on the ground', s: 'Korea · Japan · China · Türkiye' },
      { n: '3', l: 'languages of negotiation', s: 'RU · EN · KO' },
    ],
  },

  verify: {
    eyebrow: 'Trust',
    title: 'Checked on site, not just on paper',
    sub: 'Trust in our service is built on personal presence. We do not issue abstract promises — we record a concrete fact: a visit to the supplier and its documentation.',
    card_visited_t: 'Verified — site visit',
    card_visited_d: 'We personally visited the office and/or production site, met management and documented the visit with photos.',
    card_provided_t: 'Company-provided data',
    card_provided_d: 'Information provided by the company itself. A personal visit has not happened yet — and the status says so honestly.',
    note: 'A status is a documented fact of a visit, not an assessment of product quality. Quality terms are fixed in the contract with the supplier.',
    link: 'How we verify',
  },

  categories: {
    eyebrow: 'Categories',
    title: 'Four areas',
    sub: 'The areas in which we work with Korean suppliers. Commercial, passenger transport and special vehicles — on request.',
    suppliers_word: 'suppliers',
    demo_note: 'The catalog is being populated — it currently holds demonstration data.',
    link: 'View catalog',
  },

  ondemand: {
    eyebrow: 'On demand',
    title: 'Not in the catalog? We source it on demand',
    sub: 'A demand-first model: you describe the need — we source Korean suppliers, collect offers, help you choose and support the deal through shipment.',
    points: [
      'Clarify requirements and shape the brief',
      'Collect offers from vetted suppliers',
      'Help you choose by your own criteria',
      'Support: documents, payment, logistics, customs',
    ],
    form_title: 'Submit a request',
    form_note: 'After you submit, we will contact you, clarify the details and prepare an offer. Exact prices and terms are tailored to your request.',
  },

  presence: {
    eyebrow: 'Presence',
    title: 'On the ground in Asia',
    sub: 'We work with suppliers directly, in their time zone and their language. Our legal base and team are in Busan, Korea.',
    on_ground: 'On the ground',
    on_request_t: 'Other directions',
    on_request_d: 'On request — we bring in partners and vetted representatives.',
    items: [
      { place: 'Korea', note: 'Busan — base & team' },
      { place: 'Japan', note: 'Presence on the ground' },
      { place: 'China', note: 'Presence on the ground' },
      { place: 'Türkiye', note: 'Presence on the ground' },
    ],
  },

  how: {
    eyebrow: 'Process',
    title: 'How it works',
    sub: 'Four steps from inquiry to delivery. This is the service — not just a catalog.',
    steps: [
      { t: 'Inquiry', d: 'You describe the product or category, volume and timeline. We clarify the details.' },
      { t: 'Sourcing & checks', d: 'We find suitable Korean suppliers and, where possible, visit the production site.' },
      { t: 'Deal support', d: 'We coordinate negotiations, quality control, payment and documents through trusted partners.' },
      { t: 'Delivery', d: 'We arrange customs clearance, logistics and shipment from Korea.' },
    ],
  },

  form: {
    company: 'Company',
    contact: 'Contact person',
    email: 'Email',
    phone: 'Phone / messenger',
    need: 'What you need (product / category)',
    volume: 'Volume',
    timeline: 'Timeline',
    comment: 'Comment',
    submit: 'Send request',
    required_hint: 'Fields marked * are required. Your data is used only to process your request.',
    ph_company: 'Your company',
    ph_contact: 'Full name',
    ph_email: 'business@email.com',
    ph_phone: '+1 / +82 …',
    ph_need: 'e.g. hydrogel masks, OEM',
    ph_volume: 'e.g. 50,000 units',
    ph_timeline: 'e.g. 6–8 weeks',
    ph_comment: 'Additional details, requirements, certification…',
  },

  thanks: {
    title: 'Request sent',
    body: 'Thank you! We have received your request and will contact you shortly.',
    back: 'Back to home',
  },

  notfound: {
    title: 'This page is coming soon',
    body: 'This section is still in progress. Head back to the home page — that one is ready.',
    back: 'Go home',
  },

  footer: {
    blurb: 'Sourcing of verified Korean suppliers and deal support for international buyers.',
    nav_title: 'Navigation',
    contact_title: 'Contacts',
    loc: 'Busan, South Korea',
    joint_brand: 'A joint brand of AIA Group Ltd and Teranova Group Ltd.',
    disclaimer: 'Some catalog data is for demonstration. Prices are average indicative (EXW) and are not an offer. Teranova Group organizes and supports deals through trusted partners and is not a manufacturer.',
    rights: '© 2025 Teranova Group · AIA Group Ltd.',
  },
};

const ko: typeof ru = {
  htmlLang: 'ko',
  langShort: 'KO',

  nav: {
    catalog: '카탈로그',
    verify: '검증 방식',
    buyers: '맞춤 소싱',
    suppliers: '공급업체',
    about: '회사 소개',
    faq: 'FAQ',
    contacts: '연락처',
  },

  common: {
    cta_request: '문의하기',
    menu: '메뉴',
    close: '닫기',
    to_top: '위로',
    skip: '본문으로 이동',
    switch_lang: '언어 변경',
  },

  meta: {
    home_title: 'Teranova Group — 검증된 한국 공급업체 및 거래 지원',
    home_desc: '검증된 한국 공급업체 소싱 및 전체 거래 지원: 선박 용품, K-뷰티(OEM/ODM), 의료 용품, 산업 장비.',
  },

  cats: {
    marine: { name: '선박 용품', blurb: '선박 장비, 밸브, 펌프, 데크 철물, 로프.' },
    cosmetics: { name: 'K-뷰티 (OEM/ODM)', blurb: '스킨케어, K-뷰티, 색조 화장품, 위탁 생산, 도매.' },
    medical: { name: '의료 용품', blurb: '소모품, 장갑, IV 수액 세트, 기기.' },
    industrial: { name: '산업 장비', blurb: '펌프, 전동기, 밸브, 감속기, 부품.' },
  },

  status: {
    visited: '검증 완료 — 현장 방문',
    provided: '업체 제공 정보',
  },

  hero: {
    badge: '한국 현지 상주 · 부산',
    title_metal: '검증된 한국 공급업체',
    title_rest: '와 거래 지원',
    sub: '한국에서 제조업체를 발굴하고 가능한 경우 직접 생산 현장을 방문하며 문의부터 선적까지 거래를 지원합니다 — CIS, 유럽 및 기타 지역 바이어를 위해.',
    cta_primary: '문의하기',
    cta_secondary: '검증 방식 보기',
    stats: [
      { n: '4', l: '개 분야', s: '선박 · K-뷰티 · 의료 · 산업' },
      { n: '4', l: '개국 현지 상주', s: '한국 · 일본 · 중국 · 튀르키예' },
      { n: '3', l: '개 협상 언어', s: 'RU · EN · KO' },
    ],
  },

  verify: {
    eyebrow: '신뢰',
    title: '말이 아닌 현장 확인',
    sub: '당사 서비스의 신뢰는 직접 방문에 기반합니다. 추상적인 약속이 아니라 공급업체 방문과 그 기록이라는 구체적 사실을 남깁니다.',
    card_visited_t: '검증 완료 — 현장 방문',
    card_visited_d: '사무실 및/또는 생산 현장을 직접 방문하고 경영진을 만나 방문을 사진으로 기록했습니다.',
    card_provided_t: '업체 제공 정보',
    card_provided_d: '업체가 직접 제공한 정보입니다. 아직 직접 방문하지 않았으며 상태에 그대로 표시됩니다.',
    note: '상태는 품질 평가가 아니라 방문이라는 문서화된 사실입니다. 품질 조건은 공급업체와의 계약에 명시됩니다.',
    link: '검증 방식 보기',
  },

  categories: {
    eyebrow: '분야',
    title: '네 가지 분야',
    sub: '한국 공급업체와 협력하는 분야입니다. 상용·승용 운송 수단 및 특수 차량은 요청 시 안내합니다.',
    suppliers_word: '개 공급업체',
    demo_note: '카탈로그는 준비 중이며 현재 데모 데이터가 포함되어 있습니다.',
    link: '카탈로그 보기',
  },

  ondemand: {
    eyebrow: '맞춤 소싱',
    title: '카탈로그에 없나요? 맞춤으로 소싱합니다',
    sub: '수요 우선 모델: 필요한 것을 알려주시면 한국 공급업체를 발굴하고 제안을 모아 선택을 돕고 선적까지 거래를 지원합니다.',
    points: [
      '요구 사항을 확인하고 과업을 정리',
      '검증된 공급업체로부터 제안 수집',
      '귀하의 기준에 따라 선택 지원',
      '지원: 서류, 결제, 물류, 통관',
    ],
    form_title: '문의하기',
    form_note: '제출 후 연락하여 세부 사항을 확인하고 제안을 준비합니다. 정확한 가격과 조건은 요청에 맞춰 개별 안내합니다.',
  },

  presence: {
    eyebrow: '현지 상주',
    title: '아시아 현지에서',
    sub: '공급업체와 같은 시간대, 같은 언어로 직접 협력합니다. 법인과 팀은 한국 부산에 있습니다.',
    on_ground: '현지 상주',
    on_request_t: '기타 지역',
    on_request_d: '요청 시 — 파트너와 검증된 대리인을 연결합니다.',
    items: [
      { place: '한국', note: '부산 — 법인·팀' },
      { place: '일본', note: '현지 상주' },
      { place: '중국', note: '현지 상주' },
      { place: '튀르키예', note: '현지 상주' },
    ],
  },

  how: {
    eyebrow: '프로세스',
    title: '진행 방식',
    sub: '문의부터 납품까지 4단계. 단순 카탈로그가 아닌 서비스입니다.',
    steps: [
      { t: '문의', d: '제품 또는 분야, 수량, 일정을 알려주시면 세부 사항을 확인합니다.' },
      { t: '소싱 및 점검', d: '적합한 한국 공급업체를 찾고 가능하면 생산 현장을 방문합니다.' },
      { t: '거래 지원', d: '검증된 파트너를 통해 협상, 품질 관리, 결제, 서류를 조율합니다.' },
      { t: '납품', d: '통관, 물류, 한국에서의 선적을 주선합니다.' },
    ],
  },

  form: {
    company: '회사명',
    contact: '담당자',
    email: '이메일',
    phone: '전화 / 메신저',
    need: '필요 항목 (제품 / 분야)',
    volume: '수량',
    timeline: '일정',
    comment: '비고',
    submit: '요청 전송',
    required_hint: '* 표시 항목은 필수입니다. 데이터는 요청 처리 목적으로만 사용됩니다.',
    ph_company: '귀사 이름',
    ph_contact: '성명',
    ph_email: 'business@email.com',
    ph_phone: '+82 / +7 …',
    ph_need: '예: 하이드로겔 마스크, OEM',
    ph_volume: '예: 50,000개',
    ph_timeline: '예: 6~8주',
    ph_comment: '추가 세부 사항, 요건, 인증…',
  },

  thanks: {
    title: '요청이 전송되었습니다',
    body: '감사합니다! 요청을 접수했으며 곧 연락드리겠습니다.',
    back: '홈으로 돌아가기',
  },

  notfound: {
    title: '준비 중인 페이지입니다',
    body: '이 섹션은 아직 작업 중입니다. 홈으로 돌아가 주세요 — 홈은 준비되어 있습니다.',
    back: '홈으로',
  },

  footer: {
    blurb: '국제 바이어를 위한 검증된 한국 공급업체 소싱 및 거래 지원.',
    nav_title: '메뉴',
    contact_title: '연락처',
    loc: '대한민국 부산',
    joint_brand: 'AIA Group Ltd와 Teranova Group Ltd의 공동 브랜드.',
    disclaimer: '카탈로그의 일부 데이터는 데모용입니다. 가격은 평균 참고가(EXW)이며 청약이 아닙니다. Teranova Group은 검증된 파트너를 통해 거래를 조직·지원하며 제조사가 아닙니다.',
    rights: '© 2025 Teranova Group · AIA Group Ltd.',
  },
};

export const ui: Record<Lang, typeof ru> = { ru, en, ko };
