import Reveal from "../Reveal";
import Wordmark from "../Wordmark";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

interface CardProps {
  front?: boolean;
  bg?: string;
  wordColor?: string;
  boutiqueColor?: string;
  name?: string;
  email?: string;
  phone?: string;
}

function BusinessCard({
  front = true,
  bg = "#F7F2EC",
  wordColor = "#1B2D42",
  boutiqueColor,
  name,
  email,
  phone,
}: CardProps) {
  const bc = boutiqueColor ?? wordColor;

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
        gap: front ? 0 : 8,
        border: bg === "#F7F2EC" ? "0.5px solid #1B2D4214" : "none",
        boxShadow: "0 4px 32px rgba(27,45,66,0.06)",
        flexShrink: 0,
      }}
    >
      {front ? (
        <Wordmark size={15} color={wordColor} boutiqueColor={bc} />
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
          {email && (
            <a
              href={`mailto:${email}`}
              style={{
                fontFamily: SANS,
                fontSize: 8,
                fontWeight: 300,
                color: "#8D7A67",
                letterSpacing: "0.03em",
                textDecoration: "none",
              }}
            >
              {email}
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              style={{
                fontFamily: SANS,
                fontSize: 8,
                fontWeight: 300,
                color: "#8D7A67",
                letterSpacing: "0.03em",
                textDecoration: "none",
              }}
            >
              {phone}
            </a>
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

        <Reveal delay={100}>
          <div className="card-pair" style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <BusinessCard
              front
              bg="#F7F2EC"
              wordColor="#1B2D42"
              boutiqueColor="#D5BE97"
            />
            <BusinessCard
              front={false}
              bg="#F7F2EC"
              name="Kayla Knight"
              email="shopgirlkk@msn.com"
              phone="(541) 430-8219"
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
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
            700gsm cotton stock · Soft-touch matte laminate · 3.5&quot; × 2&quot;
          </span>
        </Reveal>
      </div>
    </section>
  );
}
