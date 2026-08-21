/* Тексты профиля компании. Каждый язык — функция от статистики витрины, чтобы
   цифра производителей приходила из данных, а не из памяти автора.

   Источники текста: страницы сайта «О компании», «Поставщикам», «Как мы
   проверяем», «Вопросы» и Teranova_CHARTER. Ничего сверх них не добавлено. */

export const TEXTS = {
  ko: (s) => ({
    eyebrow: 'Teranova Group · 회사 소개',
    tagline: '한국 제조사를 해외 바이어에게',
    descriptor: 'B2B 플랫폼이자 거래 전 과정 지원 · 한국',

    who_h: '저희는 누구인가',
    who: [
      'Teranova Group은 한국에 등록된 무역 플랫폼입니다. 법인은 AIA Group Ltd.이며 창업자는 안톤 마델카노프입니다. 저희는 바이어 측에서 일합니다. 파트너가 요구 사항을 가져오면 실제로 그 조건에 맞는 제조사를 찾고, 협상·서류·물류·통관·번역까지 거래 전 과정을 진행합니다.',
      '재고를 보유하지 않으며 재판매도 하지 않습니다. 성사된 거래에 대한 수수료로 보수를 받기 때문에 특정 제조사를 무리하게 밀 이유가 없습니다. 요구 사항이 제조사의 실제 생산 범위와 맞지 않으면 그대로 말씀드립니다.',
      `현재 플랫폼에는 ${s.total}개 제조사가 게재되어 있으며 그중 ${s.korea}곳이 한국 기업입니다. 각 제조사마다 회사 프로필과 제품 페이지가 11개 언어로 있으며, 제조사가 제공한 자료로 제작하고 서면 동의를 받은 뒤에만 게재합니다.`,
    ],
    who_facts: ['한국 등록 법인', '재고 없음, 재판매 없음', '성사된 거래에 대한 수수료', '11개 언어'],

    listing_h: '게재가 제조사에 주는 것',
    listing_lead: '게재는 제조사에 무료이며, 어떤 의무도 발생하지 않습니다.',
    listing: [
      { n: '11개 언어 프로필', d: '영어, 한국어, 중국어, 일본어, 러시아어, 스페인어, 포르투갈어, 독일어, 프랑스어, 이탈리아어, 터키어로 된 회사 페이지와 제품 페이지. 바이어가 자기 언어로 귀사를 읽습니다.' },
      { n: '귀사 자료로 만든 문서', d: '페이지와 같은 데이터로 생성되는 거래 조건서와 소개 자료. 바이어가 내려받아 사내에서 회람할 수 있습니다.' },
      { n: '카드가 아니라 이야기', d: '제품 뒤에 있는 기술을 글로 설명합니다. 브랜드를 처음 접한 바이어도 무엇이 다른지 이해하게 됩니다.' },
      { n: '연락처는 공개하지 않습니다', d: '제조사의 직접 연락처는 게재하지 않습니다. 문의는 먼저 저희에게 오고, 저희가 확인한 뒤 전달합니다.' },
    ],
    listing_note: '가격은 제조사가 요청한 경우에만 게재합니다. 기본값은 「가격 문의」입니다.',

    verify_h: '제조사를 어떻게 소개하는가',
    verify_lead: '바이어는 정보의 출처를 알아야 합니다. 저희는 두 가지 표시만 사용하며 그 경계를 흐리지 않습니다.',
    verify: [
      { n: '확인함 — 직접 방문', d: '창업자가 사무실이나 공장을 직접 찾아가 경영진을 만나고 사진을 촬영한 경우입니다. 페이지에 날짜와 사진이 함께 실립니다. 전시회에서의 만남은 방문으로 보지 않습니다.' },
      { n: '회사 제공 정보', d: '기본 표시입니다. 페이지의 모든 내용이 제조사가 제공한 자료에서 나왔음을 페이지에 그대로 밝힙니다.' },
    ],
    verify_note: '방문은 저희가 직접 본 것에 대한 기록입니다. 인증과 등록은 회사가 밝힌 내용으로 표시하며, 사본은 거래 단계에서 바이어에게 제공됩니다.',

    deal_h: '거래는 이렇게 진행됩니다',
    deal: [
      { n: '문의', d: '바이어가 저희에게 연락합니다. 국가, 유통 채널, 물량, 그리고 직접 수입이 가능한지 확인합니다.' },
      { n: '구체적인 요청', d: '이름이 아니라 수치와 조건이 담긴 요청을 가져다 드립니다. 확인 과정을 통과하지 못한 문의는 귀사에 전달되지 않습니다.' },
      { n: '소개', d: '구체화되면 귀사와 바이어가 저희와 함께 한자리에 앉습니다. 통화 또는 미팅이며, 저희가 정보를 감추지 않습니다.' },
      { n: '3자 계약', d: '바이어, 제조사, Teranova가 체결합니다. 물품 대금은 귀사에 직접 지급됩니다. 저희 수수료는 같은 계약의 별도 항목이며, 귀사가 서명하므로 그대로 확인하실 수 있습니다.' },
      { n: '실행', d: '물류, 서류, 통관, 번역 가운데 해당 거래에서 저희가 맡는 범위를 계약서에 명시합니다.' },
    ],

    cost_h: '비용은 어떻게 되는가',
    cost_lead: '게재에는 비용이 없고, 거래가 성사되기 전까지도 비용이 없습니다.',
    cost: [
      { n: '게재와 업데이트', d: '무료입니다. 신제품, 인증, 회사 소식은 보내주시는 대로 프로필에 반영합니다.' },
      { n: '저희 수수료', d: '성사된 거래에 대해 지급되며 3자 계약에 기재됩니다. 귀사 가격에 붙는 마진이 아니고 숨은 비용도 아닙니다. 요율은 거래에 따라 다르며 서명 전에 합의합니다.' },
      { n: '저희가 맡는 범위', d: '거래마다 계약서에 적습니다. 범위가 거래마다 달라지므로, 당연한 것으로 두지 않고 문서로 남깁니다.' },
    ],
    cost_note: '물류와 통관 비용은 별도로 산정하며 인보이스에 그대로 표시합니다.',

    markets_h: '시장, 채널, 카테고리',
    markets_sub1: '시장',
    markets: ['멕시코', '브라질', '아르헨티나', '칠레', '콜롬비아', '페루', '우루과이', '파라과이', '유럽', 'CIS'],
    markets_sub2: '채널',
    channels: ['수입사와 유통사', '약국 및 전문 리테일', '클리닉과 살롱', '마켓플레이스와 이커머스'],
    markets_sub3: '카테고리',
    categories: ['K-뷰티 (OEM/ODM)', '의료·에스테틱', '선박 기자재', '산업 장비', '화학 제품', '상용차'],
    markets_note: '승용차와 그 부품은 취급하지 않습니다. 이미 공식 파트너가 있는 시장에는 접근하지 않으니, 닫아야 할 지역을 알려주시면 그대로 지킵니다.',

    need_h: '게재를 위해 필요한 것',
    need_lead: '다섯 가지이며, 이 단계에서 공유를 망설일 만한 서류는 없습니다.',
    need: [
      { n: '서면 동의', d: '플랫폼에서 귀사를 소개하기 위해 자료를 사용해도 좋다는 이메일 한 줄이면 충분합니다.' },
      { n: '카탈로그와 이미지', d: '제품 사진과 카탈로그. 제품명과 용량은 라벨에 적힌 그대로 부탁드립니다. 게재 전에 페이지와 라벨을 대조합니다.' },
      { n: '보유 인증', d: '어떤 인증과 등록을 보유했는지, 그리고 어떤 제품과 시장에 해당하는지. 사본은 거래 단계에서만 필요합니다.' },
      { n: '닫힌 지역', d: '이미 독점 또는 공식 파트너가 있는 국가. 공급할 수 없는 바이어를 데려가지 않기 위해서입니다.' },
      { n: '가격은 선택', d: '바이어에게 보이길 원하시면 보내주십시오. 원하지 않으시면 페이지에는 「가격 문의」만 표시되고 아무것도 게재되지 않습니다.' },
    ],

    cta_h: '게재를 시작할까요?',
    cta_d: '이 메일에 회신하시거나 저희에게 연락 주십시오. 보내주신 자료로 프로필을 만들어 링크를 보내드리고, 요청하시는 수정은 당일에 반영합니다.',
  }),

  en: (s) => ({
    eyebrow: 'Teranova Group · Company profile',
    tagline: 'Korean manufacturers, taken to buyers abroad',
    descriptor: 'A B2B platform and full deal support · Korea',

    who_h: 'Who we are',
    who: [
      'Teranova Group is a trade platform registered in Korea. The legal entity behind it is AIA Group Ltd.; the founder is Anton Madelkanov. We work on the buyer’s side: a partner brings us a requirement, we find the manufacturer who genuinely fits it, and then carry the deal through — negotiation, documents, logistics, customs clearance and translation.',
      'We hold no stock and we do not resell. We are paid a commission on a completed deal, which is why we have no reason to push one manufacturer over another. It also means we say plainly when a requirement does not fit what a manufacturer actually makes.',
      `Today ${s.total} manufacturers are published on the platform — ${s.korea} of them in Korea. Each has a company profile and product pages in eleven languages, built from the materials the manufacturer provided and published only with written consent.`,
    ],
    who_facts: ['Registered in Korea', 'No stock, no resale', 'Paid on a completed deal', 'Eleven languages'],

    listing_h: 'What a listing gives you',
    listing_lead: 'Publication is free for the manufacturer and creates no obligation on your side.',
    listing: [
      { n: 'A profile in eleven languages', d: 'Company page and product pages in English, Korean, Chinese, Japanese, Russian, Spanish, Portuguese, German, French, Italian and Turkish. A buyer reads about you in their own language.' },
      { n: 'Documents built from your data', d: 'A terms sheet and a presentation, generated from the same data as the page, so a buyer can download them and circulate them internally.' },
      { n: 'Articles, not just a card', d: 'We write about the technology behind your products, so a buyer who has never heard of the brand understands what makes it different.' },
      { n: 'Your contacts stay closed', d: 'Direct contact details are not published. Enquiries come to us first, and we qualify them before they reach you.' },
    ],
    listing_note: 'Prices are published only when the manufacturer asks for it. By default the pages show “price on request”.',

    verify_h: 'How we present a manufacturer',
    verify_lead: 'A buyer needs to know where a fact came from. We use exactly two statuses and never blur the line between them.',
    verify: [
      { n: 'Verified — personal visit', d: 'The founder has been to the office or the plant, met management and taken photographs. The page carries the date and the photographs. A meeting at a trade show does not count as a visit.' },
      { n: 'Information provided by the company', d: 'The default. Everything on the page comes from the manufacturer’s own materials, and the page says so plainly.' },
    ],
    verify_note: 'A visit is a documented fact about what we saw. Certificates and registrations are shown as stated by the company; copies are provided to a buyer at the deal stage.',

    deal_h: 'How a deal runs',
    deal: [
      { n: 'Enquiry', d: 'A buyer comes to us. We check the country, the channel, the volume and whether they are able to import the goods themselves.' },
      { n: 'A concrete request', d: 'We bring you a request with figures and terms, not a name. If an enquiry does not hold up, you never hear about it.' },
      { n: 'Introduction', d: 'When it becomes concrete, you and the buyer sit at the same table with us present — a call or a meeting. We do not hold information back.' },
      { n: 'Tripartite contract', d: 'Signed by the buyer, the manufacturer and Teranova. Payment for the goods goes to you directly. Our commission is a separate line in the same contract, which you sign and therefore see.' },
      { n: 'Execution', d: 'Logistics, documents, customs clearance and translation — the contract states which of these we take on for that particular deal.' },
    ],

    cost_h: 'What it costs you',
    cost_lead: 'Nothing to be listed, and nothing until a deal is done.',
    cost: [
      { n: 'Publication and updates', d: 'Free. New products, certifications and company news are added to your profile as you send them.' },
      { n: 'Our commission', d: 'Paid on a completed deal and written into the tripartite contract. It is not a margin added to your price and not a hidden fee. The rate depends on the deal and is agreed before anything is signed.' },
      { n: 'What we take on', d: 'Stated per deal in the contract, because the scope changes from one deal to the next and we would rather write it down than leave it assumed.' },
    ],
    cost_note: 'Logistics and brokerage are quoted separately and shown in full on the invoice.',

    markets_h: 'Markets, channels and categories',
    markets_sub1: 'Markets',
    markets: ['Mexico', 'Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Uruguay', 'Paraguay', 'Europe', 'CIS'],
    markets_sub2: 'Channels',
    channels: ['Importers and distributors', 'Pharmacy and specialty retail', 'Clinics and salons', 'Marketplaces and e-commerce'],
    markets_sub3: 'Categories',
    categories: ['K-beauty (OEM/ODM)', 'Medical and aesthetics', 'Marine supply', 'Industrial equipment', 'Chemicals', 'Commercial vehicles'],
    markets_note: 'Passenger cars and their parts are outside our scope. We do not approach a market where you already have an official partner — tell us which territories are closed and they stay closed.',

    need_h: 'What we need to publish you',
    need_lead: 'Five things, and none of them are documents you would hesitate to share at this stage.',
    need: [
      { n: 'Written consent', d: 'One line in an email confirming we may use your materials to present your company on the platform.' },
      { n: 'Catalogue and images', d: 'Product photographs and a catalogue. Product names and volumes as they appear on the label — we check the page against the label before publishing.' },
      { n: 'Certifications you hold', d: 'Which certifications and registrations, and which products and markets they cover. Copies are needed only at the deal stage.' },
      { n: 'Closed territories', d: 'Countries where you already have an exclusive or official partner, so we do not bring you a buyer you cannot serve.' },
      { n: 'Prices — optional', d: 'Send them if you want a buyer to see them. If you would rather not, the page shows “price on request” and nothing is published.' },
    ],

    cta_h: 'Ready to be published?',
    cta_d: 'Reply to this letter or write to us. We prepare the profile from your materials, send you the live link, and change anything you ask the same day.',
  }),
};
