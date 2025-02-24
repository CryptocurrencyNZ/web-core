import { ArrowRight, Calendar, Users, BookOpen, Network, Building, GraduationCap } from 'lucide-react'
import Navbar from '../Navbar'

const HeroSection = () => {
    const features = [
        {
            icon: BookOpen,
            title: 'Making Cryptocurrency Accessible',
            description: 'Demystifying crypto for the general public through educative talks and experiences with face-to-face engagement to help onboard newcomers.'
        },
        {
            icon: Building,
            title: "Showcase New Zealand's Crypto Ecosystem",
            description: 'Bringing together key players, projects, and innovators within the NZ crypto space to highlight local businesses, startups, and blockchain solutions.'
        },
        {
            icon: GraduationCap,
            title: 'Empower through Education',
            description: '30-minute talks tailored to different experience levels, from cryptocurrency beginners to seasoned professionals.'
        }
    ]

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Navbar />
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(74,222,128,0.1),transparent_70%)]" />

            <div className="relative w-full">
                {/* Mobile layout (stacked) */}
                <div className="lg:hidden w-full px-4 pt-28">
                    {/* Header Content */}
                    <div className="mb-8">
                        <div className="relative inline-block mb-6">
                            <span className="text-green-400 text-sm font-medium py-2 px-4 border border-green-500/30 rounded-full">CRYPTOCURRENCYNZ PRESENTS</span>
                            <div className="absolute -inset-1 bg-green-500/20 blur-sm rounded-full -z-10" />
                        </div>

                        <h1 className="alegreya text-4xl font-bold text-white mb-6 leading-tight">
                            New Zealand's First
                            <span className="alegreya block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">Crypto & Blockchain</span>
                            <span className="alegreya text-white">Expo 25'</span>
                        </h1>
                    </div>

                    {/* Image Section for Mobile */}
                    <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden border border-green-500/30">
                        <img src="./images/auckland.jpg" alt="Crypto Expo Event" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Action Buttons for Mobile */}
                    <div className="flex flex-col gap-4 mb-8">
                        <button className="group relative overflow-hidden rounded-full bg-gradient-to-br from-green-500 to-green-600 p-[1px] transition-all duration-300 hover:from-green-400 hover:to-green-500">
                            <div className="relative bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-white text-base font-semibold">General Sign Up</span>
                                    <ArrowRight className="w-5 h-5 text-green-400" />
                                </div>
                            </div>
                        </button>

                        <button className="group relative overflow-hidden rounded-full bg-gradient-to-br from-green-500 to-green-600 p-[1px] transition-all duration-300 hover:from-green-400 hover:to-green-500">
                            <div className="relative bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-white text-base font-semibold">Become a Sponsor</span>
                                    <ArrowRight className="w-5 h-5 text-green-400" />
                                </div>
                            </div>
                        </button>

                        <div className="bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-green-500/30">
                            <p className="text-white text-base font-semibold mb-1">Oliver Jenks</p>
                            <p className="text-green-400 text-base font-semibold mb-1">Event Director</p>
                            <a href="mailto:oliver@cryptocurrency.org.nz" className="text-sm hover:text-green-300 transition-colors">
                                oliver@cryptocurrency.org.nz
                            </a>
                        </div>
                    </div>

                    {/* Description and Features for Mobile */}
                    <div className="text-green-100 space-y-4 mb-8">
                        <p className="text-base">Since our inception in 2020, CryptocurrencyNZ (CNZ) has been dedicated to fostering New Zealand's growing crypto community. Our aim is to onboard, educate, and empower Kiwis who are new to the decentralized universe, provide a platform to bring together the cryptocurrency/blockchain ecosystem in NZ, create opportunities for connection, and to catalyze innovation.</p>
                        <p className="text-base">We believe that by bringing together developers, enthusiasts, and industry leaders, we can strengthen the local crypto ecosystem and help New Zealand embrace the opportunities of decentralised finance, blockchain, and digital assets.</p>
                    </div>

                    <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 p-6 rounded-xl mb-8">
                        <h2 className="text-xl font-bold text-white mb-4">What This Event Brings to NZ:</h2>
                        <ul className="space-y-4 text-green-100">
                            <li className="flex items-start gap-3">
                                <Calendar className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                <span>A first-of-its-kind exposition event showcasing New Zealand's cryptocurrency/blockchain ecosystem</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Users className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                <span>Educational talks and workshops for all experience levels</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Network className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                <span>A unique networking environment to connect with like-minded Kiwis</span>
                            </li>
                        </ul>
                    </div>

                    {/* Feature Cards for Mobile */}
                    <div className="space-y-4 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-black/70 p-4 rounded-xl border border-green-500/30">
                                <feature.icon className="w-6 h-6 text-green-400 mb-2" />
                                <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-green-100 text-base">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden lg:flex flex-row min-h-screen container mx-auto">
                    {/* Left Content Section */}
                    <div className="w-1/2 pt-32 px-8 flex flex-col justify-between relative z-10">
                        {/* Main Content */}
                        <div>
                            <div className="relative inline-block mb-6">
                                <span className="text-green-400 text-sm font-medium py-2 px-4 border border-green-500/30 rounded-full">CRYPTOCURRENCYNZ PRESENTS</span>
                                <div className="absolute -inset-1 bg-green-500/20 blur-sm rounded-full -z-10" />
                            </div>

                            <h1 className="alegreya text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                                New Zealand's First
                                <span className="alegreya block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">Crypto & Blockchain</span>
                                <span className="alegreya text-white">Expo 25'</span>
                            </h1>

                            <div className="text-green-100 space-y-4 mb-8">
                                <p className="text-lg">Since our inception in 2020, CryptocurrencyNZ (CNZ) has been dedicated to fostering New Zealand's growing crypto community. Our aim is to onboard, educate, and empower Kiwis who are new to the decentralized universe, provide a platform to bring together the cryptocurrency/blockchain ecosystem in NZ, create opportunities for connection, and to catalyze innovation.</p>
                                <p className="text-lg">We believe that by bringing together developers, enthusiasts, and industry leaders, we can strengthen the local crypto ecosystem and help New Zealand embrace the opportunities of decentralised finance, blockchain, and digital assets.</p>
                            </div>

                            <div className="relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-green-500/30 p-6 mb-8">
                                <h2 className="text-xl font-bold text-white mb-4">What This Event Brings to NZ:</h2>
                                <ul className="space-y-3 text-green-100">
                                    <li className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                        <span>A first-of-its-kind exposition event showcasing New Zealand's cryptocurrency/blockchain ecosystem of firms, startups, community groups, DAOs and more!</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                        <span>Educational talks and workshops, catering to different groups, from the un-initiated all the way to industry professionals</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Network className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                        <span>A unique networking environment to connect with like-minded Kiwis, industry leaders, and tech innovators</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-1/2 relative">
                        {/* Decorative Elements */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

                        {/* Main Image Container */}
                        <div className="relative h-full min-h-screen p-8 flex items-center">
                            <div className="relative w-full h-[80%] rounded-2xl overflow-hidden border border-green-500/30">
                                {/* Action Buttons - Overlayed on top left */}
                                <div className="absolute top-8 left-8 flex flex-col gap-4 z-20">
                                    <button className="group relative overflow-hidden rounded-full bg-gradient-to-br from-green-500 to-green-600 p-[1px] transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]">
                                        <div className="relative bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300 group-hover:bg-black/60">
                                            <div className="flex items-center justify-center gap-2">
                                                <span className="text-white font-semibold">General Sign Up</span>
                                                <ArrowRight className="w-5 h-5 text-green-400" />
                                            </div>
                                        </div>
                                    </button>

                                    <button className="group relative overflow-hidden rounded-full bg-gradient-to-br from-green-500 to-green-600 p-[1px] transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]">
                                        <div className="relative bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300 group-hover:bg-black/60">
                                            <div className="flex items-center justify-center gap-2">
                                                <span className="text-white font-semibold">Become a Sponsor</span>
                                                <ArrowRight className="w-5 h-5 text-green-400" />
                                            </div>
                                        </div>
                                    </button>

                                    <div className="bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-green-500/30">
                                        <p className="text-white font-semibold mb-1">Oliver Jenks</p>
                                        <p className="text-green-400 font-semibold mb-1">Event Director</p>
                                        <a href="mailto:oliver@cryptocurrency.org.nz" className="hover:text-green-300 transition-colors text-sm">
                                            oliver@cryptocurrency.org.nz
                                        </a>
                                    </div>
                                </div>

                                <img src="./images/auckland.jpg" alt="Crypto Expo Event" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Feature Cards */}
                                <div className="absolute bottom-8 left-8 right-8 space-y-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="bg-black/70 p-4 rounded-xl border border-green-500/30">
                                            <feature.icon className="w-6 h-6 text-green-400 mb-2" />
                                            <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                                            <p className="text-green-100 text-sm">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
