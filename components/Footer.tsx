import { siteConfig } from "@/lib/site.config";
import SocialLinks from "./SocialLinks";

const explore = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const { contact, brandName, tagline } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-sand-100">
      {/* Faint celestial glow at the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-56 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      {/* Gold hairline divider with a centered constellation mark */}
      <div className="container-lux relative pt-16">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/40" />
          <span className="text-sm text-accent/70" aria-hidden="true">
            ✦
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/40" />
        </div>
      </div>

      <div className="container-lux relative grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <p className="font-serif text-2xl text-sand-50">{brandName}</p>
          <p className="mt-3 text-sm text-sand-300/70">{tagline}</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand-300/60">
            Content that feels like a friend&apos;s recommendation — across
            travel, food, beauty &amp; the things I make by hand.
          </p>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <p className="text-xs uppercase tracking-widest2 text-accent/80">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {explore.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sand-300/70 transition-colors duration-300 hover:text-sand-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Get in touch */}
        <div>
          <p className="text-xs uppercase tracking-widest2 text-accent/80">
            Get in touch
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-5 block text-sm text-sand-300/70 transition-colors duration-300 hover:text-sand-50"
          >
            {contact.email}
          </a>
          <SocialLinks
            variant="button"
            className="mt-6"
            iconClassName="h-[18px] w-[18px]"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-lux relative border-t border-sand-300/10 py-7">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-sand-300/50 sm:flex-row">
          <p>
            © {year} {brandName}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-sand-300/60 transition-colors duration-300 hover:text-sand-50"
          >
            Back to top
            <span className="grid h-6 w-6 place-items-center rounded-full border border-sand-300/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
