export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
              About Us
            </p>
            <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
              A Sanctuary of Beauty in the Heart of Dubai
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
              Nestled inside the prestigious Sheraton Grand Dubai on Sheikh Zayed
              Road, Ivy Beauty & Bubbles is where artistry meets indulgence. Our
              team of internationally trained beauty professionals delivers
              transformative experiences in a serene, luxurious setting.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
              From precision hair styling and bespoke bridal packages to
              rejuvenating facials and intricate nail art, every service is
              tailored to bring out your unique radiance.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { value: "4,488+", label: "5-Star Reviews" },
                { value: "92%", label: "5-Star Ratings" },
                { value: "1,009+", label: "Client Photos" },
                { value: "7/7", label: "Days Open" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-[var(--color-card)] p-4 border border-[var(--color-border)]"
                >
                  <p className="text-2xl font-bold text-[var(--color-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-secondary)]/30 to-[var(--color-accent)]/20 p-1">
              <div className="h-full w-full rounded-2xl bg-[var(--color-card)] flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                    <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <h3 className="font-[var(--font-raleway)] text-2xl font-bold text-[var(--color-foreground)]">
                    Ivy Beauty & Bubbles
                  </h3>
                  <p className="mt-2 text-[var(--color-muted-foreground)]">
                    Sheraton Grand Dubai
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-primary)] font-semibold">
                    Trade Center First
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${star <= 4 ? "text-yellow-400" : "text-yellow-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm font-semibold text-[var(--color-foreground)]">
                      4.7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
