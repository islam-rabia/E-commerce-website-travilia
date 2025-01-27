import{saveButtonClick}from"./add-active.js";import{generateData}from"./handle-details-data.js";import{addActiveLive}from"./add-live.js";import{saveLovedInLocalStorage}from"./save-loved-localStorage.js";let result=new XMLHttpRequest;result.open("GET","json/data.json"),result.responseType="json",result.send();let dataLoved,app=(result.onload=()=>{var e;4===result.readyState&&200===result.status?(e=result.response,handleData(dataLoved=e),saveButtonClick(),addActiveLive()):console.error("Not Found Data")},document.querySelector(".products-list"));function handleData(e){app.innerHTML=e.map((e,t)=>{var{id:e,title:a,img:i,price:o,city:s,star:r,preview:l}=e;return`
      <li class="product flex flex-col">
        <figure>
          <img class="w-full h-full" src="${i}" alt="destination image"/>
        </figure>
        <div class="product-title">
          <h3 class="title" data-ion="${t}">${a}</h3>
          <p>${s}</p>
          <div class="description">
            <div class="star flex items-center justify-center">
              <ion-icon name="star"></ion-icon><span>${r}</span>
            </div>
            <div class="preview">(${l} Preview)</div>
          </div>
        </div>
        <div class="price">
          <p>$${o}</p>
        </div>
        <button class="favorite" data-ion="${e}" data-ind="${t}">
          <ion-icon name="heart-outline"></ion-icon>
        </button>
      </li>
    `}).join(""),app.addEventListener("click",e=>{var e=e.target.closest(".title");e&&(e=Number(e.dataset.ion),generateData(e),setTimeout(()=>{location.href="details.html"},0))}),app.addEventListener("click",e=>{var e=e.target.closest(".favorite");e&&(e=e.dataset.ind,localStorage.getItem("SignAccount")?saveLovedInLocalStorage(dataLoved,e):location.href="signUp.html")})}