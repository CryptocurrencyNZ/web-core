import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Direct imports for all components
import CCNZPage from './components/CCNZ/CCNZPage'
import Expo from './components/Expo/Hero'
import HomePage from './components/Home/HomePage'
import AboutPage from './components/About/AboutPage'
import GetStartedPage from './components/GetStarted/GetStartedPage'
import BuyCryptoPage from './components/BuyCrypto/BuyCryptoPage'

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
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </HelmetProvider>
    )
}

export default App