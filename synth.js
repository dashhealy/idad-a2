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
}).toDestination();
let now = Tone.now();

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

function playTime() {
  if (seconds > 29) {
    seconds = seconds - 30;
  }

  let secNote = notes[seconds];
  let minNote = notes[minutes];
  let hourNote = notes[hours];

  synth.triggerAttackRelease(`c4`, "8n");
  // synth.triggerAttackRelease(`${secNote}`, "28n");
}
