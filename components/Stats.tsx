import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="bg-ink-900 py-20">
      <div className="container-lux grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-4xl text-sand-50 sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest2 text-sand-300/80">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
