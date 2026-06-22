import { site } from './site';
import { localizePath } from '../i18n/utils';
import { ui, type Lang } from '../i18n/ui';

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
      logo: base + '/brand/icon-mark.svg',
      description: t.meta.home_desc,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Busan',
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
