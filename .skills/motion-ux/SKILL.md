---
name: motion-ux
description: How depth, motion, and visuals are built on this site — code-drawn (no stock photos), layered parallax, conservative GSAP/Lenis, reduced-motion safe. Use when touching the hero, section backgrounds, scroll effects, or adding imagery. Source brief: docs/IMAGERY.md.
---

# Teranova — Motion & Visuals

Goal: a premium, multi-layered, "architectural" feel — depth via layers, not via a
heavy 3D engine. Source brief: `docs/IMAGERY.md`.

## Visuals are drawn in code (no stock photos)
For a business about **personal verification**, stock/AI "factory" photos imply
visits we can't prove — a trust risk. So backgrounds are **CSS/SVG**:
- Deep gradient-light fields: navy `#0b1b35` → cobalt `#2563d4` → silver, soft glow, light grain.
- **Network/bridge motif** (dots + thin lines) = "we connect two sides".
- The **diamond logo** (two triangles) used large and layered ("3D-ish": offset layers,
  shadow, edges lit cobalt/silver) — `src/components/visual/Diamond.astro`.
- Duotone navy+silver for any illustrative element. Thin line-art industry contours only
  as very light background texture — delicate, never cartoonish.
- Real photos may come later (Anton's factory visits) → `/public/img/`, via `<Image>`.

Avoid: flat vector clipart, stock/"real" factory photos passed as ours, heavy WebGL.

## Motion (implementation: `src/scripts/scroll-fx.ts`)
- Smooth scroll: **Lenis**, wired to **GSAP ScrollTrigger** via the gsap ticker.
- Effects: hero layer **parallax + slight zoom**; section backgrounds **drift**;
  reveal-on-scroll (`[data-reveal]`); 2–3 **pinned/cross-fade** moments max (kept
  conservative — sticky + scrub, progressive-enhanced so layout never breaks).
- Animate only `transform` / `opacity` (GPU). Pause off-viewport.
- **`prefers-reduced-motion` disables all of it**: no smooth scroll, no parallax,
  content shown immediately. Everything also works with JS disabled.

## Performance
- Targets: Lighthouse Perf(mobile) ≥ 85, A11y ≥ 95, SEO 100. GSAP/Lenis loaded as a
  deferred island. Content is static HTML for SEO. Fonts `display=swap`.
