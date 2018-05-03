<!DOCTYPE html>
<html>
  <head>
          <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-15477367-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-15477367-2');
</script>

    <title>This Week's Garage Sales - City of Spruce Grove</title>
    <!-- Required meta tags -->
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<script src="https://use.typekit.net/enl4roo.js"></script>
    <script>try { Typekit.load({ async: true }); } catch (e) { }</script>
     <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="gs_list.css">
    <link rel="stylesheet" href="gs_list_print.css">

    <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
    <link rel="manifest" href="/icons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta name="google-site-verification" content="qlSRGW830_CPbzIUcjL_mYXlJOoj0GC7ofrSuldXzac" />
    
  </head>
  <body>
     <div class="overlay">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw loading-icon"></i>
    </div>
    <nav class="navbar fixed-top navbar-expand-lg gs-navbar">
          <span class="navbar-brand col-sm-3 col-md-2 mr-0"><img class="navbar-logo" src="https://www.sprucegrove.org/media/2644/cosg_icon.svg">Spruce Grove Garage Sales @gsDates</span>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
             <ul class="navbar-nav">
               <li class="nav-item">
                 <a class="nav-link gs-back-button" href="#"><i class="fa fa-fw fa-arrow-left"></i> Back</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link xs-hidden gs-list-print__btn" href="#" onclick="window.print()"><i class="fa fa-fw fa-print"></i> Print</a>
               </li>
             </ul>
           </div>
        </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-12 sidebar garage-sale-list">
          <div class="sidebar-sticky">
            <h6 class="offset-sm-1 font-weight-bold">Addresses</h6>
            <div id="gs-list"> </div>

          </div>
          
        </div>
        <div class="col-lg-9 col-md-12 ml-sm-auto no-gutter px-0">
          <div class="reset-map"><i class="fa fa-crosshairs" aria-hidden="true"></i></div>
          <div id="map"></div>
        </div>
        @{
            var gsMap = Model.Content.GetPropertyValue<IPublishedContent>("gsMap");
            
            <img src="@gsMap.Url" class="printable-map" alt="">
        }
        
      </div>
      
    </div>
    <footer><span class="h4">Put your sale on the map! www.sprucegrove.org/garagesales</span></footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="~/scripts/gs_list.js"></script>
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>
            
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGIQKpeigO9TbYkvtAzBwc-5-8PFSyi9k&callback=initMap">
    </script>

  </body>
</html>
