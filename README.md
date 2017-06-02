<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="main.css">
  <title>Coffee</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>

  <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <h1 id="mainH">Coffee shops near you!</h1>
      </div>
    </nav>
    <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">
            <div class="wrapp">


              <section class="front">
                    <img class="img-responsive" id="mainImg" src="img/Coffee.jpg" alt="coffee shops">
                    <p id="p1">*need permission for yours geolocation</p>
                  <footer class="butt">
                   <div >
                   <button id="da" class="btn btn-warning" type="button" name="button">allow</button>
                   </div> <br>
                   <div >
                   <button id="ne" class="btn btn-danger" type="button" name="button">deny</button>
                   </div>
                 </footer>
              </section>
              <section class="back">
                 <table id="geoTe" class="table table-striped table-bordered">
                   <thead>
                      <tr class="active warning">
                        <th id="n">N</th>
                        <th id="e">E</th>
                      </tr>
                   </thead>
                   <tbody></tbody>
                 </table><br>
                 <table id="sq" class="table table-striped table-bordered">
                   <thead>
                      <tr class="active success">
                        <th id="nm">name</th>
                        <th id="ad">address</th>
                        <th id="ph">phone</th>
                        <th id="ds">distance</th>
                        <th id="mo">more</th>
                      </tr>
                   </thead>
                   <tbody></tbody>
                 </table>
              </section>
              </div>
           </div>
      </div>
    </div>




























  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <script src="main.js" charset="utf-8"></script>
</body>
</html>

