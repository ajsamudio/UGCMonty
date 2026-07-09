import { reasons } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function WhyMe() {
  return (
    <section className="bg-sand-100 py-24">
      <div className="container-lux">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why work with me</p>
          <h2 className="section-heading mt-3">What you get</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={i} delay={i * 120} variant="zoom" className="flex">
              <div className="card-lift sheen flex flex-1 flex-col rounded-2xl border border-transparent bg-white/70 p-8">
                <h3 className="font-serif text-xl text-ink-900">{r.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-700">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
