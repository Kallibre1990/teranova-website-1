/* Тексты продающей презентации компании.

   Отличие от teranova-deck-text.mjs: тот дек — сдержанный профиль для
   производителя, который решает, размещаться у нас или нет. Этот — презентация
   для вложения в письмо: её открывает человек, который про нас ничего не знает,
   и решение принимает по первым двум экранам.

   Правила те же и нарушать их нельзя:
   — слова «гарантия» нет ни в одной форме (устав);
   — цифры приходят из данных витрины на момент сборки, руками не вписываются;
   — про число сделок не говорится ничего, ни цифрой, ни намёком;
   — ставка комиссии не публикуется. */

export const TEXTS = {
  ru: (s) => ({
    lang: 'ru',
    eyebrow: 'Teranova Group · презентация компании',
    h1: 'Teranova Group',
    tagline: 'Корейское производство — покупателям по всему миру',
    descriptor: 'B2B-платформа и сопровождение сделки целиком · Корея',
    coverFoot: 'AIA Group Ltd. · Республика Корея',
    coverMail: 'info@teranovagroup.com · teranovagroup.com',

    /* 2. Заявление */
    claim_lbl: 'Что мы делаем',
    claim: 'Мы соединяем корейского производителя с покупателем за рубежом и доводим сделку до конца — а не до знакомства.',
    claim_sub: 'Teranova Group зарегистрирована в Корее, юридическое лицо — AIA Group Ltd. Мы работаем на стороне покупателя: он приносит требование, мы находим производителя, который действительно ему отвечает, и дальше ведём переговоры, документы, логистику, таможенное оформление и перевод.',
    claim_facts: ['Зарегистрированы в Корее', 'Без склада и перепродажи', 'Оплата с состоявшейся сделки', 'Одиннадцать языков'],

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
      { v: '11', l: 'языков у каждого профиля' },
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
      { n: 'Профиль на одиннадцати языках', d: 'Страница компании и страницы продукции на английском, корейском, китайском, японском, русском, испанском, португальском, немецком, французском, итальянском и турецком. Покупатель читает о вас на своём языке.' },
      { n: 'Документы из ваших же данных', d: 'Условия сотрудничества и презентация собираются из тех же данных, что и страница. Покупатель скачивает их и показывает внутри своей компании.' },
      { n: 'Не карточка, а рассказ', d: 'Мы пишем о технологии, которая стоит за продукцией, чтобы покупатель, впервые услышавший о вас, понял, чем вы отличаетесь.' },
      { n: 'Ваши контакты закрыты', d: 'Прямые контакты производителя мы не публикуем. Запросы приходят сначала к нам, мы их проверяем и передаём вам уже с цифрами и условиями.' },
    ],
    listing_note: 'Цены публикуются только по вашей просьбе. По умолчанию на страницах стоит «цена по запросу».',

    /* 6. Экран витрины */
    shot_lbl: 'Как это выглядит',
    shot_h: 'Страница производителя на витрине',
    shot_url: 'teranovagroup.com/catalog/dreamcos/',
    shot_cap: 'Профиль корейской косметической группы: фотографии с личного визита, каталог продукции, статьи и документы — всё на одиннадцати языках.',

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
    cta_note: 'Teranova Group — совместный бренд AIA Group Ltd и Teranova Group Ltd.',
  }),

  en: (s) => ({
    lang: 'en',
    eyebrow: 'Teranova Group · company presentation',
    h1: 'Teranova Group',
    tagline: 'Korean manufacturing, taken to buyers worldwide',
    descriptor: 'A B2B platform and full deal support · Korea',
    coverFoot: 'AIA Group Ltd. · Republic of Korea',
    coverMail: 'info@teranovagroup.com · teranovagroup.com',

    claim_lbl: 'What we do',
    claim: 'We connect a Korean manufacturer with a buyer abroad and carry the deal to the end — not to the introduction.',
    claim_sub: 'Teranova Group is registered in Korea; the legal entity is AIA Group Ltd. We work on the buyer\u2019s side: he brings a requirement, we find the manufacturer who genuinely fits it, and from there we run the negotiation, the documents, the logistics, the customs clearance and the translation.',
    claim_facts: ['Registered in Korea', 'No stock, no resale', 'Paid on a completed deal', 'Eleven languages'],

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
      { v: '11', l: 'languages for every profile' },
      { v: String(s.pages), l: 'pages on the site' },
      { v: String(s.posts), l: 'articles on products and technology' },
      { v: String(s.pdfs), l: 'PDF documents for buyers' },
    ],
    nums_note: 'A profile and its product pages are built from the materials the manufacturer sent us, and published only after his written consent.',

    listing_lbl: 'For the manufacturer',
    listing_h: 'What a listing gives you',
    listing_lead: 'Publication is free and creates no obligation.',
    listing: [
      { n: 'A profile in eleven languages', d: 'Company page and product pages in English, Korean, Chinese, Japanese, Russian, Spanish, Portuguese, German, French, Italian and Turkish. A buyer reads about you in his own language.' },
      { n: 'Documents built from your data', d: 'A terms sheet and a presentation, generated from the same data as the page. A buyer downloads them and circulates them inside his company.' },
      { n: 'A story, not a card', d: 'We write about the technology behind the products, so that a buyer who has never heard of you understands what makes you different.' },
      { n: 'Your contacts stay closed', d: 'We do not publish a manufacturer\u2019s direct contacts. Enquiries reach us first; we qualify them and pass them on with figures and terms attached.' },
    ],
    listing_note: 'Prices are published only if you ask for it. By default the pages say \u201cprice on request\u201d.',

    shot_lbl: 'How it looks',
    shot_h: 'A manufacturer page on the platform',
    shot_url: 'teranovagroup.com/en/catalog/dreamcos/',
    shot_cap: 'The profile of a Korean cosmetics group: photographs from a personal visit, a product catalogue, articles and documents — all in eleven languages.',

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
    cta_note: 'Teranova Group is a joint brand of AIA Group Ltd and Teranova Group Ltd.',
  }),
};
