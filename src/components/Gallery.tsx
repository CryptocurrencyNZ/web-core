import React from 'react'
import '../css/gallery.css'

interface GalleryItem {
    category: string
    title: string
    description: string
    image: string
}

const Gallery: React.FC = () => {
    const items: GalleryItem[] = [
        {
            category: 'exchange',
            title: 'Digital Exchanges',
            description: 'Secure, high-performance trading platforms',
            image: '/api/placeholder/600/400'
        },
        {
            category: 'mining',
            title: 'Green Mining',
            description: 'Sustainable blockchain infrastructure',
            image: '/api/placeholder/600/400'
        },
        {
            category: 'blockchain',
            title: 'Blockchain Innovation',
            description: 'Cutting-edge distributed ledger technologies',
            image: '/api/placeholder/600/400'
        },
        {
            category: 'startup',
            title: 'Startup Ecosystem',
            description: 'Nurturing next-generation crypto entrepreneurs',
            image: '/api/placeholder/600/400'
        },
        {
            category: 'defi',
            title: 'Decentralized Finance',
            description: 'Revolutionizing financial services',
            image: '/api/placeholder/600/400'
        },
        {
            category: 'community',
            title: 'Community Hub',
            description: 'Connecting blockchain enthusiasts',
            image: '/api/placeholder/600/400'
        }
    ]

    return (
        <section className="gallery-section">
            <div className="gallery-container">
                <h2 className="section-title">
                    Crypto <span style={{ color: 'var(--accent-color)' }}>Ecosystem</span>
                </h2>
                <p className="section-description">Explore the vibrant landscape of New Zealand's cryptocurrency innovation and infrastructure.</p>

                <div className="gallery-grid">
                    {items.map((item, index) => (
                        <div key={index} className="gallery-item" data-category={item.category}>
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
    )
}

export default Gallery
