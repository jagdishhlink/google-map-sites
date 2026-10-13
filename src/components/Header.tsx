"use client";
import { useState } from "react";
import { biz } from "@/lib/business";
import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
            <span className="text-white font-bold text-lg">{biz.name.charAt(0)}</span>
          </div>
          <span className="font-semibold text-lg text-[var(--color-foreground)] hidden sm:inline truncate max-w-[200px]">{biz.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(l => <Link key={l.href} href={l.href} className="text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors cursor-pointer">{l.label}</Link>)}
          <a href={`tel:+${biz.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#db2777] transition-colors cursor-pointer">Book Now</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-[var(--color-muted)] transition-colors cursor-pointer" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}</svg>
        </button>
      </div>
      {open && <div className="md:hidden border-t border-[var(--color-border)] bg-white px-4 py-4 space-y-3">{nav.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-base font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] cursor-pointer">{l.label}</Link>)}<a href={`tel:+${biz.phoneRaw}`} className="block w-full text-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white cursor-pointer">Book Now</a></div>}
    </header>
  );
}
