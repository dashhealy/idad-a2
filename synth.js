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
  "c5",
  "d5",
  "e5",
  "f5",
  "g5",
  "a6",
  "b6",
];

let bar = [notes[hours], notes[minutes], notes[seconds]];
let index = 0;

function playTime() {
  const loop = new Tone.Loop((time) => {
    synth.triggerAttackRelease(bar[index], "16n", time);
    index = (index + 1) % bar.length;
  }, 0.33);
  index = 0;
  Tone.Transport.start();
  loop.start(0);
}
