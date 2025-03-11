import { FC } from 'react'

const Mission: FC = () => {
    return (
        <>
            {/* Mission Section - with enhanced gradient background and optimized for all devices */}
            <section id="mission" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
                {/* Gradient Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 via-zinc-800/95 to-zinc-900/50" />
                
                {/* Decorative gradient elements */}
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-600/10 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-20" />
                <div className="absolute top-1/3 right-0 w-64 h-64 bg-zinc-600/30 rounded-full blur-3xl opacity-30" />
                
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="alegreya text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-white">
                        Our <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Mission</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-10 lg:gap-12">
                        {/* Text Content - Optimized for readability on all screens */}
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="border-l-2 border-green-500/50 pl-4 sm:pl-5 md:pl-6 mb-6 sm:mb-8">
                                <p className="text-zinc-100 text-base sm:text-lg mb-4 sm:mb-6">
                                    We're the guardians of Aotearoa's largest Bitcoin and crypto Facebook, Reddit, Discord and Meetup groups – home to 50,000+ Kiwi crypto enthusiasts.
                                </p>
                                <p className="text-zinc-100 text-base sm:text-lg mb-4 sm:mb-6">
                                    We run monthly DeFi Meetups across 14 of New Zealand's cities, including Auckland, Wellington, Christchurch and beyond, proudly supported by New Zealand's crypto titans.
                                </p>
                                <p className="text-zinc-100 text-base sm:text-lg">
                                    Here on the CNZ website, you'll find portals to the corners of our community – as well the backbone of the Cryptocurrency NZ project; our ultra simplified, no bullshit, step-by-step guide on how to get started with Bitcoin & crypto investing in New Zealand.
                                </p>
                            </div>

                            <div className="hidden lg:block">
                                <a
                                    href="#projects"
                                    className="inline-block text-green-400 hover:text-green-300 transition-all duration-300
                                    border-b border-green-500/30 hover:border-green-400/70 
                                    px-2 py-1 hover:px-3"
                                >
                                    Explore our projects →
                                </a>
                            </div>
                        </div>

                        {/* Card Section - Enhanced for all screen sizes */}
                        <div className="lg:w-1/2 order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0 w-full">
                            {/* Card for desktop - Enhanced with better effects */}
                            <div className="relative group perspective-1000 hidden lg:block">
                                {/* Animated Glow Effect */}
                                <div
                                    className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-green-500 to-green-300 
                                    rounded-xl opacity-20 group-hover:opacity-40 blur-xl
                                    transform group-hover:scale-110 transition-all duration-700"
                                />

                                {/* Main Card - Enhanced background */}
                                <div
                                    className="relative bg-gradient-to-b from-zinc-700/80 to-zinc-800/80 p-5 sm:p-6 rounded-lg 
                                    border border-green-500/30 overflow-hidden
                                    transform transition-all duration-700
                                    group-hover:rotate-y-6 group-hover:scale-105
                                    group-hover:shadow-[0_0_40px_rgba(74,222,128,0.25)]"
                                >
                                    {/* Hover Gradient Overlay - More subtle */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-green-400/10 to-transparent 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-700
                                        rounded-lg"
                                    />

                                    {/* Corner Accents - Better positioned */}
                                    <div
                                        className="absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-l-2 border-green-500/50 
                                        rounded-tl-lg transform -translate-x-1 -translate-y-1
                                        group-hover:border-green-400 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div
                                        className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-r-2 border-green-500/50 
                                        rounded-br-lg transform translate-x-1 translate-y-1
                                        group-hover:border-green-400 group-hover:scale-105 transition-all duration-700"
                                    />

                                    {/* Image or content - With improved gradient overlay */}
                                    <div className="relative h-56 sm:h-64 rounded-md overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center opacity-90"
                                            style={{ backgroundImage: 'url(./images/CCNZ-bg.png)' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-800/40 to-transparent" />

                                        <div className="absolute bottom-0 w-full p-4">
                                            <div className="flex items-center gap-3 text-sm text-zinc-100 bg-gradient-to-r from-green-500/20 to-green-400/5
                                                p-3 rounded-lg border border-green-500/30 backdrop-blur-sm">
                                                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                                <span>A Kiwis Guide to the Future of Money</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Improved mobile card - with gradient and better responsive design */}
                            <div className="block lg:hidden relative rounded-lg overflow-hidden">
                                {/* Card background with gradient */}
                                <div className="bg-gradient-to-b from-zinc-700/80 to-zinc-800/80 p-3 rounded-lg border border-green-500/30">
                                    <div className="relative">
                                        {/* Corner accents for mobile */}
                                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-green-500/50 rounded-tl-md" />
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-green-500/50 rounded-br-md" />
                                        
                                        {/* Image with better gradient overlay for mobile */}
                                        <div className="relative w-full h-40 sm:h-48 overflow-hidden rounded">
                                            <div
                                                className="w-full h-full bg-cover bg-center"
                                                style={{ backgroundImage: 'url(./images/CCNZ-bg.png)' }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-800/40 to-transparent" />
                                            
                                            {/* Information badge - enhanced with gradient for mobile */}
                                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                                <div className="bg-gradient-to-r from-green-500/20 to-green-400/5 p-2 sm:p-3 rounded-lg border border-green-500/30 backdrop-blur-sm flex items-center gap-2">
                                                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                                    <span className="text-xs sm:text-sm text-zinc-100">A Kiwis Guide to the Future of Money</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile CTA - better centered and styled */}
                            <div className="block lg:hidden mt-4 sm:mt-6 text-center">
                                <a
                                    href="#projects"
                                    className="inline-block text-green-400 hover:text-green-300 transition-all duration-300
                                    border-b border-green-500/30 hover:border-green-400/70 
                                    px-2 py-1 text-sm sm:text-base"
                                >
                                    Explore our projects →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Mission;