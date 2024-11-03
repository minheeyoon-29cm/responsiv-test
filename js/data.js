// PDP 데이터를 불러와 pdp.html에 표시하는 함수
async function loadPDPContent() {
  try {
    const response = await fetch("data/pdp.json");
    const { data } = await response.json();

    // 브랜드 카드 영역 설정
    const brandCard = document.querySelector(".brand-card");
    brandCard.innerHTML = `
      <img id="brand-logo" src="https://img.29cm.co.kr${data.frontBrand.frontBrandImages[0].fileUploadName}" alt="${data.frontBrand.brandNameKor} 로고" />
      <div class="brand-text">
       <div class="brand-title" id="product-brand">${data.frontBrand.brandNameKor}</div>
       <p id="product-brand">${data.frontBrand.subCopy}</p>
       <button>Brand Home</button>
      </div>
    `;

    // PDP 정보 영역 설정
    const pdpInformation = document.querySelector(".pdp-product-info");
    pdpInformation.innerHTML = `
      <img id="product-image" src="https://img.29cm.co.kr${data.itemImages[3].imageUrl}" alt="${data.itemName}" />
      
      <div class="product-text-info">
      <div class="product-title">
        <p id="product-title">${data.itemName}</p>
        <button class="like-button">
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
         <path fill="#000" fill-rule="evenodd" d="M8.8 5.6c-2.4 0-4.4 2-4.4 4.5 0 1 .4 1.8.9 2.6a7.8 7.8 0 0 0 .8 1L14 22l8-8.2a3.8 3.8 0 0 0 .2-.3l.5-.8a5 5 0 0 0 .9-2.6c0-2.5-2-4.5-4.4-4.5-2.3 0-4.3 2-4.3 4.5h-1.8c0-2.5-2-4.5-4.3-4.5ZM14 6.7a6 6 0 0 0-5.3-3 6.3 6.3 0 0 0-6.1 6.4 7 7 0 0 0 1 3.5A9.7 9.7 0 0 0 4.8 15l9.3 9.7 9.3-9.6a5 5 0 0 0 .3-.4l.7-1a7 7 0 0 0 1.1-3.6c0-3.5-2.7-6.4-6.1-6.4a6.1 6.1 0 0 0-5.3 3Z" clip-rule="evenodd"/>
         </svg>
       </button>
      </div>

      <div class="user-action">
       <div id="product-review"> 
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
         <path fill="#000" fill-rule="evenodd" d="m9 8.6-7 1 5 5.2L5.8 22l6.2-3.4 6.2 3.4-1.2-7.2 5-5.2-7-1L12 2 9 8.6Z" clip-rule="evenodd"/>
        </svg>       
       ${data.avgReviewPoint}
       </div>
       <p id="product-review">${data.reviewCount}개의 리뷰 보기</p>
      </div>

      <div class="pdp-pricing-info">
      <div class="user-pricing-info">
      <div class="sell-pricing-info">
        <p class="sell-pricing" id="product-price">${data.discountRate}%</p>
        <p id="product-price">${data.sellPrice}원</p> 
      </div>
      <p class="product-cost" id="product-price">${data.consumerPrice}원</p>
      </div>

      <button>쿠폰받기</button>
      </div>

      <div class="pdp-sub-info">
       <li>나의 구매 가격</li>
       <li>구매적립금</li>
       <li>무이자할부</li>
       <li>배송정보</li>
       <li>배송비</li>
       <li>와 같은 정보는 디자인 생략</li>
      </div>

      <select class="pdp-option">
       <option value="test1">옵션을 선택해주세요</option>
       <option value="test2">Test 2</option>
       <option value="test3">Test 3</option>
      </select>

      <div class="pdp-button-group">
       <button class="secondary">장바구니 담기</button>
       <button class="primary">바로 구매하기</button>
      </div>

      </div>
    `;

    // PDP 정보 영역 설정
    const pdpExplanation = document.querySelector(".pdp-product-explanation");
    pdpExplanation.innerHTML = `
        <p id="product-description">${data.itemDescriptions}</p>
        <p id="product-delivery-info">배송 정보: ${data.deliveryInfo}</p>
        `;
  } catch (error) {
    console.error("Failed to load PDP content:", error);
  }
}

// 페이지 로드 시 함수 실행
document.addEventListener("DOMContentLoaded", loadPDPContent);

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
