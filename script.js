window.addEventListener("load", updateWidth);
window.addEventListener("resize", updateWidth);

function updateWidth() {
  const windowWidthDisplay = document.getElementById("window-width-display");
  const contentWidthDisplay = document.getElementById("content-width-display");

  const contentElement = document.querySelector(".content-a-type");

  // 창 가로값 및 콘텐츠 영역 가로값 표시
  windowWidthDisplay.textContent = `브라우저 width: ${window.innerWidth}px`;
  contentWidthDisplay.textContent = `콘텐츠 width: ${contentElement.offsetWidth}px`;
}
