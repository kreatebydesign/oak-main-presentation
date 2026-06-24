import Reveal from "../Reveal";
import MonogramPlus from "../MonogramPlus";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

export default function Events() {
  return (
    <section
      id="events"
      className="section-pad"
      style={{
        background: "#1B2D42",
        padding: "100px 80px 120px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 64, alignItems: "center" }}>
        <Reveal>
          <span
            style={{
              fontFamily: SANS,
              fontSize: 9,
              letterSpacing: "0.28em",
              color: "#D5BE97",
              opacity: 0.7,
              textTransform: "uppercase",
            }}
          >
            Event Experience
          </span>
        </Reveal>

        <Reveal delay={100}>
          <div
            style={{
              background: "#F7F2EC",
              padding: "60px 56px",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
              maxWidth: 420,
              width: "100%",
            }}
          >
            <span
              style={{
                fontFamily: SANS,
                fontSize: 7,
                letterSpacing: "0.22em",
                color: "#1B2D42",
                opacity: 0.4,
                textTransform: "uppercase",
              }}
            >
              Grand Opening
            </span>

            <span
              style={{
                fontFamily: SERIF,
                fontSize: 18,
                letterSpacing: "0.22em",
                color: "#1B2D42",
                textTransform: "uppercase",
                userSelect: "none",
              }}
            >
              OAK + MAIN
            </span>

            <div style={{ width: 32, height: 0.4, background: "#8D7A67", opacity: 0.5 }} />

            <span
              style={{
                fontFamily: SERIF,
                fontSize: 15,
                fontStyle: "italic",
                color: "#1B2D42",
                textAlign: "center",
                lineHeight: 1.6,
                userSelect: "none",
              }}
            >
              Cocktails &amp; Appetizers Provided
            </span>

            <div style={{ height: 8 }} />

            <span
              style={{
                fontFamily: SANS,
                fontSize: 7,
                letterSpacing: "0.18em",
                color: "#1B2D42",
                opacity: 0.45,
                textAlign: "center",
                lineHeight: 2,
                textTransform: "uppercase",
              }}
            >
              Thursday, July 9{"\n"}
              5:00 PM – 7:00 PM
            </span>

            <div style={{ height: 8 }} />

            <span
              style={{
                fontFamily: SANS,
                fontSize: 7,
                letterSpacing: "0.14em",
                color: "#1B2D42",
                opacity: 0.45,
                textAlign: "center",
                lineHeight: 2,
                textTransform: "uppercase",
              }}
            >
              Inside TLC Salon{"\n"}
              250 NE Garden Valley Blvd.{"\n"}
              Suite #17{"\n"}
              Roseburg, OR 97470
            </span>

            <div style={{ height: 12 }} />
            <MonogramPlus color="#8D7A67" size={28} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
