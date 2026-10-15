# T-20261015-019 — опись контента для he и hi вне UI

Дата: 2026-10-15. Исполнитель описи: Codex, подзадача content_audit. Источник: рабочая копия .worktrees/codex-T-20261015-019-he-hi-locales. Это снимок до миграции контента; параллельные изменения реестра языков и UI не учитываются как переведённый контент.

Проверены исходники src (Astro/TS/JSON), потребители данных и генераторы документов. В рамках описи сеть, сборка приложения, отправка форм, изменения приложения и PDF не выполнялись; создан только этот документ. Отчёт не подтверждает готовность he/hi или качество будущего перевода.

После завершения снимка по отдельному поручению владельца задачи создан src/data/solar-care-he-hi.ts с solarHe/solarHi: по 86 строковых значений, точный набор путей и размеров массивов относительно ru, без пустых строк, кириллицы и случайных управляющих символов. Выполнен отдельный редакторский проход. Подключение в solar-care.ts, проверка носителем языка и браузерная проверка оставлены владельцу общей задачи. Таблицы ниже сохраняют исходное состояние до этой миграции.

## Проверенный объём

Количество строк — число строковых листьев русского runtime-объекта, включая названия, цифры в строках и служебные строковые значения; это верхняя оценка единиц обработки, не число обязательных переводов и не число уникальных фраз.

| Слой | Единиц | Строк RU | Наличие he/hi на момент проверки |
| --- | ---: | ---: | --- |
| Профили suppliers | 41 | 3 608 | 0 / 41 в каждом языке |
| Страницы линеек linePages | 45 | 399 | 0 / 45 в каждом языке |
| Статьи posts | 123 | 2 284 | 0 / 123 в каждом языке |
| Раздел solarCopy | 1 | 86 | отсутствуют оба объекта |
| Всего этих четырёх слоёв | 210 | 6 377 | 12 754 строковых позиций для двух языков до исключения нейтральных значений |

Каталоги дополнительно содержат 161 группу и 763 позиции. Эти записи не входят в перечисленные 6 377 строк, кроме отдельных локализованных catalog_notes. Количество страниц нельзя складывать с количеством файлов: один JSON линий содержит несколько страниц, а блог хранится в одном JSON.

## Профили поставщиков

Источники: src/data/suppliers.ts; src/data/suppliers-i18n/<slug>.<lang>.json. Типы SupplierContent и SupplierUI находятся в suppliers.ts:557 и :526; функция mk (:937) объединяет JSON {content, ui}.

В папке 578 JSON: 449 файлов <slug>.<lang>.json (39 ru и по 41 на каждый из десяти остальных языков), 66 <slug>.content.<lang>.json (6 × 11), 40 catalog, 12 lines и 11 price. he/hi файлов на момент проверки нет.

Четыре действующих русских профиля заданы прямо в suppliers.ts: santeRu (:643), dreamcosRu (:747), dongdongguriRu (:810), ckRegeonRu (:872). Именно они подключены к ru в runtime. Для dongdonggurimoo и ck-regeon существуют также ru JSON, но их наличие не делает их действующим эталоном. При переводе извлекать supplier.i18n.ru из действующего экспорта, а не выбирать первый похожий файл.

66 файлов *.content.* относятся к agerin, artface, cayclly, oanic, veo-biotech, whamisa. Прямых импортов этих файлов в src не найдено. Это отдельный, сейчас не подключённый слой: перевод только этих файлов не изменит страницу. Перед синхронизацией определить их назначение и не считать их дополнительными 66 профилями.

Для каждого профиля нужны: tagline, descriptor, origin; about[], facts[], channels[]; lines[].name/note; tech[].name/note; formats[]; exportNote, consentNote, seoTitle, seoDesc; terms[].label/value; полный ui. Обязательные поля ui: profile_sup, about_h, for_whom, lines_h, catalog_h, tech_h, products_h, products_note, formats_h, export_h, cta_h, cta_d, cta_btn, more, verified_suppliers. Дополнительные ui: tech_note, terms_h, download_btn, price_btn, pres_btn, terms_disc, certs_h/certs_note, gallery_h/gallery_note, video_h/video_note.

