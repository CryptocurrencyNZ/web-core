// src/components/Navbar.tsx
import React, { FC, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation, NavItem as NavigationItem } from '../config/navigation'

// Helper function to determine if an item is a dropdown
const isDropdown = (item: NavigationItem): boolean => {
    return item.isDropdown === true
}

// Get all menu items in a flat array for mobile menu
const getAllMenuItems = () => {
    const items: { title: string; path: string; icon: React.ReactNode; section?: string }[] = []

    // Add main navigation items
    navigation.forEach((item) => {
        if (!isDropdown(item)) {
            items.push({
                title: item.text,
                path: item.path || '#',
                icon: item.icon
            })
        } else {
            // Add dropdown items
            item.sections?.forEach((section) => {
                section.items.forEach((subItem) => {
                    items.push({
                        title: subItem.title,
                        path: subItem.path,
                        icon: subItem.icon,
                        section: section.title
                    })
                })
            })
        }
    })

    return items
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
            href={link || '#'}
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

    // Get all menu items for mobile menu
    const allMenuItems = getAllMenuItems()

    // Get buy & sell items
    const buySellItems = allMenuItems.filter((item) => item.section && ['Getting Started', 'Trading Options'].includes(item.section))

    // Get learn items
    const learnItems = allMenuItems.filter((item) => item.section && ['Crypto Basics', 'Advanced Topics'].includes(item.section))

    // Get main navigation items (not in dropdowns)
    const mainNavItems = allMenuItems.filter((item) => !item.section)

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
                                    link={isDropdown(item) ? undefined : item.path}
                                    dropdownContent={
                                        isDropdown(item) && item.sections ? (
                                            <div className="grid grid-cols-2 gap-6">
                                                {item.sections.map((section, sectionIndex) => (
                                                    <div key={sectionIndex}>
                                                        <h3 className="text-green-400 font-semibold mb-3 pl-2 text-base">{section.title}</h3>
                                                        <div className="space-y-1">
                                                            {section.items.map((dropdownItem, itemIndex) => (
                                                                <a key={itemIndex} href={dropdownItem.path} className={dropdownLinkClasses}>
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
                    {/* Find Home item */}
                    {mainNavItems.find((item) => item.title === 'Home') && (
                        <a
                            href={mainNavItems.find((item) => item.title === 'Home')?.path}
                            className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                     hover:bg-green-500/10 transition-colors text-sm sm:text-base
                     flex items-center gap-3"
                        >
                            {React.cloneElement(mainNavItems.find((item) => item.title === 'Home')?.icon as React.ReactElement, {
                                className: 'text-green-400'
                            })}
                            Home
                        </a>
                    )}

                    {/* Buy & Sell Section */}
                    {buySellItems.length > 0 && (
                        <div className="px-4 py-2">
                            <div className="font-medium text-green-400 mb-2 text-sm sm:text-base flex items-center gap-2">
                                {React.cloneElement(navigation.find((item) => item.text === 'Buy & Sell')?.icon as React.ReactElement, {
                                    className: 'text-green-400'
                                })}
                                Buy & Sell
                            </div>
                            <div className="pl-4 space-y-2">
                                {buySellItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                             hover:bg-green-500/10 transition-colors text-xs sm:text-sm
                             flex items-center gap-2"
                                    >
                                        {React.cloneElement(item.icon as React.ReactElement, {
                                            size: 16,
                                            className: 'text-green-400'
                                        })}
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Learn Section */}
                    {learnItems.length > 0 && (
                        <div className="px-4 py-2">
                            <div className="font-medium text-green-400 mb-2 text-sm sm:text-base flex items-center gap-2">
                                {React.cloneElement(navigation.find((item) => item.text === 'Learn')?.icon as React.ReactElement, {
                                    className: 'text-green-400'
                                })}
                                Learn
                            </div>
                            <div className="pl-4 space-y-2">
                                {learnItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                             hover:bg-green-500/10 transition-colors text-xs sm:text-sm
                             flex items-center gap-2"
                                    >
                                        {React.cloneElement(item.icon as React.ReactElement, {
                                            size: 16,
                                            className: 'text-green-400'
                                        })}
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Other main sections */}
                    {mainNavItems
                        .filter((item) => item.title !== 'Home')
                        .map((item, index) => (
                            <a
                                key={index}
                                href={item.path}
                                className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                         hover:bg-green-500/10 transition-colors text-sm sm:text-base
                         flex items-center gap-3"
                            >
                                {React.cloneElement(item.icon as React.ReactElement, {
                                    size: 18,
                                    className: 'text-green-400'
                                })}
                                {item.title}
                            </a>
                        ))}
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
