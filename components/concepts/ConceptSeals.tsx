// Four simplified seal variants — each addresses the client's feedback
// about breathing room and reduced visual complexity.

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

const LEAF_FULL = "M20,4 C28,2 36,8 32,16 C30,20 26,18 24,22 C30,22 38,28 34,34 C32,38 26,36 24,40 C22,46 20,50 20,54 C20,50 18,46 16,40 C14,36 8,38 6,34 C2,28 10,22 16,22 C14,18 10,20 8,16 C4,8 12,2 20,4Z";
const LEAF_MIN  = "M20,4 C30,4 36,10 34,18 C32,26 24,28 22,34 C21,40 20,46 20,52 C20,46 19,40 18,34 C16,28 8,26 6,18 C4,10 10,4 20,4Z";

// ── Seal 1 — Timeless: Arc "OAK + MAIN" + centered leaf, no monogram ──────────
export function Seal1({ color = "#1B2D42", size = 140 }: { color?: string; size?: number }) {
  const cx = size / 2, cy = size / 2;
  const r  = size * 0.42;
  const tr = size * 0.35;
  const arcD = `M ${cx - tr},${cy} A ${tr},${tr} 0 0,1 ${cx + tr},${cy}`;
  const leafScale = size / 220;
  const leafX = cx - size * 0.1;
  const leafY = cy - size * 0.2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <path id={`s1-arc-${size}`} d={arcD} />
      </defs>
      <circle cx={cx} cy={cy} r={r + size * 0.08} fill="none" stroke={color} strokeWidth="0.5" opacity="0.7" />
      <text fontFamily={SANS} fontSize={size * 0.05} fill={color} opacity="0.75" letterSpacing={size * 0.016}>
        <textPath href={`#s1-arc-${size}`} startOffset="50%" textAnchor="middle">
          OAK + MAIN
        </textPath>
      </text>
      <g transform={`translate(${leafX}, ${leafY}) scale(${leafScale})`}>
        <path d={LEAF_FULL} fill="none" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// ── Seal 2 — Refined Heritage: Double ring + filled leaf at center ─────────────
export function Seal2({ color = "#D5BE97", size = 140 }: { color?: string; size?: number }) {
  const cx = size / 2, cy = size / 2;
  const r  = size * 0.44;
  const r2 = size * 0.38;
  const tr = size * 0.34, tr2 = size * 0.40;
  const arcTop = `M ${cx - tr2},${cy} A ${tr2},${tr2} 0 0,1 ${cx + tr2},${cy}`;
  const arcBot = `M ${cx - tr},${cy}  A ${tr},${tr}   0 1,0 ${cx + tr},${cy}`;
  const leafScale = size / 210;
  const leafX = cx - size * 0.105;
  const leafY = cy - size * 0.22;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <path id={`s2-top-${size}`} d={arcTop} />
        <path id={`s2-bot-${size}`} d={arcBot} />
      </defs>
      <circle cx={cx} cy={cy} r={r}  fill="none" stroke={color} strokeWidth="0.7" opacity="0.85" />
      <circle cx={cx} cy={cy} r={r2} fill="none" stroke={color} strokeWidth="0.3" opacity="0.4"  />
      <text fontFamily={SANS} fontSize={size * 0.052} fill={color} opacity="0.8" letterSpacing={size * 0.014}>
        <textPath href={`#s2-top-${size}`} startOffset="50%" textAnchor="middle">OAK + MAIN</textPath>
      </text>
      <text fontFamily={SANS} fontSize={size * 0.042} fill={color} opacity="0.6" letterSpacing={size * 0.01}>
        <textPath href={`#s2-bot-${size}`} startOffset="50%" textAnchor="middle">ROSEBURG · OREGON</textPath>
      </text>
      <g transform={`translate(${leafX}, ${leafY}) scale(${leafScale})`}>
        <path d={LEAF_FULL} fill={color} stroke={color} strokeWidth="0.5" strokeLinejoin="round" opacity="0.9" />
      </g>
    </svg>
  );
}

// ── Seal 3 — Modern: Single thin ring + OM only, maximum breathing room ────────
export function Seal3({ color = "#1B2D42", size = 140 }: { color?: string; size?: number }) {
  const cx = size / 2, cy = size / 2;
  const r  = size * 0.42;
  const leafScale = size / 320;
  const leafX = cx - size * 0.055;
  const leafY = cy + size * 0.18;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="0.4" opacity="0.55" />
      <text
        x={cx} y={cy + size * 0.1}
        fontFamily={SERIF}
        fontSize={size * 0.28}
        fontWeight="400"
        fill={color}
        textAnchor="middle"
        style={{ userSelect: "none" }}
      >
        OM
      </text>
      <g transform={`translate(${leafX}, ${leafY}) scale(${leafScale})`}>
        <path d={LEAF_MIN} fill="none" stroke={color} strokeWidth="1.2" strokeLinejoin="round" opacity="0.5" />
      </g>
    </svg>
  );
}

// ── Seal 4 — Signature: Arc text + vein leaf + italic subtitle inside ──────────
export function Seal4({ color = "#D5BE97", size = 140 }: { color?: string; size?: number }) {
  const cx = size / 2, cy = size / 2;
  const r  = size * 0.44;
  const tr = size * 0.36;
  const arcD = `M ${cx - tr},${cy} A ${tr},${tr} 0 0,1 ${cx + tr},${cy}`;
  const leafScale = size / 240;
  const leafX = cx - size * 0.095;
  const leafY = cy - size * 0.32;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <path id={`s4-arc-${size}`} d={arcD} />
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="0.55" opacity="0.75" />
      <text fontFamily={SANS} fontSize={size * 0.046} fill={color} opacity="0.8" letterSpacing={size * 0.012}>
        <textPath href={`#s4-arc-${size}`} startOffset="50%" textAnchor="middle">
          OAK + MAIN
        </textPath>
      </text>
      {/* Leaf with vein lines */}
      <g transform={`translate(${leafX}, ${leafY}) scale(${leafScale})`}>
        <path d={LEAF_FULL} fill="none" stroke={color} strokeWidth="1.0" strokeLinejoin="round" opacity="0.85" />
        <line x1="20" y1="6"  x2="20" y2="52" stroke={color} strokeWidth="0.5" opacity="0.3"  />
        <line x1="20" y1="18" x2="28" y2="12" stroke={color} strokeWidth="0.4" opacity="0.25" />
        <line x1="20" y1="18" x2="12" y2="12" stroke={color} strokeWidth="0.4" opacity="0.25" />
      </g>
      {/* Thin rule */}
      <line
        x1={cx - size * 0.18} y1={cy + size * 0.06}
        x2={cx + size * 0.18} y2={cy + size * 0.06}
        stroke={color} strokeWidth="0.35" opacity="0.35"
      />
      {/* Italic subtitle inside */}
      <text
        x={cx} y={cy + size * 0.2}
        fontFamily={SERIF}
        fontSize={size * 0.07}
        fontStyle="italic"
        fill={color}
        textAnchor="middle"
        opacity="0.7"
        style={{ userSelect: "none" }}
      >
        A Women&apos;s Boutique
      </text>
    </svg>
  );
}
