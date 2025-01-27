let elements = document.querySelectorAll(".count .num");
let section = document.querySelector("#experience");
let started = false;

window.onscroll = () => {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      elements.forEach((ele) => startCount(ele));
    }
    started = true;
  }
};

function startCount(ele) {
  let goal = Number(ele.dataset.goal);

  let count = 0;
  let interval = setInterval(() => {
    count++;
    ele.textContent = count;

    if (count === goal) {
      clearInterval(interval);
    }
  }, 1000 / goal);
}
