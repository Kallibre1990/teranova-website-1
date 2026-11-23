#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate Feelody supplier profile + product-line JSON content for all 13 locales.

Source facts: Feelody Introduction_202611_Eng_revised.pdf (brand/product data),
and the feelody.official@gmail.com correspondence (certs by market, consent, export).
All clinical/registration claims are attributed to the company; FOB prices/MOQ
are excluded per the supplier's written request.
"""
import json
import os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
OUT = os.path.join(ROOT, 'src', 'data', 'suppliers-i18n')

PRODUCT_SLUGS = ['day-supreme', 'night-flex', 'acne-wonder', 'vital-surge', 'all-day-shield']
PRODUCT_NAMES = [
    'Day Supreme Multi Essence Sunscreen',
    'Night Flex Calming Ampoule',
    'Acne Wonder Bubble Foam Cleansing',
    'Vital Surge Skin Booster',
    'All Day Shield Barrier Cream',
]

# ---------------------------------------------------------------------------
# Each language entry: profile content/ui + 5 product-page content blocks.
# ---------------------------------------------------------------------------
LANGS = {}

def add(lang, origin, tagline, descriptor, about, facts, channels, line_notes, tech, formats,
        export_note, consent_note, terms, catalog_notes, seo_title, seo_desc, ui, products):
    assert len(line_notes) == 5 and len(catalog_notes) == 5 and len(products) == 5
    LANGS[lang] = {
        'content': {
            'tagline': tagline, 'descriptor': descriptor, 'origin': origin,
            'about': about, 'facts': facts, 'channels': channels,
            'lines': [{'name': PRODUCT_NAMES[i], 'note': line_notes[i]} for i in range(5)],
            'tech': tech, 'formats': formats, 'exportNote': export_note,
            'consentNote': consent_note, 'terms': terms, 'catalog_notes': catalog_notes,
            'seoTitle': seo_title, 'seoDesc': seo_desc,
        },
        'ui': ui,
        'products': products,  # list of 5: {tagline, about:[p1,p2], seoTitle, seoDesc}
    }

# =================================================== EN ====================
add('en',
    origin='Korea',
    tagline='Healthy, radiant skin for every age',
    descriptor='Korean skincare brand with Teen and Derma product lines',
    about=[
        "We are Feelody, a Korean skincare brand founded by a Korean medicine doctor and mother of two. According to the company, the idea came from her own children's skin concerns, which shaped our starting goal: skincare gentle enough for a teenager and effective enough to use every day at any age.",
        'Our range brings five products together in two lines. The Feelody Teen line covers a daily three-step routine: Day Supreme Multi Essence Sunscreen, Night Flex Calming Ampoule and Acne Wonder Bubble Foam Cleansing. The Feelody Derma line adds two home-care products for a more advanced routine: Vital Surge Skin Booster and All Day Shield Barrier Cream. Each product is built as an all-in-one formula, so a short routine still covers several skin concerns at once.',
        "Our Teen line is manufactured by COSMAX Inc., which we describe as our OEM partner for global-standard production (CGMP, ISO 9001, ISO 14001, ISO 22716); the Derma line is manufactured by Ire Cosmetics (ISO 22716). According to our clinical testing materials, all five products completed a human skin primary irritation or stimulation test with an average response rate of 0.00%.",
    ],
    facts=['Founded by a Korean medicine doctor', 'Two lines, five all-in-one products',
           'Manufactured by COSMAX Inc. and Ire Cosmetics', 'Exports to 15 countries, according to the company'],
    channels=['Cosmetics importers and distributors', 'Drugstore and duty-free retail',
              'Marketplaces and e-commerce', 'Pop-up stores and beauty retail chains'],
    line_notes=[
        'An SPF50+ PA++++ sun essence from the Teen line that also works as a brightening, moisturizing step. According to the company, the spreadable essence texture leaves no white cast, and the product completed a human skin primary irritation test and a sensitive-skin suitability test with an average response rate of 0.00%. Key ingredients: hyaluronic acid, niacinamide, jojoba oil, aloe barbadensis and melia azadirachta extracts.',
        'A five-in-one ampoule from the Teen line for moisturizing, calming, brightening, pore care and skin-barrier support in one evening step. According to the company, it completed a human skin primary irritation test and a sensitive-skin suitability test with an average response rate of 0.00%. Key ingredients: hyaluronic acid, niacinamide, panthenol, centella asiatica complex and betaine.',
        'A dense bubble foam cleanser from the Teen line built on an AHA, BHA and PHA complex for pore and acne-prone skin care, balanced to a slightly acidic pH 4.5. According to the company, it completed a human skin primary stimulation test with an average response rate of 0.00%. Key ingredients: centella asiatica complex, vitamin C and vitamins B12/E.',
        "A first-essence booster from the Derma line built around aloe leaf water, a seven-hyaluronic-acid complex, PDRN and exosome ingredients. According to the company's clinical testing materials, a single use showed an 8.2% improvement in skin barrier strength, a 159% improvement in moisturizing and a 37% decrease in visible dead skin cells.",
        "A finishing cream from the Derma line, sharing the Skin Booster's aloe leaf water, hyaluronic acid, PDRN and exosome base, with queensland nut oil added. According to the company's clinical testing materials, a single use showed a 9.7% improvement in skin barrier strength, a 128% improvement in moisturizing and a 45% decrease in visible dead skin cells.",
    ],
    tech=[
        {'name': 'COSMAX Inc.', 'note': 'Manufacturing partner for the Feelody Teen line — sunscreen, ampoule and foam cleanser. According to the company, production meets CGMP, ISO 9001, ISO 14001 and ISO 22716 practice.'},
        {'name': 'Ire Cosmetics', 'note': 'Manufacturing partner for the Feelody Derma line — skin booster and barrier cream. According to the company, production meets ISO 22716 practice.'},
    ],
    formats=['Sun essence', 'Ampoule', 'Foam cleanser', 'Skin booster essence', 'Barrier cream'],
    export_note="According to the company, Feelody currently exports to 15 countries and has exclusive distribution partners in Indonesia, Brazil and Spain. In Korea, the brand is sold through more than ten offline cosmetics stores, around 100 drugstores and the Incheon Airport duty-free store; listed international retail partners include Don Quijote in Japan, Lalaport Department Store and Curve Shopping Mall in Malaysia, and Dookn Dookn in Thailand and Myanmar. The company is particularly interested in Latin America outside Brazil, North America, Europe outside Spain and the CIS — the markets Teranova coordinates introductions for.",
    consent_note='Materials, product descriptions and images are provided by Feelody and published with the company’s consent (correspondence of October–November 2026). The FOB price list and other commercial terms stay confidential at the company’s request. Teranova coordinates and supports the deal.',
    terms=[
        {'label': 'Cooperation format', 'value': 'Wholesale supply of finished products under the Feelody brand.'},
        {'label': 'Exclusive markets', 'value': 'Indonesia, Brazil and Spain already have exclusive distribution partners, according to the company.'},
        {'label': 'Prices and minimum order', 'value': "On request — not published without the company's written consent."},
        {'label': 'How it works', 'value': 'Request → Teranova review and alignment → negotiations and samples → logistics, customs and payment, coordinated by Teranova.'},
    ],
    catalog_notes=[
        'SPF50+ PA++++ sun essence with brightening and moisturizing care; 50 ml.',
        '5-in-1 calming ampoule for moisturizing, brightening and pore care; 50 ml.',
        'AHA/BHA/PHA bubble foam cleanser for acne-prone and pore care; 150 ml.',
        'Skin-barrier booster essence with PDRN and exosome ingredients; 150 ml.',
        'Barrier cream with PDRN, exosome and queensland nut oil; 50 ml.',
    ],
    seo_title='Feelody — Korean Teen & Derma skincare · Teranova',
    seo_desc='Feelody is a Korean skincare brand with two lines: Teen (sunscreen, ampoule, foam cleanser) and Derma (skin booster, barrier cream). Manufactured by COSMAX Inc. and Ire Cosmetics.',
    ui={
        'profile_sup': 'Supplier profile', 'about_h': 'About the company', 'for_whom': 'Best for:',
        'lines_h': 'Products', 'catalog_h': 'Product catalog', 'tech_h': 'Manufacturing partners',
        'products_h': 'Products', 'products_note': 'Two lines, five all-in-one skincare products for a daily routine.',
        'formats_h': 'Product formats', 'export_h': 'Export and markets', 'terms_h': 'Terms of cooperation',
        'cta_h': 'Interested in this manufacturer?',
        'cta_d': 'Get in touch — Teranova arranges negotiations, verification and deal support from first contact through delivery.',
        'cta_btn': 'Contact via Teranova', 'more': 'Open profile →', 'verified_suppliers': 'Verified suppliers',
        'certs_h': 'Registrations and standards by market',
        'certs_note': 'Declared by the company for specific export markets; coverage varies by product (see product pages). Copies of supporting documents are provided at the deal stage.',
    },
    products=[
        {'tagline': 'SPF50+ PA++++ sun essence that doubles as a brightening, moisturizing step',
         'about': [
             "Day Supreme Multi Essence Sunscreen is the morning step of the Feelody Teen line: a 50 ml SPF50+ PA++++ sun essence designed to replace several products at once. According to the company, its spreadable essence texture — rather than a traditional sunscreen formula — leaves no white cast or stickiness and is suitable for adolescents and adults regardless of gender.",
             'Key ingredients include hyaluronic acid and jojoba oil for moisturizing, niacinamide for brightening, and aloe barbadensis and melia azadirachta extracts for calming. According to the company, the product completed a human skin primary irritation test and a sensitive-skin suitability test, both with an average response rate of 0.00%, and is manufactured by COSMAX Inc. to CGMP, ISO 9001, ISO 14001 and ISO 22716 practice.',
         ],
         'seoTitle': 'Day Supreme Multi Essence Sunscreen · Feelody · Teranova',
         'seoDesc': "SPF50+ PA++++ sun essence from Feelody's Teen line: brightening and moisturizing care in one morning step. 50 ml."},
        {'tagline': 'A five-in-one evening ampoule for moisturizing, calming and pore care',
         'about': [
             'Night Flex Calming Ampoule is the evening step of the Feelody Teen line: a 50 ml ampoule the company describes as replacing toner, lotion and essence with moisturizing, calming, brightening, pore-care and skin-barrier functions in one product.',
             'Key ingredients include hyaluronic acid and panthenol for moisturizing and barrier support, niacinamide for brightening, centella asiatica complex and betaine for calming, and succinic acid and gluconolactone for pore care. According to the company, the product completed a human skin primary irritation test and a sensitive-skin suitability test, both with an average response rate of 0.00%, and is manufactured by COSMAX Inc. to CGMP, ISO 9001, ISO 14001 and ISO 22716 practice.',
         ],
         'seoTitle': 'Night Flex Calming Ampoule · Feelody · Teranova',
         'seoDesc': "5-in-1 evening ampoule from Feelody's Teen line: moisturizing, calming, brightening and pore care in one step. 50 ml."},
        {'tagline': 'An AHA/BHA/PHA bubble foam cleanser for pore and acne-prone skin care',
         'about': [
             "Acne Wonder Bubble Foam Cleansing completes the Feelody Teen line: a 150 ml dense bubble foam cleanser built on an AHA, BHA and PHA complex for deep cleansing of pores, sebum and dead skin cells. According to the company, the formula is balanced to a slightly acidic pH 4.5 that accounts for the skin's natural oil and moisture balance, leaving a moisturizing finish after rinsing.",
             'Key soothing and regenerating ingredients include centella asiatica complex, vitamin C and vitamins B12/E. According to the company, the product completed a human skin primary stimulation test with an average response rate of 0.00%, and is manufactured by COSMAX Inc. to CGMP, ISO 9001, ISO 14001 and ISO 22716 practice.',
         ],
         'seoTitle': 'Acne Wonder Bubble Foam Cleansing · Feelody · Teranova',
         'seoDesc': "AHA/BHA/PHA bubble foam cleanser from Feelody's Teen line for pore and acne-prone skin care. 150 ml, pH 4.5."},
        {'tagline': 'A first-essence skin booster built on PDRN and exosome ingredients',
         'about': [
             'Vital Surge Skin Booster opens the Feelody Derma line: a 150 ml first-essence product applied right after cleansing, built around aloe leaf water, a seven-hyaluronic-acid complex, PDRN, exosome ingredients, centella asiatica extract and bergamot oil.',
             "According to the company's clinical testing materials, a single use showed an 8.2% improvement in skin barrier strength, a 159% improvement in moisturizing and a 37% decrease in visible dead skin cells. The product completed a human skin primary stimulation test with an average response rate of 0.00%, and is manufactured by Ire Cosmetics to ISO 22716 practice.",
         ],
         'seoTitle': 'Vital Surge Skin Booster · Feelody · Teranova',
         'seoDesc': "First-essence skin booster from Feelody's Derma line with PDRN and exosome ingredients. 150 ml."},
        {'tagline': 'A finishing barrier cream with PDRN, exosome and queensland nut oil',
         'about': [
             "All Day Shield Barrier Cream completes the Feelody Derma line: a 50 ml finishing cream sharing the Skin Booster's base of aloe leaf water, a seven-hyaluronic-acid complex, PDRN, exosome ingredients and centella asiatica extract, with queensland nut oil and bergamot oil added for the cream step.",
             "According to the company's clinical testing materials, a single use showed a 9.7% improvement in skin barrier strength, a 128% improvement in moisturizing and a 45% decrease in visible dead skin cells. The product completed a human skin primary stimulation test with an average response rate of 0.00%, and is manufactured by Ire Cosmetics to ISO 22716 practice.",
         ],
         'seoTitle': 'All Day Shield Barrier Cream · Feelody · Teranova',
         'seoDesc': "Finishing barrier cream from Feelody's Derma line with PDRN, exosome ingredients and queensland nut oil. 50 ml."},
    ])

# =================================================== RU ====================
add('ru',
    origin='Корея',
    tagline='Здоровая, сияющая кожа в любом возрасте',
    descriptor='Корейский бренд ухода за кожей с линейками Teen и Derma',
    about=[
        'Feelody — корейский бренд ухода за кожей, который мы основали как врач восточной медицины и мать двоих детей. По данным компании, идея бренда выросла из забот о коже собственных детей: отсюда наша исходная цель — уход, достаточно деликатный для подростка и при этом эффективный для ежедневного применения в любом возрасте.',
        'Наша линейка объединяет пять продуктов в двух направлениях. Feelody Teen покрывает ежедневный уход в три шага: солнцезащитную эссенцию Day Supreme Multi Essence Sunscreen, успокаивающую ампулу Night Flex Calming Ampoule и пенку для умывания Acne Wonder Bubble Foam Cleansing. Feelody Derma добавляет два продукта для более глубокого домашнего ухода: бустер Vital Surge Skin Booster и крем-барьер All Day Shield Barrier Cream. Каждый продукт сделан по принципу «всё в одном», поэтому короткий уход закрывает сразу несколько задач кожи.',
        'Линейку Teen для нас производит COSMAX Inc. — мы называем эту компанию нашим OEM-партнёром по стандартам CGMP, ISO 9001, ISO 14001 и ISO 22716; линейку Derma производит Ire Cosmetics (ISO 22716). По данным наших клинических материалов, все пять продуктов прошли тест на первичное раздражение или стимуляцию кожи человека со средним показателем реакции 0,00%.',
    ],
    facts=['Основан врачом восточной медицины', 'Две линейки, пять продуктов «всё в одном»',
           'Производство — COSMAX Inc. и Ire Cosmetics', 'Экспорт в 15 стран, по данным компании'],
    channels=['Импортёры и дистрибьюторы косметики', 'Аптечные сети и duty free',
              'Маркетплейсы и интернет-торговля', 'Поп-ап корнеры и сети бьюти-ретейла'],
    line_notes=[
        'Солнцезащитная эссенция SPF50+ PA++++ из линейки Teen, которая одновременно работает как осветляющий и увлажняющий шаг. По данным компании, текстура эссенции легко растушёвывается и не оставляет белого налёта; продукт прошёл тест на первичное раздражение кожи человека и тест на пригодность для чувствительной кожи со средним показателем реакции 0,00%. Ключевые компоненты: гиалуроновая кислота, ниацинамид, масло жожоба, экстракты алоэ вера и мелии азадирахта.',
        'Ампула «пять в одном» из линейки Teen для увлажнения, успокоения, осветления, ухода за порами и укрепления барьера кожи за один вечерний шаг. По данным компании, продукт прошёл тест на первичное раздражение кожи человека и тест на пригодность для чувствительной кожи со средним показателем реакции 0,00%. Ключевые компоненты: гиалуроновая кислота, ниацинамид, пантенол, комплекс центеллы азиатской и бетаин.',
        'Плотная пенка для умывания из линейки Teen на основе комплекса AHA, BHA и PHA для ухода за порами и склонной к акне кожей, с pH 4,5. По данным компании, продукт прошёл тест на первичную стимуляцию кожи человека со средним показателем реакции 0,00%. Ключевые компоненты: комплекс центеллы азиатской, витамин C и витамины B12/E.',
        'Бустер-эссенция из линейки Derma на основе алоэ, комплекса из семи видов гиалуроновой кислоты, PDRN и экзосом. По данным клинических материалов компании, после однократного применения зафиксировано усиление барьера кожи на 8,2%, улучшение увлажнённости на 159% и снижение видимых отмерших клеток кожи на 37%.',
        'Финишный крем из линейки Derma с той же основой из алоэ, гиалуроновой кислоты, PDRN и экзосом, что и у бустера, с добавлением масла квинсленд-ореха. По данным клинических материалов компании, после однократного применения зафиксировано усиление барьера кожи на 9,7%, улучшение увлажнённости на 128% и снижение видимых отмерших клеток кожи на 45%.',
    ],
    tech=[
        {'name': 'COSMAX Inc.', 'note': 'Производственный партнёр линейки Feelody Teen — солнцезащитная эссенция, ампула и пенка для умывания. По данным компании, производство соответствует практикам CGMP, ISO 9001, ISO 14001 и ISO 22716.'},
        {'name': 'Ire Cosmetics', 'note': 'Производственный партнёр линейки Feelody Derma — бустер и крем-барьер. По данным компании, производство соответствует практике ISO 22716.'},
    ],
    formats=['Солнцезащитная эссенция', 'Ампула', 'Пенка для умывания', 'Бустер-эссенция', 'Крем-барьер'],
    export_note='По данным компании, Feelody сейчас экспортируется в 15 стран, а в Индонезии, Бразилии и Испании у бренда уже есть эксклюзивные дистрибьюторы. В Корее бренд продаётся через более чем десять офлайн-магазинов косметики, около 100 аптек и магазин duty free в аэропорту Инчхон; среди зарубежных розничных партнёров компания называет сеть Don Quijote в Японии, Lalaport Department Store и торговый центр Curve в Малайзии, а также сеть Dookn Dookn в Таиланде и Мьянме. Компания отдельно отмечает интерес к Латинской Америке за пределами Бразилии, Северной Америке, Европе за пределами Испании и странам СНГ — это рынки, для которых Teranova координирует знакомство с партнёрами.',
    consent_note='Материалы, описания продуктов и изображения предоставлены компанией Feelody и опубликованы с её согласия (переписка октября–ноября 2026 года). Прайс-лист на условиях FOB и другие коммерческие условия остаются закрытыми по просьбе компании. Teranova координирует и сопровождает сделку.',
    terms=[
        {'label': 'Формат сотрудничества', 'value': 'Оптовые поставки готовой продукции под брендом Feelody.'},
        {'label': 'Эксклюзивные рынки', 'value': 'В Индонезии, Бразилии и Испании, по данным компании, уже есть эксклюзивные дистрибьюторы.'},
        {'label': 'Цены и минимальная партия', 'value': 'По запросу — без письменного согласия компании цифры не публикуются.'},
        {'label': 'Как это работает', 'value': 'Запрос → проверка и согласование Teranova → переговоры и образцы → логистика, таможня и оплата при координации Teranova.'},
    ],
    catalog_notes=[
        'Солнцезащитная эссенция SPF50+ PA++++ с осветляющим и увлажняющим уходом; 50 мл.',
        'Успокаивающая ампула «5 в 1» для увлажнения, осветления и ухода за порами; 50 мл.',
        'Пенка для умывания с AHA/BHA/PHA для кожи, склонной к акне, и ухода за порами; 150 мл.',
        'Бустер-эссенция для укрепления барьера кожи с PDRN и экзосомами; 150 мл.',
        'Крем-барьер с PDRN, экзосомами и маслом квинсленд-ореха; 50 мл.',
    ],
    seo_title='Feelody — корейский уход Teen и Derma · Teranova',
    seo_desc='Feelody — корейский бренд ухода за кожей с двумя линейками: Teen (солнцезащита, ампула, пенка) и Derma (бустер, крем-барьер). Производство — COSMAX Inc. и Ire Cosmetics.',
    ui={
        'profile_sup': 'Профиль поставщика', 'about_h': 'О компании', 'for_whom': 'Для кого:',
        'lines_h': 'Продукты', 'catalog_h': 'Каталог продукции', 'tech_h': 'Производственные партнёры',
        'products_h': 'Продукция', 'products_note': 'Две линейки, пять продуктов «всё в одном» для ежедневного ухода.',
        'formats_h': 'Форматы продукции', 'export_h': 'Экспорт и рынки', 'terms_h': 'Условия сотрудничества',
        'cta_h': 'Заинтересовал этот производитель?',
        'cta_d': 'Свяжитесь с нами — Teranova организует переговоры, проверку и сопровождение сделки от первого контакта до поставки.',
        'cta_btn': 'Связаться через Teranova', 'more': 'Открыть профиль →', 'verified_suppliers': 'Проверенные поставщики',
        'certs_h': 'Регистрации и стандарты по рынкам',
        'certs_note': 'Заявлено компанией для отдельных экспортных рынков; набор отличается по продукту (см. страницы продуктов). Копии подтверждающих документов предоставляются на стадии сделки.',
    },
    products=[
        {'tagline': 'Солнцезащитная эссенция SPF50+ PA++++, которая работает как осветляющий и увлажняющий шаг',
         'about': [
             'Day Supreme Multi Essence Sunscreen — утренний шаг линейки Feelody Teen: эссенция SPF50+ PA++++ объёмом 50 мл, рассчитанная на то, чтобы заменить сразу несколько продуктов. По данным компании, текстура эссенции, в отличие от обычного солнцезащитного крема, не оставляет белого налёта и липкости и подходит подросткам и взрослым независимо от пола.',
             'Ключевые компоненты — гиалуроновая кислота и масло жожоба для увлажнения, ниацинамид для осветления, экстракты алоэ вера и мелии азадирахта для успокоения кожи. По данным компании, продукт прошёл тест на первичное раздражение кожи человека и тест на пригодность для чувствительной кожи со средним показателем реакции 0,00%; производится COSMAX Inc. по стандартам CGMP, ISO 9001, ISO 14001 и ISO 22716.',
         ],
         'seoTitle': 'Day Supreme Multi Essence Sunscreen · Feelody · Teranova',
         'seoDesc': 'Солнцезащитная эссенция SPF50+ PA++++ из линейки Feelody Teen: осветляющий и увлажняющий уход за один утренний шаг. 50 мл.'},
        {'tagline': 'Вечерняя ампула «пять в одном» для увлажнения, успокоения и ухода за порами',
         'about': [
             'Night Flex Calming Ampoule — вечерний шаг линейки Feelody Teen: ампула объёмом 50 мл, которая, по описанию компании, заменяет тонер, лосьон и эссенцию и объединяет функции увлажнения, успокоения, осветления, ухода за порами и укрепления барьера кожи.',
             'Ключевые компоненты — гиалуроновая кислота и пантенол для увлажнения и укрепления барьера, ниацинамид для осветления, комплекс центеллы азиатской и бетаин для успокоения, янтарная кислота и глюконолактон для ухода за порами. По данным компании, продукт прошёл тест на первичное раздражение кожи человека и тест на пригодность для чувствительной кожи со средним показателем реакции 0,00%; производится COSMAX Inc. по стандартам CGMP, ISO 9001, ISO 14001 и ISO 22716.',
         ],
         'seoTitle': 'Night Flex Calming Ampoule · Feelody · Teranova',
         'seoDesc': 'Вечерняя ампула «5 в 1» из линейки Feelody Teen: увлажнение, успокоение, осветление и уход за порами за один шаг. 50 мл.'},
        {'tagline': 'Пенка для умывания с AHA/BHA/PHA для ухода за порами и кожей, склонной к акне',
         'about': [
             'Acne Wonder Bubble Foam Cleansing завершает линейку Feelody Teen: плотная пенка для умывания объёмом 150 мл на основе комплекса AHA, BHA и PHA для глубокого очищения пор, себума и отмерших клеток кожи. По данным компании, формула сбалансирована до слабокислого pH 4,5 с учётом жирового и водного баланса кожи и оставляет ощущение увлажнённости после умывания.',
             'Ключевые успокаивающие и восстанавливающие компоненты — комплекс центеллы азиатской, витамин C и витамины B12/E. По данным компании, продукт прошёл тест на первичную стимуляцию кожи человека со средним показателем реакции 0,00%; производится COSMAX Inc. по стандартам CGMP, ISO 9001, ISO 14001 и ISO 22716.',
         ],
         'seoTitle': 'Acne Wonder Bubble Foam Cleansing · Feelody · Teranova',
         'seoDesc': 'Пенка для умывания с AHA/BHA/PHA из линейки Feelody Teen для ухода за порами и кожей, склонной к акне. 150 мл, pH 4,5.'},
        {'tagline': 'Бустер-эссенция первого шага на основе PDRN и экзосом',
         'about': [
             'Vital Surge Skin Booster открывает линейку Feelody Derma: эссенция первого шага объёмом 150 мл, которую наносят сразу после умывания, на основе воды алоэ, комплекса из семи видов гиалуроновой кислоты, PDRN, экзосом, экстракта центеллы азиатской и масла бергамота.',
             'По данным клинических материалов компании, после однократного применения зафиксировано усиление барьера кожи на 8,2%, улучшение увлажнённости на 159% и снижение видимых отмерших клеток кожи на 37%. Продукт прошёл тест на первичную стимуляцию кожи человека со средним показателем реакции 0,00%; производится Ire Cosmetics по стандарту ISO 22716.',
         ],
         'seoTitle': 'Vital Surge Skin Booster · Feelody · Teranova',
         'seoDesc': 'Бустер-эссенция из линейки Feelody Derma с PDRN и экзосомами. 150 мл.'},
        {'tagline': 'Финишный крем-барьер с PDRN, экзосомами и маслом квинсленд-ореха',
         'about': [
             'All Day Shield Barrier Cream завершает линейку Feelody Derma: финишный крем объёмом 50 мл с той же основой, что и у бустера, — вода алоэ, комплекс из семи видов гиалуроновой кислоты, PDRN, экзосомы и экстракт центеллы азиатской, — с добавлением масла квинсленд-ореха и масла бергамота для кремового шага.',
             'По данным клинических материалов компании, после однократного применения зафиксировано усиление барьера кожи на 9,7%, улучшение увлажнённости на 128% и снижение видимых отмерших клеток кожи на 45%. Продукт прошёл тест на первичную стимуляцию кожи человека со средним показателем реакции 0,00%; производится Ire Cosmetics по стандарту ISO 22716.',
         ],
         'seoTitle': 'All Day Shield Barrier Cream · Feelody · Teranova',
         'seoDesc': 'Финишный крем-барьер из линейки Feelody Derma с PDRN, экзосомами и маслом квинсленд-ореха. 50 мл.'},
    ])


# =================================================== KO ====================
add('ko',
    origin='한국',
    tagline='모든 연령을 위한 건강하고 빛나는 피부',
    descriptor='Teen과 Derma 라인을 갖춘 한국 스킨케어 브랜드',
    about=[
        'Feelody는 한의사이자 두 아이의 어머니인 저희가 설립한 한국 스킨케어 브랜드입니다. 회사에 따르면 브랜드 아이디어는 자신의 아이들이 겪은 피부 고민에서 시작되었으며, 이는 청소년에게도 순하면서 모든 연령이 매일 사용할 수 있을 만큼 효과적인 스킨케어라는 저희의 출발점이 되었습니다.',
        '저희 라인업은 다섯 가지 제품을 두 개의 라인으로 묶습니다. Feelody Teen 라인은 Day Supreme Multi Essence Sunscreen, Night Flex Calming Ampoule, Acne Wonder Bubble Foam Cleansing로 하루 3단계 루틴을 구성합니다. Feelody Derma 라인은 더 집중적인 홈케어를 위해 Vital Surge Skin Booster와 All Day Shield Barrier Cream 두 제품을 더합니다. 각 제품은 올인원 포뮬러로 설계되어, 짧은 루틴만으로도 여러 피부 고민을 한 번에 다룰 수 있습니다.',
        '저희가 CGMP, ISO 9001, ISO 14001, ISO 22716 기준의 글로벌 스탠다드 생산을 담당하는 OEM 파트너라고 설명하는 COSMAX Inc.가 Teen 라인을 생산하며, Derma 라인은 Ire Cosmetics(ISO 22716)가 생산합니다. 저희 임상 자료에 따르면 다섯 제품 모두 인체 피부 1차 자극 또는 자극성 시험을 완료했으며 평균 반응률은 0.00%입니다.',
    ],
    facts=['한의사가 설립', '두 라인, 다섯 가지 올인원 제품', 'COSMAX Inc.와 Ire Cosmetics가 생산', '회사에 따르면 15개국에 수출'],
    channels=['화장품 수입업체 및 유통업체', '드럭스토어 및 면세점', '마켓플레이스 및 전자상거래', '팝업스토어 및 뷰티 리테일 체인'],
    line_notes=[
        '모이스처라이징과 브라이트닝 케어를 겸하는 Teen 라인의 SPF50+ PA++++ 선 에센스입니다. 회사에 따르면 발림성 좋은 에센스 텍스처로 백탁 현상이 없으며, 인체 피부 1차 자극 시험과 민감성 피부 적합성 시험을 모두 완료해 평균 반응률 0.00%를 기록했습니다. 주요 성분: 히알루론산, 나이아신아마이드, 호호바 오일, 알로에 베라와 멀구슬나무 추출물.',
        '모이스처라이징, 진정, 브라이트닝, 모공 케어, 피부 장벽 강화 기능을 저녁 한 단계에 담은 Teen 라인의 5-in-1 앰플입니다. 회사에 따르면 인체 피부 1차 자극 시험과 민감성 피부 적합성 시험을 완료해 평균 반응률 0.00%를 기록했습니다. 주요 성분: 히알루론산, 나이아신아마이드, 판테놀, 병풀 추출물 복합체, 베타인.',
        '모공과 트러블 케어를 위한 AHA·BHA·PHA 복합 성분을 담은 Teen 라인의 고밀도 버블 폼 클렌저로, 약산성 pH 4.5로 조정되었습니다. 회사에 따르면 인체 피부 1차 자극성 시험을 완료해 평균 반응률 0.00%를 기록했습니다. 주요 성분: 병풀 추출물 복합체, 비타민 C, 비타민 B12·E.',
        '알로에 워터, 7가지 히알루론산 복합체, PDRN, 엑소좀 성분을 중심으로 한 Derma 라인의 퍼스트 에센스 부스터입니다. 회사의 임상 자료에 따르면 1회 사용 후 피부 장벽력이 8.2% 개선되고, 보습력이 159% 개선되었으며, 가시적인 피부 각질이 37% 감소했습니다.',
        '부스터와 동일한 알로에 워터, 히알루론산, PDRN, 엑소좀 베이스에 퀸즐랜드 너트 오일을 더한 Derma 라인의 마무리 크림입니다. 회사의 임상 자료에 따르면 1회 사용 후 피부 장벽력이 9.7% 개선되고, 보습력이 128% 개선되었으며, 가시적인 피부 각질이 45% 감소했습니다.',
    ],
    tech=[
        {'name': 'COSMAX Inc.', 'note': 'Feelody Teen 라인(선크림, 앰플, 폼클렌저)의 생산 파트너입니다. 회사에 따르면 생산은 CGMP, ISO 9001, ISO 14001, ISO 22716 기준을 충족합니다.'},
        {'name': 'Ire Cosmetics', 'note': 'Feelody Derma 라인(스킨 부스터, 배리어 크림)의 생산 파트너입니다. 회사에 따르면 생산은 ISO 22716 기준을 충족합니다.'},
    ],
    formats=['선 에센스', '앰플', '폼 클렌저', '부스터 에센스', '배리어 크림'],
    export_note='회사에 따르면 Feelody는 현재 15개국에 수출되며 인도네시아, 브라질, 스페인에는 이미 독점 유통 파트너가 있습니다. 한국에서는 10여 개 오프라인 화장품 매장과 약 100개 드럭스토어, 인천공항 면세점을 통해 판매되며, 해외 리테일 파트너로는 일본 돈키호테, 말레이시아 Lalaport 백화점과 Curve Shopping Mall, 태국·미얀마의 Dookn Dookn을 꼽습니다. 회사는 브라질을 제외한 중남미, 북미, 스페인을 제외한 유럽, CIS 지역에 특히 관심이 있다고 밝혔으며, Teranova는 이들 시장에서 파트너 소개를 조율합니다.',
    consent_note='자료, 제품 설명 및 이미지는 Feelody가 제공했으며 회사의 동의(2026년 10~11월 서신 교환)를 받아 게재합니다. FOB 가격표 및 기타 상업적 조건은 회사의 요청에 따라 비공개로 유지됩니다. Teranova가 거래를 조율하고 지원합니다.',
    terms=[
        {'label': '협력 형태', 'value': 'Feelody 브랜드 완제품의 도매 공급.'},
        {'label': '독점 시장', 'value': '회사에 따르면 인도네시아, 브라질, 스페인에는 이미 독점 유통 파트너가 있습니다.'},
        {'label': '가격 및 최소 주문량', 'value': '요청 시 안내 — 회사의 서면 동의 없이는 공개하지 않습니다.'},
        {'label': '진행 방식', 'value': '문의 → Teranova 검토 및 조율 → 협상 및 샘플 → Teranova가 조율하는 물류, 통관, 결제.'},
    ],
    catalog_notes=[
        '브라이트닝과 모이스처라이징 케어를 담은 SPF50+ PA++++ 선 에센스, 50ml.',
        '모이스처라이징·브라이트닝·모공 케어를 위한 5-in-1 진정 앰플, 50ml.',
        '트러블 피부와 모공 케어를 위한 AHA/BHA/PHA 버블 폼 클렌저, 150ml.',
        'PDRN과 엑소좀 성분의 피부 장벽 부스터 에센스, 150ml.',
        'PDRN, 엑소좀, 퀸즐랜드 너트 오일을 담은 배리어 크림, 50ml.',
    ],
    seo_title='Feelody — 한국 Teen & Derma 스킨케어 · Teranova',
    seo_desc='Feelody는 Teen(선크림, 앰플, 폼클렌저)과 Derma(스킨 부스터, 배리어 크림) 두 라인을 갖춘 한국 스킨케어 브랜드입니다. COSMAX Inc.와 Ire Cosmetics가 생산합니다.',
    ui={
        'profile_sup': '공급사 프로필', 'about_h': '회사 소개', 'for_whom': '추천 대상:',
        'lines_h': '제품', 'catalog_h': '제품 카탈로그', 'tech_h': '생산 파트너',
        'products_h': '제품', 'products_note': '매일의 루틴을 위한 두 라인, 다섯 가지 올인원 스킨케어 제품.',
        'formats_h': '제품 포맷', 'export_h': '수출 및 시장', 'terms_h': '협력 조건',
        'cta_h': '이 제조사에 관심이 있으신가요?',
        'cta_d': '문의해 주세요 — Teranova가 첫 접촉부터 공급까지 협상, 검증, 거래 지원을 진행합니다.',
        'cta_btn': 'Teranova를 통해 문의하기', 'more': '프로필 열기 →', 'verified_suppliers': '검증된 공급사',
        'certs_h': '시장별 등록 및 기준',
        'certs_note': '특정 수출 시장을 기준으로 회사가 선언한 내용이며 제품별로 범위가 다릅니다(제품 페이지 참고). 증빙 서류 사본은 거래 단계에서 제공됩니다.',
    },
    products=[
        {'tagline': '브라이트닝·모이스처라이징 케어를 겸하는 SPF50+ PA++++ 선 에센스',
         'about': [
             'Day Supreme Multi Essence Sunscreen은 Feelody Teen 라인의 아침 단계로, 여러 제품을 한 번에 대체하도록 설계된 50ml SPF50+ PA++++ 선 에센스입니다. 회사에 따르면 일반적인 선크림 포뮬러 대신 발림성 좋은 에센스 텍스처를 사용해 백탁이나 끈적임 없이 성별에 관계없이 청소년과 성인 모두에게 적합합니다.',
             '주요 성분으로는 보습을 위한 히알루론산과 호호바 오일, 브라이트닝을 위한 나이아신아마이드, 진정을 위한 알로에 베라와 멀구슬나무 추출물이 있습니다. 회사에 따르면 이 제품은 인체 피부 1차 자극 시험과 민감성 피부 적합성 시험을 모두 완료해 평균 반응률 0.00%를 기록했으며, COSMAX Inc.가 CGMP, ISO 9001, ISO 14001, ISO 22716 기준으로 생산합니다.',
         ],
         'seoTitle': 'Day Supreme Multi Essence Sunscreen · Feelody · Teranova',
         'seoDesc': 'Feelody Teen 라인의 SPF50+ PA++++ 선 에센스: 아침 한 단계로 브라이트닝과 모이스처라이징 케어. 50ml.'},
        {'tagline': '모이스처라이징, 진정, 모공 케어를 위한 5-in-1 저녁 앰플',
         'about': [
             'Night Flex Calming Ampoule은 Feelody Teen 라인의 저녁 단계로, 토너·로션·에센스를 대체한다고 회사가 설명하는 50ml 앰플이며 모이스처라이징, 진정, 브라이트닝, 모공 케어, 피부 장벽 기능을 한 제품에 담았습니다.',
             '주요 성분으로는 보습과 장벽 강화를 위한 히알루론산과 판테놀, 브라이트닝을 위한 나이아신아마이드, 진정을 위한 병풀 추출물 복합체와 베타인, 모공 케어를 위한 숙신산과 글루코노락톤이 있습니다. 회사에 따르면 이 제품은 인체 피부 1차 자극 시험과 민감성 피부 적합성 시험을 모두 완료해 평균 반응률 0.00%를 기록했으며, COSMAX Inc.가 CGMP, ISO 9001, ISO 14001, ISO 22716 기준으로 생산합니다.',
         ],
         'seoTitle': 'Night Flex Calming Ampoule · Feelody · Teranova',
         'seoDesc': 'Feelody Teen 라인의 5-in-1 저녁 앰플: 한 단계로 모이스처라이징, 진정, 브라이트닝, 모공 케어. 50ml.'},
        {'tagline': '모공과 트러블 케어를 위한 AHA/BHA/PHA 버블 폼 클렌저',
         'about': [
             'Acne Wonder Bubble Foam Cleansing은 Feelody Teen 라인을 완성하는 제품으로, 모공·피지·각질의 딥 클렌징을 위한 AHA·BHA·PHA 복합 성분을 담은 150ml 고밀도 버블 폼 클렌저입니다. 회사에 따르면 피부의 유수분 밸런스를 고려한 약산성 pH 4.5로 조정되어 세안 후 촉촉한 마무리감을 남깁니다.',
             '주요 진정·재생 성분으로는 병풀 추출물 복합체, 비타민 C, 비타민 B12·E가 있습니다. 회사에 따르면 이 제품은 인체 피부 1차 자극성 시험을 완료해 평균 반응률 0.00%를 기록했으며, COSMAX Inc.가 CGMP, ISO 9001, ISO 14001, ISO 22716 기준으로 생산합니다.',
         ],
         'seoTitle': 'Acne Wonder Bubble Foam Cleansing · Feelody · Teranova',
         'seoDesc': 'Feelody Teen 라인의 AHA/BHA/PHA 버블 폼 클렌저: 모공과 트러블 피부 케어. 150ml, pH 4.5.'},
        {'tagline': 'PDRN과 엑소좀 성분을 담은 퍼스트 에센스 스킨 부스터',
         'about': [
             'Vital Surge Skin Booster는 Feelody Derma 라인의 첫 제품으로, 세안 직후 바르는 150ml 퍼스트 에센스이며 알로에 워터, 7가지 히알루론산 복합체, PDRN, 엑소좀 성분, 병풀 추출물, 베르가못 오일을 중심으로 구성됩니다.',
             '회사의 임상 자료에 따르면 1회 사용 후 피부 장벽력이 8.2% 개선되고, 보습력이 159% 개선되었으며, 가시적인 피부 각질이 37% 감소했습니다. 이 제품은 인체 피부 1차 자극성 시험을 완료해 평균 반응률 0.00%를 기록했으며, Ire Cosmetics가 ISO 22716 기준으로 생산합니다.',
         ],
         'seoTitle': 'Vital Surge Skin Booster · Feelody · Teranova',
         'seoDesc': 'PDRN과 엑소좀 성분을 담은 Feelody Derma 라인의 퍼스트 에센스 부스터. 150ml.'},
        {'tagline': 'PDRN, 엑소좀, 퀸즐랜드 너트 오일을 담은 마무리 배리어 크림',
         'about': [
             'All Day Shield Barrier Cream은 Feelody Derma 라인을 완성하는 제품으로, 스킨 부스터와 동일한 알로에 워터, 7가지 히알루론산 복합체, PDRN, 엑소좀 성분, 병풀 추출물 베이스에 크림 단계를 위한 퀸즐랜드 너트 오일과 베르가못 오일을 더한 50ml 마무리 크림입니다.',
             '회사의 임상 자료에 따르면 1회 사용 후 피부 장벽력이 9.7% 개선되고, 보습력이 128% 개선되었으며, 가시적인 피부 각질이 45% 감소했습니다. 이 제품은 인체 피부 1차 자극성 시험을 완료해 평균 반응률 0.00%를 기록했으며, Ire Cosmetics가 ISO 22716 기준으로 생산합니다.',
         ],
         'seoTitle': 'All Day Shield Barrier Cream · Feelody · Teranova',
         'seoDesc': 'PDRN, 엑소좀, 퀸즐랜드 너트 오일을 담은 Feelody Derma 라인의 마무리 배리어 크림. 50ml.'},
    ])


# =================================================== ZH ====================
add('zh',
    origin='韩国',
    tagline='健康焕采肌肤，适合各个年龄段',
    descriptor='拥有Teen和Derma系列的韩国护肤品牌',
    about=[
        '我们是Feelody，一个由韩医师、两个孩子的母亲创立的韩国护肤品牌。据公司介绍，品牌理念源于她自己孩子的肌肤问题，这也成为我们最初的目标：护肤品既要足够温和、适合青少年使用，又要足够有效，可供各个年龄段日常使用。',
        '我们的产品线将五款产品整合为两大系列。Feelody Teen系列涵盖日常三步护理：Day Supreme Multi Essence Sunscreen防晒精华、Night Flex Calming Ampoule舒缓安瓶和Acne Wonder Bubble Foam Cleansing泡沫洁面乳。Feelody Derma系列新增两款居家护理产品，适合更深层的护理：Vital Surge Skin Booster肌肤精华和All Day Shield Barrier Cream屏障霜。每款产品均采用多效合一配方，因此简短的护理流程也能同时解决多种肌肤问题。',
        '我们的Teen系列由COSMAX Inc.生产，我们将其称为符合CGMP、ISO 9001、ISO 14001、ISO 22716等全球标准生产的OEM合作伙伴；Derma系列由Ire Cosmetics（ISO 22716）生产。根据我们的临床测试资料，五款产品均完成了人体皮肤原发性刺激或刺激性测试，平均反应率为0.00%。',
    ],
    facts=['由韩医师创立', '两大系列，五款多效合一产品', '由COSMAX Inc.和Ire Cosmetics生产', '据公司介绍已出口至15个国家'],
    channels=['化妆品进口商及经销商', '药妆店及免税零售渠道', '电商平台及线上零售', '快闪店及美妆零售连锁'],
    line_notes=[
        'Teen系列的SPF50+ PA++++防晒精华，同时具备提亮和保湿护理功能。据公司介绍，易推开的精华质地不留白浊，该产品已完成人体皮肤原发性刺激测试和敏感肌适用性测试，平均反应率为0.00%。关键成分：透明质酸、烟酰胺、荷荷巴油、芦荟和印度楝树提取物。',
        'Teen系列的五合一安瓶，一个晚间步骤即可完成保湿、舒缓、提亮、毛孔护理和肌肤屏障支持。据公司介绍，该产品已完成人体皮肤原发性刺激测试和敏感肌适用性测试，平均反应率为0.00%。关键成分：透明质酸、烟酰胺、泛醇、积雪草复合成分和甜菜碱。',
        'Teen系列的高密度泡沫洁面乳，以AHA、BHA和PHA复合成分为基础，针对毛孔和痘肌护理，pH值调节至弱酸性4.5。据公司介绍，该产品已完成人体皮肤原发性刺激性测试，平均反应率为0.00%。关键成分：积雪草复合成分、维生素C和维生素B12/E。',
        'Derma系列的第一步精华肌肤精华，以芦荟水、七重透明质酸复合成分、PDRN和外泌体成分为核心。根据公司的临床测试资料，单次使用后肌肤屏障强度提升8.2%，保湿度提升159%，可见老废角质减少37%。',
        'Derma系列的收尾霜，与肌肤精华共享相同的芦荟水、透明质酸、PDRN和外泌体基础配方，并加入澳洲坚果油。根据公司的临床测试资料，单次使用后肌肤屏障强度提升9.7%，保湿度提升128%，可见老废角质减少45%。',
    ],
    tech=[
        {'name': 'COSMAX Inc.', 'note': 'Feelody Teen系列（防晒、安瓶、泡沫洁面乳）的生产合作伙伴。据公司介绍，生产符合CGMP、ISO 9001、ISO 14001和ISO 22716标准。'},
        {'name': 'Ire Cosmetics', 'note': 'Feelody Derma系列（肌肤精华、屏障霜）的生产合作伙伴。据公司介绍，生产符合ISO 22716标准。'},
    ],
    formats=['防晒精华', '安瓶', '泡沫洁面乳', '精华肌肤精华', '屏障霜'],
    export_note='据公司介绍，Feelody目前已出口至15个国家，并在印度尼西亚、巴西和西班牙拥有独家经销合作伙伴。在韩国，品牌通过十余家线下美妆门店、约100家药妆店以及仁川机场免税店销售；公司列出的海外零售合作伙伴包括日本的唐吉诃德、马来西亚的Lalaport百货和Curve购物中心，以及泰国和缅甸的Dookn Dookn。公司表示对巴西以外的拉丁美洲、北美、西班牙以外的欧洲以及独联体地区尤为关注——这些正是Teranova协调引荐合作伙伴的市场。',
    consent_note='相关资料、产品描述及图片由Feelody提供，并经公司同意（2026年10月至11月的往来邮件）发布。FOB价格表及其他商业条款应公司要求保密。Teranova负责协调并支持交易。',
    terms=[
        {'label': '合作形式', 'value': '以Feelody品牌批发供应成品。'},
        {'label': '独家市场', 'value': '据公司介绍，印度尼西亚、巴西和西班牙已有独家经销合作伙伴。'},
        {'label': '价格及最小起订量', 'value': '可应要求提供——未经公司书面同意不予公开。'},
        {'label': '合作流程', 'value': '询盘 → Teranova审核与对接 → 洽谈与样品 → 由Teranova协调的物流、清关与付款。'},
    ],
    catalog_notes=[
        '具备提亮和保湿护理的SPF50+ PA++++防晒精华，50毫升。',
        '用于保湿、提亮和毛孔护理的5合1舒缓安瓶，50毫升。',
        '针对痘肌和毛孔护理的AHA/BHA/PHA泡沫洁面乳，150毫升。',
        '含PDRN和外泌体成分的肌肤屏障精华，150毫升。',
        '含PDRN、外泌体和澳洲坚果油的屏障霜，50毫升。',
    ],
    seo_title='Feelody — 韩国Teen与Derma护肤系列 · Teranova',
    seo_desc='Feelody是一个拥有两大系列的韩国护肤品牌：Teen（防晒、安瓶、泡沫洁面乳）与Derma（肌肤精华、屏障霜）。由COSMAX Inc.和Ire Cosmetics生产。',
    ui={
        'profile_sup': '供应商简介', 'about_h': '关于公司', 'for_whom': '适用对象：',
        'lines_h': '产品', 'catalog_h': '产品目录', 'tech_h': '生产合作伙伴',
        'products_h': '产品', 'products_note': '两大系列，五款适合日常护理的多效合一护肤产品。',
        'formats_h': '产品形态', 'export_h': '出口与市场', 'terms_h': '合作条件',
        'cta_h': '对这家制造商感兴趣吗？',
        'cta_d': '联系我们——Teranova将安排洽谈、核验并全程支持交易，从首次接洽直至完成供货。',
        'cta_btn': '通过 Teranova 联系', 'more': '查看简介 →', 'verified_suppliers': '已核验供应商',
        'certs_h': '按市场划分的注册与标准',
        'certs_note': '由公司针对特定出口市场声明，具体覆盖范围因产品而异（详见各产品页面）。证明文件副本在交易阶段提供。',
    },
    products=[
        {'tagline': '兼具提亮和保湿护理的SPF50+ PA++++防晒精华',
         'about': [
             'Day Supreme Multi Essence Sunscreen是Feelody Teen系列的晨间步骤：一款50毫升SPF50+ PA++++防晒精华，旨在一次性替代多款产品。据公司介绍，其采用易推开的精华质地，而非传统防晒配方，不留白浊或黏腻感，无论性别，青少年和成人均适用。',
             '关键成分包括用于保湿的透明质酸和荷荷巴油、用于提亮的烟酰胺，以及用于舒缓的芦荟和印度楝树提取物。据公司介绍，该产品已完成人体皮肤原发性刺激测试和敏感肌适用性测试，平均反应率均为0.00%，由COSMAX Inc.按照CGMP、ISO 9001、ISO 14001和ISO 22716标准生产。',
         ],
         'seoTitle': 'Day Supreme Multi Essence Sunscreen · Feelody · Teranova',
         'seoDesc': 'Feelody Teen系列的SPF50+ PA++++防晒精华：一个晨间步骤即可完成提亮与保湿护理。50毫升。'},
        {'tagline': '用于保湿、舒缓和毛孔护理的五合一晚间安瓶',
         'about': [
             'Night Flex Calming Ampoule是Feelody Teen系列的晚间步骤：一款50毫升安瓶，据公司介绍可替代爽肤水、乳液和精华，将保湿、舒缓、提亮、毛孔护理和肌肤屏障功能集于一身。',
             '关键成分包括用于保湿和屏障支持的透明质酸和泛醇、用于提亮的烟酰胺、用于舒缓的积雪草复合成分和甜菜碱，以及用于毛孔护理的琥珀酸和葡萄糖酸内酯。据公司介绍，该产品已完成人体皮肤原发性刺激测试和敏感肌适用性测试，平均反应率均为0.00%，由COSMAX Inc.按照CGMP、ISO 9001、ISO 14001和ISO 22716标准生产。',
         ],
         'seoTitle': 'Night Flex Calming Ampoule · Feelody · Teranova',
         'seoDesc': 'Feelody Teen系列的5合1晚间安瓶：一个步骤完成保湿、舒缓、提亮和毛孔护理。50毫升。'},
        {'tagline': '针对毛孔和痘肌护理的AHA/BHA/PHA泡沫洁面乳',
         'about': [
             'Acne Wonder Bubble Foam Cleansing是Feelody Teen系列的收尾产品：一款150毫升高密度泡沫洁面乳，以AHA、BHA和PHA复合成分为基础，深层清洁毛孔、皮脂和老废角质。据公司介绍，配方调节至兼顾肌肤油水平衡的弱酸性pH 4.5，洁面后留下保湿感。',
             '主要舒缓与修护成分包括积雪草复合成分、维生素C和维生素B12/E。据公司介绍，该产品已完成人体皮肤原发性刺激性测试，平均反应率为0.00%，由COSMAX Inc.按照CGMP、ISO 9001、ISO 14001和ISO 22716标准生产。',
         ],
         'seoTitle': 'Acne Wonder Bubble Foam Cleansing · Feelody · Teranova',
         'seoDesc': 'Feelody Teen系列的AHA/BHA/PHA泡沫洁面乳，针对毛孔和痘肌护理。150毫升，pH 4.5。'},
        {'tagline': '以PDRN和外泌体成分为核心的第一步肌肤精华',
         'about': [
             'Vital Surge Skin Booster开启Feelody Derma系列：一款150毫升第一步精华，洁面后立即使用，以芦荟水、七重透明质酸复合成分、PDRN、外泌体成分、积雪草提取物和佛手柑油为核心配方。',
             '根据公司的临床测试资料，单次使用后肌肤屏障强度提升8.2%，保湿度提升159%，可见老废角质减少37%。该产品已完成人体皮肤原发性刺激性测试，平均反应率为0.00%，由Ire Cosmetics按照ISO 22716标准生产。',
         ],
         'seoTitle': 'Vital Surge Skin Booster · Feelody · Teranova',
         'seoDesc': 'Feelody Derma系列的第一步肌肤精华，含PDRN和外泌体成分。150毫升。'},
        {'tagline': '含PDRN、外泌体和澳洲坚果油的收尾屏障霜',
         'about': [
             'All Day Shield Barrier Cream是Feelody Derma系列的收尾产品：一款50毫升收尾霜，与肌肤精华共享相同的芦荟水、七重透明质酸复合成分、PDRN、外泌体成分和积雪草提取物基础配方，并为乳霜步骤加入澳洲坚果油和佛手柑油。',
             '根据公司的临床测试资料，单次使用后肌肤屏障强度提升9.7%，保湿度提升128%，可见老废角质减少45%。该产品已完成人体皮肤原发性刺激性测试，平均反应率为0.00%，由Ire Cosmetics按照ISO 22716标准生产。',
         ],
         'seoTitle': 'All Day Shield Barrier Cream · Feelody · Teranova',
         'seoDesc': 'Feelody Derma系列的收尾屏障霜，含PDRN、外泌体成分和澳洲坚果油。50毫升。'},
    ])

# =================================================== JA ====================
add('ja',
    origin='韓国',
    tagline='あらゆる年代のための健やかで輝く肌',
    descriptor='TeenラインとDermaラインを展開する韓国スキンケアブランド',
    about=[
        'Feelodyは、韓方医であり2児の母である私たちが設立した韓国のスキンケアブランドです。会社によると、ブランドのアイデアは自身の子どもたちの肌悩みから生まれ、ティーンにも使えるほど低刺激でありながら、あらゆる年代が毎日使えるほど効果的なスキンケアという、私たちの出発点になりました。',
        '私たちのラインナップは、5つの製品を2つのラインにまとめています。Feelody Teenラインは、Day Supreme Multi Essence Sunscreen、Night Flex Calming Ampoule、Acne Wonder Bubble Foam Cleansingによる1日3ステップのルーティンをカバーします。Feelody Dermaラインは、より本格的なホームケアのために、Vital Surge Skin BoosterとAll Day Shield Barrier Creamの2製品を加えています。各製品はオールインワン処方で設計されているため、短いルーティンでも複数の肌悩みに同時に対応できます。',
        '私たちがCGMP、ISO 9001、ISO 14001、ISO 22716に基づくグローバル基準での生産を担うOEMパートナーと位置づけるCOSMAX Inc.がTeenラインを製造し、DermaラインはIre Cosmetics（ISO 22716）が製造しています。私たちの臨床試験資料によると、5製品すべてがヒト皮膚一次刺激試験または刺激性試験を完了し、平均反応率は0.00%でした。',
    ],
    facts=['韓方医が設立', '2ライン、5製品のオールインワン', 'COSMAX Inc.とIre Cosmeticsが製造', '会社によると15か国に輸出'],
    channels=['化粧品の輸入業者・販売代理店', 'ドラッグストア・免税店', 'マーケットプレイス・ECサイト', 'ポップアップストア・ビューティー小売チェーン'],
    line_notes=[
        'ブライトニングと保湿ケアも兼ねるTeenラインのSPF50+ PA++++日焼け止めエッセンスです。会社によると、伸びの良いエッセンステクスチャーで白浮きがなく、ヒト皮膚一次刺激試験と敏感肌適合性試験をいずれも完了し、平均反応率は0.00%でした。主要成分：ヒアルロン酸、ナイアシンアミド、ホホバオイル、アロエベラおよびセンダン抽出物。',
        '保湿、鎮静、ブライトニング、毛穴ケア、肌バリアサポートを夜の1ステップに集約したTeenラインの5-in-1アンプルです。会社によると、ヒト皮膚一次刺激試験と敏感肌適合性試験をいずれも完了し、平均反応率は0.00%でした。主要成分：ヒアルロン酸、ナイアシンアミド、パンテノール、ツボクサ複合成分、ベタイン。',
        '毛穴・ニキビケアのためのAHA・BHA・PHA複合成分を配合したTeenラインの高密度泡洗顔料で、弱酸性pH4.5に調整されています。会社によると、ヒト皮膚一次刺激性試験を完了し、平均反応率は0.00%でした。主要成分：ツボクサ複合成分、ビタミンC、ビタミンB12・E。',
        'アロエ葉水、7種のヒアルロン酸複合成分、PDRN、エクソソーム成分を中心としたDermaラインのファーストエッセンスブースターです。会社の臨床試験資料によると、1回使用後に肌バリア強度が8.2%改善、保湿力が159%改善、目に見える肌の老廃角質が37%減少しました。',
        'ブースターと同じアロエ葉水、ヒアルロン酸、PDRN、エクソソームをベースに、クインズランドナッツオイルを加えたDermaラインの仕上げクリームです。会社の臨床試験資料によると、1回使用後に肌バリア強度が9.7%改善、保湿力が128%改善、目に見える肌の老廃角質が45%減少しました。',
    ],
    tech=[
        {'name': 'COSMAX Inc.', 'note': 'Feelody Teenライン（日焼け止め、アンプル、泡洗顔料）の製造パートナーです。会社によると、生産はCGMP、ISO 9001、ISO 14001、ISO 22716の基準を満たしています。'},
        {'name': 'Ire Cosmetics', 'note': 'Feelody Dermaライン（スキンブースター、バリアクリーム）の製造パートナーです。会社によると、生産はISO 22716の基準を満たしています。'},
    ],
    formats=['日焼け止めエッセンス', 'アンプル', '泡洗顔料', 'ブースターエッセンス', 'バリアクリーム'],
    export_note='会社によると、Feelodyは現在15か国に輸出されており、インドネシア、ブラジル、スペインにはすでに独占販売パートナーがいます。韓国国内では10店舗以上のオフライン化粧品店、約100店のドラッグストア、仁川空港の免税店で販売されており、海外の小売パートナーとしては日本のドン・キホーテ、マレーシアのLalaportデパートおよびCurveショッピングモール、タイ・ミャンマーのDookn Dooknを挙げています。会社は特にブラジルを除くラテンアメリカ、北米、スペインを除くヨーロッパ、CIS地域への関心を示しており、Teranovaはこれらの市場でのパートナー紹介を調整します。',
    consent_note='資料、製品説明および画像はFeelodyより提供され、同社の同意（2026年10〜11月のやり取り）を得て掲載しています。FOB価格表およびその他の商業条件は、同社の要請により非公開となっています。Teranovaが取引の調整とサポートを行います。',
    terms=[
        {'label': '協業形態', 'value': 'Feelodyブランドの完成品の卸売供給。'},
        {'label': '独占市場', 'value': '会社によると、インドネシア、ブラジル、スペインにはすでに独占販売パートナーがいます。'},
        {'label': '価格・最小ロット', 'value': 'お問い合わせに応じてご案内——会社の書面による同意なしには公開しません。'},
        {'label': '進め方', 'value': 'お問い合わせ → Teranovaによる確認・調整 → 交渉・サンプル → Teranovaが調整する物流・通関・決済。'},
    ],
    catalog_notes=[
        'ブライトニングと保湿ケアを兼ねるSPF50+ PA++++日焼け止めエッセンス、50ml。',
        '保湿・ブライトニング・毛穴ケアのための5-in-1鎮静アンプル、50ml。',
        'ニキビ・毛穴ケアのためのAHA/BHA/PHA泡洗顔料、150ml。',
        'PDRNとエクソソーム成分配合の肌バリアブースターエッセンス、150ml。',
        'PDRN、エクソソーム、クインズランドナッツオイル配合のバリアクリーム、50ml。',
    ],
    seo_title='Feelody — 韓国のTeen & Dermaスキンケア · Teranova',
    seo_desc='FeelodyはTeen（日焼け止め、アンプル、泡洗顔料）とDerma（スキンブースター、バリアクリーム）の2ラインを展開する韓国スキンケアブランドです。COSMAX Inc.とIre Cosmeticsが製造しています。',
    ui={
        'profile_sup': 'サプライヤープロフィール', 'about_h': '会社概要', 'for_whom': '対象:',
        'lines_h': '製品', 'catalog_h': '製品カタログ', 'tech_h': '製造パートナー',
        'products_h': '製品', 'products_note': '毎日のルーティンのための2ライン、5つのオールインワンスキンケア製品。',
        'formats_h': '製品フォーマット', 'export_h': '輸出と市場', 'terms_h': '協業条件',
        'cta_h': 'このメーカーにご興味をお持ちですか?',
        'cta_d': 'お問い合わせください。Teranovaが、初回のご連絡から納品まで、交渉・検証・取引のサポートを行います。',
        'cta_btn': 'Teranova を通じてお問い合わせ', 'more': 'プロフィールを開く →', 'verified_suppliers': '検証済みサプライヤー',
        'certs_h': '市場別の登録・基準',
        'certs_note': '特定の輸出市場について会社が表明している内容であり、製品ごとに範囲が異なります（各製品ページをご参照ください）。裏付け資料の写しは取引段階で提供されます。',
    },
    products=[
        {'tagline': 'ブライトニングと保湿ケアも兼ねるSPF50+ PA++++日焼け止めエッセンス',
         'about': [
             'Day Supreme Multi Essence Sunscreenは、Feelody Teenラインの朝のステップで、複数の製品を一度に置き換えることを目的とした50mlのSPF50+ PA++++日焼け止めエッセンスです。会社によると、従来の日焼け止め処方ではなく伸びの良いエッセンステクスチャーを採用しており、白浮きやべたつきがなく、性別を問わずティーンから大人まで使用できます。',
             '主要成分には、保湿のためのヒアルロン酸とホホバオイル、ブライトニングのためのナイアシンアミド、鎮静のためのアロエベラとセンダン抽出物が含まれます。会社によると、本製品はヒト皮膚一次刺激試験と敏感肌適合性試験をいずれも完了し、平均反応率は0.00%で、COSMAX Inc.がCGMP、ISO 9001、ISO 14001、ISO 22716の基準で製造しています。',
         ],
         'seoTitle': 'Day Supreme Multi Essence Sunscreen · Feelody · Teranova',
         'seoDesc': 'Feelody TeenラインのSPF50+ PA++++日焼け止めエッセンス：朝の1ステップでブライトニングと保湿ケアを。50ml。'},
        {'tagline': '保湿・鎮静・毛穴ケアのための5-in-1夜用アンプル',
         'about': [
             'Night Flex Calming Ampouleは、Feelody Teenラインの夜のステップで、会社の説明によれば化粧水・乳液・エッセンスを置き換える50mlのアンプルであり、保湿、鎮静、ブライトニング、毛穴ケア、肌バリア機能を1製品に集約しています。',
             '主要成分には、保湿とバリアサポートのためのヒアルロン酸とパンテノール、ブライトニングのためのナイアシンアミド、鎮静のためのツボクサ複合成分とベタイン、毛穴ケアのためのコハク酸とグルコノラクトンが含まれます。会社によると、本製品はヒト皮膚一次刺激試験と敏感肌適合性試験をいずれも完了し、平均反応率は0.00%で、COSMAX Inc.がCGMP、ISO 9001、ISO 14001、ISO 22716の基準で製造しています。',
         ],
         'seoTitle': 'Night Flex Calming Ampoule · Feelody · Teranova',
         'seoDesc': 'Feelody Teenラインの5-in-1夜用アンプル：1ステップで保湿・鎮静・ブライトニング・毛穴ケアを。50ml。'},
        {'tagline': '毛穴・ニキビケアのためのAHA/BHA/PHA泡洗顔料',
         'about': [
             'Acne Wonder Bubble Foam Cleansingは、Feelody Teenラインを締めくくる製品で、毛穴・皮脂・老廃角質のディープクレンジングのためのAHA・BHA・PHA複合成分を配合した150mlの高密度泡洗顔料です。会社によると、肌本来の油分・水分バランスを考慮した弱酸性pH4.5に調整されており、洗い上がりはしっとりとした仕上がりです。',
             '主な鎮静・修復成分には、ツボクサ複合成分、ビタミンC、ビタミンB12・Eが含まれます。会社によると、本製品はヒト皮膚一次刺激性試験を完了し、平均反応率は0.00%で、COSMAX Inc.がCGMP、ISO 9001、ISO 14001、ISO 22716の基準で製造しています。',
         ],
         'seoTitle': 'Acne Wonder Bubble Foam Cleansing · Feelody · Teranova',
         'seoDesc': 'Feelody TeenラインのAHA/BHA/PHA泡洗顔料：毛穴・ニキビ肌のケアに。150ml、pH4.5。'},
        {'tagline': 'PDRNとエクソソーム成分を核としたファーストエッセンスブースター',
         'about': [
             'Vital Surge Skin Boosterは、Feelody Dermaラインの最初の製品で、洗顔直後に使用する150mlのファーストエッセンスであり、アロエ葉水、7種のヒアルロン酸複合成分、PDRN、エクソソーム成分、ツボクサ抽出物、ベルガモットオイルを中心に処方されています。',
             '会社の臨床試験資料によると、1回使用後に肌バリア強度が8.2%改善、保湿力が159%改善、目に見える肌の老廃角質が37%減少しました。本製品はヒト皮膚一次刺激性試験を完了し、平均反応率は0.00%で、Ire CosmeticsがISO 22716の基準で製造しています。',
         ],
         'seoTitle': 'Vital Surge Skin Booster · Feelody · Teranova',
         'seoDesc': 'PDRNとエクソソーム成分を配合したFeelody Dermaラインのファーストエッセンスブースター。150ml。'},
        {'tagline': 'PDRN、エクソソーム、クインズランドナッツオイル配合の仕上げバリアクリーム',
         'about': [
             'All Day Shield Barrier Creamは、Feelody Dermaラインを締めくくる製品で、スキンブースターと同じアロエ葉水、7種のヒアルロン酸複合成分、PDRN、エクソソーム成分、ツボクサ抽出物をベースに、クリームステップのためにクインズランドナッツオイルとベルガモットオイルを加えた50mlの仕上げクリームです。',
             '会社の臨床試験資料によると、1回使用後に肌バリア強度が9.7%改善、保湿力が128%改善、目に見える肌の老廃角質が45%減少しました。本製品はヒト皮膚一次刺激性試験を完了し、平均反応率は0.00%で、Ire CosmeticsがISO 22716の基準で製造しています。',
         ],
         'seoTitle': 'All Day Shield Barrier Cream · Feelody · Teranova',
         'seoDesc': 'PDRN、エクソソーム成分、クインズランドナッツオイルを配合したFeelody Dermaラインの仕上げバリアクリーム。50ml。'},
    ])


# =================================================== HE ====================
add('he',
    origin='קוריאה',
    tagline='עור בריא וקורן בכל גיל',
    descriptor='מותג קוריאני לטיפוח עור עם קווי Teen ו-Derma',
    about=[
        'אנחנו Feelody, מותג קוריאני לטיפוח עור שהקמנו כרופאת רפואה קוריאנית ואם לשני ילדים. לדברי החברה, הרעיון נולד מתוך הדאגה לעור של ילדיה שלה, ומכאן המטרה המקורית שלנו: טיפוח עדין דיו לבני נוער ויעיל דיו לשימוש יומיומי בכל גיל.',
        'הקולקציה שלנו מאחדת חמישה מוצרים בשני קווים. קו Feelody Teen מכסה שגרה יומית בת שלושה שלבים: קרם הגנה Day Supreme Multi Essence Sunscreen, אמפולה מרגיעה Night Flex Calming Ampoule וקצף ניקוי Acne Wonder Bubble Foam Cleansing. קו Feelody Derma מוסיף שני מוצרי טיפוח ביתי לשגרה מתקדמת יותר: בוסטר Vital Surge Skin Booster וקרם מגן All Day Shield Barrier Cream. כל מוצר בנוי כנוסחת all-in-one, כך ששגרה קצרה מכסה כמה בעיות עור בבת אחת.',
        'קו ה-Teen שלנו מיוצר על ידי COSMAX Inc., שאנו מתארים כשותפת ה-OEM שלנו לייצור בסטנדרט עולמי (CGMP, ISO 9001, ISO 14001, ISO 22716); קו ה-Derma מיוצר על ידי Ire Cosmetics (ISO 22716). לפי חומרי הבדיקות הקליניות שלנו, כל חמשת המוצרים עברו בדיקת גירוי או גירוי ראשוני על עור אדם בשיעור תגובה ממוצע של 0.00%.',
    ],
    facts=['הוקם על ידי רופאת רפואה קוריאנית', 'שני קווים, חמישה מוצרים all-in-one',
           'ייצור על ידי COSMAX Inc. ו-Ire Cosmetics', 'יצוא ל-15 מדינות, לדברי החברה'],
    channels=['יבואני ומפיצי קוסמטיקה', 'רשתות בתי מרקחת ו-duty free',
              'שווקים מקוונים ומסחר אלקטרוני', 'דוכני פופ-אפ ורשתות קמעונאות יופי'],
    line_notes=[
        'אסנס הגנה מהשמש SPF50+ PA++++ מקו ה-Teen, שמשמש גם כשלב מבהיר ולחות. לדברי החברה, המרקם נמרח בקלות ואינו משאיר סימן לבן, והמוצר עבר בדיקת גירוי ראשוני על עור אדם ובדיקת התאמה לעור רגיש בשיעור תגובה ממוצע של 0.00%. רכיבים עיקריים: חומצה היאלורונית, ניאצינאמיד, שמן יוג\'ובה, תמציות אלוורה ומליה אזדירכטה.',
        'אמפולה חמישה-באחד מקו ה-Teen ללחות, הרגעה, הבהרה, טיפוח נקבוביות ותמיכה במחסום העור בשלב ערב אחד. לדברי החברה, המוצר עבר בדיקת גירוי ראשוני על עור אדם ובדיקת התאמה לעור רגיש בשיעור תגובה ממוצע של 0.00%. רכיבים עיקריים: חומצה היאלורונית, ניאצינאמיד, פנתנול, קומפלקס סנטלה אסיאטית ובטאין.',
        'קצף ניקוי צפוף מקו ה-Teen המבוסס על קומפלקס AHA, BHA ו-PHA לטיפוח נקבוביות ועור נוטה לאקנה, מאוזן ל-pH 4.5 חלש. לדברי החברה, המוצר עבר בדיקת גירוי ראשוני על עור אדם בשיעור תגובה ממוצע של 0.00%. רכיבים עיקריים: קומפלקס סנטלה אסיאטית, ויטמין C וויטמינים B12/E.',
        'בוסטר אסנס ראשון מקו ה-Derma, בנוי סביב מי עלה אלוורה, קומפלקס של שבעה סוגי חומצה היאלורונית, PDRN ורכיבי אקסוזום. לפי חומרי הבדיקות הקליניות של החברה, שימוש בודד הראה שיפור של 8.2% בחוזק מחסום העור, שיפור של 159% בלחות וירידה של 37% בתאי עור מתים נראים לעין.',
        'קרם סיום מקו ה-Derma, המשתף את בסיס מי עלה האלוורה, חומצה היאלורונית, PDRN ואקסוזום של הבוסטר, בתוספת שמן אגוז קווינסלנד. לפי חומרי הבדיקות הקליניות של החברה, שימוש בודד הראה שיפור של 9.7% בחוזק מחסום העור, שיפור של 128% בלחות וירידה של 45% בתאי עור מתים נראים לעין.',
    ],
    tech=[
        {'name': 'COSMAX Inc.', 'note': 'שותפת הייצור לקו Feelody Teen — קרם הגנה, אמפולה וקצף ניקוי. לדברי החברה, הייצור עומד בסטנדרטים CGMP, ISO 9001, ISO 14001 ו-ISO 22716.'},
        {'name': 'Ire Cosmetics', 'note': 'שותפת הייצור לקו Feelody Derma — בוסטר וקרם מגן. לדברי החברה, הייצור עומד בסטנדרט ISO 22716.'},
    ],
    formats=['אסנס הגנה מהשמש', 'אמפולה', 'קצף ניקוי', 'אסנס בוסטר', 'קרם מגן'],
    export_note='לדברי החברה, Feelody משווקת כיום ל-15 מדינות ויש לה שותפי הפצה בלעדיים באינדונזיה, בברזיל ובספרד. בקוריאה המותג נמכר ביותר מעשרה חנויות קוסמטיקה לא מקוונות, כ-100 בתי מרקחת וחנות ה-duty free בנמל התעופה אינצ\'און; בין שותפי הקמעונאות הבינלאומיים המפורטים: רשת Don Quijote ביפן, Lalaport Department Store וקניון Curve במלזיה, ורשת Dookn Dookn בתאילנד ובמיאנמר. החברה מתעניינת במיוחד באמריקה הלטינית מחוץ לברזיל, בצפון אמריקה, באירופה מחוץ לספרד ובחבר המדינות — השווקים שעבורם Teranova מתאמת היכרויות.',
    consent_note='החומרים, תיאורי המוצרים והתמונות סופקו על ידי Feelody ופורסמו בהסכמת החברה (התכתבות אוקטובר–נובמבר 2026). רשימת המחירים FOB ותנאים מסחריים נוספים נשארים חסויים לבקשת החברה. Teranova מתאמת ומלווה את העסקה.',
    terms=[
        {'label': 'מתכונת שיתוף הפעולה', 'value': 'אספקה סיטונאית של מוצרים מוגמרים תחת המותג Feelody.'},
        {'label': 'שווקים בלעדיים', 'value': 'לאינדונזיה, ברזיל וספרד כבר יש שותפי הפצה בלעדיים, לדברי החברה.'},
        {'label': 'מחירים וכמות מינימלית', 'value': 'לפי בקשה — אינם מתפרסמים ללא הסכמה בכתב של החברה.'},
        {'label': 'איך זה עובד', 'value': 'בקשה → בדיקה ותיאום של Teranova → משא ומתן ודגימות → לוגיסטיקה, מכס ותשלום בתיאום Teranova.'},
    ],
    catalog_notes=[
        'אסנס הגנה מהשמש SPF50+ PA++++ עם טיפוח מבהיר ולחות; 50 מ"ל.',
        'אמפולה מרגיעה 5-ב-1 ללחות, הבהרה וטיפוח נקבוביות; 50 מ"ל.',
        'קצף ניקוי AHA/BHA/PHA לעור נוטה לאקנה וטיפוח נקבוביות; 150 מ"ל.',
        'אסנס בוסטר למחסום העור עם PDRN ואקסוזום; 150 מ"ל.',
        'קרם מגן עם PDRN, אקסוזום ושמן אגוז קווינסלנד; 50 מ"ל.',
    ],
    seo_title='Feelody — טיפוח עור קוריאני Teen ו-Derma · Teranova',
    seo_desc='Feelody הוא מותג קוריאני לטיפוח עור בשני קווים: Teen (הגנה מהשמש, אמפולה, קצף ניקוי) ו-Derma (בוסטר, קרם מגן). ייצור על ידי COSMAX Inc. ו-Ire Cosmetics.',
    ui={
        'profile_sup': 'פרופיל ספק', 'about_h': 'אודות החברה', 'for_whom': 'מתאים ל:',
        'lines_h': 'מוצרים', 'catalog_h': 'קטלוג מוצרים', 'tech_h': 'שותפי ייצור',
        'products_h': 'מוצרים', 'products_note': 'שני קווים, חמישה מוצרי טיפוח all-in-one לשגרה יומית.',
        'formats_h': 'סוגי מוצרים', 'export_h': 'יצוא ושווקים', 'terms_h': 'תנאי שיתוף פעולה',
        'cta_h': 'מתעניינים ביצרן הזה?',
        'cta_d': 'צרו קשר — Teranova מארגנת משא ומתן, אימות וליווי עסקה מהמגע הראשון ועד האספקה.',
        'cta_btn': 'יצירת קשר דרך Teranova', 'more': 'פתיחת הפרופיל ←', 'verified_suppliers': 'ספקים מאומתים',
        'certs_h': 'רישומים ותקנים לפי שוק',
        'certs_note': 'מוצהר על ידי החברה עבור שווקי יצוא ספציפיים; הכיסוי משתנה לפי מוצר (ראו עמודי מוצרים). עותקי מסמכים תומכים מסופקים בשלב העסקה.',
    },
    products=[
        {'tagline': 'אסנס הגנה מהשמש SPF50+ PA++++ שמשמש גם כשלב מבהיר ולחות',
         'about': [
             'Day Supreme Multi Essence Sunscreen הוא אסנס הגנה מהשמש בנפח 50 מ"ל מקו Feelody Teen, שנועד להחליף כמה מוצרים בשלב בוקר אחד. לדברי החברה, במקום מרקם קרם הגנה רגיל אומץ מרקם אסנס שנמרח בקלות, ללא סימן לבן ובלי תחושת דביקות, ומתאים לבני נוער ומבוגרים ללא הבדל מגדר.',
             'רכיבים עיקריים: חומצה היאלורונית ושמן יוג\'ובה ללחות, ניאצינאמיד להבהרה, תמציות אלוורה ומליה אזדירכטה להרגעה. לדברי החברה, המוצר עבר בדיקת גירוי ראשוני על עור אדם ובדיקת התאמה לעור רגיש בשיעור תגובה ממוצע של 0.00%, ומיוצר על ידי COSMAX Inc. בסטנדרטים CGMP, ISO 9001, ISO 14001 ו-ISO 22716.',
         ],
         'seoTitle': 'Day Supreme Multi Essence Sunscreen · Feelody · Teranova',
         'seoDesc': 'אסנס הגנה מהשמש SPF50+ PA++++ מקו Feelody Teen: הבהרה ולחות בשלב בוקר אחד. 50 מ"ל.'},
        {'tagline': 'אמפולה ערב חמישה-באחד ללחות, הרגעה וטיפוח נקבוביות',
         'about': [
             'Night Flex Calming Ampoule היא אמפולת ערב בנפח 50 מ"ל מקו Feelody Teen, שלדברי החברה מחליפה טונר, לושן ואסנס ומאחדת לחות, הרגעה, הבהרה, טיפוח נקבוביות ותמיכה במחסום העור במוצר אחד.',
             'רכיבים עיקריים: חומצה היאלורונית ופנתנול ללחות ולתמיכה במחסום, ניאצינאמיד להבהרה, קומפלקס סנטלה אסיאטית ובטאין להרגעה, חומצה סוצינית וגלוקונולקטון לטיפוח נקבוביות. לדברי החברה, המוצר עבר בדיקת גירוי ראשוני על עור אדם ובדיקת התאמה לעור רגיש בשיעור תגובה ממוצע של 0.00%, ומיוצר על ידי COSMAX Inc. בסטנדרטים CGMP, ISO 9001, ISO 14001 ו-ISO 22716.',
         ],
         'seoTitle': 'Night Flex Calming Ampoule · Feelody · Teranova',
         'seoDesc': 'אמפולת ערב 5-ב-1 מקו Feelody Teen: לחות, הרגעה, הבהרה וטיפוח נקבוביות בשלב אחד. 50 מ"ל.'},
        {'tagline': 'קצף ניקוי AHA/BHA/PHA לטיפוח נקבוביות ועור נוטה לאקנה',
         'about': [
             'Acne Wonder Bubble Foam Cleansing מסיים את קו Feelody Teen: קצף ניקוי צפוף בנפח 150 מ"ל המבוסס על קומפלקס AHA, BHA ו-PHA לניקוי עמוק של נקבוביות, חֵלֶב וקרטין מת. לדברי החברה, הנוסחה מאוזנת ל-pH 4.5 חלש בהתאם לאיזון השומן-מים הטבעי של העור ומשאירה תחושת לחות לאחר השטיפה.',
             'רכיבים מרגיעים ומשקמים עיקריים: קומפלקס סנטלה אסיאטית, ויטמין C וויטמינים B12/E. לדברי החברה, המוצר עבר בדיקת גירוי ראשוני על עור אדם בשיעור תגובה ממוצע של 0.00%, ומיוצר על ידי COSMAX Inc. בסטנדרטים CGMP, ISO 9001, ISO 14001 ו-ISO 22716.',
         ],
         'seoTitle': 'Acne Wonder Bubble Foam Cleansing · Feelody · Teranova',
         'seoDesc': 'קצף ניקוי AHA/BHA/PHA מקו Feelody Teen לטיפוח נקבוביות ועור נוטה לאקנה. 150 מ"ל, pH 4.5.'},
        {'tagline': 'בוסטר אסנס ראשון עם PDRN ואקסוזום',
         'about': [
             'Vital Surge Skin Booster פותח את קו Feelody Derma: אסנס ראשון בנפח 150 מ"ל המיושם מיד לאחר השטיפה, מבוסס על מי עלה אלוורה, קומפלקס של שבעה סוגי חומצה היאלורונית, PDRN, רכיבי אקסוזום, תמצית סנטלה אסיאטית ושמן ברגמוט.',
             'לפי חומרי הבדיקות הקליניות של החברה, שימוש בודד הראה שיפור של 8.2% בחוזק מחסום העור, שיפור של 159% בלחות וירידה של 37% בתאי עור מתים נראים לעין. המוצר עבר בדיקת גירוי ראשוני על עור אדם בשיעור תגובה ממוצע של 0.00%, ומיוצר על ידי Ire Cosmetics בסטנדרט ISO 22716.',
         ],
         'seoTitle': 'Vital Surge Skin Booster · Feelody · Teranova',
         'seoDesc': 'בוסטר אסנס מקו Feelody Derma עם PDRN ואקסוזום. 150 מ"ל.'},
        {'tagline': 'קרם מגן גמר עם PDRN, אקסוזום ושמן אגוז קווינסלנד',
         'about': [
             'All Day Shield Barrier Cream מסיים את קו Feelody Derma: קרם גמר בנפח 50 מ"ל עם אותו בסיס כמו הבוסטר — מי עלה אלוורה, קומפלקס של שבעה סוגי חומצה היאלורונית, PDRN, אקסוזום ותמצית סנטלה אסיאטית — בתוספת שמן אגוז קווינסלנד ושמן ברגמוט לשלב הקרם.',
             'לפי חומרי הבדיקות הקליניות של החברה, שימוש בודד הראה שיפור של 9.7% בחוזק מחסום העור, שיפור של 128% בלחות וירידה של 45% בתאי עור מתים נראים לעין. המוצר עבר בדיקת גירוי ראשוני על עור אדם בשיעור תגובה ממוצע של 0.00%, ומיוצר על ידי Ire Cosmetics בסטנדרט ISO 22716.',
         ],
         'seoTitle': 'All Day Shield Barrier Cream · Feelody · Teranova',
         'seoDesc': 'קרם מגן גמר מקו Feelody Derma עם PDRN, אקסוזום ושמן אגוז קווינסלנד. 50 מ"ל.'},
    ])


# =================================================== HI ====================
add('hi',
    origin='कोरिया',
    tagline='हर उम्र में स्वस्थ, चमकदार त्वचा',
    descriptor='Teen और Derma उत्पाद लाइनों वाला कोरियाई स्किनकेयर ब्रांड',
    about=[
        'हम Feelody हैं, एक कोरियाई स्किनकेयर ब्रांड जिसे हमने एक कोरियाई चिकित्सा डॉक्टर और दो बच्चों की माँ के रूप में शुरू किया। कंपनी के अनुसार, यह विचार उनके अपने बच्चों की त्वचा की चिंताओं से आया, जिसने हमारे शुरुआती लक्ष्य को आकार दिया: एक किशोर के लिए पर्याप्त कोमल और किसी भी उम्र में रोज़ाना उपयोग के लिए पर्याप्त प्रभावी स्किनकेयर।',
        'हमारी रेंज दो लाइनों में पाँच उत्पादों को एक साथ लाती है। Feelody Teen लाइन में रोज़ाना तीन-चरणीय रूटीन शामिल है: Day Supreme Multi Essence Sunscreen, Night Flex Calming Ampoule और Acne Wonder Bubble Foam Cleansing। Feelody Derma लाइन अधिक उन्नत रूटीन के लिए दो होम-केयर उत्पाद जोड़ती है: Vital Surge Skin Booster और All Day Shield Barrier Cream। हर उत्पाद एक ऑल-इन-वन फॉर्मूला के रूप में बनाया गया है, ताकि एक छोटा रूटीन एक साथ कई त्वचा संबंधी चिंताओं को कवर करे।',
        'हमारी Teen लाइन का निर्माण COSMAX Inc. करती है, जिसे हम वैश्विक-मानक उत्पादन (CGMP, ISO 9001, ISO 14001, ISO 22716) के लिए अपना OEM साझेदार बताते हैं; Derma लाइन का निर्माण Ire Cosmetics (ISO 22716) करती है। हमारी क्लिनिकल टेस्टिंग सामग्री के अनुसार, सभी पाँच उत्पादों ने औसत 0.00% प्रतिक्रिया दर के साथ मानव त्वचा प्राथमिक जलन या उत्तेजना परीक्षण पूरा किया।',
    ],
    facts=['एक कोरियाई चिकित्सा डॉक्टर द्वारा स्थापित', 'दो लाइनें, पाँच ऑल-इन-वन उत्पाद',
           'निर्माता COSMAX Inc. और Ire Cosmetics', 'कंपनी के अनुसार 15 देशों में निर्यात'],
    channels=['कॉस्मेटिक्स आयातक और वितरक', 'ड्रगस्टोर और ड्यूटी-फ्री रिटेल',
              'मार्केटप्लेस और ई-कॉमर्स', 'पॉप-अप स्टोर और ब्यूटी रिटेल चेन'],
    line_notes=[
        'Teen लाइन का SPF50+ PA++++ सन एसेंस, जो ब्राइटनिंग और मॉइस्चराइजिंग स्टेप के रूप में भी काम करता है। कंपनी के अनुसार, फैलने वाला एसेंस टेक्सचर कोई सफेद निशान नहीं छोड़ता, और उत्पाद ने औसत 0.00% प्रतिक्रिया दर के साथ मानव त्वचा प्राथमिक जलन परीक्षण और संवेदनशील-त्वचा उपयुक्तता परीक्षण पूरा किया। मुख्य सामग्री: हायल्यूरोनिक एसिड, नियासिनामाइड, जोजोबा ऑयल, एलो बारबाडेंसिस और मेलिया अज़ादिराक्टा अर्क।',
        'Teen लाइन की पाँच-में-एक एम्पुल, मॉइस्चराइजिंग, कैल्मिंग, ब्राइटनिंग, पोर केयर और त्वचा-बैरियर सपोर्ट के लिए एक शाम के चरण में। कंपनी के अनुसार, इसने औसत 0.00% प्रतिक्रिया दर के साथ मानव त्वचा प्राथमिक जलन परीक्षण और संवेदनशील-त्वचा उपयुक्तता परीक्षण पूरा किया। मुख्य सामग्री: हायल्यूरोनिक एसिड, नियासिनामाइड, पैन्थेनॉल, सेंटेला एशियाटिका कॉम्प्लेक्स और बीटेन।',
        'Teen लाइन का घना बबल फोम क्लींजर, पोर और एक्ने-प्रोन त्वचा केयर के लिए AHA, BHA और PHA कॉम्प्लेक्स पर आधारित, हल्के अम्लीय pH 4.5 पर संतुलित। कंपनी के अनुसार, इसने औसत 0.00% प्रतिक्रिया दर के साथ मानव त्वचा प्राथमिक उत्तेजना परीक्षण पूरा किया। मुख्य सामग्री: सेंटेला एशियाटिका कॉम्प्लेक्स, विटामिन C और विटामिन B12/E।',
        'Derma लाइन का फर्स्ट-एसेंस बूस्टर, एलो लीफ वॉटर, सात-हायल्यूरोनिक-एसिड कॉम्प्लेक्स, PDRN और एक्सोसोम सामग्री पर आधारित। कंपनी की क्लिनिकल टेस्टिंग सामग्री के अनुसार, एक बार उपयोग से त्वचा बैरियर स्ट्रेंथ में 8.2% सुधार, मॉइस्चराइजिंग में 159% सुधार और दिखाई देने वाली डेड स्किन सेल्स में 37% कमी दर्ज की गई।',
        'Derma लाइन की फिनिशिंग क्रीम, बूस्टर के समान एलो लीफ वॉटर, हायल्यूरोनिक एसिड, PDRN और एक्सोसोम बेस के साथ, क्वींसलैंड नट ऑयल जोड़ा गया। कंपनी की क्लिनिकल टेस्टिंग सामग्री के अनुसार, एक बार उपयोग से त्वचा बैरियर स्ट्रेंथ में 9.7% सुधार, मॉइस्चराइजिंग में 128% सुधार और दिखाई देने वाली डेड स्किन सेल्स में 45% कमी दर्ज की गई।',
    ],
    tech=[
        {'name': 'COSMAX Inc.', 'note': 'Feelody Teen लाइन के लिए निर्माण साझेदार — सनस्क्रीन, एम्पुल और फोम क्लींजर। कंपनी के अनुसार, उत्पादन CGMP, ISO 9001, ISO 14001 और ISO 22716 मानकों का पालन करता है।'},
        {'name': 'Ire Cosmetics', 'note': 'Feelody Derma लाइन के लिए निर्माण साझेदार — स्किन बूस्टर और बैरियर क्रीम। कंपनी के अनुसार, उत्पादन ISO 22716 मानक का पालन करता है।'},
    ],
    formats=['सन एसेंस', 'एम्पुल', 'फोम क्लींजर', 'स्किन बूस्टर एसेंस', 'बैरियर क्रीम'],
    export_note='कंपनी के अनुसार, Feelody वर्तमान में 15 देशों में निर्यात करती है और इंडोनेशिया, ब्राज़ील तथा स्पेन में उसके एक्सक्लूसिव डिस्ट्रीब्यूशन पार्टनर हैं। कोरिया में, ब्रांड दस से अधिक ऑफ़लाइन कॉस्मेटिक्स स्टोर, लगभग 100 ड्रगस्टोर और इंचियोन एयरपोर्ट ड्यूटी-फ्री स्टोर के ज़रिए बिकता है; सूचीबद्ध अंतरराष्ट्रीय रिटेल पार्टनर्स में जापान में Don Quijote, मलेशिया में Lalaport Department Store और Curve Shopping Mall, तथा थाईलैंड और म्यांमार में Dookn Dookn शामिल हैं। कंपनी विशेष रूप से ब्राज़ील के अलावा लैटिन अमेरिका, उत्तरी अमेरिका, स्पेन के अलावा यूरोप और CIS में रुचि रखती है — ये वे बाज़ार हैं जिनके लिए Teranova परिचय समन्वित करती है।',
    consent_note='सामग्री, उत्पाद विवरण और छवियाँ Feelody द्वारा प्रदान की गई हैं और कंपनी की सहमति से प्रकाशित हैं (अक्टूबर–नवंबर 2026 की पत्राचार)। FOB मूल्य सूची और अन्य वाणिज्यिक शर्तें कंपनी के अनुरोध पर गोपनीय रहती हैं। Teranova सौदे का समन्वय और सहयोग करती है।',
    terms=[
        {'label': 'सहयोग प्रारूप', 'value': 'Feelody ब्रांड के तहत तैयार उत्पादों की थोक आपूर्ति।'},
        {'label': 'एक्सक्लूसिव बाज़ार', 'value': 'कंपनी के अनुसार, इंडोनेशिया, ब्राज़ील और स्पेन में पहले से ही एक्सक्लूसिव डिस्ट्रीब्यूशन पार्टनर हैं।'},
        {'label': 'कीमतें और न्यूनतम ऑर्डर', 'value': 'अनुरोध पर — कंपनी की लिखित सहमति के बिना प्रकाशित नहीं किया जाता।'},
        {'label': 'यह कैसे काम करता है', 'value': 'अनुरोध → Teranova समीक्षा और समन्वय → बातचीत और नमूने → लॉजिस्टिक्स, सीमा शुल्क और भुगतान, Teranova द्वारा समन्वित।'},
    ],
    catalog_notes=[
        'ब्राइटनिंग और मॉइस्चराइजिंग केयर के साथ SPF50+ PA++++ सन एसेंस; 50 मिली।',
        'मॉइस्चराइजिंग, ब्राइटनिंग और पोर केयर के लिए 5-इन-1 कैल्मिंग एम्पुल; 50 मिली।',
        'एक्ने-प्रोन और पोर केयर के लिए AHA/BHA/PHA बबल फोम क्लींजर; 150 मिली।',
        'PDRN और एक्सोसोम सामग्री के साथ स्किन-बैरियर बूस्टर एसेंस; 150 मिली।',
        'PDRN, एक्सोसोम और क्वींसलैंड नट ऑयल के साथ बैरियर क्रीम; 50 मिली।',
    ],
    seo_title='Feelody — कोरियाई Teen और Derma स्किनकेयर · Teranova',
    seo_desc='Feelody दो लाइनों वाला एक कोरियाई स्किनकेयर ब्रांड है: Teen (सनस्क्रीन, एम्पुल, फोम क्लींजर) और Derma (स्किन बूस्टर, बैरियर क्रीम)। निर्माता COSMAX Inc. और Ire Cosmetics।',
    ui={
        'profile_sup': 'सप्लायर प्रोफ़ाइल', 'about_h': 'कंपनी के बारे में', 'for_whom': 'किसके लिए उपयुक्त:',
        'lines_h': 'उत्पाद', 'catalog_h': 'उत्पाद कैटलॉग', 'tech_h': 'निर्माण साझेदार',
        'products_h': 'उत्पाद', 'products_note': 'रोज़ाना रूटीन के लिए दो लाइनें, पाँच ऑल-इन-वन स्किनकेयर उत्पाद।',
        'formats_h': 'उत्पाद प्रारूप', 'export_h': 'निर्यात और बाज़ार', 'terms_h': 'सहयोग की शर्तें',
        'cta_h': 'इस निर्माता में रुचि है?',
        'cta_d': 'संपर्क करें — Teranova पहले संपर्क से लेकर डिलीवरी तक बातचीत, सत्यापन और सौदे में सहयोग की व्यवस्था करती है।',
        'cta_btn': 'Teranova के माध्यम से संपर्क करें', 'more': 'प्रोफ़ाइल खोलें →', 'verified_suppliers': 'सत्यापित सप्लायर',
        'certs_h': 'बाज़ार के अनुसार पंजीकरण और मानक',
        'certs_note': 'विशिष्ट निर्यात बाज़ारों के लिए कंपनी द्वारा घोषित; कवरेज उत्पाद के अनुसार भिन्न होती है (उत्पाद पृष्ठ देखें)। सहायक दस्तावेज़ों की प्रतियाँ सौदे के चरण में प्रदान की जाती हैं।',
    },
    products=[
        {'tagline': 'SPF50+ PA++++ सन एसेंस जो ब्राइटनिंग और मॉइस्चराइजिंग केयर भी करता है',
         'about': [
             'Day Supreme Multi Essence Sunscreen, Feelody Teen लाइन का 50 मिली का SPF50+ PA++++ सन एसेंस है, जो सुबह के एक चरण में कई उत्पादों की जगह लेने के लिए बनाया गया है। कंपनी के अनुसार, सामान्य सनस्क्रीन फॉर्मूलेशन के बजाय इसमें आसानी से फैलने वाला एसेंस टेक्सचर अपनाया गया है, जिसमें कोई सफेद निशान या चिपचिपाहट नहीं होती, और यह लिंग भेद के बिना किशोरों से लेकर वयस्कों तक के लिए उपयुक्त है।',
             'मुख्य सामग्री में मॉइस्चराइजिंग के लिए हायल्यूरोनिक एसिड और जोजोबा ऑयल, ब्राइटनिंग के लिए नियासिनामाइड, और सुखदायक के लिए एलो वेरा और मेलिया अज़ादिराक्टा अर्क शामिल हैं। कंपनी के अनुसार, इस उत्पाद ने मानव त्वचा प्राथमिक जलन परीक्षण और संवेदनशील-त्वचा उपयुक्तता परीक्षण दोनों पूरे किए, औसत प्रतिक्रिया दर 0.00% के साथ, और इसका निर्माण COSMAX Inc. द्वारा CGMP, ISO 9001, ISO 14001 और ISO 22716 मानकों पर किया जाता है।',
         ],
         'seoTitle': 'Day Supreme Multi Essence Sunscreen · Feelody · Teranova',
         'seoDesc': 'Feelody Teen लाइन का SPF50+ PA++++ सन एसेंस: एक सुबह के चरण में ब्राइटनिंग और मॉइस्चराइजिंग केयर। 50 मिली।'},
        {'tagline': 'मॉइस्चराइजिंग, कैल्मिंग और पोर केयर के लिए 5-इन-1 नाइट एम्पुल',
         'about': [
             'Night Flex Calming Ampoule, Feelody Teen लाइन का 50 मिली का शाम का एम्पुल है, जो कंपनी के विवरण के अनुसार टोनर, लोशन और एसेंस की जगह लेता है और मॉइस्चराइजिंग, कैल्मिंग, ब्राइटनिंग, पोर केयर और त्वचा-बैरियर सपोर्ट को एक उत्पाद में एकत्रित करता है।',
             'मुख्य सामग्री में मॉइस्चराइजिंग और बैरियर सपोर्ट के लिए हायल्यूरोनिक एसिड और पैन्थेनॉल, ब्राइटनिंग के लिए नियासिनामाइड, कैल्मिंग के लिए सेंटेला एशियाटिका कॉम्प्लेक्स और बीटेन, तथा पोर केयर के लिए सक्सिनिक एसिड और ग्लूकोनोलैक्टोन शामिल हैं। कंपनी के अनुसार, इस उत्पाद ने मानव त्वचा प्राथमिक जलन परीक्षण और संवेदनशील-त्वचा उपयुक्तता परीक्षण दोनों पूरे किए, औसत प्रतिक्रिया दर 0.00% के साथ, और इसका निर्माण COSMAX Inc. द्वारा CGMP, ISO 9001, ISO 14001 और ISO 22716 मानकों पर किया जाता है।',
         ],
         'seoTitle': 'Night Flex Calming Ampoule · Feelody · Teranova',
         'seoDesc': 'Feelody Teen लाइन का 5-इन-1 नाइट एम्पुल: एक चरण में मॉइस्चराइजिंग, कैल्मिंग, ब्राइटनिंग और पोर केयर। 50 मिली।'},
        {'tagline': 'पोर और एक्ने-प्रोन त्वचा केयर के लिए AHA/BHA/PHA बबल फोम क्लींजर',
         'about': [
             'Acne Wonder Bubble Foam Cleansing, Feelody Teen लाइन को पूरा करता है: 150 मिली का घना बबल फोम क्लींजर, पोर, सीबम और डेड स्किन सेल्स की गहरी सफाई के लिए AHA, BHA और PHA कॉम्प्लेक्स पर आधारित। कंपनी के अनुसार, इसे त्वचा के प्राकृतिक तेल-पानी संतुलन को ध्यान में रखते हुए हल्के अम्लीय pH 4.5 पर संतुलित किया गया है और धोने के बाद नमी का एहसास छोड़ता है।',
             'मुख्य सुखदायक और पुनर्स्थापना सामग्री में सेंटेला एशियाटिका कॉम्प्लेक्स, विटामिन C और विटामिन B12/E शामिल हैं। कंपनी के अनुसार, इस उत्पाद ने औसत 0.00% प्रतिक्रिया दर के साथ मानव त्वचा प्राथमिक उत्तेजना परीक्षण पूरा किया, और इसका निर्माण COSMAX Inc. द्वारा CGMP, ISO 9001, ISO 14001 और ISO 22716 मानकों पर किया जाता है।',
         ],
         'seoTitle': 'Acne Wonder Bubble Foam Cleansing · Feelody · Teranova',
         'seoDesc': 'Feelody Teen लाइन का AHA/BHA/PHA बबल फोम क्लींजर: एक्ने-प्रोन और पोर केयर के लिए। 150 मिली, pH 4.5।'},
        {'tagline': 'PDRN और एक्सोसोम सामग्री पर केंद्रित फर्स्ट-एसेंस बूस्टर',
         'about': [
             'Vital Surge Skin Booster, Feelody Derma लाइन की शुरुआत करता है: 150 मिली का फर्स्ट एसेंस, जो क्लींजिंग के तुरंत बाद लगाया जाता है, एलो लीफ वॉटर, सात-हायल्यूरोनिक-एसिड कॉम्प्लेक्स, PDRN, एक्सोसोम सामग्री, सेंटेला एशियाटिका अर्क और बर्गमोट ऑयल पर आधारित।',
             'कंपनी की क्लिनिकल टेस्टिंग सामग्री के अनुसार, एक बार उपयोग से त्वचा बैरियर स्ट्रेंथ में 8.2% सुधार, मॉइस्चराइजिंग में 159% सुधार और दिखाई देने वाली डेड स्किन सेल्स में 37% कमी दर्ज की गई। इस उत्पाद ने औसत 0.00% प्रतिक्रिया दर के साथ मानव त्वचा प्राथमिक उत्तेजना परीक्षण पूरा किया, और इसका निर्माण Ire Cosmetics द्वारा ISO 22716 मानक पर किया जाता है।',
         ],
         'seoTitle': 'Vital Surge Skin Booster · Feelody · Teranova',
         'seoDesc': 'PDRN और एक्सोसोम सामग्री के साथ Feelody Derma लाइन का फर्स्ट-एसेंस बूस्टर। 150 मिली।'},
        {'tagline': 'PDRN, एक्सोसोम और क्वींसलैंड नट ऑयल के साथ फिनिशिंग बैरियर क्रीम',
         'about': [
             'All Day Shield Barrier Cream, Feelody Derma लाइन को पूरा करता है: 50 मिली की फिनिशिंग क्रीम, जो बूस्टर के समान एलो लीफ वॉटर, सात-हायल्यूरोनिक-एसिड कॉम्प्लेक्स, PDRN, एक्सोसोम सामग्री और सेंटेला एशियाटिका अर्क बेस साझा करती है, जिसमें क्रीम चरण के लिए क्वींसलैंड नट ऑयल और बर्गमोट ऑयल जोड़ा गया है।',
             'कंपनी की क्लिनिकल टेस्टिंग सामग्री के अनुसार, एक बार उपयोग से त्वचा बैरियर स्ट्रेंथ में 9.7% सुधार, मॉइस्चराइजिंग में 128% सुधार और दिखाई देने वाली डेड स्किन सेल्स में 45% कमी दर्ज की गई। इस उत्पाद ने औसत 0.00% प्रतिक्रिया दर के साथ मानव त्वचा प्राथमिक उत्तेजना परीक्षण पूरा किया, और इसका निर्माण Ire Cosmetics द्वारा ISO 22716 मानक पर किया जाता है।',
         ],
         'seoTitle': 'All Day Shield Barrier Cream · Feelody · Teranova',
         'seoDesc': 'PDRN, एक्सोसोम और क्वींसलैंड नट ऑयल के साथ Feelody Derma लाइन की फिनिशिंग बैरियर क्रीम। 50 मिली।'},
    ])


PRODUCT_IMGS = {
    'day-supreme': '/img/suppliers/feelody/day-supreme.webp',
    'night-flex': '/img/suppliers/feelody/night-flex.webp',
    'acne-wonder': '/img/suppliers/feelody/acne-wonder.webp',
    'vital-surge': '/img/suppliers/feelody/vital-surge.webp',
    'all-day-shield': '/img/suppliers/feelody/all-day-shield.webp',
}
PRODUCT_VOLUMES = ['50 ml', '50 ml', '150 ml', '150 ml', '50 ml']
LINE_NAME_BY_LANG = {
    'ru': 'Feelody', 'en': 'Feelody', 'ko': 'Feelody', 'zh': 'Feelody', 'ja': 'Feelody', 'he': 'Feelody', 'hi': 'Feelody',
}


def write_outputs():
    os.makedirs(OUT, exist_ok=True)
    langs = list(LANGS.keys())
    # 1) feelody.<lang>.json — {content, ui} for the main supplier profile
    for lang, data in LANGS.items():
        content = dict(data['content'])
        path = os.path.join(OUT, f'feelody.{lang}.json')
        with open(path, 'w', encoding='utf-8') as f:
            json.dump({'content': content, 'ui': data['ui']}, f, ensure_ascii=False, indent=2)
            f.write('\n')
        print('wrote', path)

    # 2) feelody.catalog.json — flat line/items list for the profile's "Каталог продукции" block
    catalog = [{
        'line': 'Feelody',
        'items': [
            {'name': PRODUCT_NAMES[i], 'img': PRODUCT_IMGS[PRODUCT_SLUGS[i]], 'volume': PRODUCT_VOLUMES[i], 'certs': []}
            for i in range(5)
        ],
    }]
    with open(os.path.join(OUT, 'feelody.catalog.json'), 'w', encoding='utf-8') as f:
        json.dump(catalog, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print('wrote', os.path.join(OUT, 'feelody.catalog.json'))

    # 3) feelody.lines.json — one dedicated SEO line page per product
    lines = []
    for i, slug in enumerate(PRODUCT_SLUGS):
        i18n = {}
        for lang, data in LANGS.items():
            p = data['products'][i]
            i18n[lang] = {
                'seoTitle': p['seoTitle'],
                'seoDesc': p['seoDesc'],
                'tagline': p['tagline'],
                'about': p['about'],
                'itemNotes': [data['content']['catalog_notes'][i]],
            }
        lines.append({
            'slug': slug,
            'supplierSlug': 'feelody',
            'category': 'cosmetics',
            'lineName': PRODUCT_NAMES[i],
            'items': [{'name': PRODUCT_NAMES[i], 'img': PRODUCT_IMGS[slug], 'volume': PRODUCT_VOLUMES[i], 'certs': []}],
            'i18n': i18n,
        })
    with open(os.path.join(OUT, 'feelody.lines.json'), 'w', encoding='utf-8') as f:
        json.dump(lines, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print('wrote', os.path.join(OUT, 'feelody.lines.json'))


if __name__ == '__main__':
    write_outputs()
    print('Languages built:', list(LANGS.keys()))
