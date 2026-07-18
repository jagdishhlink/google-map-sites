'use client';
import { brands } from '@/data/store';

export default function BrandsMarquee() {
  return (
    <section className="py-8 bg-surface-50 border-y border-surface-200 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface-50 to-transparent z-10" />

      <div className="flex animate-marquee">
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <div key={`${brand.id}-${i}`} className="flex-shrink-0 mx-8">
            <span className="text-xl font-display font-bold text-surface-300 hover:text-primary-500 transition-colors duration-300 whitespace-nowrap">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
