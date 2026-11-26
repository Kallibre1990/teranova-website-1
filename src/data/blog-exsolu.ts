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
    },
  },
];
