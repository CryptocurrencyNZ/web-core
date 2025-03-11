import { FC } from 'react'

import Navbar from '../Navbar';
import Footer from '../Footer';
import AnimatedGridPattern from '../AnimatedGridPattern';

import Hero from './Hero';
import VerticalRoadmap from './RoadMap';
import ConsultingSection from './Consulting';

const GetStartedPage: FC = () => {
    return (
        <>
            <div className="relative w-full min-h-screen bg-zinc-800 text-white">
                <Navbar />
                <AnimatedGridPattern />
                <Hero />
                <VerticalRoadmap />
                <ConsultingSection />
                <Footer />
            </div>
        </>
    )
}

export default GetStartedPage;