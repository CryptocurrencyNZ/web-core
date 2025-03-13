import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { heroUrls } from '../config/config.ts'
import AnimatedGridPattern from './AnimatedGridPattern'
import Map from './Map'

interface NavigationButton {
    href: string
    label: string
}

const navigationButtons: NavigationButton[] = [
    { href: heroUrls.routes.explore, label: 'Get Started' },
    { href: heroUrls.routes.wallet, label: 'Get a Wallet' },
    { href: heroUrls.routes.buy, label: 'Buy Crypto' }
]

const Hero = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
    }

    const slideUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    }

    const staggerButtons = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: 'easeOut'
            }
        })
    }

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: 'easeOut'
            }
        }
    }

    const getFullUrl = (path: string) => {
        // If it's an email link or absolute URL, return as is
        if (path.startsWith('mailto:') || path.startsWith('http')) {
            return path
        }
        // Otherwise, combine base URL with path
        return `${heroUrls.base}${path}`
    }

    return (
        <div className="relative w-full flex flex-col lg:flex-row justify-between m-0 p-0">
            <AnimatedGridPattern />

            <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center text-center px-8 md:px-[5%] pt-8 lg:pt-[60px] relative z-10 bg-transparent">
                <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="alegreya text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 font-bold leading-tight">
                    Welcome to <span className="alegreya text-gray-300">Cryptocurrency</span>
                    <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.5 }} className="alegreya text-green-500">
                        NZ
                    </motion.span>
                </motion.h1>

                <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={slideUp} className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300">
                    New Zealand Cryptocurrency Community Collective
                </motion.p>

                <div className="flex flex-wrap justify-center gap-4 w-full">
                    {navigationButtons.map((button, index) => (
                        <motion.a
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={staggerButtons}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 25px rgba(74,222,128,0.3)',
                                borderColor: 'rgba(74,222,128,0.7)'
                            }}
                            href={getFullUrl(button.href)}
                            className="px-8 py-3 bg-black/80 backdrop-blur-sm border border-green-500/30 
                                     rounded-lg text-white font-medium transition-all duration-300 
                                     hover:border-green-400/70 hover:bg-green-500/10 
                                     hover:shadow-[0_0_25px_rgba(74,222,128,0.3)] w-fit md:w-auto"
                        >
                            {button.label}
                        </motion.a>
                    ))}
                </div>

                <div className="flex justify-center w-full gap-3">
                    <motion.a
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5, duration: 0.5 }
                            }
                        }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 35px rgba(74,222,128,0.4)',
                            backgroundColor: 'rgba(74,222,128,0.3)'
                        }}
                        href={'https://cryptoconsulting.nz/'}
                        className="px-8 py-3 bg-green-500/20 backdrop-blur-sm border border-green-500/50 
                             rounded-lg text-white font-medium transition-all duration-300 
                             hover:border-green-400 hover:bg-green-500/30 
                             hover:shadow-[0_0_35px_rgba(74,222,128,0.4)] w-fit md:w-auto
                             flex items-center gap-2 mt-8"
                    >
                        <span>Get Help</span>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: 'easeInOut',
                                repeatDelay: 1
                            }}
                        >
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </motion.svg>
                    </motion.a>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.7, duration: 0.5 }
                            }
                        }}
                    >
                        <Link
                            to="/web-core/expo"
                            className="px-8 py-3 bg-green-500/20 backdrop-blur-sm border border-green-500/50 
                                rounded-lg text-white font-medium transition-all duration-300 
                                hover:border-green-400 hover:bg-green-500/30 
                                hover:shadow-[0_0_35px_rgba(74,222,128,0.4)] w-fit md:w-auto
                                flex items-center gap-2 mt-8"
                        >
                            <span>Expo 2025</span>
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: 'easeInOut',
                                    repeatDelay: 1
                                }}
                            >
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </motion.svg>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={scaleIn} className="w-full lg:w-1/2 flex items-center justify-center relative overflow-hidden sm:h-[70vh] w-1200 md:h-[75vh] lg:h-screen -mt-20 w-1200 lg:mt-0">
                <Map />
            </motion.div>
        </div>
    )
}

export default Hero
