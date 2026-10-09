import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateIn from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our premium beauty services — hair styling, facials, nail art, bridal packages, spa & massage, makeup & lashes. Book at Ivy Beauty & Bubbles, Sheraton Grand Dubai.",
  openGraph: {
    title: "Services | Ivy Beauty & Bubbles Dubai",
    description: "Premium beauty services at Sheraton Grand Dubai. Hair, facials, nails, bridal, spa & more.",
  },
};

const serviceCategories = [
  {
    title: "Hair Styling",
    description: "Our expert stylists bring precision, creativity, and passion to every cut, color, and style. Whether you want a complete transformation or a subtle refresh, we deliver salon-quality results.",
    items: ["Precision Haircuts", "Blowouts & Styling", "Hair Coloring & Highlights", "Balayage & Ombré", "Keratin Treatment", "Hair Extensions", "Scalp Treatments", "Deep Conditioning"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our customized facial treatments using premium skincare products. Each facial is tailored to your skin type and concerns.",
    items: ["Deep Cleansing Facial", "Anti-Aging Treatment", "Hydration Boost Facial", "Brightening Facial", "Acne Treatment", "LED Light Therapy", "Microdermabrasion", "Chemical Peels"],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    title: "Nail Art & Care",
    description: "From classic elegance to creative artistry, our nail technicians deliver flawless manicures, pedicures, and custom nail art designs.",
    items: ["Classic Manicure", "Gel Manicure", "Acrylic Extensions", "Nail Art & Designs", "Spa Pedicure", "Dip Powder Nails", "Nail Repair & Strengthening", "Paraffin Treatments"],
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    title: "Bridal Packages",
    description: "Make your special day unforgettable with our complete bridal beauty packages. From pre-wedding prep to the big day, we've got you covered.",
    items: ["Bridal Hair Styling", "Bridal Makeup", "Bridal Nails", "Pre-Wedding Skin Prep", "Henna Designs", "Bridal Trial Session", "Bridesmaid Packages", "Mother of Bride Package"],
    gradient: "from-rose-400 to-pink-500",
  },
  {
    title: "Spa & Massage",
    description: "Escape into tranquility with our rejuvenating spa treatments. Relax, unwind, and let our therapists melt away your stress.",
    items: ["Swedish Massage", "Deep Tissue Massage", "Aromatherapy", "Hot Stone Massage", "Body Wraps", "Body Scrub & Polish", "Reflexology", "Couples Massage"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Makeup & Lashes",
    description: "Look your absolute best for every occasion. Our makeup artists create stunning looks, from natural glam to full editorial.",
    items: ["Event Makeup", "Natural Glam", "Lash Extensions", "Lash Lift & Tint", "Brow Shaping", "Brow Lamination", "Microblading Consultation", "Eyelash Perming"],
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-secondary)]/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                  Our Services
                </p>
                <h1 className="mt-2 font-[var(--font-raleway)] text-4xl font-bold text-[var(--color-foreground)] sm:text-5xl">
                  Premium Beauty Services
                </h1>
                <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
                  Experience world-class treatments at Sheraton Grand Dubai.
                  Every service is crafted with care by our internationally
                  trained professionals.
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
            {serviceCategories.map((cat, i) => (
              <AnimateIn key={cat.title} delay={0.1}>
                <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="font-[var(--font-raleway)] text-2xl font-bold text-[var(--color-foreground)] sm:text-3xl">
                      {cat.title}
                    </h2>
                    <p className="mt-3 text-[var(--color-muted-foreground)] leading-relaxed">
                      {cat.description}
                    </p>
                    <a
                      href="tel:+971527434416"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[#db2777] transition-colors cursor-pointer"
                    >
                      Book This Service
                    </a>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="grid grid-cols-2 gap-3">
                      {cat.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-xl bg-[var(--color-background)] p-3 border border-[var(--color-border)]"
                        >
                          <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-[var(--color-foreground)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <AnimateIn>
              <h2 className="font-[var(--font-raleway)] text-3xl font-bold text-white">
                Can&apos;t Decide? Let Us Help!
              </h2>
              <p className="mt-4 text-white/80">
                Call us or WhatsApp and our team will recommend the perfect
                treatment for you.
              </p>
              <a
                href="tel:+971527434416"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] cursor-pointer"
              >
                +971 52 743 4416
              </a>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
