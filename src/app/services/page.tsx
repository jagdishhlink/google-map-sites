import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/ui/AnimateIn";
import { biz } from "@/lib/business";

export const metadata: Metadata = { title: "Services", description: `Premium beauty services at ${biz.name}, ${biz.neighborhood} Dubai. Hair, facials, nails, bridal, spa & more.` };

const cats = [
  { title: "Hair Styling", desc: "Our expert stylists deliver precision cuts, stunning color work, and transformative treatments.", items: ["Precision Haircuts", "Blowouts & Styling", "Hair Coloring", "Balayage & Ombré", "Keratin Treatment", "Hair Extensions", "Scalp Treatments", "Deep Conditioning"] },
  { title: "Facial Treatments", desc: "Rejuvenate your skin with customized facials using premium skincare products.", items: ["Deep Cleansing Facial", "Anti-Aging Treatment", "Hydration Boost", "Brightening Facial", "Acne Treatment", "LED Light Therapy", "Microdermabrasion", "Chemical Peels"] },
  { title: "Nail Art & Care", desc: "From classic elegance to creative artistry, flawless manicures and pedicures.", items: ["Classic Manicure", "Gel Manicure", "Acrylic Extensions", "Nail Art & Designs", "Spa Pedicure", "Dip Powder Nails", "Nail Repair", "Paraffin Treatment"] },
  { title: "Bridal Packages", desc: "Complete bridal beauty packages for your special day in Dubai.", items: ["Bridal Hair Styling", "Bridal Makeup", "Bridal Nails", "Pre-Wedding Skin Prep", "Henna Designs", "Trial Session", "Bridesmaid Packages", "Mother of Bride"] },
  { title: "Spa & Massage", desc: "Escape into tranquility with rejuvenating spa treatments.", items: ["Swedish Massage", "Deep Tissue", "Aromatherapy", "Hot Stone Massage", "Body Wraps", "Body Scrub & Polish", "Reflexology", "Couples Massage"] },
  { title: "Makeup & Lashes", desc: "Look your best for every occasion with professional makeup and lash services.", items: ["Event Makeup", "Natural Glam", "Lash Extensions", "Lash Lift & Tint", "Brow Shaping", "Brow Lamination", "Eyelash Perming", "HD Brows"] },
];

export default function ServicesPage() {
  return (
    <><Header /><main>
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-secondary)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn><div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Our Services</p>
            <h1 className="mt-2 font-[var(--font-raleway)] text-4xl font-bold text-[var(--color-foreground)] sm:text-5xl">Premium Beauty Services</h1>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">Experience world-class treatments at {biz.name}, {biz.neighborhood}.</p>
          </div></AnimateIn>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {cats.map((c, i) => (
            <AnimateIn key={c.title} delay={0.1}>
              <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 items-center`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="font-[var(--font-raleway)] text-2xl font-bold text-[var(--color-foreground)] sm:text-3xl">{c.title}</h2>
                  <p className="mt-3 text-[var(--color-muted-foreground)] leading-relaxed">{c.desc}</p>
                  <a href={`tel:+${biz.phoneRaw}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[#db2777] transition-colors cursor-pointer">Book This Service</a>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="grid grid-cols-2 gap-3">{c.items.map(item => (
                    <div key={item} className="flex items-center gap-2 rounded-xl bg-[var(--color-background)] p-3 border border-[var(--color-border)]">
                      <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      <span className="text-sm text-[var(--color-foreground)]">{item}</span>
                    </div>
                  ))}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimateIn><h2 className="font-[var(--font-raleway)] text-3xl font-bold text-white">Can&apos;t Decide? Let Us Help!</h2><p className="mt-4 text-white/80">Call us and our team will recommend the perfect treatment.</p>
          <a href={`tel:+${biz.phoneRaw}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] cursor-pointer">{biz.phone}</a></AnimateIn>
        </div>
      </section>
    </main><Footer /><WhatsAppButton /></>
  );
}
