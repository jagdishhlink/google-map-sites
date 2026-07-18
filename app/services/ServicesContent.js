'use client';
import { motion } from 'framer-motion';
import { Camera, Monitor, Wrench, Zap, Shield, Home, Building2, ArrowRight, MessageCircle } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import { store } from '@/data/store';

const iconMap = { Camera, Monitor, Wrench, Zap, Shield, Home, Building2 };

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-surface-950 min-h-screen">
      <section className="section-padding bg-surface-50 dark:bg-surface-900">
        <div className="container-main">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 mb-4">Our Services</span>
            <h1 className="heading-hero text-surface-900 dark:text-white max-w-3xl">Installation &<br /><span className="text-primary-600 dark:text-primary-400">Expert Support</span></h1>
            <p className="mt-6 text-xl text-surface-600 dark:text-surface-400 max-w-2xl">We don&apos;t just sell products — we provide complete solutions including professional installation, maintenance, and repair services.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-surface-900 dark:text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{service.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {service.features.map(f => (
                      <li key={f} className="text-xs text-surface-500 dark:text-surface-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary-500" />{f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm font-semibold text-primary-600 dark:text-primary-400">{service.price}</p>
                </motion.div>
              );
            })}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-surface-600 dark:text-surface-400 mb-4">Need a custom service or quote?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" icon={ArrowRight}>Contact Us</Button>
                <Button href={`https://wa.me/${store.whatsapp}`} variant="whatsapp" icon={MessageCircle} iconPos="left">WhatsApp</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
