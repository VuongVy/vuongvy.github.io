import { useState, type FormEvent } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface ToastState {
  visible: boolean
  type: 'success' | 'error'
  message: string
}

export function DemoForm() {
  const revealSection = useScrollReveal()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<ToastState>({ visible: false, type: 'success', message: '' })

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ visible: true, type, message })
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 4000)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string
    const phone = formData.get('phone') as string

    const text = `🔔 *CÓ NGƯỜI ĐĂNG KÝ DEMO MỚI*\n\n` +
      `👤 *Tên:* ${firstName} ${lastName}\n` +
      `📧 *Email:* ${email}\n` +
      `🏢 *Công ty:* ${company}\n` +
      `📞 *SĐT:* ${phone || 'Không có'}`

    const token = import.meta.env.VITE_TELEGRAM_TOKEN
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      showToast('error', 'Chưa cấu hình Telegram. Vui lòng kiểm tra file .env.')
      setLoading(false)
      return
    }

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      })

      const data = await response.json()

      if (data.ok) {
        showToast('success', 'Cảm ơn bạn! Thông tin đăng ký đã được gửi thành công.')
        form.reset()
      } else {
        showToast('error', 'Lỗi gửi tin nhắn: ' + data.description)
      }
    } catch {
      showToast('error', 'Có lỗi xảy ra khi gửi tin nhắn.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="demo" className="rexon-section" style={{ scrollMarginTop: 80 }}>
        <div className="container">
          <div ref={revealSection} className="reveal glass-card demo-grid">
            <div className="demo-info">
              <h2>Trải nghiệm thực tế cùng REXON</h2>
              <p>
                Đăng ký demo để khám phá cách REXON giúp đội ngũ bất động sản trình bày
                dự án bằng trải nghiệm Digital Twin tương tác.
              </p>
              <ul className="demo-checklist">
                <li>Trải nghiệm giao diện thực tế.</li>
                <li>Linh hoạt lựa chọn giải pháp hiển thị.</li>
                <li>Tương tác trực quan với tổng thể dự án.</li>
                <li>Đề xuất lộ trình triển khai phù hợp.</li>
              </ul>
            </div>
            <div className="demo-form-section">
              <h3>Book a Demo</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name*</label>
                    <input type="text" id="firstName" name="firstName" required placeholder="Họ" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name*</label>
                    <input type="text" id="lastName" name="lastName" required placeholder="Tên" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Business Email*</label>
                  <input type="email" id="email" name="email" required placeholder="email@company.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name*</label>
                  <input type="text" id="company" name="company" required placeholder="Tên công ty" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="0xxx xxx xxx" />
                </div>
                <button
                  type="submit"
                  className={`submit-btn${loading ? ' submit-btn--loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      Đang gửi...
                      <span className="submit-btn-spinner" />
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notifications */}
      {toast.visible && (
        <div className="toast-container">
          <div className={`toast toast--${toast.type}`}>
            {toast.message}
          </div>
        </div>
      )}
    </>
  )
}
