$('document').ready(function(){
  $('.form').on('submit', function(e){
    e.preventDefault()
      var fname = $('#fname').val()
      var fname_rx = /^[a-zA-Z]+$/;

      var email = $('#email').val()
      var email_rx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

      var phone = $('#phone').val()
      var phone_rx = /[0-9 -()+]+$/;

      var additional_info = $('#additional_info').val()
      var additional_info_rx = /^[0-9a-zA-Z]+$/;

      var errors = { fname: '',  email: '', phone: '', additional_info: ''};
      var data

      var errorsElement = document.getElementsByClassName('input-errors')

      //check fname
        if(fname == ''){
          errors["fname"] = "First name can't be blank"
          errorsElement[0].innerHTML = errors["fname"]
        } else if (!fname.match(fname_rx)){
          errors["fname"] = "Only letters and white space allowed"
          errorsElement[0].innerHTML = errors["fname"]
        } else {
            errors["fname"] = ''
            errorsElement[0].innerHTML = errors["fname"]
        }

        //check email
        if(email == ''){
          errors["email"] = "Email can't be blank"
          errorsElement[1].innerHTML = errors["email"]
        } else if (!email.match(email_rx)){
          errors["email"] = "Invalid email format"
          errorsElement[1].innerHTML = errors["email"]
        } else {
          errors["email"] = ''
          errorsElement[1].innerHTML = errors["email"]
        }

        //check phone
        if(phone == ''){
          errors["phone"] = "Phone can't be blank"
          errorsElement[2].innerHTML = errors["phone"]
        }  else {
          errors["phone"] = ''
          errorsElement[2].innerHTML = errors["phone"]
        }

          //check additional_info
          if(additional_info == ''){
            errorsElement[3].innerHTML = "Cover Letter can't be blank"
          } else {
            errors["additional_info"] = ''
            errorsElement[3].innerHTML = errors["additional_info"]
          }

      //check errors from array, if is empty send request
      var catchedItems = [];

      function check(){
        Object.values(errors).forEach((index) => {
         if(index != ''){
           catchedItems.push(index)
        }
      });
    }check()

      if(catchedItems.length == 0){
         $.ajax({
             type:"POST",
             url: "careers_data.php",
             data: $(".form").serialize(), // get all form field value in serialize form
             success: function(){
             }
         });
         setTimeout(function() {
            window.location.href = "../index.php";
          }, 2000);
        }
  })
})
