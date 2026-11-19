import type { BlogPost, BlogPostContent } from './blog';
import type { Lang } from '../i18n/ui';
import { publicLocaleCodes } from '../i18n/locale-policy.mjs';
import { tonever2026, toneverEditorialPhotos } from './tonever-2026';

const productSets = [['the-pamin'], ['rebelook'], ['ready-booster', '72k-film-ampoule'], ['rebelook', '72k-film-ampoule']] as const;
const heroIndices = [0, 1, 2, 3];
export const toneverPosts: BlogPost[] = tonever2026.ru.articles.map((master, index) => ({
  slug: master.slug, category: 'guide', date: '2026-11-19', supplier: 'tonever',
  related: ['tonever', 'cosmetics'],
  productLinks: productSets[index].map((slug) => ({ slug, name: slug === 'the-pamin' ? 'THE PAMIN' : slug === '72k-film-ampoule' ? '72K FILM AMPOULE' : slug.toUpperCase().replace('-', ' ') })),
  hero: toneverEditorialPhotos[heroIndices[index]].src,
  photos: index === 0 ? { insertAfter: 3, items: [{ src: '/img/suppliers/tonever/2026/pamin-sequence.webp', w: 1561, h: 344 }] } : index === 2 ? { insertAfter: 2, items: [toneverEditorialPhotos[3]] } : undefined,
  i18n: Object.fromEntries(publicLocaleCodes.map((locale) => {
    const c = tonever2026[locale as Lang];
    const article = c.articles[index];
    let paragraphs: string[][];
    if (index < 2) {
      const about = c.products[index === 0 ? 'the-pamin' : 'rebelook'].about;
      paragraphs = about.map((paragraph) => [paragraph]);
    } else if (index === 2) {
      const toner = c.products['ready-booster'].about;
      const ampoule = c.products['72k-film-ampoule'].about;
      paragraphs = [[toner[0]], toner.slice(1), [ampoule[0]], ampoule.slice(1)];
    } else paragraphs = article.paragraphs!.map((paragraph) => [paragraph]);
    const sections = article.heads.map((h, section) => ({ h, p: paragraphs[section] }));
    sections[sections.length - 1].p.push(c.ingredientsNote);
    return [locale, {
      title: article.title, excerpt: article.excerpt,
      seoTitle: `${article.title} · Teranova`, seoDesc: article.excerpt, sections,
      photoCaptions: [index === 0 ? `${article.heads[3]}. ${c.credit}, p. 25.` : `${c.products['72k-film-ampoule'].format}. ${c.credit}, p. 49.`],
      photoCredit: c.credit,
    } satisfies BlogPostContent];
  })),
}));
