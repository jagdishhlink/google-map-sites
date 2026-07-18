'use client';
import { motion } from 'framer-motion';
import { Shield, Truck, Wrench, BadgeCheck, Clock, Headphones } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

const reasons = [
  { icon: BadgeCheck, title: 'Genuine Products', desc: '100% authentic with official brand warranty and original accessories.' },
  { icon: Shield, title: 'Extended Warranty', desc: 'Additional store warranty on refurbished laptops and all services.' },
  { icon: Wrench, title: 'Expert Installation', desc: 'Professional setup by trained technicians for TVs, CCTV & networking.' },
  { icon: Truck, title: 'Free Delivery', desc: 'Free delivery and installation on orders above ₹5,000 within city.' },
  { icon: Clock, title: 'Same-Day Service', desc: 'Same-day delivery and installation for most in-stock products.' },
  { icon: Headphones, title: 'After-Sales Support', desc: 'Dedicated support for troubleshooting, maintenance, and upgrades.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-main relative z-10">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-3 block">Why TechVision</span>
            <h2 className="heading-section text-white">Why Customers Choose Us</h2>
            <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">Complete electronics solutions with installation, support, and genuine warranties.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-primary-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-5">
                <r.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="font-display font-semibold text-white text-lg">{r.title}</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
