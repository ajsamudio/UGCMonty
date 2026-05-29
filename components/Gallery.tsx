import Image from "next/image";
import { gallery } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section id="portfolio" className="bg-sand-100 py-24">
      <div className="container-lux">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-heading mt-3">Selected stays</h2>
          <p className="mt-4 text-ink-700">
            A look at recent properties and the content created for them.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent opacity-80" />
                <figcaption className="absolute bottom-0 p-5">
                  <p className="font-serif text-xl text-sand-50">{item.title}</p>
                  <p className="text-sm text-sand-100/80">{item.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
