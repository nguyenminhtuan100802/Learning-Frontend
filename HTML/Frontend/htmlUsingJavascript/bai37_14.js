let pictures = document.querySelectorAll(".pic_1");
let imgs = document.querySelectorAll("img");

for (let index = 0; index < pictures.length; index++) {
  pictures[index].addEventListener("click", function () {
    imgs[index].style.width = "600px";
    pictures[index].style.width = "60%";
    for (let index1 = 0; index1 < pictures.length; index1++) {
      if (index1 != index) {
        imgs[index1].style.width = "600px";
        pictures[index1].style.width = "10%";
      }
    }
  });
}
