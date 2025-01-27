import { counterProducts } from "./counter-loved.js";

let wishData;
function getDataInLocalStorage() {
  let getData = JSON.parse(localStorage.getItem("lovedProduct")) || [];

  if (getData) {
    wishData = getData;
    handleData(getData);
  }
}

let app = document.querySelector(".product-cart-list");

function handleData(data) {
  app.innerHTML = data
    .map((item, index) => {
      let { id, title, img, price, city } = item;

      return `
        <li class="product flex flex-col">
          <figure>
            <img class="w-full h-full" src="${img}" alt="destination image"/>
          </figure>
          <div class="product-title">
            <h3 class="title" data-ion="${index}">${title}</h3>
            <p>${city}</p>
          </div>
          <div class="price">
            <p>$${price}</p>
          </div>
          <div class="description-loved">
            <button class="loved">Add To Cart</button>
            <button class="favorite" data-ion="${index}" data-ind="${id}">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
        </li>
      `;
    })
    .join("");

  let btns = document.querySelectorAll(".favorite");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = Number(btn.getAttribute("data-ion"));
      let id = btn.getAttribute("data-ind");
      removeDataInLocalStorage(index, id);
    });
  });
}

function removeDataInLocalStorage(index, id) {
  wishData.splice(index, 1);
  handleData(wishData);
  localStorage.setItem("lovedProduct", JSON.stringify(wishData));

  let getData = JSON.parse(localStorage.getItem("saveButtonClick")) || [];
  getData = getData.filter((item) => item !== id);
  localStorage.setItem("saveButtonClick", JSON.stringify(getData));

  let isActive = JSON.parse(localStorage.getItem("lovedProduct"));
  let liveIcon = document.querySelector(".loved-div .live");

  if (isActive.length > 0) {
    liveIcon.classList.add("active");
  } else {
    liveIcon.classList.remove("active");
  }

  counterProducts();
}

export { getDataInLocalStorage };
