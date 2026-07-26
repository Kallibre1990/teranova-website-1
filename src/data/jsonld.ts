import { site } from './site';
import { localizePath } from '../i18n/utils';
import { ui, type Lang } from '../i18n/ui';
import type { SupplierProfile } from './suppliers';

/** Organization + WebSite structured data for the home page. */
export function homeJsonLd(lang: Lang) {
  const base = site.domain;
  const t = ui[lang];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Teranova Group',
      url: base + '/',
      logo: base + '/brand/teranova-icon-dark.svg',
      description: t.meta.home_desc,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'KR',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: site.email,
          telephone: site.phone,
          availableLanguage: ['Russian', 'English', 'Korean'],
        },
      ],
      brand: [
        { '@type': 'Brand', name: 'Teranova Group' },
        { '@type': 'Brand', name: 'AIA Group Ltd' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Teranova Group',
      url: base + localizePath('/', lang),
      inLanguage: t.htmlLang,
    },
  ];
}

/** FAQPage structured data — built from the localized FAQ items (for rich results). */
export function faqJsonLd(lang: Lang) {
  const t = ui[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.pages.faq.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

/** BreadcrumbList for a simple second-level page (Home › Page). */
export function pageBreadcrumbJsonLd(lang: Lang, name: string, path: string) {
  const base = site.domain;
  const crumbs = [
    { name: 'Teranova Group', path: '/' },
    { name, path },
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: base + localizePath(c.path, lang),
    })),
  };
}

/** Organization + product offers + BreadcrumbList for a supplier profile page. */
export function supplierJsonLd(lang: Lang, profile: SupplierProfile) {
  const base = site.domain;
  const t = ui[lang];
  const url = base + localizePath(`/catalog/${profile.slug}`, lang);
  const catName = t.categories.groups.find((g) => g.key === profile.category)?.name ?? '';
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: profile.name,
      alternateName: profile.brand,
      url,
      description: `${profile.descriptor}. ${profile.about[0] ?? ''}`,
      address: { '@type': 'PostalAddress', addressCountry: 'KR' },
      brand: { '@type': 'Brand', name: profile.brand },
      makesOffer: profile.lines.map((l) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: `${profile.brand} ${l.name}`, category: catName, description: l.note },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { name: 'Teranova Group', path: '/' },
        { name: t.nav.catalog, path: '/catalog' },
        { name: catName, path: `/catalog/${profile.category}` },
        { name: `${profile.name} / ${profile.brand}`, path: `/catalog/${profile.slug}` },
      ].map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: base + localizePath(c.path, lang) })),
    },
  ];
}

/** BreadcrumbList for a catalog group page (Home › Catalog › Group). */
export function breadcrumbJsonLd(lang: Lang, group: { key: string; name: string }) {
  const base = site.domain;
  const t = ui[lang];
  const crumbs = [
    { name: 'Teranova Group', path: '/' },
    { name: t.nav.catalog, path: '/catalog' },
    { name: group.name, path: `/catalog/${group.key}` },
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: base + localizePath(c.path, lang),
    })),
  };
}
