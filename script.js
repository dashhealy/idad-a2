const timeDisplay = document.getElementById("timeDisplay");

setInterval(checkTime, 1000);

function checkTime() {
  let currentTimeFull = Date.now();
  let systemDate = new Date(currentTimeFull);

  let hours = systemDate.getHours();
  let minutes = systemDate.getMinutes();
  let seconds = systemDate.getSeconds();
  //let milliseconds = systemDate.getMilliseconds();

  let month = systemDate.getMonth();
  month = month + 1;
  seasonColour(month);

  if (hours > 12) {
    hours = hours - 12;
  }

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

  //let imgName = `${month}${hours}`;
  //console.log(imgName);
}

function seasonColour(month) {
  if (month === 12 || month === 1 || month === 2) {
    document.documentElement.style.setProperty("--col02", "#f3ebabff");
    document.documentElement.style.setProperty("--col01", "#ebd661ff");
  } else if (month === 3 || month === 4 || month === 5) {
    document.documentElement.style.setProperty("--col01", "#e69449ff");
    document.documentElement.style.setProperty("--col02", "#f4cc90ff");
  } else if (month === 6 || month === 7 || month === 8) {
    document.documentElement.style.setProperty("--col01", "#4d9ddeff");
    document.documentElement.style.setProperty("--col02", "#9ed3f1ff");
  } else {
    document.documentElement.style.setProperty("--col01", "#00916e");
    document.documentElement.style.setProperty("--col02", "#c8ffbe");
  }
}
