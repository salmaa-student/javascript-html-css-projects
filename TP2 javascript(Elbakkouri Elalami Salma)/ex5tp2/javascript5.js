 let images = ["img1.png", "img2.png", "img3.png"];
let index = 0;   
let imageElement = document.getElementById("imageCarousel");
let btnSuiv = document.getElementById("btnSuiv");
let btnPrec = document.getElementById("btnPrec");

  btnSuiv.addEventListener("click", function() {
    index++;
    if (index >= images.length) {
        index = 0; 
    }
    imageElement.src = images[index];
});

btnPrec.addEventListener("click", function() {
    index--;
    if (index < 0) {
        index = images.length - 1;  
    }
    imageElement.src = images[index];
});