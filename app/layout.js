import { Inter, Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://techvisionstore.com'),
  title: { default: 'TechVision Electronics | Smart TVs, CCTV, Laptops & Accessories', template: '%s | TechVision Electronics' },
  description: 'Premium electronics store — Smart TVs, CCTV cameras & installation, quality refurbished laptops, and accessories. Best prices with expert guidance in Ahmedabad.',
  keywords: ['smart tv', 'cctv camera', 'laptop', 'electronics store', 'samsung tv', 'hikvision cctv', 'refurbished laptop', 'ahmedabad electronics'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'TechVision Electronics',
    title: 'TechVision Electronics | Smart TVs, CCTV, Laptops & Accessories',
    description: 'Premium electronics store with the best deals on Smart TVs, CCTV security systems, and quality refurbished laptops.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
