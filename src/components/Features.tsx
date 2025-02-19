interface CryptoTopic {
    icon: string
    title: string
    description: string
    keyPoint: string
    keyLabel: string
    url: string // Added URL property
}

const CryptoIntro = () => {
    const topics: CryptoTopic[] = [
        {
            icon: '🔒',
            title: 'What is Cryptocurrency?',
            description: 'A revolutionary virtual asset class that uses military grade cryptography for security. They operate on blockchain technology, making them decentralized and transparent',
            keyPoint: 'Read More',
            keyLabel: 'Decentralized',
            url: '/crypto-guide' // Replace with your actual URL
        },
        {
            icon: '💼',
            title: 'Digital Wallets',
            description: 'Secure digital vaults that allow you to store, send and receive cryptocurrencies. Think of it as your soverign digital bank account for crypto.',
            keyPoint: 'Recommended Wallets',
            keyLabel: '',
            url: '/wallets' // Replace with your actual URL
        },
        {
            icon: '🤝',
            title: 'Peer-to-Peer (P2P)',
            description: 'Crypto allows direct directions without users without intermediaries. P2P trading allows for more control and higher privacy.',
            keyPoint: 'P2P Marketplace',
            keyLabel: '',
            url: '/p2p-trading' // Replace with your actual URL
        },
        {
            icon: '🌱',
            title: 'Community & Growth',
            description: 'Join our growing community of crypto enthusiasts in NZ. Learn, share, enterprise, and grow together New Zealands digial economy.',
            keyPoint: 'Growing',
            keyLabel: 'NZ Network',
            url: '/community' // Replace with your actual URL
        }
    ]

    return (
        <section className="relative py-8 px-4">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-400/20 to-black" />

            {/* Content */}
            <div className="relative max-w-6xl mx-auto z-10">
                <h2 className="alegreya text-3xl md:text-4xl font-bold text-center mb-3 text-white">
                    What is <span className="text-green-400">Crypto?</span>
                </h2>
                <p className="text-green-100 text-center text-base md:text-lg mb-8 max-w-3xl mx-auto">Understanding cryptocurrency doesn't have to be complicated. Let's break it down into simple concepts.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="group relative bg-black/40 backdrop-blur-sm rounded-xl 
                                     transition-all duration-300 overflow-hidden"
                        >
                            {/* Green accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300" />

                            {/* Content container */}
                            <div className="p-6">
                                {/* Icon in circle */}
                                <div
                                    className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center mb-4
                                              group-hover:scale-110 transition-transform duration-300"
                                >
                                    <span className="text-2xl">{topic.icon}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-green-400 transition-colors">{topic.title}</h3>

                                {/* Description */}
                                <p className="text-gray-300 text-sm mb-4">{topic.description}</p>

                                {/* Key Point with Link */}
                                <div className="flex items-center gap-2 text-sm">
                                    <a
                                        href={topic.url}
                                        className="px-3 py-1 rounded-full bg-green-400/10 text-green-300 font-medium
                                                 hover:bg-green-400/20 transition-colors cursor-pointer"
                                    >
                                        {topic.keyPoint}
                                    </a>
                                    <span className="text-gray-400">{topic.keyLabel}</span>
                                </div>
                            </div>

                            {/* Hover effect border */}
                            <div
                                className="absolute inset-0 border border-green-400/0 group-hover:border-green-400/30 
                                          transition-all duration-300 pointer-events-none rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative lines */}
            <br />
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-300/60 to-transparent" />
        </section>
    )
}

export default CryptoIntro
