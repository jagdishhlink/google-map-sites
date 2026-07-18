'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import { testimonials } from '@/data/services';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase mb-3 block">Reviews</span>
            <h2 className="heading-section text-surface-900">What Our Customers Say</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-surface-50 border border-surface-200 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-surface-600 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3 pt-5 border-t border-surface-200">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-700">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-surface-900">{t.name}</p>
                  <p className="text-xs text-surface-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
