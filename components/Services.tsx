import { services } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-sand-50 py-24">
      <div className="container-lux">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="section-heading mt-3">How we can work together</h2>
          <p className="mt-4 text-ink-700">
            Flexible packages for travel, food, and beauty brands — plus hotels,
            restaurants, and hospitality groups.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 120} className="flex">
              <div className="card-lift sheen flex flex-1 flex-col rounded-2xl border border-sand-200 bg-white/60 p-8">
                <h3 className="font-serif text-2xl text-ink-900">{svc.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{svc.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink-700">
                  {svc.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-outline mt-8 self-start">
                  Enquire
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
