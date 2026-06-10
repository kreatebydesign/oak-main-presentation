"use client";

import { useEffect, useState } from "react";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";
const EASE  = "cubic-bezier(0.22, 1, 0.36, 1)";

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
    opacity:   phase >= p ? 1 : 0,
    transform: phase >= p ? "none" : `translateY(${extraY}px)`,
    transition: `opacity 1.1s ${EASE}, transform 1.1s ${EASE}`,
  });

  return (
    <section
      id="reveal"
      className="full-vh"
      style={{
        minHeight: "100vh",
        background: "#F7F2EC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 40px",
        position: "relative",
        userSelect: "none",
      }}
    >
      {/* KXD mark — top right */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 52,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 4,
          ...fade(4, 0),
        }}
      >
        <span style={{
          fontFamily: SANS,
          fontSize: 7.5,
          letterSpacing: "0.28em",
          color: "#1B2D42",
          opacity: 0.4,
          textTransform: "uppercase",
        }}>
          KXD
        </span>
        <span style={{
          fontFamily: SANS,
          fontSize: 6.5,
          letterSpacing: "0.12em",
          color: "#1B2D42",
          opacity: 0.25,
          textTransform: "uppercase",
        }}>
          Kreate by Design
        </span>
      </div>

      {/* Year — top left */}
      <div
        style={{
          position: "absolute",
          top: 43,
          left: 52,
          ...fade(4, 0),
        }}
      >
        <span style={{
          fontFamily: SANS,
          fontSize: 7.5,
          letterSpacing: "0.18em",
          color: "#1B2D42",
          opacity: 0.3,
          textTransform: "uppercase",
        }}>
          Est. 2024
        </span>
      </div>

      {/* Center composition */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* Top vertical rule */}
        <div style={{ ...fade(1, 0), marginBottom: 36 }}>
          <div style={{ width: 0.5, height: 80, background: "#D5BE97", opacity: 0.75 }} />
        </div>

        {/* Main wordmark */}
        <div style={{ ...fade(2), marginBottom: 28 }}>
          <span
            className="hero-wordmark"
            style={{
              fontFamily: SERIF,
              fontSize: 72,
              fontWeight: 400,
              letterSpacing: "0.24em",
              color: "#1B2D42",
              textTransform: "uppercase",
              lineHeight: 1,
              display: "block",
            }}
          >
            OAK + MAIN
          </span>
        </div>

        {/* Champagne rule */}
        <div style={{ ...fade(3, 0), marginBottom: 20 }}>
          <div style={{ width: 80, height: 0.5, background: "#D5BE97" }} />
        </div>

        {/* Tagline + location */}
        <div
          style={{
            ...fade(3),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{
            fontFamily: SERIF,
            fontSize: 13,
            fontWeight: 400,
            fontStyle: "italic",
            color: "#1B2D42",
            opacity: 0.65,
            letterSpacing: "0.04em",
          }}>
            A Women's Boutique
          </span>
          <span style={{
            fontFamily: SANS,
            fontSize: 8.5,
            letterSpacing: "0.28em",
            color: "#1B2D42",
            opacity: 0.5,
            textTransform: "uppercase",
          }}>
            Roseburg, Oregon
          </span>
        </div>
      </div>

      {/* Scroll indicator — animated */}
      <div
        style={{
          position: "absolute",
          bottom: 44,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          ...fade(4),
        }}
      >
        <span style={{
          fontFamily: SANS,
          fontSize: 7,
          letterSpacing: "0.22em",
          color: "#1B2D42",
          opacity: 0.4,
          textTransform: "uppercase",
        }}>
          Scroll
        </span>
        <div
          className="scroll-line"
          style={{
            width: 0.5,
            height: 44,
            background: "#D5BE97",
            borderRadius: 1,
          }}
        />
      </div>
    </section>
  );
}
