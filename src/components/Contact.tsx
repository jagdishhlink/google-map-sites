export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Get In Touch
          </p>
          <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            Contact Us
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          <a
            href="tel:+971527434416"
            className="group flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-[var(--color-foreground)]">
              Phone
            </h3>
            <p className="mt-1 text-[var(--color-primary)]">
              +971 52 743 4416
            </p>
          </a>

          <a
            href="https://wa.me/971527434416"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-[var(--color-foreground)]">
              WhatsApp
            </h3>
            <p className="mt-1 text-green-600">Message Us</p>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Ivy%20Beauty%20%26%20Bubbles%20Sheraton%20Grand%20Dubai&query_place_id=ChIJSczn7OhDXz4Rx15psO4LBMc"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-[var(--color-foreground)]">
              Location
            </h3>
            <p className="mt-1 text-[var(--color-primary)]">Get Directions</p>
          </a>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden border border-[var(--color-border)] max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d55.2866094!3d25.2294453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43e8ece7cc49%3A0xc7040beeb0695ec7!2sIvy%20Beauty%20%26%20Bubbles%20Sheraton%20Grand%20Dubai!5e0!3m2!1sen!2sae!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ivy Beauty &amp; Bubbles location on Google Maps"
          />
        </div>
      </div>
    </section>
  );
}
