<!DOCTYPE html>
  <html>
  <head>
    <?php include '../meta_tags.php'; ?>
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/header.css">
    <link rel="stylesheet" href="assets/css/experience.css">
    <link rel="stylesheet" href="assets/css/footer.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet">
  </head>
  <body>
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

      <div class="concept" id='concept'>
        <h1>Concept</h1>
          <p class='concept-para'>Toca Madera re-imagines traditional Mexican cuisine by taking a modern approach
            pairing locally-sourced ingredients with bold flavors. Our shared-plate menu is
             designed to offer an array of options for every eater.</p>
              <section>
                <div class="div-text">
                  <p>Our signature farm-to-glass cocktails use only fresh, seasonal ingredients and our dynamic bar program
                     offers a vast selection of the finest tequilas and mezcals,
                      as well as a rotating selection of wines from across the globe.</p>
                </div>
                  <div class="div-img">
                  </div>
              </section>

              <section>
                <div class="div-img">
                </div>
                <div class="div-text">
                  <p>At Toca Madera, we've thoughtfully curated all the elements of the
                     restaurant to elicit an unmatched sensory experience.
                      From our visually stunning design and seductive music to our award-winning menu, let Toca Madera transport you to a world that’s both modern and timeless.</p>
                </div>
              </section>
      </div>
    </main>


    <?php include '../footer.php'; ?>

    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>
    <script>
      var filePath = ''
      var sliderSize = 'm'
    </script>
    <script src='assets/js/header.js'></script>
    <script src='assets/js/experience.js'></script>

  </body>
</html>
