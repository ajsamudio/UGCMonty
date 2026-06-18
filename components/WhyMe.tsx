import { reasons } from "@/lib/content";

export default function WhyMe() {
  return (
    <section className="bg-sand-100 py-24">
      <div className="container-lux">
        <div className="max-w-2xl">
          <p className="eyebrow">Why work with me</p>
          <h2 className="section-heading mt-3">What you get</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl bg-white/70 p-8"
            >
              <h3 className="font-serif text-xl text-ink-900">{r.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-700">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
