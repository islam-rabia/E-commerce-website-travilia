function navbarAction(){var e=document.querySelector(".bars-navbar");let a=document.querySelector(".navbar");var t=document.querySelector(".close-navbar");let r=document.querySelector(".ground-navbar");var c=()=>{r.style.display="none",a.classList.remove("active")};e.addEventListener("click",()=>{r.style.display="block",a.classList.add("active")}),r.addEventListener("click",c),t.addEventListener("click",c)}export{navbarAction};