import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Gallery />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <InquiryForm />
      </Reveal>
      <Footer />
    </main>
  );
}
