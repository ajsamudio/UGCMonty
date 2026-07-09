"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

// Split "1.2K+" into { num: 1.2, suffix: "K+" } so the number can count up.
function parseStat(value: string): { num: number; decimals: number; suffix: string } | null {
  const m = value.match(/^([\d.,]+)(.*)$/);
  if (!m) return null;
  const num = parseFloat(m[1].replace(/,/g, ""));
  if (Number.isNaN(num)) return null;
  const decimals = m[1].includes(".") ? m[1].split(".")[1].length : 0;
  return { num, decimals, suffix: m[2] };
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function CountUp({ value, started }: { value: string; started: boolean }) {
  const parsed = parseStat(value);
  const [display, setDisplay] = useState(parsed ? "0" + parsed.suffix : value);

  useEffect(() => {
    if (!started || !parsed) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const duration = 1600;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const n = parsed.num * easeOut(p);
      setDisplay(n.toFixed(parsed.decimals) + parsed.suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, value]);

  return <>{display}</>;
}

export default function Stats() {
  const ref = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-ink-900 py-20">
      <div className="container-lux grid grid-cols-3 gap-6 sm:gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-4xl text-sand-50 sm:text-5xl">
              <CountUp value={s.value} started={started} />
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
