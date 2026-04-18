import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 shrink-0 ${className ?? ""}`}
      aria-label="Stream Bleu IPTV France Logo"
    >
      {/* Inverted Spotify-style icon: white circle, blue/purple wave bars inside */}
      <svg
        className="logo-tower"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* White filled circle */}
        <circle cx="18" cy="18" r="18" fill="white"/>

        {/* Three streaming wave arcs — purple/blue on white, like Spotify but with streaming feel */}
        {/* Bottom arc (widest) */}
        <path
          d="M 8 24 Q 18 18 28 24"
          stroke="#5a5fcf"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Middle arc */}
        <path
          d="M 10.5 19 Q 18 13.5 25.5 19"
          stroke="#5a5fcf"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Top arc (narrowest) */}
        <path
          d="M 13 14 Q 18 9.5 23 14"
          stroke="#5a5fcf"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Centre dot */}
        <circle cx="18" cy="27.5" r="2.2" fill="#5a5fcf"/>
      </svg>

      <span style={{ fontWeight: 800, fontSize: "19px", lineHeight: 1, letterSpacing: "0.04em" }}>
        <span style={{ color: "#ffffff" }}>STREAM </span>
        <span className="logo-4k">BLEU</span>
      </span>
    </Link>
  );
}
