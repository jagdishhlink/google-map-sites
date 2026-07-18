'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ShoppingBag, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { navigation, store } from '@/data/store';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <div className="hidden lg:block bg-surface-900 text-white/70 text-xs py-2">
        <div className="container-main flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-primary-400" /> {store.phone}</span>
            <span className="text-white/30">|</span>
            <span>Free Installation on orders above ₹5,000</span>
          </div>
          <span>{store.hours.weekdays} (Mon-Sat)</span>
        </div>
      </div>

      <header className={clsx(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/[0.04] border-b border-surface-200' : 'bg-white'
      )}>
        <nav className="container-main flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/20 group-hover:shadow-primary-600/40 transition-shadow">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-surface-900 text-sm leading-tight">TechVision</p>
              <p className="text-[10px] text-surface-500 font-medium">Electronics</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={clsx(
                'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  ? 'text-primary-700 bg-primary-50 border border-primary-200'
                  : 'text-surface-600 hover:text-surface-900 hover:bg-surface-50'
              )}>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
              Get Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-surface-100 transition-colors" aria-label="Menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-16 z-40 bg-white lg:hidden overflow-y-auto">
            <div className="container-main py-6 space-y-2">
              {navigation.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link href={item.href} className={clsx(
                    'flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium',
                    pathname === item.href ? 'bg-primary-50 text-primary-700 border border-primary-200' : 'text-surface-700 hover:bg-surface-50'
                  )}>
                    {item.name} <ArrowRight className="w-4 h-4 text-surface-400" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 border-t border-surface-200">
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary-600 text-white font-semibold rounded-xl">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
