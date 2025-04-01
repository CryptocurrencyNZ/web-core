import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { lazy, Suspense, useState, useEffect } from 'react'

// Use lazy loading for route components to improve performance
const CCNZ = lazy(() => import('./components/CCNZ/CCNZPage'))
const Expo = lazy(() => import('./components/Expo/Hero'))
const HomePage = lazy(() => import('./components/Home/HomePage'))
const AboutPage = lazy(() => import('./components/About/AboutPage'))
const GetStarted = lazy(() => import('./components/GetStarted/GetStartedPage'))
const BuyCryptoPage = lazy(() => import('./components/BuyCrypto/BuyCryptoPage'))

import './css/style.css'

const App = () => {
    // This ensures the app renders only after it's fully loaded client-side
    const [isClient, setIsClient] = useState(false)
    
    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return <div />  // Empty div until client-side hydration completes
    }

    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<div />}>
                                <HomePage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/consulting"
                        element={
                            <Suspense fallback={<div />}>
                                <CCNZ />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/expo"
                        element={
                            <Suspense fallback={<div />}>
                                <Expo />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<div />}>
                                <AboutPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/getstarted"
                        element={
                            <Suspense fallback={<div />}>
                                <GetStarted />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/buy-cryptocurrency-nz"
                        element={
                            <Suspense fallback={<div />}>
                                <BuyCryptoPage />
                            </Suspense>
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </HelmetProvider>
    )
}

export default App