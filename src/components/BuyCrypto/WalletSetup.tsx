import { FC, useState } from 'react'
import { motion } from 'framer-motion'

const WalletSetupSection: FC = () => {
  // State for active step
  const [activeStep, setActiveStep] = useState<number>(1);
  
  // Steps data
  const setupSteps = [
    {
      number: 1,
      title: "Download Exodus Wallet",
      content: (
        <>
          <p className="text-zinc-100 mb-4">
            <strong className="text-white">For the desktop application:</strong> head to the official Exodus website on your secure laptop or desktop PC and click on 'download for desktop' – <a href="https://www.exodus.com/download/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70 transition-colors duration-300">https://www.exodus.com/download/</a>
          </p>
          <p className="text-zinc-100">
            <strong className="text-white">For the mobile application:</strong> Head to the official Exodus website and click on the App Store or Google Play links, alternatively you can search for Exodus wallet in your phone/tablet app store. Bewarned, Desktop wallets are generally safer.
          </p>
        </>
      )
    },
    {
      number: 2,
      title: "Backup Your Wallet",
      content: (
        <>
          <p className="text-zinc-100 mb-4">
            Once you have downloaded either the desktop or mobile app, open exodus and follow the beginners tutorial that will be prompted on screen.
          </p>
          <p className="text-zinc-100">
            The safest way to backup your recovery phrase is by writing the 12 words down on a piece of paper (ensuring the order and spelling are correct), it is a good practice to have multiple copies of this phrase and keep them in secure locations.
          </p>
        </>
      )
    },
    {
      number: 3,
      title: "Configure Your Settings",
      content: (
        <>
          <p className="text-zinc-100 mb-4">
            Configure the wallet display settings to your personal preferences, e.g. valued in USD or NZD. Do you prefer the light or dark mode interface? Would you like to enable face-ID authentication (mobile only)? And finally, which assets would you want to see on the portfolio page (over 100 to choose from).
          </p>
          <p className="text-zinc-100">
            See the official Exodus customization guide <a href="https://support.exodus.com/article/48-getting-started-with-exodus" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 border-b border-green-500/30 hover:border-green-400/70 transition-colors duration-300">here</a>.
          </p>
        </>
      )
    },
    {
      number: 4,
      title: "Receive Crypto",
      content: (
        <p className="text-zinc-100">
          Once you have backed up your wallet and configured your settings, the final step is to deposit crypto into your new wallet. Simply click on the asset you would like to deposit, from here you can click on the receive button to view your public key for that asset (receiving address).
        </p>
      )
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12"
          >
            <h2 className="alegreya text-3xl sm:text-4xl font-bold mb-6">
              Setting up a <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Cryptocurrency Wallet</span> in NZ
            </h2>
            
            <div className="space-y-4">
              <p className="text-zinc-100">
                A cryptocurrency wallet is a digital account where you store Bitcoin and other cryptocurrencies. The Wallet is a place where you receive payments in and send transactions out, acting as your heart of operations for interacting with the cryptocurrency world. Cryptos like Bitcoin and Ethereum aren't stored in banks, but rather in the user's controlled crypto wallet. This puts you in full control of your digital assets, also making you fully responsible for your wallet safe keeping.
              </p>
              
              <p className="text-zinc-100">
                This provides crypto users with an unparalleled level of asset security and ownership, all while changing the way millions of people store and transfer value across the globe. Crypto wallets are free to use, safe to operate, and you can have as many wallet accounts as you'd like. Best of all – you don't have to ask anyone for permission to set one up, or use it to send and receive payments. Set up a crypto wallet in NZ and become your own bank in 10 minutes or less.
              </p>
            </div>
            
            <div className="mt-8 relative">
              {/* Wallet card with glow effect */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-300/10 to-green-600/20 rounded-xl blur-md opacity-70" />
                
                {/* Card content */}
                <div className="relative overflow-hidden rounded-xl border border-green-500/30 bg-zinc-800/50 backdrop-blur-sm p-6">
                  <div className="flex items-start">
                    <img 
                      src="./images/exodus-logo.webp" 
                      alt="Exodus Wallet Logo" 
                      className="w-16 h-16 object-contain mr-4 bg-white p-2 rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Exodus Wallet</h3>
                      <p className="text-zinc-100 text-sm mb-3">
                        Used by tens of thousands of Kiwis across NZ, <span className="font-semibold text-white">Exodus</span> is a highly popular crypto wallet choice for first time Bitcoin and cryptocurrency users. I have personally used it for upwards of 6 years, and it has never failed me once. Exodus is one of the most used cryptocurrency wallets in the world.
                      </p>
                      <a 
                        href="https://www.exodus.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-400 hover:text-green-300 text-sm border-b border-green-500/30 hover:border-green-400/70 transition-all duration-300 group"
                      >
                        <span>Visit Exodus Website</span>
                        <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Security warning */}
              <div className="mt-6 bg-yellow-900/20 rounded-lg border border-yellow-500/30 p-4">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-zinc-100 text-sm mb-2">
                      <span className="font-semibold text-yellow-400">Security Note:</span> Get a secure device to operate from.
                    </p>
                    <p className="text-zinc-100 text-sm">
                      First, you need a secure device, computer or phone to create a cryptocurrency wallet on. Be aware that existing malware on compromised devices can scrape crypto private keys from your device. You may want to consider buying a <span className="font-semibold text-white">fresh device</span> or a crypto hardware wallet.
                    </p>
                    <p className="text-zinc-100 text-sm mt-2">
                      We recommend running a virus scanner such as MalwareBytes on your computer to help ensure your device is secure before creating a new crypto wallet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Setup Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="bg-zinc-800/70 border-b border-zinc-700/40 p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-white">Setting up a Crypto Wallet in NZ</h3>
                <p className="text-zinc-300 mt-2">Follow these simple steps to get started with your own wallet</p>
              </div>
              
              {/* Steps navigation */}
              <div className="border-b border-zinc-700/40 px-4 sm:px-6">
                <div className="flex overflow-x-auto hide-scrollbar py-4">
                  {setupSteps.map((step) => (
                    <button
                      key={step.number}
                      onClick={() => setActiveStep(step.number)}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 mr-2 ${
                        activeStep === step.number 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                        activeStep === step.number 
                          ? 'bg-green-500/20 border border-green-500/30' 
                          : 'border border-zinc-700/60'
                      }`}>
                        <span className={activeStep === step.number ? 'text-green-400' : 'text-zinc-400'}>
                          {step.number}
                        </span>
                      </div>
                      <span>{step.title}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Active step content */}
              <div className="p-6 min-h-[250px]">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-green-400 font-bold">{activeStep}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white pt-1">
                    Step {activeStep}: {setupSteps[activeStep - 1].title}
                  </h4>
                </div>
                
                <div className="ml-14">
                  {setupSteps[activeStep - 1].content}
                  
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setActiveStep(prev => Math.max(prev - 1, 1))}
                      className={`px-4 py-2 rounded-lg border border-zinc-700/60 text-sm font-medium transition-colors duration-200 ${
                        activeStep > 1 
                          ? 'text-zinc-100 hover:border-green-500/30 hover:bg-green-500/10' 
                          : 'text-zinc-500 cursor-not-allowed'
                      }`}
                      disabled={activeStep === 1}
                    >
                      Previous Step
                    </button>
                    
                    <button
                      onClick={() => setActiveStep(prev => Math.min(prev + 1, setupSteps.length))}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        activeStep < setupSteps.length 
                          ? 'bg-green-500 text-zinc-900 hover:bg-green-400' 
                          : 'bg-zinc-700 text-zinc-300 cursor-not-allowed'
                      }`}
                      disabled={activeStep === setupSteps.length}
                    >
                      {activeStep < setupSteps.length ? 'Next Step' : 'Completed'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Screenshot image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-8 relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-green-300/10 to-green-600/20 rounded-xl blur-md opacity-70" />
              
              <div className="relative rounded-xl overflow-hidden border border-green-500/30">
                <img 
                  src="./images/Exodus-wallet-with-Bitcoin-Balance-NZD.png" 
                  alt="Exodus Wallet Interface" 
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-30" />
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-12 md:mt-16"
        >
          <a 
            href="/learn/wallets/hardware"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold
            rounded-lg transition-all duration-300 
            hover:from-green-400 hover:to-green-500 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
          >
            <span>Learn About Hardware Wallets</span>
            <svg 
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WalletSetupSection