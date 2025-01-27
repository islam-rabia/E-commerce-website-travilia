function scrollFunc() {
  let header = document.querySelector("header");
  let btn = document.querySelector(".btn-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 70) {
      header.classList.add("active");
      btn.classList.add("active");
    } else {
      header.classList.remove("active");
      btn.classList.remove("active");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

export { scrollFunc };
