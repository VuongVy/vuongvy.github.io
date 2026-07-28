import { useState, useEffect } from 'react'
import { Button } from '@astryxdesign/core/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-container">
            <div className="nav-brand">
                <a href="#" className="logo" onClick={handleLinkClick}>
                    <img src="/logo.png" alt="REXON" onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMzAiPjx0ZXh0IHk9IjIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiPlJFWE9OPC90ZXh0Pjwvc3ZnPg=='
                    }} />
                </a>
            </div>
            <div className={`nav-links${mobileOpen ? ' active' : ''}`}>
                <div className="dropdown">
                    <a href="#solutions" className="dropbtn" onClick={handleLinkClick}>Giải pháp ▾</a>
                    <div className="dropdown-content">
                        <a href="#solutions" onClick={handleLinkClick}>Bất động sản (Presales)</a>
                        <a href="#solutions" onClick={handleLinkClick}>Vận hành (Operations)</a>
                        <a href="#solutions" onClick={handleLinkClick}>Smart City / Industry</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#capabilities" className="dropbtn" onClick={handleLinkClick}>Năng lực ▾</a>
                    <div className="dropdown-content">
                        <a href="#capabilities" onClick={handleLinkClick}>Trải nghiệm 3D</a>
                        <a href="#capabilities" onClick={handleLinkClick}>Phân tích dữ liệu</a>
                        <a href="#capabilities" onClick={handleLinkClick}>Tương tác Vật lý-Số</a>
                    </div>
                </div>
                <a href="#the-3-ones" onClick={handleLinkClick}>Triết lý</a>
                <a href="#about" onClick={handleLinkClick}>Về REXON</a>
            </div>
            <div className="nav-right">
                <div className="dropdown">
                    <div className="lang-switch dropbtn">VN ▾</div>
                    <div className="dropdown-content" style={{ minWidth: '80px', left: 'auto', right: 0, textAlign: 'center' }}>
                        <a href="index.html">VN</a>
                        <a href="en.html">EN</a>
                    </div>
                </div>
                <Button label="Get Started" variant="primary" size="sm" href="#demo" />
            </div>
            <button
                className="mobile-menu-btn"
                aria-label="Toggle Menu"
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {mobileOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    )}
                </svg>
            </button>
        </div>
    </nav>
  )
}
