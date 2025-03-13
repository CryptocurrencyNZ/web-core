import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import CCNZ from './components/CCNZ/CCNZPage'
import Expo from './components/Expo/Hero'
import HomePage from './components/HomePage'
import AboutPage from './components/About/AboutPage'
import GetStarted from './components/GetStarted/GetStartedPage'
import BuyCryptoPage from './components/BuyCrypto/BuyCryptoPage'

import './css/style.css'

const App = () => {
    return (
        <HelmetProvider>
            <Router>
                <div>
                    {/* Main application layout */}
                    <main>
                        <Routes>
                            {/* Redirect "/" to the correct hash-based route */}
                            <Route path="/" element={<Navigate to="/web-core" />} />
                            <Route path="/web-core" element={<HomePage />} />
                            <Route path="/web-core/consulting" element={<CCNZ />} />
                            <Route path="/web-core/expo" element={<Expo />} />
                            <Route path="/web-core/about" element={<AboutPage />} />
                            <Route path="/web-core/getstarted" element={<GetStarted />} />
                            <Route path="/web-core/buycrypto" element={<BuyCryptoPage />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </HelmetProvider>
    )
}

export default App
