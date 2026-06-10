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

export default function Home() {
  return (
    <>
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
