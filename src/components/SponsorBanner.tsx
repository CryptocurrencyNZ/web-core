interface Sponsor {
    name: string
    image: string
    description: string
    website: string
}

const SponsorBanner = () => {
    const sponsors: Sponsor[] = [
        {
            name: 'Blockchain NZ',
            image: './images/Blockchain-NZ-logo-removebg-preview.png',
            description: 'Leading blockchain advocacy and education organization in New Zealand.',
            website: 'https://blockchain.org.nz'
        },
        {
            name: 'CoinFlip',
            image: './images/CoinFlip_Logo-2048x1074-removebg-preview.png',
            description: 'Leading Bitcoin ATM operator making crypto accessible to everyone.',
            website: 'https://coinflip.tech'
        },
        {
            name: 'Crypto Consulting',
            image: './images/Crypto-Consulting-NZ-Background-1536x280.png',
            description: 'Expert cryptocurrency consulting services tailored for New Zealand businesses.',
            website: 'https://cryptoconsulting.co.nz'
        },
        {
            name: 'Crypto Soc UC',
            image: './images/Crypto-Soc-UC-removebg-preview.png',
            description: 'University of Canterburys student-led cryptocurrency and blockchain society.',
            website: 'https://ucsa.org.nz/clubs/crypto-soc-uc'
        },
        {
            name: 'Easy Crypto',
            image: './images/easy-crypto-NZ-logo.png',
            description: 'New Zealands trusted cryptocurrency retail platform for buying and selling digital assets.',
            website: 'https://easycrypto.com'
        },
        {
            name: 'Koura Wealth',
            image: './images/Koura-Wealth-Logo-Black-CMYK-1-1024x123-removebg-preview.png',
            description: 'Modern KiwiSaver provider integrating digital assets into retirement portfolios.',
            website: 'https://kourawealth.co.nz'
        },
        {
            name: 'Logo Large',
            image: './images/logoLarge-1-2048x721.png',
            description: 'Building innovative blockchain solutions for the future.',
            website: 'https://logolarge.co.nz'
        },
        {
            name: 'NZ',
            image: './images/nz-l-1.png',
            description: 'Supporting blockchain and digital asset initiatives across New Zealand.',
            website: 'https://nz.org'
        },
        {
            name: 'Pest Free Token',
            image: './images/Pest-Free-Token-NZ-Logo.png',
            description: 'Leveraging blockchain technology to support New Zealands pest-free initiative.',
            website: 'https://pestfreetoken.org'
        },
        {
            name: 'PIN Token',
            image: './images/PIN-TOKEN-NZ-Logo-1024x291.png',
            description: 'Innovative token project focused on community engagement and sustainability.',
            website: 'https://pintoken.nz'
        },
        {
            name: 'Web3NZ',
            image: './images/Web3NZ_BlackColour-1024x209.png',
            description: 'Advancing Web3 adoption and innovation across New Zealand.',
            website: 'https://web3.nz'
        }
    ]

    return (
        <section className="relative py-12 px-4">
            {/* Bright green background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-400/20 to-black" />

            {/* Content */}
            <div className="relative max-w-6xl mx-auto z-10">
                <h2 className="alegreya text-3xl md:text-4xl font-bold text-center mb-3 text-white">Our Sponsors and Partners</h2>
                <p className="text-green-100 text-center text-base md:text-lg mb-8">Proudly supported by New Zealand's leading blockchain, bitcoin, crypto, web3 and blockchain organizations.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="relative group bg-white/30 rounded-lg backdrop-blur-sm 
                     border border-green-400/30 hover:border-green-400/70 
                     transition-all duration-300 p-4 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]
                     overflow-hidden hover:scale-110 hover:z-10
                     md:hover:h-auto md:group-hover:h-auto
                     sm:group-hover:h-80 sm:h-48"
                        >
                            {/* Sponsor Logo */}
                            <div className="h-24 flex items-center justify-center">
                                <img src={sponsor.image} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                            </div>

                            {/* Hover Overlay */}
                            <div
                                className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 
                          group-focus:opacity-100 group-active:opacity-100
                          transition-all duration-300 flex flex-col items-center justify-center p-6"
                            >
                                <div
                                    className="transform translate-y-4 group-hover:translate-y-0 
                              transition-all duration-300 text-center flex flex-col items-center justify-between 
                              h-full w-full"
                                >
                                    <p className="text-green-100 text-sm mb-4">{sponsor.description}</p>
                                    <a
                                        href={sponsor.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-1 
                                 bg-green-500 text-white rounded-lg 
                                 hover:bg-green-600 transition-colors w-3/4 justify-center"
                                    >
                                        Visit Website
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brighter gradient decorative lines */}
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-300/60 to-transparent" />
        </section>
    )
}

export default SponsorBanner
