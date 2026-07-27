import { useScrollReveal } from '../hooks/useScrollReveal'

const values = [
  {
    title: 'Đồng nhất trải nghiệm',
    desc: 'Biến bản vẽ dự án thành những bản sao kỹ thuật số tương tác thông minh, tạo dựng niềm tin tuyệt đối cho khách hàng.',
  },
  {
    title: 'Đồng bộ đội ngũ',
    desc: 'Giúp toàn bộ nhân sự kinh doanh truyền tải chung một thông điệp rõ ràng.',
  },
  {
    title: 'Thúc đẩy quyết định',
    desc: 'Tạo ấn tượng mạnh mẽ với khách hàng và tăng tốc tỷ lệ chuyển đổi.',
  },
]

export function CoreValues() {
  const revealHeader = useScrollReveal()

  return (
    <section id="core-values" className="rexon-section" style={{ scrollMarginTop: 80 }}>
      <div className="container">
        <div ref={revealHeader} className="reveal section-header">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Một nền tảng cho toàn bộ<br />trải nghiệm giới thiệu dự án
          </h2>
          <p>
            Từ bản vẽ, dữ liệu sản phẩm đến trải nghiệm tư vấn, REXON giúp mọi thông tin
            dự án được trình bày rõ ràng, nhất quán và dễ hiểu hơn trên từng điểm chạm bán hàng.
          </p>
        </div>
        <div className="grid-3">
          {values.map((v, i) => (
            <ValueCard key={v.title} {...v} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueCard({ title, desc, delay }: { title: string; desc: string; delay: number }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} glass-card value-card`}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
