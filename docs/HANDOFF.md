# Teranova Group — передаточный документ (контекст проекта)

Портативный контекст, чтобы продолжить проект в новом чате или передать новому разработчику.

- **Репозиторий (код):** https://github.com/Kallibre1990/teranova-website-1
- **Рабочая ветка (вся свежая работа):** `claude/fervent-franklin-qmmzee`
- **Скачать код:** `git clone` репозитория, либо на GitHub → Code → Download ZIP.

---

## 1. Что это
Маркетинговый/каталожный сайт **Teranova Group** — B2B «брокер доверия»: связывает
проверенных корейских поставщиков с международными покупателями. Бренд — Teranova Group,
юрлицо — AIA Group Ltd (Корея). Футер — «совместный бренд AIA Group Ltd и Teranova Group Ltd».
Сайт показывает 7 направлений каталога, объясняет модель проверки (компания «координирует и
сопровождает» сделки, **никогда не «гарантирует»**) и собирает заявки через формы.

## 2. Стек и команды
- **Astro 6** (статическая сборка) + GSAP + Lenis + @astrojs/sitemap + @fontsource-variable/manrope. **Node 22**.
- Установка: `npm install` · Разработка: `npm run dev` · Сборка: `npm run build` → `dist/`.
- **Хостинг:** Cloudflare Pages (деплой из `main`). **Формы:** Web3Forms (см. `docs/FORMS-SETUP.md`).
- **Правило:** в `main` напрямую не пушим: задача → ветка → Pull Request → оператор мёрджит.

## 3. Карта репозитория (ключевое)
- `src/pages/` — маршруты: `index.astro` (ru-главная), `[slug].astro` (ru-страницы),
  `[lang]/index.astro`, `[lang]/[slug].astro`, `catalog/[key].astro` (+ `[lang]/catalog/[key].astro`),
  `thanks`, `404`.
- `src/layouts/Base.astro` — каркас страницы (`<html lang>`, head, header/footer, логика noindex).
- `src/components/BaseHead.astro` — `<head>`: title/description (обрезка ~155), canonical,
  hreflang (ru/en/ko + x-default), OG/Twitter, JSON-LD, meta robots.
- `src/components/` — Header, Footer, LanguageSwitcher, Preloader; `home/*` (Hero, Categories,
  AboutHome, OnDemand = форма заявки, TendersHome, TeamTeaser, Verify, Presence, HowItWorks);
  `pages/*` (Catalog, CatalogGroup, About = объединённые «компания+команда», Buyers, Suppliers,
  VerifyPage, Faq, Contacts, Tenders, PageHead); `visual/*` (Atmosphere, CategoryArt = фон карточки,
  CategoryDeep = фон страницы направления, globe).
- `src/i18n/` — `ui.ts` (карта языков, сборка/слияние, isVerified), `utils.ts` (localizePath,
  getAlternates, getLangFromUrl), `deep.ts` (DeepPartial), `locales/*.ts`.
- `src/data/` — `site.ts` (контакты, ключи/иконки категорий), `demoSuppliers.ts`, `jsonld.ts`
  (homeJsonLd, faqJsonLd, breadcrumbJsonLd), `teamPhotos.ts`, `assetPhoto.ts`.
- `src/scripts/` — `motion.ts`, `globe.ts`, `carousel.ts`.
- `src/assets/` — `catalog/<key>.jpg` (карточки 1000×1000), `catalog/deep/<key>.jpg` (2400×1350),
  `team/*.jpg`, `about/` + `verify/` (слоты под реальные фото, ждут загрузки).
- `public/` — бренд-ассеты, `_headers` (безопасность), `robots.txt`, `favicon.svg`,
  `og-default.png`, `data/land-dots.json` (для глобуса).
- `docs/` — **`CONTENT-RULES.md` и `IMAGERY.md` (высший приоритет)**, `CATEGORIES.md`,
  `IMAGE-BRIEF.md` (ТЗ по фото), `FORMS-SETUP.md` (ТЗ по формам), `HANDOFF.md` (этот файл).
  `CLAUDE.md` в корне — правила работы.

## 4. Языки (10 шт.)
- **Индексируются** (hreflang + sitemap): **ru** (`/`), **en** (`/en/`), **ko** (`/ko/`).
- **Машинный перевод**, `noindex` + не в карте сайта (до вычитки носителем): **zh, ja, it, de, fr, tr, es**.
- `ru.ts` — источник правды и ТИП `UIDict`. `en.ts` и `ko.ts` — полные словари (тип UIDict).
  Машинные — `DeepPartial<UIDict>`, накладываются ПОВЕРХ английского (недостающие ключи → en).
