// =============================================================
// EDIT THIS FILE to swap placeholder content for your own.
// Replace image URLs with files you drop into /public/images.
// =============================================================

export const about = {
  heading: "The face behind the lens",
  // Headshot — replace with /images/headshot.jpg
  photo: "/images/pfp.jpg",
  body: [
    "I'm a travel content creator specializing in high-end hospitality — from luxury hotels and villas to Michelin-starred restaurants and fine dining experiences. Over the past few years I've produced photo and video content that turns world-class stays and meals into scroll-stopping stories.",
    "My work blends creative storytelling with performance: cinematic visuals engineered to increase bookings, fill tables, and strengthen a brand's presence across Instagram and TikTok.",
    "Whether you're a hotel looking to attract high-value guests or a restaurant wanting to build a waitlist, I create content that turns views into reservations.",
  ],
};

export type GalleryItem = {
  title: string;
  location: string;
  image: string;
};

// Replace these with your own stays. Drop files in /public/images and use
// "/images/your-file.jpg" as the image value.
export const gallery: GalleryItem[] = [
  {
    title: "Secret Beach Villa",
    location: "El Nido, Palawan",
    image:
      "https://images.unsplash.com/photo-1695051702427-1c24ce3682e7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "White Beach Retreat",
    location: "Boracay, Aklan",
    image:
      "https://images.unsplash.com/photo-1553195029-754fbd369560?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Island Surf Bungalow",
    location: "Siargao Island",
    image:
      "https://images.unsplash.com/photo-1565565915331-293fd8113954?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Limestone Lagoon Lodge",
    location: "Coron, Palawan",
    image:
      "https://images.unsplash.com/photo-1542533382-b42a59d8bd39?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Chocolate Hills Retreat",
    location: "Bohol",
    image:
      "https://images.unsplash.com/photo-1728042743743-e2a2abf35c47?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Hidden Lagoon Suite",
    location: "El Nido, Palawan",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Sunset Tower Hotel",
    location: "West Hollywood, CA",
    image:
      "https://images.unsplash.com/photo-1711426880957-13e19e350ede?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Plumed Horse",
    location: "Saratoga, CA",
    image:
      "https://images.unsplash.com/photo-1731941465921-eb4285693713?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "El Prado",
    location: "Palo Alto, CA",
    image:
      "https://images.unsplash.com/photo-1759264244746-140bbbc54e1b?auto=format&fit=crop&w=1000&q=80",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "2M+", label: "Total content views" },
  { value: "50+", label: "Properties featured" },
  { value: "8%", label: "Avg. engagement rate" },
  { value: "3", label: "Platforms (IG · TikTok · YT)" },
];

export type Service = { title: string; description: string; items: string[] };

export const services: Service[] = [
  {
    title: "Content Day",
    description: "A full shoot at your property, delivered ready to post.",
    items: [
      "Half or full-day on-site shoot",
      "15–25 edited photos",
      "3–5 short-form videos (Reels / TikTok)",
      "Usage rights for your channels",
    ],
  },
  {
    title: "Social Takeover",
    description: "I create and manage a content drop across platforms.",
    items: [
      "Everything in Content Day",
      "Posted to my audience + yours",
      "Caption & hashtag strategy",
      "Performance recap",
    ],
  },
  {
    title: "Custom Partnership",
    description: "Ongoing content for properties and hotel groups.",
    items: [
      "Monthly content retainer",
      "Multi-property coverage",
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
