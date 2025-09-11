const hoursDiplay = document.getElementById("hoursImg");
const minutesDiplay = document.getElementById("minutesImg");
const secondsDiplay = document.getElementById("secondsImg");
const season = "summer";

setInterval(checkTime, 1000);

function checkTime() {
  let currentTimeFull = Date.now();
  let systemDate = new Date(currentTimeFull);

  let hours = systemDate.getHours();
  let minutes = systemDate.getMinutes();
  let seconds = systemDate.getSeconds();

  let month = systemDate.getMonth();
  month = month + 1;

  timeUI(month, hours, minutes, seconds);
}

function timeUI(month, hours, minutes, seconds) {
  if (month === 12 || month === 1 || month === 2) {
    let season = "Summer";
    document.documentElement.style.setProperty("--col02", "#f3ebabff");
    hoursDiplay.src = `assets/${season}${hours}.png`;
    minutesDiplay.src = `assets/${season}${minutes}.png`;
    secondsDiplay.src = `assets/${season}${seconds}.png`;
  } else if (month === 3 || month === 4 || month === 5) {
    let season = "autumn";
    document.documentElement.style.setProperty("--col02", "#f4cc90ff");
    hoursDiplay.src = `assets/${season}${hours}.png`;
    minutesDiplay.src = `assets/${season}${minutes}.png`;
    secondsDiplay.src = `assets/${season}${seconds}.png`;
  } else if (month === 6 || month === 7 || month === 8) {
    let season = "winter";
    document.documentElement.style.setProperty("--col02", "#9ed3f1ff");
    hoursDiplay.src = `assets/${season}${hours}.png`;
    minutesDiplay.src = `assets/${season}${minutes}.png`;
    secondsDiplay.src = `assets/${season}${seconds}.png`;
  } else {
    let season = "spring";
    document.documentElement.style.setProperty("--col02", "#c8ffbe");
    hoursDiplay.src = `assets/${season}${hours}.png`;
    minutesDiplay.src = `assets/${season}${minutes}.png`;
    secondsDiplay.src = `assets/${season}${seconds}.png`;
  }
}
