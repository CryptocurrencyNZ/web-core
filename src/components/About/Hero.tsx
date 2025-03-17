import { FC } from 'react'
import { ChevronDown } from 'lucide-react'

const AboutHero: FC = () => {
    return (
        <>
            {/* Hero Section - Responsive height adjustments */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-24">
                {/* Background elements - lightened gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-800/10 to-zinc-700/70" />

                {/* Background image with lighter overlay - improved mobile handling */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-cover bg-center opacity-30 md:opacity-40" style={{ backgroundImage: 'url(./images/nz-skyline.jpg)' }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/80 via-zinc-700/50 to-zinc-800/80 md:from-zinc-800/70 md:via-zinc-700/40 md:to-zinc-800/70" />
                </div>

                {/* Main hero content with improved responsive padding */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 md:py-10 lg:py-12 mt-4 md:mt-6 lg:mt-8">
                    <div className="relative group perspective-1000 mb-4 md:mb-6 lg:mb-8 inline-block">
                        {/* Animated Background Glow - optimized for mobile */}
                        <div
                            className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-green-500 to-green-300 
                            rounded-xl opacity-20 md:opacity-25 group-hover:opacity-40 md:group-hover:opacity-50 blur-lg md:blur-xl
                            transform group-hover:scale-105 md:group-hover:scale-110 transition-all duration-700"
                        />

                        <h1
                            className="relative alegreya text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 
                           bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent
                           transform transition-all duration-700 group-hover:scale-105"
                        >
                            Cryptocurrency NZ
                        </h1>
                    </div>

                    <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 text-white">Est. July 2020. Christchurch, New Zealand.</p>

                        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-zinc-100">A New Zealand crypto community organization and guide on a mission to advance Bitcoin and crypto adoption, awareness and community across Aotearoa.</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                            <a
                                href="/web-core/#/web-core"
                                className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-green-500 text-zinc-900 font-semibold
                                rounded-lg transition-all duration-300 
                                hover:bg-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] md:hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]
                                inline-block relative overflow-hidden w-full sm:w-auto text-sm md:text-base"
                            >
                                <span className="relative z-10">Our Mission</span>
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 
                                    transform translate-x-full group-hover:translate-x-0 
                                    transition-transform duration-300"
                                />
                            </a>

                            <a
                                href="/web-core/#/web-core/about"
                                className="text-green-400 hover:text-green-300 transition-all duration-300
                                border-b border-green-500/30 hover:border-green-400/70 
                                px-3 sm:px-4 py-2 hover:px-5 sm:hover:px-6 mt-2 sm:mt-0 text-sm md:text-base"
                            >
                                Meet Our Team
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll down indicator - improved positioning */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-0 right-0 flex justify-center animate-bounce">
                    <a href="/web-core/#/web-core" className="text-green-400 hover:text-green-300 transition-colors duration-300 p-2" aria-label="Scroll to statistics">
                        <ChevronDown size={20} className="md:w-6 md:h-6" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default AboutHero
