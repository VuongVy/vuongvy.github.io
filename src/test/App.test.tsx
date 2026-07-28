import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App Full Integration', () => {
  it('renders all page sections correctly', () => {
    const { container } = render(<App />)

    // Check navbar
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    // Check main container and background blobs
    expect(container.querySelector('.bg-animation')).toBeInTheDocument()
    expect(container.querySelector('.page-content')).toBeInTheDocument()

    // Check sections
    expect(container.querySelector('#home')).toBeInTheDocument()
    expect(container.querySelector('#the-3-ones')).toBeInTheDocument()
    expect(container.querySelector('#showcase')).toBeInTheDocument()
    expect(container.querySelector('#solutions')).toBeInTheDocument()
    expect(container.querySelector('#capabilities')).toBeInTheDocument()
    expect(container.querySelector('#insights')).toBeInTheDocument()
    expect(container.querySelector('#about')).toBeInTheDocument()
    expect(container.querySelector('#demo')).toBeInTheDocument()

    // Check footer
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
