import { FC } from 'react'
import { MessageCircle, Globe, Users, Map } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    link: string;
    linkText: string;
    icon: typeof Users | typeof Map | typeof MessageCircle | typeof Globe;
}

const cnzProjects: Project[] = [
    {
        title: 'Cryptocurrency NZ Discord',
        description: 'New Zealand\'s largest cryptocurrency Discord server where Kiwis can freely talk Bitcoin, crypto, NFTs, DeFi, Mining, Day Trading and beyond in NZ.',
        link: '/discord',
        linkText: 'Join the CNZ Discord',
        icon: MessageCircle
    },
    {
        title: 'Cryptocurrency.org.NZ',
        description: 'Our New Zealand focused, no bullshit crypto guide built to help Kiwis learn, set up their first wallet and buy crypto safely and easily in NZ.',
        link: '/guides',
        linkText: 'Explore our Guides',
        icon: Globe
    },
    {
        title: 'NZ Crypto Meetups',
        description: 'On the last Wednesday of each month, we run 14 monthly Bitcoin & crypto meetups across New Zealand.',
        link: '/meetups',
        linkText: 'Find your CNZ Meetup',
        icon: Users
    },
    {
        title: 'NZ P2P Crypto Marketplace',
        description: 'New Zealand\'s largest peer-to-peer trading group for buying or selling crypto directly between individuals without middlemen.',
        link: '/p2p-marketplace',
        linkText: 'Go to NZ P2P Marketplace',
        icon: Map
    }
];

const Projects: FC = () => {
    return (
        <>
            {/* Projects Section - With gradient background and fully responsive */}
            <section id="projects" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
                {/* Main gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/95 via-zinc-700/15 to-zinc-800/95" />
                
                {/* Decorative gradient elements */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl opacity-20" />
                <div className="absolute -top-32 left-0 w-64 h-64 bg-zinc-600/20 rounded-full blur-3xl opacity-30" />
                
                {/* Content container with better responsive padding */}
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="alegreya text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-white">
                        Cryptocurrency NZ <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-zinc-100 text-sm sm:text-base text-center mb-8 sm:mb-10 md:mb-12 max-w-xl sm:max-w-2xl mx-auto">
                        Explore our initiatives designed to advance crypto adoption, awareness and community across Aotearoa
                    </p>

                    {/* Responsive grid with improved gap handling */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                        {cnzProjects.map((project, index) => (
                            <div
                                key={index}
                                className="border border-green-500/30 
                                rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300
                                bg-gradient-to-b from-zinc-800/70 to-zinc-800/50 backdrop-blur-sm
                                hover:border-green-400/70 hover:bg-gradient-to-b hover:from-zinc-800/60 hover:to-green-900/10
                                hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] md:hover:shadow-[0_0_25px_rgba(74,222,128,0.3)]
                                transform hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-3 sm:gap-4">
                                    {/* Icon with responsive sizing and better mobile alignment */}
                                    <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-2 rounded-lg border border-green-500/20 flex-shrink-0 mt-1">
                                        <project.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-400" />
                                    </div>
                                    
                                    <div>
                                        {/* Title with responsive typography */}
                                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">
                                            {project.title}
                                        </h3>
                                        
                                        {/* Description with better readability */}
                                        <p className="text-zinc-100 text-sm sm:text-base mb-3 sm:mb-4">
                                            {project.description}
                                        </p>
                                        
                                        {/* Enhanced link with interactive effects */}
                                        <a
                                            href={project.link}
                                            className="inline-flex items-center text-green-400 hover:text-green-300 transition-all duration-300
                                            border-b border-green-500/30 hover:border-green-400/70 
                                            pb-0.5 text-sm sm:text-base group"
                                        >
                                            <span>{project.linkText}</span>
                                            <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Additional bottom CTA */}
                    <div className="mt-10 sm:mt-12 text-center">
                        <a 
                            href="/all-projects"
                            className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 
                            bg-gradient-to-r from-green-500/20 to-green-600/10
                            hover:from-green-500/30 hover:to-green-600/20
                            border border-green-500/40 hover:border-green-400/60
                            rounded-lg text-green-400 hover:text-green-300 
                            shadow-sm hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]
                            transition-all duration-300 text-sm sm:text-base"
                        >
                            <span>View all initiatives</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Projects;