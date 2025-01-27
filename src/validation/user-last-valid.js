let userLast = document.querySelector(".last input");
let textLast = document.querySelector(".last .text");
let iconErrorLast = document.querySelector(".last .error");
let iconTrueLast = document.querySelector(".last .true");
let paragraphLast = document.querySelector(".last p");

function validationLastUser() {
  let regEx = /^[a-zA-Z]+$/;

  if (!userLast.value.match(regEx)) {
    iconErrorLast.classList.add("false");
    iconTrueLast.classList.remove("correct");
    textLast.classList.add("active");
    paragraphLast.innerHTML = "Name cant blank";
    paragraphLast.style.color = "#f44336";

    userLast.classList.add("false");
    userLast.classList.remove("true");
  } else {
    textLast.classList.add("active");
    iconErrorLast.classList.remove("false");
    iconTrueLast.classList.add("correct");
    paragraphLast.innerHTML = "Name validation";
    paragraphLast.style.color = "#38ad3c";

    userLast.classList.remove("false");
    userLast.classList.add("true");
  }
}

function userLastValid() {
  userLast.addEventListener("keyup", () => {
    validationLastUser();
    if (userLast.value === "") {
      textLast.classList.remove("active");
      userLast.classList.remove("false");
      userLast.classList.remove("true");
    }

    let getDataAccount = JSON.parse(localStorage.getItem("SignAccount"));

    localStorage.setItem(
      "SignAccount",
      JSON.stringify({ ...getDataAccount, userLast: userLast.value })
    );
  });
}

export { userLastValid, validationLastUser };
