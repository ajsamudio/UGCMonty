// =============================================================
// EDIT THIS FILE to swap placeholder content for your own.
// Replace image URLs with files you drop into /public/images.
// =============================================================

export const about = {
  heading: "Hi, I'm Marie",
  photo: "/images/pfp.jpg",
  // About-section carousel. Auto-cycles + left/right controls. Drop more images
  // in /public/images and add them here (match the filename case exactly).
  photos: [
    "/images/pfp.jpg",
    "/images/pfp2.JPG",
    "/images/pfp3.jpg",
    "/images/pfp4.jpg",
    "/images/pfp5.jpg",
    "/images/pfp6.jpg",
  ],
  body: [
    "I'm a Philippines-based UGC creator making content that feels less like an ad and more like a friend showing you something they love — across travel, food, beauty, and the things I make by hand.",
    "From hotel stays and hidden food spots to get-ready-with-me beauty, handmade art, and jewelry styling, I create photos and short-form videos that feel native to TikTok and Instagram — and actually make people want to go, try, and buy.",
    "Brands work with me for content they can own and reuse: authentic, scroll-stopping, and built to perform on the feed.",
  ],
};

const TIKTOK_HANDLE = "herconstellation";

export type TikTokItem = {
  // Group the clip under a portfolio heading, e.g. "Travel".
  category: string;
  // The numeric id at the end of the TikTok URL.
  id: string;
  // Set true for image / slideshow posts (URL has /photo/ instead of /video/).
  photo?: boolean;
};

// Build the canonical TikTok URL for an item.
export function tiktokUrl(item: TikTokItem): string {
  return `https://www.tiktok.com/@${TIKTOK_HANDLE}/${
    item.photo ? "photo" : "video"
  }/${item.id}`;
}

// Curated, REAL TikToks from https://www.tiktok.com/@herconstellation, grouped
// by content pillar. To add one: copy the long number at the end of its URL and
// add a line under the right category (set `photo: true` for /photo/ posts).
export const tiktoks: TikTokItem[] = [
  // ── Travel ───────────────────────────────────────────────────────────────
  { category: "Travel", id: "7599069672952171807" }, // Rome
  { category: "Travel", id: "7631294369273826591" }, // Colorado
  { category: "Travel", id: "7547472762521046302" },
  { category: "Travel", id: "7511909447334169886" },
  { category: "Travel", id: "7247756559843937579" },
  { category: "Travel", id: "7139444094149020974" },
  { category: "Travel", id: "7553778590576315678" },
  { category: "Travel", id: "7596074871818308895" },
  { category: "Travel", id: "7255573282366442798" },
  { category: "Travel", id: "7492872767193337134" },
  { category: "Travel", id: "7502108753177857326", photo: true },
  { category: "Travel", id: "7554526490747079967" },
  { category: "Travel", id: "7553781676896275742" },
  { category: "Travel", id: "7504743357516680490", photo: true },
  { category: "Travel", id: "7557124659322326302", photo: true },
  { category: "Travel", id: "7568233275802635551" },
  { category: "Travel", id: "7597329303453404447" },

  // ── Food & Cooking ─────────────────────────────────────────────────────────
  { category: "Food & Cooking", id: "7311231890042817838" }, // Tinola x Nilaga
  { category: "Food & Cooking", id: "7597976467439389983" }, // Mango bingsu
  { category: "Food & Cooking", id: "7569738059495787806" },
  { category: "Food & Cooking", id: "7584604549705469215" },
  { category: "Food & Cooking", id: "7551880097465109790" },
  { category: "Food & Cooking", id: "7341611773474229547" },
  { category: "Food & Cooking", id: "7517461664220876062" },
  { category: "Food & Cooking", id: "7513608993617595678" },
  { category: "Food & Cooking", id: "7247750400739233070" },
  { category: "Food & Cooking", id: "7594377532074511647" },

  // ── Travel & Festivals ─────────────────────────────────────────────────────
  { category: "Travel & Festivals", id: "7280577017202904363" }, // Eras Tour
  { category: "Travel & Festivals", id: "7510792768927583531" },
  { category: "Travel & Festivals", id: "7281500705981189419" },
  { category: "Travel & Festivals", id: "7311230532728130862" },
  { category: "Travel & Festivals", id: "7273543604935593258" },
  { category: "Travel & Festivals", id: "7560813299755994399" },

  // ── Beauty, Makeup & GRWM ──────────────────────────────────────────────────
  { category: "Beauty & GRWM", id: "7606974854138531103" }, // Kikay
  { category: "Beauty & GRWM", id: "7609867390981033246" }, // 2016 matte
  { category: "Beauty & GRWM", id: "7503696415273733422" },
  { category: "Beauty & GRWM", id: "7555978459785301278" },
  { category: "Beauty & GRWM", id: "7565749008191327519" },
  { category: "Beauty & GRWM", id: "7567198713823726879" },
  { category: "Beauty & GRWM", id: "7573886853246389534" },

  // ── Arts & Jewelry ─────────────────────────────────────────────────────────
  { category: "Arts & Jewelry", id: "7473036109803457838" },
  { category: "Arts & Jewelry", id: "7509305042134928670" },
  { category: "Arts & Jewelry", id: "7515206421894515999" },
  { category: "Arts & Jewelry", id: "7573108990347955486" },
];

