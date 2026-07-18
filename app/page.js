import HeroSection from '@/components/sections/HeroSection';
import BrandsMarquee from '@/components/sections/BrandsMarquee';
import CategoriesSection from '@/components/sections/CategoriesSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import PromoBanner from '@/components/sections/PromoBanner';
import DealsSection from '@/components/sections/DealsSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandsMarquee />
      <CategoriesSection />
      <FeaturedProducts />
      <PromoBanner />
      <DealsSection />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
