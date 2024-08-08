var searchBoxStatus = 1;

function hiddenSearchBox() {
  if (searchBoxStatus == 1) {
    document.querySelector("input").style.width = "0px";
    document.querySelector("button").style.borderTopLeftRadius = "10px";
    document.querySelector("button").style.borderBottomLeftRadius = "10px";
    searchBoxStatus = 0;
  } else if (searchBoxStatus == 0) {
    document.querySelector("input").style.width = "300px";
    document.querySelector("button").style.borderTopLeftRadius = "0px";
    document.querySelector("button").style.borderBottomLeftRadius = "0px";
    searchBoxStatus = 1;
  }
}
