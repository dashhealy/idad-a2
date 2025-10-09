const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonFour = document.getElementById("buttonFour");
let muteButton = document.getElementById("mute");
let crusher = new Tone.BitCrusher(4).toDestination();

const volSlider = document.getElementById("volume");
vol = -17;
synth.volume.value = `${vol}`;

let muted = false;

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

buttonFour.addEventListener("click", effectFour);

function effectFour() {
  synth.set({
    oscillator: {
      type: "triangle",
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
  if (muted === false) {
    synth.volume.value = e.target.value;
  } else {
  }
});

function muteFunc() {
  if (muted === false) {
    synth.volume.value = -Infinity;
    muted = true;
    muteButton.textContent = `⏽`;
  } else {
    synth.volume.value = volSlider.value;
    muted = false;
    muteButton.textContent = `⭘`;
  }
}

muteButton.addEventListener("click", muteFunc);

// muteButton.textContent = `\u1F508\uFE0E`;
// muteButton.textContent = `\u1F507\uFE0E`;
