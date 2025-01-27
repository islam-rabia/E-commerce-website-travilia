let cPassword = document.querySelector(".Crossword input");
let textCPassword = document.querySelector(".Crossword .text");
let iconErrorCPassword = document.querySelector(".Crossword .error");
let iconTrueCPassword = document.querySelector(".Crossword .true");
let paragraphCPassword = document.querySelector(".Crossword p");
let icons = document.querySelector(".Crossword .icons");
let password = document.querySelector(".password input");

function valid() {
  iconErrorCPassword.classList.add("false");
  iconTrueCPassword.classList.remove("correct");
  textCPassword.classList.add("active");
  paragraphCPassword.innerHTML = "Password can't be blank";
  paragraphCPassword.style.color = "#f44336";
  icons.style.top = "30%";

  cPassword.classList.add("false");
  cPassword.classList.remove("true");
}

function validationCPassword() {
  if (cPassword.value === "") {
    valid();
  } else if (cPassword.value !== password.value) {
    valid();
  } else {
    textCPassword.classList.add("active");
    iconErrorCPassword.classList.remove("false");
    iconTrueCPassword.classList.add("correct");
    paragraphCPassword.innerHTML = "Password validation";
    paragraphCPassword.style.color = "#38ad3c";
    icons.style.top = "30%";

    cPassword.classList.remove("false");
    cPassword.classList.add("true");
  }
}

function CPasswordValid() {
  cPassword.addEventListener("keyup", () => {
    validationCPassword();
    if (cPassword.value === "") {
      textCPassword.classList.remove("active");
      icons.style.top = "50%";
      cPassword.classList.remove("false");
      cPassword.classList.remove("true");
    }
  });
}

export { CPasswordValid, validationCPassword };
