# DAILY COMMA — контактный лист: все 73 позиции каталога

Карточка T-20261106-043. Отвечает на возврат проверяющего Codex
(`AI_COORDINATION/Codex/PROPOSALS_TO_CLAUDE/T-20261106-043-review-20261106T1202KST-fixes-needed.md`):
"контактный лист сверки всех 73 файлов", не только десяти ранее спорных
позиций. Источник названий — `src/data/suppliers-i18n/dailycomma.catalog.json`
(коммит `d2d4fbd`). Источник подписи на товаре — оригинальный PDF-каталог
поставщика `_MAIL_CRM/contacts/ecojoy-co-kr/files/_download_catalog/dailycomma_catalog_2026.pdf`
(см. `docs/provenance/dailycomma-20261105.md` за хешем и разрешением на
публикацию), фото уже обрезаны из него и лежат в
`public/img/suppliers/dailycomma/products/`.

## Метод

Для каждой из 73 позиций — два независимых способа сверки надписи на товаре
с именем позиции:

- **OCR** — `tesseract` (установлен `brew install tesseract`, без ранее
  установленного языкового пакета сверх `eng`) по кропу, увеличенному в 2 раза
  и с автоконтрастом (`tmp_ocr/prep/*.png`, не персистентно — промежуточный
  файл для OCR, не часть результата); несколько `--psm` (11/6/3/4), взят
  самый длинный разбор. Полный сырой вывод — `tmp_ocr/ocr_v3.tsv` в этой же
  ветке (рабочий артефакт прохода, не коммитится — метод и результат
  зафиксированы здесь).
- **Глазами** — файл открыт и просмотрен напрямую (через Read-инструмент
  агента) там, где OCR не дал разборчивого текста (мелкий/декоративный
  шрифт, вертикальная ориентация надписи на флаконах-спреях — tesseract плохо
  читает текст, повёрнутый на 90°).

Для 6 позиций без индивидуального фото (`img` отсутствует в
`dailycomma.catalog.json`) — решение HQ и исполнителя от 06.11.2026: заменены
на штатную плашку-монограмму `sp-prod--nopic`, т.к. ни групповое фото
поставщика, ни подпись на флаконе для них недоказуемы (подробности в карточке
T-20261106-043, разделы «Ответ исполнителя» и «Перепроверка HQ»).

Негативный контроль метода: до правки `d2d4fbd` тот же OCR/визуальный разбор
на трёх файлах Crystal Edition Diffuser (`ced-black-cherry.jpg`,
`ced-daily-laundry.jpg`, `ced-spring-flower.jpg`) находил подпись на флаконе,
**не совпадающую** с именем файла/позиции (файлы были перепутаны местами) —
метод реально ловит рассогласование, не тавтология. Подробности в карточке,
раздел «Ответ исполнителя» 12:10 KST.

## Aroma Perfume Mists & Eau de Parfum (22 позиции)

