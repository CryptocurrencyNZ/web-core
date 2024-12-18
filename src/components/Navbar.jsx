import '../css/navbar.css';

const NavItem = ({ text, link, icon, dropdownContent }) => {
  if (dropdownContent) {
    return (
      <div className="nav-item">
        <button className="dropdown-trigger">
          {icon && <span className="nav-icon">{icon}</span>}
          {text}
          <span className="arrow">▾</span>
        </button>
        <div className="dropdown-menu">
          {dropdownContent}
        </div>
      </div>
    );
  }

  return (
    <div className="nav-item">
      <a href={link} className="nav-link">
        {icon && <span className="nav-icon">{icon}</span>}
        {text}
      </a>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <h1 className="hero-title">
          <span style={{ fontSize: '3rem', color: 'rgb(83, 82, 82)' }}>Cryptocurrency</span>
          <span style={{ fontSize: '3rem', color: 'rgb(27, 97, 0)' }}>NZ</span>
        </h1>
      </div>
      <div className="nav-links">
        <NavItem text="DAO" link="#" />
        <NavItem text="Wallets" link="#" />
        <NavItem text="Buy Crypto" link="#" />
        
        <NavItem
          text="Learn"
          dropdownContent={
            <div className="menu-grid">
              <div className="menu-section">
                <h3>Transferring</h3>
                <a href="#" className="dropdown-link">
                  <span className="link-icon">📊</span>
                  <div>
                    <span>How to Buy</span>
                    <span className="link-desc">Description explaining page</span>
                  </div>
                </a>
                <a href="#" className="dropdown-link">
                  <span className="link-icon">💹</span>
                  <div>
                    <span>How to Sell</span>
                    <span className="link-desc">Description explaining page</span>
                  </div>
                </a>
              </div>
              <div className="menu-section">
                <h3>Technical</h3>
                <a href="#" className="dropdown-link">
                  <span className="link-icon">💼</span>
                  <div>
                    <span>Crypto Mining</span>
                    <span className="link-desc">Description explaining page</span>
                  </div>
                </a>
              </div>
            </div>
          }
        />
        <NavItem
          text="Community"
          dropdownContent={
            <div className="menu-grid">
              <div className="menu-section">
                <h3>Events</h3>
                <a href="#" className="dropdown-link">
                  <span className="link-icon">💼</span>
                  <div>
                    <span>Crypto Debit Cards</span>
                    <span className="link-desc">Description explaining page</span>
                  </div>
                </a>
              </div>
              <div className="menu-section">
                <h3>Meetups</h3>
                <a href="#" className="dropdown-link">
                  <span className="link-icon">📈</span>
                  <div>
                    <span>Airdrops</span>
                    <span className="link-desc">Description explaining page</span>
                  </div>
                </a>
              </div>
            </div>
          }
        />
        <NavItem text="News" link="#" />
        <NavItem text="About us" link="#" />
        <NavItem text="Get help" link="#" />
      </div>
    </nav>
  );
};

export default Navbar;