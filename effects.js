const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
let crusher = new Tone.BitCrusher(4).toDestination();

const volSlider = document.getElementById("volume");
vol = -10;
synth.volume.value = `${vol}`;

buttonOne.addEventListener("click", effectOne);

function effectOne() {
  synth.set({
    oscillator: {
      type: "sine",
      count: 3,
      spread: 10,
    },
    envelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.2,
      release: 0.4,
      attackCurve: "exponential",
    },
  });
}

buttonTwo.addEventListener("click", effectTwo);

function effectTwo() {
  synth.set({
    oscillator: {
      type: "fatsawtooth",
      count: 3,
      spread: 10,
    },
    envelope: {
      attack: 0.3,
      decay: 0.1,
      sustain: 0.5,
      release: 0.1,
      attackCurve: "exponential",
    },
  });
}

buttonThree.addEventListener("click", effectThree);

function effectThree() {
  synth.set({
    oscillator: {
      type: "square",
      count: 3,
      spread: 10,
    },
    envelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.1,
      release: 0.1,
      attackCurve: "exponential",
    },
  });
}

volSlider.addEventListener("input", (e) => {
  synth.volume.value = e.target.value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
