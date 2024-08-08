var carName = document.getElementsByClassName("car_name");
var searchBar = document.getElementById("search_bar");

searchBar.addEventListener("keyup", Search);

function Search() {
  var inputData = searchBar.value;

  //   console.log(inputData);

  for (let index = 0; index < carName.length; index++) {
    if (
      carName[index].innerHTML.toLowerCase().includes(inputData.toLowerCase())
    ) {
      carName[index].style.display = "list-item";
    } else {
      carName[index].style.display = "none";
    }
  }
}
