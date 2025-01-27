function handleUser() {
  let getData = JSON.parse(localStorage.getItem("SignAccount"));
  let account = document.querySelector(".account-div p");
  let accountLogin = document.querySelector(".login-navbar");
  let accountNavbar = document.querySelector(".account-navbar");

  if (getData) {
    account.innerHTML = `Welcome ${getData.FirstUser} ${getData.userLast}`;
  }

  if (getData) {
    accountLogin.classList.remove("active");
    accountNavbar.classList.remove("active");
  } else {
    accountLogin.classList.add("active");
    accountNavbar.classList.add("active");
  }
}

export { handleUser };
