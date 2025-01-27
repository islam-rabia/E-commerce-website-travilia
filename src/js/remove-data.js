import { changeText } from "./change-text.js";
import { counterShopping } from "./counter-shopping.js";
import { handleDataShopping } from "./handle-shopping.js";

function removeDataInLocalStorage(wishList, index) {
  wishList.splice(index, 1);
  handleDataShopping(wishList);

  localStorage.setItem("dataCart", JSON.stringify(wishList));

  changeText();
  counterShopping();
}

export { removeDataInLocalStorage };
