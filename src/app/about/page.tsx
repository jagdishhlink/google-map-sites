import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/ui/AnimateIn";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { biz } from "@/lib/business";

export const metadata: Metadata = { title: "About", description: `About ${biz.name} — ${biz.category} in ${biz.neighborhood}, Dubai. ${biz.rating}★ rated with ${biz.reviews}+ reviews.` };

export default function AboutPage() {
  return (
    <><Header /><main>
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-secondary)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <AnimateIn direction="left"><div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Our Story</p>
              <h1 className="mt-2 font-[var(--font-raleway)] text-4xl font-bold text-[var(--color-foreground)] sm:text-5xl">Welcome to {biz.name}</h1>
              <p className="mt-6 text-lg text-[var(--color-muted-foreground)] leading-relaxed">{biz.name} is a trusted {biz.category.toLowerCase()} located in {biz.neighborhood}, Dubai at {biz.address}. With a {biz.rating}★ Google rating from {biz.reviews.toLocaleString()}+ reviews, we&apos;re proud to be one of the most loved beauty destinations in the area.</p>
              <p className="mt-4 text-[var(--color-muted-foreground)] leading-relaxed">Our team of skilled professionals is dedicated to providing exceptional beauty services in a warm, welcoming environment. Whether you&apos;re looking for a fresh new hairstyle, a relaxing spa treatment, or bridal beauty, we have you covered.</p>
            </div></AnimateIn>
            <AnimateIn direction="right">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback src={biz.imageUrl} alt={`${biz.name} salon`} fill className="object-cover" priority />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn><h2 className="text-center font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)]">Why Choose {biz.name}</h2></AnimateIn>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[{ t: "Expert Team", d: "Skilled professionals with years of experience in beauty services.", i: "👩‍🎨" }, { t: "Premium Products", d: "We use only the finest skincare and hair care brands.", i: "✨" }, { t: `${biz.rating}★ Rated`, d: `Trusted by ${biz.reviews.toLocaleString()}+ clients with ${biz.fiveStarPct}% five-star reviews.`, i: "⭐" }, { t: "Convenient Location", d: `Located in ${biz.neighborhood}, Dubai. ${biz.accessibility.length > 0 ? biz.accessibility[0] + '.' : ''}`, i: "📍" }].map((v, i) => (
              <AnimateIn key={v.t} delay={i * 0.1}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 text-center hover:shadow-md transition-shadow">
                  <span className="text-3xl">{v.i}</span><h3 className="mt-3 font-semibold text-[var(--color-foreground)]">{v.t}</h3><p className="mt-2 text-sm text-[var(--color-muted-foreground)]">{v.d}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.3}><div className="mt-12 text-center"><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white hover:bg-[#db2777] transition-colors cursor-pointer">Get In Touch &rarr;</Link></div></AnimateIn>
        </div>
      </section>
    </main><Footer /><WhatsAppButton /></>
  );
}
