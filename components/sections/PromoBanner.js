'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Percent, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function PromoBanner() {
  return (
    <section className="py-12 bg-surface-50">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden min-h-[260px] group border border-surface-200">
            <Image src="/images/products/hikvision-kit.jpg" alt="CCTV Deals" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/60 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white w-fit">
                <Percent className="w-3 h-3" /> Limited Offer
              </span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">CCTV Combo Deals</h3>
                <p className="mt-2 text-white/70 text-sm max-w-xs">4-camera kit + DVR + HDD + free installation.</p>
                <div className="mt-4">
                  <Button href="/categories/cctv-cameras" size="sm" icon={ArrowRight}>From ₹8,990</Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden min-h-[260px] group border border-surface-200">
            <Image src="/images/products/hp-elitebook.jpg" alt="Laptop Deals" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-900/85 via-surface-900/60 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-xs font-semibold text-emerald-300 w-fit">
                <Zap className="w-3 h-3" /> While Stock Lasts
              </span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">i7 Laptops at 65% Off</h3>
                <p className="mt-2 text-white/70 text-sm max-w-xs">Enterprise HP & Dell with SSD, 16GB RAM & warranty.</p>
                <div className="mt-4">
                  <Button href="/categories/laptops" size="sm" icon={ArrowRight}>From ₹26,499</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
