import Reveal from "../Reveal";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

const SEASONAL = [
  { bg: "#8D7A67", tc: "#F7F2EC", season: "FALL",         copy: "New Season. Timeless Style." },
  { bg: "#122033", tc: "#D5BE97", season: "HOLIDAY",      copy: "Shop Early. Give Beautifully." },
  { bg: "#F7F2EC", tc: "#1B2D42", season: "SPRING",       copy: "New Arrivals. Fresh Inspiration." },
  { bg: "#E3DACE", tc: "#1B2D42", season: "MOTHER'S DAY", copy: "Something Special for Mom." },
];

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
      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
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

        <div className="events-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {/* Grand Opening */}
          <Reveal delay={100}>
            <div
              style={{
                background: "#F7F2EC",
                padding: "60px 44px",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                height: "100%",
                justifyContent: "center",
                minHeight: 380,
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
                  maxWidth: 200,
                }}
              >
                A Thoughtful Opening. A Warm Welcome.
              </span>
              <div style={{ height: 16 }} />
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
                Saturday, August 24{"\n"}
                10:00 AM – 5:00 PM{"\n"}
                Roseburg, Oregon
              </span>
              <div style={{ height: 8 }} />
              <span style={{ fontFamily: SERIF, fontSize: 10, color: "#8D7A67", letterSpacing: "0.04em" }}>OM</span>
            </div>
          </Reveal>

          {/* VIP Night */}
          <Reveal delay={200}>
            <div
              style={{
                background: "#122033",
                padding: "60px 44px",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                height: "100%",
                justifyContent: "center",
                minHeight: 380,
              }}
            >
              <span
                style={{
                  fontFamily: SANS,
                  fontSize: 7,
                  letterSpacing: "0.22em",
                  color: "#D5BE97",
                  opacity: 0.45,
                  textTransform: "uppercase",
                }}
              >
                By Invitation Only
              </span>
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: 22,
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#F7F2EC",
                  textAlign: "center",
                  lineHeight: 1.4,
                  letterSpacing: "0.03em",
                  userSelect: "none",
                }}
              >
                An Evening at{"\n"}Oak + Main
              </span>
              <div style={{ width: 28, height: 0.4, background: "#D5BE97", opacity: 0.4 }} />
              <span
                style={{
                  fontFamily: SANS,
                  fontSize: 7,
                  letterSpacing: "0.18em",
                  color: "#F7F2EC",
                  opacity: 0.5,
                  textAlign: "center",
                  lineHeight: 2.1,
                  textTransform: "uppercase",
                }}
              >
                Friday, August 23{"\n"}
                6:00 PM – 8:00 PM{"\n"}
                Space is Limited
              </span>
              <div style={{ height: 12 }} />
              <span style={{ fontFamily: SERIF, fontSize: 10, color: "#D5BE97", letterSpacing: "0.04em" }}>OM</span>
            </div>
          </Reveal>

          {/* Seasonal grid */}
          <Reveal delay={300}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                height: "100%",
              }}
            >
              {SEASONAL.map((s) => (
                <div
                  key={s.season}
                  style={{
                    background: s.bg,
                    flex: 1,
                    padding: "20px 28px",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                    justifyContent: "center",
                    minHeight: 88,
                    border: s.bg === "#F7F2EC" ? "0.5px solid #1B2D4218" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: 6.5,
                      letterSpacing: "0.22em",
                      color: s.tc,
                      opacity: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    {s.season}
                  </span>
                  <span
                    style={{
                      fontFamily: SERIF,
                      fontSize: 14,
                      fontWeight: 400,
                      color: s.tc,
                      lineHeight: 1.4,
                      userSelect: "none",
                    }}
                  >
                    {s.copy}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
