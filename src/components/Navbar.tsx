// src/components/Navbar.tsx
import { FC, useState } from 'react'
import { Menu, X, Home, Book, Users, DollarSign, Wallet, Award, Info, HelpCircle, MessageSquare, GanttChart, Newspaper, BadgeDollarSign, Bitcoin } from 'lucide-react'
import { CNZ_URL } from '../config/config.ts'

// Define the navigation structure with icons
const navigation = [
    {
        text: 'Home',
        path: '',
        icon: <Home size={18} />
    },
    {
        text: 'Buy & Sell',
        icon: <DollarSign size={18} />,
        isDropdown: true,
        sections: [
            {
                title: 'Getting Started',
                items: [
                    {
                        title: 'How to Buy Crypto',
                        description: 'Step-by-step guide for beginners',
                        path: 'how-to-buy',
                        icon: <BadgeDollarSign size={20} />
                    },
                    {
                        title: 'How to Sell Crypto',
                        description: 'Convert your crypto to NZD',
                        path: 'how-to-sell',
                        icon: <DollarSign size={20} />
                    },
                    {
                        title: 'Wallets',
                        description: 'Secure your digital assets',
                        path: 'wallets',
                        icon: <Wallet size={20} />
                    }
                ]
            },
            {
                title: 'Trading Options',
                items: [
                    {
                        title: 'NZ Exchanges',
                        description: 'Trusted platforms for Kiwis',
                        path: 'nz-exchanges',
                        icon: <GanttChart size={20} />
                    },
                    {
                        title: 'P2P Marketplace',
                        description: 'Trade directly with other Kiwis',
                        path: 'p2p-marketplace',
                        icon: <Users size={20} />
                    }
                ]
            }
        ]
    },
    {
        text: 'Learn',
        icon: <Book size={18} />,
        isDropdown: true,
        sections: [
            {
                title: 'Crypto Basics',
                items: [
                    {
                        title: 'Bitcoin Explained',
                        description: 'Understanding Bitcoin fundamentals',
                        path: 'bitcoin-explained',
                        icon: <Bitcoin size={20} />
                    },
                    {
                        title: 'Crypto Mining',
                        description: 'How mining works in New Zealand',
                        path: 'crypto-mining',
                        icon: <Award size={20} />
                    }
                ]
            },
            {
                title: 'Advanced Topics',
                items: [
                    {
                        title: 'DeFi for Kiwis',
                        description: 'Decentralized finance explained',
                        path: 'defi',
                        icon: <GanttChart size={20} />
                    },
                    {
                        title: 'Web3 & NFTs',
                        description: 'Explore digital ownership',
                        path: 'web3-nfts',
                        icon: <Award size={20} />
                    }
                ]
            }
        ]
    },
    {
        text: 'Community',
        path: 'community',
        icon: <Users size={18} />
    },
    {
        text: 'News',
        path: 'news',
        icon: <Newspaper size={18} />
    },
    {
        text: 'About',
        path: 'about',
        icon: <Info size={18} />
    },
    {
        text: 'Help',
        path: 'get-help',
        icon: <HelpCircle size={18} />
    }
]

// Helper functions
const isDropdown = (item: any): item is { isDropdown: true; sections: any[] } => {
    return item.isDropdown === true
}

const getFullUrl = (path: string): string => {
    return `${CNZ_URL}${path}`
}

interface NavItemProps {
    text: string
    link?: string
    icon?: React.ReactNode
    dropdownContent?: React.ReactNode
}

