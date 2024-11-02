// 페이지 로드 시 실행되는 기본 스크립트
document.addEventListener("DOMContentLoaded", function () {
  console.log("페이지가 로드되었습니다.");
});

// 캐러셀
let currentSlide = 0;
const slidesToShow = 3; // 화면에 동시에 표시할 슬라이드 개수

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const carouselSlides = document.querySelector(".carousel-slides");

  if (slides.length === 0) return; // 슬라이드가 없을 경우 실행 중지

  const slideWidth = slides[0].offsetWidth + 20; // 슬라이드 너비 + margin
  const maxSlideIndex = slides.length - slidesToShow;

  // 슬라이드 인덱스를 범위 내로 제한
  if (index > maxSlideIndex) currentSlide = maxSlideIndex;
  else if (index < 0) currentSlide = 0;
  else currentSlide = index;

  const offset = -currentSlide * slideWidth;
  carouselSlides.style.transform = `translateX(${offset}px)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

// 초기화
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
