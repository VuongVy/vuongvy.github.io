import { useScrollReveal } from '../hooks/useScrollReveal'

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
                <div className="section-label">Năng lực Công nghệ Core</div>
                <h2>Công nghệ nền tảng của REXON</h2>
                <p>Bộ tính năng lõi sẵn sàng thương mại hóa và ứng dụng tùy biến vào từng ngành nghề.</p>
            </div>
            <div className="grid-3 mt-4">
                <div ref={reveal1} className="feature-card glass-card fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src="images/canva_img_1.png" alt="3D Experience" className="feature-img" />
                    <h3>Trải nghiệm 3D Nhập vai</h3>
                    <p>Tái hiện 100% tài sản vật lý trong không gian 3D tương tác. Hỗ trợ view 1:1, tùy biến ánh sáng, và tương tác đa giác quan.</p>
                </div>
                <div ref={reveal2} className="feature-card glass-card fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src="images/canva_img_2.png" alt="Real-time Sync" className="feature-img" />
                    <h3>Đồng bộ Dữ liệu Real-time</h3>
                    <p>Kết nối thời gian thực với hệ thống quản trị nội bộ (VD: Quản lý giỏ hàng BĐS, hay thông số thiết bị IoT công nghiệp).</p>
                </div>
                <div ref={reveal3} className="feature-card glass-card fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src="images/canva_img_3.jpg" alt="Behavior Analysis" className="feature-img" />
                    <h3>Phân tích Hành vi & Không gian</h3>
                    <p>Hệ thống Heatmap ghi nhận hành vi tương tác, cùng Dashboard phân tích dữ liệu chuyên sâu để hỗ trợ ra quyết định.</p>
                </div>
                <div ref={reveal4} className="feature-card glass-card fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img src="images/canva_img_4.jpg" alt="Physical Digital Connection" className="feature-img" />
                    <h3>Tương tác kết nối Vật lý - Số</h3>
                    <p>Phản hồi tín hiệu hai chiều giữa Digital Twin với các phần cứng thực tế (sa bàn vật lý, đèn thông minh, thiết bị IoT).</p>
                </div>
                <div ref={reveal5} className="feature-card glass-card fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <img src="images/canva_img_5.png" alt="Open API" className="feature-img" />
                    <h3>Kiến trúc API Mở</h3>
                    <p>Khả năng mở rộng dễ dàng nhờ kết nối API/Webhook mượt mà với các hệ thống ERP/CRM bên thứ ba hiện tại của doanh nghiệp.</p>
                </div>
                <div ref={reveal6} className="feature-card glass-card fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <img src="images/canva_img_6.png" alt="Multi Platform" className="feature-img" />
                    <h3>Multi-platform Delivery</h3>
                    <p>Triển khai linh hoạt qua trình duyệt Web, Native App (PC/Mobile), và các thiết bị trình diễn tại Showroom (Interactive Wall).</p>
                </div>
            </div>
        </div>
    </section>
  )
}
