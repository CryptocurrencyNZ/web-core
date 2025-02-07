import { FC } from 'react';
import { 
    MessageCircle,
    Twitter,
    Facebook,
    Instagram,
    Linkedin
} from 'lucide-react';

const SocialConnect: FC = () => {
    const socialLinks = [
        { icon: Twitter, name: 'Twitter', url: '#' },
        { icon: Facebook, name: 'Facebook', url: '#' },
        { icon: Instagram, name: 'Instagram', url: '#' },
        { icon: Linkedin, name: 'LinkedIn', url: '#' }
    ];

    return (
        <section className="relative py-16 px-4">
            {/* Background with diagonal split */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#00000000_0%,#00000000_50%,rgba(34,197,94,0.05)_50%,rgba(34,197,94,0.05)_100%)]" />
            </div>
            
            <div className="relative max-w-6xl mx-auto z-10">
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Discord Section */}
                    <div className="relative flex flex-col justify-center p-8">
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-green-500/30" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-green-500/30" />
                        
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="relative">
                                <div className="absolute inset-0 animate-pulse bg-green-500/20 rounded-full blur-xl" />
                                <MessageCircle className="relative w-20 h-20 text-green-400" />
                            </div>
                            
                            <h3 className="alegreya text-3xl font-bold text-white">
                                Join Our Discord
                            </h3>
                            
                            <p className="text-gray-300 max-w-md">
                                Connect with the NZ crypto community. Get real-time updates, 
                                participate in discussions, and learn from fellow enthusiasts.
                            </p>
                            
                            <a 
                                href="#" 
                                className="relative group px-8 py-3 bg-transparent overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-green-500 translate-y-full 
                                              group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10 text-green-400 font-semibold group-hover:text-black">
                                    Join Discord
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="relative flex flex-col justify-center p-8">
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-green-500/30" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-green-500/30" />
                        
                        <div className="flex flex-col items-center space-y-6">
                            <h3 className="alegreya text-3xl font-bold text-white">
                                Follow Us
                            </h3>
                            
                            <p className="text-gray-300 text-center max-w-md">
                                Stay updated with the latest news, events, and developments 
                                in the New Zealand cryptocurrency space.
                            </p>
                            
                            {/* Social Icons */}
                            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="group flex items-center gap-3 p-4 border border-green-500/20 
                                                 relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-green-500/10 translate-x-full 
                                                      group-hover:translate-x-0 transition-transform duration-300" />
                                        <social.icon className="relative z-10 w-6 h-6 text-green-400 
                                                             group-hover:scale-110 transition-transform duration-300" />
                                        <span className="relative z-10 text-white font-medium">
                                            {social.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialConnect;