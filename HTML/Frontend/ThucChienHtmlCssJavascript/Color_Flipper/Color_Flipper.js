function changeBackground() {
  const r = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const g = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const b = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

  console.log("#" + r + g + b);
  document.body.style.backgroundColor = "#" + r + g + b;

  var colorDisplay = "#" + r + g + b;
  colorDisplay.toUpperCase;
  document.getElementsByClassName("color_change")[0].innerHTML = colorDisplay;
}
