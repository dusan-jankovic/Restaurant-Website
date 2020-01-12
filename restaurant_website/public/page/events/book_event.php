<!DOCTYPE html>
 <html>
 <head>
   <?php include '../../meta_tags.php'; ?>
   <link rel="stylesheet" href="../assets/css/reset.css">
   <link rel="stylesheet" href="../assets/css/header.css">
   <link rel="stylesheet" href="../assets/css/events/bookEvent.css">
   <link rel="stylesheet" href="../assets/css/footer.css">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet">
 </head>
 <body>

   <?php  $deepFile = 1; ?>
   <?php include '../../header.php'; ?>
   <?php include 'book_event_data.php' ?>


         <main>
           <div class="slide-show">
               <div class='dot-container'>
               </div>
             <a href="#intro">
               <div class='arrow-container'>
                 <i class="fa fa-angle-down"></i>
               </div>
             </a>
           </div>

           <div class="bookEvent">
             <h3>The Latest</h3>
               <a href="" class="section-a1">
                  <section>
                    <div>
                      <img src="../assets/images/latest1.jpg" alt="">
                    </div>
                       <h4>West Hollywood</h4>
                         <button id='westHollywood'>Inquire now</button>
                  </section>
                </a>
                <a href="" class="section-a2">
                  <section>
                    <div>
                      <img src="../assets/images/latest2.jpg" alt="">
                    </div>
                       <h4>Scottsdale</h4>
                         <button id='scottsdale'>Inquire now</button>
                  </section>
                </a>
           </div>

           <div class='form-box'>
             <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
              <h2>Your Contact Information</h2>
              <p class='req-inst'>fields with * are required</p>
              <div class='typeField'>
               <label for="fname">First name *</label>
                 <input id='fname' type="text" name='fname' value="<?php echo htmlspecialchars($first_name); ?>">
                  <p class="input-errors"><?php echo $errors["fname"]; ?></p>
               </div>

              <div class='typeField'>
               <label for="lname">Last name *</label>
                 <input id='lname' type="text" name='lname' value="<?php echo htmlspecialchars($last_name); ?>">
                   <p class="input-errors"><?php echo $errors["lname"]; ?></p>
               </div>

              <div class='typeField'>
               <label for="email">Email address *</label>
                 <input id='email' type="text" name='email' value="<?php echo htmlspecialchars($email); ?>">
                   <p class="input-errors"><?php echo $errors["email"]; ?></p>
               </div>

              <div class='typeField'>
               <label for="phone">Phone number *</label>
                 <input id='phone' type="number" name='phone' value="<?php echo htmlspecialchars($phone); ?>">
                   <p class="input-errors"><?php echo $errors["phone"]; ?></p>
               </div>

              <div class='typeField'>
               <label for="company">Company</label>
                 <input id='company' type="text" name='company' value="<?php echo htmlspecialchars($company); ?>">
                   <p class="input-errors"><?php echo $errors["company"]; ?></p>
               </div>

             <h2>Your Event Details</h2>
             <p class='req-inst'>fields with * are required</p>
              <div class='typeField'>
               <label class="eType" for="event_type">Nature of this Event (e.g. Birthday Party or Business Diner) *</label>
                 <textarea class="eType" id='event_type' type="text" name='event_type'><?php echo htmlspecialchars($event_type) ?></textarea>
                   <p class="input-errors"><?php echo $errors["event_type"]; ?></p>
               </div>

              <div class='typeField'>
               <label for="event_date">Event Date *</label>
                <div>
                   <input id='event_date' type="text" name='event_date' value="<?php echo htmlspecialchars($event_date); ?>">
                    <i class="fa fa-calendar"></i>
                      <p class="input-errors"><?php echo $errors["event_date"]; ?></p>
                </div>
              </div>

              <div class='typeField'>
               <label for="stime">Start Time *</label>
                <div>
                   <select id='stime' class='stime' name="stime">
                     <option class='selected' selected><?php echo htmlspecialchars($stime) ?></option>
                   </select>
                    <i class="fa fa-clock-o"></i>
                      <p class="input-errors"><?php echo $errors["stime"]; ?></p>
                </div>
              </div>

              <div class='typeField'>
                <label for="etime">End Time *</label>
                 <div>
                    <select id='etime' class='etime' name="etime">
                      <option class='selected' selected><?php echo htmlspecialchars($etime) ?></option>
                    </select>
                      <i class="fa fa-clock-o"></i>
                        <p class="input-errors"><?php echo $errors["etime"]; ?></p>
                 </div>
              </div>

              <div class='typeField'>
                <label for='nOp'>Number of People *</label>
                  <input type='number' id='nOp' name='number_of_people' value="<?php echo htmlspecialchars($number_of_people); ?>">
                    <p class="input-errors"><?php echo $errors["number_of_people"]; ?></p>
              </div>

               <div class='typeField'>
                <label for='additional_info'>Is there any additional information you would like to add?</label>
                  <textarea type='text' name='additional_info' id='additional_info'><?php echo htmlspecialchars($additional_info) ?></textarea>
                    <button type='submit' name='submit' id='submitBtn'>Submit</button>
                </div>
             </form>

             <div class="close">
               <i class='fa fa-close'></i>
             </div>
         </main>

 <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>
 <script>
   var filePath = '../'
   var sliderSize = 'm'
 </script>
 <script src='../assets/js/header.js'></script>
 <script src='../assets/js/experience.js'></script>
 <script src='../assets/js/bookEvent.js'></script>


</body>
</html>
