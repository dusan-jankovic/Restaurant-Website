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

//script for adding elements to "div.poster" - Begin
var posterImgs = [
  'https://exclusiveaccess.net/content/2017/10/Veuve-Clicquot-Presents-Yelloween-117-of-132-1200x800.jpg',
  'https://laguestlist.com/wp-content/uploads/2015/11/diephuis_toca_vc_110115-170.jpg',
  'https://d3emaq2p21aram.cloudfront.net/media/cache/venue_carousel/uploads/2016/02/Toca_Madera_Restaurant.jpg',
  'https://d3emaq2p21aram.cloudfront.net/media/cache/venue_carousel/uploads/2016/02/Toca_Madera_Courtyard.jpg',
  'http://static1.squarespace.com/static/5b184999f2e6b1c0be890cee/5b3bd5ae8a922ddc956dac04/5b6a86c103ce64348eb7b26a/1533708237675/Toca-Madera.jpg?format=1500w',
  'https://resizer.otstatic.com/v2/photos/huge/25129913.jpg',
  'https://www.discoverlosangeles.com/sites/default/files/insta_sync/2112645698393816858.jpg',
  'https://d3emaq2p21aram.cloudfront.net/media/cache/venue_carousel/uploads/2016/02/Toca_Madera_5.png',
  'https://www.discoverlosangeles.com/sites/default/files/insta_sync/2132228327816317946.jpg',
  'http://getwallpapers.com/wallpaper/full/0/e/2/105689.jpg'
]




  function addPOosters() {
    for(let i=0; i < posterImgs.length; i++) {
      var poster = document.getElementsByClassName('poster')
      var posterA = document.createElement("A")
      posterA.setAttribute('href', ' ')
      var posterDiv = document.createElement("DIV")
      var posterImg = document.createElement("IMG")
        posterA.appendChild(posterDiv)
        posterDiv.appendChild(posterImg)
        poster[0].appendChild(posterA)
        poster[0].getElementsByTagName('img')[i].setAttribute('src', posterImgs[i])
    }
  }
  addPOosters()


//script for adding elements to "div.poster" - End
