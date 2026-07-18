'use client';
import { motion } from 'framer-motion';
import { Award, Users, Target, Eye, Shield, Zap, Heart, Clock } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';

const values = [
  { icon: Shield, title: 'Trust & Transparency', desc: 'Every product is genuine with honest pricing. No hidden costs, no inflated MRP games.' },
  { icon: Zap, title: 'Expert Guidance', desc: 'Our team helps you choose the right product for your needs and budget — not the most expensive one.' },
  { icon: Heart, title: 'Customer First', desc: 'After-sales support that actually works. We stand behind every product we sell.' },
  { icon: Clock, title: 'Speed & Reliability', desc: 'Same-day delivery and installation for in-stock items. We respect your time.' },
];

export default function AboutContent() {
  return (
    <div className="bg-white dark:bg-surface-950">
      <section className="section-padding bg-surface-50 dark:bg-surface-900">
        <div className="container-main">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 mb-4">Our Story</span>
            <h1 className="heading-hero text-surface-900 dark:text-white max-w-3xl">
              Smart Electronics,{' '}<span className="text-primary-600 dark:text-primary-400">Honest Advice</span>
            </h1>
            <p className="mt-6 text-xl text-surface-600 dark:text-surface-400 leading-relaxed max-w-2xl">
              TechVision Electronics started in 2015 with a simple mission — help people make smart technology choices without the confusion and overpricing that plagues the electronics market.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="aspect-[4/3] rounded-2xl bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 flex items-center justify-center">
                <Award className="w-20 h-20 text-primary-300 dark:text-primary-700" />
              </div>
            </FadeIn>
            <FadeIn>
              <h2 className="heading-section text-surface-900 dark:text-white">From Passion to Purpose</h2>
              <p className="mt-5 text-body">Starting from a small shop in Ahmedabad&apos;s electronics market, we&apos;ve grown into a trusted destination for Smart TVs, CCTV security systems, and quality refurbished laptops.</p>
              <p className="mt-4 text-body">What sets us apart is our commitment to understanding what each customer actually needs — not just selling the most expensive option.</p>
              <p className="mt-4 text-body">Today, with over 2,000 happy customers and 5,000+ products sold, we continue to serve with the same honesty and expertise that started it all.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-50 dark:bg-surface-900">
        <div className="container-main grid md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="p-8 rounded-2xl bg-white dark:bg-surface-950 border border-surface-200 dark:border-surface-800 h-full">
              <Target className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="font-display font-bold text-xl text-surface-900 dark:text-white">Our Mission</h3>
              <p className="mt-3 text-surface-600 dark:text-surface-400 leading-relaxed">To make quality electronics accessible to everyone with transparent pricing, expert guidance, and reliable after-sales support.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="p-8 rounded-2xl bg-white dark:bg-surface-950 border border-surface-200 dark:border-surface-800 h-full">
              <Eye className="w-10 h-10 text-accent-600 mb-4" />
              <h3 className="font-display font-bold text-xl text-surface-900 dark:text-white">Our Vision</h3>
              <p className="mt-3 text-surface-600 dark:text-surface-400 leading-relaxed">To become the most trusted electronics partner in Gujarat — where every customer feels confident they got the best product at the best price.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn><h2 className="heading-section text-surface-900 dark:text-white text-center mb-12">What We Stand For</h2></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-surface-900 dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-surface-500 dark:text-surface-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <CTASection />
    </div>
  );
}
