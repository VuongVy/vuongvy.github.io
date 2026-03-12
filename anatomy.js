document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.part-toggle');
    const modelViewer = document.getElementById('anatomy-model');
    const modelContainer = document.getElementById('model-container');
    const hotspots = document.querySelectorAll('.hotspot');

    // Mặc định cho phép người dùng Double Click ở bất cứ khoảng trống nào trên màn hình để reset camera
    modelContainer.addEventListener('dblclick', () => {
        if(modelViewer) {
            // Reset góc nhìn ban đầu
            modelViewer.cameraOrbit = '0deg 75deg 105%';
            modelViewer.cameraTarget = 'auto auto auto';
        }
    });

    toggles.forEach(toggle => {
        toggle.addEventListener('change', () => {
             // Để mô hình tĩnh mô phỏng ẩn/hiện logic khi lập trình Blueprint ở UE5 sau này
             // Ví dụ: Unreal Engine: if (toggle.value == 'bone' && checked == true) { SetVisibility(BoneMesh, True); }
        });
    });

    // Cài đặt Hotspot click - Bật tắt Panel
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', (e) => {
            // Tắt nội dung của các tấm Hotspot panel khác đi trước
            hotspots.forEach(otherHotspot => {
                const otherPanel = otherHotspot.querySelector('.hotspot-panel');
                if (otherHotspot !== hotspot && otherPanel) {
                    otherPanel.classList.remove('visible');
                    otherHotspot.querySelector('.hotspot-dot').classList.remove('active');
                }
            });

            // Sau đó bật bảng panel của cái mà người dùng bấm vào
            const panel = hotspot.querySelector('.hotspot-panel');
            const dot = hotspot.querySelector('.hotspot-dot');
            if (panel) {
                panel.classList.toggle('visible');
                dot.classList.toggle('active');
            }
            e.stopPropagation(); // Ngăn kéo camera background
        });
    });

    // Nếu click chỗ khác không phải hotspot thì đóng tất cả panel lại
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hotspot')) {
             hotspots.forEach(hotspot => {
                 const panel = hotspot.querySelector('.hotspot-panel');
                 const dot = hotspot.querySelector('.hotspot-dot');
                 if(panel) panel.classList.remove('visible');
                 if(dot) dot.classList.remove('active');
             });
        }
    });

});
