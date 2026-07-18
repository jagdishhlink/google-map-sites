'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import ProductCard from '@/components/ui/ProductCard';
import CTASection from '@/components/sections/CTASection';

export default function CategoryPage({ category, products }) {
  return (
    <div className="bg-surface-50 dark:bg-surface-950 min-h-screen">
      {/* Header */}
      <div className="bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800">
        <div className="container-main py-10">
          <nav className="flex items-center gap-2 text-sm text-surface-500 mb-4">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-primary-600">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-surface-900 dark:text-white font-medium">{category.name}</span>
          </nav>
          <FadeIn>
            <h1 className="heading-section text-surface-900 dark:text-white">{category.name}</h1>
            <p className="mt-3 text-body max-w-2xl">{category.description}</p>
          </FadeIn>
        </div>
      </div>

      {/* Products */}
      <div className="container-main py-10">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-surface-500">No products in this category yet.</p>
            <Link href="/products" className="mt-4 inline-block text-primary-600 font-medium hover:underline">Browse All Products</Link>
          </div>
        )}
      </div>

      <CTASection />
    </div>
  );
}
