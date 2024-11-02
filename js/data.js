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
          <div class="product-card-info">
           <p class="product-card-brand">${product.frontBrandNameKor} (${product.frontBrandNameEng})</p>
           <p class="product-card-title">${product.itemName}</p>
           <div class="product-card-price">
            <p class="product-card-discount">${product.lastSalePercent}%</p>
            <p>${product.consumerPrice}원</p>
           </div>
           <div class="product-card-user">

            <div class="product-card-like">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 6.4a5 5 0 0 0-4.5-2.9 5 5 0 0 0-5 5.2c0 1.1.5 2.1.9 2.8a8 8 0 0 0 .9 1.2l7.7 8 7.7-8a4.5 4.5 0 0 0 .3-.3l.6-.9c.4-.7.9-1.7.9-2.8a5 5 0 0 0-5-5.2 5 5 0 0 0-4.5 3Z" clip-rule="evenodd"/>
              </svg>   
              <p>${product.heartCount}</p>
            </div>

            <div class="product-card-review">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="m9 8.6-7 1 5 5.2L5.8 22l6.2-3.4 6.2 3.4-1.2-7.2 5-5.2-7-1L12 2 9 8.6Z" clip-rule="evenodd"/>
              </svg>
              <p> ${product.reviewAveragePoint}(${product.reviewCount})</p> 
            </div>
         
           </div>
       
          </div>
       
      `;

    productListContainer.appendChild(productCard);
  });
}
