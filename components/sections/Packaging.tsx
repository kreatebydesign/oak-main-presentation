import Reveal from "../Reveal";
import Seal from "../Seal";
import Wordmark from "../Wordmark";
import OakLeaf from "../concepts/OakLeaf";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

/**
 * ShoppingBag — matte Porcelain body, Heritage Navy wordmark.
 * No rule beneath the logo. Oak leaf as a subtle accent near the base.
 */
function ShoppingBag({ scale = 1 }: { scale?: number }) {
  const w = 200 * scale;
  const h = 260 * scale;
  const f = (n: number) => n * scale;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Rope handles — arched for realism */}
      <svg
        width={f(130)}
        height={f(44)}
        viewBox="0 0 130 44"
        style={{ marginBottom: -1 }}
      >
        <path
          d="M 30,42 C 30,12 46,4 65,4 C 84,4 100,12 100,42"
          fill="none"
          stroke="#D5BE97"
          strokeWidth={f(2)}
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>

      {/* Bag body */}
      <div
        style={{
          width:          w,
          height:         h,
          background:     "#F7F2EC",
          border:         "0.5px solid #1B2D4218",
          borderRadius:   `0 0 ${f(3)}px ${f(3)}px`,
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
          // Luxury bags position the mark slightly above true centre.
          // paddingBottom shifts the flex origin upward by half its value.
          paddingBottom:  f(24),
          position:       "relative",
        }}
      >
        {/* Shared Wordmark component — OAK + MAIN / Boutique, optically centred */}
        <Wordmark
          color="#1B2D42"
          size={f(18)}
          tracking="0.22em"
          boutiqueColor="#D5BE97"
        />

        {/* Oak leaf — subtle accent near bag base */}
        <div
          style={{
            position:    "absolute",
            bottom:      f(18),
            display:     "flex",
            alignItems:  "center",
            opacity:     0.25,
          }}
        >
          <OakLeaf size={f(13)} color="#1B2D42" sw={0.85} />
        </div>
      </div>
    </div>
  );
}

/**
 * ClothingTag — Heritage Navy card with stacked wordmark.
 * Front: OAK / + / MAIN + oak leaf accent.
 * Back: Location + Est.
 */
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
          gap: 2,
          position: "relative",
        }}
      >
        {/* Punch hole */}
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
        <div style={{ marginTop: 12 }} />
        {(["OAK", "+", "MAIN"] as const).map((w, i) => (
          <span
            key={w}
            style={{
              fontFamily:    SERIF,
              fontSize:      i === 1 ? 9 : 12,
              fontWeight:    400,
              letterSpacing: i === 1 ? "0.12em" : "0.20em",
              color:         "#F7F2EC",
              textTransform: "uppercase",
              lineHeight:    i === 1 ? 1.05 : 1.15,
              userSelect:    "none",
            }}
          >
            {w}
          </span>
        ))}
        {/* Oak leaf accent — replaces the OM */}
        <div style={{ marginTop: 6, opacity: 0.55 }}>
          <OakLeaf size={13} color="#D5BE97" sw={0.9} />
        </div>
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
          EST. 2026
        </span>
      </div>
    </div>
  );
}

/**
 * ThankYouCard — A2 flat card.
 * Front: italic sentiment. Inside: brand signature.
 * Oak leaf replaces the OM monogram as a subtle close.
 */
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
        {/* Oak leaf — delicate close */}
        <div style={{ opacity: 0.35 }}>
          <OakLeaf size={12} color="#1B2D42" sw={0.9} />
        </div>
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
        <span style={{ fontFamily: "var(--font-script), cursive", fontSize: 11, color: "#1B2D42", opacity: 0.65 }}>
          Oak + Main
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
                Matte-coated Porcelain paper · Heritage Navy wordmark · Brushed Champagne rope handles · Structured base · Oak leaf accent
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
                  Heritage Navy · Oak leaf accent · Champagne twine
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
                  Porcelain stock · A2 flat card · Cashmere interior
                </span>
              </div>
            </div>

            {/* Seal Sticker */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Seal color="#1B2D42" size={140} id="pkg-seal" />
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
                  2&quot; die-cut · Matte vinyl · Oak leaf motif · Navy &amp; Champagne
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
