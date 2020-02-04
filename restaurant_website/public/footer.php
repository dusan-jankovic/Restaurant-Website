<footer>
  <div class='email-signup'>
    <form class='form' method="POST">
      <h2>Email Signup</h2>
      <div class='typeField'>
         <input id='fname' type="text" placeholder="First Name" name='fname' value="<?php echo htmlspecialchars($first_name); ?>">
          <p class="input-errors"></p>
       </div>

       <div class='typeField'>
          <input id='lname' type="text" placeholder="Last Name" name='lname' value="<?php echo htmlspecialchars($lname); ?>">
            <p class="input-errors"></p>
        </div>

      <div class='typeField'>
         <input id='email' placeholder="Email" type="text" name='email' value="<?php echo htmlspecialchars($email); ?>">
           <p class="input-errors"></p>
            <button type='submit' name='submit' id='submitBtn'>Submit</button>
       </div>

       <div class='close-icon cl-i'>
         <i class='fa fa-close'></i>
       </div>
     </form>
   </div>

  <div class='mobile-footer'>
    RESERVATIONS
  </div>
  <div class="social-net">
    <a href="#"><i class="fa fa-facebook-f"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-instagram"></i></a>
  </div>

  <div class="find-us">
    <a href="#"></a>
    <a href="#">Know before you go</a>
    <button type='button' class='reservation-button join'>Join our newsletter</button>
  </div>

  <script src='assets/js/footer.js'></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src='assets/js/ajax-newsletter.js'></script>

</footer>
