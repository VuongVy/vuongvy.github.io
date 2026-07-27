import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <nav className={`rexon-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={handleLinkClick}>
          <img src="/logo.png" alt="REXON" onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none'
          }} />
        </a>
        <div className={`nav-links${mobileOpen ? ' active' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#solutions" onClick={handleLinkClick}>Solutions</a>
          <a href="#insights" onClick={handleLinkClick}>Insights</a>
          <a href="#partners" onClick={handleLinkClick}>Partners</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
        </div>
        <a href="#demo" className="nav-cta">Get Started</a>
        <button
          className="mobile-menu-btn"
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  )
}
