import Image from "next/image";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-sand-50 py-24">
      <div className="container-lux grid items-center gap-12 md:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src={about.photo}
            alt="Portrait"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-heading mt-3">{about.heading}</h2>
          <div className="mt-6 space-y-4 text-ink-700 leading-relaxed">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
