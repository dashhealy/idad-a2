//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

setInterval(checkTime, 1000);

function checkTime() {
  let currentTimeFull = Date.now();
  let systemDate = new Date(currentTimeFull);

  let hours = systemDate.getHours();
  let minutes = systemDate.getMinutes();
  let seconds = systemDate.getSeconds();

  console.log(hours, minutes, seconds);

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease(`C4`, "8n");
}