const NavItem: FC<NavItemProps> = ({ text, link, icon, dropdownContent }) => {
    if (dropdownContent) {
        return (
            <div className="relative group">
                <button
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 
                                 hover:text-white hover:bg-green-500/10 transition-all duration-300
                                 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] font-medium
                                 text-base"
                >
                    {icon && <span className="text-green-400">{icon}</span>}
                    {text}
                    <span className="text-sm transition-transform duration-300 group-hover:rotate-180">▾</span>
                </button>
                <div
                    className="absolute right-0 top-full w-[600px] bg-black/95 backdrop-blur-md 
                              border border-green-500/30 rounded-xl p-4 opacity-0 invisible 
                              group-hover:opacity-100 group-hover:visible transform 
                              translate-y-2 group-hover:translate-y-0 transition-all duration-300
                              shadow-xl shadow-green-900/30 z-50"
                >
                    {dropdownContent}
                </div>
            </div>
        )
    }

    return (
        <a
            href={link || CNZ_URL}
            className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-green-500/10 
                      transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] 
                      font-medium flex items-center gap-2 text-base whitespace-nowrap"
        >
            {icon && <span className="text-green-400">{icon}</span>}
            {text}
        </a>
    )
}

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const dropdownLinkClasses = `flex items-start gap-3 p-3 rounded-lg hover:bg-green-500/10 transition-all duration-300
        hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] group/item`

    return (
        <nav
            className="fixed top-0 left-0 right-0 bg-zinc-800/90 backdrop-blur-md z-50 
                         border-b border-green-500/20 shadow-lg shadow-zinc-900/50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16 md:h-18 lg:h-20">
                    {/* Logo - Made smaller and with better spacing */}
                    <div className="w-12 md:w-16 lg:w-20 flex items-center justify-center flex-shrink-0">
                        <img src="./images/CNZ logo.png" className="w-10 md:w-14 lg:w-16 text-green-500 animate-shake" alt="Cryptocurrency NZ Logo" />
                    </div>

                    {/* Title and Navigation Container */}
                    <div className="flex flex-1 items-center justify-between min-[1200px]:justify-between">
                        <div className="flex-shrink-0 mx-2 md:mx-4">
                            <h1 className="alegreya font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl">
                                <span className="alegreya text-gray-300">Cryptocurrency</span>
                                <span className="alegreya text-green-500">NZ</span>
                            </h1>
                        </div>

                        {/* Desktop Navigation - Better spacing and organization */}
                        <div className="hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:space-x-2 lg:space-x-3 flex-shrink-0">
                            {navigation.map((item, index) => (
                                <NavItem
                                    key={index}
                                    text={item.text}
                                    icon={item.icon}
                                    link={isDropdown(item) ? undefined : getFullUrl(item.path || '')}
                                    dropdownContent={
                                        isDropdown(item) ? (
                                            <div className="grid grid-cols-2 gap-6">
                                                {item.sections.map((section, sectionIndex) => (
                                                    <div key={sectionIndex}>
                                                        <h3 className="text-green-400 font-semibold mb-3 pl-2 text-base">{section.title}</h3>
                                                        <div className="space-y-1">
                                                            {section.items.map((dropdownItem, itemIndex) => (
                                                                <a key={itemIndex} href={getFullUrl(dropdownItem.path)} className={dropdownLinkClasses}>
                                                                    <span className="text-green-400 mt-1 flex-shrink-0">{dropdownItem.icon}</span>
                                                                    <div className="flex-1">
                                                                        <span
                                                                            className="text-white block group-hover/item:text-green-400 
                                                                            transition-colors text-base"
                                                                        >
                                                                            {dropdownItem.title}
                                                                        </span>
                                                                        <span className="text-sm text-gray-400">{dropdownItem.description}</span>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : undefined
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="min-[1200px]:hidden flex-shrink-0">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-gray-300 hover:text-white 
                                     hover:bg-green-500/10 transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Improved Mobile menu with icons and better organization */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} min-[1200px]:hidden bg-black/95 backdrop-blur-md`}>
                <div className="px-4 pt-2 pb-4 space-y-1">
                    <a
                        href={CNZ_URL}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                               hover:bg-green-500/10 transition-colors text-sm sm:text-base
                               flex items-center gap-3"
                    >
                        <Home size={18} className="text-green-400" />
                        Home
                    </a>

                    {/* Buy & Sell Section */}
                    <div className="px-4 py-2">
                        <div className="font-medium text-green-400 mb-2 text-sm sm:text-base flex items-center gap-2">
                            <DollarSign size={18} />
                            Buy & Sell
                        </div>
                        <div className="pl-4 space-y-2">
                            <a
                                href={getFullUrl('how-to-buy')}
                                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-xs sm:text-sm
                                       flex items-center gap-2"
                            >
                                <BadgeDollarSign size={16} className="text-green-400" />
                                How to Buy
                            </a>
                            <a
                                href={getFullUrl('how-to-sell')}
                                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-xs sm:text-sm
                                       flex items-center gap-2"
                            >
                                <DollarSign size={16} className="text-green-400" />
                                How to Sell
                            </a>
                            <a
                                href={getFullUrl('wallets')}
                                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-xs sm:text-sm
                                       flex items-center gap-2"
                            >
                                <Wallet size={16} className="text-green-400" />
                                Wallets
                            </a>
                            <a
                                href={getFullUrl('p2p-marketplace')}
                                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-xs sm:text-sm
                                       flex items-center gap-2"
                            >
                                <Users size={16} className="text-green-400" />
                                P2P Marketplace
                            </a>
                        </div>
                    </div>

                    {/* Learn Section */}
                    <div className="px-4 py-2">
                        <div className="font-medium text-green-400 mb-2 text-sm sm:text-base flex items-center gap-2">
                            <Book size={18} />
                            Learn
                        </div>
                        <div className="pl-4 space-y-2">
                            <a
                                href={getFullUrl('bitcoin-explained')}
                                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-xs sm:text-sm
                                       flex items-center gap-2"
                            >
                                <Bitcoin size={16} className="text-green-400" />
                                Bitcoin Explained
                            </a>
                            <a
                                href={getFullUrl('crypto-mining')}
                                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-xs sm:text-sm
                                       flex items-center gap-2"
                            >
                                <Award size={16} className="text-green-400" />
                                Crypto Mining
                            </a>
                        </div>
                    </div>

                    {/* Other main sections */}
                    <a
                        href={getFullUrl('community')}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                               hover:bg-green-500/10 transition-colors text-sm sm:text-base
                               flex items-center gap-3"
                    >
                        <Users size={18} className="text-green-400" />
                        Community
                    </a>
                    <a
                        href={getFullUrl('news')}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                               hover:bg-green-500/10 transition-colors text-sm sm:text-base
                               flex items-center gap-3"
                    >
                        <Newspaper size={18} className="text-green-400" />
                        News
                    </a>
                    <a
                        href={getFullUrl('about')}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                               hover:bg-green-500/10 transition-colors text-sm sm:text-base
                               flex items-center gap-3"
                    >
                        <Info size={18} className="text-green-400" />
                        About Us
                    </a>
                    <a
                        href={getFullUrl('get-help')}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                               hover:bg-green-500/10 transition-colors text-sm sm:text-base
                               flex items-center gap-3"
                    >
                        <HelpCircle size={18} className="text-green-400" />
                        Get Help
                    </a>
                </div>
            </div>
            <style>{`
             @keyframes shake {
                    0%, 50%, 100% { transform: rotate(0deg); }
                    5%, 15% { transform: rotate(-5deg); }
                    10%, 20% { transform: rotate(5deg); }
                }
                
                .animate-shake {
                    animation: shake 5s ease-in-out infinite;
                }
            `}</style>
        </nav>
    )
}

export default Navbar
