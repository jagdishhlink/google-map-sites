'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Monitor, Camera, Laptop, Mouse, Cable, Plug, Wifi, Keyboard, ArrowUpRight } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import { categories } from '@/data/store';

const iconMap = { Monitor, Camera, Laptop, Mouse, Cable, Plug, Wifi, Keyboard };
const categoryImages = {
  'smart-tvs': '/images/products/samsung-tv-55.jpg',
  'cctv-cameras': '/images/products/hikvision-kit.jpg',
  'laptops': '/images/products/hp-elitebook.jpg',
  'laptop-accessories': '/images/products/laptop-charger.jpg',
  'cctv-accessories': '/images/products/hikvision-dvr.jpg',
  'tv-accessories': '/images/products/sony-bravia-55.jpg',
  'networking': '/images/products/tplink-router.jpg',
  'computer-accessories': '/images/products/lenovo-thinkpad.jpg',
};

export default function CategoriesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <FadeIn>
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-primary-600 text-sm font-semibold tracking-wider uppercase mb-3 block">Categories</span>
              <h2 className="heading-section text-surface-900">Shop by Category</h2>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-sm text-surface-500 hover:text-primary-600 transition-colors group">
              View all <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Monitor;
            return (
              <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Link href={`/categories/${cat.id}`} className="group block relative h-48 md:h-56 rounded-2xl overflow-hidden border border-surface-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500">
                  <Image
                    src={categoryImages[cat.id] || '/images/products/samsung-tv-55.jpg'}
                    alt={cat.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-surface-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm">{cat.name}</h3>
                        <p className="text-[11px] text-white/60">{cat.count} products</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
