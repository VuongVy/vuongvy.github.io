import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from '../components/Navbar'

describe('Navbar Component', () => {
  it('renders brand logo and main navigation links', () => {
    render(<Navbar />)
    
    // Check logo image alt
    const logoImg = screen.getByAltText('REXON')
    expect(logoImg).toBeInTheDocument()

    // Check main navigation link texts
    expect(screen.getByText('Triết lý')).toBeInTheDocument()
    expect(screen.getByText('Về REXON')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', () => {
    render(<Navbar />)
    
    const menuBtn = screen.getByLabelText('Toggle Menu')
    expect(menuBtn).toBeInTheDocument()

    // Find nav links container
    const navLinks = screen.getByText('Triết lý').closest('.nav-links')
    expect(navLinks).not.toHaveClass('active')

    // Click to open mobile menu
    fireEvent.click(menuBtn)
    expect(navLinks).toHaveClass('active')

    // Click again to close
    fireEvent.click(menuBtn)
    expect(navLinks).not.toHaveClass('active')
  })

  it('updates scrolled class when window is scrolled', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav).not.toHaveClass('scrolled')

    // Simulate scroll down
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)

    expect(nav).toHaveClass('scrolled')
  })

  it('closes mobile menu when link is clicked', () => {
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Toggle Menu')
    const navLinks = screen.getByText('Triết lý').closest('.nav-links')

    fireEvent.click(menuBtn)
    expect(navLinks).toHaveClass('active')

    fireEvent.click(screen.getByText('Triết lý'))
    expect(navLinks).not.toHaveClass('active')
  })
})
