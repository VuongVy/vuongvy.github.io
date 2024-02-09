const noBtn = document.getElementById("noBtn");
const okBtn = document.getElementById("okBtn");
const area = document.getElementById("area");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

let clickCount = 0;
let countSc = 4;

noBtn.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 1) {
    const btnBlock = document.getElementById("area");
    const btn1 = document.querySelector(".btn1");
    const btn2 = document.querySelector(".btn2");
    btnBlock.insertBefore(btn2, btn1); // Đổi chỗ vị trí của hai button
  } else if (clickCount === 2) {
    setRandomPosition(clickCount);
    noBtn.style.transform = "scale(0.8)";
    okBtn.style.transform = "scale(1.2)";
    area.style.justifyContent = "center";
    image1.style.display = "none";
    image2.style.display = "block";
  } else if (clickCount <= 7) {
    setRandomPosition(clickCount);
    countSc++;
    noBtn.style.transform = "scale(0.6)";
    okBtn.style.transform = `scale(1.${countSc})`;
  } else {
    noBtn.style.display = "none";
  }
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

function setRandomPosition(clickCount) {
  if (clickCount >= 2) {
    const screenWidth = window.innerWidth - 90;
    const screenHeight = window.innerHeight - 90;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const left = getRandomNumber(0, screenWidth - btnWidth);
    const top = getRandomNumber(0, screenHeight - btnHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${left}px`;
    noBtn.style.top = `${top}px`;
  }
}
