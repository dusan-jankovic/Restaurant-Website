//#### slider script ######

//script for slideshow - Begin
var slider = document.getElementsByClassName("slide-show");
var images;
  if(sliderSize == 'x'){
    images = [
      filePath + "assets/images/slideshow_images/download.webp",
      filePath + "assets/images/slideshow_images/download1.webp",
      filePath + "assets/images/slideshow_images/download2.webp",
      filePath + "assets/images/slideshow_images/download3.webp"
    ];
  }
  else if (sliderSize == 'm'){
    images = [
      filePath + "assets/images/experience/slideshow/food.jpg",
      filePath + "assets/images/experience/slideshow/room.jpg"
    ];
  }
  else if (sliderSize == 'sm'){
    images = [
      filePath + "assets/images/experience/slideshow/food.jpg"
    ];
  }

var i;
var dotContainer = slider[0].getElementsByClassName("dot-container");

//create slide elements add add them to the page, into slider container
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
    slider[0].getElementsByClassName("slide")[i].appendChild(slideElement2);
    //add images from Array
    slider[0].getElementsByClassName("slideImgPlaceHolder")[i].style.backgroundImage = "url(" + images[i] + ")";
    //make all slides invisible and all dots
    document.querySelectorAll(".slide")[i].style.opacity = "0";
    dotContainer[0].getElementsByTagName("i")[i].style.opacity = ".4";
  }
}
addSlides();

//first slide:
//make first slide and his dot visible when page is loaded
dotContainer[0].getElementsByTagName("i")[0].style.opacity = ".99";
document.getElementsByClassName("slide")[0].style.opacity = "1";
setTimeout(function() {
  document.getElementsByClassName("slideImgPlaceHolder")[0].style.animationPlayState = "running";
  document.getElementsByClassName("slideImgPlaceHolder")[0].style.animation ="zoom 26s infinite";
}, 1500)



var k = 0;
var slides = document.getElementsByClassName("slide");
var durationPassword = 0;

function slideShow() {
  //hide not active slides and their dots, reset their animation
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    dotContainer[0].getElementsByTagName("i")[i].style.opacity = ".4";
    // slideElement2.classList.remove("slide-animation")
  }

  //current slide logic:
  //use k as the position - index to show current slide, his dot and make active his animation
  if (k >= 0 && k <= images.length) {
    document.getElementsByClassName("slide")[k].style.opacity = "1";
    document.getElementsByClassName("slideImgPlaceHolder")[k].style.animationPlayState = "running";
    document.getElementsByClassName("slideImgPlaceHolder")[k].style.animation ="zoom 26s infinite";
    dotContainer[0].getElementsByTagName("i")[k].style.opacity = ".99";
    k++;
    if (k == images.length) {
      k = 0;
    }
  } else {
    k = 0;
  }
}

//onload start slideshow and on every 6 seconds
document.getElementsByTagName("body")[0].onload = function() {
    setInterval(slideShow, 6000);
};

var dots = dotContainer[0].getElementsByTagName("i");

//show slide after the dot is clicked; use dot index to show the slide with the same index "[x]"
for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function() {
    //hide not active slides
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
      dotContainer[0].getElementsByTagName("i")[i].style.opacity = "0.4";
    }
    //show current dot and current slide
    k = Array.from(this.parentNode.children).indexOf(this);
    slider[0].getElementsByClassName("slide")[k].style.opacity = "1";
    this.style.opacity = ".99";
  };
}


//make page scroll down when arrow icon is clicked
//works only with:
//<script
// src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>

var arrowContainer = document.getElementsByClassName('arrow-container')

  const scroll = new SmoothScroll('.slide-show a[href*="#"]', {
	speed: 1500
});

//script for slideshow - End
