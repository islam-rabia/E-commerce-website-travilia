function signOut() {
  let signOut = document.querySelector(".sign-out-div");

  signOut.addEventListener("click", () => {
    setTimeout(() => {
      location.href = "signUp.html";
      localStorage.clear();
    }, 1500);
  });
}

export { signOut };
