# Brand assets

Drop the **final** logo files here, keeping these exact filenames so the site
picks them up automatically:

- `teranova-logo-light.svg` — light logo for **dark** backgrounds (header, footer).
- `teranova-logo-dark.svg` — dark logo for **light** backgrounds.
- `icon-mark.svg` — square icon mark only.

The files currently in this folder are **placeholders** that match the brand
palette so previews look complete. The header/footer actually render an inline
`Logo.astro` component (crisp text in the Manrope brand font); see
`src/components/Logo.astro`. Once final lockups exist, we can point the component
at these SVGs.

Rules (see `/.skills/brand-system/SKILL.md`): never stretch the logo, keep clear
space around it, light variant on dark only / dark variant on light only.
