import Image from "next/image";
import { siteConfig } from "@/lib/site.config";
import SocialLinks from "./SocialLinks";
import {
  ScrapbookBackground,
  SunSticker,
  DaisySticker,
  BowSticker,
  ButterflySticker,
  LoveLetterSticker,
} from "./ScrapbookDecor";

export default function Hero() {
  const { hero } = siteConfig;
  return (
    <section
      id="top"
      className="paper relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Layered vintage-travel scrapbook backdrop */}
      <ScrapbookBackground />

      {/* Stickers pinned to the page itself */}
      <DaisySticker className="absolute left-[5%] top-[15%] z-10 h-14 w-14 -rotate-12 sm:h-16 sm:w-16" />
      <BowSticker className="absolute bottom-[13%] left-[10%] z-10 hidden h-14 w-16 rotate-6 sm:block" />

      <div className="hero-in container-lux relative z-10 grid items-center gap-12 pb-16 pt-28 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
        {/* ---- Diary text column ---- */}
        <div className="order-2 lg:order-1">
          <span className="tape-label -rotate-2">{hero.eyebrow}</span>

          <h1 className="mt-6 max-w-2xl font-hand text-6xl leading-[0.95] text-ink-900 sm:text-7xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700 sm:text-lg">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="btn-primary rotate-[-1deg] shadow-md hover:rotate-0"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#portfolio"
              className="btn-outline rotate-[1deg] hover:rotate-0"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="font-hand text-xl text-ink-700">find me here →</span>
            <SocialLinks className="text-ink-800" iconClassName="h-6 w-6" />
          </div>
        </div>

        {/* ---- Taped polaroid of the client (blown up on desktop) ---- */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="polaroid w-[280px] rotate-2 sm:w-[340px] lg:w-[460px] xl:w-[500px]">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={hero.backgroundImage}
                  alt="Marie on location"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 500px"
                  className="object-cover"
                />
              </div>
              <p className="polaroid-caption">the bay ☀︎</p>

              {/* washi tape holding the photo to the page */}
              <span className="tape -left-4 top-6 -rotate-[28deg]" aria-hidden="true" />
              <span
                className="tape tape-sky -right-5 top-8 rotate-[24deg]"
                aria-hidden="true"
              />
            </div>

            {/* vibrant sticker accents around the photo */}
            <SunSticker className="absolute -right-7 -top-8 h-16 w-16 rotate-12 lg:h-24 lg:w-24" />
            <LoveLetterSticker className="absolute -bottom-6 -left-8 h-14 w-[4.5rem] -rotate-6 lg:h-16 lg:w-20" />
            <ButterflySticker className="absolute -left-10 top-[38%] hidden h-14 w-14 -rotate-12 lg:block lg:h-16 lg:w-16" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="scroll-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-hand text-ink-700/80 hover:text-ink-900"
      >
        <span className="text-lg">keep reading</span>
        <svg
          viewBox="0 0 24 24"
          className="mx-auto mt-1 h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
