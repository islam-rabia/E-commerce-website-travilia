import { removeDataInLocalStorage } from "./remove-data.js";
import { orderCart } from "./order-summary.js";

let wishList;
function getDataShoppingInLocalStorage() {
  let getDataShopping = JSON.parse(localStorage.getItem("dataCart")) || [];
  if (getDataShopping) {
    handleDataShopping(getDataShopping);
  }
  wishList = getDataShopping;
}

let productsCarts = document.querySelector(".product-cart-list");

function handleDataShopping(data) {
  productsCarts.innerHTML = data
    .map((item, index) => {
      let { id, title, img, price, quantity } = item;

      return `
        <li class="product-${id}">
        <figure>
          <img src="${img}" alt="" />
        </figure>
        <div class="product-title">
          <h3>${title}</h3>
          <p>Price: ${price}$</p>
          <div class="quantity">
            <span>Quantity: </span>
            <input type="text" value="${quantity}" />
          </div>
        </div>
        <button btn-ion="${index}" class="close-product">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </li>
      `;
    })
    .join("");

  let btns = document.querySelectorAll(".close-product");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = Number(btn.getAttribute("btn-ion"));
      removeDataInLocalStorage(wishList, index);
      orderCart();

      let getData = JSON.parse(localStorage.getItem("dataCart"));
      let countCart = document.querySelector(".countCart");
      if (getData.length === 0) {
        countCart.style.display = "none";
      } else {
        countCart.style.display = "flex";
      }
    });
  });
}

export { getDataShoppingInLocalStorage, handleDataShopping };