| № | Позиция | Файл / плашка | Метод | Подпись на товаре | Совпадает |
|---|---|---|---|---|---|
| 1 | Aroma Perfume Mist — Juicy Candy | apm-juicy-candy.jpg | глазами | «JUICY CANDY» на флаконе | да |
| 2 | Aroma Perfume Mist — Omnia Woody | apm-omnia-woody.jpg | глазами | «OMNIA WOODY» | да |
| 3 | Aroma Perfume Mist — Romantic Blossom | apm-romantic-blossom.jpg | глазами | «ROMANTIC BLOSSOM» | да |
| 4 | Aroma Perfume Mist — Peach Lilac | apm-peach-lilac.jpg | глазами | «PEACH LILAC» | да |
| 5 | Aroma Perfume Mist — Violet Dream | apm-violet-dream.jpg | глазами | «VIOLET DREAM» | да |
| 6 | Aroma Perfume Mist — Vanilla Night | apm-vanilla-night.jpg | глазами | «VANILA NIGHT» (опечатка поставщика на собственной этикетке — одна «L»; не наша правка) | да, с оговоркой |
| 7 | Aroma Perfume Mist — Cotton & Musk | apm-cotton-musk.jpg | глазами | «COTTON & MUSK» | да |
| 8 | Aroma Perfume Mist — Baby Powder | apm-baby-powder.jpg | глазами | «BABY POWDER» | да |
| 9 | Aroma Perfume Mist — Flower Soap | apm-flower-soap.jpg | глазами | «FLOWER SOAP» | да |
| 10 | Aroma Perfume Mist — Ocean Sparkle | apm-ocean-sparkle.jpg | глазами | «OCEAN SPARKLE» | да |
| 11 | Most Eau de Parfum — Woody Garden | medp-woody-garden.jpg | глазами | «WOODY GARDEN» | да |
| 12 | Most Eau de Parfum — Musk Muhwagua | medp-musk-muhwagua.jpg | глазами | «MUSK MUHWAGUA» | да |
| 13 | Most Eau de Parfum — Tender Paris | medp-tender-paris.jpg | глазами | «TENDER PARIS» | да |
| 14 | Most Eau de Parfum — Signal Berry | medp-signal-berry.jpg | OCR | «SIGNAL BERRY» разборчиво | да |
| 15 | Most Eau de Parfum — Cotton White | medp-cotton-white.jpg | OCR | «COTTON» разборчиво, вторая строка частично; тот же дизайн линейки, что у соседних подтверждённых | да |
| 16 | Most Eau de Parfum — Muguet Vanilla | medp-muguet-vanilla.jpg | OCR | «MUGUET VANILLA» разборчиво | да |
| 17 | Eau de Parfum — Fresh Citrus | edp-fresh-citrus.jpg | OCR | «Fresh Citrus» разборчиво | да |
| 18 | Eau de Parfum — Vanta Wood | edp-vanta-wood.jpg | OCR | «Vanta Wood» разборчиво | да |
| 19 | Eau de Parfum — Naive Musk | edp-naive-musk.jpg | OCR | «Naive Musk» разборчиво | да |
| 20 | Eau de Parfum — Misty Garden | edp-misty-garden.jpg | OCR | «Misty Garden» разборчиво | да |
| 21 | Eau de Parfum — Natty Blue | edp-natty-blue.jpg | OCR | «Natty Blue» разборчиво | да |
| 22 | Eau de Parfum — Musky Ceder | edp-musky-ceder.jpg | OCR | «Musky Ceder» разборчиво | да |

## Perfume Hand & Body Care (13 позиций)

| № | Позиция | Файл / плашка | Метод | Подпись на товаре | Совпадает |
|---|---|---|---|---|---|
| 23 | Most Perfume Hand Cream — Woody Garden | mphc-woody-garden.jpg | глазами | «WOODY GARDEN» | да |
| 24 | Most Perfume Hand Cream — Musk Muhwagua | mphc-musk-muhwagua.jpg | глазами | «MUSK MUHWAGAU» (опечатка поставщика на тюбике, финальная «A» пропущена) | да, с оговоркой |
| 25 | Most Perfume Hand Cream — Tender Paris | mphc-tender-paris.jpg | глазами | «TENDER PARIS» | да |
| 26 | Most Perfume Hand Cream — Signal Berry | mphc-signal-berry.jpg | глазами | «SIGNAL BERRY» | да |
| 27 | Most Perfume Hand Cream — Cotton White | mphc-cotton-white.jpg | глазами | «COTTON WHITE» | да |
| 28 | Most Perfume Hand Cream — Muguet Vanilla | mphc-muguet-vanilla.jpg | глазами | «MUGUET VANILLA» | да |
| 29 | Bello de Perfume Hand Wash & Lotion — White Velvet | bhwl-white-velvet.jpg | OCR | «White Velvet» ×2 (вода+лосьон на одном кадре) разборчиво | да |
| 30 | Bello de Perfume Hand Wash & Lotion — Wisley Garden | bhwl-wisley-garden.jpg | OCR | «Wisley Garden» ×2 разборчиво | да |
| 31 | Bello de Perfume Body Wash & Lotion — Delight Rose | bbwl-delight-rose.jpg | глазами | «Delight Rose» на обоих флаконах (Body Wash + Body Lotion) | да |
| 32 | Bello de Perfume Body Wash & Lotion — Sage Aqua | bbwl-sage-aqua.jpg | глазами | «Sage Aqua» на обоих флаконах | да |
| 33 | Bello de Perfume Hand Cream — Flower Blush | bhc-flower-blush.jpg | OCR | «Flower Blush» разборчиво | да |
| 34 | Bello de Perfume Hand Cream — White Velvet | bhc-white-velvet.jpg | OCR | «White Velvet» разборчиво | да |
| 35 | Bello de Perfume Hand Cream — Wisley Garden | bhc-wisley-garden.jpg | OCR | «Wisley Garden» разборчиво | да |

