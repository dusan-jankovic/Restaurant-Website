<!DOCTYPE html>
  <html>
  <head>
    <?php include '../meta_tags.php'; ?>
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/header.css">
    <link rel="stylesheet" href="assets/css/menu.css">
    <link rel="stylesheet" href="assets/css/footer.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet">
  </head>
  <body>
    <?php include '../header.php'; ?>

    <main>

      <div class="slide-show">
        <h1>Menus</h1>
          <div class='dot-container'>
          </div>
        <a href="#menus">
          <div class='arrow-container'>
            <i class="fa fa-angle-down"></i>
          </div>
        </a>
      </div>

      <div class="menus" id="menus">
        <div class="row">
          <div class="scottsdale menu">
            Scottsdale dinner menu
          </div>
          <div class="la-dinner-menu menu">
            Los Angeles dinner menu
          </div>
          <div class="vegan menu">
            Vegan dinner menu
          </div>
          <div class='row-4-4'>
          <div class="dinner-cocktails menu">
            Dinner cocktails
          </div>
          <div class="dulces menu">
            Dulces
          </div>
          <div class="happy-hour menu">
            Happy hour
          </div>
          <div class="la-brunch menu">
            Los Angeles brunch
          </div>
        </div>
        <div class="la-brunch-cocktails menu">
          Los Angeles brunch cocktails
        </div>
      <div class="change">
        Menu subject to change*
      </div>
    </div>
      </div>

      <div class='menu-info' id='menu-info'></div>


    </main>

    <?php include '../footer.php'; ?>

    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>
    <script src='assets/js/header.js'></script>
    <script src='assets/js/menus.js'></script>

  </body>
  </html>
