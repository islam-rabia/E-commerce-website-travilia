let wishList = JSON.parse(localStorage.getItem("dataCart")) || [];

function SaveDetailsInLocalStorage(data, index) {
  let itemToAdd = data.find((item) => item.id === index);
  if (!itemToAdd) {
    return;
  }

  let existingItem = wishList.find((item) => item.id === index);

  if (existingItem) {
    wishList = wishList.map((ele) =>
      ele.id === existingItem.id ? { ...ele, quantity: ele.quantity + 1 } : ele
    );
  } else {
    wishList.push({ ...itemToAdd, quantity: 1 });
  }

  localStorage.setItem("dataCart", JSON.stringify(wishList));
}

export { SaveDetailsInLocalStorage };
