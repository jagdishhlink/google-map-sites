import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivy-beauty-bubbles.vercel.app"),
  title: {
    default: "Ivy Beauty & Bubbles | Premium Beauty Salon in Dubai",
    template: "%s | Ivy Beauty & Bubbles Dubai",
  },
  description:
    "Ivy Beauty & Bubbles at Sheraton Grand Dubai — premium beauty salon offering hair styling, facials, nails, bridal packages & spa treatments. 4.7★ rated with 4,488+ reviews. Open daily 9 AM – 12 AM.",
  keywords: [
    "beauty salon Dubai",
    "hair salon Sheikh Zayed Road",
    "bridal makeup Dubai",
    "spa Dubai",
    "nails Dubai",
    "facial treatment Dubai",
    "Ivy Beauty Bubbles",
    "Sheraton Grand Dubai salon",
  ],
  openGraph: {
    title: "Ivy Beauty & Bubbles | Premium Beauty Salon in Dubai",
    description:
      "Premium beauty salon at Sheraton Grand Dubai. Hair, nails, facials, bridal packages & spa. 4.7★ | 4,488+ reviews. Open daily 9 AM – 12 AM.",
    url: "https://ivy-beauty-bubbles.vercel.app",
    siteName: "Ivy Beauty & Bubbles",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivy Beauty & Bubbles | Premium Beauty Salon in Dubai",
    description:
      "Premium beauty salon at Sheraton Grand Dubai. 4.7★ | 4,488+ reviews.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ivy-beauty-bubbles.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Ivy Beauty & Bubbles Sheraton Grand Dubai",
    image:
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeIcnu3qIDIW1WsuXwtUd96hV6FT_I1WMRxrXlh_JiwFKZqdMj9G8WpQCIr1-Zmln62rD_dVvUyH7ZSbFHuOUF7cggL4m1xiBVmx4QlD7WHpPdvVyJVceYTU_m6BwDV7ocWeFda0BRhLkOh=w408-h306-k-no",
    url: "https://ivy-beauty-bubbles.vercel.app",
    telephone: "+971527434416",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Sheikh Zayed Rd",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2294453,
      longitude: 55.2866094,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "4488",
      bestRating: "5",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "00:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: undefined,
    areaServed: "Dubai",
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Ivy%20Beauty%20%26%20Bubbles%20Sheraton%20Grand%20Dubai&query_place_id=ChIJSczn7OhDXz4Rx15psO4LBMc",
  };

  return (
    <html
      lang="en"
      className={`${lora.variable} ${raleway.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
