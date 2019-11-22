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
    var slideElement2 = document.createElement("DIV");
    var dot = document.createElement("I");

    slideElement.classList.add("slide");
    slideElement2.classList.add("slideImgPlaceHolder");
    dot.classList.add("fa", "fa-circle");

    slider[0].appendChild(slideElement);
    dotContainer[0].appendChild(dot);
    slider[0].getElementsByClassName('slide')[i].appendChild(slideElement2)
    slider[0].getElementsByClassName('slideImgPlaceHolder')[i].style.backgroundImage = 'url(' + images[i] + ')'

    document.querySelectorAll('.slide')[i].style.opacity = "0";
    dotContainer[0].getElementsByTagName('i')[i].style.opacity = '.4'
  }
}
addSlides();

//first slide:
  dotContainer[0].getElementsByTagName('i')[0].style.opacity = '.99'
  document.getElementsByClassName("slide")[0].style.opacity = "1";
//---------
var k = 0;
var slides = document.getElementsByClassName("slide");
var duration;

function slideShow() {
  console.log(k)
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
      dotContainer[0].getElementsByTagName('i')[i].style.opacity = '.4'
      document.getElementsByClassName("slideImgPlaceHolder")[k].style.animationPlayState = 'paused'
      document.getElementsByClassName("slideImgPlaceHolder")[k].style.animation = 'stop 0 0'
    }

  console.log(k)
      if (k >= 0 && k <= images.length) {
        document.getElementsByClassName("slide")[k].style.opacity = "1";
        document.getElementsByClassName("slideImgPlaceHolder")[k].style.animationPlayState = 'running'
        document.getElementsByClassName("slideImgPlaceHolder")[k].style.animation = 'zoom 21s infinite'

        dotContainer[0].getElementsByTagName('i')[k].style.opacity = '.99'

        k++;
        if (k == images.length) {
          k = 0;
        }
      } else {
        k = 0;
      }
}

document.getElementsByTagName('body')[0].onload = function() {
  duration = 3500
  setInterval(slideShow, duration);
}

var dots = dotContainer[0].getElementsByTagName('i')

//dots onclick show slide
for(let i=0; i < dots.length; i++) {
  dots[i].onclick = function() {
    k = Array.from(this.parentNode.children).indexOf(this)
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
      dotContainer[0].getElementsByTagName('i')[i].style.opacity = '.4'
      document.getElementsByClassName("slideImgPlaceHolder")[k].style.animationPlayState = 'paused'
      document.getElementsByClassName("slideImgPlaceHolder")[k].style.animation = 'stop 0 0'
    }
    this.style.opacity = '.99'
  }
}

//script for slideshow - End
