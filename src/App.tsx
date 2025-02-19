import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CCNZ from './components/CCNZ/CCNZPage'
import HomePage from './components/HomePage'
import PageLayout from './components/PageLayout'

import BlogList from './components/BlogList'
import BlogPage from './components/BlogPage'
import BlogUpload from './components/BlogUpload'
import './css/style.css'

const App = () => {
    return (
        <Router>
            <PageLayout>
                <Routes>
                    <Route path="/web-core/" element={<HomePage />} />
                    <Route path="/web-core/consulting" element={<CCNZ />} />
                    <Route path="/web-core/blogs" element={<BlogList />} />
                    <Route path="/web-core/blog/:slug" element={<BlogPage />} />
                    <Route path="/web-core/upload-blog" element={<BlogUpload />} />
                </Routes>
            </PageLayout>
        </Router>
    )
}

export default App
