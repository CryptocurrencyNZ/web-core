import { FC, ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface PageLayoutProps {
    children: ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header/Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow mt-16">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default PageLayout
