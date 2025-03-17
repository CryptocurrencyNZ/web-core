import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import SponsorBanner from '../SponsorBanner'
import Gallery from './Gallery'
//import ExpoSection from './ExpoSection'
import Features from './Features'
import CCNZSection from './CCNZSection'
import Contacts from '../Contacts'
import Footer from '../Footer'
import '../../css/global.css'

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SponsorBanner />
            <Gallery />
            {/*<ExpoSection />*/}
            <Features />
            <CCNZSection />
            <Contacts />
            <Footer />
        </div>
    )
}

export default HomePage
