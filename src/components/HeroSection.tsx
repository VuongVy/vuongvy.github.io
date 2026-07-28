import { useScrollReveal } from '../hooks/useScrollReveal'
import { Button } from '@astryxdesign/core/Button'
import { Heading } from '@astryxdesign/core/Heading'
import { Text } from '@astryxdesign/core/Text'

export function HeroSection() {
  const revealTagline = useScrollReveal()
  const revealTitle = useScrollReveal()
  const revealDesc = useScrollReveal()
  const revealActions = useScrollReveal()
  const revealVisual = useScrollReveal()

  return (
    <section id="home" className="hero">
        <div className="container hero-content">
            <div ref={revealTagline} className="hero-badge fade-in-up">
              <span className="hero-badge-dot"></span>
              The Core Digital Twin Platform
            </div>
            <div ref={revealTitle} className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Heading level={1} type="display-1">
                Kiến tạo không gian<br/><span className="text-gradient">Bản sao số toàn diện</span>
              </Heading>
            </div>
            <div ref={revealDesc} className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Text type="large" color="secondary" className="desc">
                REXON cung cấp nền tảng Digital Twin lõi, chuyển đổi tài sản vật lý thành bản sao số thông minh. Giải pháp của chúng tôi trải rộng từ <strong>Bất động sản thương mại</strong> đến <strong>Quản lý Vận hành (Operations)</strong> và định hướng <strong>Smart City</strong>.
              </Text>
            </div>
            <div ref={revealActions} className="hero-actions fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Button label="Khám phá Giải pháp" variant="primary" size="lg" href="#solutions" />
                <Button label="Năng lực công nghệ" variant="ghost" size="lg" href="#capabilities" />
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
