function showPassword() {
  let icons = document.querySelectorAll(".icons ion-icon");
  let passwords = document.querySelectorAll(".pass-account input");

  icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      if (icons[index] === icons[0] && passwords[index] === passwords[0]) {
        if (icons[0].getAttribute("name") === "eye-off-outline") {
          passwords[0].setAttribute("type", "text");
          icons[0].setAttribute("name", "eye-outline");
        } else {
          passwords[0].setAttribute("type", "password");
          icons[0].setAttribute("name", "eye-off-outline");
        }
      } else {
        if (icons[1].getAttribute("name") === "eye-off-outline") {
          passwords[1].setAttribute("type", "text");
          icons[1].setAttribute("name", "eye-outline");
        } else {
          passwords[1].setAttribute("type", "password");
          icons[1].setAttribute("name", "eye-off-outline");
        }
      }
    });
  });
}

export { showPassword };