Особые поля, которые нельзя потерять при переносе:

- catalog_notes присутствует в 31 профиле; порядок совпадает с плоским порядком товаров всего каталога. Не сортировать и не удалять элементы при переводе.
- spotlight: three-days-love, licorne; переводить label/title/text/cta, сохранить post как slug.
- promo: fau, glow-pumpkin; переводить label/text без изменения дат и фактов акции.
- visitNote: hanscos, biopt; отсутствие подменит точную подпись общим текстом о визите.
- terms: все 41 профиль, включая оговорки и условия; нельзя опускать отрицания и ограничения.

supplierContent (suppliers.ts:2513) возвращает p.i18n[lang] ?? p.i18n.ru. Поэтому страница he/hi может собраться с русским текстом, включая SEO, карточки каталога, подписи фото и кнопки. Новые JSON надо явно импортировать и подключить к i18n каждого профиля: автопоиска новых файлов нет.

## Линейки и общий каталог

12 файлов src/data/suppliers-i18n/<slug>.lines.json подключены в linePages (suppliers.ts:2499). Каждый объект требует i18n.he и i18n.hi со всеми seoTitle, seoDesc, tagline, about[], itemNotes[]. Функция linePageContent (:2494) подставляет ru. itemNotes привязан к порядку items; slug/supplierSlug/category и ссылки на изображения сохраняются.

40 *.catalog.json используются как общие данные. В них: 161 line, 763 name, 648 volume, 157 строк certs, 183 actives, 69 строк price, 710 путей img. Каталог целиком не имеет карты языков. SupplierProfile.astro:423 выводит grp.line напрямую; :434–445 — it.name в тексте, alt и lightbox; :451 — actives напрямую. SupplierLinePage использует общие lineName/items.name; HairScalp — name/short/volume из hair-scalp.ts.

Названия компаний, брендов и официальные названия продуктов, INCI, коды моделей/сертификатов, единицы и числа сохранять. Однако в общих полях встречаются описательные английские слова: группы вроде “Firmness & Tone”, actives вроде “16 EWG green-grade botanicals”, “Allergen-free fragrance”; это требует разметки «официальное название / описательная подпись» и отдельной локализованной подписи, а не массового перевода всех 763 имён.

showcaseFacts (suppliers.ts:2589) дополнительно получает source из первого actives, извлекая английское слово из скобок или первые два слова. CatalogGroup показывает source как подпись сырья. Для перевода нужна локализованная display-подпись при сохранении исходного INCI и правил выбора ботанического изображения. Изменять нейтральные имена на месте нельзя: lineShot/lineHref и подбор изображений сопоставляют их с русским эталоном и каталогом.

hair-scalp.ts: 9 поставщиков, 20 товарных/брендовых позиций. UI подборки находится в locales/pages.hairscalp; профильные пояснения и статьи приходят через supplierContent/postContent. Имена/короткие имена товаров и volume общие; отдельно классифицировать описательный short и слова вроде activator в volume.

## Блог и связанные блоки

src/data/blog.json содержит 123 статьи. Тип BlogPostContent — src/data/blog.ts:19; postContent (:61) подставляет ru. Для каждого поста переводятся title, excerpt, seoTitle, seoDesc, sections[].h, sections[].p[]. В статье licorne-hyundai-pangyo-offline-retail также пять photoCaptions и photoCredit. Пустые/отсутствующие заголовки секций не заполнять выдуманным текстом.

slug, category, date, related[], supplier, hero, photos.src/w/h/insertAfter и технические ключи blog-art.json сохраняются. uses[].items — общие названия товаров; проверить описательные фразы отдельно. Русский текст используется для выбора cover в BlogPost/SupplierProfile и не выводится этим механизмом: такой внутренний вызов postContent(post, 'ru') не является языковой утечкой.

Потребители: страницы blog/index и blog/[post], BlogIndex, BlogPost, SupplierProfile «статьи поставщика», HairScalp подборки, BeautyRoute истории и src/data/jsonld.ts. Одного перевода заголовка списка недостаточно: SEO/JSON-LD используют тот же полный пост.

