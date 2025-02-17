import { FC, CSSProperties } from 'react'
import '../../css/global.css'

interface NavigationButton {
    href: string
    label: string
}

interface StatItem {
    value: string
    label: string
}

const navigationButtons: NavigationButton[] = [
    { href: '/consultation', label: 'Book Consultation' },
    { href: '/services', label: 'Our Services' },
    { href: '/portfolio', label: 'Portfolio Review' }
]

const stats: StatItem[] = [
    { value: '5+', label: 'Years Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '24/7', label: 'Support' },
    { value: '100%', label: 'NZ Focused' }
]

const ConsultingHero: FC = () => {
    const gridCells: number = 24

    const pulseAnimation: CSSProperties = {
        animationName: 'pulse',
        animationDuration: '4s',
        animationIterationCount: 'infinite'
    }

    return (
        <div className="relative w-full flex flex-col lg:flex-row justify-between m-0 p-0 bg-black">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

            {/* Animated grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />

            <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-start px-8 md:px-16 relative z-10">
                <div className="max-w-xl">
                    <h1 className="alegreya text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 font-bold leading-tight">
                        Welcome to <span className="alegreya text-gray-300">Crypto Consulting</span>
                        <span className="alegreya text-green-500">NZ</span>
                    </h1>

                    <p className="text-lg md:text-xl mb-8 text-gray-300">Navigate the crypto landscape with confidence. Professional guidance tailored to New Zealand investors.</p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                        {navigationButtons.map((button, index) => (
                            <a
                                key={index}
                                href={button.href}
                                className="group flex items-center justify-center gap-2 px-6 py-3 
                                         bg-black/40 backdrop-blur-sm border border-green-500/30 
                                         rounded-lg text-white font-medium transition-all duration-300 
                                         hover:border-green-400/70 hover:bg-green-500/10 
                                         hover:shadow-[0_0_25px_rgba(74,222,128,0.3)]"
                            >
                                <span>{button.label}</span>
                                <span className="transform transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        ))}
                    </div>

                    <div className="mt-12">
                        <p className="text-gray-400 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Available for immediate consultation
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative overflow-hidden">
                {/* Decorative geometric pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 grid grid-cols-6 gap-4 p-8">
                        {Array.from({ length: gridCells }).map((_, i) => (
                            <div
                                key={i}
                                className="aspect-square bg-gradient-to-br from-green-500/20 to-transparent 
                                         rounded-lg transform hover:scale-105 transition-transform duration-500"
                                style={{
                                    ...pulseAnimation,
                                    animationDelay: `${i * 0.1}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-8 p-8 backdrop-blur-xl bg-black/30 rounded-2xl border border-green-500/20">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-4xl font-bold text-green-400">{stat.value}</p>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.4; }
                }
            `}</style>
        </div>
    )
}

export default ConsultingHero
