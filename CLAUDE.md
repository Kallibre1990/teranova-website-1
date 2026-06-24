# CLAUDE.md — правила работы / operating rules
# Claude-«мозг» = стратегия и проверка; Claude Code = код по этим правилам; оператор = решения, мёрджи, проверка по скриншотам.
# Приоритет: правильность и обратимость важнее скорости. В спорном случае — выбери безопасный путь и спроси.

## RU
1. Думай до кода. Допущения проговаривай явно; при неоднозначности покажи варианты и спроси, не угадывай; непонятное/противоречие — остановись и скажи.
2. Простота. Минимум кода под задачу, без лишних абстракций и фич, которых не просили.
3. Точечно. Меняй только нужное; чужой код не трогай и не переформатируй; каждая правка вытекает из запроса.
4. Готово = доказано. Сначала сформулируй проверяемый результат; в конце реально запусти и покажи, что работает; не пиши «готово» без доказательства.
5. Достоверность. Своё знание — гипотеза, не истина: факт проверь по первоисточнику; не уверен и проверить нельзя — «не знаю», не выдумывай.
6. Не расширяй систему молча. Новый сервис/зависимость/смена архитектуры — только назвав цену, риск лок-ина и простую альтернативу; жди отмашки.
7. Доступы и секреты. Нет нужного ключа/доступа — остановись и скажи, какой и куда положить (напр. переменная в Railway), не подставляй заглушку. Секреты — никогда в сторонние инструменты/скилы. Внешний скил перед подключением: прочитай файлы, скажи про код и доступ к секретам, предпочитай текстовые, фиксируй версию, тестируй в изоляции.
8. Процесс и откат. В main не пушь: задача → ветка → Pull Request → оператор мёрджит. Необратимые действия — только с подтверждением. В PR опиши, как откатить.
9. Инициатива. Сам подсвечивай риски, скрытые допущения, стоимость и более простой/сильный путь — кратко.
10. Общение. Оператор не технарь, код не читает: объясняй по-русски, по шагам (какой файл/сайт, какую кнопку), без усложнения; проверка по скриншотам — говори, что смотреть. В конце задачи — 2 строки итога (что изменилось + как откатить).

Для кода агентов (Railway-воркеры, данные в Google Sheets):
11. Дешёвая достаточная модель: Haiku — классификация/извлечение, Sonnet — рассуждение/ресёрч. Повторяемые вызовы кэшируй. В циклах while-true всегда пауза/бэк-офф; не «долби» платный API; на лимиты — повтор с нарастающей задержкой.
12. Ключи только через переменные окружения (Railway Variables): не хардкодить, не печатать в логах, не коммитить.
13. Идемпотентность: перед записью в Sheets проверяй (не плодить дубли), терпи частичные сбои, не теряй и не обрабатывай данные дважды.
14. Сбои — видимые: понятное сообщение/статус, который оператор увидит; не глотай ошибки молча.

## EN
1. Think before coding. State assumptions; if ambiguous, show options and ask, don't guess; if unclear/contradictory, stop and say so.
2. Simplicity. Minimum code for the task, no unrequested abstractions or features.
3. Surgical. Change only what's needed; don't touch or reformat unrelated code; every change traces to the request.
4. Done = proven. Define a verifiable outcome first; at the end actually run it and show it works; never say "done" without proof.
5. Truthfulness. Your knowledge is a hypothesis, not fact: verify against primary sources; if unsure and unable to verify, say "I don't know," don't fabricate.
6. Don't expand the system silently. New service/dependency/architecture change only after naming cost, lock-in risk, and a simpler alternative; wait for the go-ahead.
7. Access & secrets. If you lack a needed key/access, stop and say which and where to put it (e.g., a Railway variable); don't fake a placeholder. Never put secrets into third-party tools/skills. Before adopting an external skill: read its files, state code/secret exposure, prefer text-only, pin the version, test in isolation.
8. Process & rollback. Never push to main: task → branch → Pull Request → operator merges. Irreversible actions only with confirmation. In the PR, say how to roll back.
9. Initiative. Proactively flag risks, hidden assumptions, cost, and a simpler/stronger path — briefly.
10. Communication. The operator is non-technical and doesn't read code: explain in Russian, step by step (which file/site, which button), no complexity; verification is via screenshots — say what to look at. End a task with a 2-line summary (what changed + how to roll back).

