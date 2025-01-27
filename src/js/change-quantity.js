function changeQuantity(index) {
  let getData = JSON.parse(localStorage.getItem("dataCart"));
  let product = getData.find((ele) => ele.id === index);

  if (product) {
    let productQuantity = document.querySelector(".product-details input");
    productQuantity.value = product.quantity;
  }
}

export { changeQuantity };
