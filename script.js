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
    document.documentElement.style.setProperty("--col01", "#eaca63");
    document.documentElement.style.setProperty("--col02", "#f3ebab");
    document.documentElement.style.setProperty("--col03", "#ffcc66");
    hoursDiplay.src = `assets/${season}${hours}.png`;
    minutesDiplay.src = `assets/${season}${minutes}.png`;
    secondsDiplay.src = `assets/${season}${seconds}.png`;
  } else if (month === 3 || month === 4 || month === 5) {
    let season = "Autumn";
    document.documentElement.style.setProperty("--col01", "#e89f49");
    document.documentElement.style.setProperty("--col02", "#f4cc90");
    document.documentElement.style.setProperty("--col03", "#e5ac73");
    hoursDiplay.src = `assets/${season}${hours}.png`;
    minutesDiplay.src = `assets/${season}${minutes}.png`;
    secondsDiplay.src = `assets/${season}${seconds}.png`;
  } else if (month === 6 || month === 7 || month === 8) {
    let season = "Winter";
    document.documentElement.style.setProperty("--col01", "#3366cc");
    document.documentElement.style.setProperty("--col02", "#9ed3f1");
    document.documentElement.style.setProperty("--col03", "#6c94e6");
    hoursDiplay.src = `assets/${season}${hours}.png`;
    minutesDiplay.src = `assets/${season}${minutes}.png`;
    secondsDiplay.src = `assets/${season}${seconds}.png`;
  } else {
    let season = "Spring";
    document.documentElement.style.setProperty("--col01", "#00916e");
    document.documentElement.style.setProperty("--col02", "#c8ffbe");
    document.documentElement.style.setProperty("--col03", "#6dd6ac");
    hoursDiplay.src = `assets/${season}${hours}.png`;
    minutesDiplay.src = `assets/${season}${minutes}.png`;
    secondsDiplay.src = `assets/${season}${seconds}.png`;
  }
}
