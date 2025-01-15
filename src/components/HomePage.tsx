import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import SponsorBanner from './SponsorBanner'
import Gallery from './Gallery'
import Features from './Features'

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SponsorBanner />
            <Gallery />
            <Features />
        </div>
    )
}

export default HomePage
