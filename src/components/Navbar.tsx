import { FC, useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../css/hero.css'

interface NavItemProps {
    text: string;
    link?: string;
    icon?: React.ReactNode;
    dropdownContent?: React.ReactNode;
}

const NavItem: FC<NavItemProps> = ({ text, link, icon, dropdownContent }) => {
    if (dropdownContent) {
        return (
            <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 
                                 hover:text-white hover:bg-green-500/10 transition-all duration-300
                                 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] font-medium">
                    {icon && <span>{icon}</span>}
                    {text}
                    <span className="text-sm transition-transform duration-300 group-hover:rotate-180">▾</span>
                </button>
                <div className="absolute right-0 top-full w-[300px] bg-black/95 backdrop-blur-md 
                              border border-green-500/30 rounded-xl p-4 opacity-0 invisible 
                              group-hover:opacity-100 group-hover:visible transform 
                              translate-y-2 group-hover:translate-y-0 transition-all duration-300
                              shadow-xl shadow-green-900/30">
                    {dropdownContent}
                </div>
            </div>
        );
    }

    return (
        <a 
            href={link} 
            className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-green-500/10 
                      transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] 
                      font-medium flex items-center gap-2"
        >
            {icon && <span>{icon}</span>}
            {text}
        </a>
    );
};

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dropdownLinkClasses = `
        flex items-start gap-3 p-3 rounded-lg hover:bg-green-500/10 transition-all duration-300
        hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] group/item
    `;

    return (
        <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 
                       border-b border-green-500/20 shadow-lg shadow-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                    <h1 className="alegreya text-4xl font-bold">
                        <span className="alegreya text-gray-600">Cryptocurrency</span>
                        <span className="alegreya text-[rgb(27,97,0)]">NZ</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <NavItem text="DAO" link="#" />
                        <NavItem text="Wallets" link="#" />
                        <NavItem text="Buy Crypto" link="#" />
                        <NavItem
                            text="Learn"
                            dropdownContent={
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-green-400 font-semibold mb-3 pl-2">Transferring</h3>
                                        <div className="space-y-1">
                                            <a href="#" className={dropdownLinkClasses}>
                                                <span className="text-xl mt-1">📊</span>
                                                <div className="flex-1">
                                                    <span className="text-white block group-hover/item:text-green-400 
                                                                   transition-colors">How to Buy</span>
                                                    <span className="text-sm text-gray-400">Learn the basics of buying crypto</span>
                                                </div>
                                            </a>
                                            <a href="#" className={dropdownLinkClasses}>
                                                <span className="text-xl mt-1">💹</span>
                                                <div className="flex-1">
                                                    <span className="text-white block group-hover/item:text-green-400 
                                                                   transition-colors">How to Sell</span>
                                                    <span className="text-sm text-gray-400">Master the selling process</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-green-400 font-semibold mb-3 pl-2">Technical</h3>
                                        <a href="#" className={dropdownLinkClasses}>
                                            <span className="text-xl mt-1">💼</span>
                                            <div className="flex-1">
                                                <span className="text-white block group-hover/item:text-green-400 
                                                               transition-colors">Crypto Mining</span>
                                                <span className="text-sm text-gray-400">Understand mining basics</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            }
                        />
                        <NavItem
                            text="Community"
                            dropdownContent={
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-green-400 font-semibold mb-3 pl-2">Events</h3>
                                        <a href="#" className={dropdownLinkClasses}>
                                            <span className="text-xl mt-1">🎯</span>
                                            <div className="flex-1">
                                                <span className="text-white block group-hover/item:text-green-400 
                                                               transition-colors">Upcoming Events</span>
                                                <span className="text-sm text-gray-400">Join our next meetup</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <h3 className="text-green-400 font-semibold mb-3 pl-2">Connect</h3>
                                        <a href="#" className={dropdownLinkClasses}>
                                            <span className="text-xl mt-1">👥</span>
                                            <div className="flex-1">
                                                <span className="text-white block group-hover/item:text-green-400 
                                                               transition-colors">Join Discord</span>
                                                <span className="text-sm text-gray-400">Connect with the community</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            }
                        />
                        <NavItem text="News" link="#" />
                        <NavItem text="About us" link="#" />
                        <NavItem text="Get help" link="#" />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
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
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-black/95 backdrop-blur-md`}>
                <div className="px-4 pt-2 pb-4 space-y-1">
                    <a href="#" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors">DAO</a>
                    <a href="#" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors">Wallets</a>
                    <a href="#" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors">Buy Crypto</a>
                    <div className="px-4 py-2">
                        <div className="font-medium text-green-400 mb-2">Learn</div>
                        <div className="pl-4 space-y-2">
                            <a href="#" className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                               hover:bg-green-500/10 transition-colors text-sm">How to Buy</a>
                            <a href="#" className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                               hover:bg-green-500/10 transition-colors text-sm">How to Sell</a>
                            <a href="#" className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                               hover:bg-green-500/10 transition-colors text-sm">Crypto Mining</a>
                        </div>
                    </div>
                    <a href="#" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors">Community</a>
                    <a href="#" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors">News</a>
                    <a href="#" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors">About us</a>
                    <a href="#" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                       hover:bg-green-500/10 transition-colors">Get help</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;