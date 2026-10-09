const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely the best salon in Dubai! The team is incredibly talented and the atmosphere is so relaxing. My hair has never looked better. Highly recommend the keratin treatment!",
  },
  {
    name: "Fatima A.",
    rating: 5,
    text: "Had my bridal makeup done here and it was perfection. The whole team made me feel like a queen. Every detail was flawless. Thank you Ivy Beauty!",
  },
  {
    name: "Priya K.",
    rating: 5,
    text: "Been coming here for over a year now. The consistency in quality is amazing. Love the nail art and the facial treatments. My go-to salon in Dubai!",
  },
  {
    name: "Emma L.",
    rating: 5,
    text: "The spa experience here is divine. Perfect place to unwind after a busy week. Professional staff, clean environment, and amazing results every single time.",
  },
  {
    name: "Aisha R.",
    rating: 4,
    text: "Great location inside Sheraton Grand. Convenient parking and the salon itself is beautifully designed. Love the lash extensions they do here!",
  },
  {
    name: "Maria C.",
    rating: 5,
    text: "Found my forever salon! The stylists actually listen to what you want and deliver exactly that. The color work is extraordinary. Worth every dirham.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Testimonials
          </p>
          <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-6 h-6 ${star <= 4 ? "text-yellow-400" : "text-yellow-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold text-[var(--color-foreground)]">
              4.7 out of 5
            </span>
            <span className="text-[var(--color-muted-foreground)]">
              based on 4,488 reviews
            </span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm"
            >
              <Stars count={review.rating} />
              <p className="mt-4 text-[var(--color-card-foreground)] leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-[var(--color-foreground)]">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ivy%20Beauty%20%26%20Bubbles%20Sheraton%20Grand%20Dubai&query_place_id=ChIJSczn7OhDXz4Rx15psO4LBMc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] font-semibold hover:underline cursor-pointer"
          >
            See all 4,488 reviews on Google Maps &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
