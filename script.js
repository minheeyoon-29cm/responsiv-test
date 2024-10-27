window.addEventListener("load", () => {
  initCarousel();
});

// 캐러셀 초기화 함수
function initCarousel() {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-next-btn");
  const prevButton = document.querySelector(".carousel-prev-btn");

  let currentSlideIndex = 0;

  // 슬라이드 이동 함수
  function moveToSlide(targetIndex) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * targetIndex}px)`;
    currentSlideIndex = targetIndex;
  }

  // 다음 슬라이드로 이동
  nextButton.addEventListener("click", () => {
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    moveToSlide(nextIndex);
  });

  // 이전 슬라이드로 이동
  prevButton.addEventListener("click", () => {
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
  });
}

// 로고 슬라이더
window.addEventListener("load", () => {
  initLogoSlider(); // 로고 슬라이더 초기화
  updateWidths(); // 섹션 너비 업데이트
});

window.addEventListener("resize", () => {
  updateLogoSlider(); // 로고 슬라이더 업데이트
  updateWidths(); // 섹션 너비 업데이트
});

// 로고 슬라이더 초기화 함수
function initLogoSlider() {
  const track = document.querySelector(".logo-slide-track");

  if (track) {
    const originalLogos = Array.from(track.children);
    const trackWidth = calculateTrackWidth(originalLogos);

    // 슬라이더를 두 번 복제하여 매끄럽게 반복되도록 설정
    originalLogos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });

    // 트랙의 너비 설정
    track.style.width = `${trackWidth * 2}px`;

    // 애니메이션 시작
    restartAnimation(track);
  }
}

// 슬라이더 업데이트 함수
function updateLogoSlider() {
  const track = document.querySelector(".logo-slide-track");

  if (track) {
    const logos = Array.from(track.children).slice(
      0,
      track.children.length / 2
    );
    const trackWidth = calculateTrackWidth(logos);

    track.style.width = `${trackWidth * 2}px`; // 두 번 복제된 트랙 너비 설정
    restartAnimation(track);
  }
}

// 트랙 너비 계산 함수
function calculateTrackWidth(logos) {
  return logos.reduce((totalWidth, logo) => {
    const style = window.getComputedStyle(logo);
    const marginRight = parseFloat(style.marginRight);
    return totalWidth + logo.offsetWidth + marginRight;
  }, 0);
}

// 애니메이션 재시작 함수
function restartAnimation(track) {
  track.style.animation = "none"; // 애니메이션 초기화
  void track.offsetWidth; // 리플로우 트리거
  track.style.animation = "scroll-x var(--duration) linear infinite"; // 애니메이션 재시작
}
window.addEventListener("load", () => {
  initCarousel();
  updateWidths(); // 모든 너비 업데이트
});

window.addEventListener("resize", updateWidths); // 브라우저 리사이즈 시 업데이트

// 각 섹션의 너비를 실시간으로 업데이트하는 함수
function updateWidths() {
  const heroContent = document.querySelector(".hero-content");
  const plpContent = document.querySelector(".plp-content");
  const myContent = document.querySelector(".my-content");
  const carouselContents = document.querySelector(".carousel-track-container");

  // 각 섹션의 너비 측정
  const heroWidth = heroContent ? heroContent.offsetWidth : 0;
  const plpWidth = plpContent ? plpContent.offsetWidth : 0;
  const myWidth = myContent ? myContent.offsetWidth : 0;
  const carouselWidth = carouselContents ? carouselContents.offsetWidth : 0;
  const browserWidth = window.innerWidth;

  // HTML에 업데이트된 너비 표시
  document.getElementById("hero-width").textContent = heroWidth;
  document.getElementById("plp-width").textContent = plpWidth;
  document.getElementById("my-width").textContent = myWidth;
  document.getElementById("carousel-width").textContent = carouselWidth;
  document.getElementById("browser-width").textContent = browserWidth;

  // 콘솔에 너비 출력
  console.log(
    `브라우저 너비: ${browserWidth}px, Hero: ${heroWidth}px, PLP: ${plpWidth}px, My: ${myWidth}px, Carousel: ${carouselWidth}px`
  );
}
