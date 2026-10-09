export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-secondary)]/20 py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-primary)] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 mb-6">
          <span className="text-[var(--color-primary)] text-sm font-semibold">
            &#9733; 4.7 Rating
          </span>
          <span className="text-[var(--color-muted-foreground)] text-sm">
            &middot; 4,488+ Happy Clients
          </span>
        </div>

        <h1 className="font-[var(--font-raleway)] text-4xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
          Where Beauty Meets{" "}
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
            Luxury
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted-foreground)] sm:text-xl">
          Ivy Beauty & Bubbles at Sheraton Grand Dubai — your premium
          destination for hair styling, facials, nails, bridal packages &
          rejuvenating spa treatments.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:+971527434416"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--color-primary)]/30 hover:bg-[#db2777] transition-all duration-200 hover:shadow-xl cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-border)] px-8 py-4 text-base font-semibold text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-200 cursor-pointer"
          >
            View Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-xl mx-auto">
          {[
            { value: "4.7", label: "Star Rating" },
            { value: "4,488+", label: "Reviews" },
            { value: "1,009+", label: "Photos" },
            { value: "7 Days", label: "Open Weekly" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
