import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Hours />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
