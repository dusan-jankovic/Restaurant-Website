//script for slideshow - Begin
var slider = document.getElementsByClassName("slide-show");
var images = [
  "assets/images/slideshow_images/download.webp",
  "assets/images/slideshow_images/download1.webp",
  "assets/images/slideshow_images/download2.webp",
  "assets/images/slideshow_images/download3.webp"
];

var i;
var dotContainer = slider[0].getElementsByClassName("dot-container");

function addSlides() {
  for (i = 0; i < images.length; i++) {
    var slideElement = document.createElement("DIV");
    var dot = document.createElement("I");

    slideElement.classList.add("slide");
    dot.classList.add("fa", "fa-circle");

    slider[0].appendChild(slideElement);
    dotContainer[0].appendChild(dot);
    slider[0].getElementsByClassName('slide')[i].style.backgroundImage = 'url(' + images[i] + ')'
  }
}
addSlides();

var k = 0;
var slides = document.getElementsByClassName("slide");

function slideShow() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    dotContainer[0].getElementsByTagName('i')[i].style.opacity = '.6'
  }
  if (k >= 0 && k <= images.length) {
    document.getElementsByClassName("slide")[k].style.opacity = "1";
    dotContainer[0].getElementsByTagName('i')[k].style.opacity = '.98'
    k++;
    if (k == images.length) {
      k = 0;
    }
  } else {
    k = 0;
  }
}

document.getElementsByTagName('body')[0].onload = function() {
  setInterval(slideShow, 6000);

}


//script for slideshow - End
