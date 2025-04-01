import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { heroUrls } from '../../config/config.ts'
import AnimatedGridPattern from './HeroGridPattern'
import Map from './Map/Map.tsx'

interface NavigationButton {
    path: string
    label: string
    isExternal: boolean
}

const navigationButtons: NavigationButton[] = [
    { path: '/getstarted', label: 'Get Started', isExternal: false },
    { path: heroUrls.routes.wallet, label: 'Get a Wallet', isExternal: false },
    { path: '/buy-cryptocurrency-nz', label: 'Buy Crypto', isExternal: false }
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
        if (path.startsWith('mailto:') || path.startsWith('http')) {
            return path
        }
        return `${heroUrls.base}${path}`
    }

    // Button style with responsive adjustments
    const buttonClassName = 'px-4 sm:px-6 py-2.5 bg-green-500/20 backdrop-blur-sm border border-green-500/50 ' + 'rounded-lg text-white font-medium text-sm sm:text-base transition-all duration-300 ' + 'hover:border-green-400 hover:bg-green-500/30 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)] ' + 'flex items-center justify-center gap-1 sm:gap-2'

    // Animation props common to all buttons
    const buttonAnimationProps = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.1 },
        whileHover: {
            scale: 1.03,
            boxShadow: '0 0 20px rgba(74,222,128,0.3)',
            borderColor: 'rgba(74,222,128,0.7)'
        }
    }

    return (
        <div className="relative w-full flex flex-col lg:flex-row justify-between m-0 p-0 overflow-hidden">
            <AnimatedGridPattern />

            {/* Content Section */}
            <div className="w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 pt-16 lg:pt-0 relative z-10 bg-transparent">
                <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="alegreya text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 font-bold leading-tight text-center">
                    Welcome to <span className="alegreya text-gray-300">Cryptocurrency</span>
                    <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.5 }} className="alegreya text-green-500">
                        NZ
                    </motion.span>
                </motion.h1>

                <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={slideUp} className="text-sm sm:text-base md:text-lg mb-6 text-gray-300 text-center">
                    Catalyzing New Zealand's Crypto revolution
                </motion.p>

                {/* Primary Navigation Buttons - Responsive layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 w-full max-w-sm md:max-w-xl mb-4">
                    {navigationButtons.map((button, index) =>
                        button.isExternal ? (
                            <motion.a key={index} custom={index} variants={staggerButtons} {...buttonAnimationProps} href={getFullUrl(button.path)} className={buttonClassName}>
                                {button.label}
                            </motion.a>
                        ) : (
                            <motion.div key={index} custom={index} variants={staggerButtons} {...buttonAnimationProps}>
                                <Link to={button.path} className={`${buttonClassName} w-full`}>
                                    {button.label}
                                </Link>
                            </motion.div>
                        )
                    )}
                </div>

                {/* Secondary Action Buttons - Side by side */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-sm md:max-w-md mt-2">
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
                            scale: 1.03,
                            boxShadow: '0 0 20px rgba(74,222,128,0.4)',
                            backgroundColor: 'rgba(74,222,128,0.3)'
                        }}
                        href={'https://cryptoconsulting.nz/'}
                        className={buttonClassName}
                    >
                        <span>Get Help</span>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            animate={{ x: [0, 4, 0] }}
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
                        <Link to="/web-core/expo" className={`${buttonClassName} w-full`}>
                            <span>Expo 2025</span>
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 sm:h-5 sm:w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                animate={{ x: [0, 4, 0] }}
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

            {/* Map Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={scaleIn} className="w-full lg:w-1/2 flex items-center justify-center relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-screen mt-0">
                <Map />
            </motion.div>
        </div>
    )
}

export default Hero
