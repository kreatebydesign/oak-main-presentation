/**
 * OakLeaf — client-approved horizontal oak leaf motif.
 *
 * Uses the client reference artwork directly (492×328, wide horizontal flow).
 * Champagne linework on transparent background.
 *
 * Used everywhere: logo section, packaging, tags, cards, seal sticker.
 */

export const OAK_LEAF_SRC = "/oak-leaf.png";

/** Native reference dimensions — wide and low (horizontal). */
export const OAK_VIEWBOX = { w: 492, h: 328 };

interface OakLeafProps {
  /** Render height in pixels; width scales from reference aspect ratio. */
  size?:   number;
  /** @deprecated Client asset uses fixed champagne linework. */
  color?:  string;
  /** @deprecated Retained for call-site compatibility. */
  sw?:     number;
  /** @deprecated Retained for call-site compatibility. */
  veins?:  boolean;
  /** @deprecated Retained for call-site compatibility. */
  filled?: boolean;
  opacity?: number;
}

export default function OakLeaf({
  size    = 28,
  opacity = 1,
}: OakLeafProps) {
  const h = size;
  const w = Math.round(size * OAK_VIEWBOX.w / OAK_VIEWBOX.h);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={OAK_LEAF_SRC}
      alt=""
      width={w}
      height={h}
      draggable={false}
      style={{
        display:     "block",
        width:       w,
        height:      h,
        opacity,
        flexShrink:  0,
        userSelect:  "none",
        pointerEvents: "none",
      }}
    />
  );
}
