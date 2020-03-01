<?php

  include "../dbconnect.php";

  //input errors array
  $errors = array(
  "fname" => '', "lname" => '', "email" => '');

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

      // check first last name
       if(empty($_POST['lname'])){
         $errors['lname'] = 'Last name is required';
       } else {
         $first_name = $_POST['lname'];
         if (!preg_match("/^[a-zA-Z ]*$/",$first_name)) {
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

  //add data to database
   if(array_filter($errors)){
     //show errors in the form
   } else {
     $first_name = mysqli_real_escape_string($conn, $_POST["fname"]);
     $last_name = mysqli_real_escape_string($conn, $_POST["lname"]);
     $email = mysqli_real_escape_string($conn, $_POST["phone"]);

     $clearItems = array($first_name, $last_name, $email);

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
     $sql = "INSERT INTO newsletter (first_name, last_name, email)
                     VALUES ('$first_name', '$last_name', '$email')";

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
