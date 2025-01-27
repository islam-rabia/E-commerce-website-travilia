function counterProducts() {
  let counterProducts = document.querySelector(".counter-products h3");
  let getData = JSON.parse(localStorage.getItem("lovedProduct")) || [];

  counterProducts.innerHTML = `My Loved (${getData.length})`;
}

export { counterProducts };
