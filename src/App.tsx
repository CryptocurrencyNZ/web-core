import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CCNZ from './components/CCNZ/CCNZPage'
import HomePage from './components/HomePage'
import PageLayout from './components/PageLayout'

import './css/style.css'

const App = () => {
    return (
        <Router>
            <div>
                <main>
                    <PageLayout>
                        <Routes>
                            <Route path="/web-core/" element={<HomePage />} />
                            <Route path="/web-core/consulting" element={<CCNZ />} />
                        </Routes>
                    </PageLayout>
                </main>
            </div>
        </Router>
    )
}

export default App
