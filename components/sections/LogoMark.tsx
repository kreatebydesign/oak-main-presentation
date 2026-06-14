import Reveal from "../Reveal";
import Wordmark from "../Wordmark";
import Seal from "../Seal";
import OakLeaf from "../concepts/OakLeaf";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

/**
 * StackedWordmark — stacked OAK / + / MAIN arrangement.
 * Secondary mark for narrow-format applications: hang tags, tissue stamps.
 *
 * The "+" is sized at 72% of the main text (not 50%) so it reads as a
 * proportional separator rather than a superscript. lineHeight is tightened
 * to keep the three lines as a cohesive unit.
 */
function StackedWordmark({ color = "#F7F2EC", size = 22 }: { color?: string; size?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {(["OAK", "+", "MAIN"] as const).map((w, i) => (
        <span
          key={w}
          style={{
            fontFamily: SERIF,
            fontSize:      i === 1 ? size * 0.72 : size,
            fontWeight:    400,
            letterSpacing: i === 1 ? "0.14em" : "0.22em",
            color,
            textTransform: "uppercase",
            lineHeight:    i === 1 ? 1.05 : 1.15,
            userSelect:    "none",
          }}
        >
          {w}
        </span>
      ))}
    </div>
  );
}

/**
 * Monogram — OM overlapping serif letterforms.
 * Tertiary element for intimate brand touchpoints.
 */
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

      {/* Primary mark — OAK + MAIN / Boutique */}
      <Reveal delay={100}>
        <Wordmark
          color="#F7F2EC"
          size={64}
          tracking="0.24em"
          boutiqueColor="#D5BE97"
        />
      </Reveal>

      {/* Secondary wordmark — smaller alt-weight mark, Boutique hidden at this scale */}
      <Reveal delay={200}>
        <Wordmark
          color="#D5BE97"
          size={32}
          tracking="0.38em"
          weight={300}
          hideBoutique
        />
      </Reveal>

      {/* Three marks row */}
      <Reveal delay={300} direction="up">
        <div
          className="mark-row"
          style={{
            display: "flex",
            gap: 80,
            alignItems: "center",
            marginTop: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Stacked wordmark */}
          <StackedWordmark color="#F7F2EC" size={22} />

          <div className="divider-v" style={{ width: 0.5, height: 100, background: "#D5BE97", opacity: 0.25 }} />

          {/* Monogram */}
          <Monogram color="#D5BE97" size={110} />

          <div className="divider-v" style={{ width: 0.5, height: 100, background: "#D5BE97", opacity: 0.25 }} />

          {/* Premium seal — oak leaf as secondary luxury motif */}
          <Seal color="#D5BE97" size={140} id="mark-seal" />
        </div>
      </Reveal>

      {/* Oak leaf note */}
      <Reveal delay={380}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            opacity: 0.45,
          }}
        >
          <OakLeaf size={18} color="#D5BE97" sw={0.9} />
          <span
            style={{
              fontFamily: SANS,
              fontSize: 7.5,
              letterSpacing: "0.18em",
              color: "#D5BE97",
              textTransform: "uppercase",
            }}
          >
            Oak Leaf — Secondary Brand Motif
          </span>
          <OakLeaf size={18} color="#D5BE97" sw={0.9} />
        </div>
      </Reveal>

      {/* Colorway row */}
      <Reveal delay={460}>
        <div
          className="colorway-row"
          style={{
            display: "flex",
            gap: 12,
            marginTop: 8,
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
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Wordmark size={12} color={tc} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
