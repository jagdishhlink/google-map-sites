'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-50 dark:bg-surface-950">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center px-4">
        <p className="font-display text-7xl font-bold text-primary-600/20 dark:text-primary-400/20">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-surface-900 dark:text-white">Page Not Found</h1>
        <p className="mt-3 text-surface-500 dark:text-surface-400 max-w-md mx-auto">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" icon={Home} iconPos="left">Go Home</Button>
          <Button href="/products" variant="outline" icon={Search} iconPos="left">Browse Products</Button>
        </div>
      </motion.div>
    </div>
  );
}
