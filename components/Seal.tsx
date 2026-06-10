interface SealProps {
  color?: string;
  size?: number;
  id: string;
}

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS = "var(--font-montserrat), Helvetica Neue, Arial, sans-serif";

export default function Seal({ color = "#1B2D42", size = 200, id }: SealProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.42;
  const tr = size * 0.35;
  const d = `M ${cx - tr},${cy} A ${tr},${tr} 0 0,1 ${cx + tr},${cy}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <path id={`arc-${id}`} d={d} />
      </defs>
      <circle
        cx={cx}
        cy={cy}
        r={r + size * 0.06}
        fill="none"
        stroke={color}
        strokeWidth="0.6"
      />
      <text
        fontFamily={SANS}
        fontSize={size * 0.048}
        fill={color}
        letterSpacing={size * 0.014}
      >
        <textPath
          href={`#arc-${id}`}
          startOffset="50%"
          textAnchor="middle"
        >
          OAK + MAIN
        </textPath>
      </text>
      <circle cx={cx - tr} cy={cy} r={r * 0.025} fill={color} />
      <circle cx={cx + tr} cy={cy} r={r * 0.025} fill={color} />
      <text
        x={cx}
        y={cy + size * 0.07}
        fontFamily={SERIF}
        fontSize={size * 0.19}
        fontWeight="400"
        fill={color}
        textAnchor="middle"
      >
        OM
      </text>
      <text
        x={cx}
        y={cy + size * 0.3}
        fontFamily={SANS}
        fontSize={size * 0.042}
        fill={color}
        textAnchor="middle"
        letterSpacing={size * 0.008}
      >
        ROSEBURG, OREGON
      </text>
    </svg>
  );
}
