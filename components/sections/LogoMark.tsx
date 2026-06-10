import Reveal from "../Reveal";
import Wordmark from "../Wordmark";
import Seal from "../Seal";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

function StackedWordmark({ color = "#F7F2EC", size = 22 }: { color?: string; size?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {(["OAK", "+", "MAIN"] as const).map((w, i) => (
        <span
          key={w}
          style={{
            fontFamily: SERIF,
            fontSize: i === 1 ? size * 0.5 : size,
            fontWeight: 400,
            letterSpacing: i === 1 ? "0.06em" : "0.22em",
            color,
            textTransform: "uppercase",
            lineHeight: i === 1 ? 1.1 : 1.2,
            userSelect: "none",
          }}
        >
          {w}
        </span>
      ))}
    </div>
  );
}

function Monogram({ color = "#D5BE97", size = 120 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 130 120">
      <text
        x="6" y="95"
        fontFamily={SERIF}
        fontSize="90"
        fontWeight="400"
        fill={color}
        style={{ userSelect: "none" }}
      >
        O
      </text>
      <text
        x="50" y="95"
        fontFamily={SERIF}
        fontSize="90"
        fontWeight="400"
        fill={color}
        opacity="0.92"
        style={{ userSelect: "none" }}
      >
        M
      </text>
    </svg>
  );
}

export default function LogoMark() {
  return (
    <section
      id="mark"
      className="section-pad"
      style={{
        background: "#1B2D42",
        padding: "100px 80px 120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 56,
      }}
    >
      {/* Eyebrow */}
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
          The Mark
        </span>
      </Reveal>

      {/* Primary wordmark */}
      <Reveal delay={100}>
        <Wordmark color="#F7F2EC" size={64} tracking="0.24em" />
      </Reveal>

      {/* Champagne rule */}
      <Reveal delay={200}>
        <div style={{ width: 80, height: 0.5, background: "#D5BE97", opacity: 0.7 }} />
      </Reveal>

      {/* Secondary wordmark */}
      <Reveal delay={300}>
        <Wordmark color="#D5BE97" size={36} tracking="0.38em" weight={300} />
      </Reveal>

      {/* Three marks row */}
      <Reveal delay={400} direction="up">
        <div
          className="mark-row"
          style={{
            display: "flex",
            gap: 80,
            alignItems: "center",
            marginTop: 32,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <StackedWordmark color="#F7F2EC" size={22} />
          <div className="divider-v" style={{ width: 0.5, height: 100, background: "#D5BE97", opacity: 0.25 }} />
          <Monogram color="#D5BE97" size={110} />
          <div className="divider-v" style={{ width: 0.5, height: 100, background: "#D5BE97", opacity: 0.25 }} />
          <Seal color="#D5BE97" size={140} id="mark-seal" />
        </div>
      </Reveal>

      {/* Colorway row */}
      <Reveal delay={500}>
        <div
          className="colorway-row"
          style={{
            display: "flex",
            gap: 12,
            marginTop: 16,
            width: "100%",
            maxWidth: 680,
          }}
        >
          {[
            { bg: "#122033", tc: "#F7F2EC" },
            { bg: "#D5BE97", tc: "#1B2D42" },
            { bg: "#F7F2EC", tc: "#1B2D42" },
            { bg: "#E3DACE", tc: "#1B2D42" },
          ].map(({ bg, tc }, i) => (
            <div
              key={i}
              className="colorway-item"
              style={{
                flex: 1,
                padding: "28px 16px",
                background: bg,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: tc,
                  userSelect: "none",
                }}
              >
                OAK + MAIN
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
