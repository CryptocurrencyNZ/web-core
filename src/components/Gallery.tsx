import { FC, useState, useEffect } from 'react'
import { Heart, Users, Sparkles, LucideIcon } from 'lucide-react'

interface GalleryItem {
    category: string
    title: string
    description: string
    image: string
}

interface AnimatedCounterProps {
    end: number
    duration?: number
}

interface StatBoxProps {
    icon: React.ReactNode
    label: string
    value: number
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        let startTimestamp: number | null = null
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)

            // Easing function for smooth deceleration
            const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4)
            const easedProgress = easeOutQuart(progress)

            setCount(Math.round(easedProgress * end))

            if (progress < 1) {
                window.requestAnimationFrame(step)
            }
        }
        window.requestAnimationFrame(step)
    }, [end, duration])

    return <span className="text-2xl font-bold text-green-400 tabular-nums">{count.toLocaleString()}</span>
}

const StatBox: FC<StatBoxProps> = ({ icon, label, value }) => (
    <div className="flex flex-col items-center justify-center px-2 py-4 bg-black/30 rounded-lg border border-green-400/30 text-center">
        {icon}
        <AnimatedCounter end={value} />
        <span className="text-xs text-green-100 mt-1 w-full text-center whitespace-normal leading-tight">{label}</span>
    </div>
)

const Gallery: FC = () => {
    const items: GalleryItem[] = [
        {
            category: 'Christchurch',
            title: 'Christchurch Meetup',
            description: 'Secure, high-performance trading platforms',
            image: './images/Chch.jpg'
        },
        {
            category: 'Hawkes Bay',
            title: 'Hawkes Bay Meetup',
            description: 'Sustainable blockchain infrastructure',
            image: './images/hawkes bay.jpeg'
        },
        {
            category: 'Hawkes Bay',
            title: 'Hawkes Bay Meetup',
            description: 'Cutting-edge distributed ledger technologies',
            image: './images/hawkes bay 2.jpeg'
        },
        {
            category: 'Tauranga',
            title: 'Tauranga Meetup',
            description: 'Nurturing next-generation crypto entrepreneurs',
            image: './images/tauranga.jpg'
        }
    ]

    return (
        <section className="relative min-h-screen">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video className="absolute w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="/path-to-your-video.mp4" type="video/mp4" />
                </video>

                {/* Video Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
            </div>

            {/* Main Content Section */}
            <div className="relative z-10 py-8 px-4">
                {/* Header Content */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="alegreya text-2xl md:text-3xl font-bold text-center mb-2 text-white">Cryptocurrency NZ Monthly Meetups</h2>
                    <p className="text-green-100 text-center text-sm md:text-base mb-6">Discover the dynamic evolution of Aotearoa's cryptocurrency, blockchain, and Web3 ecosystem, blending social impact, industry growth, investment opportunities, and futuristic innovation.</p>
                </div>

                {/* Main Content Container */}
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                    {/* Gallery Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden
                                             border border-green-400/30 hover:border-green-400/70 
                                             transition-all duration-300 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]"
                                    data-category={item.category}
                                >
                                    <div className="h-56 w-full">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

                                        {/* Dark overlay for better text readability */}
                                        <div className="absolute inset-0 bg-black opacity-20" />

                                        {/* Hover overlay */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 
                                                      opacity-0 group-hover:opacity-90 transition-opacity duration-300 
                                                      flex flex-col items-center justify-center p-4"
                                        >
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <span className="block text-green-100 text-xs font-medium mb-1">{item.category}</span>
                                                <h3 className="text-white text-lg font-bold mb-1">{item.title}</h3>
                                                <p className="text-green-50 text-xs">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons and Stats Container */}
                    <div className="lg:w-1/3 flex flex-col justify-start gap-6 lg:pl-8">
                        {/* Support Us Button */}
                        <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-green-600 p-[1px] transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]">
                            <div className="relative bg-black/90 backdrop-blur-xl px-8 py-4 rounded-lg transition-all duration-300 group-hover:bg-black/80">
                                <div className="flex items-center justify-center gap-3">
                                    <Heart className="w-5 h-5 text-green-400" />
                                    <span className="text-white font-semibold">Support Us</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-green-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </button>

                        {/* Start Meetup Button */}
                        <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-green-600 p-[1px] transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]">
                            <div className="relative bg-black/90 backdrop-blur-xl px-8 py-4 rounded-lg transition-all duration-300 group-hover:bg-black/80">
                                <div className="flex items-center justify-center gap-3">
                                    <Sparkles className="w-5 h-5 text-green-400" />
                                    <span className="text-white font-semibold">Start Your Own Meetup</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-green-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </button>

                        {/* Join Community Button */}
                        <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-green-600 p-[1px] transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]">
                            <div className="relative bg-black/90 backdrop-blur-xl px-8 py-4 rounded-lg transition-all duration-300 group-hover:bg-black/80">
                                <div className="flex items-center justify-center gap-3">
                                    <Users className="w-5 h-5 text-green-400" />
                                    <span className="text-white font-semibold">Join Community</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-green-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </button>

                        {/* Stats Container */}
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            <StatBox icon={<Users className="w-6 h-6 text-green-400 mb-2" />} label="Total Attendees" value={1234} />
                            <StatBox icon={<Sparkles className="w-6 h-6 text-green-400 mb-2" />} label="Total Events" value={126} />
                            <StatBox icon={<Heart className="w-6 h-6 text-green-400 mb-2" />} label="Sponsorships" value={11} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
        </section>
    )
}

export default Gallery
