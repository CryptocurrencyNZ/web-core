import { FC } from 'react'
import { motion } from 'framer-motion'

const ConsultingSection: FC = () => {
    return (
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background gradient and effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/95 via-zinc-900 to-zinc-800/95 z-0" />

            {/* Decorative gradient elements */}
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl opacity-20 z-0" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Image Column */}
                    <motion.div className="w-full lg:w-1/2 order-2 lg:order-1" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                        <div className="relative">
                            {/* Decorative elements around image */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-green-500/50 rounded-tl-lg" />
                            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-green-500/50 rounded-br-lg" />

                            {/* Image with glow effect */}
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-green-300/10 to-green-600/20 rounded-xl blur-md opacity-70" />

                                <div className="relative overflow-hidden rounded-xl border border-green-500/30 bg-zinc-800/50 backdrop-blur-sm shadow-lg">
                                    {/* Replace with your actual image */}
                                    <div className="aspect-[16/9] relative">
                                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(./images/CCNZ-bg.png)' }} />

                                        {/* Subtle overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/70 via-zinc-800/30 to-transparent" />

                                        {/* Consultant badge */}
                                        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-green-500/90 rounded-md text-zinc-900 text-xs font-semibold">NZ Certified Advisors</div>
                                    </div>
                                </div>
                            </div>

                            {/* Founders info box */}
                            <div className="absolute -bottom-8 -left-4 sm:left-8 px-6 py-4 bg-zinc-800/90 backdrop-blur-sm rounded-lg border border-green-500/30 max-w-xs shadow-lg">
                                <p className="text-zinc-100 text-sm mb-2">Our founders:</p>
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full border-2 border-zinc-800 bg-cover bg-center" style={{ backgroundImage: 'url(./images/team/harry-satoshi.png)' }}></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-zinc-800 bg-cover bg-center" style={{ backgroundImage: 'url(./images/team/nic-turnbull.png)' }}></div>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">Harry Satoshi & Nic Turnbull</p>
                                        <p className="text-green-400 text-xs">Cryptocurrency NZ Founders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div className="w-full lg:w-1/2 order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                        <div className="relative">
                            {/* Title with gradient */}
                            <h2 className="alegreya text-3xl sm:text-4xl font-bold mb-6">
                                <span className="alegreya bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Crypto Consulting NZ</span>
                            </h2>

                            {/* Description with styled paragraphs */}
                            <div className="space-y-4 text-zinc-100 mb-8">
                                <p>Still a bit confused and wish you had someone to help walk you through? We are happy to provide direct 1-on-1 assistance with all things crypto and beyond via Crypto Consulting NZ.</p>
                                <p>Our founders Harry Satoshi and Nic Turnbull can patiently walk you through all the steps of getting started, creating a wallet, buying, selling or using crypto as money or an investment.</p>
                                <p>From wallet recoveries to educational sessions, we're at your service for anything crypto NZ.</p>
                            </div>

                            {/* CTA Button */}
                            <a
                                href="https://cryptoconsulting.nz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-8 py-4 bg-green-500 text-zinc-900 font-semibold
                rounded-lg transition-all duration-300 
                hover:bg-green-400 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]
                inline-flex items-center gap-2 relative overflow-hidden"
                            >
                                <span className="relative z-10">Visit Crypto Consulting NZ</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 
                  transform translate-x-full group-hover:translate-x-0 
                  transition-transform duration-300"
                                />
                            </a>

                            {/* Additional 'why choose us' features */}
                            <div className="mt-10 grid grid-cols-2 gap-4">
                                <div className="bg-zinc-800/40 backdrop-blur-sm rounded-lg border border-green-500/20 p-4">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0010-4.53 6 6 0 01-5 1.53z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-white text-sm font-semibold mb-1">Personalized Help</h3>
                                    <p className="text-zinc-300 text-xs">1-on-1 assistance tailored to your needs</p>
                                </div>

                                <div className="bg-zinc-800/40 backdrop-blur-sm rounded-lg border border-green-500/20 p-4">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-white text-sm font-semibold mb-1">Expert Guidance</h3>
                                    <p className="text-zinc-300 text-xs">From NZ's crypto pioneers</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ConsultingSection
