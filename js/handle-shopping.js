import{removeDataInLocalStorage}from"./remove-data.js";import{orderCart}from"./order-summary.js";let wishList;function getDataShoppingInLocalStorage(){var t=JSON.parse(localStorage.getItem("dataCart"))||[];t&&handleDataShopping(t),wishList=t}let productsCarts=document.querySelector(".product-cart-list");function handleDataShopping(t){productsCarts.innerHTML=t.map((t,e)=>{var{id:t,title:a,img:o,price:r,quantity:i}=t;return`
        <li class="product-${t}">
        <figure>
          <img src="${o}" alt="" />
        </figure>
        <div class="product-title">
          <h3>${a}</h3>
          <p>Price: ${r}$</p>
          <div class="quantity">
            <span>Quantity: </span>
            <input type="text" value="${i}" />
          </div>
        </div>
        <button btn-ion="${e}" class="close-product">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </li>
      `}).join(""),document.querySelectorAll(".close-product").forEach(a=>{a.addEventListener("click",()=>{var t=Number(a.getAttribute("btn-ion")),t=(removeDataInLocalStorage(wishList,t),orderCart(),JSON.parse(localStorage.getItem("dataCart"))),e=document.querySelector(".countCart");0===t.length?e.style.display="none":e.style.display="flex"})})}export{getDataShoppingInLocalStorage,handleDataShopping};