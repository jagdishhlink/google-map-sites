import { biz, services } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center"><span className="font-bold text-lg text-white">{biz.name.charAt(0)}</span></div>
              <span className="font-semibold text-lg">{biz.name}</span>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">{biz.category} in {biz.neighborhood}, Dubai. {biz.rating}★ rated by {biz.reviews}+ clients.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">{services.map(s => <li key={s.title}>{s.title}</li>)}</ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80">Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {biz.hours.length > 0 ? <><li>{biz.hours[0].day} – {biz.hours[biz.hours.length-1].day}</li><li>{biz.hours[0].time}</li></> : <li>Contact for hours</li>}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><a href={`tel:+${biz.phoneRaw}`} className="hover:text-[var(--color-primary)] transition-colors cursor-pointer">{biz.phone}</a></li>
              <li>{biz.street}</li>
              <li>{biz.neighborhood}</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">&copy; 2026 {biz.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
