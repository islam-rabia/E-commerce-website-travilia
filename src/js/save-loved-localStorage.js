let wishList = JSON.parse(localStorage.getItem("lovedProduct")) || [];
function saveLovedInLocalStorage(dataLoved, index) {
  let duplicate = wishList.some((ele) => ele === dataLoved[index]);

  if (!duplicate) {
    wishList.push(dataLoved[index]);
    localStorage.setItem("lovedProduct", JSON.stringify(wishList));
  }
}

export { saveLovedInLocalStorage };
