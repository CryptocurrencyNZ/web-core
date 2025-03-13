import { FC } from 'react'
import { motion } from 'framer-motion'

const IntroSection: FC = () => {
    return (
        <section className="relative py-16 md:py-20 overflow-hidden">
            {/* Background gradient & effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 via-zinc-800/90 to-zinc-900/10 z-0" />

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-600/5 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl opacity-20 z-0" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Message card with gradient border */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
                        {/* Gradient border glow effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 via-green-300/20 to-green-600/30 rounded-xl blur-sm opacity-70" />

                        {/* Content card */}
                        <div className="relative rounded-xl border border-green-500/30 bg-zinc-800/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl">
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-green-500/50 rounded-tl-lg transform -translate-x-2 -translate-y-2 opacity-60" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-green-500/50 rounded-br-lg transform translate-x-2 translate-y-2 opacity-60" />

                            {/* Main content */}
                            <div className="space-y-4 relative z-10">
                                <p className="text-lg sm:text-xl text-zinc-100 leading-relaxed">
                                    <strong className="text-white">If you're reading this</strong>, there's a good chance you're at the very beginning of your NZ Bitcoin journey – you've set up your crypto wallet to store your assets in, and you're now ready to buy Bitcoin, Ethereum or other cryptocurrencies in New Zealand.
                                </p>

                                <p className="text-base sm:text-lg text-zinc-100 leading-relaxed">In this Cryptocurrency NZ guide, we'll walk you through the ins and outs of buying cryptocurrencies like Bitcoin (BTC) in NZ.</p>

                                <p className="text-base sm:text-lg text-zinc-100 leading-relaxed">
                                    Enjoy the process, read all the key information, and don't hesitate to ask us for help on our{' '}
                                    <a href="/contact" className="text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70 transition-colors duration-300">
                                        Contact us
                                    </a>{' '}
                                    page. <em className="text-green-300">Good luck!</em>
                                </p>

                                {/* Author signature */}
                                <div className="mt-6 flex items-center justify-end">
                                    <div className="flex flex-col items-end">
                                        <p className="text-right italic text-green-300">~ Harry Satoshi & Nic Turnbull</p>
                                        <div className="mt-1 h-px w-36 bg-gradient-to-l from-green-500/50 to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Optional decorative elements */}
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-green-500/10 rounded-full animate-pulse-slow"></div>
                    <div className="absolute -top-6 -right-6 w-8 h-8 border-2 border-green-500/10 rounded-full animate-pulse-slow animation-delay-500"></div>
                </div>
            </div>

            {/* Optional subtle icon overlays for tech theme */}
            <div className="absolute inset-0 overflow-hidden opacity-5 z-0 pointer-events-none">
                <div className="absolute top-10 left-10 transform rotate-12">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM16.498 21.48L9 17.127l7.498 10.593 7.496-10.59-7.496 4.351z" />
                    </svg>
                </div>
                <div className="absolute bottom-10 right-10 transform -rotate-12">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-6.981-5.68C5.359 23.716 3 20.092 3 16 3 8.82 8.82 3 16 3s13 5.82 13 13c0 4.092-2.359 7.716-6.019 10.32m-8.99-10.32h13.964C16.193 10.066 13.162 13 13.162 13H9v3.317c0 .875.62 1.683 1.469 1.683H24.7c1.748 0 3.3-.909 3.3-2.75V8.824" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default IntroSection
