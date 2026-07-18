'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { store } from '@/data/store';

export default function FloatingButtons() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBackTop && (
          <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-11 h-11 rounded-full bg-surface-800 text-white shadow-lg flex items-center justify-center hover:bg-surface-700 transition-colors" aria-label="Back to top">
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a href={`tel:${store.phone}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 flex items-center justify-center" aria-label="Call">
        <Phone className="w-5 h-5" />
      </motion.a>

      <motion.a href={`https://wa.me/${store.whatsapp}?text=Hi! I'm interested in your products.`} target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 flex items-center justify-center" aria-label="WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
