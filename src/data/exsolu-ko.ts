// Translation of the restricted EN/RU public projection, not of therapeutic source claims.
export const koreanCopy = {
  company: 'NOVAMEDINTL / EXSOLU', professionalTitle: '전문가용 화장품', skincare: '데일리 스킨케어',
  about: '저희는 EXSOLU 브랜드로 전문가용 화장품과 일상적인 피부 관리 제품을 개발하고 제조합니다. 처방 연구, 맞춤형 OEM/ODM 개발 및 생산 품질 관리를 수행합니다.',
  story: 'EXSOLU는 Extraordinary와 Solution을 결합한 이름입니다. 서로 보완하는 두 제품군을 통해 전문적인 피부 관리와 일상적인 홈케어를 연결합니다.',
  ingredients: '주요 성분', description: '제품 설명', pack: '포장',
  attribution: '아래 설명과 효과는 NOVAMEDINTL의 제품 자료에 기재된 내용입니다. 화장품에 대한 설명이며, 독립적으로 입증된 임상 결과를 의미하지 않습니다.',
  caution: '전문가용 제품군에 대해 일반적인 화장품 서류를 제공합니다. 제품 분류와 허용되는 사용 범위는 수출 대상 시장에 따라 다릅니다. 제품 사용 설명서를 따르십시오. 이 카탈로그는 시술 지침을 제공하지 않습니다.',
  compositionNote: '제품 자료에 공개된 일부 성분만 표시합니다. 이 목록은 전체 INCI 성분표를 대신하지 않습니다.',
  professional: '전문가용 제품군은 17개 제품으로 구성되며, 바이오폴리머, 엑소좀 및 피부와 두피 관리 성분을 포함한 처방을 제공합니다.',
  daily: '스킨케어 제품군은 수면 마스크와 보습, 탄력 관리, 밝고 생기 있어 보이는 피부를 위한 세럼 등 5개 제품으로 구성됩니다.',
  notice: '제품 사용 설명서와 수출 대상 시장의 요건을 따르십시오.',
  nad: '제조사 지침: 주입하지 마십시오. 네뷸라이저용 형태이며 제조사의 사용 설명서를 따르십시오.',
} as const;

// Product names remain trade names. Ingredient lists remain partial disclosures.
export const koreanBoosters: Record<string, { description: string; ingredients: string }> = {
  PCL: { description: '입자가 없는 PCL 콜로이드와 히알루론산을 함유한 화장품 처방으로, 피부 탄력과 밀도 관리를 위한 제품입니다.', ingredients: '입자가 없는 PCL 콜로이드, 히알루론산' },
  dPLLA: { description: '피부 탄력과 밀도 관리를 위한 저분자 dPLLA 처방입니다.', ingredients: '저분자 dPLLA' },
  DAEMU: { description: '후속 관리 전 준비 단계로 소개하는 전문가용 화장품입니다.', ingredients: '' },
  YURI: { description: '얼굴 윤곽이 더욱 탄력 있어 보이도록 관리하는 전문가용 화장품입니다.', ingredients: '' },
  PP: { description: '피부의 탄력과 유연함을 관리하는 전문가용 화장품입니다.', ingredients: '' },
  'BOOST SOLUTION': { description: '엑소좀, 콜라겐 트리펩타이드 및 히알루론산을 함유한 보습 및 탄력 관리용 화장품입니다.', ingredients: '엑소좀, 콜라겐 트리펩타이드, 히알루론산' },
  'HYDRO-WHITE': { description: '엑소좀, 히알루론산 및 트라넥삼산을 함유하여 보습과 균일해 보이는 피부 톤을 관리하는 화장품입니다.', ingredients: '엑소좀, 히알루론산, 트라넥삼산' },
  'EXO-PLUS': { description: 'PDRN으로 코팅된 엑소좀을 함유한 전문가용 두피 관리 제품입니다.', ingredients: '나노입자 10억 개 / PDRN 코팅 엑소좀' },
  'EXOBENE-S': { description: '엑소좀, 히알루론산 및 아미노산을 함유하여 피부가 매끄럽고 탄력 있으며 촉촉해 보이도록 관리하는 화장품입니다.', ingredients: '엑소좀, 히알루론산, 아미노산' },
  'EXOBENE-H': { description: '엑소좀, 나이아신아마이드, 바이오틴 및 구리 펩타이드를 함유한 두피와 모발 관리 제품입니다.', ingredients: '엑소좀, 나이아신아마이드, 바이오틴, 구리 펩타이드' },
  SOSU: { description: '저희 전문가용 웰니스 제품군의 인삼 기반 제품입니다.', ingredients: '' },
  SAMSHIN: { description: '저희 전문가용 웰니스 제품군의 식물 기반 제품입니다.', ingredients: '' },
  NOPA: { description: '저희 전문가용 웰니스 제품군의 식물 기반 제품입니다.', ingredients: '' },
  'DANGUN-S': { description: 'DANGUN 웰니스 제품군의 인삼 기반 처방입니다.', ingredients: '' },
  'DANGUN-SS': { description: 'DANGUN 웰니스 제품군에서 농도를 달리한 제품입니다.', ingredients: '' },
  'DANGUN-SM': { description: 'DANGUN 웰니스 제품군의 별도 처방 제품입니다.', ingredients: '' },
  'NAD+ AIR SHOT': { description: '바이알당 NAD+ 100 mg과 NMN 40 mg을 함유합니다. 네뷸라이저용 형태입니다.', ingredients: '' },
};

