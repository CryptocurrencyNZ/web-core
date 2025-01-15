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
            category: 'Christchurch',
            title: 'Chrsitchurch Meetup',
            description: 'Secure, high-performance trading platforms',
            image: './images/Chch.jpg'
        },
        {
            category: 'Hawkes Bay',
            title: 'Hawkes Bay Meetup',
            description: 'Sustainable blockchain infrastructure',
            image: './images/hawkes bay.jpeg'
        },
        {
            category: 'Hawkes Bay',
            title: 'Hawkes Bay Meetup',
            description: 'Cutting-edge distributed ledger technologies',
            image: './images/hawkes bay 2.jpeg'
        },
        {
            category: 'Tauranga',
            title: 'Tauranga Meetup',
            description: 'Nurturing next-generation crypto entrepreneurs',
            image: './images/tauranga.jpg'
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
