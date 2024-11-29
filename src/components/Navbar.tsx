
const navItems = [
  { label: "DAO", href: "#" },
  { label: "Wallets", href: "#" },
  { label: "Buy Crypto", href: "#" },
  {
    label: "Learn",
    dropdown: [
      { section: "Transferring", links: [{ label: "How to Buy", href: "#" }, { label: "How to Sell", href: "#" }] },
      { section: "Mediums", links: [{ label: "Crypto Debit Cards", href: "#" }, { label: "Tax", href: "#" }] },
      { section: "Technical", links: [{ label: "Crypto Mining", href: "#" }, { label: "Airdrops", href: "#" }] },
    ],
  },
  {
    label: "Community",
    dropdown: [
      { section: "Events", links: [{ label: "Crypto Debit Cards", href: "#" }, { label: "ATMs", href: "#" }] },
      { section: "Meetups", links: [{ label: "Crypto Mining", href: "#" }, { label: "Airdrops", href: "#" }] },
    ],
  },
  { label: "News", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Get Help", href: "#" },
];

function Navbar() {
  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav-logo">
        <h1 className="hero-title">
          <span style={{ fontSize: "3rem", color: "rgb(83, 82, 82)" }}>Cryptocurrency</span>
          <span style={{ fontSize: "3rem", color: "rgb(27, 97, 0)" }}>NZ</span>
        </h1>
      </div>

      {/* Links */}
      <div className="nav-links">
        {navItems.map((item, index) =>
          item.dropdown ? (
            <div key={index} className="nav-item">
              <button className="nav-link dropdown-trigger">
                {item.label}
                <span className="arrow">▾</span>
              </button>
              <div className="dropdown-menu">
                <div className="menu-grid">
                  {item.dropdown.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="menu-section">
                      <h3>{section.section}</h3>
                      {section.links.map((link, linkIndex) => (
                        <a key={linkIndex} href={link.href} className="dropdown-link">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div key={index} className="nav-item">
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </div>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;
