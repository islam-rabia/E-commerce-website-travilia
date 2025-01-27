import{counterProducts}from"./counter-loved.js";import{counterShopping}from"./counter-shopping.js";import{SaveDetailsInLocalStorage}from"./save-details-localstorage.js";let wishData;function getDataInLocalStorage(){var t=JSON.parse(localStorage.getItem("lovedProduct"))||[];t&&handleData(wishData=t)}let app=document.querySelector(".product-cart-list");function handleData(t){app.innerHTML=t.map((t,e)=>{var{id:t,title:a,img:o,price:l,city:i}=t;return`
        <li class="product flex flex-col">
          <figure>
            <img class="w-full h-full" src="${o}" alt="destination image"/>
          </figure>
          <div class="product-title">
            <h3 class="title" data-ion="${e}">${a}</h3>
            <p>${i}</p>
          </div>
          <div class="price">
            <p>$${l}</p>
          </div>
          <div class="description-loved">
            <button class="loved" data-ion="${t}">Add To Cart</button>
            <button class="favorite" data-ion="${e}" data-ind="${t}">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
        </li>
      `}).join(""),document.querySelectorAll(".favorite").forEach(t=>{t.addEventListener("click",()=>{removeDataInLocalStorage(Number(t.getAttribute("data-ion")),t.getAttribute("data-ind"))})}),app.addEventListener("click",t=>{var t=t.target.closest(".loved");t&&(t=Number(t.dataset.ion),localStorage.getItem("SignAccount")?(SaveDetailsInLocalStorage(wishData,t),counterShopping()):location.href="signUp.html",t=JSON.parse(localStorage.getItem("dataCart")),document.querySelector(".countCart").style.display=t?"flex":"none")})}function removeDataInLocalStorage(t,e){wishData.splice(t,1),handleData(wishData),localStorage.setItem("lovedProduct",JSON.stringify(wishData));let a=JSON.parse(localStorage.getItem("saveButtonClick"))||[];a=a.filter(t=>t!==e),localStorage.setItem("saveButtonClick",JSON.stringify(a));var t=JSON.parse(localStorage.getItem("lovedProduct")),o=document.querySelector(".loved-div .live");0<t.length?o.classList.add("active"):o.classList.remove("active"),counterProducts()}export{getDataInLocalStorage};