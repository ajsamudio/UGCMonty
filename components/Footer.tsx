import { siteConfig } from "@/lib/site.config";

export default function Footer() {
  const { contact, brandName } = siteConfig;
  return (
    <footer className="bg-ink-900 py-14 text-sand-100">
      <div className="container-lux flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-serif text-xl text-sand-50">{brandName}</p>
          <p className="mt-2 text-sm text-sand-300/70">{siteConfig.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <a href={`mailto:${contact.email}`} className="hover:text-sand-50">
            {contact.email}
          </a>
          <div className="flex gap-5">
            <a href={contact.instagram} className="hover:text-sand-50">
              Instagram
            </a>
            <a href={contact.tiktok} className="hover:text-sand-50">
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="container-lux mt-10 border-t border-sand-300/10 pt-6 text-xs text-sand-300/50">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </div>
    </footer>
  );
}
