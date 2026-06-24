/* Site-wide constants (contacts, categories). Single source for the chrome. */

export const site = {
  name: 'Teranova Group',
  email: 'info@teranovagroup.com',
  phone: '+82-10-2286-0969',
  phoneHref: '+821022860969',
  domain: 'https://teranovagroup.com',
  city: 'South Korea',
} as const;

/* Contact channels shown on the Contacts page. Emails are language-neutral and
   live here (single source); their localized title/description live in i18n at
   pages.contacts.channels, keyed by the same ids. */
export const contactEmails = {
  info: 'info@teranovagroup.com',
  buyers: 'buyers@teranovagroup.com',
  suppliers: 'suppliers@teranovagroup.com',
  deals: 'deals@teranovagroup.com',
  tenders: 'tenders@teranovagroup.com',
} as const;
export const contactOrder = ['info', 'buyers', 'suppliers', 'deals', 'tenders'] as const;
export type ContactKey = (typeof contactOrder)[number];

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

/* Lead-form category options — STABLE values sent to the leads endpoint, so the
   spreadsheet stays consistent regardless of the visitor's UI language. The
   localized labels live in i18n at form.categories (same order). */
export const leadCategoryValues = [
  'судовое снабжение',
  'K-beauty',
  'медицина и эстетика',
  'промышленное оборудование',
  'коммерческий и спецтранспорт',
  'химическая продукция',
  'Другое — не уверен',
] as const;
