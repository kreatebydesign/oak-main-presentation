interface WordmarkProps {
  color?: string;
  size?: number;
  tracking?: string;
  weight?: number;
}

export default function Wordmark({
  color = "#1B2D42",
  size = 48,
  tracking = "0.22em",
  weight = 400,
}: WordmarkProps) {
  return (
    <span
      style={{
        fontFamily: "var(--font-cormorant), Didot, Georgia, serif",
        fontSize: size,
        fontWeight: weight,
        letterSpacing: tracking,
        color,
        textTransform: "uppercase",
        lineHeight: 1,
        userSelect: "none",
        display: "block",
      }}
    >
      OAK + MAIN
    </span>
  );
}
