import { useScrollReveal } from '../hooks/useScrollReveal'

export function About() {
  const revealText = useScrollReveal()
  const revealPartners = useScrollReveal()

  return (
    <section id="about" className="rexon-section rexon-section--alt" style={{ scrollMarginTop: 80 }}>
      <div className="container">
        <div className="grid-2">
          <div ref={revealText} className="reveal about-text">
            <h2>
              Vị thế tiên phong trong<br />trải nghiệm Digital Twin
            </h2>
            <p>
              Đón đầu nhu cầu trực quan hóa, REXON tập trung phát triển lõi công nghệ
              Digital Twin — bản sao số giúp chuyển đổi dự án, dữ liệu và không gian thành
              trải nghiệm 3D tương tác theo thời gian thực.
            </p>
            <p>
              Không chỉ dừng lại ở bất động sản, chúng tôi hướng đến việc mở rộng giải pháp
              sang các lĩnh vực doanh nghiệp, công nghiệp, nông nghiệp và hạ tầng thông minh.
            </p>
          </div>
          <div ref={revealPartners} className="reveal reveal-delay-2 glass-card partners-card" id="partners" style={{ scrollMarginTop: 80 }}>
            <h3>Hợp tác cùng REXON</h3>
            <p>
              Chúng tôi đồng hành cùng các studio, agency, nhà cung cấp công nghệ
              để tối ưu hệ sinh thái bất động sản.
            </p>
            <ul className="partner-list">
              <li>Technology Partners</li>
              <li>Business Partners</li>
              <li>Creative & Implementation Partners</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
