'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Shield, Truck, Headphones, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Button from '@/components/ui/Button';

const slides = [
  {
    title: '4K Smart TVs',
    subtitle: 'Cinematic Experience at Home',
    description: 'Samsung, LG, Sony & more — up to 30% off on premium 4K & OLED televisions with free wall mounting.',
    image: '/images/products/samsung-tv-55.jpg',
    badge: 'Up to 30% Off',
    badgeColor: 'bg-rose-500',
    cta: '/categories/smart-tvs',
  },
  {
    title: 'CCTV Security',
    subtitle: 'Complete Peace of Mind',
    description: 'Professional HD & 4K cameras with free installation. Monitor your home or office from anywhere.',
    image: '/images/products/hikvision-kit.jpg',
    badge: 'Free Installation',
    badgeColor: 'bg-emerald-500',
    cta: '/categories/cctv-cameras',
  },
  {
    title: 'Refurbished Laptops',
    subtitle: 'Premium Performance, Smart Price',
    description: 'Dell, HP, Lenovo — enterprise-grade laptops at up to 65% off with 6 months warranty.',
    image: '/images/products/dell-latitude.jpg',
    badge: 'Save up to 65%',
    badgeColor: 'bg-violet-500',
    cta: '/categories/laptops',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-surface-950">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image src={slide.image} alt={slide.title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-950/90 via-surface-950/60 to-surface-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-950/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container-main relative z-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div key={`badge-${current}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="mb-6">
              <span className={`inline-flex items-center gap-2 px-4 py-2 ${slide.badgeColor} text-white text-sm font-semibold rounded-full shadow-lg`}>
                <Star className="w-3.5 h-3.5 fill-current" /> {slide.badge}
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div key={`title-${current}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <p className="text-primary-300 font-semibold text-lg mb-3">{slide.subtitle}</p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">
                {slide.title}
              </h1>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p key={`desc-${current}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              {slide.description}
            </motion.p>
          </AnimatePresence>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-10 flex flex-wrap gap-4">
            <Button href={slide.cta} size="lg" icon={ArrowRight}>Shop Now</Button>
            <Button href="/products" variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">All Products</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-400" /> Genuine Warranty</span>
            <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-primary-400" /> Free Installation</span>
            <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-violet-400" /> Expert Support</span>
          </motion.div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 right-8 flex items-center gap-3">
          <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors backdrop-blur-sm" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-primary-400' : 'w-3 bg-white/30'}`} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
          <button onClick={() => setCurrent((current + 1) % slides.length)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors backdrop-blur-sm" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
