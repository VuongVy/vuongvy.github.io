import { useScrollReveal } from '../hooks/useScrollReveal'

export function Solutions() {
  const reveal1 = useScrollReveal()
  const reveal2 = useScrollReveal()

  return (
    <section id="solutions" className="rexon-section" style={{ scrollMarginTop: 80 }}>
      <div className="container">
        {/* REXON Experience Gallery */}
        <div ref={reveal1} className="reveal solution-block">
          <div className="solution-text">
            <span className="solution-tag">Solution</span>
            <h2 className="solution-title">Rexon Experience Gallery</h2>
            <p className="solution-subtitle">
              Trải nghiệm 3D tương tác dành cho không gian bán hàng bất động sản hiện đại.
            </p>
            <p className="solution-desc">
              Công cụ bán hàng cho mọi đội ngũ từ chuyên viên tại showroom, đại lý cho thuê
              cho đến các môi giới trực tuyến.
            </p>
            <ul className="feature-list">
              <li>
                <strong>Vận hành linh hoạt:</strong> Tối ưu cho màn hình cảm ứng, LED wall,
                touchpad và trình chiếu online.
              </li>
              <li>
                <strong>Chi tiết trong từng góc nhìn:</strong> Tái hiện căn hộ, góc view,
                mặt bằng sắc nét.
              </li>
              <li>
                <strong>Tư vấn nhất quán:</strong> Hỗ trợ dẫn dắt câu chuyện dự án theo
                luồng rõ ràng.
              </li>
              <li>
                <strong>Đồng hành vận hành:</strong> Hỗ trợ hướng dẫn đào tạo giúp sales
                tự tin.
              </li>
            </ul>
            <a href="#demo" className="btn-outline">
              Trải nghiệm demo ngay
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="glass-card solution-visual">
            <div className="mockup-screen">
              <div className="screen-content" />
            </div>
          </div>
        </div>

        {/* IoT Interactive */}
        <div ref={reveal2} className="reveal solution-block reverse" style={{ marginTop: 100 }}>
          <div className="solution-text">
            <span className="solution-tag">Solution</span>
            <h2 className="solution-title">IoT Interactive</h2>
            <p className="solution-subtitle">
              Kết nối trải nghiệm 3D với sa bàn, thiết bị và các điểm chạm vật lý
              trong không gian thật.
            </p>
            <ul className="feature-list">
              <li>
                <strong>Chạm để thấy phản hồi:</strong> Mỗi thao tác trên sa bàn/thiết bị
                kích hoạt nội dung 3D.
              </li>
              <li>
                <strong>Kết nối vật lý – số:</strong> Liên kết với đèn, cảm biến, mô hình.
              </li>
              <li>
                <strong>Dễ hiểu khi thuyết trình:</strong> Minh họa khu vực, tiện ích sinh động.
              </li>
              <li>
                <strong>Linh hoạt theo kịch bản:</strong> Tùy biến cho smart building, campus,
                hạ tầng.
              </li>
            </ul>
            <a href="#demo" className="btn-outline">
              Trải nghiệm demo ngay
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="glass-card solution-visual">
            <div className="mockup-table" />
          </div>
        </div>
      </div>
    </section>
  )
}
