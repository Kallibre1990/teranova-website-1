/* EXSOLU / NOVAMEDINTL blog articles (T-20261126-026). Staged draft: NOT yet
   imported into blog.ts — wait for all 11 locales (ru/en/ko/zh/ja/it/de/fr/
   tr/es/pt — EXSOLU's approved scope per locale-policy.mjs pageLocaleCodes()
   excludes he/hi, matching exsoluDraftLocales in src/data/exsolu.ts) plus
   independent fact-check before wiring in.
   RU is the source of truth (defaultLang). Facts come only from the three
   source PDFs (docs/exsolu/source-manifest.json / products.json) and from
   the already-reviewed public profile copy in src/data/exsolu.ts (accepted
   in T-20261126-025) — booster descriptions are reused verbatim/paraphrased
   from that narrowed, cosmetic-only copy, never from the richer internal
   manifest fields that were deliberately stripped (hormonal balance, pain,
   muscle effect, tissue repair). Independent-source claims are general
   ingredient/regulatory background, listed with URLs in
   docs/exsolu/blog-sources.json — they support context, not a specific
   EXSOLU product's efficacy. No prices/MOQ; NAD+ AIR SHOT always carries the
   manufacturer's "do not inject" instruction when mentioned. */
import type { BlogPost } from './blog';

