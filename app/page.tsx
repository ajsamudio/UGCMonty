import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Stats from "@/components/Stats";
import About from "@/components/About";
import TikTokFeed from "@/components/TikTokFeed";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <LogoBar />
      <Stats />
      <Reveal>
        <About />
      </Reveal>
      <TikTokFeed />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <WhyMe />
      </Reveal>
      <Reveal>
        <InquiryForm />
      </Reveal>
      <Footer />
    </main>
  );
}