- **Добавить язык:** создать `locales/xx.ts` (DeepPartial), зарегистрировать в `ui.ts`
  (import + languages + ui), добавить в массив `machine` в `astro.config.mjs`, добавить og:locale
  в `BaseHead.astro`. Маршруты, переключатель, hreflang, noindex, исключение из sitemap — авто.
- **RU = только русский.**

## 5. Контент и бренд (читать docs/CONTENT-RULES.md + IMAGERY.md — высший закон)
- **7 категорий:** судовое снабжение; косметика и уход (OEM/ODM); медицина и эстетика;
  промышленное оборудование; коммерческий и спецтранспорт; смежные направления; химия и материалы.
- Компания «координирует и сопровождает» сделки, **никогда не «гарантирует»**. Слова
  «гарантия/guarantee» нет нигде.
- Два статуса проверки = документированный факт, не гарантия. Визиты делает **«сотрудник»** (НЕ «основатель»).
- **Никогда не упоминать «Бусан»** — только «Корея». Присутствие: Корея·Япония·Китай·Türkiye.
  Рынки: СНГ·Европа·Türkiye·США·Азия.
- Визуал — только кодом (CSS/SVG/canvas), КРОМЕ реальных фото: каталог (загружены), портреты
  команды, доверительные фото (about/verify). Для доверительных — без стока/AI.
- Поставщики в каталоге — **ДЕМО** (помечены), позже заменить реальными проверенными.

## 6. Хостинг и формы
- Cloudflare Pages, деплой из `main`. Домен на Cloudflare.
- Формы: **Web3Forms** (бесплатно). Заявка = главная `#ondemand` (`OnDemand.astro`),
  тендер = `/tenders` (`Tenders.astro`). Нужна переменная `PUBLIC_WEB3FORMS_KEY` —
  **подробно в `docs/FORMS-SETUP.md`**.
- Безопасность: `public/_headers` (nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS).

## 7. Что сделано (последняя сессия)
- Переезд хостинга Netlify → Cloudflare Pages; формы Netlify → Web3Forms.
- Единое меню; объединили «О компании» + «Команда» в одну страницу `/about` (с командой).
- Каталог: карусель, кликабельная бегущая строка, пилюля «Подробнее», «Смежные» — последняя
  карточка, демо-компании (по 4 на направление, помечены «Демо»), **реальные фото** (7 карточек
  1000×1000 + 7 «дальних слоёв» 2400×1350) подключены.
- Тендеры: ручной режим «под ключ» сейчас + «платформа в разработке».
- Главная: блок «О нас» (+слот фото), тизер команды, точка входа «Тендеры».
- FAQ с rich-snippet (FAQPage JSON-LD); плавный глобус (инерция, статичный на телефонах).
- Формулировка проверки «сотрудник», не «основатель» (карточка + FAQ).
- Контакты восстановлены: 5 почт по отделам + телефон + KakaoTalk + юрлицо (без «Бусан»).
- Слоты под доверительные фото (about-home, about-hero, site-visit) — появятся после загрузки.
- i18n: добавлен испанский; 6 машинных языков подтянуты к паритету (итого 10 языков).
- Безопасность: `_headers` Cloudflare + экранирование JSON-LD; аудит чист.
- SEO: длины мета-описаний в норме, короче title главной, «хлебные крошки» (BreadcrumbList);
  аудит чист (нет «гарантия»/«Бусан»).
- Подробное ТЗ по фото (`docs/IMAGE-BRIEF.md`).

## 8. Что осталось
- ⚙️ **Задать `PUBLIC_WEB3FORMS_KEY` в Cloudflare** — без него формы не шлют письма (см. FORMS-SETUP.md).
- 🔀 **Смержить ветку** `claude/fervent-franklin-qmmzee` в `main`, чтобы всё попало на сайт.
- 📷 Реальные фото с заводов (about-home, about-hero, site-visit) — слоты готовы.
- 🏢 Заменить «Демо»-поставщиков на реальных (нужны данные).
- ◻️ Опционально: вычитка машинных языков носителями (тогда можно индексировать); обновить OG;
  проверка скорости (PageSpeed).