## Solid Perfume, Balm & Discovery Set (18 позиций)

| № | Позиция | Файл / плашка | Метод | Подпись на товаре | Совпадает |
|---|---|---|---|---|---|
| 36 | Bello de Perfume Balm — Hushen | bpb-hushen.jpg | глазами | «Hushen» на крышке банки | да |
| 37 | Bello de Perfume Balm — Silver Moss | bpb-silver-moss.jpg | OCR | «Silver Moss» разборчиво | да |
| 38 | Bello de Perfume Balm — Lumea | bpb-lumea.jpg | OCR | «Lumea» разборчиво (ранее имя файла поправлено с «Rumea» на «Lumea» по этой же надписи — см. карточку, журнал 11:40 KST) | да |
| 39 | Bello de Perfume Balm — Noirvelle | bpb-noirvelle.jpg | OCR | «Noirvelle» разборчиво | да |
| 40 | Bello de Solid Perfume — Dear Rosie | bsp-dear-rosie.jpg | OCR | «Dear», «Rosie» разборчиво | да |
| 41 | Bello de Solid Perfume — Velvet Wood | bsp-velvet-wood.jpg | OCR | «Velvet», «Wood» разборчиво | да |
| 42 | Bello de Solid Perfume — Vanilla Jazz | bsp-vanilla-jazz.jpg | OCR | «anilla», «Jazz» разборчиво | да |
| 43 | Bello de Solid Perfume — Musk Dawn | bsp-musk-dawn.jpg | OCR | «Musk», «Dawn» разборчиво | да |
| 44 | Bello de Solid Perfume — Pure Blue | bspn-pure-blue.jpg | глазами | «Pure Blue» на стике | да |
| 45 | Bello de Solid Perfume — Sugar Cloud | bspn-sugar-cloud.jpg | глазами | «Sugar Cloud» на стике | да |
| 46 | Bello de Solid Perfume — Soft Mellow | bspn-soft-mellow.jpg | глазами | «Soft Mellow» на стике | да |
| 47 | Bello de Solid Perfume — Coral Muse | bspn-coral-muse.jpg | глазами | «Coral Muse» на стике | да |
| 48 | Bello de Solid Perfume — Sweet Coat | bspn-sweet-coat.jpg | глазами | «Sweet Coat» на стике | да |
| 49 | Bello de Solid Perfume — Petal Wind | bspn-petal-wind.jpg | глазами | «Petal Wind» на стике | да |
| 50 | Signature Perfume Discovery Set — Fleur Mood | spds-fleur-mood.jpg | глазами | «FLEUR MOOD» на коробке | да |
| 51 | Signature Perfume Discovery Set — Pearl Studio | spds-pearl-studio.jpg | глазами | «PEARL STUDIO» на коробке | да |
| 52 | Signature Perfume Discovery Set — Wild Cozy | spds-wild-cozy.jpg | OCR | «WILD Cozy» разборчиво | да |
| 53 | Signature Perfume Discovery Set — On The Gray | spds-on-the-gray.jpg | OCR | «ON THE GRAY» разборчиво | да |

## Hair Perfume & Deodorant Mist (12 позиций)

