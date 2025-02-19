import React from 'react'
import '../css/global.css'
import CCNZSection from './CCNZSection'
import Contacts from './Contacts'
import Features from './Features'
import Gallery from './Gallery'
import Hero from './Hero'
import SponsorBanner from './SponsorBanner'

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <SponsorBanner />
            <Gallery />
            <Features />
            <CCNZSection />
            <Contacts />
        </div>
    )
}

export default HomePage
