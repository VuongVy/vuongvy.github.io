import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { DemoForm } from '../components/DemoForm'

describe('DemoForm Component', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_TELEGRAM_TOKEN', '')
    vi.stubEnv('VITE_TELEGRAM_CHAT_ID', '')
    vi.restoreAllMocks()
  })

  it('renders all form input fields and labels', () => {
    render(<DemoForm />)
    
    expect(screen.getByText('First Name*')).toBeInTheDocument()
    expect(screen.getByText('Last Name*')).toBeInTheDocument()
    expect(screen.getByText('Business Email*')).toBeInTheDocument()
    expect(screen.getByText('Company Name / Dự án*')).toBeInTheDocument()
    expect(screen.getByText('Lĩnh vực quan tâm*')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Gửi Yêu Cầu' })).toBeInTheDocument()
  })

  it('shows error toast when telegram env variables are missing', async () => {
    const { container } = render(<DemoForm />)
    
    const firstNameInput = container.querySelector('input[name="firstName"]') as HTMLInputElement
    const lastNameInput = container.querySelector('input[name="lastName"]') as HTMLInputElement
    const emailInput = container.querySelector('input[name="email"]') as HTMLInputElement
    const companyInput = container.querySelector('input[name="company"]') as HTMLInputElement
    const select = container.querySelector('select[name="interest"]') as HTMLSelectElement

    fireEvent.change(firstNameInput, { target: { value: 'Nguyen' } })
    fireEvent.change(lastNameInput, { target: { value: 'An' } })
    fireEvent.change(emailInput, { target: { value: 'an@example.com' } })
    fireEvent.change(companyInput, { target: { value: 'REXON Tech' } })
    fireEvent.change(select, { target: { value: 'Bất động sản (Presales)' } })

    const form = container.querySelector('#demoForm') as HTMLFormElement
    fireEvent.submit(form)

    await waitFor(() => {
      expect(screen.getByText(/Chưa cấu hình Telegram/i)).toBeInTheDocument()
    })
  })

  it('sends telegram request on valid submit when env vars exist', async () => {
    vi.stubEnv('VITE_TELEGRAM_TOKEN', 'test_token')
    vi.stubEnv('VITE_TELEGRAM_CHAT_ID', 'test_chat_id')

    const mockFetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ ok: true }),
    })
    globalThis.fetch = mockFetch

    const { container } = render(<DemoForm />)
    
    const firstNameInput = container.querySelector('input[name="firstName"]') as HTMLInputElement
    const lastNameInput = container.querySelector('input[name="lastName"]') as HTMLInputElement
    const emailInput = container.querySelector('input[name="email"]') as HTMLInputElement
    const companyInput = container.querySelector('input[name="company"]') as HTMLInputElement
    const select = container.querySelector('select[name="interest"]') as HTMLSelectElement

    fireEvent.change(firstNameInput, { target: { value: 'Nguyen' } })
    fireEvent.change(lastNameInput, { target: { value: 'An' } })
    fireEvent.change(emailInput, { target: { value: 'an@example.com' } })
    fireEvent.change(companyInput, { target: { value: 'REXON Tech' } })
    fireEvent.change(select, { target: { value: 'Bất động sản (Presales)' } })

    const form = container.querySelector('#demoForm') as HTMLFormElement
    fireEvent.submit(form)

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.telegram.org/bottest_token/sendMessage',
        expect.objectContaining({
          method: 'POST',
        })
      )
      expect(screen.getByText(/gửi thành công/i)).toBeInTheDocument()
    })
  })
})
