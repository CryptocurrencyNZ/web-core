import { FC } from 'react'
import { motion } from 'framer-motion'

const DisclaimerSeparator: FC = () => {
  return (
    <div className="relative py-8 md:py-10 overflow-hidden">
      {/* Background with subtle pattern and gradient */}
      <div className="absolute inset-0 bg-zinc-800/70 bg-opacity-70 z-0" />
      
      {/* Diagonal lines in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-green-500/50 transform -rotate-45" />
        <div className="absolute top-0 bottom-0 left-2/4 w-px bg-green-500/50 transform -rotate-45" />
        <div className="absolute top-0 bottom-0 left-3/4 w-px bg-green-500/50 transform -rotate-45" />
      </div>
      
      {/* Top and bottom border gradients */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-green-500/30" />
            <div className="mx-4 w-8 h-8 rounded-full border border-green-500/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="w-12 h-px bg-green-500/30" />
          </div>
          
          <div className="text-center">
            <p className="text-zinc-100 italic">
              <span className="font-semibold text-white">Disclaimer:</span> All information, guides and recommendations below are based on our own research, preferences and experiences. You should always do preemptive research on anything you buy and on any financial service you use. None of this is to be interpreted as any form of financial advice.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DisclaimerSeparator