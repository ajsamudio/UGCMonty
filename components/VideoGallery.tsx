"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gallery, type GalleryItem } from "@/lib/content";
import Reveal from "@/components/Reveal";

// Preserve the order categories first appear in the content array.
function groupByCategory(items: GalleryItem[]): [string, GalleryItem[]][] {
  const map = new Map<string, GalleryItem[]>();
  for (const item of items) {
    const cat = item.category ?? "Other";
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(item);
  }
  return Array.from(map.entries());
}

export default function VideoGallery() {
  const categories = groupByCategory(gallery);

  return (
    <section id="portfolio" className="bg-sand-100 py-24">
      <div className="container-lux">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-heading mt-3">Selected work</h2>
          <p className="mt-4 text-ink-700">
            Short-form video and stills created for properties across categories.
            Hover any clip to preview.
          </p>
        </Reveal>

        {categories.map(([category, items]) => (
          <div key={category} className="mt-16">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <p className="eyebrow">{category}</p>
                <div className="h-px flex-1 bg-ink-900/10" />
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {items.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <VideoCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoCard({ item }: { item: GalleryItem }) {
  const figureRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [canMotion, setCanMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    setCanMotion(mq.matches);
    const onChange = () => setCanMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const el = figureRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px 15% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const showVideo = Boolean(item.video) && inView && canMotion;

  function handleEnter() {
    const v = videoRef.current;
    if (!v || !showVideo) return;
    void v.play().catch(() => {});
  }

  function handleLeave() {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }

  return (
    <figure
      ref={figureRef}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-ink-900"
    >
      {showVideo ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster={item.poster}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        >
          <source src={item.video} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={item.poster}
          alt={`${item.title} — ${item.location}`}
          fill
          sizes="(max-width: 640px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent opacity-80" />
      <figcaption className="absolute bottom-0 p-4">
        <p className="font-serif text-lg text-sand-50">{item.title}</p>
        <p className="text-sm text-sand-100/80">{item.location}</p>
      </figcaption>
    </figure>
  );
}
