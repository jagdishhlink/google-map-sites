import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/ui/AnimateIn";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { biz } from "@/lib/business";

export const metadata: Metadata = { title: "Gallery", description: `Browse ${biz.images}+ photos from ${biz.name} in ${biz.neighborhood}, Dubai. See our salon and work.` };

export default function GalleryPage() {
  return (
    <><Header /><main>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0"><ImageWithFallback src={biz.imageUrl} alt={biz.name} fill className="object-cover" priority /><div className="absolute inset-0 bg-[var(--color-foreground)]/70" /></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Our Work</p>
            <h1 className="mt-2 font-[var(--font-raleway)] text-4xl font-bold text-white sm:text-5xl">Beauty Gallery</h1>
            <p className="mt-4 max-w-lg mx-auto text-lg text-white/70">{biz.images}+ photos showcasing our salon and work at {biz.name}.</p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn><div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Our Space</p>
            <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)]">Inside {biz.name}</h2>
          </div></AnimateIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Our Salon", subtitle: biz.neighborhood },
              { title: "Professional Setup", subtitle: "Premium equipment" },
              { title: "Welcoming Space", subtitle: "Designed for comfort" },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.12}>
                <div className="group relative rounded-2xl overflow-hidden border border-[var(--color-border)]">
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback src={biz.imageUrl} alt={`${biz.name} - ${item.title}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-white/70">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-background)]">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimateIn>
            <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-8 sm:p-12">
              <h2 className="font-[var(--font-raleway)] text-2xl font-bold text-[var(--color-foreground)]">See More on Google Maps</h2>
              <p className="mt-3 text-[var(--color-muted-foreground)]">Browse all {biz.images}+ client photos and reviews on our Google Maps listing.</p>
              <a href={biz.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white hover:bg-[#db2777] transition-colors cursor-pointer">
                View on Google Maps &rarr;
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main><Footer /><WhatsAppButton /></>
  );
}
