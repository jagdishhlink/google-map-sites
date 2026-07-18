'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25',
  secondary: 'bg-surface-900 dark:bg-white text-white dark:text-surface-900 hover:bg-surface-800 dark:hover:bg-surface-100',
  outline: 'border-2 border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:border-primary-500 hover:text-primary-600',
  ghost: 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800',
  whatsapp: 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/25',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
};

export default function Button({ children, variant = 'primary', size = 'md', href, className = '', icon: Icon, iconPos = 'right', ...props }) {
  const classes = clsx('inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200', variants[variant], sizes[size], className);
  const content = (
    <>
      {Icon && iconPos === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPos === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link href={href} className={classes} {...props}>{content}</Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes} {...props}>
      {content}
    </motion.button>
  );
}
