export default function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                <span className="font-bold text-lg text-white">IB</span>
              </div>
              <span className="font-semibold text-lg">Ivy Beauty & Bubbles</span>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Premium beauty salon at Sheraton Grand Dubai. Where beauty meets
              luxury, every single day.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Hair Styling</li>
              <li>Facial Treatments</li>
              <li>Nail Art & Care</li>
              <li>Bridal Packages</li>
              <li>Spa & Massage</li>
              <li>Makeup & Lashes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80">
              Hours
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Monday – Sunday</li>
              <li>9:00 AM – 12:00 AM</li>
              <li className="pt-2 text-green-400 font-medium">Open Now</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <a href="tel:+971527434416" className="hover:text-[var(--color-primary)] transition-colors cursor-pointer">
                  +971 52 743 4416
                </a>
              </li>
              <li>3 Sheikh Zayed Rd</li>
              <li>Trade Center First</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          &copy; 2026 Ivy Beauty & Bubbles. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
