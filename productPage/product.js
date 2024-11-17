const response = await fetch('./products.json');
const json = await response.json();
console.log(json)

const productGrid = document.getElementById("productGrid");

const createCard = book => {
  let gridCard = document.createElement("div");
  gridCard.classList.add("gridCard");
  gridCard.innerHTML = `
    <div class="image">
          <img src="${book.imageUrl}" alt="${book.name}">
        </div>
        <div class="details">
          <h4>
            ${book.name}
          </h4>
          <h5>
            ${book.author}
          </h5>
          <p>
            ${book.coverType}
          </p>
          <p class="price">
            $${book.price}
          </p>
          <div class="btns">
          <div class="buyBtn">
            <button>
              Add to Cart
            </button>
          </div>
          <div class="wishBtn">
            <button>
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
          </div>
        </div>
  `
  return gridCard
}

json.product.forEach((book)=> {
  let card = createCard(book);
  productGrid.appendChild(card);
})