const response = await fetch('/products.json');
const json = await response.json();
console.log(json)


const bestGrid = document.getElementById("bestCardContainer");
const bestSlider = document.getElementById("bestSliderContainer");
const bestCardSliders = [...document.querySelectorAll('#bestSliderContainer')]
const cards = [...document.querySelectorAll('.card')]
const nextBtn = [...document.querySelectorAll('.nextBtn')]
const preBtn = [...document.querySelectorAll('.prevBtn')]

bestCardSliders.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener('click',() => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})

const createBestCard = book => {
  let bestCard = document.createElement("div");
  bestCard.classList.add("card");
  bestCard.innerHTML = `
        <div class="cardTitle">
          <h4>
            ${book.name}
          </h4>
        </div>
        <div class="cardImg">
          <img src="${book.imageUrl}" alt="${book.name}">
        </div>
        <button class="homeBtn">
          <a href="/productPage/product.html" target="_blank" rel="noopener noreferrer">
            View More
          </a>
        </button>
  `
  return bestCard
}

json.product.forEach(book => {
  if (book.category.includes("bestselling")){
    let card = createBestCard(book);
    bestGrid.appendChild(card);
  }if (book.category.includes("bestselling")){
    let card = createBestCard(book);
    bestSlider.appendChild(card);
  }
})


const gap = 16; 
const productSliderContainer = document.getElementById("productSliderContainer");
const productSlider = document.getElementById("productSlider")
const productLeftBtn = document.getElementById("btnLeft");
const productRightBtn = document.getElementById("btnRight");

const createProductCard = book => {
  let bestCard = document.createElement("div");
  bestCard.classList.add("cardContainer");
  bestCard.innerHTML = `
        <div class="card">
              <!-- card image -->
              <div class="cardImg" style="background-image: url(${book.imageUrl})"></div>
              <!-- btn of card -->
              <div class="cardBtm">
                <div class="left">
                  <!-- product details -->
                  <div class="details">
                    <h4 id="productName">
                      ${book.name}
                    </h4>
                    <p id="productPrice">
                      $${book.price}
                    </p>
                  </div>
                  <!-- cart icon -->
                  <div class="buy">
                    <button class="buyBtn">
                      <i class="fa-solid fa-cart-plus"></i>
                    </button>
                  </div>
                </div>
                <!-- added to cart animation -->
                <div class="right">
                  <div class="rightIcon">
                    <div class="done">
                      <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="clear">
                      <button id="clear">clear</button>
                    </div>
                    </div>
                    <div class="details">
                      <h4>${book.name}</h4>
                      <p>Added to your cart</p>
                    </div>
                  </div>
                </div>
            </div>
            <!-- information hover -->
            <div class="inside">
              <div class="insideIcons">
                <i class="fa-solid fa-circle-info"></i>
              </div>
              <div class="insideContent">
                <div>
                  <h4>Author:</h4>
                  <p id="author">${book.author}</p>
                </div>
                <div>
                  <h4>Genre:</h4>
                  <p id="genre">${book.genre}</p>
                </div>
                <div>
                  <h4>Summary:</h4>
                  <p id="summary">${book.summary}</p>
              </div>
              </div>
            </div>
          </div>
  `
  return bestCard
}

json.product.forEach(book => {
  if(book.category.includes('booktok')) {
    let card = createProductCard(book)
    productSlider.appendChild(card)
  }
})

productLeftBtn.addEventListener("click", () => {
  productSliderContainer.scrollLeft -= productCard[0].getBoundingClientRect().width + gap
})

productRightBtn.addEventListener("click", () => {
  productSliderContainer.scrollLeft += productCard[0].getBoundingClientRect().width + gap
})

const productCard = [...document.querySelectorAll(".cardContainer")];

// Product card added cart animation
const buyBtn = document.querySelectorAll(".buyBtn");
const cardBtm = document.querySelectorAll('.cardBtm');
const clearBtn = document.querySelectorAll("#clear");

Array.from(buyBtn).forEach((button, index) =>{
  button.addEventListener("click", function(){
    cardBtm[index].classList.toggle('clicked');
    // clearing added cart after 2.5s
    if(cardBtm[index].classList.contains('clicked')){
      setTimeout(() => {
        cardBtm[index].classList.remove('clicked');
      }, 2500);
    };
  });
})

Array.from(clearBtn).forEach(button => {
  button.addEventListener("click", function(){
    cardBtm.forEach(card => card.classList.remove('clicked'));
  });
})


