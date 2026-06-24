# ТЗ: настройка форм связи (Google Apps Script endpoint)

На сайте две формы: **«Под заказ»** (главная, `#ondemand`) и **«Тендеры»** (`/tenders`).
Обе отправляют заявки на ваш **Google Apps Script endpoint** (он пишет их, например, в
Google-таблицу). В коде всё готово — нужно один раз задать адрес endpoint в Cloudflare.

## Как это работает (для разработчика)
- Форма шлёт POST как `application/x-www-form-urlencoded` (через `URLSearchParams`) — это
  «простой» запрос **без CORS-preflight** (Apps Script preflight не принимает).
- Режим `no-cors`: ответ браузеру недоступен (opaque) и не читается. По завершении запроса —
  редирект на `/thanks/` (на языке пользователя).
- При сетевой ошибке показывается запасной текст со ссылкой на `info@teranovagroup.com`.
- Honeypot: скрытое поле `website`; если заполнено (бот) — заявка не отправляется.
- Адрес берётся из переменной окружения `PUBLIC_LEADS_ENDPOINT`.
- Файлы: `src/components/home/OnDemand.astro`, `src/components/pages/Tenders.astro`,
  логика отправки — `src/scripts/leadForm.ts`.

## Поля заявки
`company, contact, email, phone, category, need, volume, timeline, comment` + служебные
`lang` (язык сайта), `page` (путь страницы), `source` (`website-form` для главной /
`tender` для тендеров). **Валидация:** нужен `email` ИЛИ `phone` и заполнено `need`.

## Что нужно от вас (один раз)
1. Разверните Apps Script как **Web app**: Deploy → New deployment → Web app →
   **Execute as: Me**, **Who has access: Anyone** → скопируйте URL вида
   `https://script.google.com/macros/s/…/exec`. В коде `doPost(e)` данные приходят в `e.parameter`.
2. Cloudflare Dashboard → **Pages** → проект → **Settings → Environment variables** → **Add**:
   - **Name:** `PUBLIC_LEADS_ENDPOINT`
   - **Value:** ваш URL `…/exec`
   - добавьте для **Production** и для **Preview**.
3. **Save** → **Deployments → Redeploy** последнего деплоя (адрес встраивается при сборке).
4. **Проверка:** заполните форму на сайте → должно перекинуть на `/thanks/` и появиться строка в таблице.

## Пример обработчика Apps Script
```js
function doPost(e) {
  const d = e.parameter; // company, contact, email, phone, category, need, volume, timeline, comment, lang, page, source
  SpreadsheetApp.getActiveSheet().appendRow([
    new Date(), d.source, d.lang, d.page, d.company, d.contact,
    d.email, d.phone, d.category, d.need, d.volume, d.timeline, d.comment,
  ]);
  return ContentService.createTextOutput('ok');
}
```

## Если заявки не приходят
1. `PUBLIC_LEADS_ENDPOINT` задан в Cloudflare и сделан **redeploy** после этого.
2. Endpoint развёрнут как Web app с доступом **Anyone** и обрабатывает POST.
3. На **превью (PR)** переменная тоже должна быть задана (Preview) — иначе форма не отправит.
4. В DevTools → Network виден POST на `…/exec` (ответ opaque — это нормально).
