function navbarAction() {
  const barsNavbar = document.querySelector(".bars-navbar");
  const navbar = document.querySelector(".navbar");
  const closeNavbar = document.querySelector(".close-navbar");
  const groundNavbar = document.querySelector(".ground-navbar");

  const showNavbar = () => {
    groundNavbar.style.display = "block";
    navbar.classList.add("active");
  };

  const hideNavbar = () => {
    groundNavbar.style.display = "none";
    navbar.classList.remove("active");
  };

  barsNavbar.addEventListener("click", showNavbar);
  groundNavbar.addEventListener("click", hideNavbar);
  closeNavbar.addEventListener("click", hideNavbar);
}

export { navbarAction };
