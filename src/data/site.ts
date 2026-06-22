/* Site-wide constants (contacts, categories). Single source for the chrome. */

export const site = {
  name: 'Teranova Group',
  email: 'info@teranovagroup.com',
  phone: '+82-10-2286-0969',
  phoneHref: '+821022860969',
  domain: 'https://teranovagroup.com',
  city: 'Busan, South Korea',
} as const;

export const categoryKeys = ['marine', 'cosmetics', 'medical', 'industrial'] as const;
export type CategoryKey = (typeof categoryKeys)[number];

/* Inline-icon id per category; rendered as SVG in the Categories section. */
export const categoryIcon: Record<CategoryKey, string> = {
  marine: 'anchor',
  cosmetics: 'drop',
  medical: 'cross',
  industrial: 'gear',
};
