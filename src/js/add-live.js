function addActiveLive() {
  let heart = document.querySelector(".loved-div .live");
  let btns = document.querySelectorAll(".favorite");
  let activeDiv = JSON.parse(localStorage.getItem("lovedProduct") || "false");

  if (activeDiv.length > 0) {
    heart.classList.add("active");
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (localStorage.getItem("SignAccount")) {
        let isActive = true;
        heart.classList.toggle("active", isActive);

        localStorage.setItem("liveActive", JSON.stringify(isActive));
      } else {
        location.href = "signUp.html";
      }
    });
  });
}

export { addActiveLive };
