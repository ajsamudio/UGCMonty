import Image from "next/image";
import { logos } from "@/lib/content";

export default function LogoBar() {
  if (logos.length === 0) return null;

  return (
    <section className="border-y border-ink-900/10 bg-sand-50 py-10">
      <div className="container-lux">
        <p className="text-center text-xs uppercase tracking-widest2 text-ink-700/60">
          What I create
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <li
              key={logo.name}
              className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <span className="font-serif text-xl text-ink-800 sm:text-2xl">
                  {logo.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
