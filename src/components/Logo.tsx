import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 shrink-0 ${className ?? ""}`}
      aria-label="Stream Bleu IPTV France Logo"
    >
      {/* Spotify-style streaming waves icon — purple/blue brand colors */}
      <svg
        className="logo-tower"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sb-circle" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#8494FF"/>
            <stop offset="100%" stopColor="#6367FF"/>
          </linearGradient>
        </defs>

        {/* Circle background */}
        <circle cx="17" cy="17" r="17" fill="url(#sb-circle)"/>

        {/* 3 Spotify-style signal waves radiating from bottom-left origin */}
        {/* Wave 1 — smallest, top */}
        <path
          d="M 8 12 Q 16 8.5 25 11.5"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Wave 2 — medium */}
        <path
          d="M 7 17.5 Q 16 13 26.5 16.5"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Wave 3 — largest, bottom */}
        <path
          d="M 6.5 23 Q 16 17.5 27.5 21.5"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Brand name */}
      <span style={{ fontWeight: 800, fontSize: "19px", lineHeight: 1, letterSpacing: "0.04em" }}>
        <span style={{ color: "#ffffff" }}>STREAM </span>
        <span className="logo-4k">BLEU</span>
      </span>
    </Link>
  );
}
