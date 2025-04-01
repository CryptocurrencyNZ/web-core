import { FC } from 'react'
import { motion } from 'framer-motion'

const BuyCryptoHero: FC = () => {
    return (
        <div className="relative w-full pt-24 md:pt-28 lg:pt-32 pb-16 lg:min-h-screen">
            {/* Background gradient & effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800/95 to-zinc-900 z-0" />

            {/* Decorative gradient elements */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-600/10 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl opacity-20 z-0" />

            {/* Decorative diagonal lines */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent transform -translate-x-1/2 -rotate-12" />
                <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent transform translate-x-1/2 -rotate-12" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center h-full">
                    {/* Header Section */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
                        <h1 className="alegreya text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            How to <span className=" alegreya bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Buy Cryptocurrency</span> in NZ - 2025 Guide
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-zinc-100 mb-8 max-w-3xl mx-auto">
                            The <span className="font-semibold text-white">safest</span>, <span className="font-semibold text-white">fastest</span>, and <span className="font-semibold text-white">easiest</span> way to buy Bitcoin, Ethereum and other cryptocurrency in New Zealand is through a Kiwi crypto retailer like Easy Crypto NZ or Binance.
                        </p>

                        {/* Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-300 text-sm">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                            Updated for 2025
                        </div>
                    </motion.div>

                    {/* Options Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl">
                        {/* Easy Crypto Option */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="group">
                            <div className="relative h-full">
                                {/* Glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 via-green-300/20 to-green-600/30 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Card content */}
                                <div className="relative h-full flex flex-col overflow-hidden rounded-xl border border-green-500/30 bg-zinc-800/80 backdrop-blur-sm shadow-xl">
                                    {/* Screenshot of platform */}
                                    <div className="w-full aspect-[16/9] relative overflow-hidden">
                                        <img src="./images/Buy-Bitcoin-Cryptocurrency-Easy-Crypto-NZ.png" alt="Easy Crypto NZ Platform" className="w-full h-full object-cover object-top" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/90 via-zinc-800/30 to-transparent pointer-events-none" />

                                        {/* Brand overlay */}
                                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-md border border-green-500/30">
                                            <span className="text-white font-semibold text-sm">Easy Crypto NZ</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="p-6 sm:p-8 flex-grow">
                                        <h2 className="text-2xl font-bold text-white mb-4">NZ's Leading Crypto Retailer</h2>

                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start">
                                                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-zinc-100">NZ owned & operated company</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-zinc-100">Instant NZD deposits & withdrawals</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-zinc-100">100+ cryptocurrencies available</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-zinc-100">Excellent NZ-based customer support</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Footer with button */}
                                    <div className="p-6 sm:p-8 border-t border-green-500/20 mt-auto">
                                        <a
                                            href="https://easycrypto.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group w-full px-6 py-3 bg-green-500 text-zinc-900 font-semibold
                                            rounded-lg transition-all duration-300 
                                            hover:bg-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]
                                            flex items-center justify-center relative overflow-hidden"
                                        >
                                            <span className="relative z-10">Buy with Easy Crypto</span>
                                            <svg className="h-5 w-5 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 
                                                transform translate-x-full group-hover:translate-x-0 
                                                transition-transform duration-300"
                                            />
                                        </a>

                                        <p className="text-xs text-zinc-400 text-center mt-3">Recommended for beginners</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Binance Option */}
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="group">
                            <div className="relative h-full">
                                {/* Glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 via-green-300/20 to-green-600/30 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Card content */}
                                <div className="relative h-full flex flex-col overflow-hidden rounded-xl border border-green-500/30 bg-zinc-800/80 backdrop-blur-sm shadow-xl">
                                    {/* Screenshot of platform */}
                                    <div className="w-full aspect-[16/9] relative overflow-hidden">
                                        <img src="./images/Binance-NZ-Buy-Crypto.png" alt="Binance NZ Platform" className="w-full h-full object-cover object-top" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/90 via-zinc-800/30 to-transparent pointer-events-none" />

                                        {/* Brand overlay */}
                                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-md border border-green-500/30">
                                            <span className="text-white font-semibold text-sm">Binance NZ</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="p-6 sm:p-8 flex-grow">
                                        <h2 className="text-2xl font-bold text-white mb-4">Global Trading Platform</h2>

                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start">
                                                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-zinc-100">World's largest crypto exchange</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-zinc-100">Direct NZD deposits available</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-zinc-100">Advanced trading tools & features</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-zinc-100">350+ cryptocurrencies available</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Footer with button */}
                                    <div className="p-6 sm:p-8 border-t border-green-500/20 mt-auto">
                                        <a
                                            href="https://www.binance.com/en-NZ"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group w-full px-6 py-3 bg-green-500 text-zinc-900 font-semibold
                                            rounded-lg transition-all duration-300 
                                            hover:bg-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]
                                            flex items-center justify-center relative overflow-hidden"
                                        >
                                            <span className="relative z-10">Buy with Binance</span>
                                            <svg className="h-5 w-5 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 
                                                transform translate-x-full group-hover:translate-x-0 
                                                transition-transform duration-300"
                                            />
                                        </a>

                                        <p className="text-xs text-zinc-400 text-center mt-3">Best for experienced traders</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Alternative option text */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }} className="mt-12 text-center">
                        <p className="text-zinc-300 mb-2">Prefer to see all available options?</p>
                        <a
                            href="#compare-exchanges"
                            className="text-green-400 hover:text-green-300 transition-all duration-300
                            border-b border-green-500/30 hover:border-green-400/70 inline-flex items-center"
                        >
                            <span>Compare all NZ exchanges</span>
                            <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Optional info badge */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                <div className="px-4 py-2 bg-zinc-800/70 backdrop-blur-sm rounded-full border border-green-500/20 flex items-center space-x-2">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-zinc-300">
                        This guide contains affiliate links.{' '}
                        <a href="/disclosure" className="text-green-400 hover:text-green-300">
                            Learn more
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BuyCryptoHero
