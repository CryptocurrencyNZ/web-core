// components/Hero.tsx
import { FC } from 'react'
import Map from './Map'
import AnimatedGridPattern from './AnimatedGridPattern'
import { heroUrls } from '../config/config.ts'

interface NavigationButton {
    href: string
    label: string
}

const navigationButtons: NavigationButton[] = [
    { href: heroUrls.routes.explore, label: 'Get Started' },
    { href: heroUrls.routes.wallet, label: 'Get a Wallet' },
    { href: heroUrls.routes.buy, label: 'Buy Crypto' }
]

const Hero: FC = () => {
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
                <h1 className="alegreya text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 font-bold leading-tight">
                    Welcome to <span className="alegreya text-gray-300">Cryptocurrency</span>
                    <span className="alegreya text-green-500">NZ</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300">New Zealand Cryptocurrency Community Collective</p>

                <div className="flex flex-wrap justify-center gap-4 w-full">
                    {navigationButtons.map((button, index) => (
                        <a
                            key={index}
                            href={getFullUrl(button.href)}
                            className="px-8 py-3 bg-black/80 backdrop-blur-sm border border-green-500/30 
                                     rounded-lg text-white font-medium transition-all duration-300 
                                     hover:border-green-400/70 hover:bg-green-500/10 
                                     hover:shadow-[0_0_25px_rgba(74,222,128,0.3)] w-fit md:w-auto"
                        >
                            {button.label}
                        </a>
                    ))}
                </div>

                <div className="flex justify-center w-full">
                    <a
                        href={getFullUrl('/contact')}
                        className="px-8 py-3 bg-green-500/20 backdrop-blur-sm border border-green-500/50 
                             rounded-lg text-white font-medium transition-all duration-300 
                             hover:border-green-400 hover:bg-green-500/30 
                             hover:shadow-[0_0_35px_rgba(74,222,128,0.4)] w-fit md:w-auto
                             flex items-center gap-2 mt-8"
                    >
                        <span>Get Help</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center relative overflow-hidden sm:h-[70vh] w-1200 md:h-[75vh] lg:h-screen -mt-20 w-1200 lg:mt-0">
                <Map />
            </div>
        </div>
    )
}

export default Hero
