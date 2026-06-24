import Nav from "@/components/Nav";
import HeroReveal from "@/components/sections/HeroReveal";
import LogoMark from "@/components/sections/LogoMark";
import BrandEssence from "@/components/sections/BrandEssence";
import ColorPalette from "@/components/sections/ColorPalette";
import Typography from "@/components/sections/Typography";
import Packaging from "@/components/sections/Packaging";
import BusinessCards from "@/components/sections/BusinessCards";
import Social from "@/components/sections/Social";
import Events from "@/components/sections/Events";
import Footer from "@/components/sections/Footer";

const SANS = "var(--font-montserrat), sans-serif";
const SERIF = "var(--font-cormorant), Didot, Georgia, serif";

export default function Home() {
  return (
    <>
      <div style={{
        background: "#122033",
        padding: "12px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 200,
      }}>
        <span style={{ fontFamily: SERIF, fontSize: 12, fontStyle: "italic", color: "#F7F2EC", opacity: 0.5 }}>
          Oak + Main
        </span>
        <span style={{
          fontFamily: SANS,
          fontSize: 7.5,
          letterSpacing: "0.22em",
          color: "#D5BE97",
          textTransform: "uppercase",
          opacity: 0.55,
        }}>
          Brand Identity — Final
        </span>
      </div>

      <Nav />
      <main>
        <HeroReveal />
        <LogoMark />
        <BrandEssence />
        <ColorPalette />
        <Typography />
        <Packaging />
        <BusinessCards />
        <Social />
        <Events />
        <Footer />
      </main>
    </>
  );
}
