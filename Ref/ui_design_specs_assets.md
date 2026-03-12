# Anatomy App UI/UX Design Specifications & Assets

## 1. Design Philosophy
The "Interactive Anatomy Visualization" app uses a **Medical Sci-Fi / High-Tech Glassmorphism** aesthetic. This design style puts the 3D model center stage while floating UI menus give the impression of an augmented reality (AR) medical scan. 

### Key Characteristics:
*   **Deep Dark Mode:** Reduces eye strain and allows the bright colors of the internal anatomy to pop.
*   **Glassmorphism (Kính mờ):** UI panels are semi-transparent with background blur, so the user never fully loses sight of the 3D model beneath the menus.
*   **Neon Accents:** Bright cyan, neon pink, and vibrant purple are used sparsely to highlight active states, selections, and important medical warnings.

---

## 2. Color Palette & Typography

### Màu sắc chủ đạo (Variables in CSS)

```css
:root {
  /* Bối cảnh (Background Options) */
  --bg-dark: #0A0F16;      /* Xanh đen rất thẫm cho nền gốc */
  --bg-gradient-start: #040912;
  --bg-gradient-end: #172332;

  /* Hiệu ứng Kính (Glass Panels) */
  --glass-bg: rgba(22, 33, 50, 0.4); /* Nền Panel bán trong suốt */
  --glass-border: rgba(0, 240, 255, 0.2);
  --glass-glow: rgba(0, 240, 255, 0.05);

  /* Màu nhấn - Accent Colors (theo từng hệ cơ quan) */
  --accent-cyan (Hệ xương/Chung): #00F0FF;
  --accent-red (Hệ cơ): #FF2A54;
  --accent-pink (Tĩnh/động mạch): #FF0066;
  --accent-purple (Thần kinh): #B53FFD;
  
  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #8E9BAE;
}
```

### Typography (Font chữ)
Nên sử dụng các font chữ không chân (San-serif) mang tính hiện đại, gọn gàng, có bản hẹp (Condensed) hoặc bình thường nhưng sắc nét.
*   **Primary Font:** `Inter` hoặc `Roboto` (rất dễ đọc thông số Dược/Y khoa).
*   **Display Font (Tựa đề lớn):** `Orbitron` hoặc `Rajdhani` (để mang lại cảm giác thiết bị y tế tương lai).

---

## 3. The Core UI Elements (Hướng dẫn Code CSS)

### A. Background (Hình nền động hoặc Ảnh tĩnh)
Hình nền thực chất phải nằm dưới cùng (Z-index thấp nhất). Tốt nhất dùng dải gradient kết hợp với ảnh background mình cung cấp ở phần Assets.

```css
body {
  background: radial-gradient(circle at center, var(--bg-gradient-end) 0%, var(--bg-gradient-start) 100%);
  background-image: url('assets/app_background.png'); /* Nếu dùng ảnh tĩnh tạo detail */
  background-size: cover;
  background-position: center;
}
```

### B. Glassmorphism Window (Bảng thông tin trong suốt)
Đây là "linh hồn" của giao diện. Mọi thẻ `div` chứa thông tin (Ví dụ: Bảng thông tin Nhịp tim, Tên Xương) đều dùng code cơ bản này:

```css
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: blur(16px); /* Làm mờ phần sau nó 16 pixel */
  -webkit-backdrop-filter: blur(16px); /* Hỗ trợ Safari */
  
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 var(--glass-glow);
  
  padding: 20px;
  color: var(--text-primary);
}
```

---

## 4. UI Assets Download (Danh sách Tài nguyên)

Dưới đây là các ảnh mình đã render sẵn cho bạn. Chúng đều chạy nền tối (Đen), nếu bạn ráp vào app, bạn có thể thiết lập `mix-blend-mode: screen;` hoặc `mix-blend-mode: plus-lighter` trên Web/Unity để lọc bỏ nền đen, giữ lại vệt sáng của icon.

