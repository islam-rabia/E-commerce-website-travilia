function scrollFunc(){let e=document.querySelector("header"),t=document.querySelector(".btn-top");window.addEventListener("scroll",()=>{70<=window.scrollY?(e.classList.add("active"),t.classList.add("active")):(e.classList.remove("active"),t.classList.remove("active"))}),t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}export{scrollFunc};