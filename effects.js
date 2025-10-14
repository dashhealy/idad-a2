const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonFour = document.getElementById("buttonFour");
let muteButton = document.getElementById("mute");
let reverbButton = document.getElementById("reverb");

const volSlider = document.getElementById("volume");
vol = -17;
synth.volume.value = `${vol}`;

let verb = false;
let muted = false;

buttonOne.addEventListener("click", effectOne);

function effectOne() {
  synth.set({
    oscillator: {
      type: "sine",
    },
  });
}

buttonTwo.addEventListener("click", effectTwo);

function effectTwo() {
  synth.set({
    oscillator: {
      type: "fatsawtooth",
    },
  });
}

buttonThree.addEventListener("click", effectThree);

function effectThree() {
  synth.set({
    oscillator: {
      type: "square",
    },
  });
}

buttonFour.addEventListener("click", effectFour);

function effectFour() {
  synth.set({
    oscillator: {
      type: "triangle",
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
    muteButton.classList.toggle("pressed");
  } else {
    synth.volume.value = volSlider.value;
    muted = false;
    muteButton.textContent = `⭘`;
    muteButton.classList.toggle("pressed");
  }
}

muteButton.addEventListener("click", muteFunc);

function toggleReverb() {
  if (verb === false) {
    reverb.wet.value = 1;
    verb = true;
    reverbButton.classList.toggle("pressed");
  } else {
    reverb.wet.value = 0;
    verb = false;
    reverbButton.classList.toggle("pressed");
  }
}

reverbButton.addEventListener("click", toggleReverb);
