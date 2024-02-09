const noBtn = document.getElementById("noBtn");
const okBtn = document.getElementById("okBtn");
const area = document.getElementById("area");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

let clickCount = 0;
let scale = 0.9; // Giảm dần từ 0.9

noBtn.addEventListener("click", () => {
    clickCount++;
    setRandomPosition(); // Cập nhật để sử dụng kích thước của 'area'
    noBtn.style.transform = `scale(${scale})`;
    scale -= 0.1; // Giảm kích thước cho lần tiếp theo
    okBtn.style.transform = "scale(1.2)"; // Đặt lại nếu muốn okBtn thay đổi kích thước
    area.style.justifyContent = "center";
    image1.style.display = "none";
    image2.style.display = "block";

});

okBtn.addEventListener("click", () => {
  const thankYouPopup = document.getElementById("thankYouPopup");
  thankYouPopup.classList.add("popup-show");
  setTimeout(() => {
    thankYouPopup.classList.remove("popup-show");
  }, 2000); // 2 seconds
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setRandomPosition() {
  const areaRect = area.getBoundingClientRect();
  // Đảm bảo tính toán không gian có sẵn sau khi trừ đi kích thước của nút
  const maxX = areaRect.width - noBtn.offsetWidth;
  const maxY = areaRect.height - noBtn.offsetHeight;

  // Tính toán vị trí mới dựa trên không gian có sẵn
  const newX = getRandomNumber(0, maxX);
  const newY = getRandomNumber(0, maxY);

  // Sử dụng position: absolute; để nút có thể di chuyển tự do trong #area
  noBtn.style.position = 'absolute'; // Đảm bảo nút có thể di chuyển tự do
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}
