window.addEventListener("load", () => {
  initLogoSlider(); // 로고 슬라이더 초기화
  updateWidths(); // 섹션 너비 업데이트
});

window.addEventListener("resize", updateWidths); // 브라우저 크기 변경 시 너비 업데이트

// 로고 슬라이더를 복제하여 초기화하는 함수
function initLogoSlider() {
  const marqueeGroups = document.querySelectorAll(".logo-slide-track");

  marqueeGroups.forEach((group) => {
    const clone = group.cloneNode(true); // 로고 그룹 복제
    group.parentNode.appendChild(clone); // 복제된 그룹 추가
  });
}

// 각 섹션의 너비를 실시간으로 업데이트하는 함수
function updateWidths() {
  const heroContent = document.querySelector(".hero-content"); // 히어로 섹션
  const plpContent = document.querySelector(".plp-content"); // PLP 섹션
  const myContent = document.querySelector(".my-content"); // 마이페이지 섹션

  const heroWidth = heroContent.offsetWidth; // 히어로 섹션의 너비
  const plpWidth = plpContent.offsetWidth; // PLP 섹션의 너비
  const myWidth = myContent.offsetWidth; // 마이페이지 섹션의 너비
  const browserWidth = window.innerWidth; // 브라우저 너비

  // HTML에 각 섹션의 너비 표시
  document.getElementById("hero-width").textContent = heroWidth;
  document.getElementById("plp-width").textContent = plpWidth;
  document.getElementById("my-width").textContent = myWidth;
  document.getElementById("browser-width").textContent = browserWidth;

  // 콘솔에 너비 정보 출력
  console.log(
    `브라우저 너비: ${browserWidth}px, Hero: ${heroWidth}px, PLP: ${plpWidth}px, My: ${myWidth}px`
  );
}
