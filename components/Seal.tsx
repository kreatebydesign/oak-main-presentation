/**
 * Seal — the Oak + Main secondary luxury brand motif.
 *
 * Simplified to horizontal centered text for clean, reliable rendering
 * at every size. Arc textPath was unreliable and felt disconnected; the
 * horizontal layout reads as confident and legible at all scales.
 *
 * Composition (top → bottom):
 *   Outer ring  — single clean stroke, 44% of diameter
 *   Inner ring  — hairline, creates the interior breathing room band
 *   OAK + MAIN  — Montserrat, widely tracked, centred in upper interior
 *   Oak leaf    — engraving style, optically centred in the circle
 *   Hairline    — featherweight rule between leaf and Boutique
 *   Boutique    — italic Cormorant, centred in lower interior
 *
 * All elements aligned to the vertical centreline (SVG x = cx).
 * Oak leaf path: viewBox 0 0 48 72 (see OakLeaf.tsx).
 */

// ── Oak leaf paths (48×72 viewBox) ───────────────────────────────────────────

const OAK_OUTLINE =
  "M 24,69 " +
  "C 25,67 31,65 30,62 " +
  "C 30,59 26,58 25,57 " +
  "C 26,55 35,54 34,51 " +
  "C 34,47 26,46 25,44 " +
  "C 26,41 39,40 38,37 " +
  "C 38,33 26,32 25,30 " +
  "C 26,27 42,25 41,22 " +
  "C 41,19 27,18 26,16 " +
  "C 27,13 35,12 34,9  " +
  "C 33,6  26,3  24,2  " +
  "C 22,3  15,6  14,9  " +
  "C 13,12 21,13 22,16 " +
  "C 21,18 7,19  7,22  " +
  "C 6,25  22,27 23,30 " +
  "C 22,32 10,33 10,37 " +
  "C 9,40  22,41 23,44 " +
  "C 22,46 14,47 14,51 " +
  "C 13,54 22,55 23,57 " +
  "C 22,58 18,59 18,62 " +
  "C 17,65 23,67 24,69 Z";

const OAK_MIDRIB = "M 24,3 L 24,68";

// ── Fonts ─────────────────────────────────────────────────────────────────────

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), Helvetica Neue, Arial, sans-serif";

// ── Component ─────────────────────────────────────────────────────────────────

interface SealProps {
  color?: string;
  size?:  number;
  id:     string;
}

export default function Seal({ color = "#1B2D42", size = 200, id: _id }: SealProps) {
  const cx = size / 2;
  const cy = size / 2;

  // ── Ring geometry ────────────────────────────────────────────────────────────
  const outerR = size * 0.44;
  const innerR = outerR - size * 0.030;

  // ── "OAK + MAIN" — horizontal, centred, in the upper interior ────────────────
  // Baseline sits at cy - outerR × 0.70 — clear of the top ring,
  // with comfortable breathing room before the leaf begins.
  const nameFontSz = size * 0.048;
  const nameY      = cy - outerR * 0.68;

  // ── Oak leaf ─────────────────────────────────────────────────────────────────
  // Height = 38% of diameter. Positioned so its visual centre sits at the
  // geometric centre of the circle, shifted 3% upward for optical balance.
  const leafH  = size * 0.38;
  const leafW  = leafH * (48 / 72);   // 48×72 viewBox aspect ratio
  const leafSc = leafH / 72;
  const leafTx = cx - leafW / 2;      // horizontal optical centre
  const leafTy = cy - leafH * 0.55;   // slightly above circle centre

  // ── Lower text ───────────────────────────────────────────────────────────────
  // Derived from leaf bottom so spacing is proportionally consistent.
  const leafBottom  = leafTy + leafH;
  const divY        = leafBottom + size * 0.032;
  const boutFontSz  = size * 0.058;
  const boutY       = divY + boutFontSz * 1.55;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: "block" }}
    >
      {/* ── Outer ring ─────────────────────────────────────────────────────── */}
      <circle
        cx={cx} cy={cy} r={outerR}
        fill="none"
        stroke={color}
        strokeWidth="0.60"
        opacity="0.85"
      />

      {/* ── Inner hairline ─────────────────────────────────────────────────── */}
      <circle
        cx={cx} cy={cy} r={innerR}
        fill="none"
        stroke={color}
        strokeWidth="0.25"
        opacity="0.28"
      />

      {/* ── OAK + MAIN — horizontal, Montserrat, centred ───────────────────── */}
      <text
        x={cx}
        y={nameY}
        fontFamily={SANS}
        fontSize={nameFontSz}
        fill={color}
        textAnchor="middle"
        letterSpacing={size * 0.009}
        opacity="0.82"
      >
        OAK + MAIN
      </text>

      {/* ── Oak leaf illustration ───────────────────────────────────────────── */}
      <g transform={`translate(${leafTx}, ${leafTy}) scale(${leafSc})`}>
        <path
          d={OAK_OUTLINE}
          fill="none"
          stroke={color}
          strokeWidth={1.0 / leafSc}
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.86"
        />
        <path
          d={OAK_MIDRIB}
          stroke={color}
          strokeWidth={0.36 / leafSc}
          strokeLinecap="round"
          opacity="0.28"
        />
      </g>

      {/* ── Hairline divider ────────────────────────────────────────────────── */}
      <line
        x1={cx - size * 0.07} y1={divY}
        x2={cx + size * 0.07} y2={divY}
        stroke={color}
        strokeWidth="0.28"
        opacity="0.22"
      />

      {/* ── Boutique — italic Cormorant, centred ────────────────────────────── */}
      <text
        x={cx}
        y={boutY}
        fontFamily={SERIF}
        fontStyle="italic"
        fontSize={boutFontSz}
        fontWeight="400"
        fill={color}
        textAnchor="middle"
        opacity="0.60"
      >
        Boutique
      </text>
    </svg>
  );
}
