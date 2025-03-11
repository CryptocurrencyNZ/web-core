import React, { useState } from 'react';
import { motion } from 'framer-motion';

const P2PMarketplaceOption: React.FC = () => {
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
    'p2p': 'overview',
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">NZ P2P Crypto Marketplace</h3>
                <p className="text-green-400 text-sm sm:text-base mt-1">Best Way to Buy / Sell for Privacy</p>
              </div>
            </div>
          </div>

          {/* Option content */}
          <div className="p-0">
            {/* Image area */}
            <div className="relative w-full max-w-full mx-auto aspect-[16/9] bg-zinc-900/50">
              <img
                src="./images/p2p-marketplace.png"
                alt="NZ P2P Crypto Marketplace"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-70" />

              {/* Website badge and warning */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-zinc-900/90 backdrop-blur-sm rounded-md border border-green-500/30 text-zinc-300 text-xs sm:text-sm">
                  Portal: <a href="https://cryptocurrency.org.nz/marketplace" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">cryptocurrency.org.nz/marketplace</a>
                </div>

                <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-red-900/80 backdrop-blur-sm rounded-md border border-red-500/30 text-white text-xs sm:text-sm font-semibold">
                  Warning: High Scam Risk
                </div>
              </div>
            </div>

            {/* Tabs navigation - improved for mobile */}
            <div className="px-4 sm:px-5 md:px-6 border-b border-zinc-700/40">
              <div className="flex overflow-x-auto hide-scrollbar space-x-2 sm:space-x-4 py-3 sm:py-4">
                <button
                  onClick={() => toggleTab('p2p', 'overview')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab['p2p'] === 'overview'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Overview
                </button>

                <button
                  onClick={() => toggleTab('p2p', 'why')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab['p2p'] === 'why'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Why Peer to Peer Matters
                </button>

                <button
                  onClick={() => toggleTab('p2p', 'pros-cons')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab['p2p'] === 'pros-cons'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Pros & Cons
                </button>

                <button
                  onClick={() => toggleTab('p2p', 'how-works')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab['p2p'] === 'how-works'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  How It Works
                </button>

                <button
                  onClick={() => toggleTab('p2p', 'best-practice')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab['p2p'] === 'best-practice'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Best Practice
                </button>
              </div>
            </div>

            {/* Tab content */}
            <div className="p-4 sm:p-5 md:p-6 min-h-[300px]">
              {/* Overview tab */}
              {activeTab['p2p'] === 'overview' && (
                <div>
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <p className="text-zinc-100 text-sm sm:text-base">
                        <span className="font-semibold text-red-400">Warning:</span> The P2P world is a scam cesspit - you're virtually guaranteed to encounter scammers. Imposter scammers frequently pose as admins or other reputable members. This method should only be considered by experienced crypto users.
                      </p>
                    </div>
                  </div>

                  <p className="text-zinc-100 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                    The NZ P2P Crypto Marketplace was established in 2021 by CNZ's Harry Satoshi to make it easier for Kiwis to discover and communicate with peer-to-peer crypto traders in NZ. It's NZ's best way to locate crypto traders who won't require you to hand over your personal information or perform KYC.
                  </p>

                  <a
                    href="https://cryptocurrency.org.nz/marketplace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-green-500 text-zinc-900 text-sm sm:text-base font-semibold
                    rounded-lg transition-all duration-300 
                    hover:bg-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                  >
                    <span>Visit P2P Marketplace</span>
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

              {/* Why Peer to Peer Matters tab */}
              {activeTab['p2p'] === 'why' && (
                <div>
                  <h4 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">Why Peer to Peer Matters</h4>

                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-zinc-100 text-sm sm:text-base">Following the inception of the Bitcoin revolution, igniting back in 2008 when Satoshi Nakamoto released his whitepaper 'Bitcoin: A Peer-to-Peer Electronic Cash System'; governments, unelected transnational conglomerates and both global and local financial watchdogs have been monitoring the emerging crypto market in aims to better understand the world's shifting financial power dynamics – and the threats posed to the existing matrix by crypto such as Bitcoin and Monero.</p>

                    <p className="text-zinc-100 text-sm sm:text-base">Following the conclusion that governments can't effectively ban or censor Bitcoin directly, due to it's decentralized nature, (despite many high profile calls for it), regulators have instead pursued another strategy of control whereby all regulated fiat-to-crypto on and off ramp services must follow particular guidelines, such as reporting all wallet and transaction activity to the government at the expense of individual privacy and in the favour of the surveillance state.</p>

                    <p className="text-zinc-100 text-sm sm:text-base">In response to this, many New Zealanders have chosen to obtain cryptocurrency via P2P, essentially buying and selling from other civilians, to negate the requirement to provide their personal information and perform KYC, which by doing so leads to increased capabilities of authorities or private entities to monitor your financial activity.</p>

                    <p className="text-zinc-100 text-sm sm:text-base">It is after all, not illegal to trade crypto peer to peer, with P2P being the 2FA that will secure the crypto revolution.</p>
                  </div>
                </div>
              )}

              {/* Pros & Cons tab */}
              {activeTab['p2p'] === 'pros-cons' && (
                <div>
                  <h4 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">Pros & Cons</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Pros */}
                    <div>
                      <h5 className="text-base sm:text-lg text-green-400 font-medium mb-2 sm:mb-3">Pros of P2P</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Privacy: P2P trading can offer greater privacy compared to centralized exchanges since users are not required to provide extensive KYC information.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Decentralized: P2P trading is decentralized, meaning that transactions occur directly between buyers and sellers without the need for intermediaries like banks.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Accessibility: P2P trading can be more accessible to users in regions where centralized exchanges may not be available due to regulatory or infrastructure issues.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Lower fees: P2P can have lower fees compared to centralized exchanges, as there are no middlemen to charge fees for transactions. However you will often encounter traders selling at a markup.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">More options: P2P trading can offer more payment options, including cash or bank transfers, or swapping other assets, reducing limits for what constitutes crypto trading.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="mt-4 md:mt-0">
                      <h5 className="text-base sm:text-lg text-red-400 font-medium mb-2 sm:mb-3">Cons of P2P</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Risk of scams: P2P trading poses serious risk of scams, as users may be vulnerable to fraudsters who misrepresent themselves or their offers.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Limited liquidity: P2P trading may have limited liquidity compared to a cex, meaning that it can be more difficult to find buyers or sellers for certain crypto or at certain prices.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">No order book: P2P trading does not have an order book, which can make it more difficult for users to determine market prices.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Limited dispute resolution: P2P trading has near zero dispute resolution options compared to centralized exchanges, which have more resources and procedures for handling disputes.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">Security risks: P2P trading can pose security risks to users if they do not take proper precautions to protect their private keys and personal information.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-100 text-sm sm:text-base">5 dollar wrench attacks: if you meet up to execute P2P trades in the flesh, this can pose serious danger.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* How it works tab */}
              {activeTab['p2p'] === 'how-works' && (
                <div>
                  <h4 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">How Does P2P Work?</h4>

                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-zinc-100 text-sm sm:text-base">Peer-to-peer (P2P) crypto trading is the act of buying or selling crypto like Bitcoin directly between two individuals, (one seller / one buyer), without the use of a middleman to facilitate the transaction process and execution.</p>

                    <p className="text-zinc-100 text-sm sm:text-base">P2P comes with a much higher risk as there are many scams and scammers in the P2P world, but successful trades offer unparalleled privacy for acquiring digital assets in NZ.</p>

                    <p className="text-zinc-100 text-sm sm:text-base">P2P is one of the the most private ways to acquire crypto in the world, negating the use of a middleman or central authority, who are often required by law to track your activity.</p>

                    <p className="text-zinc-100 text-sm sm:text-base">You have the freedom to voluntarily enter P2P trades with whoever you deem trustworthy, like buying or selling an item from users on Facebook Marketplace.</p>

                    <p className="text-zinc-100 text-sm sm:text-base">You can choose whether or not you want to provide your ID, whereas on regulated crypto exchanges and retailers, KYC / providing your personal info is mandatory.</p>

                    <p className="text-zinc-100 text-sm sm:text-base">The two individuals (peers) can decide on their own price, terms, process and action plan to execute the transaction. Both traders are solely responsible for it's execution.</p>
                  </div>
                </div>
              )}

{activeTab['p2p'] === 'best-practice' && (
                <div>
                  <h4 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">P2P Best Practice</h4>
                  <p className="text-zinc-300 italic text-sm sm:text-base mb-3 sm:mb-4">They may sound extreme but following them is your most sure way to not get scammed.</p>

                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">1</span>
                      <p className="text-zinc-100 text-sm sm:text-base">Always verify the real life identity of your trader, essentially performing your own KYC due diligence background check. If they don't feel comfortable with this, there are other traders who are willing to do so. It ensures you can follow up if the trade goes sour.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">2</span>
                      <p className="text-zinc-100 text-sm sm:text-base">Always assume by default your P2P counterpart is a scammer, unless proven otherwise. Assume 2/3 'hey want to P2P trade' messages you receive will be scams.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">3</span>
                      <p className="text-zinc-100 text-sm sm:text-base">Use secure payment methods that can not be reversed, i.e. cash or crypto.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">4</span>
                      <p className="text-zinc-100 text-sm sm:text-base">It's very easy for scammers to photoshop / fabricate a 'payment sent' screenshot, or a bank statement. Even if it arrives in your account, it can still be reversed. Bank account P2P traders are some of the most common scam methods in the NZ P2P scam game.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">5</span>
                      <p className="text-zinc-100 text-sm sm:text-base">Use a Kiwi based P2P trader, always assume overseas 'NZ' P2P traders are scammers.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">6</span>
                      <p className="text-zinc-100 text-sm sm:text-base">Meet your seller in the flesh, either on trade day or beforehand, in a public place like a library or outside a police station. P2P is legal, do it in the day time at a secure location.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">7</span>
                      <p className="text-zinc-100 text-sm sm:text-base">Always read the rules of P2P groups / platforms to prevent getting an unnecessary ban.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">8</span>
                      <p className="text-zinc-100 text-sm sm:text-base">If you're given any reason to be suspicious, use your intuition and find another trader.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">9</span>
                      <p className="text-zinc-100 text-sm sm:text-base">Explore the P2P platform you are using, see who's making confirmed trades. Ask for vouches from other members. Remember that an anonymous 'good' trader can suddenly go bad if presented with an exit opportunity, forging reputation for money.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">10</span>
                      <p className="text-zinc-100 text-sm sm:text-base">Converse with other P2P traders in NZ to learn from their experiences and lessons.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">11</span>
                      <p className="text-zinc-100 text-sm sm:text-base">Keep a record of your trades for reasons such as tax documentation. P2P traders are still expected to fulfil tax obligations and so forth. NZ Crypto Tax Guide coming soon.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0 mt-0.5">12</span>
                      <p className="text-zinc-100 text-sm sm:text-base">It's not a bad idea to test a potential P2P buyer or seller with $100, without overstating you want to purchase more. This will allow you to scam test a prospect trader, but also keep in mind scammers are willing to wait months before they close their trap and bail.</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default P2PMarketplaceOption;