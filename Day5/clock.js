const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h3");

function getTime() {
  const xmasDate = new Date("2020-12-24:00:00:00");
  const date = new Date();
  const gap = xmasDate.getTime() - date.getTime();
  const dDay = Math.floor(gap / (1000 * 60 * 60 * 24));
  const dHours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const dMinutes = Math.floor((gap / (1000 * 60)) % 60);
  const dSeconds = Math.floor((gap / 1000) % 60);

  clockTitle.innerText = `${dDay < 10 ? `0${dDay}` : dDay}d ${
    dHours < 10 ? `0${dHours}` : dHours
  }h ${dMinutes < 10 ? `0${dMinutes}` : dMinutes}m ${
    dSeconds < 10 ? `0${dSeconds}` : dSeconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
