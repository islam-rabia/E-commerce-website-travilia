let userFirst = document.querySelector(".first input");
let textFirst = document.querySelector(".first .text");
let iconErrorFirst = document.querySelector(".first .error");
let iconTrueFirst = document.querySelector(".first .true");
let paragraphFirst = document.querySelector(".first p");

function validationFirstUser() {
  let regEx = /^[a-zA-Z]+$/;

  if (!userFirst.value.match(regEx)) {
    iconErrorFirst.classList.add("false");
    iconTrueFirst.classList.remove("correct");
    textFirst.classList.add("active");
    paragraphFirst.innerHTML = "Name cant blank";
    paragraphFirst.style.color = "#f44336";
    userFirst.classList.add("false");
    userFirst.classList.remove("true");
  } else {
    textFirst.classList.add("active");
    iconErrorFirst.classList.remove("false");
    iconTrueFirst.classList.add("correct");
    paragraphFirst.innerHTML = "Name validation";
    paragraphFirst.style.color = "#38ad3c";
    userFirst.classList.remove("false");
    userFirst.classList.add("true");
  }
}

function userFirstValid() {
  userFirst.addEventListener("keyup", () => {
    validationFirstUser();
    if (userFirst.value === "") {
      textFirst.classList.remove("active");
      userFirst.classList.remove("false");
      userFirst.classList.remove("true");
    }

    let getDataAccount = JSON.parse(localStorage.getItem("SignAccount"));

    localStorage.setItem(
      "SignAccount",
      JSON.stringify({ ...getDataAccount, FirstUser: userFirst.value })
    );
  });
}

export { userFirstValid, validationFirstUser };
