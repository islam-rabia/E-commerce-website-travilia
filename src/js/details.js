import { navbarAction } from "./navbar.js";
import { scrollFunc } from "./scroll-page.js";
import { handleData } from "./handle-details-data.js";
import { counterShopping } from "./counter-shopping.js";
import { handleUser } from "./handle-user.js";
import { signOut } from "./sign-out.js";
import { addActiveLive } from "./add-live.js";

scrollFunc();
navbarAction();
counterShopping();

let getData = JSON.parse(localStorage.getItem("details")) || [];
handleData(getData);

function changeQuantityUi() {
  let dataCart = JSON.parse(localStorage.getItem("dataCart")) || [];
  let btn = document.querySelector(".cart");

  let product = dataCart.find(
    (ele) => ele.id === Number(btn.getAttribute("data-ion"))
  );

  if (product) {
    let productQuantity = document.querySelector(".product-details input");
    productQuantity.value = product.quantity;
  }
}

changeQuantityUi();

let getDataProduct = JSON.parse(localStorage.getItem("dataCart")) || [];
let countCart = document.querySelector(".countCart");
if (getDataProduct.length === 0) {
  countCart.style.display = "none";
} else {
  countCart.style.display = "flex";
}

handleUser();
signOut();
addActiveLive();
