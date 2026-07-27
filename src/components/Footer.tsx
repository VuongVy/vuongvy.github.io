export function Footer() {
  return (
    <footer id="about" className="footer bg-light">
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">REXON</div>
                <div className="footer-links">
                    <a href="#home">Tổng quan</a>
                    <a href="#solutions">Giải pháp</a>
                </div>
                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} REXON Technology. Đã đăng ký bản quyền.
                </div>
            </div>
        </div>
    </footer>
  )
}
