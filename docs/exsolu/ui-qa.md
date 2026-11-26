# EXSOLU — локальная проверка UI, 26.11.2026 19:56 KST

## Продолжение FR/IT/ES, проход после 19:57 KST

В прежней ветке после `1032ef97` переведены три ключа footer.marine_*
для FR/IT/ES (девять строк). Бренд Teranova Marine сохранён.
FR: Nos autres activités / Pièces pour yachts et bateaux.
IT: Le nostre altre attività / Ricambi per yacht e imbarcazioni.
ES: Nuestras otras actividades / Repuestos para yates y embarcaciones.
Все строки перечитаны отдельным редакторским проходом; новых фактов нет.
Graphify не нашёл src/i18n/locales/fr.ts; применение ключей проверено
чтением Footer и поиском в словарях. Изменение общего подвала действует
также на другие страницы этих трёх языков.

После завершения build: check-routes.py PASS для 33 страниц,
check-draft.mjs PASS для 11 языков/22 товаров, validate-images.py PASS
включая три негативных контроля; git diff --check PASS.
Read-back девяти собранных страниц FR/IT/ES подтвердил обе локализованные
подписи и отсутствие английского Parts for yachts and boats.
Build exit 0, postbuild home-locale OK; лог
`/private/tmp/T-20261126-025-ui2-build.log`.
Parity: `/private/tmp/T-20261126-025-ui2-parity.json`.
Прежний общий test:i18n FAIL не устранён и не повторялся ради девяти строк.
Первый запуск проверки маршрутов во время build попал в ещё не созданный dist;
повтор после окончания build прошёл. Это не дефект маршрута.

Далее TR, затем короткие UI/aria-label по всем страницам. Браузерный QA
320/390/600/680/1280 и клики не выполнены; прежнее ограничение запуска
Chromium не устранено. Независимый языковой review и fixes_needed открыты.
Этапы 3–5 не закрыты, родитель T-20261126-023 прочитан: blocked.
Внешних действий, preview/deploy и новой внешней https-ссылки нет.

Продолжена ветка `claude/T-20261126-024-exsolu-manifest` после `00dadab3`.
Только локальные файлы; внешнего preview и новой https-ссылки нет.

## Найдено и исправлено

Сравнение текстовых узлов собранного профиля с EN выявило английскую
подпись подвала `Parts for yachts and boats` в JA/ZH/DE/FR/IT/ES/TR.
Источник — отсутствующие ключи `footer.marine_title`, `marine_name`,
`marine_desc` в частичных словарях, использующих английский fallback.
Ключи используются общим Footer, поэтому исправление также действует на
другие страницы соответствующих языков. Сайт Marine не менялся.

За проход исправлены три языка (ограничение порции карточки):

| Язык | Заголовок | Подпись |
|---|---|---|
| JA | その他の事業 | ヨット・ボート用の部品 |
| ZH | 其他业务 | 游艇和快艇零配件 |
| DE | Ein weiterer Geschäftsbereich | Ersatzteile für Yachten und Motorboote |

`Teranova Marine` сохранено как бренд. Все девять строк отдельно перечитаны
редакторским проходом; новых фактов и обещаний нет. Независимая языковая
проверка ещё нужна. Graphify не нашёл узлы ui.ts и src/i18n/locales/ja.ts;
связи проверены чтением ui.ts, Base, Footer и поиском по словарям.

## Проверки

- `npm run build`: exit 0, 4247 страниц, postbuild home-locale OK.
- `check-routes.py`: PASS, 33 страницы, JSON-LD/canonical/hreflang/sitemap.
- `check-draft.mjs`: PASS, 11 языков по 22 товара.
- `validate-images.py`: PASS, включая три негативных контроля.
- Повторное чтение собранного HTML: в JA/ZH/DE локализованы обе подписи
  подвала; в FR/IT/ES/TR английский fallback подтверждён и остаётся открыт.
- Parity до/после: 647 errors / 28 warnings (прежние ошибки вне EXSOLU);
  JA/ZH/DE: 508 → 511 ключей. Отчёты
  `/private/tmp/T-20261126-025-ui-{before,after}.json`.
- `npm run test:i18n`: exit 1, прежний `test-dist-verifier.mjs:24`;
  общий baseline FAIL не устранён. Логи
  `/private/tmp/T-20261126-025-ui-{build,tests}.log`.

## Браузерная проверка остаётся открыта

В текущей сессии browser tools отсутствуют. Обнаружен установленный
Chromium headless shell 1248, но изолированный запуск на `about:blank`
завершается exit 133:
`bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer: Permission denied (1100)`.
Это ограничение запуска процесса; HTML и CSS не являются замером layout.
320/390/600/680/1280, пересечения элементов, клики и консоль не проверены.
Рабочий пользовательский браузер и его аккаунты не использовались.

## Продолжение

1. Перевести те же три ключа FR/IT/ES следующей порцией, затем TR.
2. Проверить весь видимый UI профиля и обеих линеек, включая короткие
   строки и aria-label: сравнение длинных текстовых узлов не доказывает
   отсутствие всех fallback.
3. Выполнить браузерный QA в разрешённом окружении, затем независимое review.
   Этапы 3–5 и прежний fixes_needed не закрывать. Родитель T-20261126-023
   остаётся blocked, не закрыт.
