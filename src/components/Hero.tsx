// components/Hero.tsx
import { FC } from 'react'
import Map from './Map'
import AnimatedGridPattern from './AnimatedGridPattern'
import { heroUrls } from '../config/config.ts'

interface NavigationButton {
    href: string;
    label: string;
}

const navigationButtons: NavigationButton[] = [
    { href: heroUrls.routes.explore, label: 'Get Started' },
    { href: heroUrls.routes.wallet, label: 'Get a Wallet' },
    { href: heroUrls.routes.buy, label: 'Buy Crypto' },
];

const Hero: FC = () => {
    const getFullUrl = (path: string) => {
        // If it's an email link or absolute URL, return as is
        if (path.startsWith('mailto:') || path.startsWith('http')) {
            return path;
        }
        // Otherwise, combine base URL with path
        return `${heroUrls.base}${path}`;
    };

    return (
        <div className="relative w-full flex flex-col lg:flex-row justify-between m-0 p-0">
            <AnimatedGridPattern />

            <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center text-center px-8 md:px-[5%] pt-8 lg:pt-[60px] relative z-10 bg-transparent">
                <h1 className="alegreya text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 font-bold leading-tight">
                    Welcome to <span className="alegreya text-gray-300">Cryptocurrency</span>
                    <span className="alegreya text-green-500">NZ</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300">
                    New Zealand Cryptocurrency Community Collective
                </p>

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

                <div className="mt-8 md:mt-16">
                    <p className="text-gray-300">
                        Need help?{' '}
                        <a
                            href={heroUrls.routes.contact}
                            className="text-green-400 hover:text-green-300 transition-colors border-b 
                                   border-green-500/30 hover:border-green-400/70"
                        >
                            Contact us
                        </a>
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center relative overflow-hidden sm:h-[70vh] w-1200 md:h-[75vh] lg:h-screen -mt-20 w-1200 lg:mt-0">
                <Map />
            </div>
        </div>
    );
};

export default Hero;