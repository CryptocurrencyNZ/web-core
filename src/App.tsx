import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Lazy imports without Suspense
const CCNZPage = React.lazy(() => import('./components/CCNZ/CCNZPage'))
const Expo = React.lazy(() => import('./components/Expo/Hero'))
const HomePage = React.lazy(() => import('./components/Home/HomePage'))
const AboutPage = React.lazy(() => import('./components/About/AboutPage'))
const GetStartedPage = React.lazy(() => import('./components/GetStarted/GetStartedPage'))
const BuyCryptoPage = React.lazy(() => import('./components/BuyCrypto/BuyCryptoPage'))

import './css/style.css'

const App = () => {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/consulting" element={<CCNZPage />} />
                    <Route path="/expo" element={<Expo />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/getstarted" element={<GetStartedPage />} />
                    <Route path="/buy-cryptocurrency-nz" element={<BuyCryptoPage />} />
           
                </Routes>
            </Router>
        </HelmetProvider>
    )
}

export default App