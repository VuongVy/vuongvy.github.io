export function Footer() {
  return (
    <footer className="rexon-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="text-gradient">REXON</span>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#solutions">Solutions</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} REXON Digital Twin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
