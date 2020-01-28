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
               <a href='book_event_form_la.php' class="section-a1">
                  <section>
                    <div>
                      <img src="../assets/images/latest1.jpg" alt="">
                    </div>
                       <h4>West Hollywood</h4>
                         <button class='default' id='westHollywood'>Inquire now</button>
                  </section>
                </a>
                <a href='book_event_form_sc.php' class="section-a2">
                  <section>
                    <div>
                      <img src="../assets/images/latest2.jpg" alt="">
                    </div>
                       <h4>Scottsdale</h4>
                         <button class='default' id='scottsdale'>Inquire now</button>
                  </section>
                </a>
           </div>
         </main>

  <?php include '../../footer.php'; ?>

 <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>
 <script>
   var filePath = '../'
   var sliderSize = 'm'
 </script>
 <script src='../assets/js/header.js'></script>
 <script src='../assets/js/experience.js'></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

</body>
</html>
