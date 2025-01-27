function orderCart() {
  let subTotal = document.querySelector(".sub-total span");
  let total = document.querySelector(".total span");
  let shipping = document.querySelector(".shipping-div span");
  let sales = document.querySelector(".sales span");
  let quantity = JSON.parse(localStorage.getItem("dataCart")) || [];
  let local = JSON.parse(localStorage.getItem("dataCart")) || [];

  let count = 0;
  quantity.map((item) => {
    let sub = item.quantity * item.price;
    count += sub;
  });
  subTotal.innerHTML = count;

  let totalSal =
    Number(subTotal.innerHTML) +
    Number(shipping.innerHTML) -
    Number(sales.innerHTML);
  total.innerHTML = totalSal;

  if (local.length === 0) {
    total.innerHTML = 0;
  }
}

export { orderCart };
