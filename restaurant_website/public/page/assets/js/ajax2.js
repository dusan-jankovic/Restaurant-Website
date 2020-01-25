$('document').ready(function(){
  $('.form').on('submit', function(e){
    e.preventDefault()
      var fname = $('#fname').val()
      var fname_rx = /^[a-zA-Z]+$/;

      var lname = $('#lname').val()
      var lname_rx = /^[a-zA-Z]+$/;

      var email = $('#email').val()
      var email_rx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

      var phone = $('#phone').val()
      var phone_rx = /[0-9 -()+]+$/;

      var company = $('#company').val()
      var company_rx = /^[0-9a-zA-Z]+$/;

      var event_type = $('#event_type').val()
      var event_type_rx = /^[0-9a-zA-Z]+$/;

      var event_date = $('#event_date').val()
      var event_date_rx = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

      var stime = $('#stime').val()

      var etime = $('#etime').val()

      var number_of_people = $('#nOp').val()
      var number_of_people_rx = /[0-9 -()+]+$/;

      var additional_info = $('#additional_info').val()
      var additional_info_rx = /^[0-9a-zA-Z]+$/;

      var errors = { fname: '', lname: '', email: '', phone: '', company: '', event_type: '', event_date: '', stime: '', etime: '', number_of_people: '', additional_info: ''};
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

        //check lname
        if(lname == ''){
          errors["lname"] = "Last name can't be blank"
          errorsElement[1].innerHTML = errors["lname"]
        } else if (!lname.match(lname_rx)){
          errors["lname"] = "Only letters and white space allowed"
          errorsElement[1].innerHTML = errors["lname"]
        } else {
          errors["lname"] = ''
          errorsElement[1].innerHTML = errors["lname"]
        }

        //check email
        if(email == ''){
          errors["email"] = "Email can't be blank"
          errorsElement[2].innerHTML = errors["email"]
        } else if (!email.match(email_rx)){
          errors["email"] = "Invalid email format"
          errorsElement[2].innerHTML = errors["email"]
        } else {
          errors["email"] = ''
          errorsElement[2].innerHTML = errors["email"]
        }

        //check phone
        if(phone == ''){
          errors["phone"] = "Phone can't be blank"
          errorsElement[3].innerHTML = errors["phone"]
        }  else {
          errors["phone"] = ''
          errorsElement[3].innerHTML = errors["phone"]
        }

        //check company
        if (!company.match(company_rx) && company != ''){
          errors["company"] = "Only letters, white space and numbers allowed"
          errorsElement[4].innerHTML = errors["company"]
        } else {
          errors["company"] = ''
          errorsElement[4].innerHTML = errors["company"]
        }

         //check event_type
         if(event_type == ''){
            errors["event_type"] = "Event type can't be blank"
            errorsElement[5].innerHTML = errors["event_type"]
          } else if (!event_type.match(event_type_rx)){
            errors["event_type"] = "Only letters and white space allowed";
            errorsElement[5].innerHTML = errors["event_type"]
          } else {
            errors["event_type"] = ''
            errorsElement[5].innerHTML = errors["event_type"]
          }

          //check event_date
          if(event_date == ''){
            errors["event_date"] = "Event date can't be blank"
            errorsElement[6].innerHTML = errors["event_date"]
          } else if (!event_date.match(event_date_rx)){
            errors["event_date"] = "Date format DD-MM-YYYY"
            errorsElement[6].innerHTML = errors["event_date"]
          } else {
            errors["event_date"] = ''
            errorsElement[6].innerHTML = errors["event_date"]
          }

          //check stime
          if(stime == ''){
            errors["stime"] = "Start time can't be blank"
            errorsElement[7].innerHTML = errors["stime"]
          } else {
            errors["stime"] = ''
            errorsElement[7].innerHTML = errors["stime"]
          }

          //check etime
          if(etime == ''){
            errors["etime"] = "End time can't be blank"
            errorsElement[8].innerHTML = errors["etime"]
          } else {
            errors["etime"] = ''
            errorsElement[8].innerHTML = errors["etime"]
          }

          //check number_of_people
          if(number_of_people == ''){
            errors["number_of_people"] = "Number of people can't be blank"
            errorsElement[9].innerHTML = errors["number_of_people"]
          } else if (!number_of_people.match(number_of_people_rx)){
            errors["number_of_people"] = 'Number of people is required'
            errorsElement[9].innerHTML = errors["number_of_people"]
          } else {
            errors["number_of_people"] = ''
            errorsElement[9].innerHTML = errors["number_of_people"]
          }

          //check additional_info
          if (!additional_info.match(additional_info_rx) && additional_info != ''){
            errors["additional_info"] = "Only letters, white space and numbers allowed"
            errorsElement[10].innerHTML = errors["additional_info"]
          } else {
            errors["additional_info"] = ''
            errorsElement[10].innerHTML = errors["additional_info"]
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
             url: "book_event_data_sc.php",
             data: $(".form").serialize(), // get all form field value in serialize form
             success: function(){
               //$("#ajax-form").fadeOut();
             }
         });
         setTimeout(function() {
            window.location.href = "book_event.php";
          }, 2000);
        }
  })
})
