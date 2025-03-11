import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BinanceOption: React.FC = () => {
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

  // Tab state management with TypeScript typing
  const [activeTab, setActiveTab] = useState<Record<string, string>>({
    'binance': 'overview',
  });

  const toggleTab = (option: string, tab: string) => {
    setActiveTab(prev => ({
      ...prev,
      [option]: tab
    }));
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full"
    >
      <motion.div variants={itemVariants} className="w-full max-w-4xl mx-auto">
        <div className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
          {/* Option header */}
          <div className="bg-zinc-800/70 border-b border-zinc-700/40 p-4 sm:p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Binance NZ</h3>
                <p className="text-green-400 text-sm sm:text-base mt-1">Best Exchange for Advanced Traders</p>
              </div>

              <div className="flex items-center mt-2 md:mt-0">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-xs sm:text-sm text-zinc-300">Cryptocurrency NZ Recommendation</span>
              </div>
            </div>
          </div>

          {/* Option content */}
          <div className="p-0">
            {/* Image area */}
            <div className="relative w-full max-w-full mx-auto aspect-[16/9] bg-zinc-900/50">
              <img
                src="./images/Binance-NZ-Buy-Crypto.png"
                alt="Binance NZ platform"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-70" />

              {/* Website badge */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-center">
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-zinc-900/90 backdrop-blur-sm rounded-md border border-green-500/30 text-zinc-300 text-xs sm:text-sm">
                  Website: <a href="https://www.binance.com/en-NZ" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">www.binance.com/nz</a>
                </div>
              </div>
            </div>

            {/* Tabs navigation - improved for mobile */}
            <div className="px-4 sm:px-5 md:px-6 border-b border-zinc-700/40">
              <div className="flex overflow-x-auto hide-scrollbar space-x-2 sm:space-x-4 py-3 sm:py-4">
                <button
                  onClick={() => toggleTab('binance', 'overview')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab['binance'] === 'overview'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Overview
                </button>

                <button
                  onClick={() => toggleTab('binance', 'why')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab['binance'] === 'why'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Why We Recommend
                </button>

                <button
                  onClick={() => toggleTab('binance', 'pros-cons')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab['binance'] === 'pros-cons'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Pros & Cons
                </button>

                <button
                  onClick={() => toggleTab('binance', 'reputation')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab['binance'] === 'reputation'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Reputation
                </button>
              </div>
            </div>

            {/* Tab content */}
            <div className="p-4 sm:p-5 md:p-6 min-h-[300px]">
              {/* Overview tab */}
              {activeTab['binance'] === 'overview' && (
                <div>
                  <p className="text-zinc-100 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                    Binance, the world's largest crypto exchange, is a highly popular platform for Kiwis interested in crypto trading in NZ. Binance offers over 1400 trading pairs, such as NZD to BTC, with some of the lowest fees in the industry.
                  </p>

                  <a
                    href="https://www.binance.com/en-NZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-green-500 text-zinc-900 text-sm sm:text-base font-semibold
                    rounded-lg transition-all duration-300 
                    hover:bg-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                  >
                    <span>Visit Binance NZ</span>
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}

              {/* Why We Recommend tab */}
              {activeTab['binance'] === 'why' && (
                <div>
                  <h4 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">Why We Recommend Binance NZ</h4>

                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-zinc-100 text-sm sm:text-base">Here at Cryptocurrency NZ, we have used Binance for over 4 years without any issues.</p>
                    <p className="text-zinc-100 text-sm sm:text-base">Binance is the world's largest crypto exchange, accounting for over 40% of the total crypto market's trade volume. They have world class platform, access to liquidity, a plethora of coins to trade and are known to be reliable and secure.</p>
                    <p className="text-zinc-100 text-sm sm:text-base">They are however still a centralized exchange and the age old 'not your keys, not your crypto' still applies. We don't recommend storing large amounts of coin long term on exchanges and instead recommend using a hardware wallet.</p>
                    <p className="text-zinc-100 text-sm sm:text-base">If you're a day trader, looking to swing trade or practice technical analysis and chart drawing, Binance is very solid.</p>
                  </div>
                </div>
              )}

              {/* Pros & Cons tab */}
              {activeTab['binance'] === 'pros-cons' && (
                <div>
                  <h4 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">Pros & Cons</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Pros */}
                    <div>
                      <h5 className="text-base sm:text-lg text-green-400 font-medium mb-2 sm:mb-3">Pros of Binance NZ</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Plethora of coins: Humongous selection of cryptocurrencies available for trading.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Competitive Rates: Famously low trading fees, especially for high-volume traders and those who hold BNB.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">SAFU Fund: Binance has a "SAFU" fund to protect users in the event of a security breach or hack.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Registered in NZ: Binance is a registered Financial Service Provider in NZ.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Advanced Features: Offers world class trading tools and charts.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">IOS & Android: Mobile apps available for trading on-the-go.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="mt-4 md:mt-0">
                      <h5 className="text-base sm:text-lg text-red-400 font-medium mb-2 sm:mb-3">Cons of Binance NZ</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Regulatory exposure: Ongoing regulatory scrutiny and potential for government restrictions.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Mixed Reviews: Some negative user reviews and complaints about poor customer service.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">High withdrawal fees: Withdrawing some coins can be higher than fifty dollars, depending on market prices.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Customer Support: Limited customer support during high-traffic periods</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Centralized Exchange: Potential for hacking or security breaches.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">KYC: You have to verify your identity in order to buy or sell. This data is then passed on to the government.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Reputation tab */}
              {activeTab['binance'] === 'reputation' && (
                <div>
                  <h4 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">Reputation</h4>

                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-zinc-100 text-sm sm:text-base">Binance has has over 6,000 staff globally, and since registering in Zealand in September 2022 as a Financial Services Provider, they have invested heavily into marketing, complying with NZ regulations and developing an NZ based team.</p>
                    <p className="text-zinc-100 text-sm sm:text-base">Ben Rose, Binance's CEO is a member on the Blockchain NZ council, and many of the Binance NZ team are public.</p>
                    <p className="text-zinc-100 text-sm sm:text-base">Binance is an international exchange, headed and founded by Changpeng Zhao (CZ), one of the most well known and trusted crypto developers and entrepreneurs in the world. Binance NZ is in it's early days, but is gearing for the long haul.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BinanceOption;