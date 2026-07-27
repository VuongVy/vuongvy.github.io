import { useScrollReveal } from '../hooks/useScrollReveal'

const types = [
  { title: 'Căn hộ cao cấp', sub: 'Condominiums' },
  { title: 'Bất động sản hàng hiệu', sub: 'Branded Residences' },
  { title: 'Chung cư phân khúc tiêu chuẩn', sub: 'Apartments' },
  { title: 'Bất động sản nghỉ dưỡng & Khách sạn', sub: 'Hospitality' },
]

export function ProjectTypes() {
  const revealText = useScrollReveal()

  return (
    <section id="project-types" className="rexon-section rexon-section--alt" style={{ scrollMarginTop: 80 }}>
      <div className="container">
        <div className="grid-2">
          <div ref={revealText} className="reveal">
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 20 }}>
              Dành cho nhiều loại hình dự án
            </h2>
            <p style={{ color: 'var(--rexon-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              REXON có thể được tùy biến theo quy mô, loại hình và cách mỗi dự án cần được
              giới thiệu — từ căn hộ cao tầng, khu dân cư đến quy hoạch tổng thể và bất động sản nghỉ dưỡng.
            </p>
          </div>
          <div className="grid-2x2">
            {types.map((t, i) => (
              <TypeCard key={t.sub} {...t} delay={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TypeCard({ title, sub, delay }: { title: string; sub: string; delay: number }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} glass-card type-card`}>
      <div className="type-card-title">{title}</div>
      <div className="type-card-sub">({sub})</div>
    </div>
  )
}
