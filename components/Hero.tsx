import Image from "next/image";
import { siteConfig } from "@/lib/site.config";

export default function Hero() {
  const { hero } = siteConfig;
  return (
    <section id="top" className="relative flex min-h-screen items-center">
      <Image
        src={hero.backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/40 to-ink-900/70" />
      <div className="hero-in container-lux relative z-10 pt-24">
        <p className="eyebrow text-accent/90">{hero.eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-sand-50 sm:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base text-sand-100/90 sm:text-lg">
          {hero.subhead}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary bg-sand-50 text-ink-900 hover:bg-sand-200">
            {hero.primaryCta}
          </a>
          <a
            href="#portfolio"
            className="btn-outline border-sand-50/50 text-sand-50 hover:bg-sand-50 hover:text-ink-900"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
