/**
 * Wordmark — the single shared source of truth for the Oak + Main mark.
 *
 * Default output (primary identity):
 *
 *   OAK  +  MAIN
 *      Boutique
 *
 * Pass hideBoutique={true} only for tiny header/nav contexts.
 *
 * ── WHY A FIXED-WIDTH GRID, NOT A FLEX ROW ─────────────────────────────
 *
 * "OAK" has 3 chars; "MAIN" has 4 chars including the wide "M".
 * MAIN renders significantly wider than OAK at any tracking.
 *
 * A flex-row of equal-gap spans centers Boutique on the TEXT EXTENT,
 * not on the "+" sign. Because MAIN > OAK, the text extent's midpoint
 * falls to the right of the "+" — Boutique drifts right of the "+".
 *
 * The fix: a fixed-width container (containerWidth = size × 8) with a
 * CSS grid (1fr  auto  1fr):
 *
 *   ┌────── 1fr ──────┬──auto──┬────── 1fr ──────┐
 *   │            OAK →│   +    │← MAIN            │
 *   └─────────────────┴────────┴─────────────────-┘
 *                   center axis
 *
 *   – Left 1fr:   OAK right-aligned, hugging the "+"
 *   – Center auto: "+" with equal left/right padding for breathing room
 *   – Right 1fr:  MAIN left-aligned, hugging the "+"
 *
 * The "+" center is at containerWidth / 2.
 * Boutique is also centered at containerWidth / 2.
 * Both share the same optical axis — they align perfectly regardless
 * of OAK/MAIN width difference.
 *
 * marginRight: -tracking on OAK and MAIN cancels the invisible trailing
 * letter-spacing so each word's layout width = its visual text width.
 * This prevents OAK/MAIN from floating away from their column edges.
 *
 * No underline. No rule. No decorative element. Typography only.
 */

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";

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

  // Fixed container — + sits exactly at containerWidth/2.
  // 8× gives each 1fr column enough room for MAIN at any common tracking.
  const containerWidth = Math.round(size * 8);

  // "+" independently sized — proportional to cap height, clearly readable.
  const plusSize  = Math.round(size * 0.72);
  // Equal breathing room on each side of "+" (padding on the + span).
  const wordGap   = Math.round(size * 0.38);

  // Boutique: 29% of main size, floored at 7 px for legibility in small mockups.
  const boutiqueFontSz = Math.max(Math.round(size * 0.29), 7);
  // Tight gap — Boutique feels attached, not floating.
  const boutiqueGap    = showBoutique ? Math.max(Math.round(size * 0.14), 3) : 0;

  // Shared style for OAK and MAIN word spans.
  // marginRight: -tracking cancels the invisible trailing letter-spacing
  // so each word's layout width = its visual text width, keeping
  // OAK/MAIN flush against their column edges.
  const wordStyle = {
    fontFamily:    SERIF,
    fontSize:      size,
    fontWeight:    weight,
    letterSpacing: tracking,
    color,
    textTransform: "uppercase"  as const,
    lineHeight:    1,
    userSelect:    "none"       as const,
    display:       "inline-block" as const,
    whiteSpace:    "nowrap"     as const,
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
      {/*
       * 1fr [auto] 1fr grid.
       * OAK right-aligned in its column → sits flush against "+".
       * MAIN left-aligned in its column → sits flush against "+".
       * "+" padding provides equal breathing room on both sides.
       * The "+" center lands at containerWidth / 2 — the same axis as Boutique.
       */}
      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems:          "center",
          width:               "100%",
        }}
      >
        {/* Left cell — OAK, right-aligned */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <span style={wordStyle}>OAK</span>
        </div>

        {/* Center cell — "+" with symmetric padding */}
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

        {/* Right cell — MAIN, left-aligned */}
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <span style={wordStyle}>MAIN</span>
        </div>
      </div>

      {/* Boutique — centred at containerWidth/2, the same axis as "+" */}
      {showBoutique && (
        <span
          style={{
            fontFamily:    SERIF,
            fontSize:      boutiqueFontSz,
            fontWeight:    400,
            fontStyle:     "italic",
            letterSpacing: "0.07em",
            color:         bc,
            opacity:       0.60,
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
