let email=document.querySelector(".Email input"),textEmail=document.querySelector(".Email .text"),iconErrorEmail=document.querySelector(".Email .error"),iconTrueEmail=document.querySelector(".Email .true"),paragraphEmail=document.querySelector(".Email p");function validationEmail(){email.value.match(/^[a-zA-Z]+[0-9]+@gmail.(com|net|org)$/)?(textEmail.classList.add("active"),iconErrorEmail.classList.remove("false"),iconTrueEmail.classList.add("correct"),paragraphEmail.innerHTML="Email validation",paragraphEmail.style.color="#38ad3c",email.classList.remove("false"),email.classList.add("true")):(iconErrorEmail.classList.add("false"),iconTrueEmail.classList.remove("correct"),textEmail.classList.add("active"),paragraphEmail.innerHTML="Email cant blank",paragraphEmail.style.color="#f44336",email.classList.add("false"),email.classList.remove("true"))}function emailValid(){email.addEventListener("keyup",()=>{validationEmail(),""===email.value&&(textEmail.classList.remove("active"),email.classList.remove("false"),email.classList.remove("true"));var a=JSON.parse(localStorage.getItem("SignAccount"));localStorage.setItem("SignAccount",JSON.stringify({...a,Email:email.value}))})}export{emailValid,validationEmail};