import { FC } from 'react'
import { motion } from 'framer-motion'

const GetStartedHero: FC = () => {
    return (
        <div className="relative w-full flex flex-col lg:flex-row justify-between m-0 p-0 min-h-screen">
            {/* Background gradient & effects - matching other pages */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800/95 to-zinc-900 z-0" />

            {/* Decorative gradient elements */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-600/10 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl opacity-20 z-0" />

            {/* Decorative diagonal lines */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent transform -translate-x-1/2 -rotate-12" />
                <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent transform translate-x-1/2 -rotate-12" />
            </div>

            {/* Content section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-8 md:px-[10%] py-16 lg:py-0 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-xl">
                    <h1 className="alegreya text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        How to <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Get Started</span> with Cryptocurrency in NZ
                    </h1>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-base sm:text-lg md:text-xl text-zinc-100 mb-8">
                        Getting started with cryptocurrency is safe, fast and easy. It's possible to learn the basics, set up a wallet, and buy and own cryptocurrency in New Zealand in around 30 minutes or less.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="flex flex-wrap gap-4">
                        <a
                            href="#step-1"
                            className="group px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-zinc-900 font-semibold
                            rounded-lg transition-all duration-300 
                            hover:bg-green-400 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]
                            inline-block relative overflow-hidden"
                        >
                            <span className="relative z-10">Start Learning</span>
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 
                                transform translate-x-full group-hover:translate-x-0 
                                transition-transform duration-300"
                            />
                        </a>

                        <a
                            href="#quick-guide"
                            className="text-green-400 hover:text-green-300 transition-all duration-300
                            border-b border-green-500/30 hover:border-green-400/70 
                            px-4 py-2 hover:px-6"
                        >
                            Quick Guide
                        </a>
                    </motion.div>

                    {/* Step indicators */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.7 }} className="mt-12 flex space-x-4">
                        {['Learn', 'Wallet', 'Buy', 'Secure'].map((step, index) => (
                            <div key={index} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                                        <span className="text-green-400 font-semibold">{index + 1}</span>
                                    </div>
                                    <span className="text-xs text-zinc-300 mt-1">{step}</span>
                                </div>
                                {index < 3 && <div className="w-6 h-px bg-green-500/30 ml-2"></div>}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Image section - FIXED with better sizing and positioning */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative z-10 p-8 lg:p-0">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="relative w-full max-w-xl">
                    {/* Background box with gradient border */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 via-green-300/20 to-green-600/30 rounded-xl blur-lg opacity-50" />

                    {/* Main image container with stylish border */}
                    <div className="relative overflow-hidden rounded-xl border border-green-500/30 bg-zinc-800/80 backdrop-blur-sm shadow-2xl">
                        {/* Image container with proper object-fit */}
                        <div className="w-full h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center p-8">
                            {/* Using an img tag instead of background image for better control */}
                            <img src="./images/CNZ_logo.png" alt="Cryptocurrency NZ Logo" className="max-w-full max-h-full object-contain" />

                            {/* Optional overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-800/20 to-transparent pointer-events-none" />

                            {/* Optional callout box */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-green-500/30">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <p className="text-sm text-zinc-100">Get started in under 30 minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10 animate-bounce">
                <a href="#step-1" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default GetStartedHero
