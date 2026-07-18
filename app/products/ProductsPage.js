'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import FadeIn from '@/components/ui/FadeIn';
import { products } from '@/data/products';
import { categories, brands } from '@/data/store';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'discount', label: 'Biggest Discount' },
  { value: 'newest', label: 'Newest First' },
];

export default function ProductsPage() {
  const [filters, setFilters] = useState({ category: '', brand: '', condition: '', priceRange: '' });
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category) result = result.filter(p => p.category === filters.category);
    if (filters.brand) result = result.filter(p => p.brand === filters.brand);
    if (filters.condition) result = result.filter(p => p.condition === filters.condition);
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    switch (sort) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'discount': result.sort((a, b) => b.discount - a.discount); break;
      case 'newest': result.reverse(); break;
      default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [filters, sort]);

  const clearFilters = () => setFilters({ category: '', brand: '', condition: '', priceRange: '' });
  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-950">
      {/* Header */}
      <div className="bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800">
        <div className="container-main py-8">
          <FadeIn>
            <h1 className="heading-section text-surface-900 dark:text-white">All Products</h1>
            <p className="mt-2 text-body">Showing {filtered.length} products</p>
          </FadeIn>
        </div>
      </div>

      <div className="container-main py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 text-sm font-medium text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center">{activeFilterCount}</span>
            )}
          </button>

          <select value={sort} onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-sm text-surface-700 dark:text-surface-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
            {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="mb-8 p-6 rounded-2xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-surface-900 dark:text-white">Filters</h3>
              {activeFilterCount > 0 && (
                <button onClick={clearFilters} className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1">
                  <X className="w-3 h-3" /> Clear all
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <select value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-sm">
                <option value="">All Categories</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
              <select value={filters.brand} onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                className="px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-sm">
                <option value="">All Brands</option>
                {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
              <select value={filters.condition} onChange={(e) => setFilters({ ...filters, condition: e.target.value })}
                className="px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-sm">
                <option value="">All Conditions</option>
                <option value="new">New</option>
                <option value="refurbished">Refurbished</option>
              </select>
              <select value={filters.priceRange} onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-sm">
                <option value="">All Prices</option>
                <option value="0-5000">Under ₹5,000</option>
                <option value="5000-25000">₹5,000 - ₹25,000</option>
                <option value="25000-50000">₹25,000 - ₹50,000</option>
                <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                <option value="100000-999999">Above ₹1,00,000</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-surface-500">No products match your filters.</p>
            <button onClick={clearFilters} className="mt-4 text-primary-600 font-medium hover:underline">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
