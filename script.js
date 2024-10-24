window.addEventListener("load", updateWidth);
window.addEventListener("resize", updateWidth);

function updateWidth() {
  const windowWidthDisplay = document.getElementById("window-width-display");
  const sectionWidthDisplay = document.getElementById("section-width-display");
  const contentsWidthDisplay = document.getElementById("contents-width-display");

  const contentElement = document.querySelector(".section-area");
  const contentContentsElement = document.querySelector(".plp-content");

  // 창 가로값 및 콘텐츠 영역 가로값 표시
  windowWidthDisplay.textContent = `브라우저 width: ${window.innerWidth}px`;
  sectionWidthDisplay.textContent = `하나의 섹션 width: ${contentElement.offsetWidth}px`;
  contentsWidthDisplay.textContent = `섹션안의 콘텐츠 width: ${contentContentsElement.offsetWidth}px`;
}

window.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector('.logo-slide-track');
  
  if (track) {
    const logos = Array.from(track.children);
    const originalLength = logos.length;

    // 원본 로고들을 복제
    logos.forEach(logo => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });

    // 슬라이드 트랙의 너비를 복제된 로고들에 맞게 설정
    const trackWidth = 100 * (originalLength * 2) + "px";
    track.style.width = trackWidth;

  } else {
    console.error("슬라이드 트랙을 찾을 수 없습니다.");
  }
});
