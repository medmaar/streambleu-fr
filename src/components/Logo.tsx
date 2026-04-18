import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 shrink-0 ${className ?? ""}`}
      aria-label="Stream Bleu IPTV France Logo"
    >
      {/* Solid filled Eiffel Tower silhouette — same as favicon */}
      <svg
        className="logo-tower"
        width="28"
        height="38"
        viewBox="0 0 40 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          fill="white"
          opacity="0.95"
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
      </svg>

      {/* Title unchanged */}
      <span style={{ fontWeight: 800, fontSize: "19px", lineHeight: 1, letterSpacing: "0.04em" }}>
        <span style={{ color: "#ffffff" }}>STREAM </span>
        <span className="logo-4k">BLEU</span>
      </span>
    </Link>
  );
}
