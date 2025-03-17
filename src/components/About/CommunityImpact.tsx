import { FC } from 'react'

const CommunityImpact: FC = () => {
    return (
        <>
            {/* Community Impact Section - With gradient background and fully responsive */}
            <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
                {/* Main gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 via-zinc-700/90 to-zinc-800/10" />

                {/* Decorative gradient elements */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl opacity-20" />
                <div className="absolute -top-32 left-1/3 w-64 h-64 bg-zinc-600/20 rounded-full blur-3xl opacity-30" />

                {/* Content container with better responsive padding */}
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
                        {/* Image section - Enhanced for mobile and desktop */}
                        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                            <div className="relative rounded-xl overflow-hidden shadow-xl transform lg:hover:scale-[1.02] transition-transform duration-300">
                                {/* Image with better loading approach */}
                                <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 bg-cover bg-center" style={{ backgroundImage: 'url(./images/expo2024.jpg)' }} role="img" aria-label="Monthly meetups across New Zealand cities" />

                                {/* Enhanced gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-zinc-800/40 to-zinc-900/70" />

                                {/* Caption with improved styling */}
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <div
                                        className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg 
                                        bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 
                                        border border-green-500/40 
                                        max-w-xs sm:max-w-sm 
                                        backdrop-blur-sm 
                                        transform hover:scale-105 transition-transform duration-300"
                                    >
                                        <p className="text-center text-sm sm:text-base text-white">Monthly meetups across 14 New Zealand cities</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content section - Improved responsive layout */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="alegreya text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                                Community <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Impact</span>
                            </h2>

                            <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                {/* Card 1 - Enhanced with gradient and better responsive padding */}
                                <div
                                    className="border border-green-500/30 rounded-lg p-3 sm:p-4 md:p-5
                                     bg-gradient-to-b from-zinc-800/70 to-zinc-800/40
                                     hover:border-green-400/70 hover:bg-gradient-to-b hover:from-zinc-800/60 hover:to-green-900/10
                                     hover:shadow-[0_0_15px_rgba(74,222,128,0.15)]
                                     transform hover:translate-y-[-2px] hover:scale-[1.01]
                                     transition-all duration-300 backdrop-blur-sm"
                                >
                                    <p className="text-zinc-100 text-sm sm:text-base">We founded and run the NZ Peer-to-Peer Crypto Marketplace – enabling Kiwis to trade directly with each other without intermediaries.</p>
                                </div>

                                {/* Card 2 */}
                                <div
                                    className="border border-green-500/30 rounded-lg p-3 sm:p-4 md:p-5
                                     bg-gradient-to-b from-zinc-800/70 to-zinc-800/40
                                     hover:border-green-400/70 hover:bg-gradient-to-b hover:from-zinc-800/60 hover:to-green-900/10
                                     hover:shadow-[0_0_15px_rgba(74,222,128,0.15)]
                                     transform hover:translate-y-[-2px] hover:scale-[1.01]
                                     transition-all duration-300 backdrop-blur-sm"
                                >
                                    <p className="text-zinc-100 text-sm sm:text-base">CNZ is the guardian of New Zealand's largest Bitcoin & crypto Facebook groups, host to over 28,000 NZ members.</p>
                                </div>

                                {/* Card 3 */}
                                <div
                                    className="border border-green-500/30 rounded-lg p-3 sm:p-4 md:p-5
                                     bg-gradient-to-b from-zinc-800/70 to-zinc-800/40
                                     hover:border-green-400/70 hover:bg-gradient-to-b hover:from-zinc-800/60 hover:to-green-900/10
                                     hover:shadow-[0_0_15px_rgba(74,222,128,0.15)]
                                     transform hover:translate-y-[-2px] hover:scale-[1.01]
                                     transition-all duration-300 backdrop-blur-sm"
                                >
                                    <p className="text-zinc-100 text-sm sm:text-base">We own and administrate r/NZBitcoin, New Zealand's legacy Bitcoin forum dating back to 2013.</p>
                                </div>
                            </div>

                            {/* Additional CTA button for desktop only */}
                            <div className="hidden lg:block mt-6">
                                <a
                                    href="/web-core/#/web-core"
                                    className="inline-flex items-center px-4 py-2 bg-green-500/20 hover:bg-green-500/30
                                    border border-green-500/40 hover:border-green-400/70
                                    rounded-lg text-green-400 transition-all duration-300
                                    hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]"
                                >
                                    <span>View our full impact report</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile-only CTA - centered at bottom */}
                    <div className="lg:hidden flex justify-center mt-6 sm:mt-8">
                        <a
                            href="/web-core/#/web-core"
                            className="inline-flex items-center px-3 py-2 bg-green-500/20 hover:bg-green-500/30
                            border border-green-500/40 hover:border-green-400/70
                            rounded-lg text-green-400 text-sm transition-all duration-300"
                        >
                            <span>View our full impact report</span>
                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommunityImpact
