import Reveal from "../Reveal";
import Wordmark from "../Wordmark";

const SANS  = "var(--font-montserrat), sans-serif";
const SERIF = "var(--font-cormorant), Didot, Georgia, serif";

export default function Footer() {
  return (
    <>
      {/* Brand close — Porcelain */}
      <section
        style={{
          background: "#F7F2EC",
          padding: "120px 80px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
        className="section-pad"
      >
        <Reveal>
          <div style={{ width: 0.5, height: 80, background: "#D5BE97", opacity: 0.8, margin: "0 auto" }} />
        </Reveal>

        <Reveal delay={100}>
          <Wordmark color="#1B2D42" size={36} tracking="0.24em" />
        </Reveal>

        <Reveal delay={200}>
          <div style={{ width: 60, height: 0.5, background: "#D5BE97" }} />
        </Reveal>

        <Reveal delay={300}>
          <span style={{
            fontFamily: SANS,
            fontSize: 8.5,
            letterSpacing: "0.26em",
            color: "#1B2D42",
            opacity: 0.5,
            textTransform: "uppercase",
          }}>
            Roseburg, Oregon
          </span>
        </Reveal>
      </section>

      {/* KXD Colophon — Harbor / Deep Navy */}
      <section
        style={{
          background: "#122033",
          padding: "72px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
        className="section-pad"
      >
        {/* Full-width champagne rule */}
        <Reveal>
          <div style={{ width: 120, height: 0.4, background: "#D5BE97", opacity: 0.35 }} />
        </Reveal>

        <Reveal delay={100}>
          <div style={{ height: 8 }} />
        </Reveal>

        {/* KXD mark */}
        <Reveal delay={150}>
          <span style={{
            fontFamily: SERIF,
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: "0.32em",
            color: "#D5BE97",
            textTransform: "uppercase",
            userSelect: "none",
            opacity: 0.9,
          }}>
            KXD
          </span>
        </Reveal>

        <Reveal delay={250}>
          <span style={{
            fontFamily: SANS,
            fontSize: 8,
            letterSpacing: "0.22em",
            color: "#F7F2EC",
            opacity: 0.55,
            textTransform: "uppercase",
          }}>
            Kreate by Design
          </span>
        </Reveal>

        <Reveal delay={350}>
          <div style={{ width: 32, height: 0.4, background: "#D5BE97", opacity: 0.3 }} />
        </Reveal>

        <Reveal delay={450}>
          <span style={{
            fontFamily: SERIF,
            fontSize: 16,
            fontStyle: "italic",
            color: "#F7F2EC",
            opacity: 0.5,
            letterSpacing: "0.03em",
            textAlign: "center",
          }}>
            Building brands designed to endure.
          </span>
        </Reveal>

        <Reveal delay={600}>
          <div style={{ height: 32 }} />
        </Reveal>

        <Reveal delay={700}>
          <span style={{
            fontFamily: SANS,
            fontSize: 7,
            letterSpacing: "0.14em",
            color: "#F7F2EC",
            opacity: 0.2,
            textTransform: "uppercase",
          }}>
            © 2024 Kreate by Design · Confidential · Prepared for Oak + Main
          </span>
        </Reveal>
      </section>
    </>
  );
}
