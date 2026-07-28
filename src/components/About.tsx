import { useScrollReveal } from '../hooks/useScrollReveal'
import { Heading } from '@astryxdesign/core/Heading'
import { Text } from '@astryxdesign/core/Text'
import { Card } from '@astryxdesign/core/Card'

export function About() {
  const revealText = useScrollReveal()
  const revealPartners = useScrollReveal()

  return (
    <section id="about" className="rexon-section rexon-section--alt" style={{ scrollMarginTop: 80 }}>
      <div className="container">
        <div className="grid-2">
          <div ref={revealText} className="reveal about-text">
            <Heading level={2}>
              Vị thế tiên phong trong<br />trải nghiệm Digital Twin
            </Heading>
            <Text type="body" color="secondary">
              Đón đầu nhu cầu trực quan hóa, REXON tập trung phát triển lõi công nghệ
              Digital Twin — bản sao số giúp chuyển đổi dự án, dữ liệu và không gian thành
              trải nghiệm 3D tương tác theo thời gian thực.
            </Text>
            <Text type="body" color="secondary">
              Không chỉ dừng lại ở bất động sản, chúng tôi hướng đến việc mở rộng giải pháp
              sang các lĩnh vực doanh nghiệp, công nghiệp, nông nghiệp và hạ tầng thông minh.
            </Text>
          </div>
          <div ref={revealPartners} className="reveal reveal-delay-2" id="partners" style={{ scrollMarginTop: 80 }}>
            <Card className="partners-card">
              <Heading level={3}>Hợp tác cùng REXON</Heading>
              <Text type="body" color="secondary">
                Chúng tôi đồng hành cùng các studio, agency, nhà cung cấp công nghệ
                để tối ưu hệ sinh thái bất động sản.
              </Text>
              <ul className="partner-list">
                <li>Technology Partners</li>
                <li>Business Partners</li>
                <li>Creative &amp; Implementation Partners</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
