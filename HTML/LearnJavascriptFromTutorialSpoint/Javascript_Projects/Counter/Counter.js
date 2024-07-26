var counter = 0;

function increaseNumber() {
  counter++;
  document.getElementsByClassName("number_display")[0].innerHTML = counter;
  if (counter > 0) {
    document.getElementsByClassName("number_display")[0].style.color = "green";
  } else if (counter < 0) {
    document.getElementsByClassName("number_display")[0].style.color = "red";
  } else {
    document.getElementsByClassName("number_display")[0].style.color = "black";
  }
}
function decreaseNumber() {
  counter--;
  document.getElementsByClassName("number_display")[0].innerHTML = counter;
  if (counter > 0) {
    document.getElementsByClassName("number_display")[0].style.color = "green";
  } else if (counter < 0) {
    document.getElementsByClassName("number_display")[0].style.color = "red";
  } else {
    document.getElementsByClassName("number_display")[0].style.color = "black";
  }
}
function resetNumber() {
  counter = 0;
  document.getElementsByClassName("number_display")[0].innerHTML = counter;
  if (counter > 0) {
    document.getElementsByClassName("number_display")[0].style.color = "green";
  } else if (counter < 0) {
    document.getElementsByClassName("number_display")[0].style.color = "red";
  } else {
    document.getElementsByClassName("number_display")[0].style.color = "black";
  }
}
