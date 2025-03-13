import { FC } from 'react'

const VisualShowcase: FC = () => {
    return (
        <>
            {/* Visual showcase section - Improved cards */}
            <section className="relative py-20 bg-zinc-800/90">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative rounded-xl overflow-hidden h-64 group shadow-lg">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: 'url(./images/auckland-meetup.jpg)' }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-800/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-xl font-semibold text-white mb-1">Auckland Meetups</h3>
                                <p className="text-green-300 text-sm">Growing the crypto community in NZ's largest city</p>
                            </div>
                        </div>

                        <div className="relative rounded-xl overflow-hidden h-64 group shadow-lg">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: 'url(./images/p2p-marketplace.png)' }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-800/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-xl font-semibold text-white mb-1">P2P Marketplace</h3>
                                <p className="text-green-300 text-sm">Direct crypto trading between Kiwis</p>
                            </div>
                        </div>

                        <div className="relative rounded-xl overflow-hidden h-64 group shadow-lg">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: 'url(./images/harry.png)' }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-800/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-xl font-semibold text-white mb-1">Crypto Education</h3>
                                <p className="text-green-300 text-sm">Simplifying crypto for all Kiwis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisualShowcase
