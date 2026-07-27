import { site } from './site';
import { localizePath } from '../i18n/utils';
import { ui, type Lang } from '../i18n/ui';
import { supplierContent, linePageContent, type SupplierProfile, type SupplierLinePage } from './suppliers';
import { postContent, postsByDate, type BlogPost } from './blog';

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
  const c = supplierContent(profile, lang);
  const url = base + localizePath(`/catalog/${profile.slug}`, lang);
  const catName = t.categories.groups.find((g) => g.key === profile.category)?.name ?? '';
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: profile.name,
      alternateName: profile.brand,
      url,
      description: `${c.descriptor}. ${c.about[0] ?? ''}`,
      address: { '@type': 'PostalAddress', addressCountry: 'KR' },
      brand: { '@type': 'Brand', name: profile.brand },
      makesOffer: c.lines.map((l) => ({
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

/** BreadcrumbList for a supplier product-line page (Home › Catalog › Cat › Supplier › Line). */
export function supplierLineJsonLd(lang: Lang, page: SupplierLinePage) {
  const base = site.domain;
  const t = ui[lang];
  const c = linePageContent(page, lang);
  const catName = t.categories.groups.find((g) => g.key === page.category)?.name ?? '';
  const lineNames: Record<string, string> = { 'azulene-soother': 'Azulene Soother', 'artemisia-aka': 'Artemisia AKA', 'collagen-leader': 'Collagen Leader', 'hyalquad-core': 'Hyalquad Core' };
  const lineName = lineNames[page.slug] ?? page.slug;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { name: 'Teranova Group', path: '/' },
        { name: t.nav.catalog, path: '/catalog' },
        { name: catName, path: `/catalog/${page.category}` },
        { name: 'SANTE COSMETICS / Dr.SANTE', path: `/catalog/${page.supplierSlug}` },
        { name: lineName, path: `/catalog/${page.supplierSlug}/${page.slug}` },
      ].map((cr, i) => ({ '@type': 'ListItem', position: i + 1, name: cr.name, item: base + localizePath(cr.path, lang) })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${lineName} — Dr.SANTE`,
      description: c.seoDesc,
      url: base + localizePath(`/catalog/${page.supplierSlug}/${page.slug}`, lang),
      hasPart: page.items.map((it) => ({ '@type': 'Product', name: it.name, brand: { '@type': 'Brand', name: 'Dr.SANTE' }, category: catName })),
    },
  ];
}

/** Blog index: Blog + BreadcrumbList. */
export function blogJsonLd(lang: Lang) {
  const base = site.domain;
  const t = ui[lang];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: t.pages.blog.title,
      description: t.pages.blog.sub,
      url: base + localizePath('/blog', lang),
      inLanguage: t.htmlLang,
      publisher: { '@type': 'Organization', name: 'Teranova Group' },
      blogPost: postsByDate.map((post) => {
        const c = postContent(post, lang);
        return { '@type': 'BlogPosting', headline: c.title, url: base + localizePath(`/blog/${post.slug}`, lang), datePublished: post.date };
      }),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { name: 'Teranova Group', path: '/' },
        { name: t.nav.blog, path: '/blog' },
      ].map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: base + localizePath(c.path, lang) })),
    },
  ];
}

/** Blog article: BlogPosting + BreadcrumbList. */
export function blogPostJsonLd(lang: Lang, post: BlogPost) {
  const base = site.domain;
  const t = ui[lang];
  const c = postContent(post, lang);
  const url = base + localizePath(`/blog/${post.slug}`, lang);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: c.title,
      description: c.seoDesc,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: t.htmlLang,
      url,
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: 'Teranova Group' },
      publisher: { '@type': 'Organization', name: 'Teranova Group', logo: { '@type': 'ImageObject', url: base + '/brand/teranova-icon-dark.svg' } },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { name: 'Teranova Group', path: '/' },
        { name: t.nav.blog, path: '/blog' },
        { name: c.title, path: `/blog/${post.slug}` },
      ].map((cr, i) => ({ '@type': 'ListItem', position: i + 1, name: cr.name, item: base + localizePath(cr.path, lang) })),
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
