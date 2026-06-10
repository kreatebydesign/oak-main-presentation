import Reveal from "../Reveal";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

const WORDS = ["Timeless", "Authentic", "Effortless", "Confident", "Curated"];

export default function BrandEssence() {
  return (
    <section
      id="essence"
      className="section-pad"
      style={{
        background: "#122033",
        padding: "110px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 56,
      }}
    >
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
          Brand Essence
        </span>
      </Reveal>

      <Reveal delay={100}>
        <div style={{ width: 36, height: 0.5, background: "#D5BE97", opacity: 0.4 }} />
      </Reveal>

      {/* Essence words */}
      <Reveal delay={200}>
        <div
          className="essence-words"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0 40px",
            maxWidth: 800,
          }}
        >
          {WORDS.map((word, i) => (
            <span key={word} style={{ display: "flex", alignItems: "center", gap: 40 }}>
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: 28,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#F7F2EC",
                  letterSpacing: "0.02em",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {word}
              </span>
              {i < WORDS.length - 1 && (
                <span
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: "#D5BE97",
                    opacity: 0.35,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
              )}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div style={{ width: 36, height: 0.5, background: "#D5BE97", opacity: 0.25 }} />
      </Reveal>

      <Reveal delay={400}>
        <p
          style={{
            fontFamily: SANS,
            fontSize: 11,
            fontWeight: 300,
            lineHeight: 2.2,
            color: "#F7F2EC",
            opacity: 0.65,
            letterSpacing: "0.05em",
            textAlign: "center",
            maxWidth: 440,
          }}
        >
          Oak + Main exists to provide thoughtfully selected clothing and accessories that help women feel confident, comfortable, and beautifully themselves in everyday life.
        </p>
      </Reveal>
    </section>
  );
}
