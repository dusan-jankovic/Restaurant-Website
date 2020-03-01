var join = document.getElementsByClassName('join')
var closeI = document.getElementsByClassName('cl-i')
var emailSignup = document.getElementsByClassName('email-signup')
var form = document.getElementsByClassName('form')
var inputs = form[0].getElementsByTagName('input')
var errors = form[0].getElementsByClassName('input-errors')

  join[0].onclick = ()=> {
    emailSignup[0].style.display = 'flex'
    emailSignup[0].style.animationPlayState = 'running'

  }

  closeI[0].onclick = ()=> {
    for(let i = 0; i < inputs.length; i++){
      inputs[i].value = ''
      errors[i].innerHTML = ''
    }
    emailSignup[0].style.display = 'none'
  }
