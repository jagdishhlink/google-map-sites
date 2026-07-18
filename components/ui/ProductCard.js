'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import clsx from 'clsx';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/products/${product.id}`} className="group block card-elevated h-full">
        <div className="relative aspect-[4/3] bg-surface-100 overflow-hidden rounded-t-2xl">
          {product.images?.[0] ? (
            <Image src={product.images[0]} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-surface-300" />
            </div>
          )}

          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.discount > 0 && <span className="badge-sale">-{product.discount}%</span>}
            <span className={product.condition === 'new' ? 'badge-new' : 'badge-used'}>
              {product.condition === 'new' ? 'New' : 'Refurbished'}
            </span>
          </div>

          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary-50 transition-colors" aria-label="Favorite">
              <Heart className="w-4 h-4 text-surface-600" />
            </button>
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary-50 transition-colors" aria-label="Quick view">
              <Eye className="w-4 h-4 text-surface-600" />
            </button>
          </div>

          {!product.inStock && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-10">
              <span className="px-4 py-2 bg-surface-900 text-white text-sm font-semibold rounded-lg">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">
            {product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}
          </p>
          <h3 className="font-semibold text-surface-900 text-sm sm:text-base line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs text-surface-400">{product.model}</p>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-lg sm:text-xl font-bold text-surface-900">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-surface-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className={clsx('w-2 h-2 rounded-full', product.inStock ? 'bg-emerald-500' : 'bg-red-500')} />
            <span className="text-xs text-surface-500">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
