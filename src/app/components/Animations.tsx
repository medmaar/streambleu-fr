"use client";
import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    // ── SCROLL REVEAL ──
    // Key fix: only add ma-init to elements BELOW the visible viewport
    // so above-fold content is never hidden, preventing the white flash
    const isHeavyPage = window.location.pathname.includes("channels-list");
    let observer: IntersectionObserver | null = null;

    if (!isHeavyPage) {
      const vhThreshold = window.innerHeight * 1.1;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.transitionDelay = "";
              entry.target.classList.add("ma-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
      );

      // Use requestAnimationFrame to ensure DOM is painted first
      requestAnimationFrame(() => {
        const els = document.querySelectorAll<HTMLElement>(
          "section > div, .plan-card, article > div"
        );

        els.forEach((el, i) => {
          const rect = el.getBoundingClientRect();
          // Only hide elements that are below the viewport — never above-fold
          if (rect.top > vhThreshold) {
            if (!el.classList.contains("ma-init")) {
              el.classList.add("ma-init");
              el.style.transitionDelay = `${(i % 4) * 0.06}s`;
              observer?.observe(el);
            }
          }
        });

        // Also watch newly-scrolled elements
        const allSections = document.querySelectorAll<HTMLElement>("section");
        allSections.forEach((sec) => {
          const rect = sec.getBoundingClientRect();
          if (rect.top > vhThreshold && !sec.classList.contains("ma-init")) {
            sec.classList.add("ma-init");
            observer?.observe(sec);
          }
        });
      });
    }

    // ── RIPPLE ON CLICK ──
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button") as HTMLElement | null;
      if (!target) return;
      const ripple = document.createElement("span");
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.3;
      ripple.style.cssText = `
        position:absolute;border-radius:50%;pointer-events:none;
        width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        background:rgba(255,255,255,0.22);
        transform:scale(0);animation:ripple 0.5s ease-out forwards;
        z-index:9999;
      `;
      const oldPos = target.style.position;
      target.style.position = "relative";
      target.style.overflow = "hidden";
      target.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
        if (!oldPos) target.style.position = "";
      }, 550);
    };
    document.addEventListener("click", handleClick);

    // ── CURSOR GLOW (desktop only) ──
    let glow: HTMLDivElement | null = null;
    if (window.matchMedia("(pointer: fine)").matches) {
      glow = document.createElement("div");
      glow.style.cssText = `
        position:fixed;width:280px;height:280px;border-radius:50%;
        background:radial-gradient(circle,rgba(90,95,207,0.05) 0%,transparent 70%);
        pointer-events:none;z-index:0;top:0;left:0;
        transform:translate(-50%,-50%);transition:opacity 0.3s ease;
      `;
      document.body.appendChild(glow);
      const moveGlow = (e: MouseEvent) => {
        if (glow) {
          glow.style.left = e.clientX + "px";
          glow.style.top = e.clientY + "px";
        }
      };
      window.addEventListener("mousemove", moveGlow);
    }

    return () => {
      observer?.disconnect();
      document.removeEventListener("click", handleClick);
      if (glow) {
        glow.remove();
        window.removeEventListener("mousemove", () => {});
      }
    };
  }, []);

  return null;
}
