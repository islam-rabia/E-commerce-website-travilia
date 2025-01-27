import { counterShopping } from "./counter-shopping.js";
import { getDataShoppingInLocalStorage } from "./handle-shopping.js";
import { changeText } from "./change-text.js";
import { navbarAction } from "./navbar.js";
import { scrollFunc } from "./scroll-page.js";
import { orderCart } from "./order-summary.js";
import { handleUser } from "./handle-user.js";
import { signOut } from "./sign-out.js";
import { addActiveLive } from "./add-live.js";

counterShopping();
changeText();

window.addEventListener("DOMContentLoaded", () => {
  getDataShoppingInLocalStorage();
});

scrollFunc();
navbarAction();
orderCart();

let total = document.querySelector(".total span");
let getData = JSON.parse(localStorage.getItem("dataCart")) || [];
if (getData.length === 0) {
  total.innerHTML = 0;
}

let countCart = document.querySelector(".countCart");
if (getData.length === 0) {
  countCart.style.display = "none";
} else {
  countCart.style.display = "flex";
}

handleUser();
signOut();
addActiveLive();
