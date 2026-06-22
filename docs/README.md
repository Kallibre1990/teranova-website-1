# docs — canonical source specs

These are the **source-of-truth** briefs for the site. When code and a doc
disagree, the doc wins; when docs disagree, **`CONTENT-RULES.md` wins** (it is LOCKED).

| File | What it governs | Operational skill |
|------|-----------------|-------------------|
| `CONTENT-RULES.md` | LOCKED rules — highest priority (no “guarantee”, RU=Russian only, no “Busan”, transport scope, honesty, demand-first) | `.skills/seo` |
| `BRAND.md` | Palette, logo (diamond motif), font, tone | `.skills/brand-system` |
| `COPY.md` | Approved RU copy for key blocks | `.skills/copywriting` |
| `CATEGORIES.md` | Category taxonomy (6 groups + sub-niches) | — (data in `src/data/categories.ts`) |
| `IMAGERY.md` | Visuals are built in code (no stock photos); motion/depth | `.skills/motion-ux` |

Real brand assets live in `/public/brand/` (`teranova-logo-light.svg` for dark
backgrounds, `teranova-logo-dark.svg` for light, `teranova-icon-*`). The catalog
will be driven by the suppliers spreadsheet (Drive: *Teranova Suppliers STK2026*)
during the internal-pages step.
