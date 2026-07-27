import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    title: '1. Kick-Off',
    desc: 'Thống nhất về mục tiêu, định hướng sáng tạo và kế hoạch kinh doanh để tạo nền tảng vững chắc.',
  },
  {
    title: '2. Concept & Pre-production',
    desc: 'Định hình trải nghiệm tổng thể, xây dựng moodboard, định hướng UI/UX.',
  },
  {
    title: '3. Production & Development',
    desc: 'Dựng mô hình 3D, phát triển tính năng tương tác và tích hợp hệ thống/thiết bị.',
  },
  {
    title: '4. Beta Review & Testing',
    desc: 'Kiểm thử trong không gian thực tế, tinh chỉnh để đảm bảo thao tác mượt mà.',
  },
  {
    title: '5. Hướng dẫn & Vận hành',
    desc: 'Hỗ trợ đội ngũ tự tin vận hành trong các buổi tư vấn, demo hoặc sự kiện.',
  },
]

export function Timeline() {
  const revealHeader = useScrollReveal()

  return (
    <section id="insights" className="rexon-section" style={{ scrollMarginTop: 80 }}>
      <div className="container">
        <div ref={revealHeader} className="reveal section-header">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Quy Trình Triển Khai
          </h2>
          <p>
            REXON đồng hành để tối ưu trải nghiệm tư vấn theo đúng quy trình bán hàng của bạn.
          </p>
        </div>
        <div className="timeline">
          {steps.map((step, i) => (
            <TimelineItem key={step.title} {...step} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ title, desc, delay }: { title: string; desc: string; delay: number }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} timeline-item`}>
      <div className="timeline-dot" />
      <div className="glass-card timeline-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
