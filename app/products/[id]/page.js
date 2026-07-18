import { products, getProductById } from '@/data/products';
import ProductDetail from './ProductDetail';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const product = getProductById(params.id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = getProductById(params.id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
