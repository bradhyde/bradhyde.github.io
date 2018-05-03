      var labelnum = 1;
      var coordArray = [];


      function initMap() {
        $.getJSON('https://spreadsheets.google.com/feeds/list/1wlhi4Oe2yLVxSzKAojUP9bWiHEgOayptGTkVlq-b6aU/od6/public/values?alt=json', function(data) {
                
                console.log(data);
                
                for (var i = 0; i < data.feed.entry.length; i++) {

                    var latCoord = Number(data.feed.entry[i].gsx$latcoordinate.$t);
                    var lngCoord = Number(data.feed.entry[i].gsx$lngcoordinate.$t);
                    var lol = {};
                    var lol = {lat: latCoord, lng: lngCoord};
                  
                    var icon = {

                      path: "M19.7,14.3L19.7,14.3c-0.2,0.5-0.5,1-0.8,1.5l-8.2,14.2L2.4,15.7c-1.1-1.6-1.8-3.6-1.8-5.7c0-5.5,4.5-10,10-10 c5.5,0,10,4.5,10,10C20.6,11.5,20.3,13,19.7,14.3L19.7,14.3z",
                      fillColor: '#ff7e40',
                      fillOpacity: 1,
                      strokeWeight: 0,
                      
                      size: new google.maps.Size(20, 30),
                      origin: new google.maps.Point(0, 30),
                      anchor: new google.maps.Point(0, 30),
                      labelOrigin: new google.maps.Point(10, 10),
                      scale: 1.25
                    };

                    var marker = new google.maps.Marker({
                        position: lol,
                     
                        icon: icon,
                        label: {
                             text: labelnum.toString(),
                             color: "#ffffff",
                             fontSize: "16px",
                             fontWeight: "bold"
                        },                     
                        map: map
                    });

                  var gsDates = "<li>" + data.feed.entry[i].gsx$day1.$t + ": " + data.feed.entry[i].gsx$day1start.$t  +  "-" + data.feed.entry[i].gsx$day1end.$t  + "</li>";

                  if(data.feed.entry[i].gsx$day2.$t != ""){
                    gsDates += "<li>" + data.feed.entry[i].gsx$day2.$t + ": " + data.feed.entry[i].gsx$day2start.$t  +  "-" + data.feed.entry[i].gsx$day2end.$t  + "</li>";
                  }
                  if(data.feed.entry[i].gsx$day3.$t != ""){
                    gsDates += "<li>" + data.feed.entry[i].gsx$day3.$t + ": " + data.feed.entry[i].gsx$day3start.$t  +  "-" + data.feed.entry[i].gsx$day3end.$t  + "</li>";
                  }
                  if(data.feed.entry[i].gsx$day4.$t != ""){
                    gsDates += "<li>" + data.feed.entry[i].gsx$day4.$t + ": " + data.feed.entry[i].gsx$day4start.$t  +  "-" + data.feed.entry[i].gsx$day4end.$t  + "</li>";
                  }

                  if(data.feed.entry[i].gsx$day5.$t != ""){
                    gsDates += "<li>" + data.feed.entry[i].gsx$day5.$t + ": " + data.feed.entry[i].gsx$day5start.$t  +  "-" + data.feed.entry[i].gsx$day5end.$t  + "</li>";
                  }

                  var clearFix = document.createElement('div');
                  clearFix.className = 'clearfix';

                  var gsEntryDiv = document.createElement('div');
                  gsEntryDiv.className = 'garage-sale-entry offset-md-1 offset-sm-1 offset-xs-2';
                  

                  var gsEntryNum = document.createElement('span');
                  gsEntryNum.className = 'garage-sale-entry__num h6';
                  gsEntryNum.innerHTML = labelnum + ".";

                  var gsEntryCenterMarker = document.createElement('i');
                  gsEntryCenterMarker.className = 'fa fa-location-arrow locate-on-map-button';
                  gsEntryCenterMarker.setAttribute('data-lat', latCoord);
                  gsEntryCenterMarker.setAttribute('data-lng', lngCoord);

                  var gsEntryAdd = document.createElement('span');
                  gsEntryAdd.className = 'font-weight-bold garage-sale-entry-add';
                  gsEntryAdd.innerHTML = data.feed.entry[i].gsx$address.$t + " ";
                  gsEntryAdd.appendChild(gsEntryCenterMarker);

                  var gsEntryNeighborhood = document.createElement('div');
                  gsEntryNeighborhood.className = 'font-weight-bold small garage-sale-entry-nbhd';
                  gsEntryNeighborhood.innerHTML = data.feed.entry[i].gsx$neighborhood.$t;

                  var dateList = document.createElement('ul');
                  dateList.className = 'list-unstyled small';
                  dateList.innerHTML = gsDates;

                  var items = document.createElement('p');
                  items.className = 'small gs-items';
                  items.innerHTML = data.feed.entry[i].gsx$items.$t + ", " + data.feed.entry[i].gsx$other.$t;

                  dateList.innerHTML = gsDates;

                  gsEntryDiv.appendChild(gsEntryNum);
                  gsEntryDiv.appendChild(gsEntryAdd);
                  gsEntryDiv.appendChild(gsEntryNeighborhood);
                  gsEntryDiv.appendChild(dateList);
                  gsEntryDiv.appendChild(items);



                  document.getElementById('gs-list').appendChild(gsEntryDiv);

                  if(labelnum % 4 == 0){
                    document.getElementById('gs-list').appendChild(clearFix);
                  }

                  var getDirectionsLink = "<p><a href =\"http://www.google.com/maps/?daddr=" + latCoord + "," + lngCoord + "\" target=\"blank\">Get directions</a><p>"  
                  var markerInfo = "<span class=\"h6\" style=\"padding-bottom: 20px;\">" + data.feed.entry[i].gsx$address.$t + "</span> <ul class=\"list-unstyled\">" + gsDates + "</ul> " + getDirectionsLink;

                  var infowindow = new google.maps.InfoWindow({ 
                    content: markerInfo  
                  });

                  //creates an infowindow 'key' in the marker.
                  marker.infowindow = infowindow;

                  //finally call the explicit infowindow object
                  marker.addListener('click', function(e) {
                    marker.infowindow.close();
                    
                    return this.infowindow.open(map, this);
                  });

                  // Alternate way of adding infowindow listeners
                  google.maps.event.addListener(marker, 'click', function(e) {
                    marker.infowindow.close(map);
                    this.infowindow.open(map, this);

                  });

                  labelnum++;

                }
                
                
                  
                  
                $('.overlay').fadeOut(1000);

                function newLocation(newLat,newLng)
                {
                  map.setCenter({
                    lat : newLat,
                    lng : newLng,
                  });

                  map.setZoom(17);
                }

                  
                $(".locate-on-map-button").click(function(){
                    
                    newLocation(parseFloat($(this).attr('data-lat')),parseFloat($(this).attr('data-lng')));
                });
                
                $(".gs-back-button").click(function(){
                    window.history.back();
                });
                
                
                $(".reset-map").click(function(){
                    map.setCenter(new google.maps.LatLng(53.556524, -113.907738));
                    
                    if($(window).width() < 768){
                        var mapZoom = 12;
                    }
                  
                    else{
                     var mapZoom = 14;
                    }
                    map.setZoom(mapZoom);
                });

        });


        var mapCenter = new google.maps.LatLng(53.556524, -113.907738);

        var styles = [
                    {
                    "featureType": "landscape",
                    "stylers": [
                      { "color": "#eeeef3" }
                    ]
                    },{
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      { "color": "#c5c6d8" }
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
                      { "color": "#c5c6d8" },
                      { "weight": 6.8 }
                    ]
                    },{
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                      { "color": "#c5c6d8" }
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
                      { "color": "#c5c6d8" }
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
                  
                  if($(window).width() < 768){
                   
                   var mapZoom = 12;

                  }
                  
                  else{
                     var mapZoom = 14;
                      
                  }
                  
                  
                  var mapOptions = {
                    center: mapCenter,
                    zoom: mapZoom,
                    mapTypeControl: false,
                    panControl: true,
                    zoomControl: true,
                    scaleControl: false,
                    fullscreenControl: false,
                    streetViewControl: false
                  };


        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        map.setOptions({styles: styles});



      }
      


                
