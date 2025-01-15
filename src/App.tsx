import { BrowserRouter as Router } from 'react-router-dom'

// Import components
import HomePage from './components/HomePage'

import './css/style.css'

const App = () => {
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