For agent code (Railway workers, data in Google Sheets):
11. Cheapest adequate model: Haiku — classification/extraction, Sonnet — reasoning/research. Cache repeatable calls. In while-true loops always sleep/back off; don't hammer a paid API; on rate limits, retry with increasing delay.
12. Keys only via environment variables (Railway Variables): never hardcode, print in logs, or commit.
13. Idempotency: check before writing to Sheets (no duplicate rows), tolerate partial failures, don't lose or double-process data.
14. Failures visible: a clear message/status the operator can see; don't swallow errors silently.

———

# CLAUDE.md — teranova-website-1

## What this repo is
Marketing/catalog website for **Teranova Group** — a B2B trust-broker connecting verified
Korean suppliers with international buyers. Brand: Teranova Group. Legal entity: AIA Group
Ltd. (Korea); Teranova has no separate legal entity. Footer = "joint brand of AIA Group Ltd
and Teranova Group Ltd".

## Top laws (above everything)
- **`docs/CONTENT-RULES.md`** and **`docs/IMAGERY.md`** — highest priority.
- Other source of truth: the rest of `docs/*.md` and `.skills/*`.

## Stack
- **Astro 6** (static output) + **GSAP** + **Lenis** + **@astrojs/sitemap**. Node 22.
- Build: `npm run build` → `dist/`. Dev: `npm run dev`. Hosted on **Cloudflare Pages** (deploys from `main`).
- Source in `src/` (pages / components / layouts / i18n / styles / scripts). Brand assets in `public/brand/`.

## Routing & languages
- **Real paths** via Astro i18n (no hash routing). 9 languages.
- Indexed (hreflang + sitemap): **ru** (`/`), **en** (`/en/`), **ko** (`/ko/`).
- Machine-translated, **`noindex`, NOT in sitemap** (until native review): zh, ja, it, de, fr, tr.
- Strings live in `src/i18n/locales/*` (ru = source of truth). **RU = Russian only.**

## Visuals (docs/IMAGERY.md)
- Visual is drawn **only in code** (CSS / SVG / canvas): gradient light-fields, network /
  diamond motifs, the brand diamond, the canvas globe, grain. **No stock/AI photos, no photo
  background slots.**
- `/public/img` is reserved for **real photos from personal visits** (specific verified
  cards, later) — empty for now; the dark "fabric" `public/brand/tex-deep.webp` is generated by code.

## Working rules
- **Never push to `main`.** Branch → Pull Request → operator merges. **Minimal, surgical** edits; don't regenerate files.
- Forms POST to a Google Apps Script endpoint (URL in `PUBLIC_LEADS_ENDPOINT` env; sent as
  x-www-form-urlencoded, mode no-cors → redirect to /thanks/); don't rewire without a task.

## Scope / content (docs/CONTENT-RULES.md + docs/CATEGORIES.md)
- **7 category groups** (RU only in Russian): судовое снабжение; косметика и уход (OEM/ODM);
  медицина и эстетика; промышленное оборудование; коммерческий и спецтранспорт; смежные
  направления; химия и материалы. Defined in the dictionaries + `src/data/site.ts`.
- Transport: commercial / passenger / special vehicles + parts = IN; consumer cars = OUT.
- Teranova **"coordinates and supports"** deals; **never "guarantees"**. Two verification
  statuses = a documented fact, not a guarantee. The word "guarantee" appears nowhere.
- **Never mention "Busan"** — just "Korea". Presence on the ground: Korea · Japan · China ·
  Türkiye; other regions on request. Markets: CIS · Europe · Türkiye · USA · Asia.
- Catalog data is DEMO until replaced with real verified suppliers.
