import { FC } from 'react'
import { motion } from 'framer-motion'

const CryptoSafetyTips: FC = () => {
    // Tips array
    const safetyTips = [
        {
            tip: "Store your crypto in your own personal wallet! (And never someone else's wallet)",
            description: 'See our NZ Cryptocurrency Wallets Guide to learn how to set one up.',
            link: '/wallets-guide'
        },
        {
            tip: "Always triple check that the Bitcoin address you've provided is correct",
            description: 'Cryptocurrency transactions are irreversible.'
        },
        {
            tip: 'Keep your crypto private',
            description: "You wouldn't tell the world you have gold buried in your backyard, so don't tell the world how much BTC you are stacking."
        },
        {
            tip: 'Never invest more than you can afford to lose',
            description: 'Crypto markets are known to be notoriously volatile.'
        },
        {
            tip: 'You cannot "buy the dips" if you have all your money-to-invest already invested',
            description: ''
        },
        {
            tip: 'Everyone has an opinion on Bitcoin',
            description: 'Take it with a grain of salt and do your own research.'
        },
        {
            tip: 'Not your keys, not your coins',
            description: "Make sure you store your crypto in your own wallet, not someone else's!"
        },
        {
            tip: "Don't sweat the small stuff",
            description: "It's virtually guaranteed you'll make mistakes, so make sure you learn from them and use them to your future advantage."
        },
        {
            tip: 'Everyone starts off as an absolute crypto rookie',
            description: "It's a right of passage. The learning curve can be steep, but once it's passed, it all clicks together."
        },
        {
            tip: 'Bitcoin is the mother ship',
            description: 'But consider diversifying into other coins like Ethereum. "You diversify to mitigate risk, and go all in to maximize gain".'
        },
        {
            tip: 'Aspire to have Diamond Hands',
            description: 'Someone with high risk tolerance to stomach the high volatility of crypto investing.'
        },
        {
            tip: 'Prioritize Bitcoin over Shitcoins',
            description: 'When in doubt follow our NZ Shitcoin Investing Guide here.',
            link: '/shitcoin-guide'
        }
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Background gradient & effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800/95 to-zinc-900 z-0" />

            {/* Decorative gradient elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl opacity-20 z-0" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 md:mb-16">
                    <h2 className="alegreya text-3xl sm:text-4xl font-bold mb-4">
                        Buying Crypto <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Safely</span> - Tips and Best Practices
                    </h2>

                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-green-500/30 to-transparent rounded-full"></div>
                </motion.div>

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {safetyTips.map((tip, index) => (
                        <motion.div key={index} variants={itemVariants} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-green-300/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative bg-gradient-to-b from-zinc-800/70 to-zinc-800/50 border border-zinc-700/40 rounded-lg p-5 h-full backdrop-blur-sm">
                                <div className="flex items-start mb-3">
                                    <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                                        <span className="text-green-400 font-bold text-sm">{index + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white leading-tight">{tip.tip}</h3>
                                </div>

                                {tip.description && <p className="text-zinc-300 text-sm ml-10">{tip.description}</p>}

                                {tip.link && (
                                    <div className="mt-3 ml-10">
                                        <a href={tip.link} className="inline-flex items-center text-green-400 hover:text-green-300 text-sm border-b border-green-500/30 hover:border-green-400/70 transition-all duration-300 group">
                                            <span>Learn more</span>
                                            <svg className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Important advice callout */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }} className="mt-12 md:mt-16">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-300/10 to-green-600/20 rounded-xl blur-md opacity-70"></div>

                        <div className="relative bg-zinc-800/50 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
                            <div className="flex items-start">
                                <svg className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">The most important thing to remember</h3>
                                    <p className="text-zinc-100">Start small, learn by doing, and gradually increase your exposure as you become more comfortable with the technology and market dynamics. Cryptocurrency can be a rewarding journey, but it requires patience, education, and a cautious approach.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA at bottom */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.7 }} className="text-center mt-12">
                    <a
                        href="/security-guide"
                        className="inline-flex items-center px-6 py-3 bg-green-500 text-zinc-900 font-semibold
            rounded-lg transition-all duration-300 
            hover:bg-green-400 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]
            relative overflow-hidden group"
                    >
                        <span className="relative z-10">Read our Complete Security Guide</span>
                        <svg className="ml-2 w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 
              transform translate-x-full group-hover:translate-x-0 
              transition-transform duration-300"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default CryptoSafetyTips