export type GalleryItem = {
  title: string;
  location: string;
  // Group this item under a portfolio category heading, e.g. "Luxury Hotels"
  category: string;
  // Poster image — shown as the thumbnail, and as the fallback before a video
  // file exists. Drop files in /public/images and use "/images/your-file.jpg".
  poster: string;
  // OPTIONAL self-hosted vertical (9:16) video. Drop an .mp4 in /public/videos
  // and reference it as "/videos/your-clip.mp4". When omitted, the poster image
  // is shown on its own. When present, it autoplays (muted) on hover.
  video?: string;
};

// Kept for reference / fallback. The live portfolio now renders <TikTokFeed />
// (real TikToks) instead of this stock gallery.
export const gallery: GalleryItem[] = [];

export type Logo = { name: string; src?: string };

// Honest "what I create" row. These are content pillars, not client logos —
// swap to real brand names + logo files (/public/logos) once you have them.
export const logos: Logo[] = [
  { name: "Travel" },
  { name: "Food & Cooking" },
  { name: "Festivals" },
  { name: "Beauty & GRWM" },
  { name: "Arts & Jewelry" },
];

export type Stat = { value: string; label: string };

// Live stats from @herconstellation (snapshot — refresh these as she grows).
export const stats: Stat[] = [
  { value: "1.2K+", label: "TikTok community" },
  { value: "7.6K+", label: "Likes earned" },
  { value: "8.9K", label: "Top video views" },
  { value: "IG · TikTok", label: "Where I create" },
];

export type Service = { title: string; description: string; items: string[] };

export const services: Service[] = [
  {
    title: "Content Day",
    description:
      "A full shoot for your brand, hotel, or restaurant — delivered ready to post.",
    items: [
      "Half or full-day shoot on location",
      "15–25 edited photos",
      "3–5 short-form videos (Reels / TikTok)",
      "Full usage rights for your channels",
    ],
  },
  {
    title: "Creator Collab",
    description: "I create and share a content drop to my audience and yours.",
    items: [
      "Everything in Content Day",
      "Posted to @herconstellation + your channels",
      "Caption & hashtag strategy",
      "Performance recap",
    ],
  },
  {
    title: "Ongoing Partnership",
    description: "Monthly content for brands, hotels, and hospitality groups.",
    items: [
      "Monthly content retainer",
      "Travel, food & beauty coverage",
      "Campaign concepting",
      "Priority booking",
    ],
  },
];

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "The content was stunning and our bookings noticeably picked up the month after. Easy to work with and incredibly professional.",
    name: "Placeholder Name",
    role: "Owner, Boutique Villa",
  },
  {
    quote:
      "Communication was seamless and the deliverables exceeded what we expected. We've already booked a second shoot.",
    name: "Placeholder Name",
    role: "Marketing Manager, Hotel Group",
  },
  {
    quote:
      "Our listing finally looks as premium as the property actually is. Worth every penny.",
    name: "Placeholder Name",
    role: "Superhost, Airbnb",
  },
];
