"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../components/Logo";

const links = [
  { label: "Tarifs",     href: "/pricing" },
  { label: "Chaînes",   href: "/channels-list" },
  { label: "Avis",      href: "/reviews" },
  { label: "Blog",      href: "/blog" },
  { label: "Parrainage",href: "/referral" },
  { label: "Revendeur", href: "/reseller" },
  { label: "Contact",   href: "/contact" },
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
        background: scrolled ? "rgba(74,79,192,0.97)" : "#4a4fc0",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: "1px solid rgba(197,188,245,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[68px] flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors"
              style={{ color: "rgba(255,255,255,0.8)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA — distinct color button */}
        <Link
          href="/free-trial"
          className="hidden md:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
          style={{
            background: "#f5a623",
            color: "#1a1a4e",
            boxShadow: "0 4px 14px rgba(245,166,35,0.4)",
            letterSpacing: "0.02em",
          }}
        >
          Essai Gratuit
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
        >
          <span className={`block h-0.5 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} style={{ background: "#fff" }} />
          <span className={`block h-0.5 rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} style={{ background: "#fff" }} />
          <span className={`block h-0.5 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} style={{ background: "#fff" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-4 pb-5"
          style={{ background: "#4a4fc0", borderColor: "rgba(197,188,245,0.2)" }}
        >
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/free-trial"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl text-sm font-bold text-center"
              style={{ background: "#f5a623", color: "#1a1a4e" }}
            >
              Essai Gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
