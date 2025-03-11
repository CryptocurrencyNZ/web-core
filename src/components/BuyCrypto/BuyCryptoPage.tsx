import { FC } from 'react'

import Navbar from '../Navbar';
import Footer from '../Footer';
import AnimatedGridPattern from '../AnimatedGridPattern';

import Hero from './Hero';
import CryptoBuyingFaq from './Faq';
import DisclaimerSeparator from './Disclaimer';
import IntroSection from './IntroSection';
import CryptoBuyingOptions from './BuyingOptions';
import CryptoWaysSection from './HowToGetCrypto';
import GetStartedSection from './GetStarted';
import WhichCryptosSection from './WhichCryptosSection';
import WalletSetupSection from './WalletSetup';
import CryptoSafetyTips from './CryptoSafetyTips';

const BuyCryptoPage: FC = () => {
    return (
        <>
            <div className="relative w-full min-h-screen bg-zinc-800 text-white">
                <Navbar />
                <AnimatedGridPattern />
                <Hero />
                <CryptoBuyingFaq />
                <DisclaimerSeparator />
                <IntroSection   />
                <CryptoBuyingOptions />
                <CryptoWaysSection />
                <GetStartedSection />
                <WhichCryptosSection />
                <WalletSetupSection />
                <CryptoSafetyTips />
                <Footer />
            </div>
        </>
    )
};

export default BuyCryptoPage;