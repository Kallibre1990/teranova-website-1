---
name: brand-system
description: Teranova visual brand system — colors, typography, logo, and depth/“premium-through-restraint” rules. Use whenever building or restyling any UI on this site so everything stays on-brand (navy + silver/platinum + cobalt).
---

# Teranova — Brand System

Premium through **restraint**: grid, air, thin hairlines, soft depth. **Not neon.**
Tokens live in `src/styles/global.css` (`:root`). Never hard-code hex — use the vars.

## Palette
| Token | Value | Use |
|---|---|---|
| `--navy` | `#0b1b35` | base / dark sections |
| `--navy-2` | `#0e2243` | raised navy panels |
| `--navy-deep` | `#081325` | deepest gradient stop |
| `--cobalt` | `#2563d4` | accent / CTA |
| `--cobalt-light` | `#3f7ae0` | hover / highlight |
| `--silver` | `#cbd4e0` | body text on dark |
| `--silver-bright` | `#edf1f6` | brightest silver |
| `--silver-muted` | `#92a0b5` | secondary text on dark |
| `--ink` / `--sub` / `--faint` | navy / `#45576f` / `#5a6a80` | text on light |

Cobalt is an **accent, never a fill**. Keep dark sections dominant, cobalt sparse.

## Typography
- Font: **Manrope** (Google Fonts, weights 300–800, `display=swap`). Covers Latin + Cyrillic.
- Korean falls back to **Noto Sans KR** (loaded only on `/ko/` pages).
- Stack: `'Manrope','Noto Sans KR',system-ui,…` (`--font`).

### Metallic headings
Hero / display headings use the silver gradient via `background-clip:text`:
`.metal` (silver) and `.metal-cobalt` (cobalt) classes. Use for the single hero H1
phrase and large stat numbers — not body copy.

## Logo
- **Real assets** in `/public/brand/`: `teranova-logo-light.svg` (white wordmark, for dark
  backgrounds), `teranova-logo-dark.svg` (navy wordmark, for light), `teranova-icon-light/dark.svg`.
- Rendered by `src/components/Logo.astro` (uses the real SVGs; `variant="light"` on dark, `dark` on light).
- **Motif:** a **diamond of two triangles** = "two sides that meet" (a bridge/exchange).
  Used large + layered as a 3D-ish hero element — `src/components/visual/Diamond.astro`.
- **Never** stretch or recolor the logo; keep clear space; light-on-dark / dark-on-light only.

## Depth & shape
- Layered panels, soft shadows (`--sh-s/m/l`), hairline dividers (`.hairline`), rounded radii (`--r`, `--r-lg`, `--r-xl`).
- Reveal-on-scroll via `data-reveal` (+ `data-delay="1..4"`); parallax via `data-parallax="0.xx"`. Both honor `prefers-reduced-motion`.
- Heavy full-screen WebGL/Three.js is **forbidden** (speed + SEO).

## Reusable classes
`.btn`/`.btn--primary|ghost|outline|lg`, `.badge--visited|provided`, `.eyebrow`,
`.h-section`, `.sub-section`, `.section`/`.section--navy|alt`, `.link-arrow`, `.wrap`.
