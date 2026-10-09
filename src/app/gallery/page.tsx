import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/ui/AnimateIn";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { images } from "@/lib/images";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse stunning hair transformations, before & after results, salon interiors, and beauty work at Ivy Beauty & Bubbles Dubai — 1,009+ client photos.",
  openGraph: {
    title: "Gallery | Ivy Beauty & Bubbles Dubai",
    description: "Stunning transformations and beauty work. 1,009+ client photos at Sheraton Grand Dubai.",
  },
};

const galleryGrid = [
  { src: images.salonInterior, alt: "Luxury salon interior — white leather chairs, LED mirrors, green living wall at Sheraton Grand Dubai", category: "Salon Interior", size: "large" },
  { src: images.beforeAfterCurly, alt: "Before and after — dark frizzy curls transformed to smooth glossy brunette waves with highlights", category: "Hair Transformation", size: "tall" },
  { src: images.heroCollage, alt: "Hair portfolio — blonde waves, brunette curls, dark straight, and rose gold color styles", category: "Portfolio", size: "wide" },
  { src: images.blondePackage, alt: "Stunning Hollywood blonde waves — signature styling at Ivy Beauty Dubai", category: "Hair Styling", size: "normal" },
  { src: images.beforeAfterSleek, alt: "Before and after — wavy unruly hair to silky smooth sleek straight brunette", category: "Hair Transformation", size: "normal" },
  { src: images.beforeAfterBlonde, alt: "Before and after blonde color correction — brassy uneven to luminous cool blonde", category: "Color Correction", size: "normal" },
];

const highlights = [
  { name: "BLONDE", emoji: "💛" },
  { name: "BRUNETTE", emoji: "🤎" },
  { name: "FASHION COLORS", emoji: "🌈" },
  { name: "IVY WORLD", emoji: "🌿" },
  { name: "IVY FRIENDS", emoji: "💕" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback src={images.heroCollage} alt="Ivy Beauty portfolio" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-[var(--color-foreground)]/70" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <AnimateIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Our Work</p>
              <h1 className="mt-2 font-[var(--font-raleway)] text-4xl font-bold text-white sm:text-5xl">Beauty Gallery</h1>
              <p className="mt-4 max-w-lg mx-auto text-lg text-white/70">Real transformations. Real clients. 1,009+ photos of our best work.</p>
            </AnimateIn>

            {/* Instagram Highlights */}
            <AnimateIn delay={0.2}>
              <div className="mt-10 flex justify-center gap-5 flex-wrap">
                {highlights.map((h) => (
                  <a key={h.name} href="https://www.instagram.com/ivybeautyandbubbles/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-0.5">
                      <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {h.emoji}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-white/60">{h.name}</span>
                  </a>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Real Results</p>
                <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)]">Before & After Transformations</h2>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { src: images.beforeAfterCurly, title: "Curly to Waves", desc: "Dark frizzy curls to smooth glossy brunette waves" },
                { src: images.beforeAfterSleek, title: "Wavy to Sleek", desc: "Unruly waves to silky smooth straight brunette" },
                { src: images.beforeAfterBlonde, title: "Blonde Correction", desc: "Brassy uneven to luminous cool blonde waves" },
              ].map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.15}>
                  <div className="group rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)] shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <ImageWithFallback src={item.src} alt={item.desc} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-foreground)]">Before</span>
                        <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-white">After</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-[var(--color-foreground)]">{item.title}</h3>
                      <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">{item.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Salon & Styling Gallery */}
        <section className="py-16 sm:py-20 bg-[var(--color-background)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Our Space & Work</p>
                <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)]">Inside Ivy Beauty & Bubbles</h2>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { src: images.salonInterior, alt: "Luxurious salon interior with white leather chairs and green wall", title: "Sheraton Grand Dubai", subtitle: "Our flagship location" },
                { src: images.heroCollage, alt: "Portfolio of different hair styles and colors", title: "Hair Portfolio", subtitle: "Every shade, every style" },
                { src: images.blondePackage, alt: "Hollywood blonde waves styling", title: "Signature Styling", subtitle: "Hollywood waves package" },
              ].map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.12}>
                  <div className="group relative rounded-2xl overflow-hidden border border-[var(--color-border)] cursor-pointer">
                    <div className="relative aspect-square overflow-hidden">
                      <ImageWithFallback src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
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

        {/* Pricing Showcase */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <AnimateIn direction="left">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                  <ImageWithFallback src={images.blondePackage} alt="599 AED blonde styling package" fill className="object-cover" />
                </div>
              </AnimateIn>
              <AnimateIn direction="right">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Featured Package</p>
                  <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)]">599 AED Signature Package</h2>
                  <p className="mt-4 text-[var(--color-muted-foreground)] leading-relaxed">Our most popular styling package includes consultation, wash, treatment, blow-dry, and Hollywood waves finish. Perfect for special occasions or when you deserve the best.</p>
                  <ul className="mt-6 space-y-3">
                    {["Professional consultation", "Hair wash & conditioning", "Keratin or repair treatment", "Precision blow-dry", "Hollywood waves styling"].map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-[var(--color-foreground)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+971527434416" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--color-primary)]/30 hover:bg-[#db2777] transition-all cursor-pointer">
                    Book This Package
                  </a>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <div className="rounded-3xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] p-8 sm:p-12 text-center">
                <h2 className="font-[var(--font-raleway)] text-2xl font-bold text-white sm:text-3xl">Follow Us on Instagram</h2>
                <p className="mt-3 text-white/80">Daily inspiration, behind-the-scenes, client transformations & exclusive offers.</p>
                <div className="mt-2 text-white/60 text-sm">26,500+ followers | 14 salons worldwide</div>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <a href="https://www.instagram.com/ivybeautyandbubbles/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-white/90 transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    @ivybeautyandbubbles
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
