let email=document.querySelector(".Email input"),textEmail=document.querySelector(".Email .text"),iconErrorEmail=document.querySelector(".Email .error"),iconTrueEmail=document.querySelector(".Email .true"),paragraphEmail=document.querySelector(".Email p");function validationEmail(){var a=JSON.parse(localStorage.getItem("SignAccount"));email.value!==a.Email?(iconErrorEmail.classList.add("false"),iconTrueEmail.classList.remove("correct"),textEmail.classList.add("active"),paragraphEmail.innerHTML="Email cant blank",paragraphEmail.style.color="#f44336",email.classList.add("false"),email.classList.remove("true")):(textEmail.classList.add("active"),iconErrorEmail.classList.remove("false"),iconTrueEmail.classList.add("correct"),paragraphEmail.innerHTML="Email validation",paragraphEmail.style.color="#38ad3c",email.classList.remove("false"),email.classList.add("true"))}function emailValid(){email.addEventListener("keyup",()=>{validationEmail(),""===email.value&&(textEmail.classList.remove("active"),email.classList.remove("false"),email.classList.remove("true"))})}export{emailValid,validationEmail};