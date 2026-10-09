import AnimateIn from "@/components/ui/AnimateIn";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { images } from "@/lib/images";

const services = [
  { title: "Hair Styling", icon: "✂️", desc: "Cuts, coloring, keratin & extensions" },
  { title: "Facials", icon: "🧖", desc: "Deep cleansing, anti-aging & hydration" },
  { title: "Nails", icon: "💅", desc: "Manicures, pedicures & nail art" },
  { title: "Bridal", icon: "👰", desc: "Complete bridal beauty packages" },
  { title: "Spa", icon: "🧘", desc: "Massage, aromatherapy & body wraps" },
  { title: "Lashes", icon: "👁️", desc: "Extensions, lifts & brow shaping" },
];

const reviews = [
  { name: "Sarah M.", rating: 5, text: "Absolutely the best salon in Dubai! My hair has never looked better. The keratin treatment is incredible!" },
  { name: "Fatima A.", rating: 5, text: "Had my bridal makeup done here — perfection. The whole team made me feel like a queen on my special day." },
  { name: "Priya K.", rating: 5, text: "Been coming here for over a year. The consistency in quality is amazing. Love the nail art!" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={images.heroCollage}
              alt="Ivy Beauty & Bubbles Salon Interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-foreground)]/80 via-[var(--color-foreground)]/50 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6 border border-white/20">
                <span className="text-yellow-400 text-sm">&#9733; 4.7</span>
                <span className="text-white/80 text-sm">4,488+ Happy Clients</span>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h1 className="font-[var(--font-raleway)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl max-w-2xl">
                Where Beauty
                <br />
                Meets{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                  Luxury
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="mt-6 max-w-lg text-lg text-white/70 leading-relaxed">
                Premium beauty salon at Sheraton Grand Dubai. Hair, facials,
                nails, bridal packages & spa — open daily 9 AM to midnight.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+971527434416"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--color-primary)]/30 hover:bg-[#db2777] transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Book Appointment
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  Explore Services &rarr;
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.5}>
              <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-lg">
                {[
                  { value: "14", label: "Salons Worldwide" },
                  { value: "26.5K", label: "Instagram Followers" },
                  { value: "1,009+", label: "Client Photos" },
                  { value: "7/7", label: "Days Open" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-xs text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">What We Offer</p>
                <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">Our Premium Services</h2>
              </div>
            </AnimateIn>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {services.map((s, i) => (
                <AnimateIn key={s.title} delay={i * 0.08}>
                  <Link
                    href="/services"
                    className="group flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 text-center hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-3xl">{s.icon}</span>
                    <h3 className="mt-3 text-sm font-semibold text-[var(--color-card-foreground)] group-hover:text-[var(--color-primary)] transition-colors">{s.title}</h3>
                    <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">{s.desc}</p>
                  </Link>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={0.3}>
              <div className="mt-10 text-center">
                <Link href="/services" className="text-[var(--color-primary)] font-semibold hover:underline cursor-pointer">
                  View All Services &rarr;
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="py-20 sm:py-28 bg-[var(--color-background)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <AnimateIn direction="left">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={images.salonInterior}
                    alt="Ivy Beauty & Bubbles salon interior at Sheraton Grand Dubai"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </AnimateIn>

              <AnimateIn direction="right">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">About Us</p>
                  <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
                    A Global Beauty Brand in Dubai
                  </h2>
                  <p className="mt-4 text-[var(--color-muted-foreground)] leading-relaxed">
                    With 14 salons across Warsaw, Dubai, Abu Dhabi, Qatar, and Miami, Ivy Beauty & Bubbles brings world-class beauty to every corner. Our Sheraton Grand Dubai location offers a premium experience with internationally trained professionals.
                  </p>
                  <p className="mt-3 text-[var(--color-muted-foreground)] leading-relaxed">
                    From precision hair styling and bespoke bridal packages to rejuvenating spa treatments, every service is crafted to bring out your unique radiance.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[#db2777] transition-colors cursor-pointer">
                      Learn More
                    </Link>
                    <Link href="/gallery" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] hover:border-[var(--color-primary)] transition-colors cursor-pointer">
                      View Gallery
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Testimonials</p>
                <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">Loved by 4,488+ Clients</h2>
                <div className="mt-3 flex items-center justify-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className={`w-5 h-5 ${s <= 4 ? "text-yellow-400" : "text-yellow-300"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-[var(--color-muted-foreground)]">4.7/5</span>
                </div>
              </div>
            </AnimateIn>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {reviews.map((r, i) => (
                <AnimateIn key={r.name} delay={i * 0.1}>
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                    </div>
                    <p className="text-[var(--color-card-foreground)] leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                    <p className="mt-4 text-sm font-semibold text-[var(--color-primary)]">{r.name}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMATIONS */}
        <section className="py-20 sm:py-28 bg-[var(--color-background)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Real Results</p>
                <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">Stunning Transformations</h2>
                <p className="mt-3 text-[var(--color-muted-foreground)]">See the difference our experts make — real clients, real results.</p>
              </div>
            </AnimateIn>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { src: images.beforeAfterCurly, alt: "Before and after — dark frizzy curls to smooth brunette waves", label: "Curly to Waves" },
                { src: images.beforeAfterSleek, alt: "Before and after — wavy brown to silky straight", label: "Wavy to Sleek" },
                { src: images.beforeAfterBlonde, alt: "Before and after — brassy blonde to cool luminous blonde", label: "Blonde Correction" },
              ].map((img, i) => (
                <AnimateIn key={img.label} delay={i * 0.1}>
                  <div className="group rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)] shadow-sm hover:shadow-lg transition-shadow">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <ImageWithFallback src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 text-center">
                      <p className="font-semibold text-[var(--color-foreground)]">{img.label}</p>
                      <p className="text-xs text-[var(--color-muted-foreground)] mt-1">Tap to see the difference</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn delay={0.3}>
              <div className="mt-8 text-center">
                <Link href="/gallery" className="text-[var(--color-primary)] font-semibold hover:underline cursor-pointer">View Full Gallery &rarr;</Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <AnimateIn>
              <h2 className="font-[var(--font-raleway)] text-3xl font-bold text-white sm:text-4xl">Ready to Glow?</h2>
              <p className="mt-4 text-lg text-white/80">Book your appointment today. Open 7 days a week, 9 AM – midnight.</p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a href="tel:+971527434416" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] shadow-lg hover:bg-white/90 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  +971 52 743 4416
                </a>
                <a href="https://wa.me/971527434416" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer">
                  WhatsApp Us
                </a>
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
