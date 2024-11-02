// data.js

// PDP 데이터를 불러와 pdp.html에 표시하는 함수
async function loadPDPContent() {
  const response = await fetch("data/pdp.json");
  const { data } = await response.json();

  // JSON 데이터로부터 필요한 정보를 추출하여 페이지에 표시
  document.getElementById("product-title").textContent = data.itemName;
  document.getElementById(
    "product-price"
  ).textContent = `${data.sellPrice}원 (정가 ${data.consumerPrice}원, 할인율 ${data.discountRate}%)`;
  document.getElementById(
    "product-brand"
  ).textContent = `${data.frontBrand.brandNameKor} (${data.frontBrand.brandNameEng}) - ${data.frontBrand.subCopy}`;
  document.getElementById("product-description").innerHTML =
    data.itemDescriptions;

  // 이미지가 있을 경우 이미지 추가
  const productImage = document.getElementById("product-image");
  productImage.src = `https://img.29cm.co.kr${data.itemImages[0].imageUrl}`;
  productImage.alt = data.itemName;
}

// 상품 리스트 데이터를 불러와 my.html에 표시하는 함수
async function loadProductList() {
  const response = await fetch("data/productList.json");
  const { data } = await response.json();

  const productListContainer = document.querySelector(".product-list");

  // JSON 데이터의 products 배열을 순회하여 각 상품 카드를 동적으로 생성
  data.products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
          <img src="https://img.29cm.co.kr${product.imageUrl}" alt="${product.itemName}">
          <h2>${product.itemName}</h2>
          <p>브랜드: ${product.frontBrandNameKor} (${product.frontBrandNameEng})</p>
          <p>정가: ${product.consumerPrice}원</p>
          <p>할인가: ${product.lastSalePrice}원 (${product.lastSalePercent}% 할인)</p>
          <p>리뷰: ${product.reviewCount}개, 평점: ${product.reviewAveragePoint}</p>
          <p>좋아요: ${product.heartCount}</p>
      `;

    productListContainer.appendChild(productCard);
  });
}
