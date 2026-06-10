import Reveal from "../Reveal";
import Seal from "../Seal";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

function ShoppingBag({ scale = 1 }: { scale?: number }) {
  const w = 200 * scale;
  const h = 260 * scale;
  const f = (n: number) => n * scale;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Handles */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: f(120),
          marginBottom: -1,
        }}
      >
        <div style={{ width: f(2), height: f(40), background: "#D5BE97", borderRadius: f(1) }} />
        <div style={{ width: f(2), height: f(40), background: "#D5BE97", borderRadius: f(1) }} />
      </div>
      {/* Bag body */}
      <div
        style={{
          width: w,
          height: h,
          background: "#F7F2EC",
          border: "0.5px solid #1B2D4218",
          borderRadius: `0 0 ${f(3)}px ${f(3)}px`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: f(8),
        }}
      >
        <span
          style={{
            fontFamily: SERIF,
            fontSize: f(18),
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#1B2D42",
            userSelect: "none",
          }}
        >
          OAK + MAIN
        </span>
        <div style={{ width: f(50), height: 0.4, background: "#D5BE97", opacity: 0.6 }} />
        <span
          style={{
            fontFamily: SANS,
            fontSize: f(6),
            letterSpacing: "0.22em",
            color: "#1B2D42",
            opacity: 0.4,
            textTransform: "uppercase",
          }}
        >
          ROSEBURG, OREGON
        </span>
      </div>
    </div>
  );
}

function ClothingTag() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {/* Front */}
      <div
        style={{
          width: 80,
          height: 128,
          background: "#1B2D42",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "14px 10px",
          gap: 3,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 9,
            left: "50%",
            transform: "translateX(-50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            border: "0.5px solid #D5BE9740",
          }}
        />
        <div style={{ marginTop: 14 }} />
        {(["OAK", "+", "MAIN"] as const).map((w, i) => (
          <span
            key={w}
            style={{
              fontFamily: SERIF,
              fontSize: i === 1 ? 8 : 12,
              fontWeight: 400,
              letterSpacing: i === 1 ? "0.05em" : "0.2em",
              color: "#F7F2EC",
              textTransform: "uppercase",
              lineHeight: i === 1 ? 1.0 : 1.2,
              userSelect: "none",
            }}
          >
            {w}
          </span>
        ))}
        <span style={{ fontFamily: SERIF, fontSize: 8, color: "#D5BE97", marginTop: 6, letterSpacing: "0.04em" }}>OM</span>
      </div>
      {/* Back */}
      <div
        style={{
          width: 80,
          height: 128,
          background: "#1B2D42",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: SANS,
            fontSize: 7,
            letterSpacing: "0.12em",
            color: "#F7F2EC",
            textTransform: "uppercase",
            textAlign: "center",
            opacity: 0.75,
            lineHeight: 1.6,
          }}
        >
          ROSEBURG{"\n"}OREGON
        </span>
        <div style={{ width: 22, height: 0.4, background: "#D5BE97", opacity: 0.4 }} />
        <span
          style={{
            fontFamily: SANS,
            fontSize: 6,
            color: "#F7F2EC",
            opacity: 0.4,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          EST. 2024
        </span>
      </div>
    </div>
  );
}

function ThankYouCard() {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {/* Front */}
      <div
        style={{
          width: 144,
          height: 100,
          background: "#F7F2EC",
          border: "0.5px solid #1B2D4212",
          borderRadius: "3px 0 0 3px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 14px",
          gap: 9,
        }}
      >
        <span
          style={{
            fontFamily: SERIF,
            fontSize: 12,
            fontStyle: "italic",
            color: "#1B2D42",
            textAlign: "center",
            lineHeight: 1.6,
            userSelect: "none",
          }}
        >
          Thank you for shopping small.
        </span>
        <span style={{ fontFamily: SERIF, fontSize: 9, color: "#D5BE97", letterSpacing: "0.04em" }}>OM</span>
      </div>
      {/* Inside */}
      <div
        style={{
          width: 144,
          height: 100,
          background: "#E3DACE",
          borderLeft: "0.5px solid #1B2D4210",
          borderRadius: "0 3px 3px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 14px",
          gap: 7,
        }}
      >
        <span
          style={{
            fontFamily: SANS,
            fontSize: 7,
            fontWeight: 300,
            color: "#1B2D42",
            textAlign: "center",
            lineHeight: 1.9,
            opacity: 0.7,
          }}
        >
          We appreciate your support and hope you love what you found.
        </span>
        <span style={{ fontFamily: SERIF, fontSize: 8, color: "#1B2D42", opacity: 0.55, letterSpacing: "0.06em" }}>
          — Oak + Main
        </span>
      </div>
    </div>
  );
}

