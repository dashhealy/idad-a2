const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
let crusher = new Tone.BitCrusher(4).toDestination();

vol = -20;
synth.volume.value = `${vol}`;

buttonOne.addEventListener("click", triangle);

function triangle() {
  synth.set({
    oscillator: { type: "triangle" },
  });
}

buttonTwo.addEventListener("click", fatsawtooth);

function fatsawtooth() {
  synth.set({
    oscillator: { type: "fatsawtooth" },
  });
}

buttonThree.addEventListener("click", square);

function square() {
  synth.set({
    oscillator: { type: "fatsquare" },
  });
}