export const koreanSkincare: Record<string, { name: string; description: string; ingredients: string }> = {
  S0: {
    name: '스파이더 실크 키토산 슈퍼 마스크',
    description: '밤에 피부에 바르고 다음 날 아침에 씻어냅니다. 키토산(40,000 ppm)과 거미줄 유래 바이오펩타이드를 함유하여 피부에 부드러운 보습막을 형성합니다. 밤사이 수분을 공급하고 건강하고 정돈되어 보이는 피부를 유지하도록 돕습니다.',
    ingredients: '키토산(40,000 ppm), 거미줄 유래 바이오펩타이드(SR-PEPTIDE), 나이아신아마이드, 트라넥삼산, 복합 콜라겐',
  },
  S1: {
    name: 'EXSOLU 로즈 퍼밍 세럼',
    description: '로즈 PDRN을 중심으로 일상적인 보습과 탄력 및 피부 관리를 위해 개발한 세럼입니다. 로즈 PDRN(가수분해 DNA), 병풀 유래 세포외 소포, 비타민 B12, 아데노신, 글루타티온, 히알루론산 및 9종 콜라겐 복합체를 함유합니다. 수분을 공급하고 피부가 탄력 있고 유연하며 매끄럽고 산뜻해 보이도록 돕습니다.',
    ingredients: '로즈 PDRN(가수분해 DNA), 병풀(CICA) 유래 세포외 소포, 비타민 B12, 아데노신, 글루타티온, 히알루론산, 9종 콜라겐 복합체',
  },
  S2: {
    name: 'EXSOLU 진생 브라이트닝 세럼',
    description: '피부가 더 밝고 생기 있으며 활력 있어 보이도록 개발한 데일리 세럼입니다. 인삼 PDRN, 나이아신아마이드, 트라넥삼산, 글루타티온 및 비타민 C를 함유합니다. 히알루론산, 흰목이버섯 다당류 및 9종 콜라겐 복합체가 수분을 공급하고 피부가 빛나고 매끄러우며 촉촉해 보이도록 돕습니다.',
    ingredients: '인삼 PDRN, 나이아신아마이드, 트라넥삼산, 글루타티온, 비타민 C, 9종 콜라겐 복합체',
  },
  S3: {
    name: 'EXSOLU 베시클즈 브라이트닝 세럼 인텐시브',
    description: '눈가와 입가부터 겨드랑이와 비키니 라인 같은 민감한 부위까지, 특정 부위를 집중 관리하도록 개발한 세럼입니다. 인텐시브 10 mL는 특별 관리용 제품입니다. 집중적인 관리가 필요한 부위에 수분을 공급하고 피부가 매끄럽고 빛나며 건강해 보이도록 돕습니다.',
    ingredients: '브로콜리 유래 세포외 소포, 비타민 B12, Reprosome™ 전달 시스템',
  },
  S4: {
    name: 'EXSOLU 베시클즈 브라이트닝 세럼 데일리',
    description: '눈가와 입가부터 겨드랑이와 비키니 라인 같은 민감한 부위까지 일상적인 관리에 쉽게 사용할 수 있도록 설계한 세럼입니다. 데일리 30 mL는 정기적인 관리용 제품입니다. 특정 부위를 부드럽게 관리하며 30 mL 용량으로 넓은 부위에도 사용할 수 있습니다. 데일리를 매일 사용하여 수분을 공급하고 건강해 보이는 피부를 유지하며, 집중 관리가 필요한 부위에는 인텐시브를 추가합니다.',
    ingredients: '브로콜리 유래 세포외 소포, 비타민 B12, Reprosome™ 전달 시스템',
  },
};
