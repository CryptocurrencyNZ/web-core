import React from 'react';
import { motion } from 'framer-motion';

const CryptoWaysSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 alegreya">
            Different Ways to Buy Cryptocurrency in NZ
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
        </motion.div>

        {/* Crypto Retailers */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="bg-zinc-800/70 border-b border-zinc-700/40 p-4 sm:p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Cryptocurrency Retailers NZ</h3>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4 text-zinc-100 text-sm sm:text-base">
                <p>
                  NZ based crypto retailers like Easy Crypto NZ are the most popular way for kiwis to get their hands on Bitcoin, Ethereum, and 110+ other coins in NZ.
                </p>
                <p>
                  Cryptocurrency retailers are non-custodial brokerage services that source cryptocurrencies from various exchanges and sell them directly to the customer at a small fee. (Standard retailer fee is between 0.5% – 2.5%). They essentially act as middlemen, sourcing coins from many different exchanges at the lowest rates possible to stay competitive. The key benefits of buying crypto in NZ through a local retailer include having access to local customer support and reputation.
                </p>
                <div className="mt-4 text-center sm:text-left">
                  <span className="text-green-400 font-medium">Cryptocurrency NZ recommendation:</span>{" "}
                  <span className="text-white font-semibold">Easy Crypto NZ</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* NZ Crypto Exchanges */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="bg-zinc-800/70 border-b border-zinc-700/40 p-4 sm:p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">NZ Crypto Exchanges</h3>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4 text-zinc-100 text-sm sm:text-base">
                <p>
                  NZ Crypto exchanges like Binance and Kiwi Coin are live exchanges where you can buy, sell, and exchange crypto with other traders in real time.
                </p>
                <p>
                  Exchanges are typically custodial, meaning in order to use the exchange you must deposit your crypto / NZD / USD into an account within your exchange. This differs from crypto retailers like Easy Crypto NZ who are almost always non-custodial. (They never hold your coins / orders sent directly to your personal wallet.) Crypto exchanges come with both benefits and drawbacks, as there's potential to save considerable value that would otherwise be spent on gas fees.
                </p>
                <p>
                  However, exchanges also pose considerable risks. There's a saying that goes "not your keys, not your coins', referring to the importance of being in control of the private keys associated with your funds. Ultimately, the person with the private keys controls what happens with the crypto, so if you are not the person holding them, you are entrusting a third party to hold your coins. This poses risk as exchanges can be hacked – such as the FTX, Cryptopia, and Mt Gox hacks.
                </p>
                <p>
                  At the end of the day, it is up to you as an individual to decide how to manage your crypto. We recommend storing your crypto in a secure self-managed wallet.
                </p>
                <div className="mt-4 text-center sm:text-left">
                  <span className="text-green-400 font-medium">Cryptocurrency NZ recommendations:</span>{" "}
                  <span className="text-white font-semibold">Binance</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Buying and Selling P2P */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="bg-zinc-800/70 border-b border-zinc-700/40 p-4 sm:p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Buying and Selling P2P</h3>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4 text-zinc-100 text-sm sm:text-base">
                <p>
                  Buying and selling crypto person to person (P2P) is the act of buying, selling, or exchanging cryptocurrency directly between 2 users, without the use of an exchange, retailer, or third party to facilitate the transaction process. It's the way of buying crypto in NZ without having to provide your KYC/personal data.
                </p>
                <p>
                  Since 2016, New Zealand AML law has required all NZ crypto services who fall under the VASP classification to collect and provide information on their users to the NZ Govt, including details such as names, wallet addresses, order history, device information, IP addresses and more. P2P traders are those who prefer not to do so.
                </p>
                <div className="bg-red-900/20 rounded-lg border border-red-500/30 p-3 mt-4">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-zinc-100 text-sm sm:text-base">
                      <span className="font-semibold text-red-400">Warning:</span> New Zealand is home to the NZ P2P Crypto Marketplace; a group of over 2,000 Kiwis interested in meeting P2P crypto buyers and sellers across NZ. Before you make your first trade, it is critical you learn the basics of P2P, the risks involved and the standard protocols Kiwis use to trade. Scammers are rampant in the NZ P2P crypto trading scene, and it's virtually guaranteed you will encounter them. Scam is real, keep your eyes peeled. You have been warned!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 text-center alegreya">
          Different Ways to Get Cryptocurrency in NZ
        </motion.h2>

        {/* NZ Cryptocurrency Mining */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="bg-zinc-800/70 border-b border-zinc-700/40 p-4 sm:p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">NZ Cryptocurrency Mining</h3>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4 text-zinc-100 text-sm sm:text-base">
                <p>
                  Crypto mining is the process of providing computational support to the crypto networks in reward for newly minted coins. You run specialized mining software on your hardware, processing transactions and adding them to blockchain.
                </p>
                <p>
                  By running a crypto mining rig, you can earn cryptocurrencies like Bitcoin, Ethereum and Cardano passively; sent safely, directly and privately to your crypto wallet of choice. Mining rigs (more or less) act as civilian money printing machines, with the primary costs being the overhead hardware expenses for your rig and ongoing electricity prices.
                </p>
                <div className="mt-2">
                  <a href="#" className="text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70">
                    See our dedicated mining guide for more info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Crypto Airdrops */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="bg-zinc-800/70 border-b border-zinc-700/40 p-4 sm:p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Crypto Airdrops</h3>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4 text-zinc-100 text-sm sm:text-base">
                <p>
                  A cryptocurrency airdrop happens when a blockchain project deploys free crypto tokens to their community, usually after meeting specified criteria, for the purpose of marketing and stimulating the circulation of a project's native coin within it's userbase and beyond.
                </p>
                <p>
                  Crypto airdrop farming is the deliberate pursuit of exploring and engaging with platforms and project eco-systems who are expected, presumed or likely to deploy an airdrop in the coming future. An airdrop farmer is interested in mass farming crypto airdrops for profit. By far one of the greatest ways to accumulate crypto while exploring the DeFi ecosystem.
                </p>
                <div className="mt-2">
                  <a href="#" className="text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70">
                    Join NZ's Crypto Airdrop Facebook Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Working for Crypto */}
        <motion.div variants={itemVariants}>
          <div className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="bg-zinc-800/70 border-b border-zinc-700/40 p-4 sm:p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Working for Crypto</h3>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4 text-zinc-100 text-sm sm:text-base">
                <p>
                  Jobs that pay in cryptocurrency have been increasing in popularity and availability over the past 5 years. This is attributed to both the rise in crypto adoption and the sudden rise in working remotely due to the covid-19 pandemic.
                </p>
                <p>
                  Stable-coins and crypto in general have broken down many of the barriers that typically held people back from working from a distance for a company abroad. You no longer need to set up bank accounts in different countries – you can now work either here in NZ or internationally and get receive salary or remuneration in digital currency.
                </p>
                <p>
                  Seek, LinkedIn, the CNZ Facebook and Discord are a good start.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CryptoWaysSection;