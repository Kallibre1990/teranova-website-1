/* Blog / Insights — SEO content hub. Compact, useful B2B articles that pull
   informational search traffic and route it to the catalog and a request via
   Teranova ("a landing page, not a heavy portal"). Content is real, sourced from
   the project's own data (SANTE master price, verification model, Incoterms). No
   invented facts; the word "guarantee" is never used (docs/CONTENT-RULES.md).

   ru is the source of truth; other locales live in the per-post `i18n` map and
   fall back to ru. Neutral fields (slug, category, date, related links) live on
   the post itself. Shape mirrors suppliers/line-pages for a familiar pipeline. */
import type { Lang } from '../i18n/ui';
import blogData from './blog.json';

export interface BlogSection {
  /** Optional section heading. */
  h?: string;
  /** Paragraphs (plain text; links live in `related`, not inline). */
  p: string[];
}
export interface BlogPostContent {
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDesc: string;
  sections: BlogSection[];
}
/** Predefined internal link targets for the "related" block (language-neutral). */
export type BlogRelated = 'catalog' | 'cosmetics' | 'sante' | 'verify' | 'faq' | 'ondemand' | 'suppliers' | 'buyers';
export interface BlogPost {
  slug: string;
  category: 'guide' | 'overview';
  /** ISO date (yyyy-mm-dd), language-neutral. */
  date: string;
  related: BlogRelated[];
  /** Optional supplier slug this article is tied to (shown on that supplier's profile). */
  supplier?: string;
  /** Optional hero image (path under /public), language-neutral. */
  hero?: string;
  i18n: Partial<Record<Lang, BlogPostContent>>;
}

export const posts: BlogPost[] = blogData as BlogPost[];
export const postBySlug = (slug: string): BlogPost | undefined => posts.find((p) => p.slug === slug);
export const postContent = (p: BlogPost, lang: Lang): BlogPostContent => p.i18n[lang] ?? p.i18n.ru!;
/** Newest first, for the index listing. */
export const postsByDate: BlogPost[] = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
/** Articles tied to a given supplier (for the "useful articles" block on the profile). */
export const postsBySupplier = (slug: string): BlogPost[] => postsByDate.filter((p) => p.supplier === slug);
