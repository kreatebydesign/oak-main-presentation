import Reveal from "../Reveal";
import Wordmark from "../Wordmark";
import OakLeaf from "../concepts/OakLeaf";
import MonogramPlus from "../MonogramPlus";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

/** Shared mark-row geometry — every column uses the same invisible frame. */
const MARK_BOX_H = 120;
const CAP_GAP    = 14;
const CAP_LINE_H = 10;

const CAPTION: React.CSSProperties = {
  fontFamily:    SANS,
  fontSize:      7,
  letterSpacing: "0.16em",
  color:         "#D5BE97",
  opacity:       0.45,
  textTransform: "uppercase",
  textAlign:     "center",
  lineHeight:    1,
  whiteSpace:    "nowrap",
  userSelect:    "none",
};

function BrandMarkCell({
  caption,
  children,
}: {
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        width:         "100%",
      }}
    >
      {/* Mark area — equal height, optical vertical centre */}
      <div
        style={{
          height:         MARK_BOX_H,
          width:          "100%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      {/* Caption rail — fixed height so every baseline aligns */}
      <div
        style={{
          marginTop:      CAP_GAP,
          height:         CAP_LINE_H,
          width:          "100%",
          display:        "flex",
          alignItems:     "flex-end",
          justifyContent: "center",
        }}
      >
        {caption && <span style={CAPTION}>{caption}</span>}
      </div>
    </div>
  );
}

/**
 * StackedWordmark — stacked OAK / + / MAIN for narrow-format applications.
 */
function StackedWordmark({ color = "#F7F2EC", size = 22 }: { color?: string; size?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {(["OAK", "+", "MAIN"] as const).map((w, i) => (
        <span
          key={w}
          style={{
            fontFamily:    SERIF,
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
 * TagPreview — narrow-format tag with stacked wordmark + oak leaf accent.
 */
function TagPreview({
  leafPosition = "bottom",
}: {
  leafPosition?: "top" | "bottom";
}) {
  const leaf = (
    <div style={{ opacity: 0.65 }}>
      <OakLeaf size={16} opacity={0.65} />
    </div>
  );

  return (
    <div
      style={{
        width: 72,
        height: 120,
        background: "#1B2D42",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 8px",
        gap: 8,
      }}
    >
      {leafPosition === "top" && leaf}
      <StackedWordmark color="#F7F2EC" size={14} />
      {leafPosition === "bottom" && leaf}
    </div>
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

      {/* Primary lockup — serif wordmark + script Boutique */}
      <Reveal delay={100}>
        <Wordmark
          color="#F7F2EC"
          size={64}
          tracking="0.24em"
          boutiqueColor="#D5BE97"
        />
      </Reveal>

      {/* Porcelain colorway preview */}
      <Reveal delay={200}>
        <div
          style={{
            background: "#F7F2EC",
            padding: "36px 48px",
            borderRadius: 2,
          }}
        >
          <Wordmark
            color="#1B2D42"
            size={40}
            tracking="0.22em"
            boutiqueColor="#D5BE97"
          />
        </div>
      </Reveal>

      {/* Brand marks — four equal columns, shared bounding box */}
      <Reveal delay={300} direction="up">
        <div
          className="mark-row"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap:                 32,
            width:               "100%",
            maxWidth:            640,
            marginTop:           24,
          }}
        >
          <BrandMarkCell>
            <TagPreview leafPosition="bottom" />
          </BrandMarkCell>

          <BrandMarkCell caption="O+M Monogram">
            <MonogramPlus color="#D5BE97" size={36} />
          </BrandMarkCell>

          <BrandMarkCell>
            <TagPreview leafPosition="top" />
          </BrandMarkCell>

          <BrandMarkCell caption="Supporting Motif">
            <OakLeaf size={44} opacity={0.95} />
          </BrandMarkCell>
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
          <OakLeaf size={18} opacity={0.55} />
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
          <OakLeaf size={18} opacity={0.55} />
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
            { bg: "#122033", wc: "#F7F2EC", bc: "#D5BE97" },
            { bg: "#D5BE97", wc: "#1B2D42", bc: "#1B2D42" },
            { bg: "#F7F2EC", wc: "#1B2D42", bc: "#D5BE97" },
            { bg: "#E3DACE", wc: "#1B2D42", bc: "#D5BE97" },
          ].map(({ bg, wc, bc }, i) => (
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
              <Wordmark size={12} color={wc} boutiqueColor={bc} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
