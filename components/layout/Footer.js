'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ShoppingBag, ArrowUp, ArrowUpRight } from 'lucide-react';
import { store, categories } from '@/data/store';

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">TechVision</p>
                <p className="text-[10px] text-white/50">Electronics</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">Premium electronics, expert installation, and genuine warranties — your trusted tech partner since 2015.</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5">Categories</h4>
            <ul className="space-y-2.5">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.id}`} className="text-sm text-white/50 hover:text-primary-400 transition-colors flex items-center gap-1 group">
                    {cat.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Products', 'Services', 'Contact'].map((name) => (
                <li key={name}>
                  <Link href={`/${name.toLowerCase()}`} className="text-sm text-white/50 hover:text-primary-400 transition-colors">{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" /><a href={`tel:${store.phone}`} className="text-sm text-white/50 hover:text-white transition-colors">{store.phone}</a></li>
              <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" /><a href={`mailto:${store.email}`} className="text-sm text-white/50 hover:text-white transition-colors">{store.email}</a></li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" /><span className="text-sm text-white/50">{store.address}</span></li>
              <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" /><span className="text-sm text-white/50">{store.hours.weekdays}</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} TechVision Electronics. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
            Back to Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
