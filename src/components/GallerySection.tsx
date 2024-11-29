import React, { useState } from "react";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "exchange",
    title: "Digital Exchanges",
    description: "Secure, high-performance trading platforms",
    image: "/api/placeholder/600/400",
  },
  {
    id: 2,
    category: "mining",
    title: "Green Mining",
    description: "Sustainable blockchain infrastructure",
    image: "/images/mining.jpg",
  },
  {
    id: 3,
    category: "blockchain",
    title: "Blockchain Innovation",
    description: "Cutting-edge distributed ledger technologies",
    image: "/images/blockchain.jpg",
  },
  {
    id: 4,
    category: "startup",
    title: "Startup Ecosystem",
    description: "Nurturing next-generation crypto entrepreneurs",
    image: "/images/startup.jpg",
  },
  {
    id: 5,
    category: "defi",
    title: "Decentralized Finance",
    description: "Revolutionizing financial services",
    image: "/images/defi.jpg",
  },
  {
    id: 6,
    category: "community",
    title: "Community Hub",
    description: "Connecting blockchain enthusiasts",
    image: "/images/community.jpg",
  },
];

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = activeCategory
    ? galleryItems.filter((item) => item.category === activeCategory)
    : galleryItems;

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="section-title">
          Crypto <span className="text-accent-color">Ecosystem</span>
        </h2>
        <p className="section-description">
          Explore the vibrant landscape of New Zealand's cryptocurrency innovation and infrastructure.
        </p>
        <div className="gallery-filter">
          <button
            className={`filter-btn ${!activeCategory ? "active" : ""}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeCategory === "exchange" ? "active" : ""}`}
            onClick={() => setActiveCategory("exchange")}
          >
            Exchange
          </button>
          <button
            className={`filter-btn ${activeCategory === "mining" ? "active" : ""}`}
            onClick={() => setActiveCategory("mining")}
          >
            Mining
          </button>
          <button
            className={`filter-btn ${activeCategory === "blockchain" ? "active" : ""}`}
            onClick={() => setActiveCategory("blockchain")}
          >
            Blockchain
          </button>
        </div>
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-item-inner">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
