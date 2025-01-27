import { showPassword } from "./show-password.js";
import { emailValid, validationEmail } from "./signIn-email.js";
import { passwordValid, validationPassword } from "./signIn-pass.js";

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validationEmail();
  validationPassword();

  let password = document.querySelector(".password input");
  let email = document.querySelector(".Email input");
  let getData = JSON.parse(localStorage.getItem("SignAccount"));

  if (email.value === getData.Email && password.value === getData.Password) {
    setTimeout(() => {
      location.href = "index.html";
    }, 1500);
  }
});

emailValid();
passwordValid();
showPassword();
