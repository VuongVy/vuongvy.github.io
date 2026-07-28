import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Solutions } from '../components/Solutions'
import { Features } from '../components/Features'

describe('Solutions & Features Components', () => {
  it('renders Solutions section cards and images', () => {
    render(<Solutions />)
    
    expect(screen.getByText('Presales Real Estate')).toBeInTheDocument()
    expect(screen.getByText('Operations & Smart Campus')).toBeInTheDocument()
    expect(screen.getByText('Smart City & Industry')).toBeInTheDocument()

    const presalesImg = screen.getByAltText('Presales')
    expect(presalesImg).toBeInTheDocument()
  })

  it('renders Features section 6 capability cards', () => {
    render(<Features />)
    
    expect(screen.getByText('Trải nghiệm 3D Nhập vai')).toBeInTheDocument()
    expect(screen.getByText('Đồng bộ Dữ liệu Real-time')).toBeInTheDocument()
    expect(screen.getByText('Phân tích Hành vi & Không gian')).toBeInTheDocument()
    expect(screen.getByText('Tương tác kết nối Vật lý - Số')).toBeInTheDocument()
    expect(screen.getByText('Kiến trúc API Mở')).toBeInTheDocument()
    expect(screen.getByText('Multi-platform Delivery')).toBeInTheDocument()
  })
})
