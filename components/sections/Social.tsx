import Reveal from "../Reveal";

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

const GRID = [
  { bg: "#1B2D42", tc: "#F7F2EC",  copy: "Oak + Main is coming.",          logo: true  },
  { bg: "#E3DACE", tc: "#1B2D42",  copy: "A first look inside.",            logo: false },
  { bg: "#F7F2EC", tc: "#1B2D42",  copy: "Hi, I'm Kayla.",                  logo: false },
  { bg: "#F7F2EC", tc: "#1B2D42",  copy: "First arrivals.",                 logo: false },
  { bg: "#1B2D42", tc: "#D5BE97",  copy: "Made for real life.",             logo: true  },
  { bg: "#E3DACE", tc: "#8D7A67",  copy: "The details.",                    logo: false },
  { bg: "#1B2D42", tc: "#F7F2EC",  copy: "Grand Opening. August 24.",       logo: true  },
  { bg: "#D5BE97", tc: "#1B2D42",  copy: "We made this for you.",           logo: true  },
  { bg: "#F7F2EC", tc: "#1B2D42",  copy: "Follow along.",                   logo: false },
];

const HIGHLIGHTS = [
  { bg: "#1B2D42", tc: "#D5BE97", label: "Arrivals" },
  { bg: "#122033", tc: "#F7F2EC", label: "Denim" },
  { bg: "#F7F2EC", tc: "#1B2D42", label: "Dresses" },
  { bg: "#E3DACE", tc: "#1B2D42", label: "Tops" },
  { bg: "#8D7A67", tc: "#F7F2EC", label: "Access." },
  { bg: "#122033", tc: "#D5BE97", label: "VIP" },
  { bg: "#F7F2EC", tc: "#8D7A67", label: "About" },
  { bg: "#E3DACE", tc: "#8D7A67", label: "Reviews" },
];

export default function Social() {
  return (
    <section
      id="social"
      className="section-pad"
      style={{
        background: "#F7F2EC",
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
          Social Presence
          </span>
        </Reveal>

        <div className="social-layout" style={{ display: "flex", gap: 64, alignItems: "flex-start" }}>
          {/* Left: Profile + Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: 48, flex: 1, minWidth: 0 }}>
            {/* Profile icon */}
            <Reveal delay={100}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 7.5,
                    letterSpacing: "0.18em",
                    color: "#1B2D42",
                    opacity: 0.35,
                    textTransform: "uppercase",
                  }}
                >
                  Profile Icon
                </span>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "#1B2D42",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: SERIF,
                      fontSize: 28,
                      color: "#D5BE97",
                      userSelect: "none",
                    }}
                  >
                    OM
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Highlights */}
            <Reveal delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 7.5,
                    letterSpacing: "0.18em",
                    color: "#1B2D42",
                    opacity: 0.35,
                    textTransform: "uppercase",
                  }}
                >
                  Story Highlights
                </span>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 12,
                  }}
                >
                  {HIGHLIGHTS.map((h) => (
                    <div
                      key={h.label}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          background: h.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: h.bg === "#F7F2EC" ? "0.5px solid #1B2D4218" : "none",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: SERIF,
                            fontSize: 11,
                            color: h.tc,
                            userSelect: "none",
                          }}
                        >
                          OM
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: SANS,
                          fontSize: 7,
                          color: "#1B2D42",
                          opacity: 0.45,
                          textAlign: "center",
                        }}
                      >
                        {h.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: 9-post grid */}
          <Reveal delay={300}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 2, minWidth: 0 }}>
              <span
                style={{
                  fontFamily: SANS,
                  fontSize: 7.5,
                  letterSpacing: "0.18em",
                  color: "#1B2D42",
                  opacity: 0.35,
                  textTransform: "uppercase",
                }}
              >
                Launch Grid
              </span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 3,
                }}
              >
                {GRID.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      background: p.bg,
                      aspectRatio: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "12px 10px",
                      gap: 4,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: 6,
                        left: 7,
                        fontFamily: SANS,
                        fontSize: 6,
                        color: p.tc,
                        opacity: 0.25,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.logo && (
                      <span
                        style={{
                          fontFamily: SERIF,
                          fontSize: 8,
                          letterSpacing: "0.16em",
                          color: p.tc,
                          textTransform: "uppercase",
                          textAlign: "center",
                          userSelect: "none",
                        }}
                      >
                        OAK + MAIN
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: SANS,
                        fontSize: 7.5,
                        color: p.tc,
                        textAlign: "center",
                        lineHeight: 1.5,
                        opacity: 0.85,
                      }}
                    >
                      {p.copy}
                    </span>
                    <span style={{ fontFamily: SERIF, fontSize: 7, color: "#D5BE97", opacity: 0.65 }}>
                      OM
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
