import { FC } from 'react'
import AnimatedGridPattern from './AnimatedGridPattern'
import { Blocks, Users, Lightbulb } from 'lucide-react'

interface ExpoFeature {
    title: string
    description: string
    icon: typeof Blocks | typeof Users | typeof Lightbulb
}

const expoFeatures: ExpoFeature[] = [
    {
        title: 'Industry Leaders',
        description: 'Connect with top blockchain experts and crypto innovators from NZ and abroad',
        icon: Blocks
    },
    {
        title: 'Interactive Workshops',
        description: 'Hands-on sessions covering DeFi, NFTs, Web3 development, and more',
        icon: Lightbulb
    },
    {
        title: 'Networking Hub',
        description: 'Meet fellow enthusiasts, investors, and builders in the NZ crypto community',
        icon: Users
    }
]

const ExpoSection: FC = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-stretch">
            <AnimatedGridPattern />

            {/* Visual Side (Now Left) */}
            <div className="relative w-full lg:w-3/5 min-h-[60vh] lg:min-h-full flex items-center justify-center overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-black/50" />

                {/* Hexagon Grid Background */}
                <div className="absolute inset-0 opacity-20">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 360}deg)`
                            }}
                        >
                            <svg width="120" height="120" viewBox="0 0 100 100">
                                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-500" />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-6 h-6 bg-green-500/30 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `float ${3 + i}s ease-in-out infinite alternate`
                            }}
                        />
                    ))}
                </div>

                {/* Main Visual Content */}
                <div className="relative z-10 flex flex-col items-center gap-8 p-8 w-full h-full">
                    {/* Expo Logo with Glow Effect */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url(./images/auckland.jpg)',
                            height: '85vh'
                        }}
                    >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black" />
                    </div>

                    {/* 3D Card with Animated Border */}
                    <div className="relative group perspective-1000 mt-16">
                        {/* Animated Background Glow */}
                        <div
                            className="absolute -inset-4 bg-gradient-to-r from-green-500 to-green-300 
                                      rounded-xl opacity-25 group-hover:opacity-50 blur-xl
                                      transform group-hover:scale-110 transition-all duration-700"
                        />

                        {/* Main Card */}
                        <div
                            className="relative bg-black/60  p-12 rounded-lg 
                                      border border-green-500/30 
                                      transform transition-all duration-700
                                      group-hover:rotate-y-12 group-hover:scale-105
                                      group-hover:shadow-[0_0_50px_rgba(74,222,128,0.3)]"
                        >
                            {/* Hover Gradient Overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-green-400/10 to-transparent 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-700
                                          rounded-lg"
                            />

                            {/* Corner Accents */}
                            <div
                                className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-green-500/50 
                                          rounded-tl-lg transform -translate-x-1 -translate-y-1
                                          group-hover:border-green-400 group-hover:scale-105 transition-all duration-700"
                            />
                            <div
                                className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-green-500/50 
                                          rounded-br-lg transform translate-x-1 translate-y-1
                                          group-hover:border-green-400 group-hover:scale-105 transition-all duration-700"
                            />

                            {/* Content Container */}
                            <div className="relative z-10">
                                {/* Title with Gradient */}
                                <div className="mb-8">
                                    <p
                                        className="alegreya text-3xl font-bold bg-white
                                                bg-clip-text text-transparent transform 
                                                group-hover:scale-105 transition-transform duration-700"
                                    >
                                        Decentralized NZ++
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <p
                                        className="alegreya text-4xl font-bold bg-gradient-to-r from-green-400 to-green-300 
                                                bg-clip-text text-transparent transform 
                                                group-hover:scale-105 transition-transform duration-700"
                                    >
                                        Crypto & Blockchain Expo 25'
                                    </p>
                                </div>

                                {/* Location & Date with Icons */}
                                <div className="space-y-4">
                                    <div
                                        className="flex items-center gap-4 text-gray-300 group-hover:text-gray-200 
                                                  transition-colors duration-700"
                                    >
                                        <div className="w-6 h-6 text-green-400">
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-xl">Coming Soon</p>
                                    </div>
                                    <div
                                        className="flex items-center gap-4 text-gray-300 group-hover:text-gray-200 
                                                  transition-colors duration-700"
                                    >
                                        <div className="w-6 h-6 text-green-400">
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-xl">Coming September 2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Side (Now Right) */}
            <div className="relative z-10 w-full lg:w-2/5 flex flex-col justify-center px-6 lg:px-12 py-16">
                <div className="max-w-xl mx-auto">
                    <div className="mb-12">
                        <h2 className="alegreya text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Join NZ's Premier
                            <span className="alegreya text-green-500 block mt-2">Web3 Expo</span>
                        </h2>
                        <p className="text-gray-300 text-lg">Experience New Zealand's first-ever comprehensive blockchain, crypto, and Web3 exhibition</p>
                    </div>

                    <div className="space-y-6 mb-12">
                        {expoFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="border border-green-500/30 
                                         rounded-xl p-6 transition-all duration-300
                                         hover:border-green-400/70 hover:bg-green-500/10 
                                         hover:shadow-[0_0_25px_rgba(74,222,128,0.3)]
                                         transform hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <feature.icon className="w-6 h-6 text-green-400 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-300">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <a
                            href="/web-core/expo"
                            className="group px-8 py-4 bg-green-500 text-black font-semibold
                                     rounded-lg transition-all duration-300 
                                     hover:bg-green-400 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]
                                     w-full sm:w-auto text-center relative overflow-hidden"
                        >
                            <span className="relative z-10">Register Now</span>
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 
                                          transform translate-x-full group-hover:translate-x-0 
                                          transition-transform duration-300"
                            />
                        </a>
                        <a
                            href="/expo/schedule"
                            className="text-green-400 hover:text-green-300 transition-all duration-300
                                     border-b border-green-500/30 hover:border-green-400/70 
                                     px-4 py-2 hover:px-6"
                        >
                            View Schedule
                        </a>
                    </div>

                    <div className="mt-8">
                        <div
                            className="flex items-center gap-3 text-sm text-gray-400 bg-green-500/5 
                                      p-4 rounded-lg border border-green-500/20"
                        >
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span>Early bird tickets available now - Limited time offer</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    from { transform: translateY(0); }
                    to { transform: translateY(-20px); }
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
                .rotate-y-12 {
                    transform: rotateY(12deg);
                }
            `}</style>
        </div>
    )
}

export default ExpoSection
