import { FC } from 'react';
import { 
    Twitter, 
    Facebook, 
    Instagram, 
    Linkedin, 
    Mail, 
    MapPin, 
    Phone 
} from 'lucide-react';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black py-12 px-4">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">CryptocurrencyNZ</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Empowering New Zealanders with cryptocurrency knowledge and resources.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['About Us', 'Services', 'Resources', 'Blog', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <a 
                                        href="#" 
                                        className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <MapPin size={16} className="text-green-400" />
                                Auckland, New Zealand
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Mail size={16} className="text-green-400" />
                                info@cryptocurrencynz.com
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Phone size={16} className="text-green-400" />
                                +64 XXX XXXX
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form className="space-y-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg 
                                         focus:outline-none focus:border-green-500 text-gray-300 text-sm"
                            />
                            <button 
                                type="submit" 
                                className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 
                                         transition-colors rounded-lg text-black font-medium text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} CryptocurrencyNZ. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;