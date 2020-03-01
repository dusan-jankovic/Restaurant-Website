<?php

  include "../../dbconnect.php";

  //input errors array
  $errors = array(
  "fname" => '', "lname" => '', "email" => '', "phone" => '',
  "company" => '', "event_type" => '', "event_date" => '',
  "stime" => '', "etime" => '', "number_of_people" => '', "additional_info" => '');

    if(isset($_POST['submit'])){
     // check first name
      if(empty($_POST['fname'])){
        $errors['fname'] = 'First name is required';
      } else {
        $first_name = $_POST['fname'];
        if (!preg_match("/^[a-zA-Z ]*$/",$first_name)) {
            $errors['fname'] = "Only letters and white space allowed";
          }
      }

      //check last name
       if(empty($_POST['lname'])){
         $errors['lname'] = 'Last name is required';
       } else {
         $last_name = $_POST['lname'];
         if (!preg_match("/^[a-zA-Z ]*$/",$last_name)) {
             $errors['lname'] = "Only letters and white space allowed";
           }
       }

       //check email
        if(empty($_POST['email'])){
          $errors['email'] = 'Email is required';
        } else {
          $email = $_POST['email'];
           if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
             $errors['email'] = 'Invalid email format';
           }
        }

        //check phone number
         if(empty($_POST['phone'])){
           $errors['phone'] = 'Phone number is required';
         } else {
           $phone = $_POST['phone'];
         }

         //check company
          if(!empty($_POST['company'])){
            $company = $_POST['company'];
            if (!preg_match("/./",$company)) {
                $errors['company'] = "Only letters, white space and numbers allowed";
              }
          }

          //check event_type
           if(empty($_POST['event_type'])){
             $errors['event_type'] = 'Event type is required';
           } else {
             $event_type = $_POST['event_type'];
             if (!preg_match("/^[a-zA-Z ]*$/",$event_type)) {
                 $errors['event_type'] = "Only letters and white space allowed";
               }
           }

           //check event_date
            if(empty($_POST['event_date'])){
              $errors['event_date'] = 'Event date is required';
            } else {
              $event_date = $_POST['event_date'];
              if (!preg_match("/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/",$event_date)) {
                  $errors['event_date'] = "Date format YYYY-MM-DD";
                }
            }

            //check start time
             if(empty($_POST['stime'])){
               $errors['stime'] = 'Start time is required';
             } else {
               $stime = $_POST['stime'];
               if (!preg_match("/[^0-9]/",$stime)) {
                   $errors['stime'] = "Only numbers allowed 0-9";
                 }
             }

             //check end time
              if(empty($_POST['etime'])){
                $errors['etime'] = 'End time is required';
              } else {
                $etime = $_POST['etime'];
                if (!preg_match("/[^0-9]/",$etime)) {
                    $errors['etime'] = "Only numbers allowed 0-9";
                  }
              }

              //check number_of_people
               if(empty($_POST['number_of_people'])){
                 $errors['number_of_people'] = 'Number of people is required';
               } else {
                 $number_of_people = $_POST['number_of_people'];
               }

               //check additional_info
                if(!empty($_POST['additional_info'])){
                  $additional_info = $_POST['additional_info'];
                  if (!preg_match("/./",$additional_info)) {
                      $errors['additional_info'] = "Only letters, white space and numbers allowed";
                    }
                }
              }

  //add data to database
   if(array_filter($errors)){
     //show errors in the form
   } else {
     $first_name = mysqli_real_escape_string($conn, $_POST["fname"]);
     $last_name = mysqli_real_escape_string($conn, $_POST["lname"]);
     $email = mysqli_real_escape_string($conn, $_POST["email"]);
     $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
     $company = mysqli_real_escape_string($conn, $_POST["company"]);
     $event_type = mysqli_real_escape_string($conn, $_POST["event_type"]);
     $event_date = mysqli_real_escape_string($conn, $_POST["event_date"]);
     $event_start_time = mysqli_real_escape_string($conn, $_POST["stime"]);
     $event_end_time = mysqli_real_escape_string($conn, $_POST["etime"]);
     $number_of_people = mysqli_real_escape_string($conn, $_POST["number_of_people"]);
     $additional_info = mysqli_real_escape_string($conn, $_POST["additional_info"]);

     $clearItems = array($first_name, $last_name, $email, $phone, $event_type, $event_date, $event_start_time, $event_end_time, $number_of_people);

     $len = sizeof($clearItems);

     for($i=0; $i<$len; $i++){
       print_r($clearItems[$i]);
     }

     $error = array();

     //if any of item from array clearItems does not have valid values, than error exist and do not send data to db
      for($i = 0; $i < $len; $i++){
        if($clearItems[$i] != ''){
          array_push($error, $clearItems[$i]);
        }
      }

    $len2 = sizeof($error);


  //only when $len2 == $len it means that there is no errors
    if($len2 == $len){
     $sql = "INSERT INTO book_event_la (first_name, last_name, email, phone, company, event_type, event_date, event_start_time, event_end_time, number_of_people, additional_info)
                     VALUES ('$first_name', '$last_name', '$email', '$phone', '$company', '$event_type', '$event_date', '$event_start_time', '$event_end_time', '$number_of_people', '$additional_info')";

    // save to db and check
    if(mysqli_query($conn, $sql)){
      //success
      // header('Location: book_event.php');
    } else {
      //error
      echo 'error: ' . mysqli_error($conn);
    }
  }
}

?>
