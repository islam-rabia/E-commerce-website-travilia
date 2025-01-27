let email = document.querySelector(".Email input");
let textEmail = document.querySelector(".Email .text");
let iconErrorEmail = document.querySelector(".Email .error");
let iconTrueEmail = document.querySelector(".Email .true");
let paragraphEmail = document.querySelector(".Email p");

function validationEmail() {
  let regEx = /^[a-zA-Z]+[0-9]+@gmail.(com|net|org)$/;

  if (!email.value.match(regEx)) {
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

    let getDataAccount = JSON.parse(localStorage.getItem("SignAccount"));

    localStorage.setItem(
      "SignAccount",
      JSON.stringify({ ...getDataAccount, Email: email.value })
    );
  });
}

export { emailValid, validationEmail };
