import { FC, useState } from 'react'
import { motion } from 'framer-motion'

interface FaqItem {
    question: string
    answer: React.ReactNode
}

const CryptoBuyingFaq: FC = () => {
    // State to track which FAQ item is open
    const [openItem, setOpenItem] = useState<number | null>(null)

    // Toggle FAQ item
    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index)
    }

    // FAQ data
    const faqItems: FaqItem[] = [
        {
            question: 'Can I Buy Bitcoin, Ethereum, and other cryptocurrency in New Zealand?',
            answer: (
                <p>
                    <span className="font-semibold text-white">Yes</span> – you can buy cryptocurrency in NZ in minutes through one of New Zealand's various crypto retailers or exchanges, such as Easy Crypto NZ.
                </p>
            )
        },
        {
            question: 'What are Crypto Wallets? - Where do I store my cryptocurrency?',
            answer: (
                <div className="space-y-3">
                    <p>Crypto wallets are digital vaults where you store your Bitcoin, Ethereum and other digital assets – acting in a similar way to your NZ bank account.</p>
                    <p>There are 5 main types of cryptocurrency wallet, such as Hardware wallets like the Trezor and Ledger or software wallets like Exodus.</p>
                    <p>
                        Learn about your best options in our{' '}
                        <a href="/wallets" className="text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70">
                            Best Bitcoin, Ethereum & Crypto Wallets in New Zealand Guide
                        </a>
                        .
                    </p>
                </div>
            )
        },
        {
            question: 'Are there any requirements to buy crypto in NZ?',
            answer: (
                <div className="space-y-3">
                    <p>New Zealand anti-money laundering laws (AML) require all Kiwis to verify their identities before they can buy and sell cryptocurrency through regulated NZ crypto trading platforms, such as Easy Crypto NZ or Binance.</p>

                    <p>
                        <span className="font-semibold text-white">Alternatives</span> to using regulated services to acquire crypto include crypto mining, buying P2P, airdrops, Crypto ATMs, and decentralized exchanges. You can also get crypto by accepting it as payment for the goods and services you sell, or doing work in exchange for crypto.
                    </p>

                    <div>
                        <p className="font-semibold text-white mb-2">To verify an account with an NZ exchange, you need to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Be 18 years or above.</li>
                            <li>Have a valid NZ passport or drivers license.</li>
                            <li>Have an NZ bank account under your own name.</li>
                            <li>Have $50 to meet minimum order requirements.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            question: 'How fast can I buy crypto in NZ?',
            answer: (
                <div className="space-y-3">
                    <p>
                        <span className="font-semibold text-white">It takes about 30 minutes to buy Bitcoin, Ethereum and other crypto in NZ</span> – depending on your service of choice. It's possible to sign up with an NZ crypto exchange or retailer like Easy Crypto NZ, verify your account, buy crypto and have it delivered to your personal crypto wallet in 30 minutes or less.
                    </p>

                    <div>
                        <p className="font-semibold text-white mb-2">Crypto buying speeds vary in three key ways:</p>
                        <ul className="space-y-2">
                            <li>
                                <span className="font-semibold text-white">Account creation and verification speeds;</span> the time it takes from signing up with your chosen service to them confirming your identity. <span className="text-zinc-400">(To allow you to buy/sell/exchange)</span>
                            </li>
                            <li>
                                <span className="font-semibold text-white">Order creation and delivery speeds;</span> how long it takes to create, pay for and complete your order – and how long it takes for your chosen service to dispatch your crypto to your personal wallet.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Network processing speeds;</span> how fast crypto transactions are processed by the crypto networks. <span className="text-zinc-400">(This is not in the control of your chosen service)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            question: 'What coins should I buy?',
            answer: (
                <div className="space-y-3">
                    <p>
                        If you're unsure on what coins to buy, we'd recommend examining{' '}
                        <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70">
                            CoinMarketCap
                        </a>{' '}
                        to learn about the crypto markets' most popular coins and projects.
                    </p>

                    <p>We personally believe Bitcoin (BTC), Ethereum (ETH) and Monero (XMR) are the best cryptocurrencies to start your research with. This is due to their originality, utility, history, use cases and highly active communities. They have been around for many years and have shaped crypto into what it is today.</p>

                    <p className="text-zinc-400 text-sm italic">*Disclaimer – this is not financial advice in any way, shape or form. Always do your own research and seek a diverse range of perspectives when learning about a new project.*</p>
                </div>
            )
        },
        {
            question: 'Can I sell crypto in NZ / Convert back to NZD?',
            answer: (
                <p>
                    <span className="font-semibold text-white">Absolutely</span> – selling crypto in NZ is just as easy as buying it. All NZ services showcased below allow users to sell back crypto 24/7, 365 days a year.
                </p>
            )
        }
    ]

    // Animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <section className="relative py-16 md:py-20 overflow-hidden">
            {/* Background gradient & effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 via-zinc-800/95 to-zinc-900/10 z-0" />

            {/* Decorative gradient elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl opacity-20 z-0" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="alegreya text-3xl sm:text-4xl font-bold mb-4">
                        Buying Crypto in NZ <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Commonly Asked Questions</span>
                    </motion.h2>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }} className="w-24 h-1 bg-gradient-to-r from-green-500/50 to-green-300/50 mx-auto rounded-full mb-6" />
                </div>

                {/* FAQ items */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-3xl mx-auto">
                    {faqItems.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="mb-4">
                            <div
                                className={`border ${openItem === index ? 'border-green-500/40 bg-zinc-800/80' : 'border-zinc-700/40 bg-zinc-800/30'} 
                  rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300
                  hover:border-green-500/30`}
                            >
                                {/* Question header */}
                                <button onClick={() => toggleItem(index)} className="w-full p-5 sm:p-6 text-left flex justify-between items-center focus:outline-none">
                                    <h3 className="font-semibold text-lg sm:text-xl text-white">{item.question}</h3>

                                    <span
                                        className={`ml-4 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full 
                    ${openItem === index ? 'bg-green-500/30 text-green-300' : 'bg-zinc-700/50 text-zinc-300'}
                    transition-all duration-300`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${openItem === index ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                {/* Answer content */}
                                <div className={`overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-5 sm:p-6 pt-0 text-zinc-100 border-t border-zinc-700/40">{item.answer}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }} className="text-center mt-12 md:mt-16">
                    <div className="inline-block px-6 py-3 border border-green-500/30 rounded-lg bg-green-500/10 backdrop-blur-sm">
                        <p className="text-zinc-100">
                            Ready to start your crypto journey?{' '}
                            <a href="#compare-exchanges" className="text-green-400 hover:text-green-300 ml-1 transition-colors duration-300">
                                View all NZ exchanges →
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CryptoBuyingFaq
