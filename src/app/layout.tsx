import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";
import { biz } from "@/lib/business";

const lora = Lora({ variable: "--font-lora", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${biz.slug}.vercel.app`),
  title: { default: `${biz.name} | ${biz.category} in Dubai`, template: `%s | ${biz.name}` },
  description: `${biz.name} — ${biz.category} in ${biz.neighborhood}, Dubai. ${biz.rating}★ rated with ${biz.reviews}+ reviews. ${biz.address}`,
  keywords: [biz.category, `${biz.category} Dubai`, `${biz.category} ${biz.neighborhood}`, biz.name, "beauty salon Dubai"],
  openGraph: { title: `${biz.name} | ${biz.category} in Dubai`, description: `${biz.rating}★ | ${biz.reviews}+ reviews. ${biz.address}`, url: `https://${biz.slug}.vercel.app`, siteName: biz.name, locale: "en_AE", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "BeautySalon", name: biz.name,
    image: biz.imageUrl, url: `https://${biz.slug}.vercel.app`, telephone: `+${biz.phoneRaw}`,
    address: { "@type": "PostalAddress", streetAddress: biz.street, addressLocality: "Dubai", addressRegion: "Dubai", addressCountry: "AE" },
    geo: { "@type": "GeoCoordinates", latitude: biz.lat, longitude: biz.lng },
    aggregateRating: { "@type": "AggregateRating", ratingValue: String(biz.rating), reviewCount: String(biz.reviews), bestRating: "5" },
    openingHoursSpecification: biz.hours.map(h => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.day, opens: "10:00", closes: "22:00" })),
    hasMap: biz.mapsUrl,
  };
  return (
    <html lang="en" className={`${lora.variable} ${raleway.variable} h-full antialiased`}>
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
