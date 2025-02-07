import { FC } from 'react';

interface GalleryItem {
    category: string;
    title: string;
    description: string;
    image: string;
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
    ];

    return (
        <section className="relative py-8 px-4">
            {/* Background with different pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-green-500/10 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
            </div>
            
            {/* Content */}
            <div className="relative max-w-4xl mx-auto z-10">
                <h2 className="alegreya text-2xl md:text-3xl font-bold text-center mb-2 text-white">
                    Monthly Meetups
                </h2>
                <p className="text-green-100 text-center text-sm md:text-base mb-6">
                    Explore the vibrant landscape of New Zealand's cryptocurrency innovation and infrastructure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {items.map((item, index) => (
                        <div 
                            key={index} 
                            className="relative group bg-white/90 rounded-lg overflow-hidden
                                     border border-green-400/30 hover:border-green-400/70 
                                     transition-all duration-300 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]"
                            data-category={item.category}
                        >
                            <div className="h-56 w-full">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Dark overlay for better text readability */}
                                <div className="absolute inset-0 bg-black opacity-20" />
                                
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 
                                              opacity-0 group-hover:opacity-90 transition-opacity duration-300 
                                              flex flex-col items-center justify-center p-4"
                                >
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="block text-green-100 text-xs font-medium mb-1">
                                            {item.category}
                                        </span>
                                        <h3 className="text-white text-lg font-bold mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-green-50 text-xs">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative lines */}
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
        </section>
    );
};

export default Gallery;