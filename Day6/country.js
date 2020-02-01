const select = document.querySelector(".js-select");

const COUNTRY_LS = "country";

function handleClick() {
  const currentValue = select.value;
  saveCountry(currentValue);
}

function saveCountry(text) {
  localStorage.setItem(COUNTRY_LS, text);
}

function askForCountry() {
  select.addEventListener("click", handleClick);
}

function loadCountry() {
  const currentUser = localStorage.getItem(COUNTRY_LS);
  if (currentUser === null) {
    askForCountry();
  } else {
    select.add(select.options[3], "selected");
  }
}

function init() {
  loadCountry();
}
init();
