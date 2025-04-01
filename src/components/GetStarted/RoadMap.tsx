import { FC } from 'react'
import { motion } from 'framer-motion'

interface RoadmapStep {
    title: string
    description: string
    ctaText: string
    ctaLink: string
    imagePath: string
}

const VerticalRoadmap: FC = () => {
    const steps: RoadmapStep[] = [
        {
            title: 'Inform yourself',
            description: "Known as the gold standard of digital currencies, Bitcoin is the world's first, largest and most popular cryptocurrency.",
            ctaText: 'Read more',
            ctaLink: '/learn',
            imagePath: './images/BTCImage.webp' // Replace with actual image path
        },
        {
            title: 'Choose your wallet',
            description: 'A cryptocurrency wallet is a digital account where you store your Bitcoin and other crypto assets. Crypto wallets are free, safe, and easy to set up.',
            ctaText: 'Choose your wallet',
            ctaLink: '/wallets',
            imagePath: './images/DigitalWallet.avif' // Replace with actual image path
        },
        {
            title: 'Buy cryptocurrency',
            description: 'The safest, fastest, and easiest way to get Bitcoin and other cryptocurrencies is to buy them online.',
            ctaText: 'Buy cryptocurrency',
            ctaLink: '/buy',
            imagePath: './images/BuyCrypto.avif' // Replace with actual image path
        },
        {
            title: 'Join the Community',
            description: 'New Zealand is home to an active, friendly and rapidly evolving crypto community. Come and join us in the local groups and meetups and help make NZ a driving force in the crypto age!',
            ctaText: 'Learn more',
            ctaLink: '/community',
            imagePath: './images/CommunityNZ.png' // Replace with actual image path
        }
    ]

    // Variants for animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
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
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background gradient and effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 via-zinc-800/95 to-zinc-900/10 z-0" />

            {/* Decorative gradient elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl opacity-20 z-0" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="alegreya text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Your <span className="alegreya bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Crypto Journey</span> Path
                    </h2>
                    <p className="text-zinc-100 max-w-2xl mx-auto text-base sm:text-lg">Follow these four simple steps to start your cryptocurrency journey in New Zealand</p>
                </div>

                {/* Vertical timeline with center line */}
                <div className="relative">
                    {/* Center timeline line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-green-500/20 via-green-500/40 to-green-500/20 transform -translate-x-1/2" />

                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="relative z-10">
                        {steps.map((step, index) => (
                            <motion.div key={index} variants={itemVariants} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 md:mb-24 last:mb-0`}>
                                {/* Content side */}
                                <div className="w-full md:w-1/2 px-6 md:px-10 mb-8 md:mb-0">
                                    <div className="relative">
                                        {/* Step number */}
                                        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 border-2 border-zinc-800 z-10">
                                            <span className="text-zinc-900 font-bold text-lg">{index + 1}</span>
                                        </div>

                                        {/* Card with content */}
                                        <div className="bg-zinc-800/70 backdrop-blur-sm rounded-xl border border-green-500/30 p-6 sm:p-8 transform hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_5px_30px_rgba(74,222,128,0.15)]">
                                            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{step.title}</h3>
                                            <p className="text-zinc-100 mb-6 text-sm sm:text-base">{step.description}</p>
                                            <a href={step.ctaLink} className="inline-flex items-center text-green-400 hover:text-green-300 transition-all duration-300 border-b border-green-500/30 hover:border-green-400/70 pb-0.5 text-sm sm:text-base group">
                                                <span>{step.ctaText}</span>
                                                <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Image side */}
                                <div className="w-full md:w-1/2 px-6 md:px-10 flex justify-center md:justify-start">
                                    <div className="relative w-full max-w-sm">
                                        {/* Glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-300/10 to-green-600/20 rounded-xl blur-md opacity-70" />

                                        {/* Image container */}
                                        <div className="relative overflow-hidden rounded-xl border border-green-500/30 bg-zinc-800/50 backdrop-blur-sm shadow-lg">
                                            <div className="aspect-[4/3] relative">
                                                {/* Image */}
                                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${step.imagePath})` }} />

                                                {/* Overlay gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-800/20 to-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Final CTA at the bottom */}
                <div className="text-center mt-16">
                    <a
                        href="/get-started"
                        className="group px-8 py-4 bg-green-500 text-zinc-900 font-semibold
            rounded-lg transition-all duration-300 
            hover:bg-green-400 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]
            inline-block relative overflow-hidden"
                    >
                        <span className="relative z-10">Start Your Journey Today</span>
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 
              transform translate-x-full group-hover:translate-x-0 
              transition-transform duration-300"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default VerticalRoadmap