## Solar Care: отдельная карта, форма и макет

src/data/solar-care.ts:70 — solarCopy: Record<Lang, SolarCopy>. В src/pages/[lang]/solar-care/index.astro:16 используется solarCopy[lang] напрямую. При добавлении языка в languages без объекта контента эта ветка получает undefined; это не безопасный fallback.

86 строковых значений на язык распределены по meta.title/description; hero.kicker/title/lead/cta; intro.title/body[]; how.title/steps[].n/title/body; honest.title/body[]; equipment.title/body/captions[]; schemes.title/lead/items[].n/title/body/points[]/price; cases.title/body/captions[]; cta.title/body/button; back, footer; form.

form содержит 25 полей: title, lead, company, contact, email, phone, need, volume, timeline, comment; ph_company/ph_contact/ph_email/ph_phone/ph_need/ph_volume/ph_timeline/ph_comment; submit, note; err_need/err_contact/err_email/err_phone/err_network. Подписи equipment/cases одновременно являются alt и aria-label видео. Сохранить соответствие трём изображениям и трём роликам.

SolarCare.astro — отдельный layout: собственные ogLocale, языковой переключатель, html lang и направление текста; изменения Base не покрывают его автоматически. Достоверность обещаний о результатах, пилоте и совместимости проверять отдельно от структурной полноты перевода.

## Встроенные тексты, доступность, формы

| Источник | Что обнаружено | Действие |
| --- | --- | --- |
| components/home/Hero.astro:16–20 | heroBgAlt только ru/en; остальные получают en | Добавить he/hi или вынести ключ alt в UI |
| components/Header.astro:25,44 | aria-label “Primary”, “Mobile” | Локализованные названия навигации |
| components/pages/BlogPost.astro:82; SupplierProfile.astro:225; SupplierLinePage.astro:28 | aria-label “breadcrumb” | Один общий локализованный ключ |
| SupplierLinePage.astro:79 | Прямой i18n[lang]?.ui.cta_btn и русский литерал «Связаться через Teranova» | Подключить полный профиль и убрать русский литерал из ветки he/hi |
| SupplierLinePage.astro:80–83 | Кнопка прайса показывается только при собственном i18n[lang].ui.price_btn | Проверить не только перевод, но и незаметно исчезающую кнопку |
| BlogPost.astro:34 | Английский запасной “Cosmetics” | Проверить наличие categories.groups cosmetics; заменить необнаруживаемую подстановку локализованным значением |
| SupplierProfile.astro:637 | Кнопка закрытия lightbox имеет aria-label “×” | Использовать уже существующий common.close |
| pages/404.astro | Оболочка рендерится ru; скрипт меняет только notice/title/body/back и html.lang | Для he также dir; отдельно решить перевод шапки/подвала/метаданных 404, которые этим скриптом не меняются |

Остальные найденные alt/aria-label в home/AboutHome, Categories, About, VerifyPage, Header menu/close, carousel, Globe и т. п. используют UI, контент профиля/поста или сохраняемые официальные имена. Пустые alt у декоративных изображений не являются отсутствующими переводами. “Teranova Group”, адрес почты и placeholder https:// сохраняются.

Обычные формы OnDemand, Suppliers, Tenders используют UI-строки и data-msg-*; leadForm.ts читает сообщения из dataset, не содержит своих пользовательских переводов. Проверить наличие err_required и остальных сообщений в UI, передачу lang, локализованный data-thanks и валидацию на обоих языках без отправки. SolarCareForm использует отдельный form из solarCopy. Благодаря novalidate браузер не должен подменять заданные ошибки системным языком. Страницы thanks используют UI, отдельного источника текста не найдено.

## Документы, которые видит посетитель

У 40 профилей termsFile, у 40 presFile, у 8 priceFile; у artface этих карт нет. В каждом существующем runtime-словаре документов отсутствуют he/hi. Это 88 типов документов, потенциально 176 новых файлов для двух языков, если требуется тот же охват. В public/docs на момент чтения 973 файла; число включает материалы вне этих 88 runtime-карт и не является числом обязательных переводов.

