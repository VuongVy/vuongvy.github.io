import { useScrollReveal } from '../hooks/useScrollReveal'

export function HeroSection() {
  const revealBadge = useScrollReveal()
  const revealTitle = useScrollReveal()
  const revealDesc = useScrollReveal()
  const revealCta = useScrollReveal()
  const revealVisual = useScrollReveal()

  return (
    <section id="home" className="hero">
      <div ref={revealBadge} className="reveal hero-badge">
        <span className="hero-badge-dot" />
        Giúp khách hàng hình dung dự án rõ hơn trước khi hoàn thiện
      </div>

      <h1 ref={revealTitle} className="reveal reveal-delay-1">
        Trải nghiệm bán hàng mới cho<br />
        <span className="text-gradient">bất động sản tương lai</span>
      </h1>

      <p ref={revealDesc} className="reveal reveal-delay-2 hero-desc">
        REXON giúp chủ đầu tư và đội ngũ kinh doanh trình bày dự án bằng{' '}
        <strong>'Bản sao số'</strong> có thể tương tác, để khách hàng dễ dàng khám phá
        tổng thể dự án, từng sản phẩm, tầm nhìn và tiện ích một cách rõ ràng hơn.
        <br />
        <em>Dành cho sales gallery, showroom, sự kiện mở bán và kênh online.</em>
      </p>

      <div ref={revealCta} className="reveal reveal-delay-3">
        <a href="#demo" className="hero-cta">
          Bắt đầu với REXON
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div ref={revealVisual} className="reveal reveal-delay-4 hero-visual">
        <div className="hero-visual-inner">
          <div className="cube-wrapper">
            <div className="cube-face cube-face--front" />
            <div className="cube-face cube-face--back" />
            <div className="cube-face cube-face--left" />
            <div className="cube-face cube-face--right" />
            <div className="cube-face cube-face--top" />
            <div className="cube-face cube-face--bottom" />
          </div>
        </div>
      </div>
    </section>
  )
}
