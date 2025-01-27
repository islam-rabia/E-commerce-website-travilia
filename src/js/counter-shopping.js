function counterShopping() {
  let cart = document.querySelector(".cart-div .countCart span");
  let getDataCart = JSON.parse(localStorage.getItem("dataCart")) || [];

  cart.innerHTML = getDataCart.length;
}

export { counterShopping };
