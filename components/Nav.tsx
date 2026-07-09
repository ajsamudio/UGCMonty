"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site.config";
import SocialLinks from "./SocialLinks";

const links = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  // Transparent over the hero; frosted light bar with dark text after scrolling.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const text = scrolled ? "text-ink-900" : "text-sand-50";
  const textSoft = scrolled ? "text-ink-700/80" : "text-sand-50/90";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-sand-50/85 shadow-[0_1px_24px_rgba(24,22,20,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`container-lux flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-3.5" : "py-6"
        }`}
      >
        <a
          href="#top"
          className={`font-serif text-xl tracking-wide transition-colors duration-500 ${text} ${
            scrolled ? "" : "drop-shadow"
          }`}
        >
          {siteConfig.brandName}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link text-sm transition-colors duration-500 ${
                  scrolled
                    ? "text-ink-700/80 hover:text-ink-900"
                    : "text-sand-50/90 hover:text-sand-50"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <SocialLinks
            className={`hidden sm:flex transition-colors duration-500 ${textSoft}`}
            iconClassName="h-5 w-5"
          />
          <a
            href="#contact"
            className={`rounded-full border px-5 py-2 text-sm transition-all duration-500 ${
              scrolled
                ? "border-ink-900/30 text-ink-900 hover:bg-ink-900 hover:text-sand-50"
                : "border-sand-50/40 text-sand-50 hover:bg-sand-50 hover:text-ink-900"
            }`}
          >
            {siteConfig.hero.primaryCta}
          </a>
        </div>
      </nav>
    </header>
  );
}
