const subTitle = document.querySelector(".js-subTitle"),
  result = document.querySelector(".js-result"),
  result2 = document.querySelector(".js-result2"),
  rangeInput = document.querySelector("input"),
  gameForm = document.querySelector(".js-game"),
  gameText = gameForm.querySelector(".game-text"),
  gameBtn = gameForm.querySelector(".game-btn");

function handleBtn(event) {
  const random = Math.floor(Math.random() * rangeInput.value);
  const youChose = gameText.value;
  if (parseInt(youChose, 10) === parseInt(random, 10)) {
    result2.innerText = "You won😁";
  } else {
    result2.innerText = "You lost😥";
  }
  result.innerText =
    "You chose: " + youChose + ", the machine chose: " + random + ".";
}

function handleRange(event) {
  const range = rangeInput.value;
  subTitle.innerText = "Generate a number between 0 and " + range;
  event.preventDefault();
  gameBtn.addEventListener("click", handleBtn);
}

function fixRange() {
  rangeInput.addEventListener("change", handleRange);
}

function init() {
  subTitle.innerText = "Generate a number between 0 and " + rangeInput.value;
  fixRange();
}

init();
