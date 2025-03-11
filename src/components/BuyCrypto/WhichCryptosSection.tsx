import { FC } from 'react'
import { motion } from 'framer-motion'

const WhichCryptosSection: FC = () => {
  const cryptoList = [
    "Bitcoin",
    "Ethereum",
    "Monero",
    "Dogecoin",
    "Shiba Inu",
    "Litecoin",
    "Binance Coin",
    "Cardano",
    "Pest Free Token",
    "Stablecoins"
  ];
  
  const reasonsToBuy = [
    { 
      title: "As a speculative investment", 
      description: "a long or short term punt that the price of Bitcoin will increase in time and generate return."
    },
    { 
      title: "As a financial instrument", 
      description: "to use as a currency / alternative form of money to buy and sell things, like you would with NZD."
    },
    { 
      title: "As a means to transfer money", 
      description: "to family or friends in NZ or overseas, near instantly, cost effectively, and without restriction."
    },
    { 
      title: "As a protest to the legacy financial system", 
      description: "using your money as your vote towards a self-sovereign decentralized future."
    },
    { 
      title: "To interact with Web3", 
      description: "Bitcoin and Ethereum are the native currencies of the internet, they have thousands of use cases."
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background gradient & effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800/95 to-zinc-900 z-0" />
      
      {/* Decorative gradient elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl opacity-20 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left column - What Cryptos to Buy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2"
          >
            <h2 className="alegreya text-3xl sm:text-4xl font-bold mb-6">
              What <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Cryptocurrencies</span> Should You Buy?
            </h2>
            
            <div className="space-y-4">
              <p className="text-zinc-100">
                As there are over 20,000 cryptos in the market, it can be difficult to choose what ones you may want to buy or invest in. At Cryptocurrency NZ, we believe the best place to start researching is <span className="font-semibold text-white">Bitcoin</span>, <span className="font-semibold text-white">Ethereum</span> and <span className="font-semibold text-white">Monero</span>. Our guides below should provide a starting point, before deciding whether to buy or not.
              </p>
              
              <p className="text-zinc-100">
                Although there are over 20,000 cryptocurrencies in existence, there's decent chance that 95% of them will not be in active development and usage in 15 years time. The majority of the cryptocurrencies in existence are clones of a handful of other coins, with a few differences in code added in. Especially coins designed to pump & dump - otherwise called 'Shitcoins'.
              </p>
            </div>
            
            <div className="mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {cryptoList.map((crypto, index) => (
                  <a 
                    key={index}
                    href={`/learn/${crypto.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-gradient-to-b from-zinc-800/70 to-zinc-800/50 p-3 rounded-lg border border-zinc-700/40 hover:border-green-500/30 transition-all duration-300 text-center group"
                  >
                    <span className="text-white group-hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">{crypto}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Why Buy Crypto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="alegreya text-3xl sm:text-4xl font-bold mb-6">
              Why <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Buy Bitcoin / Cryptocurrency</span> in NZ?
            </h2>
            
            <div className="space-y-4">
              <p className="text-zinc-100">
                As of 2023, the IRD estimates 6-10% of New Zealand already own Bitcoin or other digital assets; approximately 300,000 or more Kiwis.
              </p>
              
              <p className="text-zinc-100">
                At this point almost everyone has that Bitcoiner mate, and we estimate this number will significantly increase in the coming decades as more Kiwis recognize the benefits of global crypto adoption, crypto technological development, price increases, increased awareness and raw utility.
              </p>
              
              <p className="text-zinc-100">
                Today, most New Zealanders are drawn to buying, trading, using or investing in Bitcoin / crypto for the following set of reasons:
              </p>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-6 space-y-3"
            >
              {reasonsToBuy.map((reason, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-b from-zinc-800/70 to-zinc-800/50 p-4 rounded-lg border border-zinc-700/40"
                >
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-zinc-100">
                        <span className="font-semibold text-white">{reason.title}</span> {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-12 md:mt-16"
        >
          <a 
            href="/learn/bitcoin"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-zinc-900 font-semibold
            rounded-lg transition-all duration-300 
            hover:bg-green-400 hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]
            relative overflow-hidden group"
          >
            <span className="relative z-10">Start with Bitcoin</span>
            <svg 
              className="ml-2 w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 
              transform translate-x-full group-hover:translate-x-0 
              transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhichCryptosSection