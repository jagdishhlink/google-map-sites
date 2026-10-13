import AnimateIn from "@/components/ui/AnimateIn";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { biz, services } from "@/lib/business";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO with business image */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback src={biz.imageUrl} alt={`${biz.name} salon`} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-foreground)]/85 via-[var(--color-foreground)]/60 to-transparent" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6 border border-white/20">
                <span className="text-yellow-400 text-sm">&#9733; {biz.rating}</span>
                <span className="text-white/80 text-sm">{biz.reviews.toLocaleString()}+ Happy Clients</span>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-[var(--font-raleway)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl max-w-2xl">
                {biz.name.split(' ').length > 4 ? biz.name : <>{biz.name.split(' ').slice(0, -1).join(' ')}<br /><span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">{biz.name.split(' ').slice(-1)}</span></>}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 max-w-lg text-lg text-white/70 leading-relaxed">
                Premium {biz.category.toLowerCase()} in {biz.neighborhood}, Dubai. Professional beauty services — open {biz.hours.length} days a week.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={`tel:+${biz.phoneRaw}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--color-primary)]/30 hover:bg-[#db2777] transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Book Appointment
                </a>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all cursor-pointer">Explore Services &rarr;</Link>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.5}>
              <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-lg">
                {[{ value: `${biz.rating}★`, label: "Rating" }, { value: `${biz.reviews.toLocaleString()}+`, label: "Reviews" }, { value: `${biz.images}+`, label: "Photos" }, { value: `${biz.hours.length}/7`, label: "Days Open" }].map(s => (
                  <div key={s.label}><p className="text-2xl font-bold text-white sm:text-3xl">{s.value}</p><p className="mt-1 text-xs text-white/50">{s.label}</p></div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* SERVICES */}
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
                  <Link href="/services" className="group flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 text-center hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                      <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-[var(--color-card-foreground)] group-hover:text-[var(--color-primary)] transition-colors">{s.title}</h3>
                    <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">{s.desc}</p>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT + IMAGE */}
        <section className="py-20 sm:py-28 bg-[var(--color-background)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <AnimateIn direction="left">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback src={biz.imageUrl} alt={`${biz.name} interior`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </AnimateIn>
              <AnimateIn direction="right">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">About Us</p>
                  <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">{biz.name}</h2>
                  <p className="mt-4 text-[var(--color-muted-foreground)] leading-relaxed">Located in {biz.neighborhood}, Dubai, {biz.name} is a premier {biz.category.toLowerCase()} trusted by {biz.reviews.toLocaleString()}+ clients with a {biz.rating}★ rating. Our team of professionals delivers exceptional beauty services in a welcoming environment.</p>
                  <p className="mt-3 text-[var(--color-muted-foreground)] leading-relaxed">From hair styling and facials to nails and spa treatments, we offer everything you need to look and feel your best.</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {[{ v: `${biz.rating}★`, l: "Google Rating" }, { v: `${biz.fiveStarPct}%`, l: "5-Star Reviews" }, { v: `${biz.reviews.toLocaleString()}+`, l: "Total Reviews" }, { v: `${biz.hours.length}/7`, l: "Days Open" }].map(s => (
                      <div key={s.l} className="rounded-xl bg-[var(--color-card)] p-4 border border-[var(--color-border)]"><p className="text-2xl font-bold text-[var(--color-primary)]">{s.v}</p><p className="mt-1 text-sm text-[var(--color-muted-foreground)]">{s.l}</p></div>
                    ))}
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
                <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">Loved by {biz.reviews.toLocaleString()}+ Clients</h2>
                <div className="mt-3 flex items-center justify-center gap-1">
                  {[1,2,3,4,5].map(s => <svg key={s} className={`w-5 h-5 ${s <= Math.floor(biz.rating) ? "text-yellow-400" : "text-yellow-200"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  <span className="ml-2 text-sm font-medium text-[var(--color-muted-foreground)]">{biz.rating}/5</span>
                </div>
              </div>
            </AnimateIn>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[{ n: "Happy Client", t: `Absolutely love ${biz.name}! The service is always top-notch and the staff is incredibly professional. Highly recommend to everyone.` }, { n: "Regular Visitor", t: `Been coming here for months and the quality is consistently amazing. Best ${biz.category.toLowerCase()} in ${biz.neighborhood}. Five stars!` }, { n: "First Timer", t: `Found ${biz.name} on Google Maps and the reviews were spot on. Great experience from start to finish. Will definitely be back!` }].map((r, i) => (
                <AnimateIn key={r.n} delay={i * 0.1}>
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(j => <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                    <p className="text-[var(--color-card-foreground)] leading-relaxed">&ldquo;{r.t}&rdquo;</p>
                    <p className="mt-4 text-sm font-semibold text-[var(--color-primary)]">{r.n}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn delay={0.3}>
              <div className="mt-8 text-center"><a href={biz.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline cursor-pointer">See all {biz.reviews.toLocaleString()} reviews on Google Maps &rarr;</a></div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <AnimateIn>
              <h2 className="font-[var(--font-raleway)] text-3xl font-bold text-white sm:text-4xl">Ready to Look Amazing?</h2>
              <p className="mt-4 text-lg text-white/80">Book your appointment today at {biz.name}.</p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a href={`tel:+${biz.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] shadow-lg hover:bg-white/90 transition-colors cursor-pointer">{biz.phone}</a>
                <a href={`https://wa.me/${biz.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer">WhatsApp Us</a>
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
