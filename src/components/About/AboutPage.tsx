// src/components/AboutUs.tsx
import { FC } from 'react'

import AnimatedGridPattern from '../AnimatedGridPattern'
import Footer from '../Footer'
import Navbar from '../Navbar'
import SponsorBanner from '../SponsorBanner'
import ClosingCTA from './ClosingCTA'
import CommunityImpact from './CommunityImpact'
import CommunityNumbers from './CommunityNumbers'
import Hero from './Hero'
import Mission from './Mission'
import Projects from './Projects'
import SEO from './SEO'
import Team from './Team'
import VisualShowcase from './VisualShowcase'

const AboutUs: FC = () => {
    return (
        <>
            <SEO />
            <div className="relative w-full min-h-screen bg-zinc-800 text-white">
                <Navbar />
                <AnimatedGridPattern />

                <Hero />
                <CommunityNumbers />
                <Mission />
                <CommunityImpact />
                <Team />
                <Projects />
                <VisualShowcase />
                <SponsorBanner />
                <ClosingCTA />

                <Footer />

                <style>{`
        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-20px); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
            </div>
        </>
    )
}

export default AboutUs
