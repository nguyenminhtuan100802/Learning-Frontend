function userEnterData() {
  var inputData = document.querySelector("input").value;
  console.log(inputData);

  const para = document.createElement("span");
  const node = document.createTextNode(inputData);
  para.appendChild(node);
  const element = document.querySelector("p");
  element.appendChild(para);
}
