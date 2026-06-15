"use client";

import { useState } from "react";
import Image from "next/image";
import meta from "@/lib/tiktok-meta.json";
import { tiktoks, tiktokUrl, type TikTokItem } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";
import Reveal from "@/components/Reveal";

type Meta = Record<string, { title?: string; thumb?: boolean }>;
const META = meta as Meta;

// Preserve the order categories first appear in the content array.
function groupByCategory(items: TikTokItem[]): [string, TikTokItem[]][] {
  const map = new Map<string, TikTokItem[]>();
  for (const item of items) {
    if (!map.has(item.category)) map.set(item.category, []);
    map.get(item.category)!.push(item);
  }
  return Array.from(map.entries());
}

export default function TikTokFeed() {
  const categories = groupByCategory(tiktoks);

  return (
    <section id="portfolio" className="bg-sand-100 py-24">
      <div className="container-lux">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-heading mt-3">Real content, straight from my feed</h2>
          <p className="mt-4 text-ink-700">
            My work across travel, food, beauty, GRWM, and arts &amp; jewelry —
            pulled from{" "}
            <a
              href={siteConfig.contact.tiktok}
              target="_blank"
              rel="noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              @herconstellation
            </a>
            . Tap any clip to play.
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
                <Reveal key={item.id} delay={i * 60}>
                  <FacadeCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// A lightweight poster + play button. The heavy TikTok player iframe is only
// mounted after the visitor clicks — so the page loads fast and nothing
// autoplays. Photo posts (no inline player) open on TikTok instead.
function FacadeCard({ item }: { item: TikTokItem }) {
  const [playing, setPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);
  const url = tiktokUrl(item);
  const info = META[item.id] ?? {};
  const title = info.title?.trim();
  const hasThumb = Boolean(info.thumb) && !imgError;

  if (playing && !item.photo) {
    return (
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-ink-900">
        <iframe
          src={`https://www.tiktok.com/player/v1/${item.id}?autoplay=1&description=0&music_info=0&rel=0`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          title={title || "TikTok video"}
        />
      </div>
    );
  }

  const cls =
    "group relative block aspect-[9/16] w-full overflow-hidden rounded-xl bg-ink-900 text-left";

  const inner = (
    <>
      {hasThumb ? (
        <Image
          src={`/images/thumbs/${item.id}.jpg`}
          alt={title || "TikTok"}
          fill
          sizes="(max-width: 640px) 50vw, 33vw"
          onError={() => setImgError(true)}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-ink-700 to-ink-900">
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10 text-sand-50/40"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16.5 5.4c-1-.7-1.6-1.8-1.7-3.1V2h-2.7v11.6a2.3 2.3 0 11-1.6-2.2V8.6a5 5 0 104.3 5V8.3a6.3 6.3 0 003.7 1.2V6.8c-.8 0-1.5-.2-2-.5z" />
          </svg>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/75 via-transparent to-transparent opacity-90" />

      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-ink-900/45 text-sand-50 backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-ink-900/65">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 translate-x-[1px]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      {item.photo && (
        <span className="absolute right-2 top-2 rounded-full bg-ink-900/60 px-2 py-0.5 text-[10px] uppercase tracking-widest2 text-sand-50">
          Photo
        </span>
      )}

      {title && (
        <p className="absolute inset-x-0 bottom-0 line-clamp-2 p-3 text-xs text-sand-50/90">
          {title}
        </p>
      )}
    </>
  );

  if (item.photo) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={cls}
        aria-label={`View photo post on TikTok${title ? `: ${title}` : ""}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={cls}
      aria-label={`Play TikTok${title ? `: ${title}` : ""}`}
    >
      {inner}
    </button>
  );
}
