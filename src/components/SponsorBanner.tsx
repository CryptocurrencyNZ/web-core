
function SponsorBanner() {
  const sponsors = [
    { src: "src/assets/images/Blockchain-NZ-logo-removebg-preview.png", alt: "Sponsor 1" },
    { src: "src/assets/images/CoinFlip_Logo-2048x1074-removebg-preview.png", alt: "Sponsor 2" },
    { src: "src/assets/images/Crypto-Consulting-NZ-Background-1536x280.png", alt: "Sponsor 3" },
    { src: "src/assets/images/easy-crypto-NZ-logo.png", alt: "Sponsor 4" },
    { src: "src/assets/images/Koura-Wealth-Logo-Black-CMYK-1-1024x123-removebg-preview.png", alt: "Sponsor 5" },
    { src: "src/assets/images/logoLarge-1-2048x721.png", alt: "Sponsor 6" },
    { src: "src/assets/images/nz-l-1.png", alt: "Sponsor 7" },
    { src: "src/assets/images/Pest-Free-Token-NZ-Logo.png", alt: "Sponsor 8" },
    { src: "src/assets/images/PIN-TOKEN-NZ-Logo-1024x291.png", alt: "Sponsor 9" },
    { src: "src/assets/images/Web3NZ_BlackColour-1024x209.png", alt: "Sponsor 10" },
  ];

  return (
    <section className="sponsor-banner">
      <div className="sponsor-track">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-logo">
            <img src={sponsor.src} alt={sponsor.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SponsorBanner;
