/* Site-wide constants (contacts, categories). Single source for the chrome. */

export const site = {
  name: 'Teranova Group',
  email: 'info@teranovagroup.com',
  phone: '+82-10-2286-0969',
  phoneHref: '+821022860969',
  domain: 'https://teranovagroup.com',
  city: 'South Korea',
} as const;

/* === Обратимые метки видимости (решение Антона 21.09.2026) ==================
   Пока СКРЫТЬ со всех языков сайта три вещи. Три отдельных флага — чтобы позже
   можно было вернуть ЧАСТЬ данных, не всё сразу: поставил нужный в `true` →
   пересобрал (`npm run build`). Ничего не удаляем: все строки целы в локалях и
   в true-ветках компонентов/jsonld. Яхтинг и банковские реквизиты не трогаем.

     showFounder — карточка основателя Антона Мадельканова (команда: Footer нет,
                   TeamTeaser на главной, герой и сетка «О нас»).
     showAia     — компания AIA Group Ltd.: юрлицо в «Контактах», строка
                   «совместный бренд AIA…», legalName и рег.№ в разметке, llms.txt.
     showBusan   — пусанский адрес в разметке Organization (jsonld).

   Чтобы вернуть ВСЁ как было — все три в `true`. Метка/точка возврата и таблица
   «было/стало»: docs/HIDDEN-2026-09-21-founder-aia-busan.md. ======================= */
export const showFounder = false as boolean;
export const showAia = false as boolean;
export const showBusan = false as boolean;
/* Юрлицо, показываемое, когда AIA скрыт. */
export const legalNameFallback = 'Teranova Group Ltd.';
/* Метка фото основателя — по ней прячем его карточку в командных блоках. */
export const founderPhoto = '/img/team/anton-madelkanov.jpg';

/* Скрытые карточки сотрудников (решение Антона 22.09.2026): пока НЕ показывать
   на сайте как представителей компании. Данные (имя/роль/био) целы в локалях —
   вернуть = убрать фото из этого списка и пересобрать. Возможно вернём позже. */
export const hiddenTeamPhotos = [
  '/img/team/ha-jeong-su.jpg', // Ха Чонсу (Денис) — менеджер по поставщикам
  '/img/team/an-larisa.jpg',   // Лариса Ан — менеджер по покупателям
] as const;

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

/* Sourcing countries. The catalog splits by country first: a buyer looking for
   Korean cosmetics and a buyer looking for Chinese industrial equipment are two
   different conversations. Korea is where we started and where most suppliers
   are; China opened in August 2026, India in August 2026. New countries are added here — the catalog
   picks them up from this list. */
export const countryKeys = ['kr', 'cn', 'in'] as const;
export type CountryKey = (typeof countryKeys)[number];

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

/* Supplier-form manufacturing type — STABLE values (localized labels live in
   i18n at pages.suppliers.form.oem_odm_opts, same order). */
export const oemOdmValues = ['OEM', 'ODM', 'Собственный бренд', 'Не уверен'] as const;
