import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 shrink-0 ${className ?? ""}`}
      aria-label="Stream Bleu IPTV France Logo"
    >
      {/* Minimal Eiffel Tower icon */}
      <svg
        className="logo-tower"
        width="28"
        height="36"
        viewBox="0 0 40 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="streambleu-tower-grad"
            x1="20" y1="0" x2="20" y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#C9BEFF" />
          </linearGradient>
        </defs>
        {/* Tower silhouette + arch cutout (evenodd fill rule) */}
        <path
          fillRule="evenodd"
          fill="url(#streambleu-tower-grad)"
          d="M 20 2
             L 23 12
             L 27 22
             L 25 24
             L 28 32
             L 30 34
             L 36 54
             L 4 54
             L 10 34
             L 12 32
             L 15 24
             L 13 22
             L 17 12
             Z
             M 27 54 L 27 44 Q 20 36 13 44 L 13 54 Z"
        />
        {/* Subtle horizontal beam line at first floor */}
        <line
          x1="10" y1="34" x2="30" y2="34"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
        />
        {/* Subtle beam at second floor */}
        <line
          x1="13" y1="22" x2="27" y2="22"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.8"
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
