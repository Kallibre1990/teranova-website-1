import type { UIDict } from './ru';

export const ko: UIDict = {
  htmlLang: 'ko',
  langShort: 'KO',
  langName: '한국어',

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
    switch_lang: '언어',
    scroll: '아래로 스크롤',
    loading: '로딩 중',
  },

  meta: {
    home_title: 'Teranova Group — 검증된 한국 제조사 및 거래 전 과정 지원',
    home_desc:
      '한국 공장에서 귀사 창고까지 공급을 발굴·검증·지원합니다: 선박 용품, 화장품·뷰티(OEM/ODM), 의료·미용, 산업 장비, 상용·특수 차량.',
  },

  marquee: ['선박 용품', '화장품·뷰티', '의료·미용', '산업 장비', '상용·특수 차량', '연관 분야'],

  hero: {
    sup: '한국 → 세계',
    title: '검증된 한국 제조사 — 직접 연결',
    sub: '한국 공장에서 귀사 창고까지 공급을 발굴·검증·지원합니다. 투명하게, 귀사의 과제에 맞춰서.',
    cta_primary: '카탈로그 보기',
    cta_secondary: '맞춤 소싱',
    scroll_hint: '아래로 스크롤',
  },

  verify: {
    sup: '신뢰',
    title: '먼저 검증, 그다음 연결',
    intro: '모든 공급업체에는 상태가 있습니다. 결과에 대한 약속이 아니라 문서화된 사실이며, 당사가 거래를 조율·지원합니다.',
    card_visited_t: '검증 완료 — 현장 방문',
    card_visited_d: '창업자가 공장을 직접 방문했습니다 — 사진과 방문 날짜 포함.',
    card_provided_t: '업체 제공 정보',
    card_provided_d: '공급업체가 제공한 정보이며, 아직 직접 방문하지 않았습니다.',
    note: '품질 조건은 공급업체와의 계약에 명시됩니다. 공급업체의 개인 연락처는 공개하지 않으며 모든 소통은 Teranova를 통해 이루어집니다.',
    link: '검증 방식 보기',
  },

  categories: {
    sup: '카탈로그',
    title: '한국에서 공급하는 분야',
    sub: '카탈로그는 이미 검증된 항목입니다. 없는 것은 맞춤 소싱으로 찾습니다. 상용·승용·특수 차량은 별도 분야이며, 승용차는 취급하지 않습니다.',
    demo_note: '카탈로그는 준비 중이며 현재 일부 데이터는 데모용입니다.',
    groups: [
      { key: 'marine', name: '선박 용품', blurb: '선박·조선소 전반 공급.', items: ['엔진 및 부품', '데크 장비', '프로펠러·러더·스러스터', '항법 및 통신', '구명 및 소방', '도료 및 코팅'] },
      { key: 'cosmetics', name: '화장품·뷰티 (OEM/ODM)', blurb: '한국 화장품 및 자체 브랜드 위탁 생산.', items: ['스킨케어', '세럼·앰플', '선케어(SPF)', '시트 마스크·패치', '색조 화장품', '화장품 패키징'] },
      { key: 'medical', name: '의료·미용', blurb: '클리닉 및 미용 의료용 장비·소모품.', items: ['레이저, IPL, HIFU, RF', '필러·실·스킨부스터', '치과(임플란트, CAD/CAM)', '진단 및 검사', '재활', '병원 장비'] },
      { key: 'industrial', name: '산업 장비', blurb: '생산용 공작기계·자동화·부품.', items: ['CNC 공작기계', '레이저·플라즈마 절단', '산업용 로봇', '유압·공압', '펌프·밸브', '금형·공구'] },
      { key: 'transport', name: '상용·특수 차량', blurb: '화물·승객·특수 차량 및 부품.', items: ['트럭·트랙터', '버스', '건설 기계', '농기계', '특수 차량', '트레일러·타이어·배터리'] },
      { key: 'adjacent', name: '연관 분야', blurb: '한국이 강한 다양한 분야를 폭넓게 커버.', items: ['건축 자재', '식품·포장', '수처리·환경', '에너지·신재생', '산업 전자·LED', '산업용 섬유'] },
    ],
  },

  ondemand: {
    sup: '맞춤 소싱',
    title: '카탈로그에 없다면 — 공장을 찾아드립니다',
    sub: '필요한 것을 알려주세요. 귀사의 과제에 맞는 한국 제조사를 발굴하고 검증하여 공급을 주선합니다. 카탈로그는 이미 검증된 것, 맞춤 소싱은 새로 찾는 것입니다.',
    points: ['과제와 요구사항 확인', '공장 발굴 및 검증', '가격 및 조건 협의', '결제·물류·검수 지원'],
    form_title: '문의하기',
    form_note: '제출 후 연락하여 세부 사항을 확인하고 옵션을 제안합니다. 가격과 조건은 요청에 맞춰 안내합니다.',
  },

  presence: {
    sup: '현지 거점',
    title: '제조사 곁에 있습니다',
    onsite_lead: '아래 국가에는 현지 인력이 있어 직접 발굴·방문·검증합니다:',
    countries: ['한국', '일본', '중국', '튀르키예'],
    other: '기타 지역 문의는 요청 시 처리합니다.',
    buyers_lead: '바이어는 전 세계에서 지원합니다:',
    buyers_regions: ['CIS', '유럽', '튀르키예', '미국', '아시아'],
  },

  how: {
    sup: '진행 방식',
    title: '세 단계 — 문의부터 납품까지',
    sub: '투명하게, 귀사의 과제에 맞춰서.',
    steps: [
      { t: '문의', d: '필요한 것을 알려주세요.' },
      { t: '소싱 및 검증', d: '공장을 찾고 검증하며 조건을 협의합니다.' },
      { t: '거래 및 납품', d: '결제·물류·검수를 수령까지 지원합니다.' },
    ],
  },

  cta: {
    sup: '시작하기',
    title: '한국에서 무엇을 찾으시는지 알려주세요',
    sub: '한 번의 연락으로 소싱·검증·공급을 당사가 맡습니다.',
    button: '연락하기',
  },

  form: {
    company: '회사명',
    contact: '담당자',
    email: '이메일',
    phone: '전화 / 메신저',
    need: '찾으시는 품목',
    volume: '수량',
    timeline: '일정',
    comment: '비고',
    submit: '요청 전송',
    required_hint: '* 표시 항목은 필수입니다. 데이터는 요청 처리 목적으로만 사용됩니다.',
    ph_company: '귀사 이름',
    ph_contact: '성명',
    ph_email: 'business@email.com',
    ph_phone: '+82 / +7 …',
    ph_need: '예: OEM 세럼, 선박 펌프, CNC 공작기계',
    ph_volume: '예: 50,000개',
    ph_timeline: '예: 6~8주',
    ph_comment: '세부 사항, 요구 조건, 인증…',
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
    blurb: '검증된 한국 제조사를 전 세계 바이어와 연결하고 거래 전 과정을 지원합니다.',
    nav_title: '메뉴',
    contact_title: '연락처',
    loc: '한국',
    joint_brand: 'Teranova Group — AIA Group Ltd와 Teranova Group Ltd의 공동 브랜드.',
    disclaimer:
      '카탈로그는 준비 중이며 일부 데이터는 데모용입니다. 가격은 참고용이며 청약이 아닙니다. Teranova Group은 검증된 파트너를 통해 거래를 조율·지원하며 제조사가 아닙니다.',
    rights: '© 2025 Teranova Group',
  },
};
