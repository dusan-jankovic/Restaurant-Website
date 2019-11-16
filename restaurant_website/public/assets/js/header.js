// 
// //script for closing notification
// var notify = document.querySelector('.header-notification')
// var closeIcon = notify.querySelector('p').getElementById('close')
//
//  closeIcon.onclick = () => {
//    notify.style.height = '0'
//  }

//script for dropdown menu - Begin
var dropLi = document.getElementsByClassName("li-dropdown");

//add event "onclick" for each element with class "li-dropdown"
for (var i = 0; i < dropLi.length; i++) {
  dropLi[i].onclick = function() {
    //check if dropdown menu is already visible
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      this.getElementsByClassName("sub-ul")[0].style.display = "none";
    }
    //show only one dropdown menu and close other
    else if (document.querySelectorAll(".active").length == 1) {
      var x = document.querySelectorAll(".active");
      for (i = 0; i < x.length; i++) {
        x[i].getElementsByClassName("sub-ul")[0].style.display = "none";
        x[i].classList.remove("active");
      }
      this.classList.add("active");
      this.getElementsByClassName("sub-ul")[0].style.display = "block";
    }
    //show dropdown menu on first click
    else {
      this.classList.add("active");
      this.getElementsByClassName("sub-ul")[0].style.display = "block";
    }
  };
}
//script for dropdown menu - End
