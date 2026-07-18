'use client';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { store } from '@/data/store';

export default function CTASection() {
  return (
    <section className="py-20 bg-surface-50">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-10 md:p-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px]" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">Need Help Choosing?</h2>
            <p className="mt-4 text-lg text-white/70">Our experts are ready to help you find the perfect product for your needs and budget.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" icon={ArrowRight} className="!bg-white !text-primary-700 hover:!bg-white/90 !shadow-xl !shadow-white/20">Contact Us</Button>
              <Button href={`https://wa.me/${store.whatsapp}`} size="lg" icon={MessageCircle} iconPos="left" className="!bg-white/10 !text-white !border !border-white/20 hover:!bg-white/20">WhatsApp</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
