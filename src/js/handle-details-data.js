import { changeQuantity } from "./change-quantity.js";
import { counterShopping } from "./counter-shopping.js";
import { SaveDetailsInLocalStorage } from "./save-details-localstorage.js";

let dataDetails;
async function generateDataDetails() {
  let data = await fetch("json/data.json");
  let result = await data.json();

  dataDetails = result;
}

generateDataDetails();

async function generateData(index) {
  let result = await fetch("json/data.json");
  let data = await result.json();

  let saveData = [data[index]];

  localStorage.setItem("details", JSON.stringify(saveData));
}

let app = document.querySelector(".product-details .product-list");

function handleData(data) {
  app.innerHTML = data
    .map((item) => {
      let { id, title, img, description, price, city, quantity } = item;

      return `
        <li class="product-${id}">
          <figure>
            <img class="w-full h-full" src="${img}" alt="destination image">
          </figure>
          <div class="product-title">
            <span>${city}</span>
            <h3>${title}</h3>
            <div class="detail">
              <h4>Product Details</h4>
              <p>${description}</p>
            </div>
            <div class="description">
              <span>Price: $${price}</span>
              <input type="text" name="quantity" value="${quantity}">
            </div>
            <button class="cart" data-ion="${id}">Add To Cart</button>
          </div>
        </li>
      `;
    })
    .join("");

  app.addEventListener("click", (ele) => {
    let btn = ele.target.closest(".cart");

    if (btn) {
      let index = Number(btn.dataset.ion);
      if (localStorage.getItem("SignAccount")) {
        SaveDetailsInLocalStorage(dataDetails, index);
        changeQuantity(index);
        counterShopping();
      } else {
        location.href = "signUp.html";
      }

      let getDataProduct = JSON.parse(localStorage.getItem("dataCart"));
      let countCart = document.querySelector(".countCart");
      if (getDataProduct) {
        countCart.style.display = "flex";
      } else {
        countCart.style.display = "none";
      }
    }
  });
}

export { generateData, handleData };
