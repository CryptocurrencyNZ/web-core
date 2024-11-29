import gsap from "gsap";
import React, { useEffect } from "react";

interface HeroSectionProps {
  title?: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Welcome to Cryptocurrency NZ",
  description = "New Zealand Cryptocurrency Community Collective",
}) => {
  useEffect(() => {
    gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".hero-description", { opacity: 0, y: 30, duration: 1, delay: 0.3 });
    gsap.from(".hero-btn", { opacity: 0, scale: 0.9, duration: 0.8, delay: 0.5, stagger: 0.2 });
  }, []);

  return (
    <section className="hero-container flex items-center justify-between h-screen bg-dark-bg">
      {/* Left Section */}
      <div className="hero-left text-gray-100 px-8 md:w-1/2">
  <h1 className="hero-title text-4xl md:text-5xl font-bold mb-4">
    {title.split(" ").map((word, i) =>
      i === title.split(" ").length - 2 ? (
        <span key={i} style={{ color: "rgb(83, 82, 82)" }}>{`${word} `}</span>
      ) : i === title.split(" ").length - 1 ? (
        <span key={i} style={{ color: "rgb(27, 97, 0)" }}>{word}</span>
      ) : (
        `${word} `
      )
    )}
  </h1>
  <p className="hero-description text-gray-300 text-lg my-4">{description}</p>
  <div className="button-container flex gap-4 my-6">
    <a href="#explore" className="hero-btn bg-accent-color text-dark-bg">
      Get Started
    </a>
    <a href="#wallet" className="hero-btn bg-accent-color text-dark-bg">
      Get a Wallet
    </a>
    <a href="#crypto" className="hero-btn bg-accent-color text-dark-bg">
      Buy Crypto
    </a>
  </div>
  <p className="hero-description text-sm text-gray-400">
    Need help?{" "}
    <a href="#contact" className="text-highlight-color underline">
      Contact us
    </a>
  </p>
</div>


      {/* Right Section */}
      <div className="hero-right relative md:w-1/2">
        <div className="map-container relative w-full h-full">
          <img
            src="src/assets/hero/image__2_-removebg-preview.png"
            alt="New Zealand Map"
            className="map-image object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
