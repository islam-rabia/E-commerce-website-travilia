function changeText(){var e=document.querySelector(".counter-products h3"),t=JSON.parse(localStorage.getItem("dataCart"))||[];e.innerHTML=`My Cart (${t.length})`}export{changeText};