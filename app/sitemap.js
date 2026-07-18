import { products } from '@/data/products';
import { categories, brands } from '@/data/store';

export default function sitemap() {
  const base = 'https://techvisionstore.com';
  const pages = [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/services`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8 },
  ];
  const catPages = categories.map(c => ({ url: `${base}/categories/${c.id}`, lastModified: new Date(), priority: 0.8 }));
  const brandPages = brands.map(b => ({ url: `${base}/brands/${b.id}`, lastModified: new Date(), priority: 0.7 }));
  const productPages = products.map(p => ({ url: `${base}/products/${p.id}`, lastModified: new Date(), priority: 0.6 }));
  return [...pages, ...catPages, ...brandPages, ...productPages];
}
