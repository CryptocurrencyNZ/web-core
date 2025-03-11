// src/components/AboutUs.tsx
import React, { FC } from 'react';
import { Users, Building, Map, MessageCircle, Globe, Shield, Award, ChevronDown } from 'lucide-react';

import AnimatedGridPattern from '../AnimatedGridPattern';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SponsorBanner from '../SponsorBanner';
import CommunityNumbers from './CommunityNumbers';
import Hero from './Hero';
import Mission from './Mission';
import CommunityImpact from './CommunityImpact';
import Projects from './Projects';
import Team from './Team';
import VisualShowcase from './VisualShowcase';
import ClosingCTA from './ClosingCTA';
import SEO from './SEO';

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
  );
};

export default AboutUs;