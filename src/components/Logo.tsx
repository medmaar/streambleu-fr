import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 shrink-0 ${className ?? ""}`}
      aria-label="Stream Bleu IPTV France Logo"
    >
      {/*
        Exact Spotify geometry — inverted colors:
        Original Spotify: green circle, black arcs
        Stream Bleu: white circle, purple arcs
        
        The Spotify arcs are angled (tilted ~15° counter-clockwise),
        starting from lower-left, sweeping to upper-right.
        Three arcs, widths: ~65%, ~50%, ~35% of circle diameter
      */}
      <svg
        className="logo-tower"
        width="36"
        height="36"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* White filled circle — same as Spotify green circle */}
        <circle cx="50" cy="50" r="50" fill="white"/>

        {/* Arc 1 — bottom, widest (~70% diameter, 7px stroke equivalent) */}
        <path
          d="M 19 64 C 33 55, 62 53, 81 60"
          stroke="#5a5fcf"
          strokeWidth="7.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Arc 2 — middle (~56% diameter) */}
        <path
          d="M 23 49 C 36 41, 60 39, 77 46"
          stroke="#5a5fcf"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        {/* Arc 3 — top, narrowest (~42% diameter) */}
        <path
          d="M 28 35 C 39 28, 59 27, 73 33"
          stroke="#5a5fcf"
          strokeWidth="6.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <span style={{ fontWeight: 800, fontSize: "19px", lineHeight: 1, letterSpacing: "0.04em" }}>
        <span style={{ color: "#ffffff" }}>STREAM </span>
        <span className="logo-4k">BLEU</span>
      </span>
    </Link>
  );
}
