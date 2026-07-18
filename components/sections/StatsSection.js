'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useEffect, useState } from 'react';

const stats = [
  { value: 5000, suffix: '+', label: 'Products Sold' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 4.8, suffix: '★', label: 'Customer Rating' },
  { value: 2000, suffix: '+', label: 'Happy Clients' },
];

function Counter({ value, suffix, label, index }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number.isInteger(value) ? Math.floor(eased * value) : parseFloat((eased * value).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
      <p className="text-4xl md:text-5xl font-display font-bold text-primary-600">{count}{suffix}</p>
      <p className="mt-2 text-sm text-surface-500 font-medium">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-surface-50 border-y border-surface-200">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => <Counter key={stat.label} {...stat} index={i} />)}
        </div>
      </div>
    </section>
  );
}
