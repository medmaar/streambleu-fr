import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 shrink-0 ${className ?? ""}`}
      aria-label="Stream Bleu IPTV France Logo"
    >
      <svg
        className="logo-tower"
        width="30"
        height="42"
        viewBox="0 0 60 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sb-flag" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#a8c0ff" />
            <stop offset="38%"  stopColor="#ffffff" />
            <stop offset="62%"  stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffb3c1" />
          </linearGradient>
        </defs>

        {/* Spire */}
        <line x1="30" y1="2"  x2="30" y2="14" stroke="url(#sb-flag)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Spire platform */}
        <line x1="25" y1="14" x2="35" y2="14" stroke="url(#sb-flag)" strokeWidth="1.6" strokeLinecap="round"/>
        {/* Upper body */}
        <line x1="27" y1="14" x2="20" y2="32" stroke="url(#sb-flag)" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="33" y1="14" x2="40" y2="32" stroke="url(#sb-flag)" strokeWidth="1.8" strokeLinecap="round"/>
        {/* 2nd floor */}
        <line x1="18" y1="32" x2="42" y2="32" stroke="url(#sb-flag)" strokeWidth="2"   strokeLinecap="round"/>
        {/* Middle outer */}
        <line x1="18" y1="32" x2="11" y2="53" stroke="url(#sb-flag)" strokeWidth="2"   strokeLinecap="round"/>
        <line x1="42" y1="32" x2="49" y2="53" stroke="url(#sb-flag)" strokeWidth="2"   strokeLinecap="round"/>
        {/* Middle inner */}
        <line x1="20" y1="32" x2="17" y2="53" stroke="url(#sb-flag)" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="40" y1="32" x2="43" y2="53" stroke="url(#sb-flag)" strokeWidth="1.2" strokeLinecap="round"/>
        {/* 1st floor */}
        <line x1="9"  y1="53" x2="51" y2="53" stroke="url(#sb-flag)" strokeWidth="2.2" strokeLinecap="round"/>
        {/* Legs outer */}
        <path d="M 11,53 C 10,60 6,68 4,78"  stroke="url(#sb-flag)" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        <path d="M 49,53 C 50,60 54,68 56,78" stroke="url(#sb-flag)" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        {/* Legs inner */}
        <path d="M 17,53 C 16,60 14,68 18,78" stroke="url(#sb-flag)" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        <path d="M 43,53 C 44,60 46,68 42,78" stroke="url(#sb-flag)" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        {/* Main arch */}
        <path d="M 4,78 Q 30,63 56,78"  stroke="url(#sb-flag)" strokeWidth="2"   fill="none" strokeLinecap="round"/>
        {/* Inner arch */}
        <path d="M 18,78 Q 30,67 42,78" stroke="url(#sb-flag)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        {/* Ground */}
        <line x1="2" y1="81" x2="58" y2="81" stroke="url(#sb-flag)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
        {/* Structural braces */}
        <line x1="11" y1="60" x2="17" y2="56" stroke="url(#sb-flag)" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="49" y1="60" x2="43" y2="56" stroke="url(#sb-flag)" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="8"  y1="70" x2="18" y2="64" stroke="url(#sb-flag)" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="52" y1="70" x2="42" y2="64" stroke="url(#sb-flag)" strokeWidth="0.8" strokeOpacity="0.5"/>
      </svg>

      {/* Title unchanged */}
      <span style={{ fontWeight: 800, fontSize: "19px", lineHeight: 1, letterSpacing: "0.04em" }}>
        <span style={{ color: "#ffffff" }}>STREAM </span>
        <span className="logo-4k">BLEU</span>
      </span>
    </Link>
  );
}
