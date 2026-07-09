import Image from "next/image";
import { logos } from "@/lib/content";

function PillarRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex flex-none items-center gap-x-14 pr-14"
    >
      {logos.map((logo) => (
        <li key={logo.name} className="flex flex-none items-center gap-x-14">
          {logo.src ? (
            <Image
              src={logo.src}
              alt={hidden ? "" : logo.name}
              width={120}
              height={36}
              className="h-8 w-auto object-contain opacity-70"
            />
          ) : (
            <span className="font-serif text-xl text-ink-800/70 sm:text-2xl">
              {logo.name}
            </span>
          )}
          <span className="text-accent/60" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function LogoBar() {
  if (logos.length === 0) return null;

  return (
    <section className="border-y border-ink-900/10 bg-sand-50 py-10">
      <p className="text-center text-xs uppercase tracking-widest2 text-ink-700/60">
        What I create
      </p>
      {/* Edge-faded infinite marquee; pauses on hover. Second row is a
          duplicate purely for the seamless loop. */}
      <div
        className="marquee mt-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="marquee-track">
          <PillarRow />
          <PillarRow hidden />
          <PillarRow hidden />
          <PillarRow hidden />
        </div>
      </div>
    </section>
  );
}