SupplierProfile.astro:104–106 подставляет ru для terms/price/pres; SupplierLinePage.astro:22 делает это для price. Даже при переводе кнопки ссылка продолжит открывать русский PDF. Нужны переведённые PDF и явные карты he/hi либо видимое указание языка документа с согласованным охватом; нельзя утверждать, что документы переведены, только по названию кнопки.

scripts/gen-supplier-pdfs.mjs имеет собственный ALL_LANGS (:34), PRICE_H (:507), REQ и другие языковые подписи, функции termsData/presData, собственный стек FONT (:539), шаблоны с physical text-align. Включить he/hi в генератор, его надписи и рендерер; проверить реальные буквы и направление в PDF. Только добавление языка в src/i18n не меняет генератор. 11 *.price.json — исходные нейтральные цены/товары для генератора, не локализованные страницы; не менять цифры, условия и опубликованный набор прайсов ради добавления языка.

Существуют дополнительные генераторы scripts/gen-company-deck.mjs и gen-teranova-deck.mjs с отдельными company-deck-text.mjs/teranova-deck-text.mjs (TEXTS). Проверить реально публикуемые ссылки перед включением этих презентаций в he/hi; генераторы сами не получают словарь сайта. scripts/watermark_pdfs.py также имеет языковую карту ORIGINAL. public/llms.txt — единый статический документ, не версия he/hi; если меняется перечень поддерживаемых языков, синхронизировать утверждение с фактическим охватом.

## Порядок миграции и приёмки

1. Экспортировать действующие ru-объекты 41 профиля, 45 линий, 123 постов и SolarCopy с путями ключей. Разделить пользовательский текст и нейтральные идентификаторы. Зафиксировать исходные хеши: переводы не должны затереть параллельные изменения.
2. Создать 82 профильных JSON с полным content/ui, импортировать их и добавить he/hi во все 41 i18n-карту. Сохранять массивы, optional-поля, ссылки и оговорки; проверить сохранение каждой русской optional-ветки.
3. Добавить he/hi в 45 объектов внутри 12 lines.json и в 123 объекта blog.json. Проверить число секций, абзацев, itemNotes/catalog_notes/photoCaptions и неизменность нейтральных полей. При добавлении локализованных catalog-display полей не менять ключи сопоставления/официальные имена.
4. Добавить два полных SolarCopy и учесть отдельный layout. Исправить перечисленные литералы/aria-label. Довести отдельный контур документов до заявленного охвата.
5. Проверять собственное наличие i18n.he/hi, а не успешный возврат supplierContent/postContent/linePageContent: fallback делает такую проверку ложноположительной. Для каждой строки отчёт должен содержать entity/путь ключа/язык/причину отсутствия. Проверка полного runtime-объекта важнее простого подсчёта JSON.
6. Собрать сайт и проверить все конечные маршруты, meta/OG/JSON-LD, hreflang/canonical, внутренние ссылки, alt/aria-label, ошибки форм, downloads и 404. На he отдельно проверить направление, смешанный латинский текст, email/телефон/числа; на hi — глифы и переносы. Проверка вёрстки и смысловая редактура носителем языка отдельно: этот документ их не заменяет.
7. До завершения этих проверок не присваивать he/hi статус полностью проверенной локали и не считать русский/английский fallback переводом. Публикуемый охват должен совпадать с реально переведёнными маршрутами и документами.

## Метод подсчёта и ограничения

Для runtime-подсчёта esbuild из уже установленного node_modules собирал в памяти экспорты suppliers.ts, blog.ts, solar-care.ts (bundle:true, write:false, platform:node, format:esm); результат импортирован из data URL. Это учитывает inline ru, mk и реально подключённые JSON. Строковые листья считаются рекурсивно: string=1, array/object=сумма детей; остальные значения=0. Исходники не менялись. Файлы/литералы просматривались Python-сканами: rg в окружении не доступен.

