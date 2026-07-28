import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSection } from '../components/HeroSection'

describe('HeroSection Component', () => {
  it('renders hero title and tagline', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('The Core Digital Twin Platform')).toBeInTheDocument()
    expect(screen.getByText(/Kiến tạo không gian/i)).toBeInTheDocument()
    expect(screen.getByText('Bản sao số toàn diện')).toBeInTheDocument()
  })

  it('renders call to action buttons with correct hrefs', () => {
    render(<HeroSection />)
    
    const exploreBtn = screen.getByRole('link', { name: 'Khám phá Giải pháp' })
    expect(exploreBtn).toHaveAttribute('href', '#solutions')

    const techBtn = screen.getByRole('link', { name: 'Năng lực công nghệ' })
    expect(techBtn).toHaveAttribute('href', '#capabilities')
  })

  it('renders visual card container', () => {
    render(<HeroSection />)
    const visual = document.querySelector('.hero-image')
    expect(visual).toBeInTheDocument()
  })
})
