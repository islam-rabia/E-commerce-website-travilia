import { userFirstValid, validationFirstUser } from "./user-first-valid.js";
import { userLastValid, validationLastUser } from "./user-last-valid.js";
import { emailValid, validationEmail } from "./email-valid.js";
import { passwordValid, validationPassword } from "./password-valid.js";
import { CPasswordValid, validationCPassword } from "./CPassword-valid.js";
import { showPassword } from "./show-password.js";

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validationFirstUser();
  validationLastUser();
  validationEmail();
  validationPassword();
  validationCPassword();

  let cPassword = document.querySelector(".Crossword input");
  let password = document.querySelector(".password input");
  let email = document.querySelector(".Email input");
  let userFirst = document.querySelector(".first input");
  let userLast = document.querySelector(".last input");

  let regExEmail = /^[a-zA-Z]+[0-9]+@gmail.(com|net|org)$/;
  let regExPassword = /^[0-9]{5,15}/;
  let regExFirst = /^[a-zA-Z]+$/;
  let regExLast = /^[a-zA-Z]+$/;

  if (
    userFirst.value.match(regExFirst) &&
    userLast.value.match(regExLast) &&
    email.value.match(regExEmail) &&
    password.value.match(regExPassword) &&
    cPassword.value === password.value
  ) {
    setTimeout(() => {
      location.href = "signIn.html";
    }, 1500);
  }
});

userFirstValid();
userLastValid();
emailValid();
passwordValid();
showPassword();
CPasswordValid();
