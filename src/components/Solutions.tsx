import { useScrollReveal } from '../hooks/useScrollReveal'

export function Solutions() {
  const revealHeader = useScrollReveal()
  const reveal1 = useScrollReveal()
  const reveal2 = useScrollReveal()
  const reveal3 = useScrollReveal()

  return (
    <section id="solutions" className="section bg-light">
        <div className="container">
            <div ref={revealHeader} className="section-header center fade-in-up">
                <div className="section-label">Hệ sinh thái Giải pháp</div>
                <h2>Đa dạng hóa ứng dụng Digital Twin</h2>
                <p>Từ điểm chạm đầu tiên trong bán hàng đến vận hành hệ thống thành phố thông minh.</p>
            </div>
            <div className="grid-3 mt-4">
                <div ref={reveal1} className="glass-card value-card fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src="images/presales.png" alt="Presales" className="solution-img" />
                    <h3>Presales Real Estate</h3>
                    <p><strong>Beachhead Market:</strong> REXON Experience Gallery - Giải pháp Sale Gallery số hóa, giải quyết bài toán trải nghiệm & dữ liệu phân mảnh cho Chủ đầu tư BĐS.</p>
                </div>
                <div ref={reveal2} className="glass-card value-card fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src="images/operations.png" alt="Operations" className="solution-img" />
                    <h3>Operations & Smart Campus</h3>
                    <p>Quản lý vận hành tài sản thực tế qua Dashboard 3D. Tích hợp IoT để theo dõi thông số, cảnh báo an ninh và tối ưu hóa năng lượng cho tòa nhà/campus.</p>
                </div>
                <div ref={reveal3} className="glass-card value-card fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src="images/smartcity.png" alt="Smart City" className="solution-img" />
                    <h3>Smart City & Industry</h3>
                    <p>Mở rộng nền tảng để quy hoạch đô thị, công nghiệp, nông nghiệp và năng lượng bền vững thông qua kiến trúc dữ liệu quy mô lớn.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
