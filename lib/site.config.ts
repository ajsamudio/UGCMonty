// =============================================================
// EDIT THIS FILE to personalize your site. No other code needed.
// =============================================================

export const siteConfig = {
  brandName: "Marie Fran",
  tagline: "Travel · Food · Beauty · Arts Creator",

  hero: {
    eyebrow: "UGC Creator · Travel · Food · Beauty · Arts",
    headline: "Content that feels like a friend's recommendation — not an ad.",
    subhead:
      "I'm Marie — a Philippines-based UGC creator making scroll-stopping content across travel, food, beauty, GRWM, and arts & jewelry. The kind that feels native to the feed and actually makes people want to go, try, and buy.",
    primaryCta: "Work with me",
    secondaryCta: "View portfolio",
    backgroundImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80",
  },

  contact: {
    email: "mariefrandev@gmail.com",
    instagram: "https://instagram.com/belovedseastar",
    tiktok: "https://tiktok.com/@herconstellation",
  },
} as const;

export type SiteConfig = typeof siteConfig;