| Tên Asset | Chức năng (Gợi ý) | Hình ảnh | Đường dẫn Tải file (File gốc) |
| :--- | :--- | :---: | :--- |
| **App Background** | Dùng làm hình nền chính, bao chứa không gian 3D. Rất sâu và có họa tiết lưới chìm y khoa. | ![App Background](C:\Users\Admin\.gemini\antigravity\brain\6b8fe986-7aef-4a2d-8a39-9dfa684be8c1\app_background_dark_medical_1773300936663.png) | [app_background.png](file:///C:/Users/Admin/.gemini/antigravity/brain/6b8fe986-7aef-4a2d-8a39-9dfa684be8c1/app_background_dark_medical_1773300936663.png) |
| **Skeletal Icon** | Đại diện hệ Xương (Cyan) | ![Skeletal](C:\Users\Admin\.gemini\antigravity\brain\6b8fe986-7aef-4a2d-8a39-9dfa684be8c1\icon_skeletal_cyan_1773300966249.png) | [icon_skeletal.png](file:///C:/Users/Admin/.gemini/antigravity/brain/6b8fe986-7aef-4a2d-8a39-9dfa684be8c1/icon_skeletal_cyan_1773300966249.png) |
| **Muscular Icon** | Đại diện hệ Cơ (Red/Orange) | ![Muscular](C:\Users\Admin\.gemini\antigravity\brain\6b8fe986-7aef-4a2d-8a39-9dfa684be8c1\icon_muscular_red_1773300987462.png) | [icon_muscular.png](file:///C:/Users/Admin/.gemini/antigravity/brain/6b8fe986-7aef-4a2d-8a39-9dfa684be8c1/icon_muscular_red_1773300987462.png) |
| **Cardio Icon** | Đại diện hệ Tuần hoàn / Tim mạch (Pink) | ![Heart](C:\Users\Admin\.gemini\antigravity\brain\6b8fe986-7aef-4a2d-8a39-9dfa684be8c1\icon_heart_pink_1773301010222.png) | [icon_heart.png](file:///C:/Users/Admin/.gemini/antigravity/brain/6b8fe986-7aef-4a2d-8a39-9dfa684be8c1/icon_heart_pink_1773301010222.png) |
| **Nervous Icon** | Đại diện hệ Thần kinh / Bộ não (Purple) | ![Brain](C:\Users\Admin\.gemini\antigravity\brain\6b8fe986-7aef-4a2d-8a39-9dfa684be8c1\icon_brain_purple_1773301031783.png) | [icon_brain.png](file:///C:/Users/Admin/.gemini/antigravity/brain/6b8fe986-7aef-4a2d-8a39-9dfa684be8c1/icon_brain_purple_1773301031783.png) |

> [!TIP]
> **Tricks cho Icon:** Các icon này sử dụng nền đen thuần khiết (Pitch black). Khi bạn import vào CSS hay Unity/Godot, bạn chỉ đặt thuộc tính blend mode là `screen` hoặc `additive`, phần nền đen sẽ hoàn toàn biến mất, chỉ còn lại viền neon phát sáng chìm vào nền app của bạn!

## 5. Cấu trúc Layout Khuyến nghị
1.  **Top Left:** Logo dự án chữ trắng tinh giản, nhỏ gọn.
2.  **Top Right:** Các nút Setting, Info (`?`) và Account.
3.  **Right Sidebar (`glass-panel` dài sọc):** Đây là *Control Center*. Đặt các nút Icon (Hệ xương, hệ cơ...) xếp theo chiều dọc. Người dùng bấm vào để hiện/ẩn lớp 3D tương ứng.
4.  **Bottom Center:** Thanh ngang (Bottom bar) chứa các nút view camera (Mặt trước, Trái, Phải, Chạy Animation).
5.  **Left Sidebar (Hiển thị khi nhấp chọn chi tiết):** Đóng vai trò là Info Card. Khi người dùng click vào "Quả tim" trên mô hình, Left Panel trượt ra (slide) hiển thị chữ to "Cardiovascular System", giải phẫu và chỉ số nhip tim ảo.

---
*Vui lòng xem kỹ file tổng hợp này, nếu bạn muốn copy trực tiếp các icon/ảnh ra Desktop hoặc thư mục dự án của bạn (ví dụ `d:\rexon\assets`), hãy bảo mình một tiếng mình sẽ dùng lệnh copy tự động qua luôn nhé!*
