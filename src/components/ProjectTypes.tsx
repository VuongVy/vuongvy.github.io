import { useScrollReveal } from '../hooks/useScrollReveal'

export function ProjectTypes() {
  const revealHeader = useScrollReveal()
  const revealVideo1 = useScrollReveal()
  const revealVideo2 = useScrollReveal()

  return (
    <section id="showcase" className="section">
        <div className="container">
            <div ref={revealHeader} className="section-header center fade-in-up">
                <div className="section-label">Showcase</div>
                <h2>Trải nghiệm Nhà mẫu Digital Twin</h2>
                <p>Khám phá không gian tương tác 3D chân thực dành riêng cho phân khúc Real Estate do REXON phát triển.</p>
            </div>
            <div className="video-grid">
                <div ref={revealVideo1} className="video-wrapper fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <iframe src="https://www.youtube.com/embed/PHU43jULDUw?rel=0&modestbranding=1&controls=1&color=white&iv_load_policy=3&playsinline=1" title="REXON Real Estate Showcase 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div ref={revealVideo2} className="video-wrapper fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <iframe src="https://www.youtube.com/embed/XZ6O4h4C5-k?rel=0&modestbranding=1&controls=1&color=white&iv_load_policy=3&playsinline=1" title="REXON Real Estate Showcase 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}
