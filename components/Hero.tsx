import Image from "next/image";
import { siteConfig } from "@/lib/site.config";
import SocialLinks from "./SocialLinks";

// Fixed star positions (percentages) so the field is stable across renders.
const STARS = [
  { top: 12, left: 8, size: 3, dur: 3.8, delay: 0.2, max: 0.9 },
  { top: 22, left: 78, size: 2, dur: 4.6, delay: 1.1, max: 0.7 },
  { top: 8, left: 55, size: 2, dur: 5.2, delay: 0.6, max: 0.8 },
  { top: 35, left: 90, size: 3, dur: 4.2, delay: 2.0, max: 0.9 },
  { top: 55, left: 6, size: 2, dur: 5.6, delay: 1.6, max: 0.6 },
  { top: 70, left: 84, size: 2, dur: 4.9, delay: 0.9, max: 0.7 },
  { top: 18, left: 32, size: 2, dur: 6.1, delay: 2.4, max: 0.6 },
  { top: 62, left: 46, size: 2, dur: 5.4, delay: 3.1, max: 0.5 },
  { top: 42, left: 68, size: 3, dur: 4.4, delay: 1.9, max: 0.8 },
  { top: 80, left: 22, size: 2, dur: 5.8, delay: 0.4, max: 0.6 },
];

export default function Hero() {
  const { hero } = siteConfig;
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="kenburns absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/40 to-ink-900/70" />

      {/* Twinkling constellation accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="star"
            style={
              {
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: `${s.size * 2}px`,
                height: `${s.size * 2}px`,
                "--tw-dur": `${s.dur}s`,
                "--tw-delay": `${s.delay}s`,
                "--tw-max": s.max,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

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
        <div className="mt-8 flex items-center gap-4">
          <span className="eyebrow text-sand-100/70">Follow along</span>
          <SocialLinks className="text-sand-50" iconClassName="h-6 w-6" />
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="scroll-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sand-50/80 hover:text-sand-50"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
