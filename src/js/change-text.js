function changeText() {
  let h3 = document.querySelector(".counter-products h3");
  let getDataCart = JSON.parse(localStorage.getItem("dataCart")) || [];
  h3.innerHTML = `My Cart (${getDataCart.length})`;
}

export { changeText };
