import { FC } from 'react';
import Map from './Map';
import AnimatedGridPattern from './AnimatedGridPattern.tsx';

const Hero: FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col md:flex-row justify-between m-0 p-0">
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern />

      {/* Left Section */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen flex flex-col justify-center items-center text-center px-8 md:px-[5%] pt-[80px] md:pt-[80px] relative z-10 bg-transparent">
        <h1 className="alegreya text-4xl md:text-5xl lg:text-6xl mb-5 font-bold leading-tight">
          Welcome to{" "}
          <span className="alegreya text-gray-300">Cryptocurrency</span>
          <span className="alegreya text-green-500">NZ</span>
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-300">
          New Zealand Cryptocurrency Community Collective
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <a 
            href="#explore" 
            className="px-8 py-3 bg-black/80 backdrop-blur-sm border border-green-500/30 
                     rounded-lg text-white font-medium transition-all duration-300 
                     hover:border-green-400/70 hover:bg-green-500/10 
                     hover:shadow-[0_0_25px_rgba(74,222,128,0.3)] w-fit md:w-auto"
          >
            Get Started
          </a>
          <a 
            href="#explore" 
            className="px-8 py-3 bg-black/80 backdrop-blur-sm border border-green-500/30 
                     rounded-lg text-white font-medium transition-all duration-300 
                     hover:border-green-400/70 hover:bg-green-500/10 
                     hover:shadow-[0_0_25px_rgba(74,222,128,0.3)] w-fit md:w-auto"
          >
            Get a Wallet
          </a>
          <a 
            href="#explore" 
            className="px-8 py-3 bg-black/80 backdrop-blur-sm border border-green-500/30 
                     rounded-lg text-white font-medium transition-all duration-300 
                     hover:border-green-400/70 hover:bg-green-500/10 
                     hover:shadow-[0_0_25px_rgba(74,222,128,0.3)] w-fit md:w-auto"
          >
            Buy Crypto
          </a>
        </div>
        
        <div className="mt-16">
          <p className="text-gray-300">
            Need help?{" "}
            <a 
              href="" 
              className="text-green-400 hover:text-green-300 transition-colors border-b 
                       border-green-500/30 hover:border-green-400/70"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen flex items-center justify-center relative overflow-visible">
        <Map />
      </div>
    </div>
  );
};

export default Hero;