import { useScrollReveal } from '../hooks/useScrollReveal'
import { Heading } from '@astryxdesign/core/Heading'
import { Text } from '@astryxdesign/core/Text'
import { Card } from '@astryxdesign/core/Card'

export function Features() {
  const revealHeader = useScrollReveal()
  const reveal1 = useScrollReveal()
  const reveal2 = useScrollReveal()
  const reveal3 = useScrollReveal()
  const reveal4 = useScrollReveal()
  const reveal5 = useScrollReveal()
  const reveal6 = useScrollReveal()

  return (
    <section id="capabilities" className="section bg-light">
        <div className="container">
            <div ref={revealHeader} className="section-header center fade-in-up">
                <Text type="supporting" color="secondary" className="section-label">Năng lực Công nghệ Core</Text>
                <Heading level={2}>Công nghệ nền tảng của REXON</Heading>
                <Text type="body" color="secondary">Bộ tính năng lõi sẵn sàng thương mại hóa và ứng dụng tùy biến vào từng ngành nghề.</Text>
            </div>
            <div className="grid-3 mt-4">
                <div ref={reveal1} className="fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <Card padding={0} className="feature-card">
                    <img src="images/canva_img_1.png" alt="3D Experience" className="feature-img" />
                    <Heading level={3} className="feature-card-heading">Trải nghiệm 3D Nhập vai</Heading>
                    <Text type="body" color="secondary" className="feature-card-text">Tái hiện 100% tài sản vật lý trong không gian 3D tương tác. Hỗ trợ view 1:1, tùy biến ánh sáng, và tương tác đa giác quan.</Text>
                  </Card>
                </div>
                <div ref={reveal2} className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <Card padding={0} className="feature-card">
                    <img src="images/canva_img_2.png" alt="Real-time Sync" className="feature-img" />
                    <Heading level={3} className="feature-card-heading">Đồng bộ Dữ liệu Real-time</Heading>
                    <Text type="body" color="secondary" className="feature-card-text">Kết nối thời gian thực với hệ thống quản trị nội bộ (VD: Quản lý giỏ hàng BĐS, hay thông số thiết bị IoT công nghiệp).</Text>
                  </Card>
                </div>
                <div ref={reveal3} className="fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <Card padding={0} className="feature-card">
                    <img src="images/canva_img_3.jpg" alt="Behavior Analysis" className="feature-img" />
                    <Heading level={3} className="feature-card-heading">Phân tích Hành vi &amp; Không gian</Heading>
                    <Text type="body" color="secondary" className="feature-card-text">Hệ thống Heatmap ghi nhận hành vi tương tác, cùng Dashboard phân tích dữ liệu chuyên sâu để hỗ trợ ra quyết định.</Text>
                  </Card>
                </div>
                <div ref={reveal4} className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <Card padding={0} className="feature-card">
                    <img src="images/canva_img_4.jpg" alt="Physical Digital Connection" className="feature-img" />
                    <Heading level={3} className="feature-card-heading">Tương tác kết nối Vật lý - Số</Heading>
                    <Text type="body" color="secondary" className="feature-card-text">Phản hồi tín hiệu hai chiều giữa Digital Twin với các phần cứng thực tế (sa bàn vật lý, đèn thông minh, thiết bị IoT).</Text>
                  </Card>
                </div>
                <div ref={reveal5} className="fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <Card padding={0} className="feature-card">
                    <img src="images/canva_img_5.png" alt="Open API" className="feature-img" />
                    <Heading level={3} className="feature-card-heading">Kiến trúc API Mở</Heading>
                    <Text type="body" color="secondary" className="feature-card-text">Khả năng mở rộng dễ dàng nhờ kết nối API/Webhook mượt mà với các hệ thống ERP/CRM bên thứ ba hiện tại của doanh nghiệp.</Text>
                  </Card>
                </div>
                <div ref={reveal6} className="fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <Card padding={0} className="feature-card">
                    <img src="images/canva_img_6.png" alt="Multi Platform" className="feature-img" />
                    <Heading level={3} className="feature-card-heading">Multi-platform Delivery</Heading>
                    <Text type="body" color="secondary" className="feature-card-text">Triển khai linh hoạt qua trình duyệt Web, Native App (PC/Mobile), và các thiết bị trình diễn tại Showroom (Interactive Wall).</Text>
                  </Card>
                </div>
            </div>
        </div>
    </section>
  )
}
