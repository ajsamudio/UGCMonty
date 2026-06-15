"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

// Time each photo stays on screen before auto-advancing.
const SLIDE_MS = 5000;

export default function AboutCarousel({ images }: { images: string[] }) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (to: number) => setIndex((i) => (to + count) % count),
    [count]
  );

  // Don't auto-cycle for visitors who prefer reduced motion.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  // Auto-advance. Re-runs on every index change, so using the arrows/dots also
  // resets the timer — each photo always gets the full interval.
  useEffect(() => {
    if (reducedMotion || paused || count <= 1) return;
    const t = setTimeout(() => go(index + 1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, reducedMotion, paused, count, go]);

  if (count === 0) return null;

  return (
    <div
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink-900"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Marie — photo ${i + 1}`}
          fill
          priority={i === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i === index ? undefined : true}
        />
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(index - 1)}
            className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-ink-900/40 text-sand-50 backdrop-blur-sm transition hover:bg-ink-900/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-50"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(index + 1)}
            className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-ink-900/40 text-sand-50 backdrop-blur-sm transition hover:bg-ink-900/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-50"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index
                    ? "bg-sand-50"
                    : "bg-sand-50/40 hover:bg-sand-50/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
