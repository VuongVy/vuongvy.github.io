import { useState, useRef, useEffect, type FormEvent } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Button } from '@astryxdesign/core/Button'
import { Heading } from '@astryxdesign/core/Heading'
import { Text } from '@astryxdesign/core/Text'
import { Card } from '@astryxdesign/core/Card'

interface ToastState {
  visible: boolean
  type: 'success' | 'error'
  message: string
}

export function DemoForm() {
  const revealSection = useScrollReveal()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<ToastState>({ visible: false, type: 'success', message: '' })
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    }
  }, [])

  const showToast = (type: 'success' | 'error', message: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    setToast({ visible: true, type, message })
    toastTimerRef.current = setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 4000)
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
    <section id="demo" className="section">
        <div className="container">
            <div ref={revealSection} className="fade-in-up">
              <Card className="demo-container">
                <div className="demo-info">
                    <Heading level={2}>Sẵn sàng chuyển đổi số cùng REXON</Heading>
                    <Text type="body" color="secondary">Đăng ký tư vấn để khám phá cách REXON thiết kế giải pháp Bản sao số phù hợp với mô hình kinh doanh của bạn.</Text>
                    <ul>
                        <li>Giải pháp Presales cho dự án BĐS.</li>
                        <li>Tư vấn quy trình số hóa tài sản, tòa nhà.</li>
                        <li>Demo tích hợp CRM và IoT.</li>
                        <li>Phát triển các module chức năng mở rộng.</li>
                    </ul>
                </div>
                <div className="demo-form-wrapper">
                    <Heading level={3}>Book a Demo / Tư vấn</Heading>
                    <form id="demoForm" className="demo-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name*</label>
                                <input type="text" name="firstName" required />
                            </div>
                            <div className="form-group">
                                <label>Last Name*</label>
                                <input type="text" name="lastName" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Business Email*</label>
                            <input type="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label>Company Name / Dự án*</label>
                            <input type="text" name="company" required />
                        </div>
                        <div className="form-group">
                            <label>Lĩnh vực quan tâm*</label>
                            <select name="interest" required defaultValue="" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
                                <option value="" disabled>Chọn lĩnh vực...</option>
                                <option value="Bất động sản (Presales)">Bất động sản (Presales)</option>
                                <option value="Quản lý Vận hành Tòa nhà">Quản lý Vận hành Tòa nhà</option>
                                <option value="Smart City / Industry">Smart City / Industry</option>
                            </select>
                        </div>
                        <Button
                          label={loading ? 'Đang gửi...' : 'Gửi Yêu Cầu'}
                          variant="primary"
                          type="submit"
                          isDisabled={loading}
                          isLoading={loading}
                        />
                    </form>
                </div>
              </Card>
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
