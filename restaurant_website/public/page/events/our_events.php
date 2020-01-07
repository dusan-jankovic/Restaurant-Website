 <!DOCTYPE html>
  <html>
  <head>
    <?php include '../../meta_tags.php'; ?>
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/header.css">
    <link rel="stylesheet" href="../assets/css/events/ourEvents.css">
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

  <div class='events'>
      <div class='options'>
        <div class='search-div'>
          <div>
          </div>
          <div>
          </div>
        </div>

        <div class='events-view'>
          <span id='subscribe'>Subscribe</span>
           <div>
              <button type='button' id='pinb'>Pinboard</button>
              <button type="button" id='agen'>Agenda</button>
              <button type="button" id='month'>Monthly</button>
           </div>
         </div>
       </div>

      <div class='showMonth'>
        <i class="fa fa-angle-left"></i>
          <h1 class='day-month'></h1>
        <i class="fa fa-angle-right"></i>
      </div>

        <ul class='daysInWeek'>
          <li>Sunday</li>
          <li>Monday</li>
          <li>Tuesday</li>
          <li>Wednesday</li>
          <li>Thursday</li>
          <li>Friday</li>
          <li>Saturday</li>
        </ul>
        <div class='calendar'>
        </div>

        <div class='details-div'>
          <ul>
            <li id='back-btn'>back</li>
              <li><i class="fa fa-twitter"></i></li>
              <li><i class="fa fa-facebook"></i></li>
              <li><i class="fa fa-linkedin"></i></li>
              <li><i class="fa fa-save"></i></li>
            </ul>
        </div>
        <div class='gif'>
          <img src='http://eliot.dystar.com/eliot/main/images/waiting.gif' alt='load-gif'>
        </div>
    </div>
  </main>

   <?php include '../../footer.php'; ?>

      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>
      <script>
        var deepFile = 0
      </script>
      <script src='../assets/js/header.js'></script>
      <script src='../assets/js/experience.js'></script>
      <script src='../assets/js/ourEvents.js'></script>


    </body>
    </html>
