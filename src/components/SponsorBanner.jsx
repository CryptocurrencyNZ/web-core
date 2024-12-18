import React from 'react';
import '../css/sponsor.css';

const SponsorBanner = () => {
  const sponsors = [
    { name: "Blockchain NZ", image: "./images/Blockchain-NZ-logo-removebg-preview.png" },
    { name: "CoinFlip", image: "./images/CoinFlip_Logo-2048x1074-removebg-preview.png" },
    { name: "Crypto Consulting", image: "./images/Crypto-Consulting-NZ-Background-1536x280.png" },
    { name: "Crypto Soc UC", image: "./images/Crypto-Soc-UC-removebg-preview.png" },
    { name: "Easy Crypto", image: "./images/easy-crypto-NZ-logo.png" },
    { name: "Koura Wealth", image: "./images/Koura-Wealth-Logo-Black-CMYK-1-1024x123-removebg-preview.png" },
    { name: "Logo Large", image: "./images/logoLarge-1-2048x721.png" },
    { name: "NZ", image: "./images/nz-l-1.png" },
    { name: "Pest Free Token", image: "./images/Pest-Free-Token-NZ-Logo.png" },
    { name: "PIN Token", image: "./images/PIN-TOKEN-NZ-Logo-1024x291.png" },
    { name: "Web3NZ", image: "./images/Web3NZ_BlackColour-1024x209.png" }
  ];

  return (
    <section className="sponsor-section">
      <div className="sponsor-container">
        <h2 className="sponsor-title">Our Partners</h2>
        <p className="sponsor-description">Proudly supported by New Zealand's leading blockchain organizations</p>
        
        <div className="sponsor-grid">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              <img src={sponsor.image} alt={sponsor.name} />
              <div className="sponsor-overlay">
                <span>{sponsor.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorBanner;