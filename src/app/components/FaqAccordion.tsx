"use client";
import { useState } from "react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-2xl border overflow-hidden transition-colors"
          style={{
            borderColor: open === i ? "rgba(90,95,207,0.38)" : "rgba(255,255,255,0.07)",
            background: open === i ? "rgba(90,95,207,0.05)" : "rgba(255,255,255,0.03)",
          }}>
          <button className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}>
            <span className="font-semibold text-white text-sm md:text-base leading-snug">{item.q}</span>
            <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all duration-300"
              style={{ background: open === i ? "#5a5fcf" : "rgba(255,255,255,0.08)", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
              +
            </span>
          </button>
          <div className="px-5 pb-5" hidden={open !== i}>
            <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
