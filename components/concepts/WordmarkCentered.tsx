/**
 * WordmarkCentered — approved primary identity lockup.
 *
 * OAK + MAIN in Cormorant Garamond, uppercase, generous tracking.
 * "Boutique" in italic serif beneath — understated, sophisticated.
 *
 * No underline. No rule. The typography carries the brand.
 */
const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

interface WordmarkCenteredProps {
  color?:         string;
  size?:          number;
  tracking?:      string;
  weight?:        number;
  subtitle?:      boolean;
  subtitleColor?: string;
  subtitleStyle?: "italic-serif" | "small-caps";
  // showRule kept for backward compat — always false; underline is rejected
  showRule?:      boolean;
}

export default function WordmarkCentered({
  color         = "#1B2D42",
  size          = 36,
  tracking      = "0.22em",
  weight        = 400,
  subtitle      = true,
  subtitleColor,
  subtitleStyle = "italic-serif",
  showRule: _showRule = false,   // retained prop, intentionally unused
}: WordmarkCenteredProps) {
  const sc = subtitleColor ?? color;

  return (
    <div
      style={{
        display:       "inline-flex",
        flexDirection: "column",
        alignItems:    "center",
        gap:           Math.round(size * 0.28),
      }}
    >
      {/* Wordmark */}
      <span
        style={{
          fontFamily:    SERIF,
          fontSize:      size,
          fontWeight:    weight,
          letterSpacing: tracking,
          color,
          textTransform: "uppercase",
          lineHeight:    1,
          userSelect:    "none",
          whiteSpace:    "nowrap",
        }}
      >
        OAK + MAIN
      </span>

      {/* Boutique */}
      {subtitle && (
        subtitleStyle === "italic-serif" ? (
          <span
            style={{
              fontFamily:    SERIF,
              fontSize:      Math.round(size * 0.28),
              fontWeight:    400,
              fontStyle:     "italic",
              color:         sc,
              opacity:       0.60,
              letterSpacing: "0.07em",
              whiteSpace:    "nowrap",
            }}
          >
            Boutique
          </span>
        ) : (
          <span
            style={{
              fontFamily:    SANS,
              fontSize:      Math.round(size * 0.19),
              fontWeight:    300,
              color:         sc,
              opacity:       0.58,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              whiteSpace:    "nowrap",
            }}
          >
            Boutique
          </span>
        )
      )}
    </div>
  );
}
