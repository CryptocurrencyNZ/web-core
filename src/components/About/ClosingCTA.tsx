import { FC } from 'react'
import { ArrowRight } from 'lucide-react'

const ClosingCTA: FC = () => {
    return (
        <>
            {/* Enhanced Closing CTA with rich gradient background and improved design */}
            <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
                {/* Rich gradient background with multiple layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />

                {/* Decorative gradient elements */}
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-600/10 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl opacity-20" />

                {/* Decorative diagonal lines */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent transform -translate-x-1/2 -rotate-12" />
                    <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent transform -translate-x-1/2 rotate-12" />
                    <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent transform translate-x-1/2 -rotate-12" />
                </div>

                {/* Content container with improved responsive padding */}
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Background card with gradient border */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Animated glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 via-green-300/20 to-green-600/30 rounded-xl blur-lg opacity-75 group-hover:opacity-100 animate-pulse-slow" />

                        {/* Main content card */}
                        <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-green-500/30">
                            {/* Wave pattern overlay */}
                            <div className="absolute inset-0 bg-[url('/images/wave-pattern.svg')] opacity-5" />

                            <div className="px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-16 text-center">
                                {/* Enhanced title with animated underline */}
                                <div className="relative inline-block mb-8">
                                    <h2
                                        className="alegreya text-3xl sm:text-4xl md:text-5xl font-bold 
                                        bg-gradient-to-r from-white via-green-200 to-green-300 bg-clip-text text-transparent
                                        transform transition-all duration-500"
                                    >
                                        A Kiwis Guide to the Future of Money
                                    </h2>
                                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent" />
                                </div>

                                {/* Improved description with better typography */}
                                <p className="text-zinc-100 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">Join Aotearoa's largest crypto community on our mission to advance cryptocurrency adoption, awareness, and education throughout New Zealand.</p>

                                {/* Enhanced call-to-action buttons with better styling */}
                                <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 md:gap-6">
                                    {/* Primary button with improved styling */}
                                    <a
                                        href="/web-core/#/web-core"
                                        className="group w-full sm:w-auto mb-4 sm:mb-0 px-6 sm:px-8 py-3 sm:py-4 
                                            bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold
                                            rounded-lg shadow-lg shadow-green-700/20
                                            hover:shadow-xl hover:shadow-green-600/30
                                            transform hover:-translate-y-1
                                            transition-all duration-300 
                                            relative overflow-hidden"
                                    >
                                        {/* Button shine effect */}
                                        <span
                                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                                        />

                                        <span className="relative z-10 flex items-center justify-center">
                                            Get In Touch
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                                        </span>
                                    </a>

                                    {/* Secondary button with better styling */}
                                    <a
                                        href="/web-core/#/web-core"
                                        className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4
                                            bg-transparent text-green-400 font-semibold
                                            border border-green-500/30 rounded-lg
                                            hover:bg-green-500/10 hover:border-green-400/70 hover:text-green-300
                                            transform hover:-translate-y-1
                                            transition-all duration-300"
                                    >
                                        <span className="flex items-center justify-center">
                                            Join Our Community
                                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </span>
                                    </a>
                                </div>

                                {/* Social proof */}
                                <div className="mt-10 pt-6 border-t border-green-500/10">
                                    <p className="text-green-300/80 text-sm mb-3">Join 50,000+ Kiwis already part of our community</p>
                                    <div className="flex justify-center items-center space-x-4">
                                        {/* Social proof icons - Facebook, Twitter, Discord, Telegram */}
                                        <a href="/web-core/#/web-core" className="text-zinc-400 hover:text-green-400 transition-colors duration-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="/web-core/#/web-core" className="text-zinc-400 hover:text-green-400 transition-colors duration-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        <a href="/web-core/#/web-core" className="text-zinc-400 hover:text-green-400 transition-colors duration-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                                            </svg>
                                        </a>
                                        <a href="/web-core/#/web-core" className="text-zinc-400 hover:text-green-400 transition-colors duration-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.064-1.225-.467-1.9-.917-1.056-.7-1.653-1.139-2.678-1.82-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
            </section>
        </>
    )
}

export default ClosingCTA
