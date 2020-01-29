const header = document.querySelector("h1");
const colors = ["pink", "purple", "red", "blue"];

const superEventHandler = {
  handleOnTop() {
    header.innerHTML = "The mouse is here!";
    header.style.color = colors[0];
  },
  handleLeave() {
    header.innerHTML = "The mouse is gone!";
    header.style.color = colors[1];
  },
  handleResize() {
    header.innerHTML = "You just resized!";
    header.style.color = colors[2];
  },
  handleRightClick() {
    header.innerHTML = "That was a rightclick!";
    header.style.color = colors[3];
  }
};

header.addEventListener("mouseover", superEventHandler.handleOnTop);
header.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.onauxclick = superEventHandler.handleRightClick;
