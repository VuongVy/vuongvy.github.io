# MÔ TẢ YÊU CẦU LÀM BẢN TEST (PROTOTYPE) - ANATOMY APP

**Mục tiêu (Goal):** Xây dựng một bản web (HTML/CSS/JS) giao diện tĩnh cơ bản có lồng file 3D Model (nếu có, hoặc để khung trống/ảnh mockup ở giữa) để test luồng bấm nút mở menu (UI/UX flow) và hiệu ứng UI.

---

## 1. Công nghệ (Tech Stack) khuyến nghị cho bản Test
- **Cấu trúc UI:** HTML5 + Vanilla CSS (hoặc Tailwind CSS).
- **Phần ở giữa (Mô hình 3D):** Dùng thư viện `<model-viewer>` của Google (nhúng siêu nhanh, vuốt xoay 3D có sẵn) HOẶC `Three.js` (nếu dev rành). *Tạm thời dùng 1 file 3D `.glb` miễn phí bất kỳ trên mạng để test.*
- **Animation Menu:** CSS Transitions/Animations cơ bản.

---

## 2. Thông số Styles (Design System Core)

Bấm vào giao diện "Dark Mode" kiểu Y Khoa viễn tưởng.
- **Màu nền (Body Background):** Dải Gradient tối màu.
  - `background: radial-gradient(circle at center, #172332 0%, #040912 100%);`
  - Hoặc chèn thẳng File Background cung cấp dưới dạng ảnh cố định.
- **Bảng menu Glassmorphism (Kính mờ):** Đây là thẻ `Div` bọc nội dung văn bản.
  - `background: rgba(22, 33, 50, 0.4);`
  - `backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);` (Hiệu ứng mờ đục)
  - `border: 1px solid rgba(0, 240, 255, 0.2);` (Viền xanh cyan nhẹ)
  - `border-radius: 12px;`
- **Màu chữ (Text Colors):** Trắng `#FFFFFF` (Heading), Xám xanh `#8E9BAE` (Mô tả phụ).
- **Font chữ:** `Inter` hoặc `Roboto`.

---

## 3. Bố trí Khung Giao Diện (Layout Test)

Sử dụng CSS Grid / Flexbox setup màn hình **Full Width/Height (`100vh`)**, `overflow: hidden`. Bố cục 3 lớp chồng lên nhau `z-index`:

**- Lớp Z-index 0 (Đáy):** Nền Gradient / Ảnh nền vũ trụ sâu (App Background).
**- Lớp Z-index 1 (Giữa):** Khung chứa Nhân vật 3D (Canvas / `<model-viewer>`). Nằm chính giữa, to nhất.
**- Lớp Z-index 2 (Trên cùng - Float UI):** 
  1. **Top Left:** Logo dự án hoặc Tiêu đề H1 (Chữ trắng).
  2. **Cạnh trái (Left Panel):** `glass-panel` hiển thị thông tin giới thiệu bộ phận. Ban đầu ẩn (`opacity: 0`), khi click icon bên phải thì panel trái trượt ra (`translateX`). Chứa một vài dòng Text giả lập `Lorem Ipsum`.
  3. **Cạnh phải (Right Sidebar):** Thanh menu dọc chứa 4 Nút Icon bấm (Xương, Cơ, Tim, Não). Các nút này xếp hàng dọc, có margin hở nhau. Nút nào đang Active thì viền sáng lên.
  4. **Dưới cùng (Bottom Center):** Một cụm `glass-panel` nằm ngang, chứa các nút reset view hoặc chuyển camera.

---

## 4. Cách sử dụng Assets (Đặc biệt lưu ý cho Dev)

Bạn đã được cấp 4 tấm ảnh Icon (Xương, Tim, Bộ não, Sợi cơ). 
**⚠️ Trick quan trọng:** Các ảnh này có MÀU NỀN ĐEN `#000000`, chứ không phải nền trong suốt (với mục đích giữ sáng Neon tốt nhất).

**Yêu cầu xử lý CSS với Icon (Img):**
```css
.medical-icon-img {
   width: 48px;
   height: auto;
   /* CỰC KỲ QUAN TRỌNG: Lọc bỏ nền đen của ảnh icon */
   mix-blend-mode: screen; 
   /* Hoặc nếu thấy mờ quá có thể chọn: mix-blend-mode: plus-lighter; */
   filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.5)); /* Thêm hiệu ứng phát sáng nhẹ */
}
.medical-icon-btn:hover .medical-icon-img {
   transform: scale(1.1);
   transition: 0.2s ease-out;
}
```

---

## 5. Kịch bản Test luồng hoạt động (User Flow)
1. Tải trang: 3D model nằm giữa xoay. Layout mờ mờ 2 bên trống rỗng, chỉ thấy Thanh Icon ở cạnh Phải.
2. User Click icon Xương sọ: Left Panel trượt vào hiện chữ "SKELETAL SYSTEM" (Hệ xương) - Chữ có màu Cyan.
3. User Click icon Sợi cơ: Left Panel nháy nội dung sang "MUSCULAR SYSTEM" - Đổi màu chữ chữ sang Đỏ.
4. User Click icon Trái tim: Left Panel chuyển thành "CARDIOVASCULAR" nhịp tim đập.
5. *(Optional Dev)* Nếu dùng code tương tác: Click nút bên phải tương ứng -> Chạy lệnh ẩn các Mesh trên Model 3D.
