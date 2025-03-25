import { useState } from 'react'

interface Sponsor {
    name: string
    image: string
    description: string
    website: string
}

const SponsorBanner = () => {
    // State to track which sponsor card is currently active (tapped)
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)

    const sponsors: Sponsor[] = [
        {
            name: 'Easy Crypto',
            image: './images/easy-crypto-NZ-logo.png',
            description: 'New Zealands trusted cryptocurrency retail platform for buying and selling cryptocurrency.',
            website: 'https://easycrypto.com'
        },
        {
            name: 'Blockchain NZ',
            image: './images/Blockchain-NZ-logo-removebg-preview.png',
            description: 'Leading blockchain advocacy and education organization in New Zealand.',
            website: 'https://blockchain.org.nz'
        },
        {
            name: 'Binance NZ',
            image: './images/nz-l-1.png',
            description: 'Supporting blockchain and digital asset initiatives across New Zealand.',
            website: 'https://www.binance.com/en-NZ'
        },
        {
            name: 'PIN Token',
            image: './images/PIN-logo.png',
            description: 'Innovative token project focused on community engagement and sustainability.',
            website: 'https://payitnow.io/'
        },
        {
            name: 'Web3NZ',
            image: './images/Web3NZ_BlackColour-1024x209.png',
            description: 'Advancing Web3 adoption and innovation across New Zealand.',
            website: 'https://web3nz.xyz/'
        },
        {
            name: 'Crypto Consulting',
            image: './images/Crypto-Consulting-NZ-Background-1536x280.png',
            description: 'Expert cryptocurrency consulting services tailored for New Zealand businesses.',
            website: 'https://cryptoconsulting.co.nz'
        },
        {
            name: 'UC CryptoSoc DAO',
            image: './images/Crypto-Soc-UC-removebg-preview.png',
            description: 'University of Canterburys student-led cryptocurrency and blockchain society.',
            website: 'https://ucsa.org.nz/clubs/crypto-soc-uc'
        },
        {
            name: 'CoinFlip',
            image: './images/CoinFlip_Logo-2048x1074-removebg-preview.png',
            description: 'Leading Bitcoin ATM operator making crypto accessible to everyone.',
            website: 'https://coinflip.tech'
        },
        {
            name: 'Koura Wealth',
            image: './images/Koura-Wealth-Logo-Black-CMYK-1-1024x123-removebg-preview.png',
            description: 'Modern KiwiSaver provider integrating digital assets into retirement portfolios.',
            website: 'https://kourawealth.co.nz'
        },
        {
            name: 'Axia Labs',
            image: './images/logoLarge-1-2048x721.png',
            description: 'Building innovative blockchain solutions for the future.',
            website: 'https://axialabs.org/'
        },
        {
            name: 'Pest Free Token',
            image: './images/Pest-Free-Token-NZ-Logo.png',
            description: 'Leveraging blockchain technology to support New Zealands pest-free initiative.',
            website: 'https://pestfreetoken.co.nz/'
        }
    ]

    // Toggle card active state on tap/click
    const handleCardClick = (index: number) => {
        if (activeCardIndex === index) {
            // If tapping the same card, deactivate it
            setActiveCardIndex(null)
        } else {
            // Otherwise activate the tapped card
            setActiveCardIndex(index)
        }
    }

    return (
        <section className="relative py-10 sm:py-12 md:py-16 px-4 overflow-hidden">
            {/* Enhanced gradient background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-green-900/30 to-zinc-900" />

            {/* Decorative gradient elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl opacity-20" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-zinc-600/20 rounded-full blur-3xl opacity-20" />

            {/* Animated gradient particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 left-1/3 w-2 h-2 bg-green-400 rounded-full opacity-70 animate-float-slow" />
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-green-500 rounded-full opacity-60 animate-float-medium" />
                <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-green-300 rounded-full opacity-70 animate-float-fast" />
            </div>

            {/* Content with improved container constraints */}
            <div className="relative max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto z-10">
                <h2 className="alegreya text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 text-white">
                    Our <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text alegreya text-transparent">Sponsors</span> and Partners
                </h2>
                <p className="text-green-100 text-center text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">Proudly supported by New Zealand's leading blockchain, bitcoin, crypto, web3 and blockchain organizations.</p>

                {/* Improved responsive grid layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(index)}
                            className={`relative ${activeCardIndex === index ? 'scale-105 z-10 h-[180px] sm:h-[190px] md:h-[200px] lg:h-[220px]' : 'h-[90px] sm:h-[100px] md:h-[110px] lg:h-[120px]'} 
                            group bg-gradient-to-b from-white/40 to-white/20 rounded-lg backdrop-blur-sm 
                            border border-green-400/30 hover:border-green-400/70 
                            transition-all duration-300 p-3 sm:p-4 
                            hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] md:hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]
                            overflow-hidden sm:hover:scale-105 hover:z-10 cursor-pointer
                            ${activeCardIndex === index ? 'shadow-[0_0_20px_rgba(74,222,128,0.4)]' : ''}
                            sm:hover:h-[190px] md:hover:h-[200px] lg:hover:h-[220px]`}
                        >
                            {/* Sponsor Logo with better sizing for small screens */}
                            <div
                                className={`flex items-center justify-center 
                                ${activeCardIndex === index ? 'h-24 sm:h-28 md:h-32 lg:h-36' : 'h-16 sm:h-20 md:h-24'} 
                                transition-all duration-300`}
                            >
                                <img src={sponsor.image} alt={sponsor.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                            </div>

                            {/* Enhanced overlay with better mobile experience */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-b from-zinc-900/95 to-black/95
                                ${activeCardIndex === index ? 'opacity-100' : 'opacity-0 sm:group-hover:opacity-100'} 
                                transition-all duration-300 flex flex-col items-center justify-center p-4 sm:p-5`}
                            >
                                <div
                                    className={`transform ${activeCardIndex === index ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'} 
                                    transition-all duration-300 text-center flex flex-col items-center w-full h-full`}
                                >
                                    {/* Sponsor name in overlay */}
                                    <h3 className="text-green-300 font-semibold text-sm sm:text-base mb-2">{sponsor.name}</h3>

                                    {/* Description with better font sizing for readability */}
                                    <p className="text-green-100 text-xs sm:text-sm mb-3 sm:mb-4">{sponsor.description}</p>

                                    {/* Enhanced CTA button */}
                                    <a
                                        href={sponsor.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5
                                        bg-gradient-to-r from-green-500 to-green-600 text-white text-xs sm:text-sm rounded-lg 
                                        hover:from-green-600 hover:to-green-700 transition-all duration-300
                                        hover:shadow-[0_0_10px_rgba(74,222,128,0.4)]
                                        w-full sm:w-3/4 justify-center mt-auto"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Visit Website
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sponsor CTA */}
                <div className="mt-8 sm:mt-10 md:mt-12 text-center">
                    <a
                        href="/web-core/#/web-core"
                        className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 
                        bg-gradient-to-r from-green-500/20 to-green-600/10
                        hover:from-green-500/30 hover:to-green-600/20
                        border border-green-500/40 hover:border-green-400/60
                        rounded-lg text-green-400 hover:text-green-300 
                        shadow-sm hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]
                        transition-all duration-300 text-sm sm:text-base"
                    >
                        <span>Become a sponsor</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Enhanced gradient decorative lines */}
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-300/60 to-transparent" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        </section>
    )
}

export default SponsorBanner
