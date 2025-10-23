"use strict";

const changeImgBtn = document.getElementById("changeImage");
const getImage = document.getElementById("imagePlaceholder");

changeImgBtn.addEventListener("click", function() {
  if (this.textContent == "Winter") {
    getImage.src = "img/winter.jpg";
    this.textContent = "Autumn";
  } else {
    getImage.src = "img/autumn.jpg";
    this.textContent = "Winter";
  }
});
