import React from 'react'
import '../css/hero.css'
import Map from './Map'

const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-left">
                <h1 className="hero-title">
                    Welcome to <span style={{ color: 'rgb(83, 82, 82)' }}>Cryptocurrency</span>
                    <span style={{ color: 'rgb(27, 97, 0)' }}>NZ</span>
                </h1>
                <p className="hero-description">New Zealand Cryptocurrency Community Collective</p>
                <div className="button-container">
                    <a href="#explore" className="hero-btn">
                        Get Started
                    </a>
                    <a href="#explore" className="hero-btn">
                        Get a Wallet
                    </a>
                    <a href="#explore" className="hero-btn">
                        Buy Crypto
                    </a>
                </div>
                <br />
                <br />
                <br />
                <p className="hero-description">
                    Need help?{' '}
                    <a href="" style={{ color: '#fff' }}>
                        Contact us
                    </a>
                </p>
            </div>
            <div className="hero-right">
                <Map />
            </div>
        </div>
    )
}

export default Hero
