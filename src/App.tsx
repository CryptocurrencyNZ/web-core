import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import components
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import SponsorBanner from './components/SponsorBanner';
import Gallery from './components/Gallery';
import Features from './components/Features';

import "./css/style.css"

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
          <Navbar />
          <Hero />
          <SponsorBanner />
          <Gallery />
          <Features />
        </main>
    
        {/* Footer could go here */}
      </div>
    </Router>
  );
};

export default App;