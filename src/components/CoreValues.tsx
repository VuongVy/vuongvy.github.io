import { useScrollReveal } from '../hooks/useScrollReveal'
import { Heading } from '@astryxdesign/core/Heading'
import { Text } from '@astryxdesign/core/Text'
import { Divider } from '@astryxdesign/core/Divider'

export function CoreValues() {
  const revealSection = useScrollReveal()

  return (
    <section id="the-3-ones" className="section">
        <div className="container">
            <div ref={revealSection} className="solution-row fade-in-up">
                <div className="solution-text">
                    <Text type="supporting" color="secondary" className="section-label">Triết lý thiết kế nền tảng</Text>
                    <Heading level={2}>THE 3 ONES</Heading>
                    <Text type="large" color="secondary">Nguyên tắc cốt lõi trên toàn bộ sản phẩm của REXON</Text>
                    <ul className="feature-list">
                        <li><strong>ONE DATA SOURCE:</strong> Một nguồn dữ liệu tập trung duy nhất, kết nối mượt mà với các hệ thống phân mảnh của doanh nghiệp.</li>
                        <li><strong>ONE EXPERIENCE:</strong> Một trải nghiệm trực quan thống nhất trên mọi thiết bị và điểm chạm (PC, Tablet, Touchscreen, LED Wall).</li>
                        <li><strong>ONE VERSION OF TRUTH:</strong> Một phiên bản dữ liệu minh bạch, đồng nhất tuyệt đối cho mọi người dùng và đối tác tham gia hệ thống.</li>
                    </ul>
                </div>
                <div className="solution-visual glass-card">
                    <div className="mockup-table"></div>
                </div>
            </div>
        </div>
    </section>
  )
}
