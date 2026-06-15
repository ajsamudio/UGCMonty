import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-sand-50 py-24">
      <div className="container-lux">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="section-heading mt-3">How we can work together</h2>
          <p className="mt-4 text-ink-700">
            Flexible packages for travel, food, and beauty brands — plus hotels,
            restaurants, and hospitality groups.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="flex flex-col rounded-2xl border border-sand-200 bg-white/60 p-8"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
