"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type CelebrateKind = "trial" | "order";

// Full-screen celebration shown after a free-trial request or a plan order.
// Preview without submitting anything: add ?celebrate=trial or ?celebrate=order to any page URL.
const TEXT: Record<CelebrateKind, { title: string; lines: string[]; btn: string }> = {
  trial: {
    title: "Votre essai gratuit est en route !",
    lines: [
      "Nos techniciens ont enfilé leur béret et pédalent comme au Tour de France pour livrer vos identifiants à {email}. 🚴",
      "Ça arrive en général en moins de 2 minutes. Vérifiez votre <b>boîte de réception</b> ET vos <b>spams</b> : notre email est un peu timide et adore se cacher là-dedans.",
      "Votre seule mission pour les 24 prochaines heures : le pop-corn (ou les chips, on ne juge pas). 🍿",
    ],
    btn: "Compris, je file chercher le pop-corn",
  },
  order: {
    title: "Bravo, c’est fait ! Commande passée.",
    lines: [
      "Coup de maître. Votre canapé a été prévenu et il est très fier de vous. 🛋️",
      "Votre facture s’envole vers {email} en ce moment même. Vérifiez votre <b>boîte de réception</b> ET vos <b>spams</b> (nos emails adorent jouer à cache-cache).",
      "Réglez la facture et vos chaînes démarrent plus vite qu’un croissant ne disparaît au petit-déj. 🥐",
    ],
    btn: "Génial, c’est parti !",
  },
};

const BITS = Array.from({ length: 30 }, (_, i) => ({
  x: (i * 37) % 100,
  d: (i % 7) * 0.35,
  t: 3.2 + (i % 5) * 0.5,
  r: (i * 53) % 360,
  emoji: i % 3 ? "" : ["🥐", "🎉", "⭐"][(i / 3) % 3],
}));

function Line({ html, email }: { html: string; email: string }) {
  const [before, after] = html.split("{email}");
  return (
    <p>
      <span dangerouslySetInnerHTML={{ __html: before }} />
      {after !== undefined && (
        <>
          <b>{email}</b>
          <span dangerouslySetInnerHTML={{ __html: after }} />
        </>
      )}
    </p>
  );
}

export default function Celebrate({ kind, email, onClose }: { kind: CelebrateKind; email?: string; onClose?: () => void }) {
  const [open, setOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const goRef = useRef<HTMLButtonElement>(null);
  const xRef = useRef<HTMLButtonElement>(null);
  const c = TEXT[kind];
  const shownEmail = email && email.includes("@") ? email.trim() : "votre adresse email";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open || !mounted) return;
    const back = document.activeElement as HTMLElement | null;
    document.documentElement.classList.add("sb-celebrating");
    goRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        e.preventDefault();
        (document.activeElement === goRef.current ? xRef.current : goRef.current)?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("sb-celebrating");
      back?.focus?.({ preventScroll: true });
    };
  }, [open, mounted]);

  useEffect(() => {
    if (!open && mounted) onClose?.();
  }, [open, mounted, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="sb-celebrate" role="dialog" aria-modal="true" aria-labelledby="sb-celebrate-title">
      <div className="sb-celebrate-bits" aria-hidden="true">
        {BITS.map((b, i) => (
          <i key={i} style={{ "--x": `${b.x}%`, "--d": `${b.d}s`, "--t": `${b.t}s`, "--r": `${b.r}deg` } as React.CSSProperties}>{b.emoji}</i>
        ))}
      </div>
      <div className="sb-celebrate-box">
        <button ref={xRef} className="sb-celebrate-x" type="button" aria-label="Fermer" onClick={() => setOpen(false)}>×</button>
        <svg className="sb-celebrate-mark" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="54" />
          <path d="M36 62 53 79 86 44" />
        </svg>
        <h2 id="sb-celebrate-title">{c.title}</h2>
        {c.lines.map((l, i) => <Line key={i} html={l} email={shownEmail} />)}
        <button ref={goRef} className="sb-submit sb-celebrate-go" type="button" onClick={() => setOpen(false)}>{c.btn}</button>
      </div>
    </div>,
    document.body
  );
}

// Mounted once in the layout: shows the screen when the URL has ?celebrate=trial or ?celebrate=order.
export function CelebratePreview() {
  const [kind, setKind] = useState<CelebrateKind | null>(null);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("celebrate");
    if (q) setKind(q === "order" ? "order" : "trial");
  }, []);
  return kind ? <Celebrate kind={kind} email="vous@exemple.com" onClose={() => setKind(null)} /> : null;
}
