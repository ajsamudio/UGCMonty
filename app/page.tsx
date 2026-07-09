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
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <Hero />
      <LogoBar />
      <Stats />
      <About />
      <TikTokFeed />
      <Services />
      <WhyMe />
      <Reveal variant="blur">
        <InquiryForm />
      </Reveal>
      <Footer />
    </main>
  );
}
