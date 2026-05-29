// =============================================================
// EDIT THIS FILE to personalize your site. No other code needed.
// =============================================================

export const siteConfig = {
  // Your brand. Change to your name or a studio name, e.g. "High-End Stays Co."
  brandName: "Monty's Stays",
  // Short tag shown under the logo / in the browser tab
  tagline: "Luxury Travel UGC & Content Strategy",

  // The hero — the first thing a hotel sees. Sell what you do FOR them.
  hero: {
    eyebrow: "UGC Creator · Hospitality Content",
    headline: "Content that turns luxury stays into fully booked calendars.",
    subhead:
      "I create scroll-stopping photo and video content for hotels, villas, and boutique properties — the kind that drives bookings, lifts occupancy, and makes your space impossible to scroll past.",
    primaryCta: "Work with me",
    secondaryCta: "View portfolio",
    // Background image (swap with your own in /public/images/hero.jpg later)
    backgroundImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80",
  },

  // Contact details shown in the footer
  contact: {
    email: "ajayyys3@gmail.com",
    instagram: "https://instagram.com/yourhandle",
    tiktok: "https://tiktok.com/@yourhandle",
  },
} as const;

export type SiteConfig = typeof siteConfig;
