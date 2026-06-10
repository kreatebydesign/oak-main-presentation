import Reveal from "../Reveal";

const SANS = "var(--font-montserrat), sans-serif";
const SERIF = "var(--font-cormorant), Didot, Georgia, serif";

const PALETTE = [
  { name: "Heritage Navy",     hex: "#1B2D42", bg: "#1B2D42", tc: "#F7F2EC" },
  { name: "Deep Harbor",       hex: "#122033", bg: "#122033", tc: "#F7F2EC" },
  { name: "Brushed Champagne", hex: "#D5BE97", bg: "#D5BE97", tc: "#1B2D42" },
  { name: "Porcelain",         hex: "#F7F2EC", bg: "#F7F2EC", tc: "#1B2D42", border: true },
  { name: "Cashmere",          hex: "#E3DACE", bg: "#E3DACE", tc: "#1B2D42" },
  { name: "Rich Taupe",        hex: "#8D7A67", bg: "#8D7A67", tc: "#F7F2EC" },
];

export default function ColorPalette() {
  return (
    <section
      id="palette"
      className="section-pad"
      style={{
        background: "#F7F2EC",
        padding: "100px 80px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
        <Reveal>
          <span
            style={{
              fontFamily: SANS,
              fontSize: 9,
              letterSpacing: "0.28em",
              color: "#1B2D42",
            opacity: 0.65,
            textTransform: "uppercase",
          }}
        >
          Color Palette
          </span>
        </Reveal>

        {/* Swatches */}
        <Reveal delay={100}>
          <div className="palette-swatches" style={{ display: "flex", gap: 10, width: "100%" }}>
            {PALETTE.map((col) => (
              <div key={col.name} className="palette-col" style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
                <div
                  className="palette-swatch"
                  style={{
                    background: col.bg,
                    height: 240,
                    minWidth: 0,
                    borderRadius: "2px 2px 0 0",
                    border: col.border ? "0.5px solid #1B2D4218" : "none",
                  }}
                />
                <div style={{ paddingTop: 16, display: "flex", flexDirection: "column", gap: 5 }}>
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: 7.5,
                      letterSpacing: "0.14em",
                      color: "#1B2D42",
                      textTransform: "uppercase",
                    }}
                  >
                    {col.name}
                  </span>
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: 7,
                      color: "#1B2D42",
                      opacity: 0.4,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {col.hex}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Application strip */}
        <Reveal delay={200}>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                flex: 3,
                background: "#1B2D42",
                padding: "28px 40px",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: 20,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#F7F2EC",
                  userSelect: "none",
                }}
              >
                OAK + MAIN
              </span>
            </div>
            <div
              style={{
                flex: 2,
                background: "#122033",
                padding: "28px 40px",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: 20,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#D5BE97",
                  userSelect: "none",
                }}
              >
                OAK + MAIN
              </span>
            </div>
            <div
              style={{
                flex: 2,
                background: "#E3DACE",
                padding: "28px 40px",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: 20,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#1B2D42",
                  userSelect: "none",
                }}
              >
                OAK + MAIN
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
