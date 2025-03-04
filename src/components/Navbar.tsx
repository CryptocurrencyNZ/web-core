import { FC, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CNZ_URL } from '../config/config.ts'
import { navigation, isDropdown, isLink, getFullUrl } from '../config/navBarRoutes.ts'

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
                    className="flex items-center gap-2 px-2 sm:px-3 py-2 rounded-lg text-gray-300 
                                 hover:text-white hover:bg-green-500/10 transition-all duration-300
                                 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] font-medium
                                 text-base"
                >
                    {icon && <span>{icon}</span>}
                    {text}
                    <span className="text-sm transition-transform duration-300 group-hover:rotate-180">▾</span>
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
            href={link || CNZ_URL}
            className="px-2 sm:px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-green-500/10 
                      transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] 
                      font-medium flex items-center gap-2 text-base whitespace-nowrap"
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
                <div className="flex items-center h-20">
                    {/* Logo */}
                    <div className="w-16 md:w-20 lg:w-24 pr-2 md:pr-4 h-auto flex items-center justify-center text-gray-600 flex-shrink-0">
                        <img src="./images/CNZ logo.png" className="w-full h-full text-green-500 ml-2 md:ml-2 lg:ml-4 animate-shake" />
                    </div>

                    {/* Title and Navigation Container */}
                    <div className="flex flex-1 items-center justify-between min-[1200px]:justify-between">
                        <div className="flex-shrink-0 mx-4">
                            <h1 className="alegreya font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                <span className="alegreya text-gray-300">Cryptocurrency</span>
                                <span className="alegreya text-green-500">NZ</span>
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:space-x-4 lg:space-x-5 flex-shrink-0">
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
                                                        <h3 className="text-green-400 font-semibold mb-3 pl-2 text-base">{section.title}</h3>
                                                        <div className="space-y-1">
                                                            {section.items.map((dropdownItem, itemIndex) => (
                                                                <a key={itemIndex} href={getFullUrl(dropdownItem.path)} className={dropdownLinkClasses}>
                                                                    <span className="text-xl mt-1">{dropdownItem.icon}</span>
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

            {/* Mobile menu - Using the navigation config */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} min-[1200px]:hidden bg-black/95 backdrop-blur-md`}>
                <div className="px-4 pt-2 pb-4 space-y-1">
                    {navigation.map((item, index) => {
                        if (isLink(item)) {
                            return (
                                <a
                                    key={index}
                                    href={getFullUrl(item.path)}
                                    className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                           hover:bg-green-500/10 transition-colors text-sm sm:text-base"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.text}
                                </a>
                            )
                        } else if (isDropdown(item)) {
                            return (
                                <div key={index} className="px-4 py-2">
                                    <div className="font-medium text-green-400 mb-2 text-sm sm:text-base">{item.text}</div>
                                    {item.sections.map((section, sectionIndex) => (
                                        <div key={sectionIndex} className="mb-3">
                                            <div className="text-xs text-gray-500 mb-1 pl-4">{section.title}</div>
                                            <div className="pl-4 space-y-2">
                                                {section.items.map((dropdownItem, itemIndex) => (
                                                    <a
                                                        key={itemIndex}
                                                        href={getFullUrl(dropdownItem.path)}
                                                        className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                                               hover:bg-green-500/10 transition-colors text-xs sm:text-sm"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <span className="mr-2">{dropdownItem.icon}</span>
                                                        {dropdownItem.title}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                        return null
                    })}
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
