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
             <form action="index.html" method="post">
              <h2>Your Contact Information</h2>
              <div class='typeField'>
               <label for="fname">First name</label>
                 <input id='fname' type="text" name='fname'>
               </div>

              <div class='typeField'>
               <label for="lname">Last name</label>
                 <input id='lname' type="text" name='lname'>
               </div>

              <div class='typeField'>
               <label for="email">Email address</label>
                 <input id='email' type="email" name='email'>
               </div>

              <div class='typeField'>
               <label for="phone">Phone number</label>
                 <input id='phone' type="number" name='phone'>
               </div>

              <div class='typeField'>
               <label for="company">Company</label>
                 <input id='company' type="text" name='company'>
               </div>

             <h2>Your Event Details</h2>
              <div class='typeField'>
               <label class="eType" for="event_type">Nature of this Event (e.g. Birthday Party or Business Diner)</label>
                 <textarea class="eType" id='event_type' type="text" name='event_type'></textarea>
               </div>

              <div class='typeField'>
               <label for="event_date">Event Date</label>
                <div>
                   <input id='event_date' type="text" name='event_date'>
                    <i class="fa fa-calendar"></i>
                </div>
              </div>

              <div class='typeField'>
               <label for="stime">Start Time</label>
                <div>
                   <select id='stime' class='stime' name="stime">
                   </select>
                    <i class="fa fa-clock-o"></i>
                </div>
              </div>

              <div class='typeField'>
                <label for="etime">End Time</label>
                 <div>
                    <select id='etime' class='etime' name="etime">
                    </select>
                      <i class="fa fa-clock-o"></i>
                 </div>
              </div>

              <div class='typeField'>
                <label for='nOp'>Number of People</label>
                  <input type='number' id='nOp' name='number_of_people'>
              </div>

               <div class='typeField'>
                <label for='aditional_info'>Is there any additional information you would like to add?</label>
                  <textarea type='text' name='aditional_info' id='aditional_info'></textarea>
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
