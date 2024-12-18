import React from 'react';
import '../css/features.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "🔒",
      title: "Cryptocurrency",
      description: "State-of-the-art security measures and compliance with NZ regulations ensure your investments are protected.",
      stat: "99.99%",
      statLabel: "Uptime Security Rating"
    },
    {
      icon: "💰",
      title: "Wallets",
      description: "Competitive trading fees and transparent pricing structure to maximize your investment potential.",
      stat: "0.1%",
      statLabel: "Trading Fee"
    },
    {
      icon: "🚀",
      title: "P2P",
      description: "Lightning-fast execution and settlement of trades with real-time market updates.",
      stat: "<1s",
      statLabel: "Transaction Speed"
    },
    {
      icon: "🌿",
      title: "Community",
      description: "Committed to sustainable practices with renewable energy-powered operations across NZ.",
      stat: "100%",
      statLabel: "Green Energy Usage"
    }
  ];

  return (
    <section className="features-section">
      <h2 className="section-title">
        <span style={{ color: 'var(--accent-color)' }}>Cryptocurrency NZ</span>
      </h2>
      <p className="section-description">
        Experience the future of finance with New Zealand's most comprehensive cryptocurrency platform.
      </p>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-stat">{feature.stat}</div>
              <div className="feature-stat-label">{feature.statLabel}</div>
            </div>
            {index < features.length - 1 && <div className="arrow arrow-right"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Features;
