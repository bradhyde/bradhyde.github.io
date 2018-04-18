<!DOCTYPE html>
<html>
  <head>
    <title>Marker Clustering</title>
    <!-- Required meta tags -->
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

     <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossorigin="anonymous"></script>
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        width: 100%;
        height: 100vh;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      .garage-sale-entry{
       /* background-color: #e0e6ea;
        */
        padding: 20px 0 15px 0;
        border-bottom: 1px solid #e0e6ea;
      }
      .garage-sale-list{
        max-height: 100vh;
        overflow-y:scroll;
      }

      .sidebar {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 100;
          padding: 15px;
          box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
      }
      .locate-on-map-button{
        margin-left: 15px;
        opacity: .5;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 bg-light sidebar garage-sale-list">
          <div class="sidebar-sticky">
            <div class="garage-sale-entry">
              <span class="h6">   6 Kenton Way <i class="fa fa-location-arrow locate-on-map-button" aria-hidden="true"></i></span>
              <ul class="list-unstyled small">
                <li>Thursday, September 3: 12:00 p.m.-9:00 p.m.</li>
                <li>Friday, September 3</li>
                <li>Saturday, September 3</li>
                <li>Sunday, September 3</li>
              </ul>
              <p class="small">
                antiques/collectibles, toys, clothing, tools, appliances
              </p>
            </div>  

            <div class="garage-sale-entry">
              <span class="h6">   10 Hazelwood Lane <i class="fa fa-location-arrow locate-on-map-button" data-lat="53.5610799" data-lng="-113.8877028" aria-hidden="true"></i></span>
              <ul class="list-unstyled small">
                <li>Thursday, September 3: 12:00 p.m.-9:00 p.m.</li>
                <li>Friday, September 3</li>
                <li>Saturday, September 3</li>
                <li>Sunday, September 3</li>
              </ul>
              <p class="small">
                antiques/collectibles, toys, clothing, tools, appliances
              </p>
            </div>

            <div class="garage-sale-entry">
              <span class="h6">   6 Kenton Way <i class="fa fa-location-arrow locate-on-map-button" aria-hidden="true"></i></span>
              <ul class="list-unstyled small">
                <li>Thursday, September 3: 12:00 p.m.-9:00 p.m.</li>
                <li>Friday, September 3</li>
                <li>Saturday, September 3</li>
                <li>Sunday, September 3</li>
              </ul>
              <p class="small">
                antiques/collectibles, toys, clothing, tools, appliances
              </p>
            </div>

            <div class="garage-sale-entry">
              <span class="h6">   6 Kenton Way <i class="fa fa-location-arrow locate-on-map-button" aria-hidden="true"></i></span>
              <ul class="list-unstyled small">
                <li>Thursday, September 3: 12:00 p.m.-9:00 p.m.</li>
                <li>Friday, September 3</li>
                <li>Saturday, September 3</li>
                <li>Sunday, September 3</li>
              </ul>
              <p class="small">
                antiques/collectibles, toys, clothing, tools, appliances
              </p>
            </div>

            <div class="garage-sale-entry">
              <span class="h6">   6 Kenton Way <i class="fa fa-location-arrow locate-on-map-button" aria-hidden="true"></i></span>
              <ul class="list-unstyled small">
                <li>Thursday, September 3: 12:00 p.m.-9:00 p.m.</li>
                <li>Friday, September 3</li>
                <li>Saturday, September 3</li>
                <li>Sunday, September 3</li>
              </ul>
              <p class="small">
                antiques/collectibles, toys, clothing, tools, appliances
              </p>
            </div>

            <div class="garage-sale-entry">
              <span class="h6">   6 Kenton Way <i class="fa fa-location-arrow locate-on-map-button" aria-hidden="true"></i></span>
              <ul class="list-unstyled small">
                <li>Thursday, September 3: 12:00 p.m.-9:00 p.m.</li>
                <li>Friday, September 3</li>
                <li>Saturday, September 3</li>
                <li>Sunday, September 3</li>
              </ul>
              <p class="small">
                antiques/collectibles, toys, clothing, tools, appliances
              </p>
            </div>
          </div>
          
        </div>
        <div class="col-md-9 offset-md-3 no-gutters row">
          <div id="map"></div>
        </div>
        
      </div>
      
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        
    <script>
      var labelnum = 1;
      var coordArray = [];


      function initMap() {
        $.getJSON('https://spreadsheets.google.com/feeds/list/1wlhi4Oe2yLVxSzKAojUP9bWiHEgOayptGTkVlq-b6aU/od6/public/values?alt=json', function(data) {
        
               
                for (var i = 0; i < data.feed.entry.length; i++) {

                    if(labelnum < 10){
                      var icon = 'data:image/svg+xml;utf-8, \
                               <svg height="35" width="35" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"> \
                                 <circle cx="33%" cy="43%" r="15" style="stroke:#000000; stroke-width: 4; fill:#ffffff"/> \
                                 <text x="25%" y="55%" fill="black" font-family = "sans-serif" font-weight = "bold" font-size = "14">' + labelnum + '</text> \
                               </svg>'
                    }
                    else{
                      var icon = 'data:image/svg+xml;utf-8, \
                               <svg height="50" width="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"> \
                                 <circle cx="40%" cy="43%" r="15" style="stroke:#000000; stroke-width: 4; fill:#ffffff"/> \
                                 <text x="55%" y="55%" fill="black" font-family = "sans-serif" font-weight = "bold" font-size = "14">' + labelnum + '</text> \
                               </svg>'
                    }
                    
        
                  var latLong = data.feed.entry[i].gsx$coordinates.$t;
                  var coordinates = latLong.split(',');
                  var latCoord = Number(coordinates[0]);
                  var lngCoord = Number(coordinates[1]);
                  var lol = {};
                  var lol = {lat: latCoord, lng: lngCoord};


                  console.log(labelnum);
                  console.log(latCoord);
                  console.log(lngCoord);


                  var marker = new google.maps.Marker({
                     position: lol,
                     icon: icon,
                     // icon: 'icons/' + labelnum + '.svg',
                     map: map
                   });

                  labelnum++;
                                  
                                  

              
                }
               
                return coordArray;
        });


        var mapCenter = new google.maps.LatLng(53.555182, -113.910255);

        var styles = [
                    {
                    "featureType": "landscape",
                    "stylers": [
                      { "color": "#ffffff" }
                    ]
                    },{
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      { "color": "#3598db" }
                    ]
                    },{
                    "featureType": "road.highway",
                    "elementType": "labels.text",
                    "stylers": [
                      { "color": "#000000" },
                      { "weight": 1 }
                    ]
                    },{
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      { "color": "#ffffff" },
                      { "weight": 6.8 }
                    ]
                    },{
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                      { "color": "#3598db" }
                    ]
                    },{
                    "featureType": "road.arterial",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      { "weight": 8 },
                      { "color": "#ffffff" }
                    ]
                    },{
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                      { "visibility": "simplified" },
                      { "weight": 1 },
                      { "color": "#7e8c8d" }
                    ]
                    },{
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      { "visibility": "off" }
                    ]
                    },{
                    "featureType": "landscape.man_made",
                    "stylers": [
                      { "visibility": "on" }
                    ]
                    }
                  ];
                  var mapOptions = {
                    center: mapCenter,
                    zoom: 13,
                    mapTypeControl: false,
                    panControl: true,
                    zoomControl: true,
                    scaleControl: false,
                    fullscreenControl: false,
                    streetViewControl: false
                  };


        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        map.setOptions({styles: styles});

      function newLocation(newLat,newLng)
      {
        map.setCenter({
          lat : newLat,
          lng : newLng,
        });

        map.setZoom(17);
      }


      $('.locate-on-map-button').click(function(){
          newLocation(parseFloat($(this).attr('data-lat')),parseFloat($(this).attr('data-lng')));
      });

        // // Add a marker clusterer to manage the markers.
        // var markerCluster = new MarkerClusterer(map, coordArray,
        //     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

        // var markerCluster = new MarkerClusterer(map, markers,
        //     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      



    </script>
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>
            
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGIQKpeigO9TbYkvtAzBwc-5-8PFSyi9k&callback=initMap">
    </script>
  </body>
</html>
