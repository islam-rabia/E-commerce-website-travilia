import { navbarAction } from "./navbar.js";
import { scrollFunc } from "./scroll-page.js";
import { counterShopping } from "./counter-shopping.js";
import { handleUser } from "./handle-user.js";
import { signOut } from "./sign-out.js";
import { getDataInLocalStorage } from "./get-loved-data.js";
import { addActiveLive } from "./add-live.js";
import { counterProducts } from "./counter-loved.js";

scrollFunc();
navbarAction();
counterShopping();
handleUser();
signOut();

let getDataProduct = JSON.parse(localStorage.getItem("dataCart")) || [];
let countCart = document.querySelector(".countCart");
if (getDataProduct.length === 0) {
  countCart.style.display = "none";
} else {
  countCart.style.display = "flex";
}

counterProducts();
getDataInLocalStorage();
addActiveLive();
