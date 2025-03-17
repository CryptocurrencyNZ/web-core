import { FC } from 'react'

interface TeamMember {
    name: string
    role: string
    username?: string
    imageUrl: string
}

const teamMembers: TeamMember[] = [
    {
        name: 'Harry Satoshi',
        role: 'Founder & CEO',
        username: 'Aoraki_RangerNZ',
        imageUrl: './images/team/harry-satoshi.png'
    },
    {
        name: 'Nic Turnbull',
        role: 'Co-Founder & CFO',
        username: 'TxWheat',
        imageUrl: './images/team/nic-turnbull.png'
    },
    {
        name: 'Jake Thacker',
        role: 'Chief Operations Officer',
        imageUrl: './images/team/jake-thacker.png'
    },
    {
        name: 'Oliver Jenks',
        role: 'Chief Product Officer',
        imageUrl: './images/team/oliver-jenks.png'
    },
    {
        name: 'Ethan Davis',
        role: 'Head of IT',
        imageUrl: './images/team/ethan-davis.png'
    },
    {
        name: 'Jayden Hunt',
        role: 'Lead Front-end Developer',
        username: '_jaydenh',
        imageUrl: './images/team/jayden-hunt.png'
    },
    {
        name: 'Daichi Tang',
        role: 'Mining Specialist',
        username: 'Daichi_',
        imageUrl: './images/team/daichi-tang.png'
    },
    {
        name: 'Dev Krishnan',
        role: 'ACKL Meetup Host',
        username: 'ASICnz',
        imageUrl: './images/team/dev-krishnan.png'
    },
    {
        name: 'Kodi Sinclair',
        role: 'Community Manager',
        username: 'TheLastMoa',
        imageUrl: './images/team/kodi-sinclair.jpg'
    },
    {
        name: 'James Galbraith',
        role: 'Lead Blockchain Developer',
        imageUrl: './images/team/james-galbraith.png'
    }
]

const TeamSection: FC = () => {
    return (
        <>
            {/* Team Section - With gradient background and fully responsive */}
            <section id="team" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
                {/* Main gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/15 via-zinc-800/95 to-zinc-900/15" />

                {/* Decorative gradient elements */}
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl opacity-20" />
                <div className="absolute -top-32 right-1/3 w-64 h-64 bg-zinc-600/20 rounded-full blur-3xl opacity-30" />

                {/* Content container with better responsive padding */}
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="alegreya text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-white">
                        Our <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Team</span>
                    </h2>

                    {/* Improved responsive grid layout */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="border border-green-500/30 rounded-xl overflow-hidden
                                bg-gradient-to-b from-zinc-700/70 to-zinc-800/70 backdrop-blur-sm
                                transition-all duration-300 group
                                hover:border-green-400/70 hover:bg-gradient-to-b hover:from-zinc-700/60 hover:to-green-900/10
                                hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]
                                transform hover:-translate-y-1"
                            >
                                {/* Image container with improved aspect ratio and loading */}
                                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                                    {/* Background gradient for image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/50 to-zinc-900/50 z-0" />

                                    {/* Image with zoom effect */}
                                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${member.imageUrl})` }} role="img" aria-label={`Photo of ${member.name}`} />

                                    {/* Improved gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-800/30 to-transparent" />
                                </div>

                                {/* Content area with improved spacing */}
                                <div className="p-3 sm:p-4">
                                    {/* Name with hover effect */}
                                    <h3
                                        className="text-base sm:text-lg font-semibold text-white mb-1 
                                        group-hover:text-green-300 transition-colors duration-300"
                                    >
                                        {member.name}
                                    </h3>

                                    {/* Role with gradient text */}
                                    <p className="text-green-400 text-xs sm:text-sm mb-1 sm:mb-2">{member.role}</p>

                                    {/* Username with better styling */}
                                    {member.username && (
                                        <div className="flex items-center mt-2">
                                            <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                                            <p className="text-zinc-300 text-xs">@{member.username}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Join the team CTA */}
                    <div className="mt-10 sm:mt-12 md:mt-16 text-center">
                        <div
                            className="inline-block border border-green-500/30 rounded-lg 
                            px-4 sm:px-6 py-3 sm:py-4
                            bg-gradient-to-r from-green-500/10 to-green-400/5
                            hover:border-green-400/60 hover:from-green-500/20 hover:to-green-400/10
                            hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]
                            transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <a href="/web-core/#/web-core" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                                <span className="text-sm sm:text-base">Interested in joining our team?</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamSection
