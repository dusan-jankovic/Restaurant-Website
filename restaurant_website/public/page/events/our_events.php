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
            <input placeholder='search' type='text' name='search'>
              <i class="fa fa-close"></i>
          </div>
          <div>
            <i class="fa fa-angle-left"></i>
              <input type='date' name='date'>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>

        <div class='events-view'>
          <span>Subscribe</span>
           <div>
              <button type='button'>Pinboard</button>
              <button type="button">Agenda</button>
              <button type="button">Monthly</button>
           </div>
         </div>
       </div>

       <h1>Events for 5 jun</h1>
        <?php
        //get db connection script
          include '../../dbconnect.php';

          //make data and push them to the array, and from that array insert them to database (table)
     // ------------------------------------------------------------------------------------------------  //
          //number of arrays in array depence on number of columns in table; each array is column with values
          $data = [
          //event_name
            [],
          //day_date_time
            [],
         //images
            []
          ];

          $img = 'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5bad4c95df82fe2b07c6cb5e/square_272x272.jpg';
          $img2 = 'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5b88e341df82fe27b390eb8d/square_272x272.jpg';
          $img3 = 'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5d31f56adf82fe23aacf574f/square_272x272.jpg';

          for($i = 0; $i < 35; $i++) {
             array_push($data[0], )
          }

          //select data from db
            $sql = "SELECT id, event_name, day_date_time, image FROM our_events";
            $result = $conn->query($sql);

            //show data from db to the page
            if ($result->num_rows > 0) {

                // output data of each row
                while($row = mysqli_fetch_assoc($result)) {
                  echo "<div class='event'>
                          <img src=".$row["image"]." alt=''>
                            <h2>".$row["event_name"]."</h2>
                              <p>".$row["day_date_time"]."</p>
                         </div>";
              }
            }

            else {
                echo "0 results";
            }
            $conn->close()
        ?>

      </div>

      </main>



   <?php include '../../footer.php'; ?>

      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>
      <script>
        var deepFile = 0
      </script>
      <script src='../assets/js/header.js'></script>
      <script src='../assets/js/experience.js'></script>

    </body>
    </html>