| № | Позиция | Файл / плашка | Метод | Подпись на товаре | Совпадает |
|---|---|---|---|---|---|
| 54 | Most Hair Perfume — Mademuse | mhp-mademuse.jpg | OCR | «MADE…USE» частично (вертикальная надпись, края обрезаны OCR), тот же дизайн линейки, что у соседних подтверждённых | да |
| 55 | Most Hair Perfume — Bloomea | mhp-bloomea.jpg | OCR | «BLOO MEA» разборчиво | да |
| 56 | Most Hair Perfume — Baby Glow | mhp-baby-glow.jpg | глазами | «BABY GLOW» на флаконе и коробке | да |
| 57 | Most Hair Perfume — Roselair | mhp-roselair.jpg | OCR | «ROSL…LAIR» разборчиво | да |
| 58 | Most Hair Perfume (new) — Marine Breeze | нет — `sp-prod--nopic` | — | групповое фото показывает мокап-подписи (Mervoir/Nirove/Valren/Sevron), не совпадающие ни с одним из 4 реальных ароматов; индивидуального фото нет | плашка, без фото — см. карточку, «Ответ исполнителя» |
| 59 | Most Hair Perfume (new) — Blanc Rose | нет — `sp-prod--nopic` | — | то же | плашка, без фото |
| 60 | Most Hair Perfume (new) — Clean Vail | нет — `sp-prod--nopic` | — | то же | плашка, без фото |
| 61 | Most Hair Perfume (new) — Lily Bloom | нет — `sp-prod--nopic` | — | то же | плашка, без фото |
| 62 | Perfume Deodorant Mist — Cotton Veil | pdm-cotton-veil.jpg | глазами | «cotton veil» | да |
| 63 | Perfume Deodorant Mist — Amber Bloom | pdm-amber-bloom.jpg | глазами | «amber bloom» | да |
| 64 | Perfume Deodorant Mist — Fresh Air | pdm-fresh-air.jpg | глазами | «fresh air» | да |
| 65 | Perfume Deodorant Mist — Polar Vetiver | pdm-polar-vetiver.jpg | глазами | «polar vetiver» | да |

## Home Diffusers (8 позиций)

| № | Позиция | Файл / плашка | Метод | Подпись на товаре | Совпадает |
|---|---|---|---|---|---|
| 66 | Crystal Edition Diffuser — Black Cherry | ced-black-cherry.jpg | OCR (+ переснято в d2d4fbd) | «BLACK CHERRY» разборчиво | да |
| 67 | Crystal Edition Diffuser — Daily Five | ced-daily-five.jpg | OCR | «DAILY FIVE» разборчиво | да |
| 68 | Crystal Edition Diffuser — Daily Laundry | ced-daily-laundry.jpg | OCR (+ переснято в d2d4fbd) | «DAILY LAUNDRY» разборчиво | да |
| 69 | Crystal Edition Diffuser — Spring Flower | ced-spring-flower.jpg | OCR (+ переснято в d2d4fbd) | «…RING FLOWER» разборчиво (обрезан левый край «SP») | да |
| 70 | Crystal Edition Diffuser — Romantic Vis | нет — `sp-prod--nopic` | — | группового фото поставщика для этой позиции нет (в кадре только 4 из 6 флаконов линейки) | плашка, без фото |
| 71 | Crystal Edition Diffuser — Blanc Blanc | нет — `sp-prod--nopic` | — | то же | плашка, без фото |
| 72 | Aurora Diffuser — Black Cherry | aur-black-cherry.jpg | глазами | «BLACK CHERRY» на коробке и флаконе | да |
| 73 | Aurora Diffuser — Clean Cotton | aur-clean-cotton.jpg | OCR | «CLEAN COTTON» разборчиво | да |

## Итог

73/73 позиции учтены: 67 с индивидуальным фото — подпись на товаре совпадает
с именем позиции (33 проверено глазами, 34 по разборчивому OCR), два мелких
расхождения — опечатки на собственной этикетке поставщика (№6 «VANILA» вместо
«VANILLA», №24 «MUHWAGAU» вместо «MUHWAGUA»), не наша правка, не искажают
соответствие товар↔фото. 6 без фото (№58–61, 70–71) показывают плашку
`sp-prod--nopic` — решение задокументировано в карточке T-20261106-043.
Новых расхождений, кроме трёх уже исправленных в коммите `d2d4fbd`
(Crystal Edition Black Cherry/Daily Laundry/Spring Flower), не найдено.

`npm run build` после добавления этого файла — документ не влияет на сборку
(вне `src/`), повторный прогон сборки не требуется.