Запущен read-only скрипт skill site-i18n-sync/i18n_parity.mjs с этим корнем и --json. Его текущий отчёт проверяет старые локали и находит прежние пропуски UI; сам по себе он не доказывает охват he/hi. Независимый подсчёт выше проверяет he/hi явно. Сборки dist и браузерной проверки в этой подзадаче не было.

При in-memory чтении esbuild сообщил о пяти существующих duplicate lineName в sante.lines.json. Это не исправлялось и не препятствовало инвентаризации; источник имеет дубли ключа, поэтому миграция должна сохранять фактическое значение и отдельно устранить неоднозначность в рамках авторизованной правки.

## Приложение: профили

Все перечисленные профили отсутствуют в he и hi на момент снимка. Колонка строк — полный действующий ru-объект.

| slug | строк RU | группы / товары | документы |
| --- | ---: | ---: | --- |
| sante | 109 | 7 / 37 | termsFile, presFile |
| dreamcos | 109 | 5 / 31 | termsFile, priceFile, presFile |
| oanic | 51 | 1 / 1 | termsFile, presFile |
| artface | 157 | 10 / 77 | — |
| dongdonggurimoo | 119 | 7 / 50 | termsFile, priceFile, presFile |
| ck-regeon | 70 | 2 / 5 | termsFile, presFile |
| jetsglobal | 98 | 5 / 26 | termsFile, priceFile, presFile |
| pineworld | 83 | 5 / 10 | termsFile, priceFile, presFile |
| cayclly | 100 | 4 / 12 | termsFile, presFile |
| kift | 77 | 3 / 7 | termsFile, priceFile, presFile |
| icelmedi | 104 | 7 / 31 | termsFile, priceFile, presFile |
| three-days-love | 120 | 5 / 39 | termsFile, priceFile, presFile |
| licorne | 120 | 10 / 29 | termsFile, presFile |
| cubecap | 72 | 1 / 3 | termsFile, presFile |
| doobom | 87 | 6 / 14 | termsFile, presFile |
| cocospack | 100 | 6 / 29 | termsFile, presFile |
| multifit | 87 | 2 / 15 | termsFile, priceFile, presFile |
| hanscos | 86 | 4 / 38 | termsFile, presFile |
| maoom | 83 | 3 / 6 | termsFile, presFile |
| skinroom | 111 | 2 / 12 | termsFile, presFile |
| joycos | 104 | 5 / 34 | termsFile, presFile |
| sunpure | 92 | 5 / 37 | termsFile, presFile |
| biopt | 92 | 4 / 11 | termsFile, presFile |
| loobee | 86 | 2 / 11 | termsFile, presFile |
| slow-lounge | 90 | 4 / 9 | termsFile, presFile |
| aberede | 101 | 4 / 16 | termsFile, presFile |
| aoi | 78 | 1 / 3 | termsFile, presFile |
| agerin | 88 | 1 / 8 | termsFile, presFile |
| fau | 93 | 10 / 64 | termsFile, presFile |
| glow-pumpkin | 79 | 4 / 13 | termsFile, presFile |
| rnh-bio | 83 | 4 / 10 | termsFile, presFile |
| sprx | 88 | 3 / 7 | termsFile, presFile |
| btf | 67 | 1 / 2 | termsFile, presFile |
| desert-free | 62 | 4 / 4 | termsFile, presFile |
| dr-pelo | 56 | 1 / 3 | termsFile, presFile |
| arming | 64 | 2 / 10 | termsFile, presFile |
| whamisa | 116 | 7 / 36 | termsFile, presFile |
| veo-biotech | 62 | 2 / 6 | termsFile, presFile |
| themaqueen | 54 | 0 / 0 | termsFile, presFile |
| vegan-nature | 54 | 1 / 3 | termsFile, presFile |
| chaewun | 56 | 1 / 4 | termsFile, presFile |

## Приложение: файлы линий

