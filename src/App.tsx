import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { lazy, Suspense } from 'react'

// Use lazy loading for route components to improve performance
const CCNZ = lazy(() => import('./components/CCNZ/CCNZPage'))
const Expo = lazy(() => import('./components/Expo/Hero'))
const HomePage = lazy(() => import('./components/Home/HomePage'))
const AboutPage = lazy(() => import('./components/About/AboutPage'))
const GetStarted = lazy(() => import('./components/GetStarted/GetStartedPage'))
const BuyCryptoPage = lazy(() => import('./components/BuyCrypto/BuyCryptoPage'))

import './css/style.css'

const App = () => {
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<div className="loading-container">Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/consulting" element={<CCNZ />} />
                        <Route path="/expo" element={<Expo />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/getstarted" element={<GetStarted />} />
                        <Route path="/buycrypto" element={<BuyCryptoPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
            </Router>
        </HelmetProvider>
    )
}

export default App
