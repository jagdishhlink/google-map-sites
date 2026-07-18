'use client';
import { Sparkles, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { getFeaturedProducts } from '@/data/products';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-main">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 tracking-wider uppercase mb-3">
                <Sparkles className="w-4 h-4" /> Featured
              </span>
              <h2 className="heading-section text-surface-900">Top Picks for You</h2>
            </div>
            <Button href="/products" variant="ghost" icon={ArrowRight} className="hidden md:inline-flex">View All</Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
