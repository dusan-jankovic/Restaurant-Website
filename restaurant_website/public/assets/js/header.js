
//script for closing notification Begin
var notify = document.querySelector('.header-notification')
var closeIcon = notify.querySelector('p').querySelector('#close')

 closeIcon.onclick = () => {
   notify.style.transition = '1s height, 1s padding'
   notify.style.height = '0'
   notify.style.padding = '0'
 }
//script for closing notification End


//script for dropdown menu - Begin
var dropLi = document.getElementsByClassName("li-dropdown");

//add event "onclick" for each element with class "li-dropdown"
for (var i = 0; i < dropLi.length; i++) {
  dropLi[i].onclick = function(e) {
    e.stopPropagation()
    //check if dropdown menu is already visible and close the same
    if (this.classList.contains("active")) {
        this.classList.remove("active");
        this.getElementsByClassName("sub-ul")[0].style.display = "none";
        this.getElementsByClassName('fa-angle-down')[0].style.transform = "rotate(0deg)";
    }
    //show only one dropdown menu and close other
    else if (document.querySelectorAll(".active").length == 1) {
      var x = document.querySelectorAll(".active");
      for (i = 0; i < x.length; i++) {
        x[i].getElementsByClassName("sub-ul")[0].style.display = "none";
        x[i].classList.remove("active");
        x[i].getElementsByClassName('fa-angle-down')[0].style.transform = "rotate(0deg)";
      }
        this.classList.add("active");
        this.getElementsByClassName("sub-ul")[0].style.display = "block";
        this.getElementsByClassName('fa-angle-down')[0].style.transform = "rotate(-180deg)";
    }
    //show dropdown menu on first click
    else {
        this.getElementsByClassName('fa-angle-down')[0].style.transform = "rotate(-180deg)";
        this.classList.add("active");
        this.getElementsByClassName("sub-ul")[0].style.display = "block";
    }
  };
}


//exit dropdown menu when user click wherever on the page
document.addEventListener('click', closeDropDownMenu)

  function closeDropDownMenu() {
    var liDropDownActive = document.querySelector('.active')

    //turn off dropdown menu only If it is already acive and if "exit click" is not at the dropdown element
      if(event.target != liDropDownActive && document.querySelector('.active')) {
        liDropDownActive.querySelector(".sub-ul").style.display = "none";
        liDropDownActive.getElementsByClassName('fa-angle-down')[0].style.transform = "rotate(0deg)";
        liDropDownActive.classList.remove("active");
      }
  }

  //show/hide menu for tablets/mobiles when user click on menu icon - Begin
  document.getElementsByClassName('menu-icon')[0].onclick = ()=> {
  document.getElementsByClassName('header-menu2')[0].classList.toggle("activeSdMenu")
  document.getElementsByClassName('top')[0].classList.toggle('activeTop')
  document.getElementsByClassName('mid')[0].classList.toggle('activeMid')
  document.getElementsByClassName('bot')[0].classList.toggle('activeBot')
}
  //show/hide menu for tablets/mobiles when user click on menu icon - End

//script for dropdown menu - End
