# Brand assets

Drop the **final** logo files here, keeping these exact filenames so the site
picks them up automatically:

- `teranova-wordmark-light-v2.svg` — light logo for **dark** backgrounds (header, footer).
- `teranova-wordmark-dark-v2.svg` — dark logo for **light** backgrounds.
- `icon-mark.svg` — square icon mark only.

The files currently in this folder are **placeholders** that match the brand
palette so previews look complete. The header/footer actually render an inline
`Logo.astro` component (crisp text in the Manrope brand font); see
`src/components/Logo.astro`. Once final lockups exist, we can point the component
at these SVGs.

Rules (see `/.skills/brand-system/SKILL.md`): never stretch the logo, keep clear
space around it, light variant on dark only / dark variant on light only.

## Правило имён

Рисунок логотипа версионируется в имени файла: `…-v2.svg`, `…-v3.svg`.
Причина конкретная: 07.09.2026 новый логотип положили под старое имя, и
браузеры четыре часа отдавали прежний знак из кэша — Cloudflare Pages
отдаёт статику с `cache-control: max-age=14400`. Антон открыл боевой сайт и
увидел старый логотип на новом дизайне.

Меняется рисунок — меняется имя файла. Ссылки в `Logo.astro`, `BaseHead.astro`
и `SolarCare.astro` обновляются вместе с ним.
