let password = document.querySelector(".password input");
let textPassword = document.querySelector(".password .text");
let iconErrorPassword = document.querySelector(".password .error");
let iconTruePassword = document.querySelector(".password .true");
let paragraphPassword = document.querySelector(".password p");
let icons = document.querySelector(".password .icons");

function validationPassword() {
  let regEx = /^[0-9]{5,15}/;

  if (!password.value.match(regEx)) {
    iconErrorPassword.classList.add("false");
    iconTruePassword.classList.remove("correct");
    textPassword.classList.add("active");
    paragraphPassword.innerHTML = "Password cant blank";
    paragraphPassword.style.color = "#f44336";
    icons.style.top = "30%";

    password.classList.add("false");
    password.classList.remove("true");
  } else {
    textPassword.classList.add("active");
    iconErrorPassword.classList.remove("false");
    iconTruePassword.classList.add("correct");
    paragraphPassword.innerHTML = "Password validation";
    paragraphPassword.style.color = "#38ad3c";
    icons.style.top = "30%";

    password.classList.remove("false");
    password.classList.add("true");
  }
}

function passwordValid() {
  password.addEventListener("keyup", () => {
    validationPassword();
    if (password.value === "") {
      textPassword.classList.remove("active");
      icons.style.top = "50%";
      password.classList.remove("false");
      password.classList.remove("true");
    }

    let getDataAccount = JSON.parse(localStorage.getItem("SignAccount"));

    localStorage.setItem(
      "SignAccount",
      JSON.stringify({ ...getDataAccount, Password: password.value })
    );
  });
}

export { passwordValid, validationPassword };
