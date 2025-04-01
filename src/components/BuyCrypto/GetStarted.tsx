import { FC, useState } from 'react'
import { motion } from 'framer-motion'

const GetStartedSection: FC = () => {
    // State for expanded steps
    const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    })

    // Toggle step expansion
    const toggleStep = (stepNumber: number) => {
        setExpandedSteps((prev) => ({
            ...prev,
            [stepNumber]: !prev[stepNumber]
        }))
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 }
        }
    }

    return (
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Background gradient & effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800/95 to-zinc-900 z-0" />

            {/* Decorative gradient elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl opacity-20 z-0" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                {/* Section header */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 md:mb-16">
                    <h2 className="alegreya text-3xl sm:text-4xl font-bold mb-4">
                        How to <span className="alegreya bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Get Started</span> With Crypto in NZ
                    </h2>

                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-green-500/30 to-transparent rounded-full"></div>

                    <p className="mt-6 text-zinc-100 text-base sm:text-lg max-w-3xl mx-auto">Getting started with crypto is easy, and within just a few hours you should be able to wrap your head around the fundamentals – equipping you with the knowledge required to safely store and buy Bitcoin, Ethereum and other cryptocurrency in New Zealand.</p>
                </motion.div>

                {/* Steps accordion */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-5 md:space-y-6">
                    {/* Step 1 */}
                    <motion.div variants={itemVariants} className="border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-zinc-800/70 to-zinc-800/50">
                            <button onClick={() => toggleStep(1)} className="w-full p-5 sm:p-6 flex items-center justify-between focus:outline-none">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-green-400 font-bold text-lg">1</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Learn the Basics</h3>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-zinc-700/60 ${expandedSteps[1] ? 'bg-green-500/20 border-green-500/30' : 'bg-zinc-800/70'} transition-all duration-300`}>
                                    <svg className={`w-5 h-5 ${expandedSteps[1] ? 'text-green-400 transform rotate-180' : 'text-zinc-400'} transition-all duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 ${expandedSteps[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-5 sm:p-6 border-t border-zinc-700/40 bg-zinc-800/30">
                                <p className="text-zinc-100">The best place to start with crypto is by understanding Bitcoin (BTC) – the world's first and largest cryptocurrency by market value. Bitcoin was created in 2008 by a pseudonymous developer going by the name Satoshi Nakamoto, which we still don't know the real identity of till this very day. Bitcoin (BTC) is the golden standard within the crypto movement, setting the bar with it's scarce supply, perfect network uptime and recognized adoption and utility.</p>
                                <div className="mt-6">
                                    <a href="/bitcoin-guide" className="inline-flex items-center text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70 transition-all duration-300 group">
                                        <span>Read our beginner's guide to Bitcoin</span>
                                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div variants={itemVariants} className="border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-zinc-800/70 to-zinc-800/50">
                            <button onClick={() => toggleStep(2)} className="w-full p-5 sm:p-6 flex items-center justify-between focus:outline-none">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-green-400 font-bold text-lg">2</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Set up a Crypto Wallet</h3>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-zinc-700/60 ${expandedSteps[2] ? 'bg-green-500/20 border-green-500/30' : 'bg-zinc-800/70'} transition-all duration-300`}>
                                    <svg className={`w-5 h-5 ${expandedSteps[2] ? 'text-green-400 transform rotate-180' : 'text-zinc-400'} transition-all duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 ${expandedSteps[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-5 sm:p-6 border-t border-zinc-700/40 bg-zinc-800/30">
                                <p className="text-zinc-100">Your next step is to set up a cryptocurrency wallet – a digital account where you store your Bitcoin (BTC) and other cryptocurrencies. Everyone in crypto has at least one crypto wallet, which essentially becomes your self-owned personal crypto bank account. Be very careful during this process, as the process is the highest risk in terms of scams and loss of funds. Always make sure to correctly create and backup your wallet to avoid tears later.</p>
                                <div className="mt-6">
                                    <a href="/wallet-guide" className="inline-flex items-center text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70 transition-all duration-300 group">
                                        <span>View recommended crypto wallets</span>
                                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div variants={itemVariants} className="border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-zinc-800/70 to-zinc-800/50">
                            <button onClick={() => toggleStep(3)} className="w-full p-5 sm:p-6 flex items-center justify-between focus:outline-none">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-green-400 font-bold text-lg">3</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Backup your Crypto Wallet</h3>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-zinc-700/60 ${expandedSteps[3] ? 'bg-green-500/20 border-green-500/30' : 'bg-zinc-800/70'} transition-all duration-300`}>
                                    <svg className={`w-5 h-5 ${expandedSteps[3] ? 'text-green-400 transform rotate-180' : 'text-zinc-400'} transition-all duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 ${expandedSteps[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-5 sm:p-6 border-t border-zinc-700/40 bg-zinc-800/30">
                                <p className="text-zinc-100">A proper wallet backup is critical to ensure you never lose access to your funds. Most wallets provide a recovery phrase (also called a seed phrase or mnemonic) typically consisting of 12 or 24 words that you must safely store. Write these words down on paper and store them in a secure location. Never share this phrase with anyone, and never store it digitally where it could be hacked.</p>

                                <div className="mt-4 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                                    <div className="flex items-start">
                                        <svg className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <p className="text-zinc-100 text-sm">
                                            <span className="font-semibold text-red-400">Warning:</span> If you lose your recovery phrase and your device breaks or is lost, your funds will be permanently lost with no way to recover them.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <a href="/wallet-security" className="inline-flex items-center text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70 transition-all duration-300 group">
                                        <span>Learn best practices for wallet security</span>
                                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 4 */}
                    <motion.div variants={itemVariants} className="border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-zinc-800/70 to-zinc-800/50">
                            <button onClick={() => toggleStep(4)} className="w-full p-5 sm:p-6 flex items-center justify-between focus:outline-none">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-green-400 font-bold text-lg">4</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Buy Crypto in NZ</h3>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-zinc-700/60 ${expandedSteps[4] ? 'bg-green-500/20 border-green-500/30' : 'bg-zinc-800/70'} transition-all duration-300`}>
                                    <svg className={`w-5 h-5 ${expandedSteps[4] ? 'text-green-400 transform rotate-180' : 'text-zinc-400'} transition-all duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 ${expandedSteps[4] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-5 sm:p-6 border-t border-zinc-700/40 bg-zinc-800/30">
                                <p className="text-zinc-100">Now that you have a secure place to store your crypto – the next step is to buy it in New Zealand. Your best options as stated in this guide include Easy Crypto NZ, Binance, and the NZ P2P Crypto Marketplace. Make sure you are using the correct websites and take extreme care and caution doing this.</p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <a href="#easy-crypto" className="group">
                                        <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/60 hover:border-green-500/40 transition-all duration-300 text-center h-full flex flex-col justify-center">
                                            <span className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">Easy Crypto NZ</span>
                                            <p className="text-zinc-400 text-xs mt-1">Best for beginners</p>
                                        </div>
                                    </a>
                                    <a href="#binance" className="group">
                                        <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/60 hover:border-green-500/40 transition-all duration-300 text-center h-full flex flex-col justify-center">
                                            <span className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">Binance</span>
                                            <p className="text-zinc-400 text-xs mt-1">Best for advanced traders</p>
                                        </div>
                                    </a>
                                    <a href="#p2p" className="group">
                                        <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/60 hover:border-green-500/40 transition-all duration-300 text-center h-full flex flex-col justify-center">
                                            <span className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">P2P Marketplace</span>
                                            <p className="text-zinc-400 text-xs mt-1">Best for privacy</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 5 */}
                    <motion.div variants={itemVariants} className="border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-zinc-800/70 to-zinc-800/50">
                            <button onClick={() => toggleStep(5)} className="w-full p-5 sm:p-6 flex items-center justify-between focus:outline-none">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-green-400 font-bold text-lg">5</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Track your Investment Portfolio</h3>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-zinc-700/60 ${expandedSteps[5] ? 'bg-green-500/20 border-green-500/30' : 'bg-zinc-800/70'} transition-all duration-300`}>
                                    <svg className={`w-5 h-5 ${expandedSteps[5] ? 'text-green-400 transform rotate-180' : 'text-zinc-400'} transition-all duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 ${expandedSteps[5] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-5 sm:p-6 border-t border-zinc-700/40 bg-zinc-800/30">
                                <p className="text-zinc-100">A crypto portfolio tracker is a tool that provides you with a birds eye view over your crypto holdings, helping you monitor your allocations and NZD value, to help you make more informed investment decisions. These trackers require you to dot in when you purchased your crypto or made a transaction, and the portfolio tracker will take care of calculating your gains and losses for you. Beware however, they can become very, very addictive.</p>
                                <div className="mt-6">
                                    <a href="/portfolio-trackers" className="inline-flex items-center text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70 transition-all duration-300 group">
                                        <span>Read our portfolio tracker guide</span>
                                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* CTA at bottom */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }} className="text-center mt-12 sm:mt-16">
                    <div className="inline-block px-6 py-3 border border-green-500/30 rounded-lg bg-green-500/10 backdrop-blur-sm">
                        <p className="text-zinc-100">
                            Need more detailed guidance?{' '}
                            <a href="/contact" className="text-green-400 hover:text-green-300 ml-1 transition-colors duration-300">
                                Contact us for personalized advice →
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default GetStartedSection
