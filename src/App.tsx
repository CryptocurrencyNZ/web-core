import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Import components
import HomePage from './components/HomePage'

import './css/style.css'

// Define types for our components if needed
interface AppProps {
    // Add any app-level props here
}

const App: React.FC<AppProps> = () => {
    return (
        <Router>
            <div>
                {/* Main application layout */}
                <main>
                    <HomePage />
                </main>

                {/* Footer could go here */}
            </div>
        </Router>
    )
}

export default App
