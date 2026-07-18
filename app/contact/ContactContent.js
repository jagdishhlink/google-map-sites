'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import { store } from '@/data/store';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-surface-50 dark:bg-surface-950">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-12">
          <div className="w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-accent-600" />
          </div>
          <h2 className="heading-card text-surface-900 dark:text-white">Message Sent!</h2>
          <p className="mt-3 text-surface-600 dark:text-surface-400 max-w-md mx-auto">Thank you for reaching out. We&apos;ll get back to you within 2 hours during business hours.</p>
          <button onClick={() => setSubmitted(false)} className="mt-6 text-primary-600 font-medium hover:underline">Send Another Message</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-surface-50 dark:bg-surface-950 min-h-screen">
      <div className="bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800">
        <div className="container-main py-10">
          <FadeIn>
            <h1 className="heading-section text-surface-900 dark:text-white">Get In Touch</h1>
            <p className="mt-3 text-body max-w-2xl">Have a question about a product or need a quote? Reach out and our team will respond quickly.</p>
          </FadeIn>
        </div>
      </div>

      <div className="container-main py-12">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">Name *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">Phone *</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition" placeholder="+91 9876543210" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">Product Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none">
                    <option value="">Select category</option>
                    <option>Smart TVs</option>
                    <option>CCTV Cameras</option>
                    <option>Laptops</option>
                    <option>Accessories</option>
                    <option>Installation Service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">Message *</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none" placeholder="Tell us what you're looking for..." />
                </div>
                <Button type="submit" size="lg" icon={Send} className="w-full">Send Message</Button>
              </form>
            </FadeIn>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <FadeIn delay={0.1}>
              <div className="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 p-6 space-y-5">
                {[
                  { icon: Phone, label: 'Phone', value: store.phone, href: `tel:${store.phone}` },
                  { icon: Mail, label: 'Email', value: store.email, href: `mailto:${store.email}` },
                  { icon: MapPin, label: 'Address', value: store.address },
                  { icon: Clock, label: 'Hours', value: `Mon-Sat: ${store.hours.weekdays}\nSunday: ${store.hours.sunday}` },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-surface-500 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-surface-900 dark:text-white font-medium hover:text-primary-600 transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm text-surface-900 dark:text-white font-medium whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a href={`https://wa.me/${store.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-green-900 dark:text-green-100">Chat on WhatsApp</p>
                  <p className="text-sm text-green-700 dark:text-green-300">Quick response • Usually within minutes</p>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
