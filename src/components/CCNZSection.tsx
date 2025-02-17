import { FC, useState, useEffect } from 'react'

interface ConsultingFeature {
    title: string
    description: string
}

const consultingFeatures: ConsultingFeature[] = [
    {
        title: 'Expert Guidance',
        description: 'Professional crypto consulting tailored for NZ investors'
    },
    {
        title: '24/7 Support',
        description: 'Round-the-clock assistance for your crypto journey'
    },
    {
        title: 'Local Focus',
        description: 'NZ-specific advice and regulatory compliance'
    }
]

const backgroundImages = ['./images/CCNZ-bg.png', './images/harry.png', './images/expo2024.jpg']

const ConsultingSection: FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1))
                setIsTransitioning(false)
            }, 500)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full min-h-screen flex">
            {/* Left Content Side */}
            <div className="relative z-10 w-full lg:w-2/5 flex flex-col justify-center px-6 lg:px-12 py-16">
                <div className="max-w-xl">
                    <div className="mb-12">
                        <div className="flex items-center gap-8">
                            <h2 className="alegreya text-3xl sm:text-4xl md:text-5xl font-bold">
                                Need Professional
                                <span className="alegreya text-green-500 block mt-2">Crypto Guidance?</span>
                            </h2>
                            {/* Logo next to title */}
                            <div
                                className="w-32 h-32 bg-black/80 rounded-3xl p-6 backdrop-blur-xl
                                          border border-green-500/30 shadow-[0_0_50px_rgba(74,222,128,0.3)]
                                          transform hover:scale-105 transition-transform duration-500"
                            >
                                <img src="./images/Crypto-Consulting-NZ.png" alt="Crypto Consulting NZ Logo" className="w-full h-full text-green-500" />
                            </div>
                        </div>
                        <p className="text-gray-300 text-lg mt-6">Expert cryptocurrency consulting services designed specifically for New Zealand investors</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <a
                            href="/web-core/consulting"
                            className="px-8 py-4 bg-green-500 text-black font-semibold
                                     rounded-lg transition-all duration-300 
                                     hover:bg-green-400 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]
                                     w-full sm:w-auto text-center"
                        >
                            Visit Crypto Consulting NZ
                        </a>
                        <a
                            href="/consulting/contact"
                            className="text-green-400 hover:text-green-300 transition-colors border-b 
                                   border-green-500/30 hover:border-green-400/70 px-4 py-2"
                        >
                            Book a Consultation
                        </a>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Professional consultants available now
                        </div>
                    </div>

                    <div className="space-y-6 mt-12">
                        {consultingFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="border border-green-500/30 
                                         rounded-xl p-6 transition-all duration-300
                                         hover:border-green-400/70 hover:bg-green-500/10 
                                         hover:shadow-[0_0_25px_rgba(74,222,128,0.3)]"
                            >
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <div
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                        backgroundSize: '90%',
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-black/30" />
                </div>
            </div>
        </div>
    )
}

export default ConsultingSection
