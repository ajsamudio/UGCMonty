import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-sand-100 py-24">
      <div className="container-lux">
        <div className="max-w-2xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-heading mt-3">What partners say</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-2xl bg-white/70 p-8"
            >
              <p className="font-serif text-lg leading-relaxed text-ink-800">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="text-sm font-medium text-ink-900">{t.name}</p>
                <p className="text-sm text-ink-700">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
