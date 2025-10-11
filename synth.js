//create a synth and connect it to the main output (your speakers)
let synth = new Tone.Synth({
  oscillator: {
    type: "triangle",
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
let now = Tone.now();

let reverb = new Tone.Reverb(2);
reverb.wet.value = 0;

const notes = [
  "a1",
  "b1",
  "c1",
  "d1",
  "e1",
  "f1",
  "g1",
  "a2",
  "b2",
  "c2",
  "d2",
  "e2",
  "f2",
  "g2",
  "a3",
  "b3",
  "c3",
  "d3",
  "e3",
  "f3",
  "g3",
  "a4",
  "b4",
  "c4",
  "d4",
  "e4",
  "f4",
  "g4",
  "a5",
  "b5",
];

// let secNote = notes[seconds];
// let minNote = notes[minutes];
// let hourNote = notes[hours];

// let bar = ["C4", "E4", "G4"];
// let bar = [`${hourNote}`, `${minNote}`, `${secNote}`];
let bar = [notes[hours], notes[minutes], notes[seconds]];
let index = 0;

function playTime() {
  const loop = new Tone.Loop((time) => {
    synth.triggerAttackRelease(bar[index], "16n", time);
    index = (index + 1) % bar.length; // wrap around
  }, 0.33);
  index = 0;
  Tone.Transport.start();
  loop.start(0);

  // synth.triggerAttackRelease(`${secNote}`, "28n");
}
