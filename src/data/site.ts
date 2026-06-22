/* Site-wide constants (contacts, categories). Single source for the chrome. */

export const site = {
  name: 'Teranova Group',
  email: 'info@teranovagroup.com',
  phone: '+82-10-2286-0969',
  phoneHref: '+821022860969',
  domain: 'https://teranovagroup.com',
  city: 'South Korea',
} as const;

/* 7 category groups — full list, matches docs/CATEGORIES.md and the i18n dictionaries. */
export const categoryKeys = ['marine', 'cosmetics', 'medical', 'industrial', 'transport', 'adjacent', 'chemical'] as const;
export type CategoryKey = (typeof categoryKeys)[number];

/* Icon id per category. The actual line-SVGs are drawn in the Categories section
   (src/components/home/Categories.astro), keyed by these category keys. */
export const categoryIcon: Record<CategoryKey, string> = {
  marine: 'anchor',
  cosmetics: 'drop',
  medical: 'cross',
  industrial: 'gear',
  transport: 'truck',
  adjacent: 'grid',
  chemical: 'flask',
};
