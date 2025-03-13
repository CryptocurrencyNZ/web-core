import { FC } from 'react'
import AnimatedCounter from '../AnimatedCounter'

interface StatCardProps {
    value: number
    label: string
    suffix?: string
}

const StatCard: FC<StatCardProps> = ({ value, label, suffix = '' }) => (
    <div
        className="border border-green-500/30 rounded-xl p-4 sm:p-5 md:p-6 text-center
      bg-gradient-to-b from-zinc-800/80 to-zinc-800/60 backdrop-blur-sm
      hover:border-green-400/70 hover:bg-gradient-to-b hover:from-zinc-800/70 hover:to-green-900/20 
      hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] md:hover:shadow-[0_0_25px_rgba(74,222,128,0.3)]
      transform hover:scale-[1.02] md:hover:scale-[1.03]
      transition-all duration-300"
    >
        <AnimatedCounter end={value} suffix={suffix} className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-300 bg-clip-text mb-2" />
        <div className="text-zinc-100 text-sm sm:text-base">{label}</div>
    </div>
)

const CommunityNumbers: FC = () => {
    const stats = [
        { value: 50000, label: 'Kiwi Members', suffix: '+' },
        { value: 14, label: 'NZ Meetup Hosts' },
        { value: 15, label: 'Group Moderators', suffix: '+' },
        { value: 11, label: 'Official Sponsors' }
    ]

    return (
        <>
            {/* Community Numbers Section - With gradient background and animated counters */}
            <section id="numbers" className="relative py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
                {/* Background gradient layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700/90 to-zinc-900" />

                {/* Additional decorative gradient elements */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-500/20 rounded-full blur-3xl opacity-40" />
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-green-600/20 rounded-full blur-3xl opacity-30" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-zinc-800/50 blur-3xl opacity-60" />

                {/* Content container with better padding for different screen sizes */}
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="alegreya text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-white">
                        The <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Largest</span> Crypto Community in NZ
                    </h2>

                    {/* Responsive grid with better spacing for mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                        {stats.map((stat, index) => (
                            <StatCard key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommunityNumbers
