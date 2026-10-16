"use client";
import { useEffect, useRef, type ReactNode } from "react";

/** Panel wrapper with a single quiet scroll reveal (disabled under reduced motion via CSS). */
export default function Reveal({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <section ref={ref} id={id} className={`panel reveal ${className}`}>{children}</section>;
}
