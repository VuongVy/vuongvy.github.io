document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. Scroll Reveal Animation (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });

    // 4. Telegram Form Submission
    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = demoForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = 'Đang gửi...';
            btn.disabled = true;

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const company = document.getElementById('company').value;
            const interestElement = document.getElementById('interest');
            const interest = interestElement ? interestElement.options[interestElement.selectedIndex].text : 'Không có';

            const text = `🔔 *CÓ NGƯỜI ĐĂNG KÝ DEMO MỚI*\n\n` +
                         `👤 *Tên:* ${firstName} ${lastName}\n` +
                         `📧 *Email:* ${email}\n` +
                         `🏢 *Công ty:* ${company}\n` +
                         `🎯 *Lĩnh vực quan tâm:* ${interest}`;

            const token = '8720241884:AAGRHB2vIeoCmAnolFOwBmbQH6igZ5jMVuo';
            const chat_id = '1420783300'; // Đã cập nhật Chat ID của bạn
            
            if (chat_id === 'YOUR_CHAT_ID_HERE') {
                alert('Chưa cấu hình CHAT_ID. Vui lòng nhắn tin cho Bot và lấy Chat ID điền vào file script.js!');
                btn.innerText = originalText;
                btn.disabled = false;
                return;
            }

            const url = `https://api.telegram.org/bot${token}/sendMessage`;

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: text,
                    parse_mode: 'Markdown'
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Cảm ơn bạn! Thông tin đăng ký đã được gửi thành công.');
                    demoForm.reset();
                } else {
                    alert('Lỗi gửi tin nhắn: ' + data.description);
                }
            })
            .catch(error => {
                alert('Có lỗi xảy ra khi gửi tin nhắn.');
                console.error(error);
            })
            .finally(() => {
                btn.innerText = originalText;
                btn.disabled = false;
            });
        });
    }
});
