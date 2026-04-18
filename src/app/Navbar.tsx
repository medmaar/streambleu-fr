"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../components/Logo";

const links = [
  { label: "Tarifs", href: "/pricing" },
  { label: "Chaînes", href: "/channels-list" },
  { label: "Avis", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Parrainage", href: "/referral" },
  { label: "Revendeur", href: "/reseller" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(99,103,255,0.97)" : "#6367FF",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: "2px solid rgba(201,190,255,0.35)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[68px] flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: "#C9BEFF" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors" style={{ color: "#C9BEFF" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFDBFD")}
              onMouseLeave={e => (e.currentTarget.style.color = "#C9BEFF")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/free-trial"
          className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-2.5 rounded-xl transition-all"
          style={{ background: "#6367FF", boxShadow: "0 4px 18px rgba(99,103,255,0.45)", letterSpacing: "0.02em" }}
        >
          Essai Gratuit
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
        >
          <span className={`block h-0.5 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} style={{ background: "#FFDBFD" }} />
          <span className={`block h-0.5 rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} style={{ background: "#FFDBFD" }} />
          <span className={`block h-0.5 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} style={{ background: "#FFDBFD" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-4 pb-5"
          style={{ background: "#6367FF", borderColor: "rgba(201,190,255,0.25)" }}
        >
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{ color: "#C9BEFF" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/free-trial"
              onClick={() => setOpen(false)}
              className="mt-2 text-white px-4 py-3 rounded-xl text-sm font-bold text-center"
              style={{ background: "#6367FF" }}
            >
              Essai Gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
