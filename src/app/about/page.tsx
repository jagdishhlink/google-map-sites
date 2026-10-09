import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/ui/AnimateIn";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ivy Beauty & Bubbles — a global beauty brand with 14 salons across Dubai, Warsaw, Abu Dhabi, Qatar & Miami. 4.7★ rated with 26.5K Instagram followers.",
  openGraph: {
    title: "About | Ivy Beauty & Bubbles Dubai",
    description: "Global beauty brand with 14 salons. Premium treatments at Sheraton Grand Dubai.",
  },
};

const locations = [
  { city: "Warsaw", flag: "🇵🇱", count: 7 },
  { city: "Dubai", flag: "🇦🇪", count: 3 },
  { city: "Abu Dhabi", flag: "🇦🇪", count: 2 },
  { city: "Qatar", flag: "🇶🇦", count: 1 },
  { city: "Miami", flag: "🇺🇸", count: 1 },
];

const timeline = [
  { year: "Founded", title: "Warsaw, Poland", desc: "Started as a single salon with a vision for luxury beauty." },
  { year: "Expansion", title: "7 Salons in Warsaw", desc: "Grew to become Warsaw's most loved beauty brand." },
  { year: "Dubai", title: "Sheraton Grand Dubai", desc: "Brought our signature luxury experience to the UAE." },
  { year: "Global", title: "14 Salons Worldwide", desc: "Now serving clients across 5 countries and 4 continents." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-secondary)]/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <AnimateIn direction="left">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Our Story</p>
                  <h1 className="mt-2 font-[var(--font-raleway)] text-4xl font-bold text-[var(--color-foreground)] sm:text-5xl">
                    Beauty Without Borders
                  </h1>
                  <p className="mt-6 text-lg text-[var(--color-muted-foreground)] leading-relaxed">
                    Ivy Beauty & Bubbles was born from a simple belief: everyone
                    deserves to feel extraordinary. What started as a single salon
                    in Warsaw has grown into a global beauty brand — 14 salons
                    across 5 countries.
                  </p>
                  <p className="mt-4 text-[var(--color-muted-foreground)] leading-relaxed">
                    Our Dubai flagship at Sheraton Grand on Sheikh Zayed Road
                    brings this vision to life with world-class treatments,
                    internationally trained professionals, and a luxurious
                    atmosphere that makes every visit unforgettable.
                  </p>
                  <div className="mt-8 flex items-center gap-6">
                    <a href="https://www.instagram.com/ivybeautyandbubbles/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      @ivybeautyandbubbles
                    </a>
                    <span className="text-sm text-[var(--color-muted-foreground)]">26.5K followers</span>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn direction="right">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://static.wixstatic.com/media/53b3ce_44a4b041c8f249ec87b0b99668818917~mv2.jpg"
                    alt="Ivy Beauty & Bubbles portfolio — hair transformations"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <h2 className="text-center font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)]">
                14 Salons Across 5 Countries
              </h2>
            </AnimateIn>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {locations.map((loc, i) => (
                <AnimateIn key={loc.city} delay={i * 0.1}>
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 text-center hover:shadow-md transition-shadow">
                    <span className="text-4xl">{loc.flag}</span>
                    <h3 className="mt-3 font-semibold text-[var(--color-foreground)]">{loc.city}</h3>
                    <p className="text-sm text-[var(--color-primary)]">{loc.count} {loc.count === 1 ? "salon" : "salons"}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-[var(--color-background)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <h2 className="text-center font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)]">Our Journey</h2>
            </AnimateIn>
            <div className="mt-12 space-y-8">
              {timeline.map((t, i) => (
                <AnimateIn key={t.year} delay={i * 0.15}>
                  <div className="flex gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      {i < timeline.length - 1 && <div className="w-0.5 h-16 bg-[var(--color-border)]" />}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">{t.year}</p>
                      <h3 className="mt-1 font-semibold text-lg text-[var(--color-foreground)]">{t.title}</h3>
                      <p className="mt-1 text-[var(--color-muted-foreground)]">{t.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <h2 className="text-center font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)]">Why Choose Us</h2>
            </AnimateIn>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Expert Team", desc: "Internationally trained professionals with years of experience.", icon: "👩‍🎨" },
                { title: "Premium Products", desc: "We use only the finest skincare and hair care brands.", icon: "✨" },
                { title: "Luxury Setting", desc: "Relax in our beautifully designed salon at Sheraton Grand.", icon: "🏨" },
                { title: "Open Daily", desc: "7 days a week, 9 AM to midnight for your convenience.", icon: "🕐" },
              ].map((v, i) => (
                <AnimateIn key={v.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 text-center hover:shadow-md transition-shadow">
                    <span className="text-3xl">{v.icon}</span>
                    <h3 className="mt-3 font-semibold text-[var(--color-foreground)]">{v.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">{v.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={0.3}>
              <div className="mt-12 text-center">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white hover:bg-[#db2777] transition-colors cursor-pointer">
                  Get In Touch &rarr;
                </Link>
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
