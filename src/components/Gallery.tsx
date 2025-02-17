import { FC } from 'react'

interface GalleryItem {
    category: string
    title: string
    description: string
    image: string
}

const Gallery: FC = () => {
    const items: GalleryItem[] = [
        {
            category: 'Christchurch',
            title: 'Christchurch Meetup',
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
        <section className="relative min-h-screen">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video className="absolute w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="/path-to-your-video.mp4" type="video/mp4" />
                </video>

                {/* Video Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
            </div>

            {/* Main Content Section */}
            <div className="relative z-10 py-8 px-4">
                {/* Header Content */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="alegreya text-2xl md:text-3xl font-bold text-center mb-2 text-white">Cryptocurrency NZ Monthly Meetups</h2>
                    <p className="text-green-100 text-center text-sm md:text-base mb-6">Discover the dynamic evolution of Aotearoa's cryptocurrency, blockchain, and Web3 ecosystem, blending social impact, industry growth, investment opportunities, and futuristic innovation.</p>
                </div>

                {/* Gallery Grid */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="relative group bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden
                                         border border-green-400/30 hover:border-green-400/70 
                                         transition-all duration-300 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]"
                                data-category={item.category}
                            >
                                <div className="h-56 w-full">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

                                    {/* Dark overlay for better text readability */}
                                    <div className="absolute inset-0 bg-black opacity-20" />

                                    {/* Hover overlay */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 
                                                  opacity-0 group-hover:opacity-90 transition-opacity duration-300 
                                                  flex flex-col items-center justify-center p-4"
                                    >
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="block text-green-100 text-xs font-medium mb-1">{item.category}</span>
                                            <h3 className="text-white text-lg font-bold mb-1">{item.title}</h3>
                                            <p className="text-green-50 text-xs">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
        </section>
    )
}

export default Gallery
