import { useScrollReveal } from '../hooks/useScrollReveal'

export function HeroSection() {
  const revealTagline = useScrollReveal()
  const revealTitle = useScrollReveal()
  const revealDesc = useScrollReveal()
  const revealActions = useScrollReveal()
  const revealVisual = useScrollReveal()

  return (
    <section id="home" className="hero">
        <div className="container hero-content">
            <p ref={revealTagline} className="tagline fade-in-up">The Core Digital Twin Platform</p>
            <h1 ref={revealTitle} className="fade-in-up" style={{ animationDelay: '0.1s' }}>Kiến tạo không gian<br/><span className="text-gradient">Bản sao số toàn diện</span></h1>
            <p ref={revealDesc} className="desc fade-in-up" style={{ animationDelay: '0.2s' }}>
                REXON cung cấp nền tảng Digital Twin lõi, chuyển đổi tài sản vật lý thành bản sao số thông minh. Giải pháp của chúng tôi trải rộng từ <strong>Bất động sản thương mại</strong> đến <strong>Quản lý Vận hành (Operations)</strong> và định hướng <strong>Smart City</strong>.
            </p>
            <div ref={revealActions} className="hero-actions fade-in-up" style={{ animationDelay: '0.3s' }}>
                <a href="#solutions" className="btn-primary large">Khám phá Giải pháp</a>
                <a href="#capabilities" className="btn-outline">Năng lực công nghệ</a>
            </div>
        </div>
        <div ref={revealVisual} className="hero-image glass-card fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="placeholder-3d">
                <div className="cube"></div>
            </div>
        </div>
    </section>
  )
}