export default function Packaging() {
  return (
    <section
      id="packaging"
      className="section-pad"
      style={{
        background: "#F7F2EC",
        padding: "100px 80px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
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
          The Packaging Experience
          </span>
        </Reveal>

        {/* Bag hero row */}
        <div
          className="bag-layout"
          style={{
            display: "flex",
            gap: 80,
            alignItems: "flex-end",
          }}
        >
          <Reveal delay={100}>
            <ShoppingBag scale={1} />
          </Reveal>

          <Reveal delay={200} direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingBottom: 20 }}>
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: 28,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: "#1B2D42",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                  userSelect: "none",
                }}
              >
                Shopping Bag
              </span>
              <div style={{ width: 36, height: 0.5, background: "#D5BE97" }} />
              <span
                style={{
                  fontFamily: SANS,
                  fontSize: 8.5,
                  fontWeight: 300,
                  lineHeight: 2.1,
                  color: "#1B2D42",
                  opacity: 0.55,
                  letterSpacing: "0.04em",
                  maxWidth: 260,
                }}
              >
                Matte-coated Porcelain paper · Heritage Navy wordmark · Brushed Champagne rope handles · Structured base
              </span>
              <span
                style={{
                  fontFamily: SANS,
                  fontSize: 7.5,
                  fontWeight: 300,
                  color: "#1B2D42",
                  opacity: 0.35,
                  letterSpacing: "0.04em",
                  marginTop: 4,
                }}
              >
                Small · Medium · Large
              </span>
            </div>
          </Reveal>
        </div>

        {/* Three items row */}
        <Reveal delay={300}>
          <div
            className="grid-3col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            {/* Clothing Tag */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <ClothingTag />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontFamily: SERIF,
                    fontSize: 16,
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    color: "#1B2D42",
                    textTransform: "uppercase",
                    userSelect: "none",
                  }}
                >
                  Clothing Tag
                </span>
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 8,
                    color: "#1B2D42",
                    opacity: 0.45,
                    letterSpacing: "0.04em",
                    lineHeight: 1.9,
                  }}
                >
                  Heritage Navy · Champagne twine
                </span>
              </div>
            </div>

            {/* Thank You Card */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <ThankYouCard />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontFamily: SERIF,
                    fontSize: 16,
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    color: "#1B2D42",
                    textTransform: "uppercase",
                    userSelect: "none",
                  }}
                >
                  Thank You Card
                </span>
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 8,
                    color: "#1B2D42",
                    opacity: 0.45,
                    letterSpacing: "0.04em",
                    lineHeight: 1.9,
                  }}
                >
                  Porcelain stock · A2 flat card
                </span>
              </div>
            </div>

            {/* Seal Sticker */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Seal color="#D5BE97" size={140} id="pkg-seal" />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontFamily: SERIF,
                    fontSize: 16,
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    color: "#1B2D42",
                    textTransform: "uppercase",
                    userSelect: "none",
                  }}
                >
                  Seal Sticker
                </span>
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 8,
                    color: "#1B2D42",
                    opacity: 0.45,
                    letterSpacing: "0.04em",
                    lineHeight: 1.9,
                  }}
                >
                  2" die-cut · Matte vinyl · Navy & Champagne
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
