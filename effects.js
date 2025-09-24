const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");

buttonOne.addEventListener("click", triangle);

function triangle() {
  waveform = "sawtooth";
}

buttonTwo.addEventListener("click", fatsawtooth);

function fatsawtooth() {
  waveform = "fatsawtooth";
}

buttonThree.addEventListener("click", square);

function square() {
  waveform = "square";
}
