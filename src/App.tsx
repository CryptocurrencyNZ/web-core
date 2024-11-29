import BackgroundAnimation from "./components/BackgroundAnimation";
import FeaturesSection from "./components/FeaturesSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import LaserAnimation from "./components/LaserAnimation";
import Navbar from "./components/Navbar";
import SponsorBanner from "./components/SponsorBanner";
//import "./styles/global.css"; // Global styles

function App() {
  return (
    <>
      <Navbar />
      <BackgroundAnimation />
      <HeroSection />
      <SponsorBanner />
      <GallerySection />
      <FeaturesSection />
      <LaserAnimation />
    </>
  );
}

export default App;
