"use client";

import { useState, useEffect } from "react";

const hours = [
  { day: "Monday", time: "9:00 AM – 12:00 AM" },
  { day: "Tuesday", time: "9:00 AM – 12:00 AM" },
  { day: "Wednesday", time: "9:00 AM – 12:00 AM" },
  { day: "Thursday", time: "9:00 AM – 12:00 AM" },
  { day: "Friday", time: "9:00 AM – 12:00 AM" },
  { day: "Saturday", time: "9:00 AM – 12:00 AM" },
  { day: "Sunday", time: "9:00 AM – 12:00 AM" },
];

export default function Hours() {
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(new Date().toLocaleDateString("en-US", { weekday: "long" }));
  }, []);

  return (
    <section id="hours" className="py-20 sm:py-28 bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
              Visit Us
            </p>
            <h2 className="mt-2 font-[var(--font-raleway)] text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
              Opening Hours
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              We are open 7 days a week to serve you. Walk-ins are welcome, but
              we recommend booking in advance for the best experience.
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] overflow-hidden">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] last:border-b-0 ${
                    item.day === today
                      ? "bg-[var(--color-primary)]/5"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.day === today && (
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    )}
                    <span
                      className={`font-medium ${
                        item.day === today
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-foreground)]"
                      }`}
                    >
                      {item.day}
                    </span>
                  </div>
                  <span className="text-[var(--color-muted-foreground)]">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-6">
              <h3 className="font-[var(--font-raleway)] text-xl font-semibold text-[var(--color-foreground)]">
                Location
              </h3>
              <p className="mt-3 text-[var(--color-muted-foreground)] leading-relaxed">
                Sheraton Grand Hotel Dubai
                <br />
                3 Sheikh Zayed Rd
                <br />
                Trade Center First
                <br />
                Dubai, United Arab Emirates
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ivy%20Beauty%20%26%20Bubbles%20Sheraton%20Grand%20Dubai&query_place_id=ChIJSczn7OhDXz4Rx15psO4LBMc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>

            <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-6">
              <h3 className="font-[var(--font-raleway)] text-xl font-semibold text-[var(--color-foreground)]">
                Accessibility
              </h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Wheelchair accessible entrance",
                  "Wheelchair accessible parking lot",
                  "Wheelchair accessible restroom",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[var(--color-muted-foreground)]"
                  >
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-6 text-white">
              <h3 className="font-[var(--font-raleway)] text-xl font-semibold">
                Ready to Glow?
              </h3>
              <p className="mt-2 text-white/80">
                Call us or walk in — we are open every day until midnight.
              </p>
              <a
                href="tel:+971527434416"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] hover:bg-white/90 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +971 52 743 4416
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
