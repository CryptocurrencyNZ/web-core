import { motion } from 'framer-motion'
import { FC, useState } from 'react'

const EasyCryptoOption: FC = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut'
            }
        }
    }

    const [activeTab, setActiveTab] = useState<Record<string, string>>({
        'easy-crypto': 'overview'
    })

    // Tab state management
    const toggleTab = (option: string, tab: string) => {
        setActiveTab((prev) => ({
            ...prev,
            [option]: tab
        }))
    }

    return (
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="w-full">
            <motion.div variants={itemVariants} className="w-full max-w-5xl mx-auto">
                <div className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
                    {/* Option header */}
                    <div className="bg-zinc-800/70 border-b border-zinc-700/40 p-4 sm:p-5 md:p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Easy Crypto NZ</h3>
                                <p className="text-green-400 text-sm sm:text-base mt-1">Best Way for Beginners to Buy</p>
                            </div>

                            <div className="flex items-center mt-2 md:mt-0">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-2 text-xs sm:text-sm text-zinc-300">Cryptocurrency NZ Recommendation</span>
                            </div>
                        </div>
                    </div>

                    {/* Option content */}
                    <div className="p-0">
                        {/* Image area */}
                        <div className="relative w-full max-w-full mx-auto aspect-[16/9] bg-zinc-900/50">
                            <img src="./images/Buy-Bitcoin-Cryptocurrency-Easy-Crypto-NZ.png" alt="Easy Crypto NZ platform" className="w-full h-full object-cover object-top" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-70" />

                            {/* Website badge */}
                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-center">
                                <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-zinc-900/90 backdrop-blur-sm rounded-md border border-green-500/30 text-zinc-300 text-xs sm:text-sm">
                                    Website:{' '}
                                    <a href="https://www.easycrypto.ai/nz" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                                        www.easycrypto.ai/nz
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Tabs navigation - improved for mobile */}
                        <div className="px-4 sm:px-5 md:px-6 border-b border-zinc-700/40">
                            <div className="flex overflow-x-auto hide-scrollbar space-x-2 sm:space-x-4 py-3 sm:py-4">
                                <button onClick={() => toggleTab('easy-crypto', 'overview')} className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${activeTab['easy-crypto'] === 'overview' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'text-zinc-400 hover:text-zinc-200'}`}>
                                    Overview
                                </button>

                                <button onClick={() => toggleTab('easy-crypto', 'why')} className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${activeTab['easy-crypto'] === 'why' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'text-zinc-400 hover:text-zinc-200'}`}>
                                    Why We Recommend
                                </button>

                                <button onClick={() => toggleTab('easy-crypto', 'pros-cons')} className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${activeTab['easy-crypto'] === 'pros-cons' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'text-zinc-400 hover:text-zinc-200'}`}>
                                    Pros & Cons
                                </button>

                                <button onClick={() => toggleTab('easy-crypto', 'reputation')} className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${activeTab['easy-crypto'] === 'reputation' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'text-zinc-400 hover:text-zinc-200'}`}>
                                    Reputation
                                </button>
                            </div>
                        </div>

                        {/* Tab content */}
                        <div className="p-4 sm:p-5 md:p-6 min-h-[300px]">
                            {/* Overview tab */}
                            {activeTab['easy-crypto'] === 'overview' && (
                                <div>
                                    <p className="text-zinc-100 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">Easy Crypto NZ is New Zealand's most popular crypto retailer, making it safe, fast, and easy for Kiwis to buy and sell over 110+ cryptocurrencies in minutes – including Bitcoin, Ethereum, Monero, Dogecoin & XRP.</p>

                                    <a
                                        href="https://www.easycrypto.ai/nz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-green-500 text-zinc-900 text-sm sm:text-base font-semibold
                    rounded-lg transition-all duration-300 
                    hover:bg-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                                    >
                                        <span>Visit Easy Crypto NZ</span>
                                        <svg className="h-4 w-4 sm:h-5 sm:w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            )}

                            {/* Why We Recommend tab */}
                            {activeTab['easy-crypto'] === 'why' && (
                                <div>
                                    <h4 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">Why We Recommend Easy Crypto NZ</h4>

                                    <div className="space-y-2 sm:space-y-3">
                                        <p className="text-zinc-100 text-sm sm:text-base">Here at Cryptocurrency NZ, we've used Easy Crypto without any issues for over 5 years.</p>
                                        <p className="text-zinc-100 text-sm sm:text-base">They've helped mainline hundreds of thousands of New Zealanders into the cryptocurrency markets.</p>
                                        <p className="text-zinc-100 text-sm sm:text-base">Easy Crypto is a reputable, reliable and Kiwi focused crypto retailer who without a doubt achieves their mission of making it safe, fast and easy for Kiwis to buy and sell Bitcoin and 160+ other coins in NZ.</p>
                                        <p className="text-zinc-100 text-sm sm:text-base">EC typically provide rapid order speeds through their simple interface and are well suited to first time crypto investors.</p>
                                        <p className="text-zinc-100 text-sm sm:text-base">Our biggest critique would be EC's excessive compliance program, requiring users to jump through increasingly heavier identity and source of funds verification steps for users seeking to acquire privacy coins such as Monero (XMR).</p>
                                        <p className="text-zinc-100 text-sm sm:text-base">For privacy focused users, non-KYC'ed options such as the NZ P2P Crypto Marketplace may be better suited.</p>
                                    </div>
                                </div>
                            )}

                            {/* Pros & Cons tab */}
                            {activeTab['easy-crypto'] === 'pros-cons' && (
                                <div>
                                    <h4 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">Pros & Cons</h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                        {/* Pros */}
                                        <div>
                                            <h5 className="text-base sm:text-lg text-green-400 font-medium mb-2 sm:mb-3">Pros of Easy Crypto NZ</h5>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-zinc-100 text-sm sm:text-base">Beginner friendly: Easy Crypto's interface is well suited to first time or casual investors.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-zinc-100 text-sm sm:text-base">Near instant KYC: you can typically create an account, verify your ID and trade within minutes.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-zinc-100 text-sm sm:text-base">Non-custodial: crypto is sent directly to your own private wallet, Easy Crypto doesn't store it for you.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-zinc-100 text-sm sm:text-base">Transparent fee structure: When you place an order, you can see the exact numbers of how much you'll receive.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-zinc-100 text-sm sm:text-base">Local customer support: when you need help, EC provides high quality one-on-one assistance.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Cons */}
                                        <div className="mt-4 md:mt-0">
                                            <h5 className="text-base sm:text-lg text-red-400 font-medium mb-2 sm:mb-3">Cons of Easy Crypto NZ</h5>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    <span className="text-zinc-100 text-sm sm:text-base">Limited features: day traders are better suited to live exchanges like Binance NZ or Kiwicoin</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    <span className="text-zinc-100 text-sm sm:text-base">Excessive compliance: You can't buy privacy coins like Monero without proving the source of your funds.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    <span className="text-zinc-100 text-sm sm:text-base">No on-site wallet: users must have a secure wallet already set up to buy and sell through Easy Crypto.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    <span className="text-zinc-100 text-sm sm:text-base">Slippage: There's sometimes a difference in prices between when you locked in your fees vs current prices.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    <span className="text-zinc-100 text-sm sm:text-base">KYC: You have to verify your identity in order to actually buy or sell. This data is then passed on to the government.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Reputation tab */}
                            {activeTab['easy-crypto'] === 'reputation' && (
                                <div>
                                    <h4 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">Reputation</h4>

                                    <div className="space-y-2 sm:space-y-3">
                                        <p className="text-zinc-100 text-sm sm:text-base">Easy Crypto NZ is a homegrown, non-custodial crypto retailer with a strong reputation in the NZ crypto community.</p>
                                        <p className="text-zinc-100 text-sm sm:text-base">They have a strong presence in the domestic crypto industry, sponsoring Cryptocurrency NZ's meetups and are known to actively engage in New Zealand's various community forums, groups and events.</p>
                                        <p className="text-zinc-100 text-sm sm:text-base">Since launching in 2018, ECNZ has generated over 200,000+ users in New Zealand alone and has processed over 2 Billion NZD in order volume – securing their title as New Zealand's crypto heavy weight.</p>
                                        <p className="text-zinc-100 text-sm sm:text-base">Janine Grainger, EC's co-founder and other members of EC's exec team are active members in financial technology and blockchain lobbying bodies across NZ such as Blockchain NZ and Fintech NZ.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default EasyCryptoOption
