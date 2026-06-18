import { siteConfig } from "@/lib/site.config";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.5 3c.31 2.06 1.62 3.74 3.83 3.96v2.43c-1.28 0-2.56-.4-3.83-1.13v6.86c0 3.49-2.86 6.3-6.36 5.9-2.95-.33-4.97-2.66-4.97-5.39 0-3.04 2.5-5.42 5.5-5.2.39.03.78.1 1.16.21v2.62c-.37-.12-.76-.18-1.16-.18-1.52 0-2.78 1.27-2.69 2.81.08 1.38 1.28 2.49 2.66 2.49 1.53 0 2.77-1.24 2.77-2.77V3h2.99z" />
    </svg>
  );
}

type Props = {
  className?: string;
  iconClassName?: string;
};

export default function SocialLinks({
  className = "",
  iconClassName = "h-5 w-5",
}: Props) {
  const { contact } = siteConfig;
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={contact.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="transition hover:opacity-70"
      >
        <InstagramIcon className={iconClassName} />
      </a>
      <a
        href={contact.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="transition hover:opacity-70"
      >
        <TikTokIcon className={iconClassName} />
      </a>
    </div>
  );
}
