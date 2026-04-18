import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 shrink-0 ${className ?? ""}`} aria-label="Stream Bleu IPTV France Logo">
      <span className="logo-leaf" style={{ display: "inline-flex", alignItems: "center" }}>
        {/* Water drop / stream icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fill="#F96E5B"
            d="M50 5 C50 5, 15 45, 15 62 C15 80.4 31 93 50 93 C69 93 85 80.4 85 62 C85 45 50 5 50 5Z"
          />
          <path
            fill="rgba(255,255,255,0.25)"
            d="M38 55 C35 62 36 72 42 78"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span style={{ fontWeight: 700, fontSize: "20px", lineHeight: 1, letterSpacing: "0.04em" }}>
        <span style={{ color: "#E8F4F5" }}>STREAM </span>
        <span className="logo-4k" style={{ color: "#F96E5B" }}>BLEU</span>
      </span>
    </Link>
  );
}
