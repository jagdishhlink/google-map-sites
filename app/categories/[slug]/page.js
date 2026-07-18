import { categories } from '@/data/store';
import { getProductsByCategory } from '@/data/products';
import CategoryPage from './CategoryPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.id }));
}

export function generateMetadata({ params }) {
  const cat = categories.find(c => c.id === params.slug);
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default function Page({ params }) {
  const cat = categories.find(c => c.id === params.slug);
  if (!cat) notFound();
  const products = getProductsByCategory(params.slug);
  return <CategoryPage category={cat} products={products} />;
}
