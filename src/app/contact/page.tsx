import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/ui/AnimateIn";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { biz } from "@/lib/business";
import HoursClient from "@/components/HoursClient";

export const metadata: Metadata = { title: "Contact", description: `Contact ${biz.name} — call ${biz.phone}, WhatsApp, or visit at ${biz.address}. Open ${biz.hours.length} days a week.` };

export default function ContactPage() {
  return (
    <><Header /><main>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0"><ImageWithFallback src={biz.imageUrl} alt={biz.name} fill className="object-cover" priority /><div className="absolute inset-0 bg-[var(--color-foreground)]/70" /></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Get In Touch</p>
            <h1 className="mt-2 font-[var(--font-raleway)] text-4xl font-bold text-white sm:text-5xl">Book Your Experience</h1>
            <p className="mt-4 max-w-lg mx-auto text-lg text-white/70">Walk-ins welcome. For the best experience, book in advance.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative -mt-16 z-10 pb-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { href: `tel:+${biz.phoneRaw}`, title: "Call Now", sub: biz.phone, color: "bg-[var(--color-primary)]/10", hoverColor: "hover:bg-[var(--color-primary)]", iconColor: "text-[var(--color-primary)]", subColor: "text-[var(--color-primary)]", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/> },
              { href: `https://wa.me/${biz.phoneRaw}?text=${encodeURIComponent(`Hi! I'd like to book at ${biz.name}.`)}`, title: "WhatsApp", sub: "Message Us", color: "bg-green-50", hoverColor: "hover:bg-green-500", iconColor: "text-green-600", subColor: "text-green-600", icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/> },
              { href: biz.mapsUrl, title: "Directions", sub: biz.neighborhood, color: "bg-blue-50", hoverColor: "hover:bg-blue-500", iconColor: "text-blue-600", subColor: "text-blue-600", icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></> },
            ].map((a, i) => (
              <AnimateIn key={a.title} delay={i * 0.1}>
                <a href={a.href} target={a.href.startsWith('http') ? "_blank" : undefined} rel={a.href.startsWith('http') ? "noopener noreferrer" : undefined} className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl hover:shadow-2xl border border-[var(--color-border)] transition-all duration-300 cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl ${a.color} flex items-center justify-center group-${a.hoverColor} transition-colors duration-300`}>
                    <svg className={`w-7 h-7 ${a.iconColor} group-hover:text-white transition-colors`} fill={a.title === "WhatsApp" ? "currentColor" : "none"} stroke={a.title === "WhatsApp" ? "none" : "currentColor"} viewBox="0 0 24 24">{a.icon}</svg>
                  </div>
                  <h3 className="mt-3 font-semibold text-sm text-[var(--color-foreground)]">{a.title}</h3>
                  <p className={`text-xs font-medium mt-1 ${a.subColor}`}>{a.sub}</p>
                </a>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Details + Hours */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <AnimateIn direction="left">
              <div>
                <h2 className="font-[var(--font-raleway)] text-2xl font-bold text-[var(--color-foreground)]">Our Location</h2>
                <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 space-y-5">
                  {[
                    { label: "Address", value: biz.address },
                    { label: "Phone", value: biz.phone, href: `tel:+${biz.phoneRaw}` },
                    { label: "WhatsApp", value: "Send a message", href: `https://wa.me/${biz.phoneRaw}` },
                    ...(biz.accessibility.length > 0 ? [{ label: "Accessibility", value: biz.accessibility.join(", ") }] : []),
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-foreground)]">{item.label}</p>
                        {item.href ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-[var(--color-primary)] hover:underline cursor-pointer">{item.value}</a> : <p className="text-sm text-[var(--color-muted-foreground)]">{item.value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              <h2 className="font-[var(--font-raleway)] text-2xl font-bold text-[var(--color-foreground)] mb-6">Opening Hours</h2>
              <HoursClient />
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-6 text-white">
                <h3 className="font-semibold text-lg">Walk-ins Welcome!</h3>
                <p className="mt-2 text-white/80 text-sm">For bridal and special packages, we recommend booking 48 hours in advance.</p>
                <a href={`tel:+${biz.phoneRaw}`} className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-white/90 transition-colors cursor-pointer">Call to Book</a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-lg">
              <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d${biz.lng}!3d${biz.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${biz.placeId}!2s${encodeURIComponent(biz.name)}!5e0!3m2!1sen!2sae!4v1`} width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${biz.name} on Google Maps`} />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimateIn>
            <h2 className="font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)]">Ready for Your Transformation?</h2>
            <p className="mt-4 text-[var(--color-muted-foreground)]">We respond to all inquiries quickly.</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href={`tel:+${biz.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-lg cursor-pointer">Call Now</a>
              <a href={`https://wa.me/${biz.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg cursor-pointer">WhatsApp</a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main><Footer /><WhatsAppButton /></>
  );
}
