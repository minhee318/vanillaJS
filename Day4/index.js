const body = document.querySelector("body");
const size = ["small", "middle", "big"];

function handleResize() {
  const width = window.innerWidth;
  if (width <= 400) {
    body.classList = size[0];
  } else if (width <= 800 && width > 400) {
    body.classList = size[1];
  } else {
    body.classList = size[2];
  }
}

function init() {
  window.addEventListener("load", handleResize);
  body.classList = "";
  window.addEventListener("resize", handleResize);
}

init();
