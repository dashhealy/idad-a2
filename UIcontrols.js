let testRange = document.getElementById("volume");

const meterOutput = document.getElementById("meterOutput");

setInterval(checkMeter, 200);

function checkMeter() {
  let meterValue = testRange.getValue();
  let clampedValue = clamp(meterValue, -80, 0);
  let remappedValue = remapRange(clampedValue, -80, 0, 0, 1);
  meterOutput.textContent = remappedValue;
}
