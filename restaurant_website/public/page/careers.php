<!DOCTYPE html>
 <html>
 <head>
   <?php include '../meta_tags.php'; ?>
   <link rel="stylesheet" href="assets/css/reset.css">
   <link rel="stylesheet" href="assets/css/header.css">
   <link rel="stylesheet" href="assets/css/page/careers.css">
   <link rel="stylesheet" href="assets/css/footer.css">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet">
 </head>
 <body>

   <?php  $deepFile = 0; ?>
   <?php include '../header.php'; ?>

 <main>
   <div class="slide-show">
       <div class='dot-container'>
       </div>
     <a href="#concept">
       <div class='arrow-container'>
         <i class="fa fa-angle-down"></i>
       </div>
     </a>
   </div>

  <h1 class='title'>JOIN TEAM TOCA!</h1>
   <p class='p-intro'>Toca Madera is an escape from the mundane.
      Our signature menu of modern Mexican cuisine - fresh organic ingredients and diversity for every dietary preference
       - is married to our carefully curated music and performance programming to elicit an unforgettable dining experience.
       Join a high-energy team that delivers a feast for the senses on a nightly basis.  We strive for excellence with an elevated sense of hospitality.
        We care for our team and our community.  Come work in one of the most exciting restaurants in Los Angeles & Scottsdale!</p>

   <div class='form-box'>
    <form class='form' action="" method="POST">
     <div class='typeField'>
        <input id='fname' type="text" placeholder="Name" name='fname' value="<?php echo htmlspecialchars($first_name); ?>">
         <p class="input-errors"></p>
      </div>

     <div class='typeField'>
        <input id='email' placeholder="Email" type="text" name='email' value="<?php echo htmlspecialchars($email); ?>">
          <p class="input-errors"></p>
      </div>

     <div class='typeField'>
        <input id='phone' type="number" placeholder="Phone Number" name='phone' value="<?php echo htmlspecialchars($phone); ?>">
          <p class="input-errors"></p>
      </div>

      <div class='typeField'>
         <textarea type='text' placeholder="Cover Letter" name='additional_info' id='additional_info'><?php echo htmlspecialchars($additional_info) ?></textarea>
          <p class="input-errors"></p>
           <button type='submit' name='submit' id='submitBtn'>Submit</button>
       </div>

    </form>
  </div>
</main>
<script>
  var filePath = ''
  var sliderSize = 'sm'
</script>
<script src='assets/js/header.js'></script>
<script src='assets/js/experience.js'></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src='assets/js/ajax-careers.js'></script>

 <?php include '../footer.php'; ?>
</body>
</html>
