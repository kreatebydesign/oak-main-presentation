"use client";

import { useEffect, useState } from "react";
import Wordmark from "../Wordmark";

const SANS = "var(--font-montserrat), sans-serif";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function HeroReveal() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const fade = (p: number, extraY = 16): React.CSSProperties => ({
    opacity:    phase >= p ? 1 : 0,
    transform:  phase >= p ? "none" : `translateY(${extraY}px)`,
    transition: `opacity 1.1s ${EASE}, transform 1.1s ${EASE}`,
  });

  return (
    <section
      id="reveal"
      className="full-vh"
      style={{
        minHeight:       "100vh",
        background:      "#F7F2EC",
        display:         "flex",
        flexDirection:   "column",
        alignItems:      "center",
        justifyContent:  "center",
        padding:         "100px 40px",
        position:        "relative",
        userSelect:      "none",
      }}
    >
      {/* KXD mark — top right */}
      <div
        style={{
          position:  "absolute",
          top:       40,
          right:     52,
          display:   "flex",
          flexDirection: "column",
          alignItems:    "flex-end",
          gap:           4,
          ...fade(4, 0),
        }}
      >
        <span style={{ fontFamily: SANS, fontSize: 7.5, letterSpacing: "0.28em", color: "#1B2D42", opacity: 0.4, textTransform: "uppercase" }}>
          KXD
        </span>
        <span style={{ fontFamily: SANS, fontSize: 6.5, letterSpacing: "0.12em", color: "#1B2D42", opacity: 0.25, textTransform: "uppercase" }}>
          Kreate by Design
        </span>
      </div>

      {/* Year — top left */}
      <div style={{ position: "absolute", top: 43, left: 52, ...fade(4, 0) }}>
        <span style={{ fontFamily: SANS, fontSize: 7.5, letterSpacing: "0.18em", color: "#1B2D42", opacity: 0.3, textTransform: "uppercase" }}>
          Est. 2026
        </span>
      </div>

      {/* Center composition — logo lockup then location */}
      <div
        style={{
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           28,
        }}
      >
        <div style={fade(2)}>
          <Wordmark
            color="#1B2D42"
            size={72}
            tracking="0.24em"
            boutiqueColor="#D5BE97"
          />
        </div>
      </div>

      {/* Scroll indicator — functional navigation cue, not decorative */}
      <div
        style={{
          position:      "absolute",
          bottom:        44,
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           12,
          ...fade(4),
        }}
      >
        <span style={{ fontFamily: SANS, fontSize: 7, letterSpacing: "0.22em", color: "#1B2D42", opacity: 0.4, textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          className="scroll-line"
          style={{ width: 0.5, height: 44, background: "#D5BE97", borderRadius: 1 }}
        />
      </div>
    </section>
  );
}
