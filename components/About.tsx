import { about } from "@/lib/content";
import AboutCarousel from "@/components/AboutCarousel";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-sand-50 py-24">
      <div className="container-lux grid items-center gap-12 md:grid-cols-2">
        <Reveal variant="left">
          <AboutCarousel images={about.photos} />
        </Reveal>
        <Reveal variant="right" delay={120}>
          <p className="eyebrow">About</p>
          <h2 className="section-heading mt-3">{about.heading}</h2>
          <div className="mt-6 space-y-4 text-ink-700 leading-relaxed">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
