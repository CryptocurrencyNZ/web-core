const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section">
            <h2 className="section-title">
                Cryptocurrency <span className="text-accent-color">NZ</span>
            </h2>
            <p className="section-description">
                Experience the future of finance with New Zealand's most comprehensive cryptocurrency platform.
            </p>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">🔒</div>
                    <h3 className="feature-title">Cryptocurrency</h3>
                    <p className="feature-description">
                        State-of-the-art security measures and compliance with NZ regulations ensure your investments are protected.
                    </p>
                    <div className="feature-stat">99.99%</div>
                    <div className="feature-stat-label">Uptime Security Rating</div>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">💰</div>
                    <h3 className="feature-title">Wallets</h3>
                    <p className="feature-description">
                        Competitive trading fees and transparent pricing structure to maximize your investment potential.
                    </p>
                    <div className="feature-stat">0.1%</div>
                    <div className="feature-stat-label">Trading Fee</div>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🚀</div>
                    <h3 className="feature-title">P2P</h3>
                    <p className="feature-description">
                        Lightning-fast execution and settlement of trades with real-time market updates.
                    </p>
                    <div className="feature-stat">&lt;1s</div>
                    <div className="feature-stat-label">Transaction Speed</div>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🌿</div>
                    <h3 className="feature-title">Community</h3>
                    <p className="feature-description">
                        Committed to sustainable practices with renewable energy-powered operations across NZ.
                    </p>
                    <div className="feature-stat">100%</div>
                    <div className="feature-stat-label">Green Energy Usage</div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection; // This line is required for a default export
