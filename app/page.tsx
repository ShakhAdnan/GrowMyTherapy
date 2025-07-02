import About from "@/components/about";
import Hero from "@/components/hero";
import ContentSection from "@/components/content";
import ServiceSection from "@/components/service";
import Fee from "@/components/Fee";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ContentSection />
      <ServiceSection />
      <Fee />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}
