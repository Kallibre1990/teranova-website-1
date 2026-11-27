// UI copy only; product facts remain in exsolu.ts.
export const storefront = {
  ru: { products: 'продуктов', explore: 'Смотреть линейку', articles: 'Статьи об EXSOLU', catalogue: 'Ассортимент', unavailable: 'Фотография продукта недоступна' },
  en: { products: 'products', explore: 'Explore the range', articles: 'EXSOLU articles', catalogue: 'Product range', unavailable: 'Product photograph unavailable' },
  ko: { products: '개 제품', explore: '제품군 보기', articles: 'EXSOLU 관련 글', catalogue: '제품 구성', unavailable: '제품 사진 없음' },
  ja: { products: '製品', explore: 'ラインを見る', articles: 'EXSOLUの記事', catalogue: '製品一覧', unavailable: '製品写真はありません' },
  zh: { products: '款产品', explore: '查看系列', articles: 'EXSOLU 文章', catalogue: '产品目录', unavailable: '暂无产品图片' },
  de: { products: 'Produkte', explore: 'Produktlinie ansehen', articles: 'Beiträge über EXSOLU', catalogue: 'Sortiment', unavailable: 'Produktfotografie nicht verfügbar' },
  fr: { products: 'produits', explore: 'Découvrir la gamme', articles: 'Articles sur EXSOLU', catalogue: 'Les produits', unavailable: 'Photographie du produit indisponible' },
  it: { products: 'prodotti', explore: 'Scopri la linea', articles: 'Articoli su EXSOLU', catalogue: 'Assortimento', unavailable: 'Fotografia del prodotto non disponibile' },
  es: { products: 'productos', explore: 'Ver la línea', articles: 'Artículos sobre EXSOLU', catalogue: 'Gama de productos', unavailable: 'Fotografía del producto no disponible' },
  pt: { products: 'produtos', explore: 'Conheça a linha', articles: 'Artigos sobre EXSOLU', catalogue: 'Gama de produtos', unavailable: 'Fotografia do produto indisponível' },
  tr: { products: 'ürün', explore: 'Ürün serisini inceleyin', articles: 'EXSOLU yazıları', catalogue: 'Ürün yelpazesi', unavailable: 'Ürün fotoğrafı mevcut değil' },
} as const;

// Official supplier thumbnails are valid at their natural size (T-20261127-052).
export const rejectedProductImages = new Set<string>();
