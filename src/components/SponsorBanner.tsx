interface Sponsor {
    name: string;
    image: string;
}

const SponsorBanner = () => {
    const sponsors: Sponsor[] = [
        { name: 'Blockchain NZ', image: './images/Blockchain-NZ-logo-removebg-preview.png' },
        { name: 'CoinFlip', image: './images/CoinFlip_Logo-2048x1074-removebg-preview.png' },
        { name: 'Crypto Consulting', image: './images/Crypto-Consulting-NZ-Background-1536x280.png' },
        { name: 'Crypto Soc UC', image: './images/Crypto-Soc-UC-removebg-preview.png' },
        { name: 'Easy Crypto', image: './images/easy-crypto-NZ-logo.png' },
        { name: 'Koura Wealth', image: './images/Koura-Wealth-Logo-Black-CMYK-1-1024x123-removebg-preview.png' },
        { name: 'Logo Large', image: './images/logoLarge-1-2048x721.png' },
        { name: 'NZ', image: './images/nz-l-1.png' },
        { name: 'Pest Free Token', image: './images/Pest-Free-Token-NZ-Logo.png' },
        { name: 'PIN Token', image: './images/PIN-TOKEN-NZ-Logo-1024x291.png' },
        { name: 'Web3NZ', image: './images/Web3NZ_BlackColour-1024x209.png' }
    ];

    return (
        <section className="relative py-12 px-4">
            {/* Bright green background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-400/20 to-black" />
            
            {/* Content */}
            <div className="relative max-w-6xl mx-auto z-10">
                <h2 className="alegreya text-3xl md:text-4xl font-bold text-center mb-3 text-white">
                    Our Sponsors and Partners
                </h2>
                <p className="text-green-100 text-center text-base md:text-lg mb-8">
                    Proudly supported by New Zealand's leading blockchain organizations
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sponsors.map((sponsor, index) => (
                        <div 
                            key={index} 
                            className="relative group bg-white/90 rounded-lg backdrop-blur-sm 
                                     border border-green-400/30 hover:border-green-400/70 
                                     transition-all duration-300 p-4 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]"
                        >
                            <div className="h-24 flex items-center justify-center">
                                <img
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 
                                          opacity-0 group-hover:opacity-98 transition-opacity duration-300 
                                          flex items-center justify-center rounded-lg"
                            >
                                <span className="text-white text-base font-semibold text-center px-3">
                                    {sponsor.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brighter gradient decorative lines */}
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-300/60 to-transparent" />
        </section>
    );
};

export default SponsorBanner;