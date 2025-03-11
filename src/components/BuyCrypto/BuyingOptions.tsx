import { FC, useState } from 'react'
import { motion } from 'framer-motion'

import EasyCryptoOption from './BuyingOptions/EasyCrypto';
import BinanceOption from './BuyingOptions/Binance';
import P2POption from './BuyingOptions/P2P';
import PinOption from './BuyingOptions/PayItNow';

const CryptoBuyingOptions: FC = () => {

    return (
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Background gradient & effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/95 via-zinc-800/95 to-zinc-900/95 z-0" />

            {/* Decorative gradient elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl opacity-20 z-0" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="alegreya text-3xl sm:text-4xl font-bold mb-4"
                    >
                        Where to <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Buy Bitcoin & Cryptocurrency</span> in NZ
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="w-24 h-1 bg-gradient-to-r from-green-500/50 to-green-300/50 mx-auto rounded-full mb-6"
                    />
                </div>

                <div className="space-y-4 sm:space-y-8 md:space-y-10">
  <EasyCryptoOption/>
  <BinanceOption/>
  <P2POption/>
  <PinOption/>
</div>

                    {/* CTA at bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-center mt-16"
                    >
                        <div className="inline-block px-6 py-3 border border-green-500/30 rounded-lg bg-green-500/10 backdrop-blur-sm">
                            <p className="text-zinc-100">
                                Need more help deciding? <a href="/contact" className="text-green-400 hover:text-green-300 ml-1 transition-colors duration-300">Contact us for personalized advice →</a>
                            </p>
                        </div>
                    </motion.div>
           
            </div>
        </section>
    )
}

export default CryptoBuyingOptions