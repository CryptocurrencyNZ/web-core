import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import SponsorBanner from './SponsorBanner'
import Gallery from './Gallery'
import Features from './Features'
import Contacts from './Contacts'
import Footer from './Footer'
import '../css/global.css'

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SponsorBanner />
            <Gallery />
            <Features />
            <Contacts />
            <Footer />
        </div>
    )
}

export default HomePage
