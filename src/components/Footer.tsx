import { Heading } from '@astryxdesign/core/Heading'
import { Text } from '@astryxdesign/core/Text'
import { Divider } from '@astryxdesign/core/Divider'

export function Footer() {
  return (
    <footer className="footer bg-light">
        <Divider />
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">
                  <Heading level={4}>REXON</Heading>
                </div>
                <div className="footer-links">
                    <a href="#home">Tổng quan</a>
                    <a href="#solutions">Giải pháp</a>
                    <a href="#capabilities">Năng lực</a>
                    <a href="#about">Về chúng tôi</a>
                </div>
                <div className="footer-copy">
                    <Text type="supporting" color="secondary">
                      &copy; {new Date().getFullYear()} REXON Technology. Đã đăng ký bản quyền.
                    </Text>
                </div>
            </div>
        </div>
    </footer>
  )
}
