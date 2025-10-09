const hoursDiplay = document.getElementById("hoursImg");
const minutesDiplay = document.getElementById("minutesImg");
const secondsDiplay = document.getElementById("secondsImg");
let season = "summer";

let currentTimeFull = Date.now();
let systemDate = new Date(currentTimeFull);

let hours = systemDate.getHours();
let minutes = systemDate.getMinutes();
let seconds = systemDate.getSeconds();
let month = systemDate.getMonth();
month = month + 1;

seasonCheck();

function seasonCheck() {
  if (month === 12 || month === 1 || month === 2) {
    season = "Summer";
    document.documentElement.style.setProperty("--col01", "#eaca63");
    document.documentElement.style.setProperty("--col02", "#f3ebab");
    document.documentElement.style.setProperty("--col03", "#ffcc66");
  } else if (month === 3 || month === 4 || month === 5) {
    season = "Autumn";
    document.documentElement.style.setProperty("--col01", "#e89f49");
    document.documentElement.style.setProperty("--col02", "#f4cc90");
    document.documentElement.style.setProperty("--col03", "#e5ac73");
  } else if (month === 6 || month === 7 || month === 8) {
    season = "Winter";
    document.documentElement.style.setProperty("--col01", "#3366cc");
    document.documentElement.style.setProperty("--col02", "#9ed3f1");
    document.documentElement.style.setProperty("--col03", "#6c94e6");
  } else {
    season = "Spring";
    document.documentElement.style.setProperty("--col01", "#00916e");
    document.documentElement.style.setProperty("--col02", "#c8ffbe");
    document.documentElement.style.setProperty("--col03", "#6dd6ac");
  }
}

/* find modal */
let introModal = document.getElementById("introDialog");
/* to get the backdrop working we need to open the modal with js */
document.getElementById("introDialog").showModal();
/* find modal close button and add an eventlistener */
document.getElementById("dialogCloseButton").addEventListener("click", () => {
  introModal.close();
});
/* finally we want to initialize the synthesizer when the modal is closed */
/* because this can be through the above button, or by pressing esc, we tie it to the actual close event */
introModal.addEventListener("close", startClock);

function startClock() {
  hourMinUI();
  setInterval(checkTime, 1000);
  playTime();
}

function hourMinUI() {
  if (minutes === 60) {
    minutes = minutes - 60;
  }
  if (minutes === 0) {
    hours = hours + 1;
  }
  if (hours === 24) {
    hours = hours - 24;
  }
  hoursDiplay.src = `assets/${season}${hours}.png`;
  minutesDiplay.src = `assets/${season}${minutes}.png`;
}

function checkTime() {
  let currentTimeFull = Date.now();
  let systemDate = new Date(currentTimeFull);

  seconds = systemDate.getSeconds();

  timeUI(seconds);
}

function timeUI(seconds) {
  if (seconds === 0) {
    minutes = minutes + 1;
    hourMinUI();
  }
  secondsDiplay.src = `assets/${season}${seconds}.png`;
  if (seconds > 29) {
    seconds = seconds - 30;
  }
  bar = [notes[seconds], notes[minutes], notes[hours]];
}
