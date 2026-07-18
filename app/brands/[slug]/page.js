import { brands } from '@/data/store';
import { getProductsByBrand } from '@/data/products';
import CategoryPage from '../../categories/[slug]/CategoryPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.id }));
}

export function generateMetadata({ params }) {
  const brand = brands.find(b => b.id === params.slug);
  if (!brand) return {};
  return { title: `${brand.name} Products`, description: `Browse all ${brand.name} products at TechVision Electronics` };
}

export default function Page({ params }) {
  const brand = brands.find(b => b.id === params.slug);
  if (!brand) notFound();
  const products = getProductsByBrand(params.slug);
  const categoryLike = { name: `${brand.name} Products`, description: `All available ${brand.name} products in our store.`, id: brand.id };
  return <CategoryPage category={categoryLike} products={products} />;
}
