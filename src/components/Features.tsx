import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  { icon: '🏙️', title: 'Tầm nhìn từ căn hộ', desc: 'Tái hiện trọn vẹn góc nhìn panorama từ ban công và cửa sổ, truyền tải phong cách sống.' },
  { icon: '☀️', title: 'Ánh sáng thời gian thực', desc: 'Tái hiện sự thay đổi ánh sáng trong không gian 3D, giúp khách hàng quan sát ở nhiều thời điểm.' },
  { icon: '🗺️', title: 'Khám phá quy hoạch tổng thể', desc: 'Hiển thị toàn cảnh dự án, phân khu, tiện ích, giao thông trong cùng một giao diện.' },
  { icon: '🏫', title: 'Tiện ích Nội/Ngoại khu', desc: 'Trình bày trường học, công viên, dịch vụ để làm rõ giá trị vị trí của dự án.' },
  { icon: '📍', title: 'Bản đồ quy hoạch tương lai', desc: 'Hiển thị các lớp thông tin quy hoạch, khu vực phát triển và kết nối dài hạn.' },
  { icon: '📦', title: 'Quản lý giỏ hàng thông minh', desc: 'Hỗ trợ theo dõi trạng thái sản phẩm, cập nhật căn còn/bán nhanh chóng.' },
]

export function Features() {
  const revealHeader = useScrollReveal()

  return (
    <section className="rexon-section rexon-section--alt">
      <div className="container">
        <div ref={revealHeader} className="reveal section-header">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Các Tính Năng Tối Ưu Hiệu Quả Bán Hàng
          </h2>
        </div>
        <div className="grid-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={((i % 3) + 1)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, desc, delay }: { icon: string; title: string; desc: string; delay: number }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} glass-card feature-card`}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
