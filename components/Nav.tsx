import { siteConfig } from "@/lib/site.config";

const links = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container-lux flex items-center justify-between py-6">
        <a
          href="#top"
          className="font-serif text-xl text-sand-50 tracking-wide drop-shadow"
        >
          {siteConfig.brandName}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-sand-50/90 transition hover:text-sand-50"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-sand-50/40 px-5 py-2 text-sm text-sand-50 transition hover:bg-sand-50 hover:text-ink-900"
        >
          {siteConfig.hero.primaryCta}
        </a>
      </nav>
    </header>
  );
}
