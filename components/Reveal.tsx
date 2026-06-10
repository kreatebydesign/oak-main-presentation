"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "in" | "left";
  distance?: number;
}

// Premium cubic-bezier — strong deceleration for editorial elegance
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 20,
}: RevealProps) {
  const ref    = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVis(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const hidden: React.CSSProperties = {
    opacity: 0,
    transform:
      direction === "up"   ? `translateY(${distance}px)` :
      direction === "left" ? `translateX(-${distance}px)` :
      "none",
    willChange: "opacity, transform",
  };

  const shown: React.CSSProperties = {
    opacity: 1,
    transform: "none",
    willChange: "auto",
  };

  return (
    <div
      ref={ref}
      style={{
        ...(vis ? shown : hidden),
        transition: `opacity 0.85s ${EASE}, transform 0.85s ${EASE}`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
