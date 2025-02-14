import { FC, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CNZ_URL } from '../config/config.ts' // Import the BASE_URL variable
import { navigation, isDropdown, getFullUrl } from '../config/navBarRoutes.ts'

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
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-gray-300 
                                 hover:text-white hover:bg-green-500/10 transition-all duration-300
                                 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] font-medium
                                 text-sm sm:text-base"
                >
                    {icon && <span>{icon}</span>}
                    {text}
                    <span className="text-xs sm:text-sm transition-transform duration-300 group-hover:rotate-180">▾</span>
                </button>
                <div
                    className="absolute right-0 top-full w-[600px] bg-black/95 backdrop-blur-md 
                              border border-green-500/30 rounded-xl p-4 opacity-0 invisible 
                              group-hover:opacity-100 group-hover:visible transform 
                              translate-y-2 group-hover:translate-y-0 transition-all duration-300
                              shadow-xl shadow-green-900/30"
                >
                    {dropdownContent}
                </div>
            </div>
        )
    }

    return (
        <a
            href={link || CNZ_URL} // Use BASE_URL if no link is provided
            className="px-3 sm:px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-green-500/10 
                      transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] 
                      font-medium flex items-center gap-2 text-sm sm:text-base"
        >
            {icon && <span>{icon}</span>}
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
            className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 
                       border-b border-green-500/20 shadow-lg shadow-black/50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="alegreya font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            <span className="alegreya text-gray-600">Cryptocurrency</span>
                            <span className="alegreya text-[rgb(27,97,0)]">NZ</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:space-x-4">
                        {navigation.map((item, index) => (
                            <NavItem
                                key={index}
                                text={item.text}
                                link={isDropdown(item) ? undefined : getFullUrl(item.path)}
                                dropdownContent={
                                    isDropdown(item) ? (
                                        <div className="grid grid-cols-2 gap-8">
                                            {item.sections.map((section, sectionIndex) => (
                                                <div key={sectionIndex}>
                                                    <h3 className="text-green-400 font-semibold mb-3 pl-2 text-sm sm:text-base">{section.title}</h3>
                                                    <div className="space-y-1">
                                                        {section.items.map((dropdownItem, itemIndex) => (
                                                            <a key={itemIndex} href={getFullUrl(dropdownItem.path)} className={dropdownLinkClasses}>
                                                                <span className="text-lg sm:text-xl mt-1">{dropdownItem.icon}</span>
                                                                <div className="flex-1">
                                                                    <span
                                                                        className="text-white block group-hover/item:text-green-400 
                                                                       transition-colors text-sm sm:text-base"
                                                                    >
                                                                        {dropdownItem.title}
                                                                    </span>
                                                                    <span className="text-xs sm:text-sm text-gray-400">{dropdownItem.description}</span>
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

                    {/* Mobile menu button */}
                    <div className="min-[1200px]:hidden">
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

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} min-[1200px]:hidden bg-black/95 backdrop-blur-md`}>
                <div className="px-4 pt-2 pb-4 space-y-1">
                    <a
                        href={CNZ_URL + 'dao'}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-sm sm:text-base"
                    >
                        DAO
                    </a>
                    <a
                        href={CNZ_URL + 'wallets'}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-sm sm:text-base"
                    >
                        Wallets
                    </a>
                    <a
                        href={CNZ_URL + 'buy-crypto'}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-sm sm:text-base"
                    >
                        Buy Crypto
                    </a>
                    <div className="px-4 py-2">
                        <div className="font-medium text-green-400 mb-2 text-sm sm:text-base">Learn</div>
                        <div className="pl-4 space-y-2">
                            <a
                                href={CNZ_URL + 'how-to-buy'}
                                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                               hover:bg-green-500/10 transition-colors text-xs sm:text-sm"
                            >
                                How to Buy
                            </a>
                            <a
                                href={CNZ_URL + 'how-to-sell'}
                                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                               hover:bg-green-500/10 transition-colors text-xs sm:text-sm"
                            >
                                How to Sell
                            </a>
                            <a
                                href={CNZ_URL + 'crypto-mining'}
                                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                               hover:bg-green-500/10 transition-colors text-xs sm:text-sm"
                            >
                                Crypto Mining
                            </a>
                        </div>
                    </div>
                    <a
                        href={CNZ_URL + 'community'}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-sm sm:text-base"
                    >
                        Community
                    </a>
                    <a
                        href={CNZ_URL + 'news'}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-sm sm:text-base"
                    >
                        News
                    </a>
                    <a
                        href={CNZ_URL + 'about'}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-sm sm:text-base"
                    >
                        About us
                    </a>
                    <a
                        href={CNZ_URL + 'get-help'}
                        className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors text-sm sm:text-base"
                    >
                        Get help
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
