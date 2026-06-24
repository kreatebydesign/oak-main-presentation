/**
 * Wordmark — the single shared source of truth for the Oak + Main mark.
 *
 * Default output (primary identity):
 *
 *   OAK  +  MAIN
 *      Boutique
 *
 * Serif wordmark + script Boutique subline.
 * Pass hideBoutique={true} only for tiny header/nav contexts.
 *
 * Fixed-width grid (1fr auto 1fr) keeps "+" and Boutique on the same
 * optical center axis regardless of OAK/MAIN width difference.
 *
 * No underline. No rule. No decorative element. Typography only.
 */

const SERIF  = "var(--font-cormorant), Didot, Georgia, serif";
const SCRIPT = "var(--font-script), Snell Roundhand, cursive";

interface WordmarkProps {
  color?:         string;
  size?:          number;
  tracking?:      string;
  weight?:        number;
  /** Hide the Boutique sub-line. Use only for tiny nav/header contexts. */
  hideBoutique?:  boolean;
  boutiqueColor?: string;
}

export default function Wordmark({
  color         = "#1B2D42",
  size          = 48,
  tracking      = "0.22em",
  weight        = 400,
  hideBoutique  = false,
  boutiqueColor,
}: WordmarkProps) {
  const showBoutique = !hideBoutique;
  const bc           = boutiqueColor ?? color;

  const containerWidth = Math.round(size * 8);
  const plusSize       = Math.round(size * 0.72);
  const wordGap        = Math.round(size * 0.38);

  // Script Boutique — larger than caption, clearly secondary to the serif mark.
  const boutiqueFontSz = Math.max(Math.round(size * 0.40), 10);
  const boutiqueGap    = showBoutique ? Math.max(Math.round(size * 0.12), 2) : 0;

  const wordStyle = {
    fontFamily:    SERIF,
    fontSize:      size,
    fontWeight:    weight,
    letterSpacing: tracking,
    color,
    textTransform: "uppercase" as const,
    lineHeight:    1,
    userSelect:    "none" as const,
    display:       "inline-block" as const,
    whiteSpace:    "nowrap" as const,
    marginRight:   `-${tracking}`,
  };

  return (
    <div
      style={{
        display:       "inline-flex",
        flexDirection: "column",
        alignItems:    "center",
        gap:           boutiqueGap,
        width:         `${containerWidth}px`,
      }}
    >
      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems:          "center",
          width:               "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <span style={wordStyle}>OAK</span>
        </div>

        <span
          style={{
            fontFamily:    SERIF,
            fontSize:      plusSize,
            fontWeight:    weight,
            letterSpacing: "0",
            color,
            textTransform: "uppercase",
            lineHeight:    1,
            userSelect:    "none",
            display:       "inline-block",
            paddingLeft:   `${wordGap}px`,
            paddingRight:  `${wordGap}px`,
          }}
        >
          +
        </span>

        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <span style={wordStyle}>MAIN</span>
        </div>
      </div>

      {showBoutique && (
        <span
          style={{
            fontFamily:    SCRIPT,
            fontSize:      boutiqueFontSz,
            fontWeight:    400,
            fontStyle:     "normal",
            letterSpacing: "0.02em",
            color:         bc,
            lineHeight:    1,
            userSelect:    "none",
            whiteSpace:    "nowrap",
          }}
        >
          Boutique
        </span>
      )}
    </div>
  );
}
