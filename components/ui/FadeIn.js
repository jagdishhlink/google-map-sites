'use client';
import { motion } from 'framer-motion';

export default function FadeIn({ children, direction = 'up', delay = 0, duration = 0.5, className = '' }) {
  const dirs = { up: { y: 30 }, down: { y: -30 }, left: { x: 30 }, right: { x: -30 }, none: {} };
  const initial = { opacity: 0, ...dirs[direction] };
  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
