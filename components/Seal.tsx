/**
 * Seal — packaging sticker with approved oak leaf motif.
 *
 * Circular die-cut sticker for bags and tissue wrap.
 * Horizontal client-reference leaf centred; Oak + Main below.
 */

import { OAK_LEAF_SRC, OAK_VIEWBOX } from "./concepts/OakLeaf";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";

interface SealProps {
  color?: string;
  size?:  number;
  id:     string;
}

export default function Seal({ color = "#1B2D42", size = 200, id: _id }: SealProps) {
  const cx = size / 2;
  const cy = size / 2;

  const outerR = size * 0.44;
  const innerR = outerR - size * 0.030;

  const leafH  = size * 0.22;
  const leafW  = leafH * (OAK_VIEWBOX.w / OAK_VIEWBOX.h);
  const leafTx = cx - leafW / 2;
  const leafTy = cy - leafH / 2 - size * 0.06;

  const leafBottom = leafTy + leafH;
  const nameFontSz = size * 0.048;
  const nameY      = leafBottom + size * 0.05;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: "block" }}
    >
      <circle
        cx={cx} cy={cy} r={outerR}
        fill="none"
        stroke={color}
        strokeWidth="0.60"
        opacity="0.85"
      />

      <circle
        cx={cx} cy={cy} r={innerR}
        fill="none"
        stroke={color}
        strokeWidth="0.25"
        opacity="0.28"
      />

      <image
        href={OAK_LEAF_SRC}
        x={leafTx}
        y={leafTy}
        width={leafW}
        height={leafH}
        opacity={0.92}
        preserveAspectRatio="xMidYMid meet"
      />

      <text
        x={cx}
        y={nameY}
        fontFamily={SERIF}
        fontSize={nameFontSz}
        fill={color}
        textAnchor="middle"
        letterSpacing={size * 0.008}
        opacity="0.85"
      >
        Oak + Main
      </text>
    </svg>
  );
}
