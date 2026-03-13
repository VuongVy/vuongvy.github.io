# Bảng Thông Số Khởi Tạo Giao Diện UMG (Unreal Engine UI)

Tài liệu này hỗ trợ bạn ánh xạ và dựng lại chính xác giao diện từ bản Web sang hệ thống **UMG (Unreal Motion Graphics)** trên Unreal Engine 5.

---

## 1. Mạch Thông Tin Tổng Thể (Global Settings)

| Thuộc Tính (Property) | Giá Trị (Value) | Tham Khảo (Note) |
| :--- | :--- | :--- |
| **Kích Thước Thiết Kế** | `1920 x 1080` | Hoặc đáp ứng Scale to Fit theo Tablet. |
| **Màu Nhấn (Accent Color)** | `#00B4D8` | Màu Xanh Ngọc chuẩn Y tế (Medical Teal). |
| **Trắng (White Color)** | `#FFFFFF` | Nền các thanh panel mờ. |
| **Đen Tối (Dark Color)** | `#0A0A0F` | Nền các popup panel thông tin. |
| **Font Chữ** | `Inter` hoặc `Roboto` | Sử dụng Regular/Medium, tải .ttf vào UE5. |

---

## 2. Bảng Điều Khiển Cạnh Dài Bên Phải (Side Control Panel)

Gắn 4 nút chuyển đổi dạng danh sách dọc. Dùng một nguyên mẫu **BackgroundBlur** chứa một **VerticalBox**.

| Lớp Widget (Component) | Thuộc Tính UMG (UMG Property) | Giá Trị (Value) |
| :--- | :--- | :--- |
| **1. Background Blur** | `Anchors` | **Right - Center** (Lề Phải - Giữa) |
| | `Alignment` | `X: 1.0` / `Y: 0.5` |
| | `Position X` (Cách lề phải) | `-32 px` |
| | `Position Y` (Độ dời trục dọc) | `0 px` |
| | `Blur Strength` | `24` |
| | `Tint Color / Opacity` | Tiết diện Trắng `#FFFFFF`, Alpha `0.4` |
| **2. Border** (Bên trong Blur) | `Padding` | Top/Bottom: `24px`, Left/Right: `16px` |
| | `Brush -> Corner Radius` | Bo góc chuẩn `28px` |
| | `Brush -> Draw As` | `Rounded Box` |
| | `Brush Color` (Outline) | Viền Trắng(`#FFFFFF`), Alpha `0.6` (độ mỏng 1px) |
| **3. Vertical Box** | `Alignment` | `Center` |
| | `Slot Padding` (Cách nhau) | Top+Bottom = `8px` (Tạo Gap `16px` mỗi nút) |

---

## 3. Bản Mẫu Nút Tương Tác Cỡ Lớn (Interactive Toggle Tile)

Tạo **User Widget** riêng biệt tên `WBP_ToggleTile` sau đó kéo 4 cái vào Vertical Box bên trên.

| Thành Phần Widget | Thuộc Tính & State | Giá trị Normal (Chưa Chọn) | Giá trị Active (Khi Chọn) |
| :--- | :--- | :--- | :--- |
| **Size Box** (Gốc) | `Width Override` | `86 px` | `86 px` |
| | `Height Override` | `86 px` | `86 px` |
| **Button / Border** | `Background Color` | Trắng `#FFFFFF`, Alpha `0.45` | Trắng `#FFFFFF`, Alpha `1.0` (Đặc hoàn toàn) |
| | `Border Brush Color` | Transparent (Trong suốt) | Teal `#00B4D8` (Viền bo xanh 2px) |
| | `Corner Radius` | `18 px` | `18 px` |
| | `Transform Scale` | `(1.0, 1.0)` | `(1.05, 1.05)` (Phóng to 5%) |
| **Image** (Icon Nội Tạng) | `Size X & Y` | `32 px` x `32 px` | `32 px` x `32 px` |
| | `Tint Color` | Xám Đậm `#888888`, Alpha `0.4` | Teal `#00B4D8`, Alpha `1.0` |
| **Text Block** (Nhãn) | `Font Size` | `13 pt` (Regular/Medium) | `13 pt` (Bold/Semi-Bold) |
| | `Color and Opacity` | Đen `#000000`, Alpha `0.5` | Teal `#00B4D8`, Alpha `1.0` |

---

## 4. Các Điểm Click Lên Đối Tượng 3D (Hotspot Widgets)

Sử dụng **Widget Component** gắn trong Blueprint Actor/Character, space tính theo **Screen** (tự xoay theo camera) hướng về màn hình.

### A. Chấm Tròn Click Được (Hotspot Dot)
| Thuộc Tính (Property) | Cấu Hình Khuyên Dùng |
| :--- | :--- |
| **Loại Graphic** | Image có viền hoặc Canvas vẽ tay bo tròn Material |
| **Kích Thước Box** | `18px` x `18px` |
| **Màu Background (Thân)** | Teal `#00B4D8`, Alpha `0.6` |
| **Màu Stroke (Viền ngoài)**| Trắng `#FFFFFF`, Thickness: `2px` |
| **Khi Hover** | Đổi Alpha lên `1.0`, Transform Scale `1.2x` |
| **Khi Clicked (Active)** | Đổi viền bọc mờ sương Glow to. |

### B. Bảng Popup Thông Tin Bật Ra Kế Bên (Information Popup Panel)
Sử dụng hiệu ứng FadeIn xuất hiện `+X` hướng ngang so với chấm tròn.

| Lớp Widget | Cấu Hình UI/UX (UMG Settings) |
| :--- | :--- |
| **Neo (Alignment)** | Cố định cách `+48px` sang bên PHẢI, giật lên góc trên `+20px` (y = -20px) |
| **Background Blur + Border**| Size X: `280px`. Padding bọc ruột: `16px`. Corner Radius: `12px` |
| **Màu Nền Tối** | Đen Đục `#0A0A0F`, Alpha `0.85` (Background) + Outline Viền Trắng mờ Alpha `0.2` |
| **Tiêu Đề (Header Text)** | Font Size `18`, Bold. Màu sắc: Teal `#00B4D8` |
| **Miêu tả (Body Text)** | Font Size `14`, Light/Regular. Màu sắc: Trắng `#FFFFFF`, Alpha `0.85`. Bật tuỳ chọn `Auto Wrap Text`. |
