import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'
import CCNZ from './components/CCNZ/CCNZPage'
import Expo from './components/Expo/Hero'
import HomePage from './components/HomePage'

import './css/style.css'

const App = () => {
    return (
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
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
