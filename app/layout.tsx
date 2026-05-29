import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site.config";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
  description: siteConfig.hero.subhead,
  openGraph: {
    title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    description: siteConfig.hero.subhead,
    type: "website",
    images: [siteConfig.hero.backgroundImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
