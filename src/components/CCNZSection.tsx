import { FC } from 'react'
import AnimatedGridPattern from './AnimatedGridPattern'

interface ConsultingFeature {
    title: string
    description: string
}

const consultingFeatures: ConsultingFeature[] = [
    {
        title: 'Expert Guidance',
        description: 'Professional crypto consulting tailored for NZ investors'
    },
    {
        title: '24/7 Support',
        description: 'Round-the-clock assistance for your crypto journey'
    },
    {
        title: 'Local Focus',
        description: 'NZ-specific advice and regulatory compliance'
    }
]

const ConsultingSection: FC = () => {
    return (
        <div className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-stretch">
            <AnimatedGridPattern />

            {/* Left Content Side */}
            <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-20">
                <div className="max-w-xl">
                    <div className="mb-12">
                        <h2 className="alegreya text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Need Professional
                            <span className="alegreya text-green-500 block mt-2">Crypto Guidance?</span>
                        </h2>
                        <p className="text-gray-300 text-lg">Get expert cryptocurrency consulting services designed specifically for New Zealand investors</p>
                    </div>

                    <div className="space-y-6 mb-12">
                        {consultingFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="border border-green-500/30 
                                         rounded-xl p-6 transition-all duration-300
                                         hover:border-green-400/70 hover:bg-green-500/10 
                                         hover:shadow-[0_0_25px_rgba(74,222,128,0.3)]"
                            >
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <a
                            href="/web-core/consulting"
                            className="px-8 py-4 bg-green-500 text-black font-semibold
                                     rounded-lg transition-all duration-300 
                                     hover:bg-green-400 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]
                                     w-full sm:w-auto text-center"
                        >
                            Visit Crypto Consulting NZ
                        </a>
                        <a
                            href="/consulting/contact"
                            className="text-green-400 hover:text-green-300 transition-colors border-b 
                                   border-green-500/30 hover:border-green-400/70 px-4 py-2"
                        >
                            Book a Consultation
                        </a>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Professional consultants available now
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Visual Side */}
            <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-full flex items-center justify-center overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-black/50" />

                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-30">
                        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-500" />
                            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-400" />
                            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-300" />
                        </svg>
                    </div>
                </div>

                {/* Main Image Container */}
                <div className="relative z-10 flex flex-col items-center gap-8 p-8">
                    {/* Consulting Logo */}
                    <div
                        className="w-32 h-32 bg-black/80 rounded-2xl p-6 backdrop-blur-xl
                                  border border-green-500/30 shadow-[0_0_50px_rgba(74,222,128,0.3)]"
                    >
                        <img src="./images/Crypto-Consulting-NZ.png" className="w-full h-full text-green-500" />
                    </div>

                    {/* 3D Card Effect */}
                    <div className="relative group">
                        <div
                            className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-300 
                                      rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"
                        ></div>
                        <div
                            className="relative bg-black/90 backdrop-blur-xl p-6 rounded-lg 
                                      border border-green-500/30"
                        >
                            <p className="text-xl font-semibold text-green-400 mb-2">Crypto Consulting NZ</p>
                            <p className="text-gray-300 text-sm">Professional Guidance for Your Crypto Journey</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    )
}

export default ConsultingSection
