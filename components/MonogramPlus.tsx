/**
 * MonogramPlus — O+M tertiary mark.
 *
 * Disconnected serif letterforms with proportional "+" separator,
 * matching the primary OAK + MAIN wordmark logic.
 */

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";

interface MonogramPlusProps {
  color?: string;
  size?:  number;
}

export default function MonogramPlus({ color = "#D5BE97", size = 32 }: MonogramPlusProps) {
  const plusSize = Math.round(size * 0.72);

  return (
    <div
      style={{
        display:    "inline-flex",
        alignItems: "center",
        gap:        0,
        userSelect: "none",
      }}
    >
      <span
        style={{
          fontFamily:    SERIF,
          fontSize:      size,
          fontWeight:    400,
          letterSpacing: "0.08em",
          color,
          lineHeight:    1,
        }}
      >
        O
      </span>
      <span
        style={{
          fontFamily: SERIF,
          fontSize:   plusSize,
          fontWeight: 400,
          color,
          lineHeight: 1,
        }}
      >
        +
      </span>
      <span
        style={{
          fontFamily:    SERIF,
          fontSize:      size,
          fontWeight:    400,
          letterSpacing: "0.08em",
          color,
          lineHeight:    1,
        }}
      >
        M
      </span>
    </div>
  );
}
