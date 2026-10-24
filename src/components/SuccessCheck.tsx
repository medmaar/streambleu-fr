"use client";
import { useEffect, useRef } from "react";

interface Props {
  title: string;
  text: string;
}

// Big green confirmation shown in place of the order/trial form once it is sent.
export default function SuccessCheck({ title, text }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div ref={ref} role="status" aria-live="polite" className="sb-success">
      <div className="sb-success-circle">
        <svg viewBox="9 9 34 34" aria-hidden="true">
          <polyline points="14,27 22,36 38,17" />
        </svg>
      </div>
      <p className="sb-success-title">{title}</p>
      <p className="sb-success-text">{text}</p>
    </div>
  );
}