| файл | страницы | строк RU |
| --- | ---: | ---: |
| src/data/suppliers-i18n/oanic.lines.json | 1 | 8 |
| src/data/suppliers-i18n/sante.lines.json | 5 | 59 |
| src/data/suppliers-i18n/dongdonggurimoo.lines.json | 7 | 85 |
| src/data/suppliers-i18n/pineworld.lines.json | 5 | 35 |
| src/data/suppliers-i18n/dreamcos.lines.json | 5 | 56 |
| src/data/suppliers-i18n/jetsglobal.lines.json | 5 | 51 |
| src/data/suppliers-i18n/kift.lines.json | 3 | 22 |
| src/data/suppliers-i18n/ck-regeon.lines.json | 2 | 15 |
| src/data/suppliers-i18n/btf.lines.json | 1 | 13 |
| src/data/suppliers-i18n/desert-free.lines.json | 4 | 20 |
| src/data/suppliers-i18n/vegan-nature.lines.json | 3 | 15 |
| src/data/suppliers-i18n/chaewun.lines.json | 4 | 20 |

## Приложение: статьи

Все находятся в src/data/blog.json; собственных he/hi нет. Таблица позволяет дробить перевод и проверять охват без потери статьи.

| slug | строк RU |
| --- | ---: |
| korean-cosmetics-certifications | 20 |
| oem-odm-korea-guide | 17 |
| why-korea-kbeauty | 14 |
| how-teranova-verifies-suppliers | 14 |
| azulene-soother-line | 17 |
| artemisia-aka-line | 17 |
| collagen-leader-line | 14 |
| hyalquad-core-line | 14 |
| sensitive-skin-care | 17 |
| oily-problem-skin-care | 17 |
| anti-age-hydration | 17 |
| soothing-ingredients-kbeauty | 17 |
| pha-lha-gentle-acids | 17 |
| hyaluronic-vs-collagen | 17 |
| salmon-lab-pdrn | 19 |
| duft-doft-perfumed-care | 19 |
| lovelycc-cc-cream-genz | 19 |
| rudia-2026-relaunch | 22 |
| rudia-active-ingredients-2026 | 17 |
| dreamcos-oem-odm-group | 22 |
| korean-sheet-masks-wholesale | 16 |
| korean-scalp-care-category | 19 |
| korean-makeup-suncare-wholesale | 18 |
| wnt-cxxc5-scalp-science | 18 |
| heribon-four-step-routine | 16 |
| professional-scalp-boosters | 18 |
| jets-plant-placenta-skincare | 19 |
| jets-professional-aesthetic-ampoules | 18 |
| jets-oem-odm-brand-owner | 18 |
| raviel-brightening-pigmentation-care | 20 |
| raviel-bakuchiol-retinol-alternative | 20 |
| raviel-biome-hyaluronic-hydration | 20 |
| kift-all-in-one-skincare-concept | 20 |
| kift-bubble-mask-overnight-care | 19 |
| kift-clay-cleansing-bar-face-body | 19 |
| icelmedi-modeling-masks-ampoules-clinics | 20 |
| icelmedi-cica-clear-hydrating-soothing-recovery | 20 |
| icelmedi-kerason-prime-device-based-care | 20 |
| tdl-spicus-exomere-topical-postcare | 20 |
| tdl-return10-peptide-recovery-lines | 20 |
| tdl-cosmeceutical-assortment-brand-lines | 20 |
| licorne-vegan-skincare-sensitive-skin | 20 |
| licorne-home-aesthetic-routines | 20 |
| licorne-pdrn-recovery-brightening | 20 |
| licorne-hyundai-pangyo-offline-retail | 26 |
| cocaps-single-dose-capsule-serum | 19 |
| cocaps-three-formats-retail-channels | 17 |
| cubecap-encapsulation-machines-oem | 16 |
| doobom-wild-soy-water-base | 16 |
| doobom-exosomes-pdrn-spicules-delivery | 16 |
| doobom-salon-programs-devices | 16 |
| cocospack-full-cycle-packaging | 16 |
| cocospack-functional-packaging-patents | 16 |
| cocospack-eco-packaging-pcr-pla | 16 |
| multifit-dirty-panels-lost-output | 16 |
| multifit-robot-selection-mr-series | 16 |
| multifit-mulr-brushes-manual-cleaning | 16 |
| tdl-exomere-g-cushion-postcare | 22 |
| exosomes-in-skincare-what-to-ask-a-supplier | 17 |
| sparassis-crispa-beta-glucan-in-skincare | 17 |
| korean-cosmetics-entry-mexico-south-america | 17 |
| acne-prone-skin-korean-derma-line | 17 |
| pdrn-in-daily-skincare-vs-clinic | 16 |
| barrier-care-panthenol-teca-ceramides | 16 |
| sheet-masks-for-retail-what-buyers-check | 17 |
| ready-korean-brand-or-private-label | 17 |
| wearable-beauty-carried-outside-the-bag | 19 |
| hand-and-body-care-in-retail-what-buyers-check | 20 |
| spf-in-hand-and-lip-care-what-to-clarify | 18 |
| buying-from-a-young-brand-risk-and-upside | 19 |
| irritation-test-report-how-to-read-it | 17 |
| formulation-patent-what-it-means-for-a-buyer | 19 |
| vegan-claim-in-cosmetics-what-buyers-ask-for | 18 |
| glabridin-vs-licorice-extract-what-to-specify | 17 |
| certified-exporter-status-what-it-gives-a-buyer | 18 |
| bakuchiol-what-to-specify-when-buying | 18 |
| centella-derivatives-which-one-to-specify | 17 |
| aoi-stated-concentrations-how-to-read | 20 |
| aoi-farm-sourcing-what-it-gives-a-buyer | 20 |
| pharmacy-shelf-as-a-signal-for-buyers | 20 |
| black-ginseng-nine-steamings-what-changes | 20 |
| bee-derived-ingredients-what-to-verify | 23 |
| one-house-many-brands-what-a-buyer-gains | 21 |
| cpnp-notification-what-it-proves | 20 |
| medicosmetic-what-the-word-covers | 20 |
| nad-in-topical-skincare-what-to-ask | 19 |
| obm-when-the-factory-builds-your-brand | 22 |
| ninety-days-to-a-brand-what-actually-fits | 23 |
| first-run-moq-what-it-really-buys | 24 |
| gift-sets-economics-for-retail | 24 |
| packaging-made-in-house-what-it-changes | 22 |
| a-factorys-formula-library-what-it-gives-you | 23 |
| professional-packs-what-changes-for-a-buyer | 21 |
| mts-ampoules-who-may-use-them | 21 |
| pumpkin-enzymes-in-peels-what-they-do | 21 |
| seasonal-promotions-and-holiday-calendar | 24 |
| acid-peel-in-powder-form-why-it-matters | 22 |
| functional-cosmetics-in-korea-the-three-claims | 22 |
| one-factory-two-shelves-professional-and-retail | 22 |
| ptd-dbm-peptide-what-a-buyer-should-know | 17 |
| ky19382-in-home-scalp-care | 17 |
| caffeine-in-hair-tonics-what-to-ask | 17 |
| azulene-for-sensitive-scalp | 17 |
| rosemary-in-scalp-formulas-what-to-specify | 20 |
| tea-tree-and-peppermint-in-scalp-care | 20 |
| centella-and-asiaticoside-for-scalp | 17 |
| karanja-and-neem-in-hair-oils | 17 |
| scalp-scaler-what-is-inside | 17 |
| shampoo-base-what-to-ask-the-factory | 17 |
| leave-in-vs-rinse-off-where-actives-work | 17 |
| stick-format-in-scalp-care | 17 |
| plant-and-milk-exosomes-what-to-ask | 17 |
| freeze-dried-two-part-format-what-it-costs | 15 |
| protein-on-an-activator-label | 14 |
| diet-supplements-what-to-ask-a-korean-maker | 17 |
| health-functional-food-vs-cosmetics-import | 14 |
| stick-format-in-weight-management | 14 |
| brewers-yeast-for-scalp-what-to-ask | 25 |
| vegan-certification-which-body-matters | 22 |
| liposome-delivery-in-cosmetics | 24 |
| patent-in-cosmetics-who-owns-it | 20 |
| overnight-skin-repair-what-to-verify | 17 |
| human-application-test-how-to-read-percentages | 18 |
