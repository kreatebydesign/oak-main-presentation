/**
 * OakLeaf — original premium botanical illustration.
 *
 * English oak (Quercus robur) anatomy: 5 lobes per side including the small
 * basal auricles at the petiole, deep graceful sinuses, clear midrib, delicate
 * lateral veins branching to each lobe tip.
 *
 * Rendering approach: fine-line engraving / letterpress — the quality of
 * illustration found in Diptyque packaging, Ralph Lauren heritage graphics,
 * and Brunello Cucinelli supporting details. Not an icon. Not clip-art.
 *
 * ViewBox: 0 0 48 72  (48 wide × 72 tall, stem exits at bottom centre)
 *
 * Construction: right-side anchor points designed from real oak leaf anatomy,
 * left side is the exact mirror (x → 48−x, reversed). Perfect bilateral
 * symmetry with organic, naturalistic silhouette.
 *
 * Lobe sequence (bottom → tip, right side):
 *   Auricle (ear-lobe at petiole base) — small, characteristic of English oak
 *   Lobe 1 — small-medium
 *   Lobe 2 — medium, widening
 *   Lobe 3 — widest (lower-middle of leaf)
 *   Lobe 4 — upper, tapering toward tip
 */

// ── Outline ───────────────────────────────────────────────────────────────────

export const OAK_OUTLINE =
  "M 24,69 " +
  // ── right side (petiole → tip) ────────────────────────────────────────────
  "C 25,67 31,65 30,62 " +   // petiole → R auricle
  "C 30,59 26,58 25,57 " +   // R auricle → sinus 0
  "C 26,55 35,54 34,51 " +   // sinus 0 → R lobe 1
  "C 34,47 26,46 25,44 " +   // R lobe 1 → sinus 1
  "C 26,41 39,40 38,37 " +   // sinus 1 → R lobe 2
  "C 38,33 26,32 25,30 " +   // R lobe 2 → sinus 2
  "C 26,27 42,25 41,22 " +   // sinus 2 → R lobe 3 (widest)
  "C 41,19 27,18 26,16 " +   // R lobe 3 → sinus 3
  "C 27,13 35,12 34,9  " +   // sinus 3 → R lobe 4
  "C 33,6  26,3  24,2  " +   // R lobe 4 → tip
  // ── left side (tip → petiole, mirror) ────────────────────────────────────
  "C 22,3  15,6  14,9  " +   // tip → L lobe 4
  "C 13,12 21,13 22,16 " +   // L lobe 4 → L sinus 3
  "C 21,18 7,19  7,22  " +   // L sinus 3 → L lobe 3 (widest)
  "C 6,25  22,27 23,30 " +   // L lobe 3 → L sinus 2
  "C 22,32 10,33 10,37 " +   // L sinus 2 → L lobe 2
  "C 9,40  22,41 23,44 " +   // L lobe 2 → L sinus 1
  "C 22,46 14,47 14,51 " +   // L sinus 1 → L lobe 1
  "C 13,54 22,55 23,57 " +   // L lobe 1 → L sinus 0
  "C 22,58 18,59 18,62 " +   // L sinus 0 → L auricle
  "C 17,65 23,67 24,69 Z";   // L auricle → petiole

// ── Midrib ────────────────────────────────────────────────────────────────────

export const OAK_MIDRIB = "M 24,3 L 24,68";

// ── Lateral veins — one per lobe, branching from midrib ──────────────────────

export const OAK_VEINS = [
  "M 24,65 C 26,64 28,63 30,62",   // R auricle vein
  "M 24,65 C 22,64 20,63 18,62",   // L auricle vein
  "M 24,51 C 27,50 31,50 34,51",   // R lobe 1 vein
  "M 24,51 C 21,50 17,50 14,51",   // L lobe 1 vein
  "M 24,37 C 28,36 34,36 38,37",   // R lobe 2 vein
  "M 24,37 C 20,36 14,36 10,37",   // L lobe 2 vein
  "M 24,22 C 29,21 36,21 41,22",   // R lobe 3 vein (widest)
  "M 24,22 C 19,21 12,21  7,22",   // L lobe 3 vein (widest)
  "M 24,9  C 27,8  31,8  34,9 ",   // R lobe 4 vein
  "M 24,9  C 21,8  17,8  14,9 ",   // L lobe 4 vein
];

// ── Component ─────────────────────────────────────────────────────────────────

interface OakLeafProps {
  size?:   number;   // height in pixels
  color?:  string;
  sw?:     number;   // stroke-width multiplier
  veins?:  boolean;  // lateral veins (recommended at 32px+)
  filled?: boolean;  // silhouette fill (for seals at small sizes)
}

export default function OakLeaf({
  size   = 28,
  color  = "#8D7A67",
  sw     = 1,
  veins  = false,
  filled = false,
}: OakLeafProps) {
  // Aspect ratio of the 48×72 viewBox
  const w = Math.round(size * 48 / 72);

  return (
    <svg
      width={w}
      height={size}
      viewBox="0 0 48 72"
      fill="none"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* Leaf silhouette */}
      <path
        d={OAK_OUTLINE}
        fill={filled ? color : "none"}
        fillOpacity={filled ? 0.90 : undefined}
        stroke={color}
        strokeWidth={sw * 1.0}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Midrib — delicate central vein */}
      {!filled && (
        <path
          d={OAK_MIDRIB}
          stroke={color}
          strokeWidth={sw * 0.36}
          strokeLinecap="round"
          opacity="0.35"
        />
      )}

      {/* Lateral veins — fine line work */}
      {veins && !filled && OAK_VEINS.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={color}
          strokeWidth={sw * 0.24}
          strokeLinecap="round"
          opacity="0.20"
        />
      ))}
    </svg>
  );
}
