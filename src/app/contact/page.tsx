import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/ui/AnimateIn";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Hours from "@/components/Hours";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ivy Beauty & Bubbles — call +971 52 743 4416, WhatsApp, or visit at Sheraton Grand Dubai, 3 Sheikh Zayed Rd. Open daily 9 AM – 12 AM. Book online via Moment.pl.",
  openGraph: {
    title: "Contact | Ivy Beauty & Bubbles Dubai",
    description: "Book your appointment. Call +971 52 743 4416 or visit Sheraton Grand Dubai. Open daily 9 AM – 12 AM.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero with salon image */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback src={images.salonInterior} alt="Ivy Beauty salon" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-[var(--color-foreground)]/70" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <AnimateIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Get In Touch</p>
              <h1 className="mt-2 font-[var(--font-raleway)] text-4xl font-bold text-white sm:text-5xl">Book Your Experience</h1>
              <p className="mt-4 max-w-lg mx-auto text-lg text-white/70">Walk-ins welcome. For the best experience, book your appointment in advance.</p>
            </AnimateIn>
          </div>
        </section>

        {/* Quick Action Cards */}
        <section className="relative -mt-16 z-10 pb-8">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <AnimateIn delay={0}>
                <a href="tel:+971527434416" className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl hover:shadow-2xl border border-[var(--color-border)] transition-all duration-300 cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                    <svg className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <h3 className="mt-3 font-semibold text-sm text-[var(--color-foreground)]">Call Now</h3>
                  <p className="text-xs text-[var(--color-primary)] font-medium mt-1">+971 52 743 4416</p>
                </a>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <a href="https://wa.me/971527434416?text=Hi%20Ivy%20Beauty!%20I%27d%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl hover:shadow-2xl border border-[var(--color-border)] transition-all duration-300 cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <h3 className="mt-3 font-semibold text-sm text-[var(--color-foreground)]">WhatsApp</h3>
                  <p className="text-xs text-green-600 font-medium mt-1">Message Us</p>
                </a>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <a href="https://www.moment.pl/s/ivybeautyandbubbles" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl hover:shadow-2xl border border-[var(--color-border)] transition-all duration-300 cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                    <svg className="w-7 h-7 text-[var(--color-accent)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <h3 className="mt-3 font-semibold text-sm text-[var(--color-foreground)]">Book Online</h3>
                  <p className="text-xs text-[var(--color-accent)] font-medium mt-1">via Moment.pl</p>
                </a>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <a href="https://www.google.com/maps/search/?api=1&query=Ivy%20Beauty%20%26%20Bubbles%20Sheraton%20Grand%20Dubai&query_place_id=ChIJSczn7OhDXz4Rx15psO4LBMc" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl hover:shadow-2xl border border-[var(--color-border)] transition-all duration-300 cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <h3 className="mt-3 font-semibold text-sm text-[var(--color-foreground)]">Directions</h3>
                  <p className="text-xs text-blue-600 font-medium mt-1">Google Maps</p>
                </a>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Location Details + Hours */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <AnimateIn direction="left">
                <div>
                  <h2 className="font-[var(--font-raleway)] text-2xl font-bold text-[var(--color-foreground)]">Our Location</h2>
                  <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-foreground)]">Sheraton Grand Hotel Dubai</p>
                        <p className="text-sm text-[var(--color-muted-foreground)] mt-1">3 Sheikh Zayed Rd, Trade Center First<br/>Dubai, United Arab Emirates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-foreground)]">Phone</p>
                        <a href="tel:+971527434416" className="text-[var(--color-primary)] hover:underline cursor-pointer">+971 52 743 4416</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-foreground)]">WhatsApp</p>
                        <a href="https://wa.me/971527434416" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline cursor-pointer">Send a message</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#833AB4]/10 to-[#FD1D1D]/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#833AB4]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-foreground)]">Instagram</p>
                        <a href="https://www.instagram.com/ivybeautyandbubbles/" target="_blank" rel="noopener noreferrer" className="text-[#833AB4] hover:underline cursor-pointer">@ivybeautyandbubbles</a>
                        <span className="text-xs text-[var(--color-muted-foreground)] ml-2">26.5K followers</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-foreground)]">Online Booking</p>
                        <a href="https://www.moment.pl/s/ivybeautyandbubbles" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline cursor-pointer">Book via Moment.pl</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-foreground)]">Accessibility</p>
                        <p className="text-sm text-[var(--color-muted-foreground)]">Wheelchair accessible entrance, parking & restroom</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn direction="right">
                <h2 className="font-[var(--font-raleway)] text-2xl font-bold text-[var(--color-foreground)] mb-6">Opening Hours</h2>
                <Hours />
                <div className="mt-6 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-6 text-white">
                  <h3 className="font-semibold text-lg">Walk-ins Welcome!</h3>
                  <p className="mt-2 text-white/80 text-sm">No appointment needed for basic services. For bridal, color, and spa packages, we recommend booking at least 48 hours in advance.</p>
                  <a href="tel:+971527434416" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-white/90 transition-colors cursor-pointer">
                    Call to Book
                  </a>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Full-width Map */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
            <AnimateIn>
              <h2 className="font-[var(--font-raleway)] text-2xl font-bold text-[var(--color-foreground)] mb-6 text-center">Find Us</h2>
              <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d55.2866094!3d25.2294453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43e8ece7cc49%3A0xc7040beeb0695ec7!2sIvy%20Beauty%20%26%20Bubbles%20Sheraton%20Grand%20Dubai!5e0!3m2!1sen!2sae!4v1"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ivy Beauty &amp; Bubbles on Google Maps"
                />
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[var(--color-background)]">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <AnimateIn>
              <h2 className="font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)]">Ready for Your Transformation?</h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">Choose your preferred way to book — we respond to all inquiries within 30 minutes during business hours.</p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a href="tel:+971527434416" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--color-primary)]/30 hover:bg-[#db2777] transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Call Now
                </a>
                <a href="https://wa.me/971527434416?text=Hi!%20I%27d%20like%20to%20book%20an%20appointment%20at%20Ivy%20Beauty." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all cursor-pointer">
                  WhatsApp
                </a>
                <a href="https://www.moment.pl/s/ivybeautyandbubbles" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-border)] px-8 py-4 text-base font-semibold text-[var(--color-foreground)] hover:border-[var(--color-primary)] transition-all cursor-pointer">
                  Book Online
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
