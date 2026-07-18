'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Heart, Share2, Phone, MessageCircle, ShoppingBag, CheckCircle2, Star, Truck, Shield } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { store } from '@/data/store';
import clsx from 'clsx';

export default function ProductDetail({ product }) {
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const whatsappMsg = encodeURIComponent(`Hi! I'm interested in: ${product.name} (₹${product.price.toLocaleString('en-IN')})`);

  return (
    <div className="bg-white dark:bg-surface-950 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-surface-50 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800">
        <div className="container-main py-4">
          <nav className="flex items-center gap-2 text-sm text-surface-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-primary-600">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-surface-900 dark:text-white font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-main py-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Image Gallery */}
          <FadeIn direction="right">
            <div className="sticky top-24">
              <div className="aspect-square rounded-2xl bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 overflow-hidden relative">
                {product.images?.[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="w-24 h-24 text-surface-300 dark:text-surface-600" />
                  </div>
                )}
              </div>
              <div className="mt-4 flex gap-3">
                {product.images?.slice(0, 3).map((img, i) => (
                  <div key={i} className="w-20 h-20 rounded-xl bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 overflow-hidden relative cursor-pointer hover:border-primary-400 transition-colors">
                    <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — Product Info */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-2 mb-3">
                {product.discount > 0 && <span className="badge-sale">-{product.discount}% OFF</span>}
                <span className={product.condition === 'new' ? 'badge-new' : 'badge-used'}>
                  {product.condition === 'new' ? 'Brand New' : 'Refurbished'}
                </span>
              </div>

              <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-1">
                {product.brand.charAt(0).toUpperCase() + product.brand.slice(1)} • {product.model}
              </p>

              <h1 className="font-display text-2xl sm:text-3xl font-bold text-surface-900 dark:text-white">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-surface-900 dark:text-white">₹{product.price.toLocaleString('en-IN')}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-lg text-surface-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    <span className="text-sm font-semibold text-accent-600">Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}</span>
                  </>
                )}
              </div>

              {/* Stock & Warranty */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1.5">
                  <span className={clsx('w-2 h-2 rounded-full', product.inStock ? 'bg-accent-500' : 'bg-red-500')} />
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                {product.warranty && (
                  <span className="flex items-center gap-1.5 text-surface-500">
                    <Shield className="w-4 h-4 text-primary-500" />{product.warranty}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 text-surface-600 dark:text-surface-400 leading-relaxed">{product.description}</p>

              {/* Highlights */}
              {product.highlights && (
                <div className="mt-6">
                  <h3 className="font-semibold text-surface-900 dark:text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-surface-600 dark:text-surface-400">
                        <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />{h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href={`https://wa.me/${store.whatsapp}?text=${whatsappMsg}`} variant="whatsapp" size="lg" icon={MessageCircle} iconPos="left" className="flex-1">
                  Inquire on WhatsApp
                </Button>
                <Button href={`tel:${store.phone}`} variant="outline" size="lg" icon={Phone} iconPos="left" className="flex-1">
                  Call to Order
                </Button>
              </div>

              {/* Trust */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { icon: Shield, text: 'Warranty Included' },
                  { icon: Truck, text: 'Free Delivery' },
                  { icon: Star, text: 'Genuine Product' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 text-center">
                    <Icon className="w-5 h-5 text-primary-500" />
                    <span className="text-xs text-surface-600 dark:text-surface-400">{text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Specs Table */}
            {product.specs && (
              <FadeIn delay={0.2}>
                <div className="mt-10">
                  <h3 className="font-display font-bold text-lg text-surface-900 dark:text-white mb-4">Specifications</h3>
                  <div className="rounded-xl border border-surface-200 dark:border-surface-800 overflow-hidden">
                    {Object.entries(product.specs).map(([key, val], i) => (
                      <div key={key} className={clsx('flex items-center text-sm', i % 2 === 0 ? 'bg-surface-50 dark:bg-surface-900' : 'bg-white dark:bg-surface-950')}>
                        <span className="w-2/5 px-4 py-3 font-medium text-surface-600 dark:text-surface-400 border-r border-surface-200 dark:border-surface-800">{key}</span>
                        <span className="w-3/5 px-4 py-3 text-surface-900 dark:text-white">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="heading-card text-surface-900 dark:text-white mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
