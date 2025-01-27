import { navbarAction } from "./navbar.js";
import "./handle-data.js";
import "./counter.js";
import { scrollFunc } from "./scroll-page.js";
import { counterShopping } from "./counter-shopping.js";
import { handleUser } from "./handle-user.js";
import { signOut } from "./sign-out.js";

navbarAction();
scrollFunc();
counterShopping();
handleUser();
signOut();

let getData = JSON.parse(localStorage.getItem("dataCart")) || [];
let countCart = document.querySelector(".countCart");
if (getData.length === 0) {
  countCart.style.display = "none";
} else {
  countCart.style.display = "flex";
}
