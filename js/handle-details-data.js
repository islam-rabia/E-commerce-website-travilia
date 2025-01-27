import{changeQuantity}from"./change-quantity.js";import{counterShopping}from"./counter-shopping.js";import{SaveDetailsInLocalStorage}from"./save-details-localstorage.js";let dataDetails;async function generateDataDetails(){var t=await(await fetch("json/data.json")).json();dataDetails=t}async function generateData(t){t=[(await(await fetch("json/data.json")).json())[t]];localStorage.setItem("details",JSON.stringify(t))}generateDataDetails();let app=document.querySelector(".product-details .product-list");function handleData(t){app.innerHTML=t.map(t=>{var{id:t,title:a,img:e,description:i,price:n,city:o,quantity:s}=t;return`
        <li class="product-${t}">
          <figure>
            <img class="w-full h-full" src="${e}" alt="destination image">
          </figure>
          <div class="product-title">
            <span>${o}</span>
            <h3>${a}</h3>
            <div class="detail">
              <h4>Product Details</h4>
              <p>${i}</p>
            </div>
            <div class="description">
              <span>Price: $${n}</span>
              <input type="text" name="quantity" value="${s}">
            </div>
            <button class="cart" data-ion="${t}">Add To Cart</button>
          </div>
        </li>
      `}).join(""),app.addEventListener("click",t=>{var t=t.target.closest(".cart");t&&(t=Number(t.dataset.ion),localStorage.getItem("SignAccount")?(SaveDetailsInLocalStorage(dataDetails,t),changeQuantity(t),counterShopping()):location.href="signUp.html",t=JSON.parse(localStorage.getItem("dataCart")),document.querySelector(".countCart").style.display=t?"flex":"none")})}export{generateData,handleData};