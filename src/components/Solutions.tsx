import { useScrollReveal } from '../hooks/useScrollReveal'
import { Heading } from '@astryxdesign/core/Heading'
import { Text } from '@astryxdesign/core/Text'
import { Card } from '@astryxdesign/core/Card'

export function Solutions() {
  const revealHeader = useScrollReveal()
  const reveal1 = useScrollReveal()
  const reveal2 = useScrollReveal()
  const reveal3 = useScrollReveal()

  return (
    <section id="solutions" className="section bg-light">
        <div className="container">
            <div ref={revealHeader} className="section-header center fade-in-up">
                <Text type="supporting" color="secondary" className="section-label">Hệ sinh thái Giải pháp</Text>
                <Heading level={2}>Đa dạng hóa ứng dụng Digital Twin</Heading>
                <Text type="body" color="secondary">Từ điểm chạm đầu tiên trong bán hàng đến vận hành hệ thống thành phố thông minh.</Text>
            </div>
            <div className="grid-3 mt-4">
                <div ref={reveal1} className="fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <Card padding={0} className="value-card">
                    <img src="images/presales.png" alt="Presales" className="solution-img" />
                    <Heading level={3} className="value-card-heading">Presales Real Estate</Heading>
                    <Text type="body" color="secondary" className="value-card-text"><strong>Beachhead Market:</strong> REXON Experience Gallery - Giải pháp Sale Gallery số hóa, giải quyết bài toán trải nghiệm &amp; dữ liệu phân mảnh cho Chủ đầu tư BĐS.</Text>
                  </Card>
                </div>
                <div ref={reveal2} className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <Card padding={0} className="value-card">
                    <img src="images/operations.png" alt="Operations" className="solution-img" />
                    <Heading level={3} className="value-card-heading">Operations &amp; Smart Campus</Heading>
                    <Text type="body" color="secondary" className="value-card-text">Quản lý vận hành tài sản thực tế qua Dashboard 3D. Tích hợp IoT để theo dõi thông số, cảnh báo an ninh và tối ưu hóa năng lượng cho tòa nhà/campus.</Text>
                  </Card>
                </div>
                <div ref={reveal3} className="fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <Card padding={0} className="value-card">
                    <img src="images/smartcity.png" alt="Smart City" className="solution-img" />
                    <Heading level={3} className="value-card-heading">Smart City &amp; Industry</Heading>
                    <Text type="body" color="secondary" className="value-card-text">Mở rộng nền tảng để quy hoạch đô thị, công nghiệp, nông nghiệp và năng lượng bền vững thông qua kiến trúc dữ liệu quy mô lớn.</Text>
                  </Card>
                </div>
            </div>
        </div>
    </section>
  )
}
