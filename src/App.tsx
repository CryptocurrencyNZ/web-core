import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import CCNZ from './components/CCNZ/CCNZPage'

import './css/style.css'

const App = () => {
    return (
        <Router>
            <div>
                {/* Main application layout */}
                <main>
                    <Routes>
                        <Route path="/web-core/" element={<HomePage />} />
                        <Route path="/web-core/consulting" element={<CCNZ />} />
                    </Routes>
                </main>

                {/* Footer could go here */}
            </div>
        </Router>
    )
}

export default App
