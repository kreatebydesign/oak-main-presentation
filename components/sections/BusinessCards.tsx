import Reveal from "../Reveal";
import Wordmark from "../Wordmark";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

interface CardProps {
  front?: boolean;
  bg?: string;
  wordColor?: string;
  name?: string;
  email?: string;
  tagline?: string;
}

function BusinessCard({
  front = true,
  bg = "#F7F2EC",
  wordColor = "#1B2D42",
  name,
  email,
  tagline,
}: CardProps) {
  return (
    <div
      style={{
        width: 224,
        height: 128,
        background: bg,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "22px 28px",
        gap: front ? 9 : 8,
        border: bg === "#F7F2EC" ? "0.5px solid #1B2D4214" : "none",
        boxShadow: "0 4px 32px rgba(27,45,66,0.06)",
        flexShrink: 0,
      }}
    >
      {front ? (
        <>
          {/* Shared Wordmark component — optically centred Boutique */}
          <Wordmark size={15} color={wordColor} boutiqueColor={wordColor} />
          {tagline && (
            <span
              style={{
                fontFamily:    SANS,
                fontSize:      6.5,
                letterSpacing: "0.14em",
                color:         wordColor,
                opacity:       0.35,
                textTransform: "uppercase",
              }}
            >
              {tagline}
            </span>
          )}
        </>
      ) : (
        <>
          <span
            style={{
              fontFamily: SERIF,
              fontSize: 14,
              fontWeight: 400,
              color: "#1B2D42",
              letterSpacing: "0.04em",
              userSelect: "none",
            }}
          >
            {name}
          </span>
          <div style={{ width: 56, height: 0.3, background: "#1B2D42", opacity: 0.15 }} />
          {email && (
            <span
              style={{
                fontFamily: SANS,
                fontSize: 8,
                fontWeight: 300,
                color: "#8D7A67",
                letterSpacing: "0.03em",
              }}
            >
              {email}
            </span>
          )}
        </>
      )}
    </div>
  );
}

export default function BusinessCards() {
  return (
    <section
      id="cards"
      className="section-pad"
      style={{
        background: "#E3DACE",
        padding: "100px 80px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
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
          Business Card
          </span>
        </Reveal>

        {/* Porcelain set */}
        <Reveal delay={100}>
          <div className="card-pair" style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <BusinessCard front bg="#F7F2EC" wordColor="#1B2D42" tagline="Roseburg, Oregon" />
            <BusinessCard
              front={false}
              bg="#F7F2EC"
              name="Kayla Knight"
              email="shopgirlkk@msn.com"
            />
          </div>
        </Reveal>

        {/* Navy set */}
        <Reveal delay={200}>
          <div className="card-pair" style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <BusinessCard front bg="#1B2D42" wordColor="#F7F2EC" tagline="Roseburg, Oregon" />
            <BusinessCard
              front={false}
              bg="#F7F2EC"
              name="Kayla Knight"
              email="shopgirlkk@msn.com"
            />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
            <span
              style={{
                fontFamily: SERIF,
                fontSize: 18,
                fontWeight: 400,
                letterSpacing: "0.12em",
                color: "#1B2D42",
                textTransform: "uppercase",
                userSelect: "none",
              }}
            >
              Kayla Knight · Founder
            </span>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 8,
                color: "#1B2D42",
                opacity: 0.45,
                letterSpacing: "0.04em",
                lineHeight: 1.9,
                maxWidth: 360,
              }}
            >
              700gsm cotton stock · Soft-touch matte laminate · 3.5" × 2" · Two colorways
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
