import { saveButtonClick } from "./add-active.js";
import { generateData } from "./handle-details-data.js";
import { addActiveLive } from "./add-live.js";
import { saveLovedInLocalStorage } from "./save-loved-localStorage.js";

let result = new XMLHttpRequest();
result.open("GET", "json/data.json");
result.responseType = "json";
result.send();

let dataLoved;
result.onload = () => {
  if (result.readyState === 4 && result.status === 200) {
    let data = result.response;
    dataLoved = data;
    handleData(data);
    saveButtonClick();
    addActiveLive();
  } else {
    console.error("Not Found Data");
  }
};

let app = document.querySelector(".products-list");

function handleData(data) {
  app.innerHTML = data
    .map((item, index) => {
      let { id, title, img, price, city, star, preview } = item;

      return `
      <li class="product flex flex-col">
        <figure>
          <img class="w-full h-full" src="${img}" alt="destination image"/>
        </figure>
        <div class="product-title">
          <h3 class="title" data-ion="${index}">${title}</h3>
          <p>${city}</p>
          <div class="description">
            <div class="star flex items-center justify-center">
              <ion-icon name="star"></ion-icon><span>${star}</span>
            </div>
            <div class="preview">(${preview} Preview)</div>
          </div>
        </div>
        <div class="price">
          <p>$${price}</p>
        </div>
        <button class="favorite" data-ion="${id}" data-ind="${index}">
          <ion-icon name="heart-outline"></ion-icon>
        </button>
      </li>
    `;
    })
    .join("");

  app.addEventListener("click", (event) => {
    let activeDiv = event.target.closest(".title");

    if (activeDiv) {
      let index = Number(activeDiv.dataset.ion);
      generateData(index);
      setTimeout(() => {
        location.href = "details.html";
      }, 0);
    }
  });

  app.addEventListener("click", (event) => {
    let activeDiv = event.target.closest(".favorite");

    if (activeDiv) {
      let index = activeDiv.dataset.ind;

      if (localStorage.getItem("SignAccount")) {
        saveLovedInLocalStorage(dataLoved, index);
      } else {
        location.href = "signUp.html";
      }
    }
  });
}
