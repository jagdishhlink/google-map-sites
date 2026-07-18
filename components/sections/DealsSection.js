'use client';
import { Flame, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { getBestSellers } from '@/data/products';

export default function DealsSection() {
  const deals = getBestSellers();

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-rose-500 tracking-wider uppercase mb-3">
                <Flame className="w-4 h-4" /> Hot Deals
              </span>
              <h2 className="heading-section text-surface-900">Best Sellers This Week</h2>
            </div>
            <Button href="/products" variant="ghost" icon={ArrowRight} className="hidden md:inline-flex">See All</Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {deals.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
