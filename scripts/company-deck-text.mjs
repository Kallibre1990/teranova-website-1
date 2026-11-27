/* Тексты продающей презентации компании.

   Отличие от teranova-deck-text.mjs: тот дек — сдержанный профиль для
   производителя, который решает, размещаться у нас или нет. Этот — презентация
   для вложения в письмо: её открывает человек, который про нас ничего не знает,
   и решение принимает по первым двум экранам.

   Правила те же и нарушать их нельзя:
   — слова «гарантия» нет ни в одной форме (устав);
   — цифры приходят из данных витрины на момент сборки, руками не вписываются;
   — про число сделок не говорится ничего, ни цифрой, ни намёком;
   — ставка комиссии не публикуется.

   Юридическое лицо — Teranova Group Co., Ltd.; основатель на публике не
   называется, визиты атрибутируются команде (см. teranova-deck-text.mjs). */
import { langNamesList } from './deck-lang-list.mjs';

export const TEXTS = {
  ru: (s) => ({
    lang: 'ru',
    eyebrow: 'Teranova Group · презентация компании',
    h1: 'Teranova Group',
    tagline: 'Корейское производство — покупателям по всему миру',
    descriptor: 'B2B-платформа и сопровождение сделки целиком · Корея',
    coverFoot: 'Teranova Group Co., Ltd. · Республика Корея',
    coverMail: 'info@teranovagroup.com · teranovagroup.com',

    /* 2. Заявление */
    claim_lbl: 'Что мы делаем',
    claim: 'Мы соединяем корейского производителя с покупателем за рубежом и доводим сделку до конца — а не до знакомства.',
    claim_sub: 'Teranova Group зарегистрирована в Корее, юридическое лицо — Teranova Group Co., Ltd. Мы работаем на стороне покупателя: он приносит требование, мы находим производителя, который действительно ему отвечает, и дальше ведём переговоры, документы, логистику, таможенное оформление и перевод.',
    claim_facts: ['Зарегистрированы в Корее', 'Без склада и перепродажи', 'Оплата с состоявшейся сделки', `${s.langs} языков`],

    /* 3. Три вида запросов */
    kinds_lbl: 'С чем к нам приходят',
    kinds_h: 'Три вида запросов',
    kinds_lead: 'Это три разные задачи и три разных покупателя. Мы работаем со всеми тремя, и производителю полезно понимать, в каком качестве мы можем привести к нему клиента.',
    kinds: [
      {
        i: 'box',
        n: 'Готовый товар',
        d: 'Дистрибьютор, аптечная сеть, маркетплейс или клиника ищут корейский продукт под свой рынок. Мы подбираем производителя, сводим стороны и ведём поставку.',
      },
      {
        i: 'flask',
        n: 'Контрактное производство, OEM и ODM',
        d: 'У владельца марки есть рынок и идея, но нет завода. Он приходит с техническим заданием, мы находим производство, которое его закроет, и сопровождаем проект от образцов до отгрузки. Такие запросы у нас есть уже сейчас, и мы это направление развиваем.',
      },
      {
        i: 'drop',
        n: 'Сырьё, компоненты и упаковка',
        d: 'Производителю за рубежом нужен корейский компонент, активное вещество или упаковочное решение. Запрос идёт не на готовый товар, а на составляющую — и для поставщика сырья это отдельный, устойчивый канал сбыта.',
      },
    ],

    /* 4. Цифры */
    nums_lbl: 'Витрина сегодня',
    nums_h: 'Цифры, которые можно проверить',
    nums_lead: 'Всё ниже собрано из самой витрины на день сборки этого файла. Числа сделок мы не публикуем: компания молодая, и придумывать себе историю мы не будем.',
    nums: [
      { v: String(s.total), l: 'производителей на витрине' },
      { v: String(s.korea), l: 'из них корейских' },
      { v: String(s.langs), l: 'языков у каждого профиля' },
      { v: String(s.pages), l: 'страниц на сайте' },
      { v: String(s.posts), l: 'статей о продукции и технологиях' },
      { v: String(s.pdfs), l: 'документов PDF для покупателя' },
    ],
    nums_note: 'Профиль и страницы продукции собираются из материалов, которые прислал сам производитель, и публикуются только после его письменного согласия.',

    /* 5. Что даёт размещение */
    listing_lbl: 'Производителю',
    listing_h: 'Что даёт размещение',
    listing_lead: 'Публикация бесплатна и не создаёт обязательств.',
    listing: [
      { n: `Профиль на ${s.langs} языках`, d: `Страница компании и страницы продукции на ${langNamesList('ru')}. Покупатель читает о вас на своём языке.` },
      { n: 'Документы из ваших же данных', d: 'Условия сотрудничества и презентация собираются из тех же данных, что и страница. Покупатель скачивает их и показывает внутри своей компании.' },
      { n: 'Не карточка, а рассказ', d: 'Мы пишем о технологии, которая стоит за продукцией, чтобы покупатель, впервые услышавший о вас, понял, чем вы отличаетесь.' },
      { n: 'Ваши контакты закрыты', d: 'Прямые контакты производителя мы не публикуем. Запросы приходят сначала к нам, мы их проверяем и передаём вам уже с цифрами и условиями.' },
    ],
    listing_note: 'Цены публикуются только по вашей просьбе. По умолчанию на страницах стоит «цена по запросу».',

    /* 6. Экран витрины */
    shot_lbl: 'Как это выглядит',
    shot_h: 'Страница производителя на витрине',
    shot_url: 'teranovagroup.com/catalog/dreamcos/',
    shot_cap: `Профиль корейской косметической группы: фотографии с личного визита, каталог продукции, статьи и документы — всё на ${s.langs} языках.`,

    /* 7. Два статуса */
    verify_lbl: 'Честность',
    verify_h: 'Два статуса и ничего между ними',
    verify_lead: 'Покупатель должен понимать, откуда взят каждый факт. Поэтому у нас ровно два статуса, и границу между ними мы не размываем.',
    verify: [
      { n: 'Проверено — личный визит', d: 'Мы были в офисе или на производстве, встречались с руководством и делали фотографии. На странице стоят дата и снимки. Встреча на выставке визитом не считается.' },
      { n: 'Информация предоставлена компанией', d: 'Статус по умолчанию. Всё на странице взято из материалов производителя, и страница говорит об этом прямо, а не мелким шрифтом внизу.' },
    ],
    verify_note: 'Сертификаты и регистрации показываются так, как их заявила компания. Копии передаются покупателю на стадии сделки, а не публикуются на витрине.',

    /* 8. Сделка */
    deal_lbl: 'Как это работает',
    deal_h: 'Путь сделки',
    deal: [
      { n: 'Запрос', d: 'Покупатель приходит к нам. Мы проверяем страну, канал продаж, объём и то, способен ли он ввезти товар.' },
      { n: 'Задание', d: 'Мы приносим производителю запрос с цифрами и условиями, а не название компании. Если запрос не выдерживает проверки, производитель о нём не узнаёт.' },
      { n: 'Знакомство', d: 'Когда всё становится предметным, стороны садятся за один стол в нашем присутствии. Информацию мы при этом не придерживаем.' },
      { n: 'Договор', d: 'Трёхсторонний: покупатель, производитель и Teranova. Оплата за товар идёт производителю напрямую, наша комиссия — отдельная строка в том же договоре.' },
      { n: 'Исполнение', d: 'Логистика, документы, таможенное оформление и перевод. В договоре записано, что именно мы берём на себя по этой сделке.' },
    ],

    /* 9. Стоимость */
    cost_lbl: 'Деньги',
    cost_big: 'Ноль до сделки',
    cost_lead: 'Размещение бесплатно. Пока сделки нет, производитель не платит ничего.',
    cost: [
      { n: 'Публикация и обновления', d: 'Бесплатно. Новая продукция, сертификаты и новости добавляются в профиль по мере того, как вы их присылаете.' },
      { n: 'Комиссия', d: 'Выплачивается с состоявшейся сделки и записана в трёхсторонний договор. Это не наценка к вашей цене и не скрытый сбор. Ставка зависит от сделки и согласовывается до подписания.' },
      { n: 'Логистика и брокер', d: 'Считаются отдельно и показываются в счёте полностью, строка за строкой.' },
    ],

    /* 10. Рынки */
    markets_lbl: 'География',
    markets_h: 'Рынки и каналы',
    markets_groups: [
      { n: 'Латинская Америка', v: 'Мексика · Бразилия · Аргентина · Чили · Колумбия · Перу · Уругвай · Парагвай' },
      { n: 'Европа и СНГ', v: 'Европейский союз · Турция · Россия и страны СНГ' },
      { n: 'Присутствие на месте', v: 'Корея · Япония · Китай · Турция' },
    ],
    channels_h: 'Каналы',
    channels: ['Импортёры и дистрибьюторы', 'Аптечные сети и специализированная розница', 'Клиники и салоны', 'Маркетплейсы и электронная торговля', 'Владельцы марок и контрактное производство'],
    markets_note: 'Мы не идём на рынок, где у производителя уже есть официальный партнёр. Скажите, какие территории закрыты, и они останутся закрытыми.',

    /* 11. Категории */
    cats_lbl: 'Направления',
    cats_h: 'С чем мы работаем',
    cats: [
      { n: 'Косметика и уход', d: 'Готовые бренды, OEM и ODM' },
      { n: 'Медицина и эстетика', d: 'Аппараты, расходные материалы, инъекционные линии' },
      { n: 'Химия и материалы', d: 'Сырьё, активные компоненты, упаковка' },
      { n: 'Промышленное оборудование', d: 'Компрессоры, подъёмная и очистная техника' },
      { n: 'Судовое снабжение', d: 'Запчасти и снабжение для флота' },
      { n: 'Коммерческий транспорт', d: 'Спецтехника и запасные части' },
    ],
    cats_note: 'Легковые автомобили и запчасти к ним в наши задачи не входят.',

    /* 12. Что нужно */
    need_lbl: 'Первый шаг',
    need_h: 'Что нам нужно, чтобы вас разместить',
    need_lead: 'Пять вещей, и ни одна из них не требует документов, которыми на этом этапе было бы неловко делиться.',
    need: [
      { n: 'Письменное согласие', d: 'Одна строка в письме о том, что мы можем использовать ваши материалы.' },
      { n: 'Каталог и изображения', d: 'Фотографии продукции и каталог. Названия и объёмы — как на упаковке: мы сверяем страницу с этикеткой.' },
      { n: 'Ваши сертификаты', d: 'Какие есть и что покрывают. Копии нужны только на стадии сделки.' },
      { n: 'Закрытые территории', d: 'Страны, где у вас уже есть официальный партнёр.' },
      { n: 'Цены — по желанию', d: 'Если не хотите их публиковать, на странице будет «цена по запросу».' },
    ],

    /* 13. Финал */
    cta_h: 'Давайте поговорим',
    cta_d: 'Ответьте на письмо, и мы соберём профиль из ваших материалов, пришлём ссылку на готовую страницу и внесём любую вашу правку в тот же день. Если удобнее сначала обсудить — встретимся у вас в офисе, у нас или онлайн.',
    cta_mail: 'info@teranovagroup.com',
    cta_site: 'teranovagroup.com',
    cta_note: 'Teranova Group — торговая платформа, юридическое лицо Teranova Group Co., Ltd.',
  }),

  en: (s) => ({
    lang: 'en',
    eyebrow: 'Teranova Group · company presentation',
    h1: 'Teranova Group',
    tagline: 'Korean manufacturing, taken to buyers worldwide',
    descriptor: 'A B2B platform and full deal support · Korea',
    coverFoot: 'Teranova Group Co., Ltd. · Republic of Korea',
    coverMail: 'info@teranovagroup.com · teranovagroup.com',

    claim_lbl: 'What we do',
    claim: 'We connect a Korean manufacturer with a buyer abroad and carry the deal to the end — not to the introduction.',
    claim_sub: 'Teranova Group is registered in Korea; the legal entity is Teranova Group Co., Ltd. We work on the buyer\u2019s side: he brings a requirement, we find the manufacturer who genuinely fits it, and from there we run the negotiation, the documents, the logistics, the customs clearance and the translation.',
    claim_facts: ['Registered in Korea', 'No stock, no resale', 'Paid on a completed deal', `${s.langs} languages`],

    kinds_lbl: 'What people come to us with',
    kinds_h: 'Three kinds of request',
    kinds_lead: 'Three different tasks and three different buyers. We work with all three, and it helps a manufacturer to know in which of them we may bring him a client.',
    kinds: [
      { i: 'box', n: 'Finished product',
        d: 'A distributor, a pharmacy chain, a marketplace or a clinic is looking for a Korean product for their market. We select the manufacturer, put the two sides together and run the shipment.' },
      { i: 'flask', n: 'Contract manufacturing, OEM and ODM',
        d: 'A brand owner has the market and the idea but no factory. He arrives with a specification, we find the production that can meet it, and we accompany the project from samples to shipment. We have live requests of this kind now, and it is a direction we are deliberately developing.' },
      { i: 'drop', n: 'Raw materials, components and packaging',
        d: 'A manufacturer abroad needs a Korean ingredient, an active compound or a packaging solution. The request is not for a finished product but for a part of one — and for a materials supplier that is a separate and far steadier sales channel.' },
    ],

    nums_lbl: 'The platform today',
    nums_h: 'Figures you can check',
    nums_lead: 'Everything below is taken from the platform itself on the day this file was built. We do not publish deal counts: the company is young, and we are not going to invent a history for ourselves.',
    nums: [
      { v: String(s.total), l: 'manufacturers published' },
      { v: String(s.korea), l: 'of them Korean' },
      { v: String(s.langs), l: 'languages for every profile' },
      { v: String(s.pages), l: 'pages on the site' },
      { v: String(s.posts), l: 'articles on products and technology' },
      { v: String(s.pdfs), l: 'PDF documents for buyers' },
    ],
    nums_note: 'A profile and its product pages are built from the materials the manufacturer sent us, and published only after his written consent.',

    listing_lbl: 'For the manufacturer',
    listing_h: 'What a listing gives you',
    listing_lead: 'Publication is free and creates no obligation.',
    listing: [
      { n: `A profile in ${s.langs} languages`, d: `Company page and product pages in ${langNamesList('en')}. A buyer reads about you in his own language.` },
      { n: 'Documents built from your data', d: 'A terms sheet and a presentation, generated from the same data as the page. A buyer downloads them and circulates them inside his company.' },
      { n: 'A story, not a card', d: 'We write about the technology behind the products, so that a buyer who has never heard of you understands what makes you different.' },
      { n: 'Your contacts stay closed', d: 'We do not publish a manufacturer\u2019s direct contacts. Enquiries reach us first; we qualify them and pass them on with figures and terms attached.' },
    ],
    listing_note: 'Prices are published only if you ask for it. By default the pages say \u201cprice on request\u201d.',

    shot_lbl: 'How it looks',
    shot_h: 'A manufacturer page on the platform',
    shot_url: 'teranovagroup.com/en/catalog/dreamcos/',
    shot_cap: `The profile of a Korean cosmetics group: photographs from a personal visit, a product catalogue, articles and documents — all in ${s.langs} languages.`,

    verify_lbl: 'Honesty',
    verify_h: 'Two statuses and nothing in between',
    verify_lead: 'A buyer needs to know where every fact came from. So we use exactly two statuses and never blur the line between them.',
    verify: [
      { n: 'Verified — personal visit', d: 'We have been to the office or the plant, met management and taken photographs. The page carries the date and the photographs. A meeting at a trade show does not count as a visit.' },
      { n: 'Information provided by the company', d: 'The default. Everything on the page comes from the manufacturer\u2019s own materials, and the page says so plainly rather than in small print at the bottom.' },
    ],
    verify_note: 'Certificates and registrations are shown as stated by the company. Copies go to a buyer at the deal stage; they are not published on the platform.',

    deal_lbl: 'How it works',
    deal_h: 'The path of a deal',
    deal: [
      { n: 'Enquiry', d: 'A buyer comes to us. We check the country, the sales channel, the volume and whether he is able to import the goods at all.' },
      { n: 'A brief', d: 'We bring the manufacturer a request with figures and terms, not a company name. If an enquiry does not hold up, he never hears about it.' },
      { n: 'Introduction', d: 'When it becomes concrete, both sides sit at one table with us present. We hold nothing back at that point.' },
      { n: 'Contract', d: 'Tripartite: buyer, manufacturer and Teranova. Payment for the goods goes to the manufacturer directly; our commission is a separate line in the same contract.' },
      { n: 'Execution', d: 'Logistics, documents, customs clearance and translation. The contract states which of these we take on for that particular deal.' },
    ],

    cost_lbl: 'Money',
    cost_big: 'Zero until a deal',
    cost_lead: 'Listing is free. Until a deal is done, the manufacturer pays nothing.',
    cost: [
      { n: 'Publication and updates', d: 'Free. New products, certifications and company news are added to your profile as you send them.' },
      { n: 'Commission', d: 'Paid on a completed deal and written into the tripartite contract. It is not a margin on your price and not a hidden fee. The rate depends on the deal and is agreed before anything is signed.' },
      { n: 'Logistics and brokerage', d: 'Quoted separately and shown in full on the invoice, line by line.' },
    ],

    markets_lbl: 'Geography',
    markets_h: 'Markets and channels',
    markets_groups: [
      { n: 'Latin America', v: 'Mexico · Brazil · Argentina · Chile · Colombia · Peru · Uruguay · Paraguay' },
      { n: 'Europe and the CIS', v: 'European Union · T\u00fcrkiye · Russia and the CIS countries' },
      { n: 'On the ground', v: 'Korea · Japan · China · T\u00fcrkiye' },
    ],
    channels_h: 'Channels',
    channels: ['Importers and distributors', 'Pharmacy and specialty retail', 'Clinics and salons', 'Marketplaces and e-commerce', 'Brand owners and contract manufacturing'],
    markets_note: 'We do not approach a market where you already have an official partner. Tell us which territories are closed and they stay closed.',

    cats_lbl: 'Sectors',
    cats_h: 'What we work with',
    cats: [
      { n: 'Cosmetics and skincare', d: 'Finished brands, OEM and ODM' },
      { n: 'Medical and aesthetics', d: 'Devices, consumables, injectable lines' },
      { n: 'Chemicals and materials', d: 'Raw materials, actives, packaging' },
      { n: 'Industrial equipment', d: 'Compressors, lifting and cleaning machinery' },
      { n: 'Marine supply', d: 'Spare parts and supply for fleets' },
      { n: 'Commercial vehicles', d: 'Special vehicles and spare parts' },
    ],
    cats_note: 'Passenger cars and their parts are outside our scope.',

    need_lbl: 'First step',
    need_h: 'What we need to publish you',
    need_lead: 'Five things, and none of them are documents you would hesitate to share at this stage.',
    need: [
      { n: 'Written consent', d: 'One line in an email confirming we may use your materials.' },
      { n: 'Catalogue and images', d: 'Product photographs and a catalogue. Names and volumes as they appear on the label: we check the page against the label.' },
      { n: 'Your certifications', d: 'Which ones you hold and what they cover. Copies are needed only at the deal stage.' },
      { n: 'Closed territories', d: 'Countries where you already have an official partner.' },
      { n: 'Prices — optional', d: 'If you would rather not publish them, the page shows \u201cprice on request\u201d.' },
    ],

    cta_h: 'Let us talk',
    cta_d: 'Reply to this letter and we will build the profile from your materials, send you the live link, and make any change you ask for the same day. If you would rather discuss first, we can meet at your office, at ours, or online.',
    cta_mail: 'info@teranovagroup.com',
    cta_site: 'teranovagroup.com',
    cta_note: 'Teranova Group is a trade platform; the legal entity is Teranova Group Co., Ltd.',
  }),

  ko: (s) => ({
    lang: 'ko',
    eyebrow: 'Teranova Group · 회사 프레젠테이션',
    h1: 'Teranova Group',
    tagline: '한국 제조업을 전 세계 바이어에게',
    descriptor: 'B2B 플랫폼이자 거래 전 과정 지원 · 한국',
    coverFoot: 'Teranova Group Co., Ltd. · 대한민국',
    coverMail: 'info@teranovagroup.com · teranovagroup.com',

    claim_lbl: '저희가 하는 일',
    claim: '한국 제조사와 해외 바이어를 연결하고, 소개가 아니라 거래 종료까지 진행합니다.',
    claim_sub: 'Teranova Group은 한국에 등록되어 있으며, 법인은 Teranova Group Co., Ltd.입니다. 저희는 바이어 측에서 일합니다: 바이어가 요구 사항을 가져오면 실제로 그 조건에 맞는 제조사를 찾고, 이후 협상·서류·물류·통관·번역을 진행합니다.',
    claim_facts: ['한국 등록 법인', '재고 없음, 재판매 없음', '성사된 거래에 대한 수수료', `${s.langs}개 언어`],

    kinds_lbl: '어떤 문의가 오는가',
    kinds_h: '세 가지 유형의 요청',
    kinds_lead: '서로 다른 세 가지 과제이자 세 가지 유형의 바이어입니다. 저희는 이 세 가지 모두와 일하며, 제조사가 어떤 경우에 저희가 고객을 데려올 수 있는지 아는 것이 도움이 됩니다.',
    kinds: [
      { i: 'box', n: '완제품', d: '유통사, 약국 체인, 마켓플레이스 또는 클리닉이 자사 시장에 맞는 한국 제품을 찾습니다. 저희는 제조사를 선정하고 양측을 연결한 뒤 출하까지 진행합니다.' },
      { i: 'flask', n: '위탁생산(OEM/ODM)', d: '브랜드 소유자는 시장과 아이디어는 있지만 공장이 없습니다. 기술 요구서를 가져오면 저희가 이를 충족할 생산처를 찾고, 샘플부터 출하까지 프로젝트를 동행합니다. 이런 요청이 지금도 들어오고 있으며, 저희는 이 방향을 의도적으로 키우고 있습니다.' },
      { i: 'drop', n: '원료, 부품, 포장재', d: '해외 제조사가 한국산 원료, 활성 성분 또는 포장재를 필요로 합니다. 완제품이 아니라 그 구성 요소에 대한 요청이며, 원료 공급사에게는 별도의, 훨씬 안정적인 판매 경로가 됩니다.' },
    ],

    nums_lbl: '오늘의 플랫폼',
    nums_h: '확인 가능한 숫자',
    nums_lead: '아래 수치는 모두 이 파일을 만든 날의 플랫폼 데이터에서 가져온 것입니다. 거래 건수는 공개하지 않습니다: 회사가 설립된 지 얼마 되지 않았고, 스스로 역사를 꾸며내지 않을 것입니다.',
    nums: [
      { v: String(s.total), l: '게재된 제조사' },
      { v: String(s.korea), l: '그중 한국 기업' },
      { v: String(s.langs), l: '프로필마다 지원하는 언어' },
      { v: String(s.pages), l: '사이트 페이지' },
      { v: String(s.posts), l: '제품·기술 관련 기사' },
      { v: String(s.pdfs), l: '바이어용 PDF 문서' },
    ],
    nums_note: '프로필과 제품 페이지는 제조사가 보내준 자료로 만들며, 서면 동의를 받은 뒤에만 게재합니다.',

    listing_lbl: '제조사에게',
    listing_h: '게재가 주는 것',
    listing_lead: '게재는 무료이며 어떤 의무도 발생하지 않습니다.',
    listing: [
      { n: `${s.langs}개 언어 프로필`, d: `${langNamesList('ko')}로 된 회사 페이지와 제품 페이지. 바이어가 자기 언어로 귀사에 대해 읽습니다.` },
      { n: '귀사 자료로 만든 문서', d: '거래 조건서와 프레젠테이션을 페이지와 같은 데이터로 생성합니다. 바이어가 내려받아 사내에서 공유할 수 있습니다.' },
      { n: '카드가 아니라 이야기', d: '제품 뒤에 있는 기술을 글로 씁니다. 브랜드를 처음 접한 바이어도 무엇이 다른지 이해하게 됩니다.' },
      { n: '연락처는 비공개', d: '제조사의 직접 연락처는 게재하지 않습니다. 문의는 먼저 저희에게 오고, 확인한 뒤 수치와 조건을 담아 전달합니다.' },
    ],
    listing_note: '가격은 제조사가 요청한 경우에만 게재합니다. 기본값은 「가격 문의」입니다.',

    shot_lbl: '실제 모습',
    shot_h: '플랫폼 위의 제조사 페이지',
    shot_url: 'teranovagroup.com/ko/catalog/dreamcos/',
    shot_cap: `한국 화장품 그룹의 프로필: 직접 방문 사진, 제품 카탈로그, 기사와 문서 — 모두 ${s.langs}개 언어로 제공됩니다.`,

    verify_lbl: '정직함',
    verify_h: '두 가지 표시, 그 중간은 없음',
    verify_lead: '바이어는 각 정보가 어디서 왔는지 알아야 합니다. 그래서 저희는 정확히 두 가지 표시만 사용하며 그 경계를 흐리지 않습니다.',
    verify: [
      { n: '확인함 — 직접 방문', d: '저희 직원이 사무실이나 공장을 직접 찾아가 경영진을 만나고 사진을 촬영했습니다. 페이지에 날짜와 사진이 함께 실립니다. 전시회에서의 만남은 방문으로 보지 않습니다.' },
      { n: '회사 제공 정보', d: '기본 표시입니다. 페이지의 모든 내용이 제조사 자료에서 나왔음을 작은 글씨가 아니라 분명하게 밝힙니다.' },
    ],
    verify_note: '인증과 등록은 회사가 밝힌 내용으로 표시합니다. 사본은 플랫폼에 공개되지 않고 거래 단계에서 바이어에게 전달됩니다.',

    deal_lbl: '진행 방식',
    deal_h: '거래가 진행되는 과정',
    deal: [
      { n: '문의', d: '바이어가 저희에게 연락합니다. 국가, 판매 채널, 물량, 직접 수입이 가능한지를 확인합니다.' },
      { n: '요청서', d: '제조사에게는 회사 이름이 아니라 수치와 조건이 담긴 요청을 전달합니다. 확인을 통과하지 못한 문의는 제조사에게 전달되지 않습니다.' },
      { n: '소개', d: '구체화되면 양측이 저희와 함께 한자리에 앉습니다. 이 단계에서 정보를 감추지 않습니다.' },
      { n: '계약', d: '바이어, 제조사, Teranova의 3자 계약입니다. 물품 대금은 제조사에 직접 지급되며, 저희 수수료는 같은 계약의 별도 항목입니다.' },
      { n: '실행', d: '물류, 서류, 통관, 번역 — 이 거래에서 저희가 맡는 범위는 계약서에 명시됩니다.' },
    ],

    cost_lbl: '비용',
    cost_big: '거래 전까지 비용 0원',
    cost_lead: '게재는 무료입니다. 거래가 성사되기 전까지 제조사는 아무것도 지불하지 않습니다.',
    cost: [
      { n: '게재와 업데이트', d: '무료입니다. 신제품, 인증, 회사 소식은 보내주시는 대로 프로필에 반영됩니다.' },
      { n: '수수료', d: '성사된 거래에 대해 지급되며 3자 계약에 기재됩니다. 귀사 가격에 붙는 마진이나 숨은 비용이 아닙니다. 요율은 거래에 따라 다르며 서명 전에 합의합니다.' },
      { n: '물류와 브로커 비용', d: '별도로 산정되며 인보이스에 항목별로 전부 표시됩니다.' },
    ],

    markets_lbl: '지역',
    markets_h: '시장과 채널',
    markets_groups: [
      { n: '라틴아메리카', v: '멕시코 · 브라질 · 아르헨티나 · 칠레 · 콜롬비아 · 페루 · 우루과이 · 파라과이' },
      { n: '유럽과 CIS', v: '유럽연합 · 튀르키예 · 러시아 및 CIS 국가' },
      { n: '현지 거점', v: '한국 · 일본 · 중국 · 튀르키예' },
    ],
    channels_h: '채널',
    channels: ['수입사와 유통사', '약국 체인 및 전문 리테일', '클리닉과 살롱', '마켓플레이스와 이커머스', '브랜드 소유자와 위탁생산'],
    markets_note: '제조사에게 이미 공식 파트너가 있는 시장에는 접근하지 않습니다. 닫아야 할 지역을 알려주시면 그대로 지킵니다.',

    cats_lbl: '분야',
    cats_h: '취급 분야',
    cats: [
      { n: '화장품과 뷰티', d: '완제품 브랜드, OEM 및 ODM' },
      { n: '의료·에스테틱', d: '기기, 소모품, 인젝터블 라인' },
      { n: '화학·소재', d: '원료, 활성 성분, 포장재' },
      { n: '산업 장비', d: '컴프레서, 리프팅 및 세정 장비' },
      { n: '선박 기자재', d: '선단을 위한 부품과 자재' },
      { n: '상용차', d: '특수 차량과 부품' },
    ],
    cats_note: '승용차와 그 부품은 취급하지 않습니다.',

    need_lbl: '첫걸음',
    need_h: '게재를 위해 필요한 것',
    need_lead: '다섯 가지이며, 이 단계에서 공유를 망설일 만한 서류는 없습니다.',
    need: [
      { n: '서면 동의', d: '귀사 자료를 사용해도 좋다는 이메일 한 줄이면 충분합니다.' },
      { n: '카탈로그와 이미지', d: '제품 사진과 카탈로그. 명칭과 용량은 라벨에 적힌 그대로 부탁드립니다. 게재 전에 페이지와 라벨을 대조합니다.' },
      { n: '보유 인증', d: '어떤 인증을 보유했고 무엇을 커버하는지. 사본은 거래 단계에서만 필요합니다.' },
      { n: '닫힌 지역', d: '이미 공식 파트너가 있는 국가.' },
      { n: '가격은 선택', d: '공개를 원하지 않으시면 페이지에는 「가격 문의」만 표시됩니다.' },
    ],

    cta_h: '이야기를 나눠볼까요',
    cta_d: '이 메일에 회신해 주시면 보내주신 자료로 프로필을 만들어 링크를 보내드리고, 요청하시는 수정은 당일에 반영합니다. 먼저 이야기를 나누고 싶으시면 귀사, 저희 쪽, 또는 온라인에서 만날 수 있습니다.',
    cta_mail: 'info@teranovagroup.com',
    cta_site: 'teranovagroup.com',
    cta_note: 'Teranova Group은 거래 플랫폼이며, 법인은 Teranova Group Co., Ltd.입니다.',
  }),
};
