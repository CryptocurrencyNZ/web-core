import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PayItNowOption: React.FC = () => {
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
    'pin': 'overview',
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Pay it Now - PIN</h3>
                <p className="text-green-400 text-sm sm:text-base mt-1">Best Crypto / NZD Payment Processor</p>
              </div>
            </div>
          </div>

          {/* Option content */}
          <div className="p-0">
            {/* Image area */}
            <div className="relative w-full max-w-full mx-auto aspect-[16/9] bg-zinc-900/50">
              <img
                src="./images/PayItNow.png"
                alt="Pay it Now (PIN) platform"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-70" />

              {/* Website badge */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-center">
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-zinc-900/90 backdrop-blur-sm rounded-md border border-green-500/30 text-zinc-300 text-xs sm:text-sm">
                  Website: <a href="https://www.payitnow.io" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">www.payitnow.io</a>
                </div>
              </div>
            </div>

            {/* Tabs navigation - improved for mobile */}
            <div className="px-4 sm:px-5 md:px-6 border-b border-zinc-700/40">
              <div className="flex overflow-x-auto hide-scrollbar space-x-2 sm:space-x-4 py-3 sm:py-4">
                <button
                  onClick={() => toggleTab('pin', 'overview')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab['pin'] === 'overview'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Overview
                </button>
              </div>
            </div>

            {/* Tab content */}
            <div className="p-4 sm:p-5 md:p-6 min-h-[300px]">
              {/* Overview tab */}
              {activeTab['pin'] === 'overview' && (
                <div>
                  <p className="text-zinc-100 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                    Pay it Now – PIN is New Zealand's leading crypto payments service, making it easy for businesses to accept Bitcoin, Ethereum and over 15+ other cryptocurrencies in NZ.
                  </p>

                  <div className="bg-green-900/20 rounded-lg border border-green-500/30 p-3 sm:p-4 mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">For Business Owners</h4>
                    <p className="text-zinc-100 text-sm sm:text-base mb-3">
                      If you're a business owner looking to accept cryptocurrency payments from your customers, PIN provides a seamless integration that allows you to:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-zinc-100 text-sm sm:text-base">Accept crypto payments directly on your website</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-zinc-100 text-sm sm:text-base">Convert crypto payments to NZD automatically</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-zinc-100 text-sm sm:text-base">Expand your customer base to crypto enthusiasts</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-zinc-100 text-sm sm:text-base">Get detailed transaction reporting for accounting</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-zinc-800/50 p-3 sm:p-4 rounded-lg border border-zinc-700/60">
                      <h5 className="font-semibold text-white text-sm sm:text-base mb-2">Features</h5>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                          <span className="text-zinc-100 text-xs sm:text-sm">Multiple cryptocurrency support</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                          <span className="text-zinc-100 text-xs sm:text-sm">Real-time exchange rates</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                          <span className="text-zinc-100 text-xs sm:text-sm">Secure payment processing</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                          <span className="text-zinc-100 text-xs sm:text-sm">Developer API available</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-zinc-800/50 p-3 sm:p-4 rounded-lg border border-zinc-700/60">
                      <h5 className="font-semibold text-white text-sm sm:text-base mb-2">Integration Options</h5>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                          <span className="text-zinc-100 text-xs sm:text-sm">Payment buttons</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                          <span className="text-zinc-100 text-xs sm:text-sm">Payment pages</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                          <span className="text-zinc-100 text-xs sm:text-sm">Shopping cart plugins</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                          <span className="text-zinc-100 text-xs sm:text-sm">Custom API solutions</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a
                    href="https://www.payitnow.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-green-500 text-zinc-900 text-sm sm:text-base font-semibold
                    rounded-lg transition-all duration-300 
                    hover:bg-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                  >
                    <span>Visit Pay It Now</span>
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
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PayItNowOption;