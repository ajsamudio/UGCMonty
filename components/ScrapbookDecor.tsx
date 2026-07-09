/**
 * Scrapbook decor kit — vibrant illustrated stickers + layered background
 * elements (vintage / travel / romantic / girly). Everything is inline SVG,
 * so it ships with the page and stays crisp at any size.
 *
 * All pieces are decorative: keep them aria-hidden and pointer-events-none.
 */

const stickerShadow = {
  filter: "drop-shadow(0 3px 5px rgba(24, 22, 20, 0.28))",
};

type StickerProps = { className?: string };

/* ---------------------------------------------------------------- stickers */

export function SunSticker({ className = "" }: StickerProps) {
  const rays = Array.from({ length: 12 }, (_, i) => (i * Math.PI) / 6);
  return (
    <svg viewBox="0 0 100 100" className={className} style={stickerShadow} aria-hidden="true">
      {rays.map((a, i) => (
        <line
          key={`w${i}`}
          x1={50 + 28 * Math.cos(a)}
          y1={50 + 28 * Math.sin(a)}
          x2={50 + 46 * Math.cos(a)}
          y2={50 + 46 * Math.sin(a)}
          stroke="#fffdf8"
          strokeWidth="13"
          strokeLinecap="round"
        />
      ))}
      {rays.map((a, i) => (
        <line
          key={`c${i}`}
          x1={50 + 28 * Math.cos(a)}
          y1={50 + 28 * Math.sin(a)}
          x2={50 + 44 * Math.cos(a)}
          y2={50 + 44 * Math.sin(a)}
          stroke="#f4a259"
          strokeWidth="7"
          strokeLinecap="round"
        />
      ))}
      <circle cx="50" cy="50" r="27" fill="#fffdf8" />
      <circle cx="50" cy="50" r="22" fill="#f9c74f" />
      <circle cx="43" cy="47" r="2.6" fill="#7a4a1f" />
      <circle cx="57" cy="47" r="2.6" fill="#7a4a1f" />
      <path d="M42 56 Q50 63 58 56" fill="none" stroke="#7a4a1f" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function DaisySticker({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={stickerShadow} aria-hidden="true">
      {Array.from({ length: 8 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 45} 50 50)`}>
          <ellipse cx="50" cy="23" rx="11" ry="20" fill="#ff8fab" stroke="#fffdf8" strokeWidth="5" />
        </g>
      ))}
      <circle cx="50" cy="50" r="15" fill="#f9c74f" stroke="#fffdf8" strokeWidth="5" />
    </svg>
  );
}

export function BowSticker({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 120 90" className={className} style={stickerShadow} aria-hidden="true">
      <g fill="#e85d75" stroke="#fffdf8" strokeWidth="6" strokeLinejoin="round">
        <path d="M58 42 C40 14 14 12 12 32 C10 48 38 54 58 46 Z" />
        <path d="M62 42 C80 14 106 12 108 32 C110 48 82 54 62 46 Z" />
        <path d="M55 48 L42 82 L57 72 Z" />
        <path d="M65 48 L78 82 L63 72 Z" />
      </g>
      <rect x="51" y="34" width="18" height="19" rx="5" fill="#c9445f" stroke="#fffdf8" strokeWidth="5" />
    </svg>
  );
}

export function HeartSticker({ className = "", color = "#e85d75" }: StickerProps & { color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={stickerShadow} aria-hidden="true">
      <path
        d="M50 86 C22 64 9 45 15 31 C20 18 37 15 50 31 C63 15 80 18 85 31 C91 45 78 64 50 86 Z"
        fill={color}
        stroke="#fffdf8"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path d="M30 36 Q33 27 42 26" fill="none" stroke="#fffdf8" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

export function ButterflySticker({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={stickerShadow} aria-hidden="true">
      <g stroke="#fffdf8" strokeWidth="5" strokeLinejoin="round">
        <path d="M48 48 C30 18 6 20 10 40 C13 55 34 58 48 52 Z" fill="#9b5de5" />
        <path d="M52 48 C70 18 94 20 90 40 C87 55 66 58 52 52 Z" fill="#9b5de5" />
        <path d="M48 55 C34 66 16 78 24 86 C32 92 45 76 50 62 Z" fill="#ff8fab" />
        <path d="M52 55 C66 66 84 78 76 86 C68 92 55 76 50 62 Z" fill="#ff8fab" />
      </g>
      <ellipse cx="50" cy="56" rx="4.5" ry="16" fill="#3a352f" />
      <path d="M46 42 Q40 30 34 27 M54 42 Q60 30 66 27" fill="none" stroke="#3a352f" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="42" cy="38" r="3" fill="#fffdf8" opacity="0.9" />
      <circle cx="58" cy="38" r="3" fill="#fffdf8" opacity="0.9" />
    </svg>
  );
}

export function LoveLetterSticker({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 110 82" className={className} style={stickerShadow} aria-hidden="true">
      <rect x="5" y="7" width="100" height="68" rx="7" fill="#fffdf8" stroke="#e85d75" strokeWidth="5" />
      <path d="M9 13 L55 48 L101 13" fill="none" stroke="#e85d75" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M55 70 C46 63 42 57 44 52 C46 48 51 47 55 52 C59 47 64 48 66 52 C68 57 64 63 55 70 Z"
        fill="#d64545"
        stroke="#fffdf8"
        strokeWidth="3"
      />
    </svg>
  );
}

/* ------------------------------------------------------ background pieces */

export function StampSticker({ className = "" }: StickerProps) {
  const perfTop = Array.from({ length: 8 }, (_, i) => 8 + i * 10.6);
  const perfSide = Array.from({ length: 10 }, (_, i) => 8 + i * 10.4);
  return (
    <svg viewBox="0 0 90 110" className={className} style={stickerShadow} aria-hidden="true">
      <rect width="90" height="110" rx="2" fill="#fffdf8" />
      {perfTop.map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="0" r="3.6" fill="#faf5e9" />
          <circle cx={x} cy="110" r="3.6" fill="#faf5e9" />
        </g>
      ))}
      {perfSide.map((y, i) => (
        <g key={i}>
          <circle cx="0" cy={y} r="3.6" fill="#faf5e9" />
          <circle cx="90" cy={y} r="3.6" fill="#faf5e9" />
        </g>
      ))}
      <rect x="9" y="9" width="72" height="92" fill="#5fa8d3" />
      <circle cx="45" cy="42" r="15" fill="#f9c74f" />
      <path d="M14 66 Q26 60 38 66 T62 66 T78 66" fill="none" stroke="#fffdf8" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 76 Q26 70 38 76 T62 76 T78 76" fill="none" stroke="#fffdf8" strokeWidth="3" strokeLinecap="round" />
      <text x="45" y="96" textAnchor="middle" fill="#fffdf8" fontSize="10" letterSpacing="2" fontFamily="monospace">
        PAR AVION
      </text>
    </svg>
  );
}

export function TicketSticker({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 150 62" className={className} style={stickerShadow} aria-hidden="true">
      <rect x="2" y="2" width="146" height="58" rx="9" fill="#f9c74f" stroke="#fffdf8" strokeWidth="4" />
      <circle cx="2" cy="31" r="9" fill="#faf5e9" />
      <circle cx="148" cy="31" r="9" fill="#faf5e9" />
      <line x1="106" y1="8" x2="106" y2="54" stroke="#b25d31" strokeWidth="2" strokeDasharray="4 5" />
      <text x="56" y="30" textAnchor="middle" fill="#7a4a1f" fontSize="13" letterSpacing="3" fontFamily="monospace">
        ADMIT ONE
      </text>
      <text x="56" y="46" textAnchor="middle" fill="#b25d31" fontSize="8" letterSpacing="2" fontFamily="monospace">
        GOLDEN MEMORIES
      </text>
      <text x="127" y="35" textAnchor="middle" fill="#7a4a1f" fontSize="11" fontFamily="monospace">
        №23
      </text>
    </svg>
  );
}

export function Postmark({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="55" fill="none" stroke="#3a6ea5" strokeWidth="3" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="#3a6ea5" strokeWidth="2" strokeDasharray="5 5" />
      <text x="60" y="55" textAnchor="middle" fill="#3a6ea5" fontSize="13" letterSpacing="3" fontFamily="monospace">
        THE BAY
      </text>
      <text x="60" y="74" textAnchor="middle" fill="#3a6ea5" fontSize="10" letterSpacing="2" fontFamily="monospace">
        ★ 2026 ★
      </text>
    </svg>
  );
}

export function PlanePath({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 260 80" className={className} aria-hidden="true">
      <path
        d="M6 70 C60 22 150 74 236 20"
        fill="none"
        stroke="#3a6ea5"
        strokeWidth="2.5"
        strokeDasharray="1 9"
        strokeLinecap="round"
      />
      <g transform="translate(232 4) rotate(14)">
        <path d="M0 12 L26 2 L12 24 L9 15 Z" fill="#3a6ea5" />
        <path d="M9 15 L26 2" stroke="#fffdf8" strokeWidth="1.4" />
      </g>
      <path
        d="M8 72 C5 69 3 66 4 64 C5 62 7 62 8 64 C9 62 11 62 12 64 C13 66 11 69 8 72 Z"
        fill="#e85d75"
      />
    </svg>
  );
}

export function Doily({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke="#d99a9a">
        <circle cx="100" cy="100" r="95" strokeWidth="2" strokeDasharray="2 7" />
        <circle cx="100" cy="100" r="78" strokeWidth="9" strokeDasharray="0.5 17" strokeLinecap="round" />
        <circle cx="100" cy="100" r="58" strokeWidth="1.6" />
        <circle cx="100" cy="100" r="44" strokeWidth="1.6" strokeDasharray="6 6" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------- background */

/**
 * Layered scrapbook background for full-bleed sections. Sits behind content:
 * airmail border, postmarks, flight path, stamps, ticket, doily, hearts and
 * a handwritten note — all soft enough to keep text easy to read.
 */
export function ScrapbookBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* vintage airmail border along the top edge */}
      <div
        className="absolute inset-x-0 top-0 h-2.5 opacity-80"
        style={{
          background:
            "repeating-linear-gradient(45deg, #d64545 0 14px, #fffdf8 14px 28px, #3a6ea5 28px 42px, #fffdf8 42px 56px)",
        }}
      />

      {/* lace doily peeking from the top-right corner */}
      <Doily className="absolute -right-20 -top-24 h-72 w-72 opacity-30 lg:h-96 lg:w-96" />

      {/* dotted flight path drifting across the top */}
      <PlanePath className="absolute left-[16%] top-[9%] w-52 opacity-60 sm:w-64 lg:left-[26%]" />

      {/* rubber-stamp postmarks */}
      <Postmark className="absolute left-[4%] top-[30%] hidden w-28 -rotate-12 opacity-30 lg:block" />
      <Postmark className="absolute bottom-[12%] right-[3%] w-24 rotate-6 opacity-25" />

      {/* postage stamp tucked near the left margin */}
      <StampSticker className="absolute bottom-[30%] left-[2%] hidden w-16 -rotate-6 opacity-90 xl:block" />

      {/* ticket stub in the bottom-left corner */}
      <TicketSticker className="absolute bottom-[6%] left-[4%] hidden w-40 -rotate-6 opacity-95 lg:block" />

      {/* scattered hearts */}
      <HeartSticker className="absolute right-[30%] top-[16%] hidden w-7 rotate-12 opacity-50 md:block" color="#ff8fab" />
      <HeartSticker className="absolute left-[38%] top-[6%] w-5 -rotate-12 opacity-45" color="#c0a0cf" />
      <HeartSticker className="absolute bottom-[22%] right-[16%] hidden w-6 -rotate-6 opacity-45 lg:block" color="#e85d75" />

      {/* handwritten note in the corner */}
      <span className="absolute bottom-[7%] right-[5%] hidden rotate-[-6deg] font-hand text-2xl text-washi-rose opacity-70 lg:block">
        collect moments, not things ♡
      </span>
    </div>
  );
}
