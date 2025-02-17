import { FC } from 'react'
import AnimatedGridPattern from '../AnimatedGridPattern'
import '../../css/global.css'

interface NavigationButton {
    href: string
    label: string
    isPrimary?: boolean
}

interface Statistic {
    value: string
    label: string
}

const navigationButtons: NavigationButton[] = [
    { href: '/book-consultation', label: 'Book a Consultation', isPrimary: true },
    { href: '/services', label: 'Our Services' },
    { href: '/about', label: 'About Us' }
]

const statistics: Statistic[] = [
    { value: '500+', label: 'Clients Advised' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' }
]

const ConsultingHero: FC = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-stretch">
            <AnimatedGridPattern />

            {/* Left Content Side */}
            <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-20">
                <div className="max-w-xl">
                    {/* Logo Area */}
                    <div className="mb-8">
                        <div
                            className="inline-block bg-black/80 rounded-xl p-4 backdrop-blur-xl
                                      border border-green-500/30 shadow-[0_0_30px_rgba(74,222,128,0.2)]"
                        >
                            <img src="./../images/Crypto-Consulting-NZ.png" className="w-8 h-8 text-green-500" />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="mb-12">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            Crypto
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Consulting NZ</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl">Navigate the cryptocurrency landscape with confidence. Professional guidance tailored to New Zealand investors.</p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                        {navigationButtons.map((button, index) => (
                            <a
                                key={index}
                                href={button.href}
                                className={`px-8 py-4 rounded-lg transition-all duration-300 
                                          font-semibold text-center w-full sm:w-auto
                                          ${button.isPrimary ? 'bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]' : 'bg-black/40 backdrop-blur-sm border border-green-500/30 text-white hover:border-green-400/70 hover:bg-green-500/10 hover:shadow-[0_0_25px_rgba(74,222,128,0.3)]'}`}
                            >
                                {button.label}
                            </a>
                        ))}
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-3 gap-4">
                        {statistics.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-4 bg-black/40 backdrop-blur-sm 
                                                      rounded-lg border border-green-500/30"
                            >
                                <p className="text-2xl font-bold text-green-400">{stat.value}</p>
                                <p className="text-sm text-gray-300">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Visual Side */}
            <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-full flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-black/50" />

                {/* Animated Decorative Elements */}
                <div className="absolute inset-0">
                    {/* Large Rotating Circles */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-30">
                        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-500" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-400" />
                            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-300" />
                        </svg>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0 grid grid-cols-2 gap-8 p-12">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={i}
                                className="aspect-square bg-gradient-to-br from-green-500/10 to-transparent 
                                         rounded-lg opacity-40"
                                style={{
                                    animation: `float ${3 + i}s infinite ease-in-out`,
                                    animationDelay: `${i * 0.5}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Main Visual Element */}
                <div className="relative z-10 p-8">
                    <div className="relative group">
                        <div
                            className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-300 
                                      rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"
                        ></div>
                        <div
                            className="relative bg-black/90 backdrop-blur-xl p-8 rounded-2xl 
                                      border border-green-500/30 max-w-md"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-500">
                                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5h-2v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.32-3.42z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Professional Guidance</h3>
                                    <p className="text-gray-400">Expert crypto consultation</p>
                                </div>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    Personalized Investment Strategies
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    NZ Regulatory Compliance
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    24/7 Expert Support
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    )
}

export default ConsultingHero
