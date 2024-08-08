var images = document.querySelectorAll(".container_image img");
var imageZoom = document.querySelector(".picture_zoom");
var container = document.getElementsByClassName("container_zoom_picture")[0];

console.log(images);
console.log(imageZoom);
console.log(container);

var item, index;

images.forEach((item, index) => {
  item.addEventListener("click", function () {
    console.log(index + item);
    imageZoom.src = images[index].src;
    container.classList.add("show");
  });
});

function removePicture() {
  console.log("Debug 1");
  container.classList.remove("show");
}
