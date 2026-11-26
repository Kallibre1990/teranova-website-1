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
      ja: {
        title: 'NOVAMEDINTLとEXSOLUブランド：プロフェッショナル美容からホームケアまで',
        excerpt: 'NOVAMEDINTLは自社ブランドEXSOLUのもと、プロフェッショナル向け化粧品スキンブースターと日常スキンケアを開発・製造しています — 2つのラインにわたる22製品と、自社のOEM/ODM体制を備えています。同社のポートフォリオと、プロフェッショナルラインが医療機器ではなく化粧品であり続ける理由を見ていきます。',
        seoTitle: 'NOVAMEDINTLとEXSOLU：韓国化粧品メーカーのプロフィール · Teranova',
        seoDesc: 'NOVAMEDINTLとEXSOLUブランド：R&D、OEM/ODM、2ラインにわたる22製品。EXSOLUのプロフェッショナル向け化粧品スキンブースターが医療機器でない理由。Teranova経由での問い合わせ方法。',
        sections: [
          {
            h: '企業とEXSOLUブランド',
            p: [
              'NOVAMEDINTLは、プロフェッショナル向け化粧品スキンブースターとプレミアムな日常ケア製品の研究・開発・製造を行う韓国企業です。プレミアム原料と最新のデリバリー技術で処方を設計し、OEM・ODMのカスタムソリューションを提供し、生産品質を管理しながらグローバル市場での展開を広げています（NOVAMEDINTL_EN①.pdf、1ページ）。',
              '自社ブランド名はEXSOLUで、Extraordinary（卓越した）とSolution（解決策）を組み合わせた名称です。厳選された原料と独自処方により、プロフェッショナルなスキンケアの価値を日常のホームケアの形に伝えます — 「クリニックから自宅へ」（NOVAMEDINTL_EN①.pdf、1ページ）。EXSOLUのポートフォリオは22製品で構成され、プロフェッショナル向け化粧品スキンブースターライン17製品と、日常ケアライン「EXSOLU Skincare」5製品に分かれます（NOVAMEDINTL_EN①.pdf、2ページ）。',
            ],
          },
          {
            h: 'プロフェッショナルライン：ひとつの化粧品の枠の中の4つの方向性',
            p: [
              'プロフェッショナルラインは17製品からなります。そのうちPCLとdPLLAの2製品は、TeranovaサイトのEXSOLUプロフィールページで「粒子のないPCLコロイドとヒアルロン酸を含む化粧品処方」「低分子dPLLA処方」として紹介されており、いずれも肌のハリと密度のケアを目的としています。さらにDAEMU、YURI、PPの3製品はプロフェッショナル向け化粧品で、DAEMUは後続ケアの前の準備段階、YURIはフェイスラインをよりすっきり見せるケア、PPは肌のハリと弾力のケアとして位置づけられています（EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf、2～3ページ）。',
              '5製品はエクソソームをベースにしています：BOOST SOLUTION（エクソソーム、コラーゲントリペプチド、ヒアルロン酸 — 保湿と弾力のため）、HYDRO-WHITE（エクソソーム、ヒアルロン酸、トラネキサム酸 — 保湿と均一に見える肌色のため）、EXO-PLUS（PDRNコーティングエクソソームを含むプロフェッショナル向けスカルプケア）、EXOBENE-S（エクソソーム、ヒアルロン酸、アミノ酸 — なめらかでハリがあり、水分感のある肌に見せるため）、EXOBENE-H（エクソソーム、ナイアシンアミド、ビオチン、銅ペプチドを含むスカルプ・ヘアケア）です（EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf、4ページ）。化粧品におけるエクソソームについて独立した科学レビューが述べていることは、別のブログ記事で詳しく取り上げます。',
              '残りの製品はウェルネス方向に属します：SOSUは高麗人参ベースの製品、SAMSHINとNOPAは植物由来の製品で、DANGUN-S、DANGUN-SS、DANGUN-SMはDANGUNライン内で濃度の異なる高麗人参ベースの処方です（EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf、5ページ）。NAD+ AIR SHOTは別格で、1バイアルあたりNAD+ 100mgとNMN 40mgを含むネブライザー用製品です — メーカーは注射しないこと、メーカーの指示に従うことを明確に記載しています。',
            ],
          },
          {
            h: 'なぜ医療機器ではなく化粧品なのか',
            p: [
              'TeranovaウェブサイトのEXSOLUプロフィールページには次のように明記されています：「プロフェッショナルラインについては、標準的な化粧品関連文書を提供します。製品の分類と許可される使用方法は、輸出先市場によって異なります」— これは当方の解釈ではなく、メーカー自身の表現です。そのため、Teranovaのすべての資料は、NAD+ AIR SHOTの注意事項を直接引用する場合を除き、EXSOLUのプロフェッショナルラインを「注射」「医療機器」という語を使わず、プロフェッショナル向け化粧品としてのみ説明します。',
              'この境界線は韓国の規制論理と一致しています。韓国では美容注射剤やヒト組織由来製品は医療機器として別途の許認可手続きを経ますが、化粧品は異なる方式で規制され、機能性化粧品を除けば製品ごとの個別承認は一般的に不要です。2026年3月、韓国食品医薬品安全処（MFDS）はヒト組織ベースのスキンブースターに対する監督を強化する方針を発表しました — これは一般的な化粧品とは異なる区分です（The Korea Economic Daily、2026年3月29日）。これは、EXSOLUメーカーが主張する「化粧品／医療機器」の区分が形式的なものではなく、実際に機能している境界であることを独立的に裏付けるものです。',
            ],
          },
          {
            h: 'EXSOLU Skincare — 日常ケアのための5製品',
            p: [
              'EXSOLU Skincareラインは同じ専門性をホームケアの形に落とし込みます：保湿、肌バリアサポート、ハリ、輝き、部分ケアのための5製品です（NOVAMEDINTL_EN①.pdf、3ページ）。ナイトマスク「Spider Silk Chitosan Super Mask」はキトサン（40,000ppm）とスパイダーシルク由来バイオペプチドをベースにし、「Rose Firming」と「Ginseng Brightening」セラムはローズ・高麗人参由来PDRNにビタミンとヒアルロン酸を配合、「Vesicles Brightening Serum」ペア（IntensiveとDaily）はブロッコリー由来の細胞外小胞とReprosome™デリバリーシステムを使用しています（NOVAMEDINTL_KR_SKINCARE②.pdf、2～4ページ）。',
              'キトサン、PDRN、高麗人参について独立した科学が実際に何を示しているか、そしてメーカーの主張が臨床的エビデンスのレベルとどこで異なるかは、次の記事で取り上げます。製品の全リスト、成分、関連文書はTeranovaサイトのEXSOLUページで確認できます。',
            ],
          },
        ],
      },
      zh: {
        title: 'NOVAMEDINTL与EXSOLU品牌：从专业美容到居家护理',
        excerpt: 'NOVAMEDINTL以自有品牌EXSOLU开发和生产专业化妆品皮肤助推器及日常护肤产品——两条产品线共22款产品，并具备自有OEM/ODM能力。本文梳理公司的产品组合，并解释为何其专业产品线始终定位为化妆品，而非医疗器械。',
        seoTitle: 'NOVAMEDINTL与EXSOLU：韩国化妆品制造商简介 · Teranova',
        seoDesc: 'NOVAMEDINTL与EXSOLU品牌：研发、OEM/ODM及两条产品线共22款产品。为什么EXSOLU的专业化妆品皮肤助推器不是医疗器械。如何通过Teranova发送询价。',
        sections: [
          {
            h: '公司与EXSOLU品牌',
            p: [
              'NOVAMEDINTL是一家从事专业化妆品皮肤助推器及高端日常护理产品研究、开发与生产的韩国公司。公司以优质原料和现代化输送技术设计配方，提供定制化的OEM和ODM解决方案，并在拓展全球市场的同时把控生产质量（NOVAMEDINTL_EN①.pdf，第1页）。',
              '公司自有品牌为EXSOLU：名称结合了Extraordinary（卓越）与Solution（方案）两词。通过精选原料和自有配方，该品牌将专业护肤的价值带入日常居家场景——"从诊所到居家"（NOVAMEDINTL_EN①.pdf，第1页）。EXSOLU产品组合共22款：专业化妆品皮肤助推器线17款，日常护理线EXSOLU Skincare 5款（NOVAMEDINTL_EN①.pdf，第2页）。',
            ],
          },
          {
            h: '专业产品线：同一化妆品框架下的四个方向',
            p: [
              '专业产品线共17款产品。其中PCL和dPLLA两款产品在Teranova网站的EXSOLU简介页面上被描述为"含无颗粒PCL胶体与透明质酸的化妆品配方"和"低分子量dPLLA配方"，二者均定位于肌肤紧致与密度护理。另外三款产品——DAEMU、YURI和PP——属于专业化妆品护理：DAEMU定位为后续护理前的准备步骤，YURI用于使面部轮廓看起来更紧致，PP用于肌肤紧致与弹性护理（EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf，第2–3页）。',
              '五款产品以外泌体为基础：BOOST SOLUTION（外泌体、胶原三肽与透明质酸，用于保湿与弹性）、HYDRO-WHITE（外泌体、透明质酸与氨甲环酸，用于保湿及改善肤色均匀度外观）、EXO-PLUS（含PDRN包被外泌体的专业头皮护理产品）、EXOBENE-S（外泌体、透明质酸与氨基酸，用于让肌肤看起来更光滑、紧致、水润）以及EXOBENE-H（含外泌体、烟酰胺、生物素与铜肽的头皮及头发护理产品）（EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf，第4页）。关于化妆品中外泌体的独立科学综述有何结论，详见另一篇博客文章。',
              '其余产品属于养生方向：SOSU为人参基产品，SAMSHIN和NOPA为植物基产品，DANGUN-S、DANGUN-SS和DANGUN-SM是DANGUN产品线内不同浓度的人参基配方（EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf，第5页）。NAD+ AIR SHOT则单独存在：每瓶含NAD+ 100mg和NMN 40mg，为雾化器使用形式——制造商明确标注：禁止注射使用，请遵循制造商说明。',
            ],
          },
          {
            h: '为何是化妆品而非医疗器械',
            p: [
              'Teranova网站上的EXSOLU简介页面明确写道："我们为专业产品线提供标准化妆品相关文件。产品分类及允许的使用方式取决于目标市场"——这是制造商自身的表述，并非我们的解读。因此，除直接引用NAD+ AIR SHOT注意事项的情形外，Teranova所有资料均仅将EXSOLU专业产品线描述为专业用化妆品，不使用"注射"或"医疗器械"等字眼。',
              '这一界限与韩国监管逻辑相符。在韩国，美容注射类产品及人体组织类产品需作为医疗器械经过单独的审批程序，而化妆品的监管方式不同，除功能性化妆品外，通常无需逐款审批。2026年3月，韩国食品药品安全部（MFDS）宣布计划加强对人体组织类皮肤助推器的监管——这是一个与常规化妆品不同的独立类别（《韩国经济日报》，2026年3月29日）。这独立印证了EXSOLU制造商所坚持的"化妆品/医疗器械"界限是真实有效的分界，而非形式上的说法。',
            ],
          },
          {
            h: 'EXSOLU Skincare——五款日常护理产品',
            p: [
              'EXSOLU Skincare产品线将同样的专业经验带入居家场景：五款产品分别用于保湿、强健肌肤屏障、紧致、提亮及局部护理（NOVAMEDINTL_EN①.pdf，第3页）。夜间面膜Spider Silk Chitosan Super Mask以壳聚糖（40,000ppm）和蜘蛛丝来源生物肽为基础；Rose Firming与Ginseng Brightening精华则以玫瑰及人参来源的PDRN配合维生素与透明质酸；Vesicles Brightening Serum系列（Intensive与Daily）使用西兰花来源的细胞外囊泡及Reprosome™输送系统（NOVAMEDINTL_KR_SKINCARE②.pdf，第2–4页）。',
              '独立科学对壳聚糖、PDRN和人参究竟怎么说——以及制造商的说法在哪些方面超出临床证据水平——将在下一篇文章中详细分析。完整产品清单、配方及相关文件可在Teranova网站的EXSOLU页面查阅。',
            ],
          },
        ],
      },
      de: {
        title: 'NOVAMEDINTL und die Marke EXSOLU: von der professionellen Ästhetik bis zur Heimpflege',
        excerpt: 'NOVAMEDINTL entwickelt und produziert professionelle kosmetische Skin-Booster und tägliche Pflegeprodukte unter der eigenen Marke EXSOLU — 22 Produkte in zwei Linien sowie eigene OEM/ODM-Kompetenz. Wir beleuchten das Portfolio des Unternehmens und erklären, warum die professionelle Linie kosmetisch bleibt und kein Medizinprodukt ist.',
        seoTitle: 'NOVAMEDINTL und EXSOLU: Profil eines koreanischen Kosmetikherstellers · Teranova',
        seoDesc: 'NOVAMEDINTL und die Marke EXSOLU: F&E, OEM/ODM und 22 Produkte in zwei Linien. Warum die professionellen kosmetischen Skin-Booster von EXSOLU kein Medizinprodukt sind. So senden Sie eine Anfrage über Teranova.',
        sections: [
          {
            h: 'Das Unternehmen und die Marke EXSOLU',
            p: [
              'NOVAMEDINTL ist ein koreanisches Unternehmen, das professionelle kosmetische Skin-Booster und hochwertige Produkte für die tägliche Pflege erforscht, entwickelt und herstellt. Das Unternehmen entwickelt Formulierungen mit Premium-Inhaltsstoffen und modernen Wirkstoff-Transportsystemen, bietet individuelle OEM- und ODM-Lösungen an und kontrolliert die Produktionsqualität, während es seine Präsenz auf globalen Märkten ausbaut (NOVAMEDINTL_EN①.pdf, S. 1).',
              'Die eigene Marke des Unternehmens ist EXSOLU: Der Name verbindet „Extraordinary“ (außergewöhnlich) und „Solution“ (Lösung). Durch sorgfältig ausgewählte Inhaltsstoffe und eigene Formulierungen überträgt die Marke den Wert professioneller Hautpflege in ein alltägliches Heimformat — „von der Klinik nach Hause“ (NOVAMEDINTL_EN①.pdf, S. 1). Das EXSOLU-Portfolio umfasst 22 Produkte: 17 in der professionellen kosmetischen Skin-Booster-Linie und 5 in der Alltagspflegelinie EXSOLU Skincare (NOVAMEDINTL_EN①.pdf, S. 2).',
            ],
          },
          {
            h: 'Die professionelle Linie: vier Richtungen innerhalb eines kosmetischen Rahmens',
            p: [
              'Die professionelle Linie vereint 17 Produkte. Zwei davon — PCL und dPLLA — werden auf der EXSOLU-Profilseite als „kosmetische Formulierung mit partikelfreiem PCL-Kolloid und Hyaluronsäure“ bzw. „niedermolekulare dPLLA-Formulierung“ beschrieben; beide sind auf Hautfestigkeit und -dichte ausgerichtet. Drei weitere Produkte — DAEMU, YURI und PP — sind professionelle kosmetische Pflege: DAEMU ist als vorbereitender Schritt vor einer anschließenden Pflege positioniert, YURI für eine straffer wirkende Gesichtskontur und PP für Hautfestigkeit und Elastizität (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, S. 2–3).',
              'Fünf Produkte basieren auf Exosomen: BOOST SOLUTION (Exosomen, Kollagen-Tripeptid und Hyaluronsäure für Feuchtigkeit und Elastizität), HYDRO-WHITE (Exosomen, Hyaluronsäure und Tranexamsäure für Feuchtigkeit und einen gleichmäßiger wirkenden Hautton), EXO-PLUS (professionelle Kopfhautpflege mit PDRN-beschichteten Exosomen), EXOBENE-S (Exosomen, Hyaluronsäure und Aminosäuren für glattere, straffer und feuchter wirkende Haut) und EXOBENE-H (Kopfhaut- und Haarpflege mit Exosomen, Niacinamid, Biotin und Kupferpeptid) (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, S. 4). Was unabhängige wissenschaftliche Übersichtsarbeiten zu Exosomen in Kosmetika sagen, behandeln wir in einem separaten Blogartikel.',
              'Die übrigen Produkte gehören zur Wellness-Richtung: SOSU ist ein Produkt auf Ginseng-Basis, SAMSHIN und NOPA sind pflanzliche Produkte, und DANGUN-S, DANGUN-SS und DANGUN-SM sind Ginseng-basierte Formulierungen in unterschiedlichen Konzentrationen innerhalb der DANGUN-Linie (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, S. 5). NAD+ AIR SHOT steht gesondert: NAD+ 100 mg und NMN 40 mg pro Fläschchen in einem Vernebler-Format — der Hersteller weist ausdrücklich darauf hin: nicht injizieren, den Herstellerangaben folgen.',
            ],
          },
          {
            h: 'Warum Kosmetik und kein Medizinprodukt',
            p: [
              'Die EXSOLU-Profilseite auf der Teranova-Website erklärt ausdrücklich: „Für die professionelle Linie stellen wir standardmäßige kosmetische Unterlagen bereit. Produktklassifizierung und zulässige Verwendung richten sich nach dem Zielmarkt“ — dies ist die eigene Formulierung des Herstellers, nicht unsere Interpretation. Deshalb beschreiben alle Teranova-Materialien die professionelle EXSOLU-Linie ausschließlich als kosmetisches Produkt für die professionelle Anwendung — ohne die Begriffe „Injektion“ oder „Medizinprodukt“, außer im direkten Zitat des NAD+ AIR SHOT-Warnhinweises.',
              'Diese Abgrenzung entspricht der Logik der koreanischen Regulierung. In Korea durchlaufen ästhetische Injektionspräparate und Produkte auf Basis menschlichen Gewebes als Medizinprodukte separate Zulassungsverfahren, während kosmetische Produkte anders reguliert werden und — mit Ausnahme funktioneller Kosmetik — in der Regel keine produktspezifische Zulassung erfordern. Im März 2026 kündigte Koreas Ministerium für Lebensmittel- und Arzneimittelsicherheit (MFDS) an, die Aufsicht speziell über Skin-Booster auf Basis menschlichen Gewebes zu verschärfen — eine eigenständige Kategorie, die sich nicht mit klassischer Kosmetik überschneidet (The Korea Economic Daily, 29.03.2026). Dies ist eine unabhängige Bestätigung, dass die Grenze „Kosmetik / Medizinprodukt“, auf die der EXSOLU-Hersteller besteht, real und wirksam ist und keine Formalität darstellt.',
            ],
          },
          {
            h: 'EXSOLU Skincare — fünf Produkte für die tägliche Pflege',
            p: [
              'Die Linie EXSOLU Skincare überträgt dieselbe Expertise in ein Heimformat: fünf Produkte für Feuchtigkeit, Unterstützung der Hautbarriere, Festigkeit, Strahlkraft und gezielte Pflege (NOVAMEDINTL_EN①.pdf, S. 3). Die Nachtmaske Spider Silk Chitosan Super Mask basiert auf Chitosan (40.000 ppm) und einem aus Spinnenseide gewonnenen Biopeptid; die Seren Rose Firming und Ginseng Brightening auf Rosen- und Ginseng-PDRN mit Vitaminen und Hyaluronsäure; und das Vesicles Brightening Serum-Paar (Intensive und Daily) verwendet aus Brokkoli gewonnene extrazelluläre Vesikel und das Reprosome™-Transportsystem (NOVAMEDINTL_KR_SKINCARE②.pdf, S. 2–4).',
              'Was die unabhängige Wissenschaft tatsächlich über Chitosan, PDRN und Ginseng sagt — und wo die Aussagen des Herstellers über das Niveau der klinischen Evidenz hinausgehen — behandeln wir im nächsten Artikel. Die vollständige Produktliste, Formulierungen und Unterlagen finden sich auf der EXSOLU-Seite der Teranova-Website.',
            ],
          },
        ],
      },
      fr: {
        title: 'NOVAMEDINTL et la marque EXSOLU : de l’esthétique professionnelle aux soins à domicile',
        excerpt: 'NOVAMEDINTL conçoit et fabrique des boosters cosmétiques professionnels pour la peau et des soins quotidiens sous sa propre marque EXSOLU — 22 produits répartis en deux gammes, avec sa propre capacité OEM/ODM. Nous présentons le portefeuille de l’entreprise et expliquons pourquoi la gamme professionnelle reste cosmétique et non un dispositif médical.',
        seoTitle: 'NOVAMEDINTL et EXSOLU : profil d’un fabricant coréen de cosmétiques · Teranova',
        seoDesc: 'NOVAMEDINTL et la marque EXSOLU : R&D, OEM/ODM et 22 produits en deux gammes. Pourquoi les boosters cosmétiques professionnels EXSOLU ne sont pas un dispositif médical. Comment envoyer une demande via Teranova.',
        sections: [
          {
            h: 'L’entreprise et la marque EXSOLU',
            p: [
              'NOVAMEDINTL est une entreprise coréenne spécialisée dans la recherche, le développement et la fabrication de boosters cosmétiques professionnels pour la peau et de produits de soin quotidien haut de gamme. L’entreprise élabore des formulations à base d’ingrédients premium et de technologies de délivrance modernes, propose des solutions OEM et ODM sur mesure, et contrôle la qualité de production tout en développant sa présence sur les marchés mondiaux (NOVAMEDINTL_EN①.pdf, p. 1).',
              'La marque propre de l’entreprise est EXSOLU : le nom associe « Extraordinary » (extraordinaire) et « Solution ». Grâce à des ingrédients soigneusement sélectionnés et à des formulations propriétaires, la marque transpose la valeur des soins professionnels de la peau dans un format quotidien à domicile — « de la clinique à la maison » (NOVAMEDINTL_EN①.pdf, p. 1). Le portefeuille EXSOLU compte 22 produits : 17 dans la gamme professionnelle de boosters cosmétiques pour la peau et 5 dans la gamme de soins quotidiens EXSOLU Skincare (NOVAMEDINTL_EN①.pdf, p. 2).',
            ],
          },
          {
            h: 'La gamme professionnelle : quatre orientations dans un même cadre cosmétique',
            p: [
              'La gamme professionnelle réunit 17 produits. Deux d’entre eux — PCL et dPLLA — sont décrits sur la page de profil EXSOLU comme une « formulation cosmétique à base de colloïde PCL sans particules et d’acide hyaluronique » et une « formulation à base de dPLLA de faible poids moléculaire » ; tous deux visent le soin de la fermeté et de la densité de la peau. Trois autres produits — DAEMU, YURI et PP — relèvent du soin cosmétique professionnel : DAEMU est présenté comme une étape préparatoire avant un soin ultérieur, YURI pour un contour du visage d’aspect plus ferme, et PP pour la fermeté et l’élasticité de la peau (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 2-3).',
              'Cinq produits sont construits autour des exosomes : BOOST SOLUTION (exosomes, tripeptide de collagène et acide hyaluronique — pour l’hydratation et l’élasticité), HYDRO-WHITE (exosomes, acides hyaluronique et tranexamique — pour l’hydratation et un teint d’aspect plus uniforme), EXO-PLUS (soin professionnel du cuir chevelu à base d’exosomes enrobés de PDRN), EXOBENE-S (exosomes, acide hyaluronique et acides aminés — pour une peau d’aspect plus lisse, plus ferme et plus hydratée) et EXOBENE-H (soin du cuir chevelu et des cheveux à base d’exosomes, de niacinamide, de biotine et de peptide de cuivre) (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 4). Ce que les revues scientifiques indépendantes disent des exosomes en cosmétique est développé dans un article de blog séparé.',
              'Les autres produits relèvent de l’orientation bien-être : SOSU est un produit à base de ginseng, SAMSHIN et NOPA sont des produits d’origine végétale, et DANGUN-S, DANGUN-SS et DANGUN-SM sont des formulations à base de ginseng à différentes concentrations au sein de la gamme DANGUN (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 5). NAD+ AIR SHOT se distingue à part : NAD+ 100 mg et NMN 40 mg par flacon, en format pour nébuliseur — le fabricant précise explicitement : ne pas injecter, suivre les instructions du fabricant.',
            ],
          },
          {
            h: 'Pourquoi c’est un produit cosmétique et non un dispositif médical',
            p: [
              'La page de profil EXSOLU sur le site Teranova indique explicitement : « Pour la gamme professionnelle, nous fournissons une documentation cosmétique standard. La classification du produit et son usage autorisé dépendent du marché de destination » — c’est la formulation propre du fabricant, non notre interprétation. C’est pourquoi, dans tous les contenus de Teranova, la gamme professionnelle EXSOLU est décrite uniquement comme un produit cosmétique à usage professionnel — sans les termes « injection » ou « dispositif médical », sauf dans la citation directe de l’avertissement du NAD+ AIR SHOT.',
              'Cette frontière correspond à la logique de la réglementation coréenne. En Corée, les produits injectables esthétiques et les produits à base de tissus humains suivent des procédures d’autorisation distinctes en tant que dispositifs médicaux, tandis que les produits cosmétiques sont réglementés différemment et, à l’exception de la cosmétique fonctionnelle, ne nécessitent généralement pas d’autorisation produit par produit. En mars 2026, le ministère coréen de la Sécurité des aliments et des médicaments (MFDS) a annoncé son intention de renforcer spécifiquement le contrôle des boosters à base de tissus humains — une catégorie distincte qui ne recoupe pas la cosmétique classique (The Korea Economic Daily, 29.03.2026). C’est une confirmation indépendante que la frontière « cosmétique / dispositif médical », sur laquelle insiste le fabricant d’EXSOLU, est réelle et effective, et non une simple formalité.',
            ],
          },
          {
            h: 'EXSOLU Skincare — cinq soins pour l’usage quotidien',
            p: [
              'La gamme EXSOLU Skincare transpose la même expertise dans un format pour la maison : cinq produits pour l’hydratation, le renforcement de la barrière cutanée, la fermeté, l’éclat et le soin ciblé (NOVAMEDINTL_EN①.pdf, p. 3). Le masque de nuit Spider Silk Chitosan Super Mask est construit autour du chitosane (40 000 ppm) et d’un biopeptide dérivé de soie d’araignée ; les sérums Rose Firming et Ginseng Brightening sont à base de PDRN de rose et de ginseng avec vitamines et acide hyaluronique ; et la paire Vesicles Brightening Serum (Intensive et Daily) utilise des vésicules extracellulaires de brocoli et le système de délivrance Reprosome™ (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 2-4).',
              'Ce que la science indépendante dit réellement du chitosane, du PDRN et du ginseng — et où les affirmations du fabricant dépassent le niveau des preuves cliniques — fait l’objet de l’article suivant. La liste complète des produits, les compositions et la documentation figurent sur la page EXSOLU du site Teranova.',
            ],
          },
        ],
      },
      it: {
        title: 'NOVAMEDINTL e il marchio EXSOLU: dall’estetica professionale alla cura domiciliare',
        excerpt: 'NOVAMEDINTL sviluppa e produce booster cosmetici professionali per la pelle e prodotti per la cura quotidiana con il proprio marchio EXSOLU — 22 prodotti in due linee, oltre a una propria capacità OEM/ODM. Presentiamo il portafoglio dell’azienda e spieghiamo perché la linea professionale resta un prodotto cosmetico e non un dispositivo medico.',
        seoTitle: 'NOVAMEDINTL ed EXSOLU: profilo di un produttore coreano di cosmetici · Teranova',
        seoDesc: 'NOVAMEDINTL e il marchio EXSOLU: R&S, OEM/ODM e 22 prodotti in due linee. Perché i booster cosmetici professionali EXSOLU non sono un dispositivo medico. Come inviare una richiesta tramite Teranova.',
        sections: [
          {
            h: 'L’azienda e il marchio EXSOLU',
            p: [
              'NOVAMEDINTL è un’azienda coreana impegnata nella ricerca, nello sviluppo e nella produzione di booster cosmetici professionali per la pelle e di prodotti premium per la cura quotidiana. L’azienda realizza formulazioni con ingredienti premium e tecnologie di veicolazione moderne, offre soluzioni OEM e ODM su misura e controlla la qualità della produzione, ampliando al contempo la propria presenza sui mercati globali (NOVAMEDINTL_EN①.pdf, p. 1).',
              'Il marchio proprio dell’azienda è EXSOLU: il nome unisce “Extraordinary” (straordinario) e “Solution” (soluzione). Attraverso ingredienti selezionati con cura e formulazioni proprietarie, il marchio trasferisce il valore della cura professionale della pelle in un formato quotidiano per la casa — “dalla clinica a casa” (NOVAMEDINTL_EN①.pdf, p. 1). Il portafoglio EXSOLU comprende 22 prodotti: 17 nella linea professionale di booster cosmetici per la pelle e 5 nella linea di cura quotidiana EXSOLU Skincare (NOVAMEDINTL_EN①.pdf, p. 2).',
            ],
          },
          {
            h: 'La linea professionale: quattro direzioni in un’unica cornice cosmetica',
            p: [
              'La linea professionale riunisce 17 prodotti. Due di essi — PCL e dPLLA — sono descritti nella pagina di profilo EXSOLU come una “formulazione cosmetica con colloide PCL privo di particelle e acido ialuronico” e una “formulazione a base di dPLLA a basso peso molecolare”; entrambi sono destinati alla cura della compattezza e della densità della pelle. Altri tre prodotti — DAEMU, YURI e PP — rientrano nella cura cosmetica professionale: DAEMU è presentato come fase preparatoria prima di un trattamento successivo, YURI per un contorno del viso di aspetto più tonico, e PP per compattezza ed elasticità della pelle (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 2-3).',
              'Cinque prodotti sono costruiti sugli esosomi: BOOST SOLUTION (esosomi, tripeptide di collagene e acido ialuronico — per idratazione ed elasticità), HYDRO-WHITE (esosomi, acido ialuronico e acido tranexamico — per idratazione e un tono della pelle di aspetto più uniforme), EXO-PLUS (cura professionale del cuoio capelluto con esosomi rivestiti di PDRN), EXOBENE-S (esosomi, acido ialuronico e aminoacidi — per una pelle di aspetto più liscio, compatto e idratato) ed EXOBENE-H (cura del cuoio capelluto e dei capelli con esosomi, niacinamide, biotina e peptide di rame) (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 4). Ciò che le revisioni scientifiche indipendenti affermano sugli esosomi in cosmetica è approfondito in un articolo del blog separato.',
              'Gli altri prodotti rientrano nell’orientamento wellness: SOSU è un prodotto a base di ginseng, SAMSHIN e NOPA sono prodotti di origine vegetale, mentre DANGUN-S, DANGUN-SS e DANGUN-SM sono formulazioni a base di ginseng a diverse concentrazioni all’interno della linea DANGUN (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 5). A parte si colloca NAD+ AIR SHOT: NAD+ 100 mg e NMN 40 mg per flaconcino, in formato per nebulizzatore — il produttore indica espressamente: non iniettare, seguire le istruzioni del produttore.',
            ],
          },
          {
            h: 'Perché è un prodotto cosmetico e non un dispositivo medico',
            p: [
              'La pagina di profilo EXSOLU sul sito Teranova afferma espressamente: “Per la linea professionale forniamo documentazione cosmetica standard. La classificazione del prodotto e l’uso consentito dipendono dal mercato di destinazione” — questa è la formulazione propria del produttore, non una nostra interpretazione. Per questo, in tutti i materiali Teranova, la linea professionale EXSOLU è descritta esclusivamente come prodotto cosmetico per uso professionale — senza i termini “iniezione” o “dispositivo medico”, salvo nella citazione diretta dell’avvertenza relativa a NAD+ AIR SHOT.',
              'Questo confine corrisponde alla logica della normativa coreana. In Corea, i prodotti iniettabili estetici e i prodotti a base di tessuto umano seguono procedure di autorizzazione separate come dispositivi medici, mentre i prodotti cosmetici sono regolati diversamente e, salvo la cosmetica funzionale, di norma non richiedono un’autorizzazione per singolo prodotto. Nel marzo 2026 il Ministero della Sicurezza di Alimenti e Farmaci della Corea (MFDS) ha annunciato l’intenzione di rafforzare la vigilanza specificamente sui booster a base di tessuto umano — una categoria distinta che non coincide con la cosmetica classica (The Korea Economic Daily, 29.03.2026). Si tratta di una conferma indipendente che il confine “cosmetico / dispositivo medico”, su cui insiste il produttore di EXSOLU, è reale ed effettivo, e non una semplice formalità.',
            ],
          },
          {
            h: 'EXSOLU Skincare — cinque prodotti per la cura quotidiana',
            p: [
              'La linea EXSOLU Skincare trasferisce la stessa competenza in un formato per la casa: cinque prodotti per idratazione, rinforzo della barriera cutanea, compattezza, luminosità e cura mirata (NOVAMEDINTL_EN①.pdf, p. 3). La maschera notte Spider Silk Chitosan Super Mask è costruita su chitosano (40.000 ppm) e un biopeptide derivato da seta di ragno; i sieri Rose Firming e Ginseng Brightening si basano su PDRN di rosa e di ginseng con vitamine e acido ialuronico; e la coppia Vesicles Brightening Serum (Intensive e Daily) utilizza vesicole extracellulari di broccolo e il sistema di veicolazione Reprosome™ (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 2-4).',
              'Ciò che la scienza indipendente afferma realmente su chitosano, PDRN e ginseng — e dove le affermazioni del produttore superano il livello delle evidenze cliniche — è l’oggetto dell’articolo successivo. L’elenco completo dei prodotti, le composizioni e la documentazione sono disponibili sulla pagina EXSOLU del sito Teranova.',
            ],
          },
        ],
      },
      es: {
        title: 'NOVAMEDINTL y la marca EXSOLU: de la estética profesional al cuidado en casa',
        excerpt: 'NOVAMEDINTL desarrolla y fabrica boosters cosméticos profesionales para la piel y productos de cuidado diario bajo su propia marca EXSOLU — 22 productos en dos líneas, además de su propia capacidad OEM/ODM. Repasamos el portafolio de la empresa y explicamos por qué la línea profesional sigue siendo cosmética y no un dispositivo médico.',
        seoTitle: 'NOVAMEDINTL y EXSOLU: perfil de un fabricante coreano de cosméticos · Teranova',
        seoDesc: 'NOVAMEDINTL y la marca EXSOLU: I+D, OEM/ODM y 22 productos en dos líneas. Por qué los boosters cosméticos profesionales de EXSOLU no son un dispositivo médico. Cómo enviar una solicitud a través de Teranova.',
        sections: [
          {
            h: 'La empresa y la marca EXSOLU',
            p: [
              'NOVAMEDINTL es una empresa coreana dedicada a la investigación, el desarrollo y la fabricación de boosters cosméticos profesionales para la piel y productos premium de cuidado diario. La empresa desarrolla formulaciones con ingredientes premium y tecnologías de administración modernas, ofrece soluciones OEM y ODM a medida, y controla la calidad de producción mientras amplía su presencia en los mercados globales (NOVAMEDINTL_EN①.pdf, p. 1).',
              'La marca propia de la empresa es EXSOLU: el nombre combina “Extraordinary” (extraordinario) y “Solution” (solución). Mediante ingredientes cuidadosamente seleccionados y formulaciones propias, la marca traslada el valor del cuidado profesional de la piel a un formato cotidiano para el hogar — “de la clínica a casa” (NOVAMEDINTL_EN①.pdf, p. 1). El portafolio de EXSOLU abarca 22 productos: 17 en la línea profesional de boosters cosméticos para la piel y 5 en la línea de cuidado diario EXSOLU Skincare (NOVAMEDINTL_EN①.pdf, p. 2).',
            ],
          },
          {
            h: 'La línea profesional: cuatro orientaciones dentro de un mismo marco cosmético',
            p: [
              'La línea profesional reúne 17 productos. Dos de ellos — PCL y dPLLA — se describen en la página de perfil de EXSOLU como una “formulación cosmética con coloide PCL sin partículas y ácido hialurónico” y una “formulación a base de dPLLA de bajo peso molecular”; ambos están orientados al cuidado de la firmeza y la densidad de la piel. Otros tres productos — DAEMU, YURI y PP — son cuidado cosmético profesional: DAEMU se presenta como un paso preparatorio antes de un cuidado posterior, YURI para un contorno facial de aspecto más firme, y PP para la firmeza y elasticidad de la piel (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 2-3).',
              'Cinco productos están construidos a partir de exosomas: BOOST SOLUTION (exosomas, tripéptido de colágeno y ácido hialurónico, para hidratación y elasticidad), HYDRO-WHITE (exosomas, ácido hialurónico y ácido tranexámico, para hidratación y un tono de piel de aspecto más uniforme), EXO-PLUS (cuidado profesional del cuero cabelludo con exosomas recubiertos de PDRN), EXOBENE-S (exosomas, ácido hialurónico y aminoácidos, para una piel de aspecto más liso, firme e hidratado) y EXOBENE-H (cuidado del cuero cabelludo y el cabello con exosomas, niacinamida, biotina y péptido de cobre) (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 4). Lo que las revisiones científicas independientes dicen sobre los exosomas en cosmética se trata en un artículo de blog aparte.',
              'El resto de los productos corresponden a la orientación wellness: SOSU es un producto a base de ginseng, SAMSHIN y NOPA son productos de origen vegetal, y DANGUN-S, DANGUN-SS y DANGUN-SM son formulaciones a base de ginseng en distintas concentraciones dentro de la línea DANGUN (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 5). Aparte se encuentra NAD+ AIR SHOT: NAD+ 100 mg y NMN 40 mg por frasco, en formato para nebulizador — el fabricante indica expresamente: no inyectar, seguir las instrucciones del fabricante.',
            ],
          },
          {
            h: 'Por qué es un producto cosmético y no un dispositivo médico',
            p: [
              'La página de perfil de EXSOLU en el sitio de Teranova indica expresamente: “Para la línea profesional proporcionamos documentación cosmética estándar. La clasificación del producto y su uso permitido dependen del mercado de destino” — esta es la formulación propia del fabricante, no nuestra interpretación. Por eso, en todos los materiales de Teranova, la línea profesional de EXSOLU se describe únicamente como un producto cosmético de uso profesional — sin los términos “inyección” o “dispositivo médico”, salvo en la cita directa de la advertencia del NAD+ AIR SHOT.',
              'Este límite coincide con la lógica de la regulación coreana. En Corea, los productos inyectables estéticos y los productos derivados de tejido humano siguen procedimientos de autorización independientes como dispositivos médicos, mientras que los productos cosméticos se regulan de otra manera y, salvo la cosmética funcional, por lo general no requieren autorización producto por producto. En marzo de 2026, el Ministerio de Seguridad de Alimentos y Medicamentos de Corea (MFDS) anunció su intención de reforzar específicamente la vigilancia sobre los boosters a base de tejido humano — una categoría aparte que no coincide con la cosmética clásica (The Korea Economic Daily, 29.03.2026). Esta es una confirmación independiente de que el límite “cosmético / dispositivo médico”, en el que insiste el fabricante de EXSOLU, es real y efectivo, y no una mera formalidad.',
            ],
          },
          {
            h: 'EXSOLU Skincare — cinco productos para el cuidado diario',
            p: [
              'La línea EXSOLU Skincare traslada la misma experiencia a un formato para el hogar: cinco productos para hidratación, refuerzo de la barrera cutánea, firmeza, luminosidad y cuidado puntual (NOVAMEDINTL_EN①.pdf, p. 3). La mascarilla de noche Spider Silk Chitosan Super Mask se basa en quitosano (40.000 ppm) y un biopéptido derivado de seda de araña; los sueros Rose Firming y Ginseng Brightening se basan en PDRN de rosa y de ginseng con vitaminas y ácido hialurónico; y el dúo Vesicles Brightening Serum (Intensive y Daily) utiliza vesículas extracelulares de brócoli y el sistema de administración Reprosome™ (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 2-4).',
              'Lo que la ciencia independiente dice realmente sobre el quitosano, el PDRN y el ginseng — y dónde las afirmaciones del fabricante superan el nivel de evidencia clínica — se aborda en el siguiente artículo. El listado completo de productos, las composiciones y la documentación están disponibles en la página de EXSOLU del sitio de Teranova.',
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
      ja: {
        title: 'EXSOLU SkincareのPDRN、キトサン、高麗人参：これらの成分について科学は何を語っているか',
        excerpt: 'EXSOLU Skincareラインの5製品は、キトサン、PDRN、高麗人参を軸に構成されています。これらの成分について独立した科学レビューが何を述べているか、そしてメーカーの主張が臨床的エビデンスのレベルを先行する部分と一致する部分を見ていきます。',
        seoTitle: 'PDRN、キトサン、高麗人参：EXSOLU Skincareの成分と科学 · Teranova',
        seoDesc: '化粧品におけるキトサン、PDRN、高麗人参について分かっていること：独立した科学レビューと、NOVAMEDINTLのEXSOLU Skincareラインでのこれらの成分の使われ方。',
        sections: [
          {
            h: 'ナイトマスクのキトサンとスパイダーシルクバイオペプチド',
            p: [
              'Spider Silk Chitosan Super Mask（S0）は、キトサン（40,000ppm）とスパイダーシルク由来バイオペプチド（SR-PEPTIDE）をベースに、ナイアシンアミド、トラネキサム酸、マルチコラーゲン複合体を配合したナイトマスクです。メーカーの説明によれば、この処方は夜に塗布し朝に洗い流すもので、肌の上にやわらかな保湿膜を形成し、夜間の水分供給を行い、健康的で手入れされた印象の肌色を保つのを助けます（NOVAMEDINTL_KR_SKINCARE②.pdf、2ページ）。',
              'キトサンは化粧品において最も研究されたポリマーの一つです：KulkaとSionkowskaによるレビュー（Molecules、2023年）は、キトサンを天然の保湿剤かつ皮膜形成成分として説明し、肌表面への静電的な引力によって保湿層を形成し、水分損失を減らすとしています — これはまさにマスクの説明が指すメカニズムです。一方、スパイダーシルク由来バイオペプチド（SR-PEPTIDE）はメーカー独自の成分名であり、この特定の特許成分について公開された独立研究は見つかりませんでした。したがって、その効果は独立に確認された事実ではなく、NOVAMEDINTLの主張として留まります。',
            ],
          },
          {
            h: 'Rose FirmingとGinseng Brighteningセラムに含まれるPDRN',
            p: [
              'EXSOLU Rose Firming Serum（S1）は、ローズPDRN（加水分解DNA）、CICA由来細胞外小胞、ビタミンB12、アデノシン、グルタチオン、ヒアルロン酸、9種コラーゲン複合体をベースにした、日常的な保湿とハリのための製品です。EXSOLU Ginseng Brightening Serum（S2）は、高麗人参PDRNにナイアシンアミド、トラネキサム酸、グルタチオン、ビタミンCを組み合わせ、より明るく生き生きとした印象の肌色を目指す製品です（NOVAMEDINTL_KR_SKINCARE②.pdf、2～3ページ）。',
              'PDRN（ポリデオキシリボヌクレオチド）は、伝統的にサーモンから抽出されるDNA断片ベースの成分です。2025年の独立した科学レビュー（Pharmaceutics誌、Applied Sciences誌）は、皮膚科学領域でのエビデンスの蓄積が増えていると記録していますが、重要な留保があります：最も確かな臨床データは臨床現場での注射による使用に関するものであり、ホームユースのセラムに関するエビデンスはまだ少なく、濃度、処方の安定性、デリバリーシステムに大きく依存します。これはセラムにPDRNを使用すること自体を否定するものではありませんが、その効果に関する主張が独立に確認された臨床結果ではなく、メーカーの化粧品説明のままであることを意味します — これはEXSOLU自身の表記方針とも一致します。',
            ],
          },
          {
            h: '高麗人参：実験研究が示すもの',
            p: [
              'EXSOLU Ginseng Brightening Serumにおける高麗人参は、PDRNの形態だけで存在するわけではありません：この植物の活性サポニンであるジンセノサイドは別途研究されており、protopanaxadiol（PPD）型とprotopanaxatriol（PPT）型の2種類に分類されます。ジンセノサイドと肌状態に関する系統的レビューによれば、PPD型は主に抗酸化・抗炎症活性と関連し、PPT型はコラーゲン合成および細胞外マトリックスの代謝と関連しています。',
              '紅参抽出物に関する別の実験研究（MDPI、Molecules誌、2022年）では、酢酸エチル抽出物において顕著な抗酸化活性と明るさ効果が確認されました — ただしこれはin vitro、つまり試験管内での研究であり、ヒトを対象としたものではありません。これは独立レビューの全体的な結論と一致します：ジンセノサイドの抗酸化・明るさ活性は実験レベルで確認されていますが、ヒトにおける肌の明るさに関する臨床データはまだ十分とは言えません。',
            ],
          },
          {
            h: '購入者にとっての意味',
            p: [
              'この記事に記載されたすべての説明と効果は、NOVAMEDINTLが製品資料で述べている主張であり、化粧品の説明であって、独立に確認された臨床結果ではありません（EXSOLUプロフィールページで採用されているのと同じ表記方針です）。記載された成分は部分的な開示であり、完全なINCI成分表に代わるものではありません。',
              '独立した科学は、各主要成分について — キトサンの保湿膜、PDRNへの皮膚科学的関心、ジンセノサイドの抗酸化活性 — 妥当なメカニズムを裏付けていますが、その度合いは様々であり、多くの場合はEXSOLUの完成品よりも成分または実験研究のレベルで確認されたものです。成分と輸出市場ごとの制限に関する完全な文書は、TeranovaサイトのEXSOLUページから請求できます。',
            ],
          },
        ],
      },
      zh: {
        title: 'EXSOLU Skincare中的PDRN、壳聚糖与人参：科学对这些成分有何说法',
        excerpt: 'EXSOLU Skincare产品线中的五款产品均以壳聚糖、PDRN和人参为核心成分。本文梳理独立科学综述对这些成分的看法——以及制造商的说法在哪些方面超出了临床证据的水平，哪些方面与之相符。',
        seoTitle: 'PDRN、壳聚糖、人参：EXSOLU Skincare的成分与科学依据 · Teranova',
        seoDesc: '关于化妆品中壳聚糖、PDRN和人参的已知信息：独立科学综述，以及NOVAMEDINTL的EXSOLU Skincare产品线如何使用这些成分。',
        sections: [
          {
            h: '夜间面膜中的壳聚糖与蜘蛛丝生物肽',
            p: [
              'Spider Silk Chitosan Super Mask（S0）是一款以壳聚糖（40,000ppm）和蜘蛛丝来源生物肽（SR-PEPTIDE）为基础的夜间面膜，配方中还含有烟酰胺、氨甲环酸及多重胶原蛋白复合物。根据制造商的说明，该配方于夜间使用、次日晨起洗去：在肌肤表面形成柔软的保湿膜，提供夜间水分补充，并有助于维持看起来健康、有光泽的肤色（NOVAMEDINTL_KR_SKINCARE②.pdf，第2页）。',
              '壳聚糖是化妆品领域研究最充分的高分子之一：Kulka与Sionkowska的综述（《Molecules》，2023年）将其描述为一种天然保湿剂及成膜成分，通过与皮肤表面的静电吸引形成保湿层并减少水分流失——这正是该面膜说明所指的机制。而蜘蛛丝来源生物肽（SR-PEPTIDE）则是制造商自有的专有成分名称；我们未在公开文献中找到针对这一特定专利肽的独立研究，因此其功效仍停留在NOVAMEDINTL的说法层面，而非独立证实的事实。',
            ],
          },
          {
            h: 'Rose Firming与Ginseng Brightening精华中的PDRN',
            p: [
              'EXSOLU Rose Firming Serum（S1）以玫瑰PDRN（水解DNA）、积雪草来源细胞外囊泡、维生素B12、腺苷、谷胱甘肽、透明质酸及9种成分胶原复合物为基础，用于日常保湿与紧致。EXSOLU Ginseng Brightening Serum（S2）则采用人参PDRN，配合烟酰胺、氨甲环酸、谷胱甘肽和维生素C，用于提亮及令肤色看起来更有光泽（NOVAMEDINTL_KR_SKINCARE②.pdf，第2–3页）。',
              'PDRN（聚脱氧核糖核苷酸）是一种基于DNA片段的成分，传统上从鲑鱼中提取。2025年的独立科学综述（《Pharmaceutics》《Applied Sciences》）记录了皮肤科学领域证据基础的不断增长，但附带一个重要前提：最有力的临床数据来自临床场景下的注射应用，而针对居家使用精华液的证据则较为有限，且高度依赖于浓度、配方稳定性及输送系统。这并不否定PDRN用于精华液的做法，但意味着关于其效果的说法仍属于制造商对化妆品的描述，而非独立证实的临床结果——EXSOLU自身的表述方式也正是如此。',
            ],
          },
          {
            h: '人参：实验室研究显示了什么',
            p: [
              'EXSOLU Ginseng Brightening Serum中的人参并非只以PDRN形式存在：该植物的活性成分人参皂苷已被单独研究，分为两类——原人参二醇型（PPD）和原人参三醇型（PPT）。一项关于人参皂苷与皮肤状态的系统综述显示，PPD型主要与抗氧化和抗炎活性相关，而PPT型则与胶原合成及细胞外基质代谢相关。',
              '另一项针对红参提取物的实验室研究（MDPI，《Molecules》，2022年）发现，乙酸乙酯提取物表现出明显的抗氧化活性及提亮效果——但这是体外（in vitro）研究，而非人体研究。这与独立综述的总体结论一致：人参皂苷的抗氧化及提亮活性已在实验室层面得到证实，而关于人体皮肤提亮的临床数据仍不充分。',
            ],
          },
          {
            h: '对购买者意味着什么',
            p: [
              '本文中的所有描述和功效均为NOVAMEDINTL在其产品资料中提出的说法；它们是对化妆品的描述，而非独立证实的临床结果（与EXSOLU简介页面采用的表述方式一致）。所列成分仅为部分披露，并不能替代完整的INCI成分表。',
              '独立科学为每种关键成分——壳聚糖的保湿膜、PDRN在皮肤科学上的受关注程度、人参皂苷的抗氧化活性——都证实了合理的作用机制，但证实程度各不相同，且大多停留在成分或实验室研究层面，而非EXSOLU成品本身。关于成分及各出口市场限制的完整文件，可通过Teranova网站的EXSOLU页面索取。',
            ],
          },
        ],
      },
      de: {
        title: 'PDRN, Chitosan und Ginseng in EXSOLU Skincare: Was die Wissenschaft über diese Inhaltsstoffe sagt',
        excerpt: 'Die fünf Produkte der Linie EXSOLU Skincare basieren auf Chitosan, PDRN und Ginseng. Wir untersuchen, was unabhängige wissenschaftliche Übersichtsarbeiten zu diesen Inhaltsstoffen sagen — und wo die Aussagen des Herstellers über die klinische Evidenz hinausgehen und wo sie damit übereinstimmen.',
        seoTitle: 'PDRN, Chitosan, Ginseng: Inhaltsstoffe von EXSOLU Skincare und die Wissenschaft · Teranova',
        seoDesc: 'Was über Chitosan, PDRN und Ginseng in Kosmetika bekannt ist: unabhängige wissenschaftliche Übersichtsarbeiten und wie diese Inhaltsstoffe in der EXSOLU-Skincare-Linie von NOVAMEDINTL verwendet werden.',
        sections: [
          {
            h: 'Chitosan und das Spinnenseide-Biopeptid in der Nachtmaske',
            p: [
              'Die Spider Silk Chitosan Super Mask (S0) ist eine Nachtmaske auf Basis von Chitosan (40.000 ppm) und einem aus Spinnenseide gewonnenen Biopeptid (SR-PEPTIDE), mit Niacinamid, Tranexamsäure und einem Multi-Kollagen-Komplex. Laut Herstellerangabe wird die Formulierung nachts aufgetragen und morgens abgespült: Sie bildet einen weichen, feuchtigkeitsspendenden Film auf der Haut, sorgt für nächtliche Feuchtigkeit und hilft, einen gesund wirkenden, gepflegten Hautton zu erhalten (NOVAMEDINTL_KR_SKINCARE②.pdf, S. 2).',
              'Chitosan ist eines der am besten untersuchten Polymere in der Kosmetik: Eine Übersichtsarbeit von Kulka und Sionkowska (Molecules, 2023) beschreibt es als natürlichen Feuchthaltefaktor und filmbildende Komponente, die durch elektrostatische Anziehung zur Hautoberfläche eine hydratisierende Schicht bildet und den Wasserverlust reduziert — genau der Mechanismus, auf den die Beschreibung der Maske verweist. Das aus Spinnenseide gewonnene Biopeptid (SR-PEPTIDE) ist dagegen eine eigene, markenrechtlich geschützte Inhaltsstoffbezeichnung des Herstellers; wir fanden keine unabhängigen Studien zu diesem spezifischen patentierten Peptid in der frei zugänglichen Literatur, sodass seine Wirkung eine Behauptung von NOVAMEDINTL bleibt und kein unabhängig bestätigter Fakt ist.',
            ],
          },
          {
            h: 'PDRN in den Seren Rose Firming und Ginseng Brightening',
            p: [
              'Das EXSOLU Rose Firming Serum (S1) basiert auf Rosen-PDRN (hydrolysierte DNA), aus CICA gewonnenen extrazellulären Vesikeln, Vitamin B12, Adenosin, Glutathion, Hyaluronsäure und einem 9-Komponenten-Kollagenkomplex — für tägliche Feuchtigkeit und Festigkeit. Das EXSOLU Ginseng Brightening Serum (S2) verwendet Ginseng-PDRN mit Niacinamid, Tranexamsäure, Glutathion und Vitamin C — für einen helleren, frischer wirkenden Hautton (NOVAMEDINTL_KR_SKINCARE②.pdf, S. 2–3).',
              'PDRN (Polydesoxyribonukleotid) ist ein auf DNA-Fragmenten basierender Inhaltsstoff, der traditionell aus Lachs gewonnen wird. Unabhängige wissenschaftliche Übersichtsarbeiten aus dem Jahr 2025 (Pharmaceutics; Applied Sciences) verzeichnen eine wachsende Evidenzbasis in der Dermatologie, mit einem wichtigen Vorbehalt: Die belastbarsten klinischen Daten betreffen die injizierbare Anwendung in der Klinik, während die Evidenz für Seren zur häuslichen Anwendung weniger entwickelt ist und stark von Konzentration, Formulierungsstabilität und Transportsystem abhängt. Das entwertet den Einsatz von PDRN in einem Serum nicht, bedeutet aber, dass Aussagen über seine Wirkung eine kosmetische Produktbeschreibung des Herstellers bleiben und kein unabhängig bestätigtes klinisches Ergebnis — genau so, wie es die eigene Zuordnung von EXSOLU formuliert.',
            ],
          },
          {
            h: 'Ginseng: Was Laborstudien zeigen',
            p: [
              'Ginseng im EXSOLU Ginseng Brightening Serum ist nicht nur in Form von PDRN vorhanden: Die Ginsenoside der Pflanze, aktive Saponine, wurden gesondert untersucht und werden in zwei Typen unterteilt — Protopanaxadiol (PPD) und Protopanaxatriol (PPT). Eine systematische Übersichtsarbeit zu Ginsenosiden und Hautzustand zeigt, dass der PPD-Typ hauptsächlich mit antioxidativer und entzündungshemmender Aktivität verknüpft ist, während der PPT-Typ mit Kollagensynthese und dem Umsatz der extrazellulären Matrix in Verbindung steht.',
              'Eine gesonderte Laborstudie zu Rotginseng-Extrakten (MDPI, Molecules, 2022) zeigte eine ausgeprägte antioxidative Aktivität und einen aufhellenden Effekt bei einem Ethylacetat-Extrakt — in vitro, also im Reagenzglas, nicht an Menschen. Dies steht im Einklang mit dem Gesamtbefund unabhängiger Übersichtsarbeiten: Die antioxidative und aufhellende Aktivität von Ginsenosiden ist auf Laborebene bestätigt, während klinische Daten zur Hautaufhellung beim Menschen weniger umfassend bleiben.',
            ],
          },
          {
            h: 'Was das für den Käufer bedeutet',
            p: [
              'Alle Beschreibungen und Wirkungen in diesem Artikel sind Aussagen von NOVAMEDINTL in seinen Produktunterlagen; es handelt sich um Beschreibungen kosmetischer Produkte, nicht um unabhängig bestätigte klinische Ergebnisse (dieselbe Zuordnung, die auf der EXSOLU-Profilseite verwendet wird). Die genannten Inhaltsstoffe sind nur teilweise offengelegt und ersetzen keine vollständige INCI-Zusammensetzung.',
              'Die unabhängige Wissenschaft bestätigt für jeden Schlüsselinhaltsstoff einen plausiblen Mechanismus — den feuchtigkeitsspendenden Film von Chitosan, das dermatologische Interesse an PDRN, die antioxidative Aktivität von Ginsenosiden —, jedoch in unterschiedlichem Ausmaß und häufiger auf der Ebene des Inhaltsstoffs oder einer Laborstudie als auf der des fertigen EXSOLU-Produkts. Vollständige Zusammensetzungsunterlagen und marktspezifische Beschränkungen können über die EXSOLU-Seite der Teranova-Website angefragt werden.',
            ],
          },
        ],
      },
      fr: {
        title: 'PDRN, chitosane et ginseng dans EXSOLU Skincare : ce que dit la science sur ces ingrédients',
        excerpt: 'Les cinq produits de la gamme EXSOLU Skincare sont construits autour du chitosane, du PDRN et du ginseng. Nous examinons ce que les revues scientifiques indépendantes disent de ces ingrédients — et où les affirmations du fabricant dépassent le niveau des preuves cliniques, et où elles s’y alignent.',
        seoTitle: 'PDRN, chitosane, ginseng : les ingrédients d’EXSOLU Skincare et la science · Teranova',
        seoDesc: 'Ce que l’on sait du chitosane, du PDRN et du ginseng en cosmétique : revues scientifiques indépendantes et usage de ces ingrédients dans la gamme EXSOLU Skincare de NOVAMEDINTL.',
        sections: [
          {
            h: 'Le chitosane et le biopeptide de soie d’araignée dans le masque de nuit',
            p: [
              'Le Spider Silk Chitosan Super Mask (S0) est un masque de nuit construit autour du chitosane (40 000 ppm) et d’un biopeptide dérivé de soie d’araignée (SR-PEPTIDE), avec niacinamide, acide tranexamique et un complexe multi-collagène. Selon la description du fabricant, la formule s’applique le soir et se rince le matin : elle forme un film hydratant doux sur la peau, assure une hydratation nocturne et aide à préserver un teint d’aspect sain et soigné (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 2).',
              'Le chitosane est l’un des polymères les plus étudiés en cosmétique : une revue de Kulka et Sionkowska (Molecules, 2023) le décrit comme un humectant naturel et un composant filmogène qui, par attraction électrostatique avec la surface de la peau, forme une couche hydratante et réduit la perte d’eau — exactement le mécanisme auquel renvoie la description du masque. Le biopeptide dérivé de soie d’araignée (SR-PEPTIDE), en revanche, est une appellation d’ingrédient propriétaire du fabricant ; nous n’avons trouvé aucune étude indépendante sur ce peptide brevété spécifique dans la littérature ouverte, si bien que son effet reste une affirmation de NOVAMEDINTL et non un fait confirmé de manière indépendante.',
            ],
          },
          {
            h: 'Le PDRN dans les sérums Rose Firming et Ginseng Brightening',
            p: [
              'Le sérum EXSOLU Rose Firming Serum (S1) est construit autour du PDRN de rose (ADN hydrolysé), de vésicules extracellulaires dérivées de CICA, de vitamine B12, d’adénosine, de glutathion, d’acide hyaluronique et d’un complexe de collagène à 9 composants — pour une hydratation et une fermeté quotidiennes. Le EXSOLU Ginseng Brightening Serum (S2) utilise du PDRN de ginseng avec niacinamide, acide tranexamique, glutathion et vitamine C — pour un teint plus éclatant et plus frais (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 2-3).',
              'Le PDRN (polydésoxyribonucléotide) est un ingrédient à base de fragments d’ADN, traditionnellement extrait du saumon. Les revues scientifiques indépendantes de 2025 (Pharmaceutics ; Applied Sciences) font état d’une base de preuves croissante en dermatologie, avec une réserve importante : les données cliniques les plus solides concernent l’usage injectable en clinique, tandis que les preuves pour les sérums à usage domestique sont moins développées et dépendent fortement de la concentration, de la stabilité de la formule et du système de délivrance. Cela n’invalide pas l’usage du PDRN dans un sérum, mais signifie que les affirmations sur son effet restent une description cosmétique du fabricant, et non un résultat clinique confirmé de manière indépendante — exactement comme le formule l’attribution propre d’EXSOLU.',
            ],
          },
          {
            h: 'Le ginseng : ce que montrent les études en laboratoire',
            p: [
              'Le ginseng dans le EXSOLU Ginseng Brightening Serum n’est pas seulement présent sous forme de PDRN : les ginsénosides de la plante, des saponines actives, ont été étudiés séparément et se divisent en deux types — protopanaxadiol (PPD) et protopanaxatriol (PPT). Une revue systématique sur les ginsénosides et l’état de la peau montre que le type PPD est principalement lié à une activité antioxydante et anti-inflammatoire, tandis que le type PPT est lié à la synthèse du collagène et au renouvellement de la matrice extracellulaire.',
              'Une étude de laboratoire distincte sur des extraits de ginseng rouge (MDPI, Molecules, 2022) a montré une activité antioxydante marquée et un effet éclaircissant pour un extrait à l’acétate d’éthyle — in vitro, c’est-à-dire en éprouvette, pas chez l’humain. Cela concorde avec la conclusion générale des revues indépendantes : l’activité antioxydante et éclaircissante des ginsénosides est confirmée au niveau du laboratoire, tandis que les données cliniques sur l’éclaircissement de la peau chez l’humain restent moins complètes.',
            ],
          },
          {
            h: 'Ce que cela signifie pour l’acheteur',
            p: [
              'Toutes les descriptions et effets de cet article sont des affirmations de NOVAMEDINTL dans ses documents produits ; il s’agit de descriptions de produits cosmétiques, et non de résultats cliniques confirmés de manière indépendante (la même attribution que celle adoptée sur la page de profil EXSOLU). Les ingrédients mentionnés ne sont divulgués que partiellement et ne remplacent pas une composition INCI complète.',
              'La science indépendante confirme un mécanisme plausible pour chaque ingrédient clé — le film hydratant du chitosane, l’intérêt dermatologique pour le PDRN, l’activité antioxydante des ginsénosides — mais à des degrés variables et le plus souvent au niveau de l’ingrédient ou d’une étude de laboratoire plutôt qu’au niveau du produit EXSOLU fini. La documentation complète sur la composition et les restrictions spécifiques au marché peut être demandée via la page EXSOLU du site Teranova.',
            ],
          },
        ],
      },
      it: {
        title: 'PDRN, chitosano e ginseng in EXSOLU Skincare: cosa dice la scienza su questi ingredienti',
        excerpt: 'I cinque prodotti della linea EXSOLU Skincare sono costruiti attorno a chitosano, PDRN e ginseng. Analizziamo cosa dicono le revisioni scientifiche indipendenti su questi ingredienti — e dove le affermazioni del produttore superano il livello delle evidenze cliniche, e dove invece coincidono con esso.',
        seoTitle: 'PDRN, chitosano, ginseng: gli ingredienti di EXSOLU Skincare e la scienza · Teranova',
        seoDesc: 'Cosa si sa di chitosano, PDRN e ginseng in cosmetica: revisioni scientifiche indipendenti e come questi ingredienti sono usati nella linea EXSOLU Skincare di NOVAMEDINTL.',
        sections: [
          {
            h: 'Chitosano e il biopeptide di seta di ragno nella maschera notte',
            p: [
              'La Spider Silk Chitosan Super Mask (S0) è una maschera notte costruita su chitosano (40.000 ppm) e un biopeptide derivato da seta di ragno (SR-PEPTIDE), con niacinamide, acido tranexamico e un complesso multi-collagene. Secondo la descrizione del produttore, la formula si applica di notte e si rimuove al mattino: forma una pellicola idratante delicata sulla pelle, garantisce idratazione notturna e aiuta a mantenere un tono della pelle di aspetto sano e curato (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 2).',
              'Il chitosano è uno dei polimeri più studiati in cosmetica: una revisione di Kulka e Sionkowska (Molecules, 2023) lo descrive come un umettante naturale e un componente filmogeno che, per attrazione elettrostatica con la superficie della pelle, forma uno strato idratante e riduce la perdita d’acqua — esattamente il meccanismo a cui rinvia la descrizione della maschera. Il biopeptide derivato da seta di ragno (SR-PEPTIDE), invece, è una denominazione proprietaria dell’ingrediente del produttore; non abbiamo trovato studi indipendenti su questo specifico peptide brevettato nella letteratura aperta, per cui il suo effetto resta un’affermazione di NOVAMEDINTL e non un fatto confermato in modo indipendente.',
            ],
          },
          {
            h: 'Il PDRN nei sieri Rose Firming e Ginseng Brightening',
            p: [
              'Il siero EXSOLU Rose Firming Serum (S1) è costruito su PDRN di rosa (DNA idrolizzato), vesicole extracellulari derivate da CICA, vitamina B12, adenosina, glutatione, acido ialuronico e un complesso di collagene a 9 componenti — per idratazione e compattezza quotidiane. Il EXSOLU Ginseng Brightening Serum (S2) utilizza PDRN di ginseng con niacinamide, acido tranexamico, glutatione e vitamina C — per un tono della pelle più luminoso e fresco (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 2-3).',
              'Il PDRN (polidesossiribonucleotide) è un ingrediente a base di frammenti di DNA, tradizionalmente estratto dal salmone. Le revisioni scientifiche indipendenti del 2025 (Pharmaceutics; Applied Sciences) registrano una base di evidenze crescente in dermatologia, con una riserva importante: i dati clinici più solidi riguardano l’uso iniettabile in clinica, mentre le evidenze per i sieri ad uso domestico sono meno sviluppate e dipendono fortemente da concentrazione, stabilità della formulazione e sistema di veicolazione. Ciò non invalida l’uso del PDRN in un siero, ma significa che le affermazioni sul suo effetto restano una descrizione cosmetica del produttore, non un risultato clinico confermato in modo indipendente — esattamente come formulato nella stessa attribuzione di EXSOLU.',
            ],
          },
          {
            h: 'Il ginseng: cosa mostrano gli studi di laboratorio',
            p: [
              'Il ginseng nel EXSOLU Ginseng Brightening Serum non è presente solo come PDRN: i ginsenosidi della pianta, saponine attive, sono stati studiati separatamente e si dividono in due tipi — protopanaxadiolo (PPD) e protopanaxatriolo (PPT). Una revisione sistematica su ginsenosidi e condizione della pelle mostra che il tipo PPD è principalmente legato ad attività antiossidante e antinfiammatoria, mentre il tipo PPT è legato alla sintesi del collagene e al turnover della matrice extracellulare.',
              'Uno studio di laboratorio separato su estratti di ginseng rosso (MDPI, Molecules, 2022) ha mostrato una marcata attività antiossidante e un effetto schiarente per un estratto in acetato di etile — in vitro, cioè in provetta, non sull’uomo. Ciò è coerente con la conclusione generale delle revisioni indipendenti: l’attività antiossidante e schiarente dei ginsenosidi è confermata a livello di laboratorio, mentre i dati clinici sulla schiaritura della pelle nell’uomo restano meno completi.',
            ],
          },
          {
            h: 'Cosa significa questo per l’acquirente',
            p: [
              'Tutte le descrizioni e gli effetti di questo articolo sono affermazioni di NOVAMEDINTL nei suoi materiali di prodotto; si tratta di descrizioni di prodotti cosmetici, non di risultati clinici confermati in modo indipendente (la stessa attribuzione adottata nella pagina di profilo EXSOLU). Gli ingredienti elencati sono divulgati solo parzialmente e non sostituiscono una composizione INCI completa.',
              'La scienza indipendente conferma un meccanismo plausibile per ciascun ingrediente chiave — la pellicola idratante del chitosano, l’interesse dermatologico per il PDRN, l’attività antiossidante dei ginsenosidi — ma in misura variabile e più spesso a livello dell’ingrediente o di uno studio di laboratorio che del prodotto EXSOLU finito. La documentazione completa sulla composizione e le restrizioni specifiche di mercato possono essere richieste tramite la pagina EXSOLU del sito Teranova.',
            ],
          },
        ],
      },
      es: {
        title: 'PDRN, quitosano y ginseng en EXSOLU Skincare: qué dice la ciencia sobre estos ingredientes',
        excerpt: 'Los cinco productos de la línea EXSOLU Skincare están construidos alrededor del quitosano, el PDRN y el ginseng. Analizamos qué dicen las revisiones científicas independientes sobre estos ingredientes — y dónde las afirmaciones del fabricante se adelantan al nivel de evidencia clínica, y dónde coinciden con él.',
        seoTitle: 'PDRN, quitosano, ginseng: los ingredientes de EXSOLU Skincare y la ciencia · Teranova',
        seoDesc: 'Qué se sabe del quitosano, el PDRN y el ginseng en cosmética: revisiones científicas independientes y cómo se usan estos ingredientes en la línea EXSOLU Skincare de NOVAMEDINTL.',
        sections: [
          {
            h: 'El quitosano y el biopéptido de seda de araña en la mascarilla de noche',
            p: [
              'La Spider Silk Chitosan Super Mask (S0) es una mascarilla de noche construida sobre quitosano (40.000 ppm) y un biopéptido derivado de seda de araña (SR-PEPTIDE), con niacinamida, ácido tranexámico y un complejo multicolágeno. Según la descripción del fabricante, la fórmula se aplica por la noche y se enjuaga por la mañana: forma una película hidratante suave sobre la piel, aporta hidratación nocturna y ayuda a mantener un tono de piel de aspecto sano y cuidado (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 2).',
              'El quitosano es uno de los polímeros más estudiados en cosmética: una revisión de Kulka y Sionkowska (Molecules, 2023) lo describe como un humectante natural y un componente formador de película que, por atracción electrostática con la superficie de la piel, forma una capa hidratante y reduce la pérdida de agua — exactamente el mecanismo al que remite la descripción de la mascarilla. El biopéptido derivado de seda de araña (SR-PEPTIDE), en cambio, es una denominación de ingrediente propia del fabricante; no encontramos estudios independientes sobre este péptido patentado específico en la literatura abierta, por lo que su efecto sigue siendo una afirmación de NOVAMEDINTL y no un hecho confirmado de forma independiente.',
            ],
          },
          {
            h: 'El PDRN en los sueros Rose Firming y Ginseng Brightening',
            p: [
              'El sérum EXSOLU Rose Firming Serum (S1) está construido sobre PDRN de rosa (ADN hidrolizado), vesículas extracelulares derivadas de CICA, vitamina B12, adenosina, glutatión, ácido hialurónico y un complejo de colágeno de 9 componentes — para hidratación y firmeza diarias. El EXSOLU Ginseng Brightening Serum (S2) utiliza PDRN de ginseng con niacinamida, ácido tranexámico, glutatión y vitamina C — para un tono de piel más luminoso y fresco (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 2-3).',
              'El PDRN (polidesoxirribonucleótido) es un ingrediente a base de fragmentos de ADN, tradicionalmente obtenido del salmón. Las revisiones científicas independientes de 2025 (Pharmaceutics; Applied Sciences) registran una base de evidencia creciente en dermatología, con una salvedad importante: los datos clínicos más sólidos corresponden al uso inyectable en clínica, mientras que la evidencia para sueros de uso doméstico está menos desarrollada y depende en gran medida de la concentración, la estabilidad de la formulación y el sistema de administración. Esto no invalida el uso del PDRN en un sérum, pero significa que las afirmaciones sobre su efecto siguen siendo una descripción cosmética del fabricante, y no un resultado clínico confirmado de forma independiente — exactamente como lo formula la propia atribución de EXSOLU.',
            ],
          },
          {
            h: 'El ginseng: qué muestran los estudios de laboratorio',
            p: [
              'El ginseng en el EXSOLU Ginseng Brightening Serum no está presente solo como PDRN: los ginsenósidos de la planta, saponinas activas, se han estudiado por separado y se dividen en dos tipos — protopanaxadiol (PPD) y protopanaxatriol (PPT). Una revisión sistemática sobre ginsenósidos y estado de la piel muestra que el tipo PPD está principalmente vinculado a actividad antioxidante y antiinflamatoria, mientras que el tipo PPT está vinculado a la síntesis de colágeno y la renovación de la matriz extracelular.',
              'Un estudio de laboratorio independiente sobre extractos de ginseng rojo (MDPI, Molecules, 2022) mostró una marcada actividad antioxidante y un efecto aclarante para un extracto en acetato de etilo — in vitro, es decir, en un tubo de ensayo, no en personas. Esto es coherente con la conclusión general de las revisiones independientes: la actividad antioxidante y aclarante de los ginsenósidos está confirmada a nivel de laboratorio, mientras que los datos clínicos sobre el aclarado de la piel en humanos siguen siendo menos completos.',
            ],
          },
          {
            h: 'Qué significa esto para el comprador',
            p: [
              'Todas las descripciones y efectos de este artículo son afirmaciones de NOVAMEDINTL en sus materiales de producto; son descripciones de productos cosméticos, no resultados clínicos confirmados de forma independiente (la misma atribución adoptada en la página de perfil de EXSOLU). Los ingredientes mencionados se divulgan solo parcialmente y no sustituyen una composición INCI completa.',
              'La ciencia independiente confirma un mecanismo plausible para cada ingrediente clave — la película hidratante del quitosano, el interés dermatológico por el PDRN, la actividad antioxidante de los ginsenósidos — pero en distinto grado y, con mayor frecuencia, a nivel del ingrediente o de un estudio de laboratorio más que del producto EXSOLU terminado. La documentación completa sobre composición y las restricciones específicas de cada mercado pueden solicitarse a través de la página de EXSOLU en el sitio de Teranova.',
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
      ja: {
        title: '化粧品におけるエクソソームと細胞外小胞：すでに証明されたことと、まだ証明されていないこと',
        excerpt: 'EXSOLU Exosomeラインと「Vesicles Brightening」セラムは、エクソソームと細胞外小胞をベースにしています。2024～2025年の独立した科学レビューがこの成分群について何を述べているか、そしてメーカーがなぜこれらを厳密に化粧品の用語で説明しているのかを見ていきます。',
        seoTitle: '化粧品におけるエクソソーム：科学とEXSOLU Exosomeライン · Teranova',
        seoDesc: '化粧品におけるエクソソームと細胞外小胞について科学が知っていること：2024～2025年の独立レビューと、NOVAMEDINTLのEXSOLUプロフェッショナルラインおよびセラムでのこの成分の使われ方。',
        sections: [
          {
            h: 'EXSOLUプロフェッショナルケアにおけるExosomeライン',
            p: [
              'EXSOLUプロフェッショナルラインの5製品はエクソソームをベースにしています。BOOST SOLUTIONはエクソソーム、コラーゲントリペプチド、ヒアルロン酸を組み合わせ、保湿と弾力をケアします。HYDRO-WHITEはトラネキサム酸を加え、保湿と均一に見える肌色をケアします。EXO-PLUSはPDRNコーティングエクソソーム（ナノ粒子10億個）を含むプロフェッショナル向けスカルプケア製品です。EXOBENE-Sはエクソソーム、ヒアルロン酸、アミノ酸を組み合わせ、なめらかでハリがあり水分感のある肌に見せるケアを行い、EXOBENE-Hはエクソソーム、ナイアシンアミド、ビオチン、銅ペプチドを含むスカルプ・ヘアケア製品です（EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf、4ページ）。',
              'EXSOLUのプロフェッショナル製品群全体と同様に、このラインもメーカーによって厳密に化粧品として説明されています：会社はこのラインについて標準的な化粧品関連文書を提供し、現段階では医療用または注射用の資料は提供していません（EXSOLU表記、Teranovaサイトのプロフィールページ）。そのため以下では、エクソソームを医療処置としてではなく、化粧品処方の成分として取り上げます。',
            ],
          },
          {
            h: 'Vesicles Brightening Serum：ブロッコリー由来の細胞外小胞',
            p: [
              'EXSOLU Skincareラインでは、同じアイデアが家庭用として実現されています：Vesicles Brightening SerumはIntensive（10mL）とDaily（30mL）の形態で、ブロッコリー由来の細胞外小胞、ビタミンB12、Reprosome™デリバリーシステムをベースにしています。メーカーはこれを、目元・口元など敏感な部位のための集中ケア・デイリーケア用プレミアムセラムとして説明しています（NOVAMEDINTL_KR_SKINCARE②.pdf、3～4ページ）。',
              'ここで小胞が植物由来であることは偶然の詳細ではありません：これは科学分野自体の顕著な傾向と一致しています — 規制上および消費者側の理由から、動物・ヒト由来の小胞から植物由来の小胞へ移行する流れです。',
            ],
          },
          {
            h: '独立した科学レビューが述べていること',
            p: [
              '皮膚科学領域におけるエクソソーム応用に関する総合レビュー（International Journal of Dermatology、2025年）は、しわへの対応、肌の水分供給と弾力の改善に対するメカニズム上の可能性を記録しています — この分野は急速に成長しており、化粧品におけるエクソソームに関する論文数は2014年から2024年にかけて指数関数的に増加しました。',
              '同時に、Villarreal-Gómezらによる系統的レビュー（Cosmetics、2025年）は限界を明確に指摘しています：この分野にはまだ十分な臨床的検証と標準化が不足しており、エクソソーム単独では追加の細胞外タンパク質なしに主張された効果全体を説明できない可能性があります — エクソソーム化粧品そのものへの規制承認を語る前に、より広範な評価が必要です。レビューはまた、小胞の特性評価に関する統一された基準（MISEV基準）が存在しないことも指摘しています — つまり、製品に実際に主張された小胞が含まれているかどうかの形式的な確認さえ、メーカー間で標準化されていないのです。',
            ],
          },
          {
            h: '購入者への結論',
            p: [
              '独立したレビューの結論は一致しています：化粧品におけるエクソソームと細胞外小胞には妥当なメカニズム上の可能性がありますが、臨床試験は少なく、標準化もまだなく、エクソソーム化粧品製品がそれ自体として独立した規制承認を得た例はまだありません。したがって、BOOST SOLUTION、HYDRO-WHITE、EXO-PLUS、EXOBENE-S、EXOBENE-HおよびVesicles Brighteningセラムの効果に関する説明は、NOVAMEDINTLが自社の化粧品について述べている主張であり、独立に確認された臨床結果ではありません。',
              'これは購入者にとってこのラインの魅力を損なうものではありません — むしろ正直な期待値を設定し、メーカー自身がなぜこのラインの文書を化粧品レベルに留めているのかを説明するものです。完全な成分情報と輸出市場別の文書は、TeranovaサイトのEXSOLUページから確認できます。',
            ],
          },
        ],
      },
      zh: {
        title: '化妆品中的外泌体与细胞外囊泡：已被证实的，以及尚未被证实的',
        excerpt: 'EXSOLU Exosome产品线及Vesicles Brightening精华均以外泌体和细胞外囊泡为基础。本文梳理2024–2025年独立科学综述对这一成分类别的看法，以及制造商为何始终以化妆品术语来描述它们。',
        seoTitle: '化妆品中的外泌体：科学依据与EXSOLU Exosome产品线 · Teranova',
        seoDesc: '科学界对化妆品中外泌体和细胞外囊泡的已知认识：2024–2025年独立综述，以及NOVAMEDINTL旗下EXSOLU专业产品线和精华液中这一成分的使用方式。',
        sections: [
          {
            h: 'EXSOLU专业护理中的Exosome产品线',
            p: [
              'EXSOLU专业产品线中有五款产品以外泌体为基础。BOOST SOLUTION结合外泌体、胶原三肽与透明质酸，用于保湿与弹性护理。HYDRO-WHITE额外添加氨甲环酸，用于保湿及改善肤色均匀度外观。EXO-PLUS是含PDRN包被外泌体（10亿纳米颗粒）的专业头皮护理产品。EXOBENE-S将外泌体与透明质酸、氨基酸结合，令肌肤看起来更光滑、紧致、水润，而EXOBENE-H则是含外泌体、烟酰胺、生物素与铜肽的头皮及头发护理产品（EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf，第4页）。',
              '与EXSOLU专业产品线的其他产品一样，这条产品线同样被制造商严格定位为化妆品：公司为其提供标准化妆品相关文件，目前阶段不提供医疗或注射类资料（EXSOLU表述，Teranova网站简介页面）。因此，以下内容将外泌体作为化妆品配方中的一种成分来讨论，而非作为医疗操作。',
            ],
          },
          {
            h: 'Vesicles Brightening Serum：西兰花来源的细胞外囊泡',
            p: [
              '在EXSOLU Skincare产品线中，同样的理念被用于居家场景：Vesicles Brightening Serum有Intensive（10毫升）和Daily（30毫升）两种形态，以西兰花来源的细胞外囊泡、维生素B12及Reprosome™输送系统为基础。制造商将其描述为用于眼部、唇部等敏感部位的集中护理及日常护理高端精华液（NOVAMEDINTL_KR_SKINCARE②.pdf，第3–4页）。',
              '这里囊泡采用植物来源并非偶然的细节：这与该科学领域本身的一个显著趋势相符——出于监管及消费者方面的考量，行业正从动物及人体来源的囊泡转向植物来源的囊泡。',
            ],
          },
          {
            h: '独立科学综述有何说法',
            p: [
              '一项关于外泌体在皮肤科学应用的综合综述（《International Journal of Dermatology》，2025年）记录了其在改善皱纹、提升肌肤水分及弹性方面的机制潜力——该领域发展迅速：2014年至2024年间，关于化妆品中外泌体的论文数量呈指数级增长。',
              '与此同时，Villarreal-Gómez等人的系统综述（《Cosmetics》，2025年）直接指出了局限性：该领域目前仍缺乏充分的临床验证和标准化，若没有额外的细胞外蛋白质，仅靠外泌体可能无法解释所宣称的全部功效——在谈及外泌体化妆品本身获得监管批准之前，仍需进行更广泛的评估。综述还指出，囊泡特性表征尚缺乏统一标准（即MISEV标准）——也就是说，即便是产品中确实含有所宣称囊泡这一形式上的确认，在不同制造商之间也并非都是标准化的。',
            ],
          },
          {
            h: '对购买者的结论',
            p: [
              '独立综述的结论是一致的：化妆品中的外泌体与细胞外囊泡具有合理的机制潜力，但临床试验稀少，标准化尚缺，目前尚无任何外泌体化妆品产品本身获得过独立的监管批准。因此，BOOST SOLUTION、HYDRO-WHITE、EXO-PLUS、EXOBENE-S、EXOBENE-H以及Vesicles Brightening精华液的功效描述，均为NOVAMEDINTL对其自有化妆品所作的说法，而非独立证实的临床结果。',
              '这并不会降低该产品线对购买者的吸引力——相反，它设定了诚实的预期，也解释了制造商为何自行将该产品线的文件限定在化妆品层级。完整成分信息及各出口市场相关文件，可通过Teranova网站的EXSOLU页面查阅。',
            ],
          },
        ],
      },
      de: {
        title: 'Exosomen und extrazelluläre Vesikel in Kosmetika: Was belegt ist, und was nicht',
        excerpt: 'Die Linie EXSOLU Exosome und die Seren Vesicles Brightening basieren auf Exosomen und extrazellulären Vesikeln. Wir untersuchen, was unabhängige wissenschaftliche Übersichtsarbeiten von 2024–2025 zu dieser Inhaltsstoffklasse sagen — und warum der Hersteller sie strikt in kosmetischen Begriffen beschreibt.',
        seoTitle: 'Exosomen in Kosmetika: die Wissenschaft und die Linie EXSOLU Exosome · Teranova',
        seoDesc: 'Was die Wissenschaft über Exosomen und extrazelluläre Vesikel in Kosmetika weiß: unabhängige Übersichtsarbeiten von 2024–2025 und wie dieser Inhaltsstoff in der professionellen Linie und den Seren von EXSOLU von NOVAMEDINTL eingesetzt wird.',
        sections: [
          {
            h: 'Die Exosome-Linie in der professionellen Pflege von EXSOLU',
            p: [
              'Fünf Produkte der professionellen EXSOLU-Linie basieren auf Exosomen. BOOST SOLUTION kombiniert Exosomen, Kollagen-Tripeptid und Hyaluronsäure für Feuchtigkeit und Elastizität. HYDRO-WHITE fügt Tranexamsäure hinzu — für Feuchtigkeit und einen gleichmäßiger wirkenden Hautton. EXO-PLUS ist professionelle Kopfhautpflege mit PDRN-beschichteten Exosomen (1 Milliarde Nanopartikel). EXOBENE-S kombiniert Exosomen mit Hyaluronsäure und Aminosäuren für glattere, straffer und feuchter wirkende Haut, während EXOBENE-H Kopfhaut- und Haarpflege mit Exosomen, Niacinamid, Biotin und Kupferpeptid ist (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, S. 4).',
              'Wie das übrige professionelle EXSOLU-Sortiment wird auch diese Linie vom Hersteller strikt als kosmetisches Produkt beschrieben: Das Unternehmen stellt dafür standardmäßige kosmetische Unterlagen bereit, ein medizinisches oder injizierbares Dossier wird in diesem Stadium nicht angeboten (EXSOLU-Zuordnung, Profilseite auf der Teranova-Website). Deshalb behandeln wir Exosomen im Folgenden als Inhaltsstoff kosmetischer Formulierungen, nicht als medizinisches Verfahren.',
            ],
          },
          {
            h: 'Vesicles Brightening Serum: aus Brokkoli gewonnene extrazelluläre Vesikel',
            p: [
              'In der Linie EXSOLU Skincare wird dieselbe Idee ins Heimformat übertragen: Das Vesicles Brightening Serum, in den Formaten Intensive (10 ml) und Daily (30 ml), basiert auf aus Brokkoli gewonnenen extrazellulären Vesikeln, Vitamin B12 und dem Reprosome™-Transportsystem. Der Hersteller beschreibt sie als hochwertige Seren für die gezielte und tägliche Anwendung rund um Augen, Lippen und empfindliche Hautbereiche (NOVAMEDINTL_KR_SKINCARE②.pdf, S. 3–4).',
              'Die pflanzliche Herkunft dieser Vesikel ist kein zufälliges Detail: Sie entspricht einem auffälligen Trend innerhalb der Wissenschaft selbst — einer Verschiebung von tier- und menschenbasierten Vesikeln zu pflanzenbasierten Vesikeln, die unter anderem auf regulatorische und verbraucherseitige Überlegungen zurückgeht.',
            ],
          },
          {
            h: 'Was unabhängige wissenschaftliche Übersichtsarbeiten sagen',
            p: [
              'Eine umfassende Übersichtsarbeit zu Exosomen-Anwendungen in der Dermatologie (International Journal of Dermatology, 2025) verzeichnet mechanistisches Potenzial gegen Falten sowie zur Verbesserung von Hautfeuchtigkeit und -elastizität — das Feld wächst rasant: Die Zahl der Publikationen zu Exosomen in Kosmetika stieg zwischen 2014 und 2024 exponentiell.',
              'Gleichzeitig benennt eine systematische Übersichtsarbeit von Villarreal-Gómez und Koautoren (Cosmetics, 2025) die Einschränkung direkt: Dem Feld fehlt es noch an ausreichender klinischer Validierung und Standardisierung, und Exosomen allein könnten ohne zusätzliche extrazelluläre Proteine nicht die gesamte behauptete Wirkung erklären — eine umfassendere Bewertung ist nötig, bevor von einer regulatorischen Zulassung speziell für exosomale Kosmetikprodukte gesprochen werden kann. Die Übersichtsarbeiten verweisen zudem auf das Fehlen einheitlicher Standards zur Charakterisierung von Vesikeln (die MISEV-Kriterien) — das heißt, selbst die formale Bestätigung, dass ein Produkt tatsächlich die behaupteten Vesikel enthält, ist zwischen Herstellern nicht immer standardisiert.',
            ],
          },
          {
            h: 'Das Fazit für den Käufer',
            p: [
              'Die Schlussfolgerung unabhängiger Übersichtsarbeiten ist einheitlich: Exosomen und extrazelluläre Vesikel in Kosmetika besitzen plausibles mechanistisches Potenzial, doch klinische Studien sind rar, eine Standardisierung fehlt, und kein exosomales Kosmetikprodukt hat bislang eine gesonderte regulatorische Zulassung als solches erhalten. Deshalb sind die Wirkungsbeschreibungen für BOOST SOLUTION, HYDRO-WHITE, EXO-PLUS, EXOBENE-S, EXOBENE-H und die Vesicles-Brightening-Seren Behauptungen von NOVAMEDINTL über seine eigenen kosmetischen Produkte, kein unabhängig bestätigtes klinisches Ergebnis.',
              'Das macht die Linie für den Käufer nicht weniger interessant — es setzt ehrliche Erwartungen und erklärt, warum der Hersteller selbst die Unterlagen für diese Linie auf kosmetischem Niveau hält. Vollständige Zusammensetzungsangaben und marktspezifische Unterlagen sind auf der EXSOLU-Seite der Teranova-Website erhältlich.',
            ],
          },
        ],
      },
      fr: {
        title: 'Exosomes et vésicules extracellulaires en cosmétique : ce qui est prouvé, et ce qui ne l’est pas',
        excerpt: 'La gamme EXSOLU Exosome et les sérums Vesicles Brightening sont construits autour des exosomes et des vésicules extracellulaires. Nous examinons ce que disent les revues scientifiques indépendantes de 2024-2025 sur cette classe d’ingrédients — et pourquoi le fabricant les décrit strictement en termes cosmétiques.',
        seoTitle: 'Les exosomes en cosmétique : la science et la gamme EXSOLU Exosome · Teranova',
        seoDesc: 'Ce que la science sait des exosomes et des vésicules extracellulaires en cosmétique : revues indépendantes de 2024-2025 et usage de cet ingrédient dans la gamme professionnelle et les sérums EXSOLU de NOVAMEDINTL.',
        sections: [
          {
            h: 'La ligne Exosome dans le soin professionnel EXSOLU',
            p: [
              'Cinq produits de la gamme professionnelle EXSOLU sont construits autour des exosomes. BOOST SOLUTION combine exosomes, tripeptide de collagène et acide hyaluronique pour l’hydratation et l’élasticité. HYDRO-WHITE ajoute de l’acide tranexamique — pour l’hydratation et un teint d’aspect plus uniforme. EXO-PLUS est un soin professionnel du cuir chevelu à base d’exosomes enrobés de PDRN (1 milliard de nanoparticules). EXOBENE-S combine exosomes, acide hyaluronique et acides aminés pour une peau d’aspect plus lisse, plus ferme et plus hydratée, tandis qu’EXOBENE-H est un soin du cuir chevelu et des cheveux à base d’exosomes, de niacinamide, de biotine et de peptide de cuivre (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 4).',
              'Comme le reste de l’assortiment professionnel EXSOLU, cette ligne est décrite par le fabricant strictement comme un produit cosmétique : l’entreprise fournit pour elle une documentation cosmétique standard, sans dossier médical ou injectable proposé à ce stade (attribution EXSOLU, page de profil sur le site Teranova). C’est pourquoi, ci-dessous, nous traitons les exosomes comme un ingrédient de formulations cosmétiques, et non comme une procédure médicale.',
            ],
          },
          {
            h: 'Vesicles Brightening Serum : vésicules extracellulaires de brocoli',
            p: [
              'Dans la gamme EXSOLU Skincare, la même idée est transposée à la maison : le Vesicles Brightening Serum, en formats Intensive (10 ml) et Daily (30 ml), est construit autour de vésicules extracellulaires dérivées de brocoli, de vitamine B12 et du système de délivrance Reprosome™. Le fabricant les décrit comme des sérums haut de gamme à usage ciblé et quotidien pour les zones autour des yeux, des lèvres et les zones de peau délicates (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 3-4).',
              'L’origine végétale de ces vésicules n’est pas un détail accessoire : elle s’inscrit dans une tendance notable du domaine scientifique lui-même — un glissement des vésicules d’origine animale et humaine vers des vésicules d’origine végétale, motivé en partie par des considérations réglementaires et de consommation.',
            ],
          },
          {
            h: 'Ce que disent les revues scientifiques indépendantes',
            p: [
              'Une revue complète des applications des exosomes en dermatologie (International Journal of Dermatology, 2025) relève un potentiel mécanistique contre les rides et pour l’amélioration de l’hydratation et de l’élasticité de la peau — le domaine se développe rapidement : le nombre de publications sur les exosomes en cosmétique a augmenté de façon exponentielle entre 2014 et 2024.',
              'Dans le même temps, une revue systématique de Villarreal-Gómez et coauteurs (Cosmetics, 2025) désigne directement la limite : le domaine manque encore de validation clinique et de normalisation suffisantes, et les exosomes seuls pourraient ne pas expliquer l’intégralité de l’effet revendiqué sans protéines extracellulaires supplémentaires — une évaluation plus large est nécessaire avant de parler d’approbation réglementaire spécifiquement pour les produits cosmétiques exosomaux. Les revues signalent aussi l’absence de normes unifiées de caractérisation des vésicules (critères MISEV) — c’est-à-dire que même la confirmation formelle qu’un produit contient réellement les vésicules revendiquées n’est pas toujours normalisée entre fabricants.',
            ],
          },
          {
            h: 'Ce qu’il faut retenir pour l’acheteur',
            p: [
              'La conclusion des revues indépendantes est cohérente : les exosomes et les vésicules extracellulaires en cosmétique présentent un potentiel mécanistique plausible, mais les essais cliniques sont rares, la normalisation fait défaut, et aucun produit cosmétique exosomal n’a encore reçu d’approbation réglementaire distincte en tant que tel. C’est pourquoi les descriptions d’effets de BOOST SOLUTION, HYDRO-WHITE, EXO-PLUS, EXOBENE-S, EXOBENE-H et des sérums Vesicles Brightening sont des affirmations de NOVAMEDINTL sur ses propres produits cosmétiques, et non un résultat clinique confirmé de manière indépendante.',
              'Cela ne rend pas la gamme moins intéressante pour l’acheteur — cela fixe des attentes honnêtes et explique pourquoi le fabricant lui-même maintient la documentation de cette ligne au niveau cosmétique. La composition complète et la documentation spécifique au marché sont disponibles sur la page EXSOLU du site Teranova.',
            ],
          },
        ],
      },
      it: {
        title: 'Esosomi e vesicole extracellulari in cosmetica: cosa è dimostrato e cosa no',
        excerpt: 'La linea EXSOLU Exosome e i sieri Vesicles Brightening sono costruiti su esosomi e vesicole extracellulari. Analizziamo cosa dicono le revisioni scientifiche indipendenti 2024-2025 su questa classe di ingredienti — e perché il produttore le descrive rigorosamente in termini cosmetici.',
        seoTitle: 'Gli esosomi in cosmetica: la scienza e la linea EXSOLU Exosome · Teranova',
        seoDesc: 'Cosa sa la scienza sugli esosomi e le vesicole extracellulari in cosmetica: revisioni indipendenti 2024-2025 e come questo ingrediente è usato nella linea professionale e nei sieri EXSOLU di NOVAMEDINTL.',
        sections: [
          {
            h: 'La linea Exosome nella cura professionale EXSOLU',
            p: [
              'Cinque prodotti della linea professionale EXSOLU sono costruiti sugli esosomi. BOOST SOLUTION combina esosomi, tripeptide di collagene e acido ialuronico per idratazione ed elasticità. HYDRO-WHITE aggiunge acido tranexamico — per idratazione e un tono della pelle di aspetto più uniforme. EXO-PLUS è una cura professionale del cuoio capelluto con esosomi rivestiti di PDRN (1 miliardo di nanoparticelle). EXOBENE-S combina esosomi con acido ialuronico e aminoacidi per una pelle di aspetto più liscio, compatto e idratato, mentre EXOBENE-H è cura del cuoio capelluto e dei capelli con esosomi, niacinamide, biotina e peptide di rame (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 4).',
              'Come il resto dell’assortimento professionale EXSOLU, questa linea è descritta dal produttore rigorosamente come prodotto cosmetico: l’azienda fornisce per essa documentazione cosmetica standard, senza alcun dossier medico o iniettabile offerto in questa fase (attribuzione EXSOLU, pagina di profilo sul sito Teranova). Per questo, di seguito, trattiamo gli esosomi come un ingrediente di formulazioni cosmetiche, non come una procedura medica.',
            ],
          },
          {
            h: 'Vesicles Brightening Serum: vesicole extracellulari di broccolo',
            p: [
              'Nella linea EXSOLU Skincare, la stessa idea viene trasferita a casa: il Vesicles Brightening Serum, nei formati Intensive (10 ml) e Daily (30 ml), è costruito su vesicole extracellulari derivate da broccolo, vitamina B12 e il sistema di veicolazione Reprosome™. Il produttore le descrive come sieri premium per uso mirato e quotidiano nelle zone attorno agli occhi, alle labbra e nelle aree di pelle delicate (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 3-4).',
              'L’origine vegetale di queste vesicole non è un dettaglio accessorio: coincide con una tendenza rilevante nello stesso ambito scientifico — uno spostamento dalle vesicole di origine animale e umana verso vesicole di origine vegetale, motivato in parte da considerazioni regolatorie e di consumo.',
            ],
          },
          {
            h: 'Cosa dicono le revisioni scientifiche indipendenti',
            p: [
              'Una revisione completa delle applicazioni degli esosomi in dermatologia (International Journal of Dermatology, 2025) registra un potenziale meccanicistico contro le rughe e per il miglioramento dell’idratazione e dell’elasticità della pelle — il campo cresce rapidamente: il numero di pubblicazioni sugli esosomi in cosmetica è cresciuto in modo esponenziale tra il 2014 e il 2024.',
              'Allo stesso tempo, una revisione sistematica di Villarreal-Gómez e coautori (Cosmetics, 2025) indica direttamente il limite: al campo manca ancora una validazione clinica e una standardizzazione sufficienti, e gli esosomi da soli potrebbero non spiegare l’intero effetto dichiarato senza proteine extracellulari aggiuntive — è necessaria una valutazione più ampia prima di parlare di approvazione regolatoria specificamente per i prodotti cosmetici esosomiali. Le revisioni segnalano anche l’assenza di standard unificati per la caratterizzazione delle vesicole (criteri MISEV) — ossia anche la conferma formale che un prodotto contenga realmente le vesicole dichiarate non è sempre standardizzata tra i produttori.',
            ],
          },
          {
            h: 'Cosa significa per l’acquirente',
            p: [
              'La conclusione delle revisioni indipendenti è coerente: esosomi e vesicole extracellulari in cosmetica hanno un potenziale meccanicistico plausibile, ma gli studi clinici sono scarsi, manca la standardizzazione, e nessun prodotto cosmetico esosomiale ha ancora ricevuto un’approvazione regolatoria separata come tale. Per questo le descrizioni degli effetti di BOOST SOLUTION, HYDRO-WHITE, EXO-PLUS, EXOBENE-S, EXOBENE-H e dei sieri Vesicles Brightening sono affermazioni di NOVAMEDINTL sui propri prodotti cosmetici, non un risultato clinico confermato in modo indipendente.',
              'Ciò non rende la linea meno interessante per l’acquirente — definisce aspettative oneste e spiega perché il produttore stesso mantiene la documentazione di questa linea a livello cosmetico. La composizione completa e la documentazione specifica di mercato sono disponibili sulla pagina EXSOLU del sito Teranova.',
            ],
          },
        ],
      },
      es: {
        title: 'Exosomas y vesículas extracelulares en cosmética: qué está demostrado y qué no',
        excerpt: 'La línea EXSOLU Exosome y los sueros Vesicles Brightening están construidos sobre exosomas y vesículas extracelulares. Analizamos qué dicen las revisiones científicas independientes de 2024-2025 sobre esta clase de ingredientes — y por qué el fabricante los describe estrictamente en términos cosméticos.',
        seoTitle: 'Los exosomas en cosmética: la ciencia y la línea EXSOLU Exosome · Teranova',
        seoDesc: 'Qué sabe la ciencia sobre los exosomas y las vesículas extracelulares en cosmética: revisiones independientes de 2024-2025 y cómo se usa este ingrediente en la línea profesional y los sueros EXSOLU de NOVAMEDINTL.',
        sections: [
          {
            h: 'La línea Exosome en el cuidado profesional EXSOLU',
            p: [
              'Cinco productos de la línea profesional EXSOLU están construidos sobre exosomas. BOOST SOLUTION combina exosomas, tripéptido de colágeno y ácido hialurónico para hidratación y elasticidad. HYDRO-WHITE añade ácido tranexámico — para hidratación y un tono de piel de aspecto más uniforme. EXO-PLUS es un cuidado profesional del cuero cabelludo con exosomas recubiertos de PDRN (1.000 millones de nanopartículas). EXOBENE-S combina exosomas con ácido hialurónico y aminoácidos para una piel de aspecto más liso, firme e hidratado, mientras que EXOBENE-H es cuidado del cuero cabelludo y el cabello con exosomas, niacinamida, biotina y péptido de cobre (EXSOLU MESO-COSMETICS FULL LEAFLET_FIN.pdf, p. 4).',
              'Como el resto del surtido profesional de EXSOLU, esta línea es descrita por el fabricante estrictamente como producto cosmético: la empresa proporciona para ella documentación cosmética estándar, sin ningún expediente médico o inyectable ofrecido en esta etapa (atribución de EXSOLU, página de perfil en el sitio de Teranova). Por eso, a continuación, tratamos los exosomas como un ingrediente de formulaciones cosméticas, no como un procedimiento médico.',
            ],
          },
          {
            h: 'Vesicles Brightening Serum: vesículas extracelulares de brócoli',
            p: [
              'En la línea EXSOLU Skincare, la misma idea se traslada al hogar: el Vesicles Brightening Serum, en formatos Intensive (10 ml) y Daily (30 ml), está construido sobre vesículas extracelulares derivadas de brócoli, vitamina B12 y el sistema de administración Reprosome™. El fabricante los describe como sueros premium de uso puntual y diario para las zonas alrededor de los ojos, los labios y las áreas de piel delicada (NOVAMEDINTL_KR_SKINCARE②.pdf, p. 3-4).',
              'El origen vegetal de estas vesículas no es un detalle accesorio: coincide con una tendencia notable en el propio campo científico — un desplazamiento de las vesículas de origen animal y humano hacia vesículas de origen vegetal, motivado en parte por consideraciones regulatorias y de los consumidores.',
            ],
          },
          {
            h: 'Qué dicen las revisiones científicas independientes',
            p: [
              'Una revisión exhaustiva de las aplicaciones de los exosomas en dermatología (International Journal of Dermatology, 2025) registra un potencial mecanístico contra las arrugas y para mejorar la hidratación y la elasticidad de la piel — el campo crece rápidamente: el número de publicaciones sobre exosomas en cosmética creció de forma exponencial entre 2014 y 2024.',
              'Al mismo tiempo, una revisión sistemática de Villarreal-Gómez y coautores (Cosmetics, 2025) señala directamente la limitación: al campo todavía le falta suficiente validación clínica y estandarización, y los exosomas por sí solos podrían no explicar la totalidad del efecto declarado sin proteínas extracelulares adicionales — se necesita una evaluación más amplia antes de hablar de aprobación regulatoria específicamente para los productos cosméticos exosomales. Las revisiones también señalan la ausencia de estándares unificados de caracterización de vesículas (los criterios MISEV) — es decir, incluso la confirmación formal de que un producto realmente contiene las vesículas declaradas no siempre está estandarizada entre fabricantes.',
            ],
          },
          {
            h: 'Qué significa esto para el comprador',
            p: [
              'La conclusión de las revisiones independientes es coherente: los exosomas y las vesículas extracelulares en cosmética tienen un potencial mecanístico plausible, pero los ensayos clínicos son escasos, falta estandarización, y ningún producto cosmético exosomal ha recibido aún una aprobación regulatoria separada como tal. Por eso las descripciones de los efectos de BOOST SOLUTION, HYDRO-WHITE, EXO-PLUS, EXOBENE-S, EXOBENE-H y los sueros Vesicles Brightening son afirmaciones de NOVAMEDINTL sobre sus propios productos cosméticos, no un resultado clínico confirmado de forma independiente.',
              'Esto no hace que la línea sea menos interesante para el comprador — establece expectativas honestas y explica por qué el propio fabricante mantiene la documentación de esta línea a nivel cosmético. La composición completa y la documentación específica de cada mercado pueden solicitarse en la página de EXSOLU del sitio de Teranova.',
            ],
          },
        ],
      },
    },
  },
];