export const exsoluPosts: BlogPost[] = [
  {
    slug: 'exsolu-novamedintl-company-profile',
    category: 'overview',
    date: '2026-11-26',
    related: ['cosmetics'],
    supplier: 'exsolu',
    hero: '/images/exsolu/s1.png',
    productLinks: [
      { slug: 'skin-boosters', name: 'EXSOLU Professional Skin Boosters' },
      { slug: 'skincare', name: 'EXSOLU Skincare' },
    ],
    i18n: {
      ru: {
        title: 'NOVAMEDINTL и бренд EXSOLU: от профессиональной эстетики до домашнего ухода',
        excerpt: 'NOVAMEDINTL разрабатывает и производит профессиональные косметические бустеры для кожи и повседневный уход под собственным брендом EXSOLU — 22 позиции в двух линейках и собственные OEM/ODM решения. Разбираем портфель компании и то, почему профессиональная линейка остаётся косметикой, а не медицинским изделием.',
        seoTitle: 'NOVAMEDINTL и EXSOLU: профиль корейского производителя косметики · Teranova',
        seoDesc: 'NOVAMEDINTL и бренд EXSOLU: R&D, OEM/ODM и 22 продукта в двух линейках. Почему профессиональные косметические бустеры EXSOLU — не медицинское изделие. Как отправить запрос через Teranova.',
        sections: [
          {
            h: 'Компания и бренд EXSOLU',
            p: [
              'NOVAMEDINTL — корейская компания, которая занимается исследованием, разработкой и производством профессиональных косметических бустеров для кожи и премиальных средств повседневного ухода. Компания создаёт рецептуры с премиальными ингредиентами и современными технологиями доставки, предлагает индивидуальные решения OEM и ODM и контролирует качество производства, расширяя присутствие на глобальных рынках (NOVAMEDINTL_EN①.pdf, стр. 1).',
              'Собственный бренд компании — EXSOLU: название соединяет слова Extraordinary («исключительный») и Solution («решение»). Через тщательно отобранные ингредиенты и собственные рецептуры бренд переносит ценность профессионального ухода за кожей в повседневный домашний формат — «от клиники до дома» (NOVAMEDINTL_EN①.pdf, стр. 1). Портфель EXSOLU — 22 продукта: 17 в профессиональной линейке косметических бустеров для кожи и 5 в линейке повседневного ухода EXSOLU Skincare (NOVAMEDINTL_EN①.pdf, стр. 2).',
            ],
          },
          {
            h: 'Профессиональная линейка: четыре направления в одной косметической рамке',
            p: [
              'Профессиональная линейка объединяет 17 продуктов. Два продукта — PCL и dPLLA — на странице профиля EXSOLU описаны как «косметическая рецептура с безчастичным коллоидом PCL и гиалуроновой кислотой» и «рецептура с низкомолекулярным dPLLA»; оба предназначены для ухода за упругостью и плотностью кожи. Ещё три продукта — DAEMU, YURI и PP — профессиональный косметический уход: DAEMU представлен как подготовительный этап перед последующим уходом, YURI — уход для более подтянутого вида контура лица, PP — уход за упругостью и эластичностью кожи (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, стр. 2–3).',
              'Пять продуктов построены на экзосомах: BOOST SOLUTION (экзосомы, коллагеновый трипептид и гиалуроновая кислота — для увлажнения и эластичности), HYDRO-WHITE (экзосомы, гиалуроновая и транексамовая кислоты — для увлажнения и более ровного на вид тона кожи), EXO-PLUS (профессиональный уход за кожей головы с экзосомами с PDRN-покрытием), EXOBENE-S (экзосомы, гиалуроновая кислота и аминокислоты — для более гладкой, упругой и увлажнённой на вид кожи) и EXOBENE-H (уход за кожей головы и волосами с экзосомами, ниацинамидом, биотином и медным пептидом) (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, стр. 4). Подробнее о том, что независимые научные обзоры говорят об экзосомах в косметике, — в отдельной статье блога.',
              'Остальные продукты относятся к wellness-направлению: SOSU — продукт на основе женьшеня, SAMSHIN и NOPA — продукты на растительной основе, а DANGUN-S, DANGUN-SS и DANGUN-SM — рецептуры на основе женьшеня разной концентрации в линейке DANGUN (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, стр. 5). Отдельно стоит NAD+ AIR SHOT: NAD+ 100 мг и NMN 40 мг на флакон в формате для небулайзера — производитель прямо указывает: не вводить инъекционно, соблюдать инструкцию производителя.',
            ],
          },
          {
            h: 'Почему это косметика, а не медицинское изделие',
            p: [
              'На странице профиля EXSOLU на сайте Teranova прямо указано: «Для профессиональной линейки мы предоставляем стандартную косметическую документацию. Классификация и допустимое применение зависят от рынка назначения» — это собственная формулировка производителя, а не наша интерпретация. Поэтому во всех материалах Teranova профессиональная линейка EXSOLU описывается только как косметический продукт для профессионального использования — без слов «инъекция» или «медицинское изделие», кроме прямой цитаты предостережения к NAD+ AIR SHOT.',
              'Эта граница совпадает с логикой корейского регулирования. В Корее эстетические инъекционные препараты и продукты из человеческой ткани проходят отдельные процедуры допуска как медицинские изделия, тогда как косметическая продукция регулируется иначе и, как правило, не требует отдельного разрешения на каждый продукт — кроме функциональной косметики. В марте 2026 года Министерство по безопасности продуктов питания и лекарственных средств Кореи (MFDS) объявило о планах усилить надзор именно за бустерами на основе человеческой ткани — отдельной категорией, которая не совпадает с классической косметикой (The Korea Economic Daily, 29.03.2026). Это независимое подтверждение того, что разграничение «косметика / медицинское изделие», на котором настаивает производитель EXSOLU, — реальная и действующая линия, а не формальность.',
            ],
          },
          {
            h: 'EXSOLU Skincare — пять средств для ежедневного ухода',
            p: [
              'Линейка EXSOLU Skincare переносит ту же экспертизу в формат для дома: пять средств для увлажнения, укрепления барьера кожи, упругости, сияния и точечного ухода (NOVAMEDINTL_EN①.pdf, стр. 3). Ночная маска Spider Silk Chitosan Super Mask построена на хитозане (40 000 ppm) и биопептиде на основе паучьего шёлка; сыворотки Rose Firming и Ginseng Brightening — на розовом и женьшеневом PDRN с витаминами и гиалуроновой кислотой; а пара Vesicles Brightening Serum (Intensive и Daily) использует внеклеточные везикулы брокколи и систему доставки Reprosome™ (NOVAMEDINTL_KR_SKINCARE②.pdf, стр. 2–4).',
              'Что именно независимая наука говорит о хитозане, PDRN и женьшене — и чем заявления производителя отличаются от уровня клинических доказательств — разбираем в следующей статье. Полный перечень продуктов, составы и документация — на странице EXSOLU на сайте Teranova.',
            ],
          },
        ],
      },
      en: {
        title: 'NOVAMEDINTL and the EXSOLU brand: from professional aesthetics to home care',
        excerpt: 'NOVAMEDINTL develops and manufactures professional cosmetic skin boosters and everyday skincare under its own EXSOLU brand — 22 products across two ranges, plus its own OEM/ODM capability. We walk through the company’s portfolio and why the professional range stays cosmetic, not a medical device.',
        seoTitle: 'NOVAMEDINTL and EXSOLU: profile of a Korean cosmetics manufacturer · Teranova',
        seoDesc: 'NOVAMEDINTL and the EXSOLU brand: R&D, OEM/ODM and 22 products across two ranges. Why EXSOLU’s professional cosmetic skin boosters are not a medical device. How to send a request through Teranova.',
        sections: [
          {
            h: 'The company and the EXSOLU brand',
            p: [
              'NOVAMEDINTL is a Korean company engaged in the research, development and manufacturing of professional cosmetic skin boosters and premium everyday-care products. The company builds formulations with premium ingredients and modern delivery technologies, offers custom OEM and ODM solutions, and controls production quality while expanding its presence in global markets (NOVAMEDINTL_EN①.pdf, p. 1).',
              'The company’s own brand is EXSOLU: the name combines “Extraordinary” and “Solution.” Through carefully selected ingredients and proprietary formulations, the brand carries the value of professional skin care into an everyday home format — “from clinic to home” (NOVAMEDINTL_EN①.pdf, p. 1). The EXSOLU portfolio spans 22 products: 17 in the professional cosmetic skin-booster range and 5 in the EXSOLU Skincare everyday-care range (NOVAMEDINTL_EN①.pdf, p. 2).',
            ],
          },
          {
            h: 'The professional range: four directions within one cosmetic framework',
            p: [
              'The professional range brings together 17 products. Two of them — PCL and dPLLA — are described on the EXSOLU profile page as a “cosmetic formulation with particle-free PCL colloid and hyaluronic acid” and a “low-molecular-weight dPLLA formulation”; both are positioned for skin firmness and density. Three more products — DAEMU, YURI and PP — are professional cosmetic care: DAEMU is positioned as a preparatory step before subsequent care, YURI for a firmer-looking facial contour, and PP for skin firmness and elasticity (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, pp. 2–3).',
              'Five products are built on exosomes: BOOST SOLUTION (exosomes, collagen tripeptide and hyaluronic acid for hydration and elasticity), HYDRO-WHITE (exosomes, hyaluronic acid and tranexamic acid for hydration and a more even-looking skin tone), EXO-PLUS (professional scalp care with PDRN-coated exosomes), EXOBENE-S (exosomes, hyaluronic acid and amino acids for smoother, firmer, hydrated-looking skin) and EXOBENE-H (scalp and hair care with exosomes, niacinamide, biotin and copper peptide) (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 4). What independent scientific reviews say about exosomes in cosmetics is covered in a separate blog article.',
              'The remaining products belong to the wellness direction: SOSU is a ginseng-based product, SAMSHIN and NOPA are herbal products, and DANGUN-S, DANGUN-SS and DANGUN-SM are ginseng-based formulations at different concentrations within the DANGUN range (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 5). NAD+ AIR SHOT stands apart: NAD+ 100 mg and NMN 40 mg per vial in a nebulizer format — the manufacturer states explicitly: do not inject, follow the manufacturer’s instructions.',
            ],
          },
          {
            h: 'Why this is cosmetics, not a medical device',
            p: [
              'The EXSOLU profile page on the Teranova website states directly: “We provide standard cosmetic documentation for the professional range. Product classification and permitted use depend on the destination market” — this is the manufacturer’s own wording, not our interpretation. That is why all Teranova materials describe the EXSOLU professional range only as a cosmetic product for professional use — without the words “injection” or “medical device,” except in the direct quote of the NAD+ AIR SHOT caution.',
              'This boundary matches the logic of Korean regulation. In Korea, aesthetic injectables and human-tissue-based products go through separate clearance procedures as medical devices, while cosmetic products are regulated differently and generally do not require per-product approval — except for functional cosmetics. In March 2026, Korea’s Ministry of Food and Drug Safety (MFDS) announced plans to tighten oversight specifically of human-tissue-based skin boosters — a distinct category that does not overlap with conventional cosmetics (The Korea Economic Daily, 29.03.2026). This is independent confirmation that the “cosmetic / medical device” line the EXSOLU manufacturer insists on is a real, operating boundary, not a formality.',
            ],
          },
          {
            h: 'EXSOLU Skincare — five products for everyday care',
            p: [
              'The EXSOLU Skincare range carries the same expertise into a home format: five products for hydration, skin-barrier support, firmness, radiance and targeted care (NOVAMEDINTL_EN①.pdf, p. 3). The Spider Silk Chitosan Super Mask night mask is built on chitosan (40,000 ppm) and a spider-silk-derived biopeptide; the Rose Firming and Ginseng Brightening serums on rose and ginseng PDRN with vitamins and hyaluronic acid; and the Vesicles Brightening Serum pair (Intensive and Daily) uses broccoli-derived extracellular vesicles and the Reprosome™ delivery system (NOVAMEDINTL_KR_SKINCARE②.pdf, pp. 2–4).',
              'What independent science actually says about chitosan, PDRN and ginseng — and where the manufacturer’s claims diverge from the level of clinical evidence — is covered in the next article. The full product list, formulations and documentation are available on the EXSOLU page on the Teranova website.',
            ],
          },
        ],
      },
      ko: {
        title: 'NOVAMEDINTL과 EXSOLU 브랜드: 전문 에스테틱에서 홈케어까지',
        excerpt: 'NOVAMEDINTL은 자체 브랜드 EXSOLU로 전문가용 화장품 스킨 부스터와 데일리 스킨케어를 개발하고 제조합니다 — 두 제품군에 걸친 22개 제품과 자체 OEM/ODM 역량을 갖추고 있습니다. 회사의 포트폴리오와 전문가용 제품군이 왜 의료기기가 아닌 화장품으로 유지되는지 살펴봅니다.',
        seoTitle: 'NOVAMEDINTL과 EXSOLU: 한국 화장품 제조사 프로필 · Teranova',
        seoDesc: 'NOVAMEDINTL과 EXSOLU 브랜드: R&D, OEM/ODM, 두 제품군 22개 제품. EXSOLU 전문가용 화장품 스킨 부스터가 의료기기가 아닌 이유. Teranova를 통한 문의 방법.',
        sections: [
          {
            h: '회사와 EXSOLU 브랜드',
            p: [
              'NOVAMEDINTL은 전문가용 화장품 스킨 부스터와 프리미엄 데일리 케어 제품의 연구, 개발, 제조를 담당하는 한국 기업입니다. 프리미엄 성분과 최신 전달 기술로 처방을 설계하고, 맞춤형 OEM·ODM 솔루션을 제공하며, 생산 품질을 관리하면서 글로벌 시장에서의 입지를 넓히고 있습니다 (NOVAMEDINTL_EN①.pdf, 1쪽).',
              '자체 브랜드명은 EXSOLU로, Extraordinary(탁월한)와 Solution(해결책)을 결합한 이름입니다. 엄선된 성분과 자체 처방을 통해 전문적인 피부 관리의 가치를 일상적인 홈케어 형태로 전달합니다 — "클리닉에서 집으로" (NOVAMEDINTL_EN①.pdf, 1쪽). EXSOLU 포트폴리오는 22개 제품으로 구성되며, 전문가용 화장품 스킨 부스터 라인 17개와 데일리 스킨케어 라인 EXSOLU Skincare 5개로 나뉩니다 (NOVAMEDINTL_EN①.pdf, 2쪽).',
            ],
          },
          {
            h: '전문가용 라인: 하나의 화장품 체계 안의 네 가지 방향',
            p: [
              '전문가용 라인은 17개 제품으로 구성됩니다. 그중 PCL과 dPLLA 두 제품은 Teranova 사이트의 EXSOLU 프로필 페이지에 "입자가 없는 PCL 콜로이드와 히알루론산을 함유한 화장품 처방"과 "저분자 dPLLA 처방"으로 소개되어 있으며, 두 제품 모두 피부 탄력과 밀도 관리를 위한 것입니다. 추가로 DAEMU, YURI, PP 세 제품은 전문가용 화장품으로, DAEMU는 후속 관리 전 준비 단계, YURI는 얼굴 윤곽을 더욱 탄력 있어 보이게 관리, PP는 피부 탄력과 유연함 관리로 소개됩니다 (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, 2~3쪽).',
              '다섯 제품은 엑소좀을 기반으로 합니다: BOOST SOLUTION(엑소좀, 콜라겐 트리펩타이드, 히알루론산 — 보습과 탄력), HYDRO-WHITE(엑소좀, 히알루론산, 트라넥삼산 — 보습과 균일해 보이는 피부 톤), EXO-PLUS(PDRN 코팅 엑소좀을 함유한 전문가용 두피 관리), EXOBENE-S(엑소좀, 히알루론산, 아미노산 — 매끄럽고 탄력 있으며 촉촉해 보이는 피부), EXOBENE-H(엑소좀, 나이아신아마이드, 바이오틴, 구리 펩타이드를 함유한 두피·모발 관리) (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, 4쪽). 엑소좀에 대해 독립적인 과학 리뷰가 말하는 내용은 별도의 블로그 글에서 자세히 다룹니다.',
              '나머지 제품은 웰니스 방향입니다: SOSU는 인삼 기반 제품, SAMSHIN과 NOPA는 식물 기반 제품이며, DANGUN-S, DANGUN-SS, DANGUN-SM은 DANGUN 라인 안에서 농도를 달리한 인삼 기반 처방입니다 (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, 5쪽). NAD+ AIR SHOT은 별도로, 바이알당 NAD+ 100 mg과 NMN 40 mg을 함유한 네뷸라이저용 제품으로 — 제조사는 주입하지 말고 제조사의 사용 설명서를 따르라고 명확히 안내합니다.',
            ],
          },
          {
            h: '왜 의료기기가 아닌 화장품인가',
            p: [
              'Teranova 사이트의 EXSOLU 프로필 페이지에는 다음과 같이 명시되어 있습니다: "전문가용 제품군에 대해 일반적인 화장품 서류를 제공합니다. 제품 분류와 허용되는 사용 범위는 수출 대상 시장에 따라 다릅니다" — 이는 저희의 해석이 아니라 제조사 자신의 표현입니다. 그래서 Teranova의 모든 자료는 EXSOLU 전문가용 라인을 전문가용 화장품으로만 설명하며, NAD+ AIR SHOT에 대한 주의사항을 직접 인용하는 경우를 제외하고는 "주사"나 "의료기기"라는 표현을 사용하지 않습니다.',
              '이 경계는 한국의 규제 논리와도 일치합니다. 한국에서는 미용 주사제와 인체 유래 조직 제품이 의료기기로서 별도의 허가 절차를 거치는 반면, 화장품은 다른 방식으로 규제되며 기능성 화장품을 제외하면 제품별 개별 허가가 일반적으로 필요하지 않습니다. 2026년 3월 식품의약품안전처(MFDS)는 인체 조직 기반 스킨 부스터에 대한 감독을 강화할 계획을 발표했는데, 이는 일반 화장품과는 별개의 카테고리입니다 (The Korea Economic Daily, 2026.03.29.). 이는 EXSOLU 제조사가 강조하는 "화장품/의료기기" 구분이 형식적인 것이 아니라 실제로 작동하는 경계라는 독립적인 근거입니다.',
            ],
          },
          {
            h: 'EXSOLU Skincare — 데일리 케어 다섯 가지 제품',
            p: [
              'EXSOLU Skincare 라인은 같은 전문성을 홈케어 형태로 옮겨왔습니다: 보습, 피부 장벽 강화, 탄력, 광채, 부위별 집중 관리를 위한 다섯 제품입니다 (NOVAMEDINTL_EN①.pdf, 3쪽). 나이트 마스크 Spider Silk Chitosan Super Mask는 키토산(40,000 ppm)과 거미줄 유래 바이오펩타이드를 기반으로 하며, Rose Firming과 Ginseng Brightening 세럼은 로즈·인삼 PDRN과 비타민, 히알루론산을 함유하고, Vesicles Brightening Serum(Intensive·Daily)은 브로콜리 유래 세포외 소포와 Reprosome™ 전달 시스템을 사용합니다 (NOVAMEDINTL_KR_SKINCARE②.pdf, 2~4쪽).',
              '키토산, PDRN, 인삼에 대해 독립적인 과학이 실제로 무엇을 말하는지, 그리고 제조사의 주장이 임상적 증거 수준과 어디에서 차이를 보이는지는 다음 글에서 다룹니다. 전체 제품 목록과 성분, 서류는 Teranova 사이트의 EXSOLU 페이지에서 확인할 수 있습니다.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'exsolu-skincare-pdrn-chitosan-ginseng',
    category: 'guide',
    date: '2026-11-26',
    related: ['cosmetics'],
    supplier: 'exsolu',
    hero: '/images/exsolu/s0.png',
    productLinks: [{ slug: 'skincare', name: 'EXSOLU Skincare' }],
    i18n: {
      ru: {
        title: 'PDRN, хитозан и женьшень в EXSOLU Skincare: что говорит наука об этих ингредиентах',
        excerpt: 'Пять средств линейки EXSOLU Skincare построены вокруг хитозана, PDRN и женьшеня. Разбираем, что независимые научные обзоры говорят об этих ингредиентах — и где заявления производителя опережают уровень клинических доказательств, а где совпадают с ним.',
        seoTitle: 'PDRN, хитозан, женьшень: ингредиенты EXSOLU Skincare и наука · Teranova',
        seoDesc: 'Что известно о хитозане, PDRN и женьшене в косметике: независимые научные обзоры и то, как эти ингредиенты используются в линейке EXSOLU Skincare NOVAMEDINTL.',
        sections: [
          {
            h: 'Хитозан и биопептид паучьего шёлка в ночной маске',
            p: [
              'Spider Silk Chitosan Super Mask (S0) — ночная маска на хитозане (40 000 ppm) и биопептиде на основе паучьего шёлка (SR-PEPTIDE), с ниацинамидом, транексамовой кислотой и мульти-коллагеновым комплексом. По описанию производителя, рецептура наносится на ночь и смывается утром: она образует мягкую увлажняющую плёнку на коже, обеспечивает ночное увлажнение и помогает поддерживать здоровый на вид, ухоженный тон кожи (NOVAMEDINTL_KR_SKINCARE②.pdf, стр. 2).',
              'Хитозан — один из самых изученных полимеров в косметике: обзор Kulka и Sionkowska (Molecules, 2023) описывает его как природный увлажнитель и плёнкообразующий компонент, который за счёт электростатического притяжения к поверхности кожи формирует гидратирующий слой и снижает потерю влаги — именно тот механизм, на который ссылается описание маски. А вот биопептид на основе паучьего шёлка (SR-PEPTIDE) — собственное название ингредиента производителя; независимых исследований именно этого запатентованного пептида в открытом доступе мы не нашли, поэтому его эффект остаётся заявлением NOVAMEDINTL, а не подтверждённым независимо фактом.',
            ],
          },
          {
            h: 'PDRN в сыворотках Rose Firming и Ginseng Brightening',
            p: [
              'Сыворотка EXSOLU Rose Firming Serum (S1) построена на розовом PDRN (гидролизованной ДНК), внеклеточных везикулах CICA, витамине B12, аденозине, глутатионе, гиалуроновой кислоте и 9-компонентном коллагеновом комплексе — для ежедневного увлажнения и упругости. EXSOLU Ginseng Brightening Serum (S2) использует PDRN женьшеня с ниацинамидом, транексамовой кислотой, глутатионом и витамином C — для более сияющего и свежего тона кожи (NOVAMEDINTL_KR_SKINCARE②.pdf, стр. 2–3).',
              'PDRN (полидеоксирибонуклеотид) — ингредиент на основе фрагментов ДНК, традиционно получаемый из лосося. Независимые научные обзоры 2025 года (Pharmaceutics; Applied Sciences) фиксируют растущую доказательную базу в дерматологии, но с важной оговоркой: наиболее убедительные клинические данные относятся к инъекционному применению в клинике, а доказательства для сывороток для домашнего нанесения менее развиты и сильно зависят от концентрации, стабильности состава и системы доставки. Это не опровергает использование PDRN в сыворотке, но означает, что заявления о её эффекте остаются описанием косметического продукта производителя, а не независимо подтверждённым клиническим результатом — именно так это сформулировано и в собственной атрибуции EXSOLU.',
            ],
          },
          {
            h: 'Женьшень: что показывают лабораторные исследования',
            p: [
              'Женьшень в составе EXSOLU Ginseng Brightening Serum — не только форма PDRN: у растения отдельно изучены гинзенозиды, активные сапонины, которые делят на два типа — protopanaxadiol (PPD) и protopanaxatriol (PPT). Систематический обзор гинзенозидов и состояния кожи показывает, что PPD-тип в основном связан с антиоксидантной и противовоспалительной активностью, а PPT-тип — с синтезом коллагена и обменом внеклеточного матрикса.',
              'Отдельное лабораторное исследование экстрактов красного женьшеня (MDPI, Molecules, 2022) показало выраженную антиоксидантную активность и эффект осветления у этилацетатного экстракта — in vitro, то есть в пробирке, не на людях. Это согласуется с общим выводом независимых обзоров: антиоксидантная и осветляющая активность гинзенозидов подтверждена на лабораторном уровне, а клинические данные по осветлению кожи у человека остаются менее полными.',
            ],
          },
          {
            h: 'Что это означает для покупателя',
            p: [
              'Все описания и эффекты в этой статье — заявления NOVAMEDINTL в материалах о продукции; это описания косметических средств, а не независимо подтверждённые клинические результаты (та же атрибуция, что принята на странице профиля EXSOLU). Указанные ингредиенты раскрыты частично и не заменяют полный состав INCI.',
              'Независимая наука подтверждает правдоподобный механизм для каждого ключевого ингредиента — увлажняющую плёнку хитозана, дерматологический интерес к PDRN, антиоксидантную активность гинзенозидов — но в разной степени и чаще на уровне ингредиента или лабораторного исследования, а не готового продукта EXSOLU. Полную документацию по составу и ограничениям для конкретного рынка можно запросить через страницу EXSOLU на сайте Teranova.',
            ],
          },
        ],
      },
      en: {
        title: 'PDRN, chitosan and ginseng in EXSOLU Skincare: what the science says about these ingredients',
        excerpt: 'The five products in the EXSOLU Skincare range are built around chitosan, PDRN and ginseng. We look at what independent scientific reviews say about these ingredients — and where the manufacturer’s claims run ahead of the clinical evidence, and where they line up with it.',
        seoTitle: 'PDRN, chitosan, ginseng: EXSOLU Skincare ingredients and the science · Teranova',
        seoDesc: 'What is known about chitosan, PDRN and ginseng in cosmetics: independent scientific reviews and how these ingredients are used in the EXSOLU Skincare range by NOVAMEDINTL.',
        sections: [
          {
            h: 'Chitosan and the spider-silk biopeptide in the night mask',
            p: [
              'The Spider Silk Chitosan Super Mask (S0) is a night mask built on chitosan (40,000 ppm) and a spider-silk-derived biopeptide (SR-PEPTIDE), with niacinamide, tranexamic acid and a multi-collagen complex. By the manufacturer’s description, the formulation is applied at night and rinsed off in the morning: it forms a soft hydrating film on the skin, provides overnight hydration and helps maintain a healthy-looking, well-groomed skin tone (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 2).',
              'Chitosan is one of the most studied polymers in cosmetics: a review by Kulka and Sionkowska (Molecules, 2023) describes it as a natural humectant and film-forming component that, through electrostatic attraction to the skin’s surface, forms a hydrating layer and reduces water loss — precisely the mechanism the mask’s description points to. The spider-silk-derived biopeptide (SR-PEPTIDE), however, is the manufacturer’s own proprietary ingredient name; we found no independent studies of this specific patented peptide in the open literature, so its effect remains a NOVAMEDINTL claim rather than an independently confirmed fact.',
            ],
          },
          {
            h: 'PDRN in the Rose Firming and Ginseng Brightening serums',
            p: [
              'The EXSOLU Rose Firming Serum (S1) is built on rose PDRN (hydrolyzed DNA), CICA-derived extracellular vesicles, vitamin B12, adenosine, glutathione, hyaluronic acid and a 9-component collagen complex — for everyday hydration and firmness. The EXSOLU Ginseng Brightening Serum (S2) uses ginseng PDRN with niacinamide, tranexamic acid, glutathione and vitamin C — for a brighter, fresher-looking skin tone (NOVAMEDINTL_KR_SKINCARE②.pdf, pp. 2–3).',
              'PDRN (polydeoxyribonucleotide) is a DNA-fragment-based ingredient, traditionally derived from salmon. Independent 2025 scientific reviews (Pharmaceutics; Applied Sciences) record a growing evidence base in dermatology, but with an important caveat: the most robust clinical data concern injectable, in-clinic use, while the evidence for at-home serums is less developed and depends heavily on concentration, formulation stability and delivery system. This does not invalidate PDRN’s use in a serum, but it does mean that claims about its effect remain a manufacturer’s cosmetic-product description rather than an independently confirmed clinical outcome — which is exactly how EXSOLU’s own attribution frames it.',
            ],
          },
          {
            h: 'Ginseng: what laboratory studies show',
            p: [
              'Ginseng in the EXSOLU Ginseng Brightening Serum is not only present as PDRN: the plant’s ginsenosides, active saponins, have been studied separately and are divided into two types — protopanaxadiol (PPD) and protopanaxatriol (PPT). A systematic review of ginsenosides and skin conditions shows that the PPD type is mainly linked to antioxidant and anti-inflammatory activity, while the PPT type is linked to collagen synthesis and extracellular-matrix turnover.',
              'A separate laboratory study of red ginseng extracts (MDPI, Molecules, 2022) found pronounced antioxidant activity and a brightening effect for an ethyl-acetate extract — in vitro, meaning in a test tube, not in people. This is consistent with the overall conclusion of independent reviews: the antioxidant and brightening activity of ginsenosides is confirmed at the laboratory level, while clinical data on skin brightening in humans remain less complete.',
            ],
          },
          {
            h: 'What this means for the buyer',
            p: [
              'All the descriptions and effects in this article are claims made by NOVAMEDINTL in its product materials; they are descriptions of cosmetic products, not independently confirmed clinical outcomes (the same attribution adopted on the EXSOLU profile page). The ingredients listed are partial disclosures and do not replace a full INCI composition.',
              'Independent science confirms a plausible mechanism for each key ingredient — chitosan’s hydrating film, dermatological interest in PDRN, the antioxidant activity of ginsenosides — but to varying degrees, and more often at the level of the ingredient or a laboratory study than the finished EXSOLU product. Full composition documentation and market-specific restrictions can be requested through the EXSOLU page on the Teranova website.',
            ],
          },
        ],
      },
      ko: {
        title: 'EXSOLU Skincare의 PDRN, 키토산, 인삼: 이 성분들에 대해 과학은 무엇을 말하는가',
        excerpt: 'EXSOLU Skincare 라인의 다섯 제품은 키토산, PDRN, 인삼을 중심으로 구성되어 있습니다. 독립적인 과학 리뷰가 이 성분들에 대해 무엇을 말하는지, 그리고 제조사의 주장이 임상적 증거 수준을 앞서는 부분과 일치하는 부분을 살펴봅니다.',
        seoTitle: 'PDRN, 키토산, 인삼: EXSOLU Skincare 성분과 과학 · Teranova',
        seoDesc: '화장품 속 키토산, PDRN, 인삼에 대해 알려진 것: 독립적인 과학 리뷰와 NOVAMEDINTL의 EXSOLU Skincare 라인에서 이 성분들이 사용되는 방식.',
        sections: [
          {
            h: '나이트 마스크 속 키토산과 거미줄 바이오펩타이드',
            p: [
              'Spider Silk Chitosan Super Mask(S0)는 키토산(40,000 ppm)과 거미줄 유래 바이오펩타이드(SR-PEPTIDE)를 기반으로 하며, 나이아신아마이드, 트라넥삼산, 복합 콜라겐을 함유한 나이트 마스크입니다. 제조사의 설명에 따르면 밤에 바르고 다음 날 아침 씻어내는 처방으로, 피부에 부드러운 보습막을 형성하고 밤사이 수분을 공급하며 건강하고 정돈되어 보이는 피부 톤을 유지하도록 돕습니다 (NOVAMEDINTL_KR_SKINCARE②.pdf, 2쪽).',
              '키토산은 화장품에서 가장 많이 연구된 고분자 중 하나입니다: Kulka와 Sionkowska의 리뷰(Molecules, 2023)는 키토산을 천연 보습제이자 피막 형성 성분으로 설명하며, 피부 표면과의 정전기적 인력을 통해 보습막을 형성하고 수분 손실을 줄인다고 밝힙니다 — 이는 마스크 설명이 언급하는 바로 그 메커니즘입니다. 반면 거미줄 유래 바이오펩타이드(SR-PEPTIDE)는 제조사 고유의 성분명으로, 이 특정 특허 성분에 대한 독립적인 공개 연구는 찾지 못했습니다. 따라서 그 효과는 독립적으로 입증된 사실이 아니라 NOVAMEDINTL의 주장으로 남습니다.',
            ],
          },
          {
            h: 'Rose Firming과 Ginseng Brightening 세럼 속 PDRN',
            p: [
              'EXSOLU Rose Firming Serum(S1)은 로즈 PDRN(가수분해 DNA), 병풀 유래 세포외 소포, 비타민 B12, 아데노신, 글루타티온, 히알루론산, 9종 콜라겐 복합체를 기반으로 하며 일상적인 보습과 탄력을 위한 제품입니다. EXSOLU Ginseng Brightening Serum(S2)은 인삼 PDRN에 나이아신아마이드, 트라넥삼산, 글루타티온, 비타민 C를 더해 더 밝고 생기 있어 보이는 피부 톤을 위한 제품입니다 (NOVAMEDINTL_KR_SKINCARE②.pdf, 2~3쪽).',
              'PDRN(폴리데옥시리보뉴클레오타이드)은 전통적으로 연어에서 추출하는 DNA 조각 기반 성분입니다. 2025년 독립 과학 리뷰(Pharmaceutics; Applied Sciences)는 피부과학 분야에서 증거 기반이 늘고 있다고 밝히지만, 중요한 전제가 있습니다: 가장 확실한 임상 데이터는 임상 현장에서의 주사 시술에 관한 것이며, 가정용 세럼에 대한 증거는 상대적으로 적고 농도, 제형 안정성, 전달 시스템에 크게 좌우됩니다. 이는 세럼에 PDRN을 사용하는 것 자체를 반박하는 것은 아니지만, 그 효과에 대한 주장이 독립적으로 입증된 임상 결과가 아니라 제조사의 화장품 설명으로 남는다는 의미입니다 — 이는 EXSOLU 자체의 표기 방식과도 일치합니다.',
            ],
          },
          {
            h: '인삼: 실험 연구가 보여주는 것',
            p: [
              'EXSOLU Ginseng Brightening Serum 속 인삼은 PDRN 형태로만 존재하는 것이 아닙니다: 이 식물의 활성 사포닌인 진세노사이드는 별도로 연구되어 왔으며, protopanaxadiol(PPD)형과 protopanaxatriol(PPT)형 두 가지로 나뉩니다. 진세노사이드와 피부 상태에 관한 체계적 리뷰에 따르면 PPD형은 주로 항산화 및 항염 활성과, PPT형은 콜라겐 합성 및 세포외 기질 대사와 관련이 있습니다.',
              '홍삼 추출물에 대한 별도의 실험 연구(MDPI, Molecules, 2022)는 에틸아세테이트 추출물에서 뚜렷한 항산화 활성과 미백 효과를 확인했습니다 — 다만 이는 인체가 아닌 시험관(in vitro) 연구입니다. 이는 독립적인 리뷰들의 전반적인 결론과 일치합니다: 진세노사이드의 항산화 및 미백 활성은 실험 단계에서 확인되었지만, 인체에서의 피부 미백에 관한 임상 데이터는 아직 충분하지 않습니다.',
            ],
          },
          {
            h: '구매자에게 의미하는 것',
            p: [
              '이 글의 모든 설명과 효과는 NOVAMEDINTL이 제품 자료에서 밝힌 주장입니다. 이는 화장품에 대한 설명이며, 독립적으로 입증된 임상 결과가 아닙니다 (EXSOLU 프로필 페이지에서 채택한 것과 동일한 표기 방식입니다). 언급된 성분은 부분적으로만 공개된 것이며 전체 INCI 성분표를 대체하지 않습니다.',
              '독립적인 과학은 각 핵심 성분에 대해 — 키토산의 보습막, PDRN에 대한 피부과학적 관심, 진세노사이드의 항산화 활성 — 그럴듯한 메커니즘을 확인해 주지만, 그 정도는 서로 다르며 대부분 완제품인 EXSOLU가 아니라 성분 또는 실험 연구 수준에서 확인된 것입니다. 성분과 수출 시장별 제한에 대한 전체 서류는 Teranova 사이트의 EXSOLU 페이지를 통해 요청할 수 있습니다.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'exsolu-exosomes-extracellular-vesicles-cosmetics',
    category: 'guide',
    date: '2026-11-26',
    related: ['cosmetics'],
    supplier: 'exsolu',
    hero: '/images/exsolu/boost-solution.png',
    productLinks: [
      { slug: 'skin-boosters', name: 'EXSOLU Professional Skin Boosters' },
      { slug: 'skincare', name: 'EXSOLU Skincare' },
    ],
    i18n: {
      ru: {
        title: 'Экзосомы и внеклеточные везикулы в косметике: что уже доказано, а что нет',
        excerpt: 'Линейка EXSOLU Exosome и сыворотки Vesicles Brightening строятся на экзосомах и внеклеточных везикулах. Разбираем, что говорят независимые научные обзоры 2024–2025 годов об этом классе ингредиентов — и почему производитель описывает их строго в косметических терминах.',
        seoTitle: 'Экзосомы в косметике: наука и линейка EXSOLU Exosome · Teranova',
        seoDesc: 'Что известно науке об экзосомах и внеклеточных везикулах в косметике: независимые обзоры 2024–2025 и то, как этот ингредиент используется в профессиональной линейке и сыворотках EXSOLU NOVAMEDINTL.',
        sections: [
          {
            h: 'Линия Exosome в профессиональном уходе EXSOLU',
            p: [
              'Пять продуктов профессиональной линейки EXSOLU построены на экзосомах. BOOST SOLUTION сочетает экзосомы, коллагеновый трипептид и гиалуроновую кислоту для увлажнения и эластичности. HYDRO-WHITE добавляет транексамовую кислоту — для увлажнения и более ровного на вид тона кожи. EXO-PLUS — профессиональный уход за кожей головы с экзосомами с PDRN-покрытием (1 миллиард наночастиц). EXOBENE-S сочетает экзосомы с гиалуроновой кислотой и аминокислотами для более гладкой, упругой и увлажнённой на вид кожи, а EXOBENE-H — уход за кожей головы и волосами с экзосомами, ниацинамидом, биотином и медным пептидом (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, стр. 4).',
              'Как и весь остальной профессиональный ассортимент EXSOLU, эта линейка описана производителем строго как косметическая продукция: компания предоставляет для неё стандартную косметическую документацию, медицинские или инъекционные дорсье на этом этапе не предоставляются (атрибуция EXSOLU, страница профиля на сайте Teranova). Поэтому ниже мы говорим об экзосомах как об ингредиенте косметических формул, а не о медицинской процедуре.',
            ],
          },
          {
            h: 'Vesicles Brightening Serum: внеклеточные везикулы брокколи',
            p: [
              'В линейке EXSOLU Skincare та же идея реализована для дома: Vesicles Brightening Serum в формате Intensive (10 мл) и Daily (30 мл) построены на внеклеточных везикулах, полученных из брокколи, витамине B12 и системе доставки Reprosome™. Производитель описывает их как премиальные сыворотки точечного и ежедневного действия для зон вокруг глаз, губ и деликатных участков кожи (NOVAMEDINTL_KR_SKINCARE②.pdf, стр. 3–4).',
              'Растительное происхождение везикул здесь не случайная деталь: это совпадает с заметной тенденцией в самой научной области — переходом от везикул животного и человеческого происхождения к везикулам растений, в том числе по регуляторным и потребительским причинам.',
            ],
          },
          {
            h: 'Что говорят независимые научные обзоры',
            p: [
              'Комплексный обзор применения экзосом в дерматологии (International Journal of Dermatology, 2025) фиксирует механистический потенциал для борьбы с морщинами, повышения гидратации и упругости кожи — направление активно растёт: число публикаций по экзосомам в косметике росло экспоненциально с 2014 по 2024 год.',
              'При этом систематический обзор Villarreal-Gómez и соавторов (Cosmetics, 2025) прямо называет ограничение: у направления пока нет достаточной клинической валидации и стандартизации, а одни лишь экзосомы могут не объяснять весь заявленный эффект без дополнительных внеклеточных белков — требуется более обширная оценка, прежде чем говорить о регуляторном одобрении именно экзосомальных косметических продуктов. Обзоры также указывают на отсутствие единых стандартов характеристики везикул (критерии MISEV) — то есть даже формальное подтверждение, что в продукте действительно есть заявленные везикулы, не всегда стандартизировано между производителями.',
            ],
          },
          {
            h: 'Вывод для покупателя',
            p: [
              'Итог независимых обзоров совпадает: у экзосом и внеклеточных везикул в косметике есть правдоподобный механистический потенциал, но клинических испытаний мало, стандартизации нет, и ни один экзосомальный косметический продукт пока не получил отдельного регуляторного одобрения как таковой. Поэтому описания эффектов BOOST SOLUTION, HYDRO-WHITE, EXO-PLUS, EXOBENE-S, EXOBENE-H и сывороток Vesicles Brightening — это заявления NOVAMEDINTL о своей косметической продукции, а не независимо подтверждённый клинический результат.',
              'Это не делает линейку менее интересной для покупателя — скорее, задаёт честные рамки ожиданий и объясняет, почему производитель сам ограничивает документацию по этой линейке косметическим уровнем. Полный состав и документация по рынку назначения — на странице EXSOLU на сайте Teranova.',
            ],
          },
        ],
      },
      en: {
        title: 'Exosomes and extracellular vesicles in cosmetics: what’s proven, and what isn’t',
        excerpt: 'The EXSOLU Exosome range and the Vesicles Brightening serums are built on exosomes and extracellular vesicles. We look at what independent 2024–2025 scientific reviews say about this class of ingredients — and why the manufacturer describes them strictly in cosmetic terms.',
        seoTitle: 'Exosomes in cosmetics: the science and the EXSOLU Exosome range · Teranova',
        seoDesc: 'What science knows about exosomes and extracellular vesicles in cosmetics: independent 2024–2025 reviews and how this ingredient is used in the professional range and serums of EXSOLU by NOVAMEDINTL.',
        sections: [
          {
            h: 'The Exosome line in EXSOLU professional care',
            p: [
              'Five products in the EXSOLU professional range are built on exosomes. BOOST SOLUTION combines exosomes, collagen tripeptide and hyaluronic acid for hydration and elasticity. HYDRO-WHITE adds tranexamic acid — for hydration and a more even-looking skin tone. EXO-PLUS is professional scalp care with PDRN-coated exosomes (1 billion nanoparticles). EXOBENE-S combines exosomes with hyaluronic acid and amino acids for smoother, firmer, hydrated-looking skin, while EXOBENE-H is scalp and hair care with exosomes, niacinamide, biotin and copper peptide (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 4).',
              'Like the rest of the EXSOLU professional assortment, this line is described by the manufacturer strictly as cosmetic product: the company provides standard cosmetic documentation for it, with no medical or injectable dossier offered at this stage (EXSOLU attribution, profile page on the Teranova website). That is why, below, we discuss exosomes as an ingredient in cosmetic formulations, not as a medical procedure.',
            ],
          },
          {
            h: 'Vesicles Brightening Serum: broccoli-derived extracellular vesicles',
            p: [
              'In the EXSOLU Skincare range, the same idea is carried into the home: the Vesicles Brightening Serum, in Intensive (10 mL) and Daily (30 mL) formats, is built on extracellular vesicles derived from broccoli, vitamin B12 and the Reprosome™ delivery system. The manufacturer describes them as premium serums for targeted and everyday use around the eyes, lips and delicate skin areas (NOVAMEDINTL_KR_SKINCARE②.pdf, pp. 3–4).',
              'The plant origin of these vesicles is not an incidental detail: it lines up with a notable trend in the scientific field itself — a shift from animal- and human-derived vesicles toward plant-derived vesicles, driven in part by regulatory and consumer considerations.',
            ],
          },
          {
            h: 'What independent scientific reviews say',
            p: [
              'A comprehensive review of exosome applications in dermatology (International Journal of Dermatology, 2025) records mechanistic potential for addressing wrinkles and improving skin hydration and elasticity — the field is growing fast: the number of publications on exosomes in cosmetics grew exponentially between 2014 and 2024.',
              'At the same time, a systematic review by Villarreal-Gómez and co-authors (Cosmetics, 2025) names the limitation directly: the field still lacks sufficient clinical validation and standardization, and exosomes alone may not account for the full claimed effect without additional extracellular proteins — broader evaluation is needed before speaking of regulatory approval specifically for exosomal cosmetic products. The reviews also point to the absence of unified vesicle-characterization standards (the MISEV criteria) — meaning even the formal confirmation that a product actually contains the claimed vesicles is not always standardized across manufacturers.',
            ],
          },
          {
            h: 'The takeaway for the buyer',
            p: [
              'The conclusion of independent reviews is consistent: exosomes and extracellular vesicles in cosmetics have plausible mechanistic potential, but clinical trials are scarce, standardization is lacking, and no exosomal cosmetic product has yet received separate regulatory approval as such. That is why the effect descriptions for BOOST SOLUTION, HYDRO-WHITE, EXO-PLUS, EXOBENE-S, EXOBENE-H and the Vesicles Brightening serums are NOVAMEDINTL’s claims about its own cosmetic products, not an independently confirmed clinical outcome.',
              'That does not make the range less interesting to a buyer — it sets honest expectations and explains why the manufacturer itself keeps the documentation for this line at the cosmetic level. Full composition details and market-specific documentation are available on the EXSOLU page on the Teranova website.',
            ],
          },
        ],
      },
      ko: {
        title: '화장품 속 엑소좀과 세포외 소포: 이미 입증된 것과 아직 아닌 것',
        excerpt: 'EXSOLU Exosome 라인과 Vesicles Brightening 세럼은 엑소좀과 세포외 소포를 기반으로 합니다. 2024~2025년 독립 과학 리뷰가 이 성분군에 대해 말하는 내용과, 제조사가 이를 철저히 화장품 용어로 설명하는 이유를 살펴봅니다.',
        seoTitle: '화장품 속 엑소좀: 과학과 EXSOLU Exosome 라인 · Teranova',
        seoDesc: '화장품 속 엑소좀과 세포외 소포에 대해 과학이 아는 것: 2024~2025년 독립 리뷰와 NOVAMEDINTL의 EXSOLU 전문가용 라인·세럼에서의 사용 방식.',
        sections: [
          {
            h: 'EXSOLU 전문가용 케어 속 Exosome 라인',
            p: [
              'EXSOLU 전문가용 라인의 다섯 제품은 엑소좀을 기반으로 합니다. BOOST SOLUTION은 엑소좀, 콜라겐 트리펩타이드, 히알루론산을 결합해 보습과 탄력을 관리합니다. HYDRO-WHITE는 트라넥삼산을 더해 보습과 균일해 보이는 피부 톤을 관리합니다. EXO-PLUS는 PDRN 코팅 엑소좀(나노입자 10억 개)을 함유한 전문가용 두피 관리 제품입니다. EXOBENE-S는 엑소좀, 히알루론산, 아미노산을 결합해 매끄럽고 탄력 있으며 촉촉해 보이는 피부를 관리하고, EXOBENE-H는 엑소좀, 나이아신아마이드, 바이오틴, 구리 펩타이드를 함유한 두피·모발 관리 제품입니다 (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, 4쪽).',
              'EXSOLU 전문가용 제품군 전체와 마찬가지로, 이 라인 역시 제조사에 의해 철저히 화장품으로 설명됩니다: 회사는 이 라인에 대해 표준 화장품 서류를 제공하며, 현재 단계에서 의료용이나 주사용 자료는 제공하지 않습니다 (EXSOLU 표기, Teranova 사이트 프로필 페이지). 그래서 아래에서는 엑소좀을 의료 시술이 아니라 화장품 처방의 성분으로 다룹니다.',
            ],
          },
          {
            h: 'Vesicles Brightening Serum: 브로콜리 유래 세포외 소포',
            p: [
              'EXSOLU Skincare 라인에서는 같은 아이디어가 가정용으로 구현되었습니다: Vesicles Brightening Serum은 Intensive(10 mL)와 Daily(30 mL) 형태로, 브로콜리에서 추출한 세포외 소포, 비타민 B12, Reprosome™ 전달 시스템을 기반으로 합니다. 제조사는 이를 눈가, 입가 등 민감한 부위를 위한 집중·데일리 케어용 프리미엄 세럼으로 설명합니다 (NOVAMEDINTL_KR_SKINCARE②.pdf, 3~4쪽).',
              '여기서 소포의 식물 유래라는 점은 우연한 세부사항이 아닙니다: 이는 과학 분야 자체의 뚜렷한 흐름과도 일치합니다 — 규제 및 소비자 측면의 이유로 동물·인체 유래 소포에서 식물 유래 소포로 이동하는 경향입니다.',
            ],
          },
          {
            h: '독립적인 과학 리뷰가 말하는 것',
            p: [
              '피부과학 분야의 엑소좀 적용에 관한 종합 리뷰(International Journal of Dermatology, 2025)는 주름 개선, 수분 공급, 피부 탄력 향상에 대한 메커니즘적 가능성을 기록합니다 — 이 분야는 빠르게 성장하고 있으며, 화장품 속 엑소좀에 관한 논문 수는 2014년부터 2024년까지 기하급수적으로 증가했습니다.',
              '동시에 Villarreal-Gómez 등의 체계적 리뷰(Cosmetics, 2025)는 한계를 분명히 밝힙니다: 이 분야는 아직 충분한 임상적 검증과 표준화를 갖추지 못했으며, 엑소좀만으로는 추가적인 세포외 단백질 없이 주장된 효과 전체를 설명하지 못할 수 있습니다 — 엑소좀 화장품 자체에 대한 규제 승인을 논하기 전에 더 광범위한 평가가 필요합니다. 리뷰들은 또한 소포 특성 분석에 대한 통일된 기준(MISEV 기준)이 없다는 점도 지적합니다 — 즉 제품에 실제로 주장된 소포가 들어 있는지에 대한 형식적 확인조차 제조사마다 표준화되어 있지 않습니다.',
            ],
          },
          {
            h: '구매자를 위한 결론',
            p: [
              '독립적인 리뷰들의 결론은 일관됩니다: 화장품 속 엑소좀과 세포외 소포는 그럴듯한 메커니즘적 가능성을 갖고 있지만, 임상 시험은 적고 표준화는 부족하며, 엑소좀 화장품 제품이 그 자체로 별도의 규제 승인을 받은 사례는 아직 없습니다. 그래서 BOOST SOLUTION, HYDRO-WHITE, EXO-PLUS, EXOBENE-S, EXOBENE-H와 Vesicles Brightening 세럼의 효과 설명은 NOVAMEDINTL이 자사 화장품에 대해 밝힌 주장이며, 독립적으로 입증된 임상 결과가 아닙니다.',
              '이것이 구매자에게 이 라인의 매력을 떨어뜨리는 것은 아닙니다 — 오히려 정직한 기대치를 설정하고, 제조사가 왜 이 라인의 서류를 화장품 수준으로 스스로 제한하는지를 설명해 줍니다. 전체 성분과 수출 시장별 서류는 Teranova 사이트의 EXSOLU 페이지에서 확인할 수 있습니다.',
            ],
          },
        ],
      },
    },
  },
];
