let email = document.querySelector(".Email input");
let textEmail = document.querySelector(".Email .text");
let iconErrorEmail = document.querySelector(".Email .error");
let iconTrueEmail = document.querySelector(".Email .true");
let paragraphEmail = document.querySelector(".Email p");

function validationEmail() {
  let getData = JSON.parse(localStorage.getItem("SignAccount"));

  if (email.value !== getData.Email) {
    iconErrorEmail.classList.add("false");
    iconTrueEmail.classList.remove("correct");
    textEmail.classList.add("active");
    paragraphEmail.innerHTML = "Email cant blank";
    paragraphEmail.style.color = "#f44336";

    email.classList.add("false");
    email.classList.remove("true");
  } else {
    textEmail.classList.add("active");
    iconErrorEmail.classList.remove("false");
    iconTrueEmail.classList.add("correct");
    paragraphEmail.innerHTML = "Email validation";
    paragraphEmail.style.color = "#38ad3c";

    email.classList.remove("false");
    email.classList.add("true");
  }
}

function emailValid() {
  email.addEventListener("keyup", () => {
    validationEmail();
    if (email.value === "") {
      textEmail.classList.remove("active");
      email.classList.remove("false");
      email.classList.remove("true");
    }
  });
}

export { emailValid, validationEmail };
