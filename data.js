/* ============================================================
   TERANOVA GROUP — DATA LAYER (single source of truth)
   ------------------------------------------------------------
   ⚠️ ВСЕ ДАННЫЕ НИЖЕ — ДЕМОНСТРАЦИОННЫЕ (DEMO).
   Названия, адреса, имена, телефоны, email и цены вымышлены.
   Заменить реальными проверенными данными перед публичным запуском.

   Структура спроектирована под лёгкую миграцию в Airtable:
   - каждый поставщик = одна "запись" с плоскими полями;
   - products = связанная таблица (name / priceUSD / unit / moq);
   - переводимые поля = объект {ru, en, ko}.

   Цены: средние ориентировочные, EXW. priceUSD — число (для
   отображения и будущих расчётов). Точная цена — только по запросу.
   ============================================================ */

const DATA = {

  /* ---------- ПОСТАВЩИКИ ---------- */
  suppliers: [

    /* A1 — Marine */
    {
      id: "hanseong-marine",
      demo: true,
      category: "marine",
      name: "Hanseong Marine Supply Co., Ltd.",
      address: { ru: "45, Haeyang-ro, Yeongdo-gu, Busan, Korea", en: "45, Haeyang-ro, Yeongdo-gu, Busan, Korea", ko: "부산광역시 영도구 해양로 45" },
      verification: "visited",
      desc: {
        ru: "Судовое оборудование и комплектующие из Пусана: арматура, насосы, палубная фурнитура, канаты.",
        en: "Marine equipment and components from Busan: valves, pumps, deck hardware, ropes.",
        ko: "부산 소재 선박 장비·부품: 밸브, 펌프, 데크 철물, 로프."
      },
      contact: { person: "Mr. Kim Jae-won", role: { ru: "Директор по продажам", en: "Sales Director", ko: "영업 이사" }, email: "jw.kim@hanseong-marine-demo.kr", phone: "+82-51-XXXX-XXXX" },
      certs: ["ISO 9001", "Korean Register (KR) type approval"],
      exportExp: { ru: "Юго-Восточная Азия, Ближний Восток", en: "Southeast Asia, Middle East", ko: "동남아시아, 중동" },
      leadTime: { ru: "2–4 недели", en: "2–4 weeks", ko: "2~4주" },
      photos: 3,
      products: [
        { name: { ru: "Судовой шаровой кран DN50", en: "Marine ball valve DN50", ko: "선박용 볼 밸브 DN50" }, priceUSD: 85, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 50 },
        { name: { ru: "Швартовный канат (ПП, 24 мм, бухта 220 м)", en: "Mooring rope (PP, 24 mm, 220 m coil)", ko: "계류 로프 (PP, 24mm, 220m 릴)" }, priceUSD: 420, unit: { ru: "бухта", en: "coil", ko: "릴" }, moq: 10 },
        { name: { ru: "Палубная утка (оцинков., 300 мм)", en: "Deck cleat (galvanized, 300 mm)", ko: "데크 클리트 (아연도금, 300mm)" }, priceUSD: 32, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 100 },
        { name: { ru: "Судовой центробежный насос (малый)", en: "Marine centrifugal pump (small)", ko: "선박용 원심 펌프 (소형)" }, priceUSD: 640, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 5 }
      ]
    },

    /* A2 — Cosmetics */
    {
      id: "seorabeol-cosmetics",
      demo: true,
      category: "cosmetics",
      name: "Seorabeol Cosmetics Lab",
      address: { ru: "12, Gajangsaneop-ro, Osan-si, Gyeonggi-do, Korea", en: "12, Gajangsaneop-ro, Osan-si, Gyeonggi-do, Korea", ko: "경기도 오산시 가장산업로 12" },
      verification: "visited",
      desc: {
        ru: "Контрактное производство косметики (OEM/ODM): маски, сыворотки, солнцезащита, ампулы.",
        en: "Contract cosmetics manufacturing (OEM/ODM): masks, serums, sun care, ampoules.",
        ko: "화장품 OEM/ODM 제조: 마스크, 세럼, 선케어, 앰플."
      },
      contact: { person: "Ms. Park Soo-jin", role: { ru: "Менеджер по экспорту", en: "Export Manager", ko: "수출 매니저" }, email: "sjpark@seorabeol-lab-demo.kr", phone: "+82-31-XXXX-XXXX" },
      certs: ["CGMP", "ISO 22716", "vegan (part of range)"],
      exportExp: { ru: "СНГ, Юго-Восточная Азия · OEM/ODM", en: "CIS, Southeast Asia · OEM/ODM", ko: "CIS, 동남아시아 · OEM/ODM" },
      leadTime: { ru: "30–45 дней (вкл. OEM)", en: "30–45 days (incl. OEM)", ko: "30~45일 (OEM 포함)" },
      photos: 3,
      products: [
        { name: { ru: "Гидрогелевая маска (лист)", en: "Hydrogel mask (sheet)", ko: "하이드로겔 마스크 (시트)" }, priceUSD: 0.35, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 3000 },
        { name: { ru: "Сыворотка с витамином C, 30 мл", en: "Vitamin C serum, 30 ml", ko: "비타민C 세럼, 30ml" }, priceUSD: 3.2, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 1000 },
        { name: { ru: "Солнцезащитный кушон SPF50+", en: "Sun cushion SPF50+", ko: "선쿠션 SPF50+" }, priceUSD: 4.8, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 1000 },
        { name: { ru: "Ампульный концентрат, 50 мл", en: "Ampoule concentrate, 50 ml", ko: "앰플 농축액, 50ml" }, priceUSD: 5.1, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 1000 }
      ]
    },

    /* A3 — Cosmetics (provided) */
    {
      id: "kglow-beauty",
      demo: true,
      category: "cosmetics",
      name: "K-Glow Beauty Co.",
      address: { ru: "88, Bupyeong-daero, Bupyeong-gu, Incheon, Korea", en: "88, Bupyeong-daero, Bupyeong-gu, Incheon, Korea", ko: "인천광역시 부평구 부평대로 88" },
      verification: "provided",
      statusNote: { ru: "Визит запланирован", en: "Visit scheduled", ko: "방문 예정" },
      desc: {
        ru: "Декоративная косметика: помады, палетки, тушь. Развивающийся экспортёр.",
        en: "Color cosmetics: lipsticks, palettes, mascara. Growing exporter.",
        ko: "색조 화장품: 립스틱, 팔레트, 마스카라. 성장 중인 수출 업체."
      },
      contact: { person: "Mr. Lee Min-ho", role: { ru: "Зарубежные продажи", en: "Overseas Sales", ko: "해외 영업" }, email: "minho.lee@kglow-beauty-demo.kr", phone: "+82-32-XXXX-XXXX" },
      certs: ["CGMP"],
      exportExp: { ru: "Ограниченный, наращивает", en: "Limited, growing", ko: "제한적, 확대 중" },
      leadTime: { ru: "3–5 недель", en: "3–5 weeks", ko: "3~5주" },
      photos: 2,
      products: [
        { name: { ru: "Матовая помада", en: "Matte lipstick", ko: "매트 립스틱" }, priceUSD: 1.1, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 1000 },
        { name: { ru: "Палетка теней (9 цветов)", en: "Eyeshadow palette (9 shades)", ko: "아이섀도우 팔레트 (9색)" }, priceUSD: 3.9, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 500 },
        { name: { ru: "Тушь для ресниц", en: "Mascara", ko: "마스카라" }, priceUSD: 1.4, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 1000 }
      ]
    },

    /* A4 — Medical */
    {
      id: "daehan-medtech",
      demo: true,
      category: "medical",
      name: "Daehan MedTech Co., Ltd.",
      address: { ru: "200, Maeji-ro, Wonju-si, Gangwon-do, Korea", en: "200, Maeji-ro, Wonju-si, Gangwon-do, Korea", ko: "강원도 원주시 매지로 200" },
      verification: "visited",
      desc: {
        ru: "Медицинские расходные материалы: шприцы, перчатки, инфузионные системы, перевязка.",
        en: "Medical disposables: syringes, gloves, IV sets, wound dressings.",
        ko: "의료 소모품: 주사기, 장갑, 수액 세트, 상처 드레싱."
      },
      contact: { person: "Dr. Choi Hyun-woo", role: { ru: "Развитие бизнеса", en: "Business Development", ko: "사업 개발" }, email: "hw.choi@daehan-medtech-demo.kr", phone: "+82-33-XXXX-XXXX" },
      certs: ["ISO 13485", "CE", "MFDS (KFDA)"],
      exportExp: { ru: "Есть", en: "Yes", ko: "있음" },
      leadTime: { ru: "3–6 недель", en: "3–6 weeks", ko: "3~6주" },
      regNote: {
        ru: "Медицинские товары — регуляторно чувствительная категория: проверьте сертификаты и импортные правила вашей страны.",
        en: "Medical goods are a regulated category: verify certificates and your country's import rules.",
        ko: "의료 제품은 규제 대상 품목입니다: 인증서와 수입국 규정을 확인하십시오."
      },
      photos: 3,
      products: [
        { name: { ru: "Одноразовый шприц 5 мл", en: "Disposable syringe 5 ml", ko: "일회용 주사기 5ml" }, priceUSD: 3.5, unit: { ru: "100 шт", en: "100 pcs", ko: "100개" }, moq: 10000 },
        { name: { ru: "Нитриловые смотровые перчатки", en: "Nitrile exam gloves", ko: "니트릴 검사용 장갑" }, priceUSD: 4.2, unit: { ru: "кор. (100 шт)", en: "box (100 pcs)", ko: "박스 (100개)" }, moq: 1000, moqUnit: { ru: "кор.", en: "boxes", ko: "박스" } },
        { name: { ru: "Инфузионная система IV", en: "IV infusion set", ko: "IV 수액 세트" }, priceUSD: 0.28, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 5000 },
        { name: { ru: "Перевязочный материал (упак.)", en: "Wound dressing (pack)", ko: "상처 드레싱 (팩)" }, priceUSD: 0.9, unit: { ru: "упак.", en: "pack", ko: "팩" }, moq: 2000 }
      ]
    },

    /* A5 — Industrial */
    {
      id: "jinheung-machinery",
      demo: true,
      category: "industrial",
      name: "Jinheung Industrial Machinery Co.",
      address: { ru: "77, Gongdan-ro, Seongsan-gu, Changwon-si, Gyeongsangnam-do, Korea", en: "77, Gongdan-ro, Seongsan-gu, Changwon-si, Gyeongsangnam-do, Korea", ko: "경상남도 창원시 성산구 공단로 77" },
      verification: "visited",
      desc: {
        ru: "Промышленное оборудование: насосы, электродвигатели, арматура, редукторы.",
        en: "Industrial equipment: pumps, electric motors, valves, gear reducers.",
        ko: "산업 장비: 펌프, 전동기, 밸브, 감속기."
      },
      contact: { person: "Mr. Jung Tae-suk", role: { ru: "Директор по экспорту", en: "Export Director", ko: "수출 이사" }, email: "ts.jung@jinheung-machinery-demo.kr", phone: "+82-55-XXXX-XXXX" },
      certs: ["ISO 9001", "CE"],
      exportExp: { ru: "Устоявшийся", en: "Established", ko: "안정적" },
      leadTime: { ru: "4–8 недель", en: "4–8 weeks", ko: "4~8주" },
      photos: 3,
      products: [
        { name: { ru: "Гидравлический шестерённый насос (средний)", en: "Hydraulic gear pump (medium)", ko: "유압 기어 펌프 (중형)" }, priceUSD: 180, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 10 },
        { name: { ru: "Электродвигатель 3-фазный 5.5 кВт", en: "3-phase electric motor 5.5 kW", ko: "3상 전동기 5.5kW" }, priceUSD: 210, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 10 },
        { name: { ru: "Промышленная задвижка DN100", en: "Industrial gate valve DN100", ko: "산업용 게이트 밸브 DN100" }, priceUSD: 95, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 20 },
        { name: { ru: "Червячный редуктор (средний)", en: "Worm gear reducer (medium)", ko: "웜 기어 감속기 (중형)" }, priceUSD: 260, unit: { ru: "шт", en: "pc", ko: "개" }, moq: 5 }
      ]
    }
  ],

  /* ---------- КОМАНДА (демо) ---------- */
  team: [
    {
      name: { ru: "Антон Мадельканов", en: "Anton Madelkanov", ko: "Anton Madelkanov" },
      role: { ru: "Основатель Teranova Group · CEO AIA Group", en: "Founder, Teranova Group · CEO, AIA Group", ko: "Teranova Group 창업자 · AIA Group 대표" },
      email: "madelkanov@teranovagroup.com",
      bio: { ru: "Основатель и архитектор проекта. Отвечает за стратегию, развитие сети корейских поставщиков и личную верификацию — выезд на производство, встречи с руководством, фотодокументация. Курирует ключевые сделки и международное направление.", en: "Founder and architect of the project. Responsible for strategy, the Korean supplier network and personal verification — production visits, meetings with management, photo documentation. Oversees key deals and the international direction.", ko: "프로젝트의 창업자이자 설계자. 전략, 한국 공급업체 네트워크 개발, 직접 검증(생산 현장 방문, 경영진 면담, 사진 기록)을 담당. 핵심 거래와 국제 부문을 총괄." }
    },
    {
      name: { ru: "Ирина Тутова", en: "Irene Tutova", ko: "Irene Tutova" },
      role: { ru: "CEO Teranova Group", en: "CEO, Teranova Group", ko: "Teranova Group 대표" },
      email: "tutova@teranovagroup.com",
      bio: { ru: "Руководит операционной деятельностью компании — управление, развитие, сопровождение клиентов и партнёрских отношений.", en: "Leads the company's operations — management, development, client and partner relations.", ko: "회사의 운영을 총괄 — 관리, 개발, 고객 및 파트너 관계." }
    },
    {
      name: { ru: "Ха Чонсу (Денис) 하정수", en: "Ha Jeong-su (Denis) 하정수", ko: "하정수 (Denis)" },
      role: { ru: "Менеджер (과장) — поставщики", en: "Manager (과장) — Suppliers", ko: "과장 — 공급업체" },
      email: "ha@teranovagroup.com",
      bio: { ru: "Работа с корейскими поставщиками. Коммуникация на корейском и русском, сопровождение заказов, согласование цен и условий поставки.", en: "Works with Korean suppliers. Communication in Korean and Russian, order support, negotiation of prices and supply terms.", ko: "한국 공급업체 담당. 한국어·러시아어 소통, 주문 지원, 가격 및 공급 조건 협의." }
    },
    {
      name: { ru: "Лариса Ан 안라리사", en: "Larisa An 안라리사", ko: "안라리사" },
      role: { ru: "Менеджер (과장) — покупатели", en: "Manager (과장) — Buyers", ko: "과장 — 바이어" },
      email: "an@teranovagroup.com",
      bio: { ru: "Работа с покупателями. Приём и координация запросов, сопровождение сделок, коммуникация между сторонами.", en: "Works with buyers. Intake and coordination of requests, deal support, communication between parties.", ko: "바이어 담당. 요청 접수 및 조율, 거래 지원, 양측 간 소통." }
    }
  ],

  /* ---------- КЕЙСЫ (демо) ---------- */
  cases: [
    {
      title: { ru: "Косметика · Казахстан", en: "Cosmetics · Kazakhstan", ko: "화장품 · 카자흐스탄" },
      text: {
        ru: "Подобрали корейскую OEM-лабораторию и сопроводили заказ гидрогелевых масок (партия 50 000 шт) для дистрибьютора из Алматы: подбор, контроль качества, логистика, таможня.",
        en: "Sourced a Korean OEM lab and supported an order of hydrogel masks (50,000 units) for an Almaty distributor: sourcing, quality control, logistics, customs.",
        ko: "한국 OEM 연구소를 발굴하고 알마티 유통업체의 하이드로겔 마스크 주문(50,000개)을 지원: 소싱, 품질 관리, 물류, 통관."
      }
    },
    {
      title: { ru: "Marine · Вьетнам", en: "Marine · Vietnam", ko: "선박 · 베트남" },
      text: {
        ru: "Нашли поставщика палубной фурнитуры и швартовных канатов для верфи в Хошимине, организовали проверку и отгрузку из Пусана.",
        en: "Found a supplier of deck hardware and mooring ropes for a Ho Chi Minh City shipyard, arranged inspection and shipment from Busan.",
        ko: "호치민 조선소를 위한 데크 철물·계류 로프 공급업체를 발굴하고 부산에서 검수 및 선적을 주선."
      }
    },
    {
      title: { ru: "Медицина · Узбекистан", en: "Medical · Uzbekistan", ko: "의료 · 우즈베키스탄" },
      text: {
        ru: "Сопроводили поставку нитриловых перчаток (40 000 коробок) медицинскому импортёру в Ташкенте, включая сертификацию и оформление.",
        en: "Supported a delivery of nitrile gloves (40,000 boxes) to a medical importer in Tashkent, including certification and paperwork.",
        ko: "타슈켄트 의료 수입업체에 니트릴 장갑(40,000박스) 공급을 인증 및 서류 처리 포함하여 지원."
      }
    }
  ],

  /* ---------- FAQ ---------- */
  faq: {
    ru: [
      { q: "Почему цены указаны как средние и ориентировочные?", a: "EXW-цены зависят от спецификации, объёма, упаковки, курса и текущих условий завода. Мы показываем среднюю ориентировочную цену, чтобы дать представление о порядке стоимости. Точную цену под ваш заказ мы запрашиваем у поставщика по вашему запросу." },
      { q: "Как проходит проверка поставщика?", a: "Мы лично выезжаем в офис и/или на производство, встречаемся с руководством и делаем фотофиксацию визита. Бейдж «Проверен — личный визит» означает именно факт состоявшегося визита, а не гарантию качества. Если визит ещё не состоялся, статус — «Данные предоставлены компанией»." },
      { q: "Как устроено сопровождение сделки и оплата?", a: "Мы организуем и координируем сделку через проверенных партнёров: подбор товара, контроль качества, логистика, этапы оплат, таможенное оформление и отгрузка из Кореи. Конкретная схема и этапы оплаты согласуются под каждый заказ." },
      { q: "Что с качеством товара?", a: "Мы не выступаем производителем и не даём гарантий качества от своего имени. Мы помогаем организовать контроль качества и работаем с поставщиками, которых посетили лично. Условия качества фиксируются в договоре с поставщиком." },
      { q: "Как начать работу?", a: "Оставьте запрос в разделе «Для покупателей»: укажите товар или категорию, объём и сроки. Мы свяжемся с вами, уточним детали и подготовим предложение." }
    ],
    en: [
      { q: "Why are prices shown as average and indicative?", a: "EXW prices depend on specification, volume, packaging, exchange rate and the factory's current terms. We show an average indicative price to give you a sense of the cost range. We request an exact quote for your specific order on request." },
      { q: "How does supplier checking work?", a: "We personally visit the office and/or production site, meet management and document the visit with photos. The badge \"Verified — site visit\" reflects the fact of a completed visit, not a guarantee of quality. If a visit has not yet happened, the status is \"Company-provided data\"." },
      { q: "How do deal support and payment work?", a: "We organize and coordinate the deal through trusted partners: sourcing, quality control, logistics, payment stages, customs clearance and shipment from Korea. The exact scheme and payment milestones are agreed per order." },
      { q: "What about product quality?", a: "We are not the manufacturer and do not give quality guarantees in our own name. We help arrange quality control and work with suppliers we have visited in person. Quality terms are fixed in the contract with the supplier." },
      { q: "How do I get started?", a: "Submit a request in the \"For buyers\" section: specify the product or category, volume and timeline. We will contact you, clarify the details and prepare an offer." }
    ],
    ko: [
      { q: "가격이 평균·참고용으로 표시되는 이유는?", a: "EXW 가격은 사양, 수량, 포장, 환율, 공장의 현재 조건에 따라 달라집니다. 비용 범위를 가늠할 수 있도록 평균 참고 가격을 표시합니다. 귀하의 주문에 대한 정확한 견적은 요청 시 공급업체에 문의합니다." },
      { q: "공급업체 점검은 어떻게 이루어지나요?", a: "당사는 직접 사무실 및/또는 생산 현장을 방문하고 경영진을 만나며 방문을 사진으로 기록합니다. \"검증 완료 — 현장 방문\" 배지는 품질 보증이 아니라 방문이 완료되었다는 사실을 의미합니다. 아직 방문하지 않은 경우 상태는 \"업체 제공 정보\"입니다." },
      { q: "거래 지원과 결제는 어떻게 진행되나요?", a: "당사는 검증된 파트너를 통해 거래를 조직하고 조율합니다: 소싱, 품질 관리, 물류, 결제 단계, 통관, 한국에서의 선적. 구체적인 방식과 결제 단계는 주문별로 협의합니다." },
      { q: "제품 품질은 어떻게 되나요?", a: "당사는 제조사가 아니며 자사 명의로 품질을 보증하지 않습니다. 품질 관리를 조직하도록 돕고 직접 방문한 공급업체와 협력합니다. 품질 조건은 공급업체와의 계약에 명시됩니다." },
      { q: "어떻게 시작하나요?", a: "\"바이어용\" 섹션에서 요청을 남겨주세요: 제품 또는 분야, 수량, 일정을 알려주시면 됩니다. 당사가 연락하여 세부 사항을 확인하고 제안을 준비합니다." }
    ]
  }
};
