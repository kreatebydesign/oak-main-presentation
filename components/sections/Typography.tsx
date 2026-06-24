import Reveal from "../Reveal";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";
const SCRIPT = "var(--font-script), Snell Roundhand, cursive";

export default function Typography() {
  return (
    <section
      id="typography"
      className="section-pad"
      style={{
        background: "#1B2D42",
        padding: "100px 80px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
        <Reveal>
          <span
            style={{
              fontFamily: SANS,
              fontSize: 9,
              letterSpacing: "0.28em",
              color: "#D5BE97",
            opacity: 0.7,
            textTransform: "uppercase",
          }}
        >
          Typography
          </span>
        </Reveal>

        {/* Cormorant display */}
        <Reveal delay={100}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 7.5,
                color: "#F7F2EC",
                opacity: 0.3,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Display Serif — Cormorant Garamond
            </span>
            <span
              className="type-display"
              style={{
                fontFamily: SERIF,
                fontSize: 64,
                fontWeight: 400,
                color: "#F7F2EC",
                letterSpacing: "0.06em",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              OAK + MAIN
            </span>
            <span
              style={{
                fontFamily: SERIF,
                fontSize: 30,
                fontWeight: 400,
                fontStyle: "italic",
                color: "#D5BE97",
                letterSpacing: "0.03em",
                lineHeight: 1.3,
                userSelect: "none",
              }}
            >
              Thoughtfully Curated for Everyday Life
            </span>
            <div style={{ width: "100%", height: 0.3, background: "#D5BE97", opacity: 0.15, marginTop: 8 }} />
            <span
              style={{
                fontFamily: SERIF,
                fontSize: 14,
                color: "#F7F2EC",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                opacity: 0.4,
                lineHeight: 2,
                userSelect: "none",
              }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ&nbsp;&nbsp;&nbsp;abcdefghijklmnopqrstuvwxyz
            </span>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div style={{ width: "100%", height: 0.3, background: "#D5BE97", opacity: 0.12 }} />
        </Reveal>

        {/* Script — Boutique subline */}
        <Reveal delay={250}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 7.5,
                color: "#F7F2EC",
                opacity: 0.3,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Script — Pinyon Script
            </span>
            <span
              style={{
                fontFamily: SCRIPT,
                fontSize: 48,
                fontWeight: 400,
                color: "#D5BE97",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              Boutique
            </span>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 10,
                fontWeight: 300,
                color: "#F7F2EC",
                opacity: 0.35,
                letterSpacing: "0.06em",
              }}
            >
              Logo subline · Packaging accents · Signature moments
            </span>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div style={{ width: "100%", height: 0.3, background: "#D5BE97", opacity: 0.12 }} />
        </Reveal>

        {/* Montserrat display */}
        <Reveal delay={350}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 7.5,
                color: "#F7F2EC",
                opacity: 0.3,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Supporting Sans — Montserrat
            </span>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 14,
                fontWeight: 300,
                color: "#F7F2EC",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              ROSEBURG, OREGON
            </span>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 11,
                fontWeight: 300,
                color: "#F7F2EC",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                opacity: 0.4,
                lineHeight: 2,
                userSelect: "none",
              }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ&nbsp;&nbsp;&nbsp;abcdefghijklmnopqrstuvwxyz
            </span>
          </div>
        </Reveal>

        <Reveal delay={450}>
          <div style={{ width: "100%", height: 0.3, background: "#D5BE97", opacity: 0.12 }} />
        </Reveal>

        {/* Hierarchy */}
        <Reveal delay={550}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 7.5,
                color: "#F7F2EC",
                opacity: 0.3,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Typographic Hierarchy
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 12 }}>
              <span className="type-display-sm" style={{ fontFamily: SERIF, fontSize: 44, fontWeight: 400, color: "#F7F2EC", letterSpacing: "0.14em", textTransform: "uppercase", lineHeight: 1, userSelect: "none" }}>
                Display Headline
              </span>
              <span style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 400, fontStyle: "italic", color: "#D5BE97", lineHeight: 1.3, userSelect: "none" }}>
                Section Subheading
              </span>
              <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 300, color: "#F7F2EC", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.5 }}>
                BODY LABEL — MONTSERRAT LIGHT
              </span>
              <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 300, color: "#F7F2EC", opacity: 0.35, letterSpacing: "0.06em" }}>
                Caption · Product detail · Supporting information
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
