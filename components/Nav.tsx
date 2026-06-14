"use client";

import { useEffect, useState } from "react";

const SANS = "var(--font-montserrat), sans-serif";

const SECTIONS = [
  { id: "reveal",     label: "Cover" },
  { id: "mark",       label: "The Mark" },
  { id: "essence",    label: "Essence" },
  { id: "palette",    label: "Palette" },
  { id: "typography", label: "Type" },
  { id: "packaging",  label: "Packaging" },
  { id: "social",     label: "Social" },
  { id: "events",     label: "Events" },
];

// Sections that have a dark (navy/harbor) background — nav dots should be champagne
const DARK_SECTIONS = new Set(["mark", "essence", "typography", "events"]);

export default function Nav() {
  const [active, setActive]   = useState(0);
  const [visible, setVisible] = useState(false);
  const [dark, setDark]       = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = ids.indexOf(entry.target.id);
            if (idx >= 0) {
              setActive(idx);
              setDark(DARK_SECTIONS.has(ids[idx]));
            }
          }
        });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const dotColor    = dark ? "#D5BE97" : "#1B2D42";
  const activeColor = "#D5BE97";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="side-nav"
      style={{
        position: "fixed",
        right: 28,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        gap: 0,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {SECTIONS.map(({ id, label }, i) => {
        const isActive = i === active;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            title={label}
            style={{
              all: "unset",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 10,
              padding: "7px 0",
              minHeight: 44,
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {/* Label — visible only when active */}
            <span
              className="nav-labels"
              style={{
                fontFamily: SANS,
                fontSize: 7,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: isActive ? activeColor : "transparent",
                opacity: isActive ? 0.8 : 0,
                transition: "opacity 0.4s ease, color 0.4s ease",
                whiteSpace: "nowrap",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {label}
            </span>
            {/* Dot */}
            <div
              style={{
                height: 2,
                width: isActive ? 28 : 8,
                background: isActive ? activeColor : dotColor,
                opacity: isActive ? 1 : 0.28,
                borderRadius: 1,
                transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                flexShrink: 0,
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
