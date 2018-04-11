<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Garage Sale List</title>
	<script src="https://use.typekit.net/enl4roo.js"></script>
	<script>try { Typekit.load({ async: true }); } catch (e) { }</script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <style type="text/css">
    	body{
    		  font-family: "proxima-nova",sans-serif;
    		  font-size: 16px;
    		  font-weight: 300;
    		  line-height: 1.5;
    	}
		 *{margin: 0; padding: 0;} 
		 i{font-size: 120%;}
 		 #map-panel { width: 1224px; height: 792px; margin: 15px 5px 0 5px; position: relative; overflow: hidden;}
   		 #map-canvas { width: 100%; height: 30vh; }

	   		#map-list{
	   			
	   			
	   			
	   			position: relative;
	   			z-index: 500;
	   		}

	   		.garage-sale-entry{
	   			padding: 20px;
	   			
	   		}

	   		.garage-sale-entry__number{
	   			
	   			font-size: 24px;
	   			font-weight: 500;
	   			margin-right: 15px;
	   		}

	   		.garage-sale-entry__number-icon{
	   			position: absolute;
	   			top: 5px;
	   			left: -25px;
	   			opacity: .15;
	   		}

	   		.garage-sale-entry__address{
	   			font-size: 1.5em;
	   			font-weight: 500;
	   		}
	   		@media (max-width: 768px){
	   			body{
	   				overflow-x: hidden;
	   			}

	   			.article{
					overflow-x: hidden;
	   			}

	   			#map-list{
	   				--n: 1;
	   				width: 100%;
	   				width: calc(var(--n)*100%);
	   				display: flex;
	   				align-items: center;
	   				overflow-y: hidden;
	   				max-height: 40vh;
	   				margin-top: 30px;

	   				transform: translate(calc(var(--i, 0)/var(--n)*-100%));
	   			}

	   			.garage-sale-entry{
	   				width: 100%;
	   				width: calc(110%/var(--n));
	   				user-select: none;
	   				pointer-events: none;
	   				
	   			}
	   				
	   		}
	   			} 
    </style>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOrh3E6beCX6O4Z1ZxFc9Ln2fUZir3vC0"></script>
		<script type="text/javascript">
			$(document).ready(function (){
				var map;
				var labelnum = 1;
				$.getJSON('https://spreadsheets.google.com/feeds/list/1wlhi4Oe2yLVxSzKAojUP9bWiHEgOayptGTkVlq-b6aU/od6/public/values?alt=json', function(data) {
	       
	                         var mapCenter = new google.maps.LatLng(53.555182, -113.910255);
							 console.log(data);
						
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
							zoom: 12,
							mapTypeControl: false,
							panControl: true,
							zoomControl: false,
							scaleControl: false,
							fullscreenControl: false,
							streetViewControl: false
						};
						directionsDisplay = new google.maps.DirectionsRenderer({
							polylineOptions: {
							  strokeColor: "red"
							}
				  		});

						 var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
						 map.setOptions({styles: styles});

					

					for (var i = 0; i < data.feed.entry.length; i++) {

							if(labelnum < 10){
								var icon = 'data:image/svg+xml;utf-8, \
									       <svg height="35" width="35" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"> \
									         <circle cx="33%" cy="43%" r="15" style="stroke:#000000; stroke-width: 4; fill:#ffffff"/> \
									         <text x="25%" y="55%" fill="black" font-family = "sans-serif" font-weight = "bold" font-size = "14">'+ labelnum + '</text> \
									       </svg>'
							}
							else{
								var icon = 'data:image/svg+xml;utf-8, \
									       <svg height="50" width="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"> \
									         <circle cx="40%" cy="43%" r="15" style="stroke:#000000; stroke-width: 4; fill:#ffffff"/> \
									         <text x="55%" y="55%" fill="black" font-family = "sans-serif" font-weight = "bold" font-size = "14">'+ labelnum + '</text> \
									       </svg>'
							}
							

						
	  	       				
	  					var latLong = data.feed.entry[i].gsx$coordinates.$t;
	                    var coordinates = latLong.split(',');
	                    var lat = Number(coordinates[0]);
	                    var lng = Number(coordinates[1]);
						var lol = { lat: lat, lng: lng};
						
						var marker = new google.maps.Marker({
						   position: lol,
						   icon: icon,
						   // icon: 'icons/' + labelnum + '.svg',
						   map: map
						 });
	 					labelnum++;


	 			
		 			}// end of for loop
				

				});// end of getJSON
			});

	                
			
	</script>
</head>
<body>
	<div class="container">
		<div class="col-md-9 col-md-offset-3 row article">
			<h1>Garage sales</h1>
			<div id="map-canvas"></div>

			<div id="map-list">
					<div class="col-md-12 garage-sale-entry">
						<div class="col-xs-12">
						<i class="fa fa-map-marker garage-sale-entry__number-icon fa-2x"></i>
							<span class="garage-sale-entry__number">1.</span> <span class="garage-sale-entry__address">351 Lakewood Cove N</span>
						</div>
		
						<div class="col-md-12 col-xs-12">
							<ul class="list-unstyled">
								<li>Thursday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Friday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Saturday, August 30: 12 p.m. - 9 p.m.</li>
								<li>Sunday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Monday, August 30: 6 p.m. - 9 p.m.</li>
							</ul>	
							<p>Antiques / Collectibles, Appliances, Baby Items, Electronics, Furniture, Kid’s Clothing, Men’s / Ladies’ Clothing, Misc. Household Items, Other, Sports Equipment, Tools, Toys</p>
						</div>	
					</div>

					<div class="col-md-12 garage-sale-entry">
						<div class="col-xs-12">
						<i class="fa fa-map-marker garage-sale-entry__number-icon fa-2x"></i>
							<span class="garage-sale-entry__number">1.</span> <span class="garage-sale-entry__address">351 Lakewood Cove N</span>
						</div>
					
						<div class="col-md-12 col-xs-12">
							<ul class="list-unstyled">
								<li>Thursday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Friday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Saturday, August 30: 12 p.m. - 9 p.m.</li>
								<li>Sunday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Monday, August 30: 6 p.m. - 9 p.m.</li>
							</ul>	
							<p>Antiques / Collectibles, Appliances, Baby Items, Electronics, Furniture, Kid’s Clothing, Men’s / Ladies’ Clothing, Misc. Household Items, Other, Sports Equipment, Tools, Toys</p>
						</div>	
					</div>

					<div class="col-md-12 garage-sale-entry">
						<div class="col-xs-12">
						<i class="fa fa-map-marker garage-sale-entry__number-icon fa-2x"></i>
							<span class="garage-sale-entry__number">1.</span> <span class="garage-sale-entry__address">351 Lakewood Cove N</span>
						</div>
					
						<div class="col-md-12 col-xs-12">
							<ul class="list-unstyled">
								<li>Thursday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Friday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Saturday, August 30: 12 p.m. - 9 p.m.</li>
								<li>Sunday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Monday, August 30: 6 p.m. - 9 p.m.</li>
							</ul>	
							<p>Antiques / Collectibles, Appliances, Baby Items, Electronics, Furniture, Kid’s Clothing, Men’s / Ladies’ Clothing, Misc. Household Items, Other, Sports Equipment, Tools, Toys</p>
						</div>	
					</div>

					<div class="col-md-12 garage-sale-entry">
						<div class="col-xs-12">
						<i class="fa fa-map-marker garage-sale-entry__number-icon fa-2x"></i>
							<span class="garage-sale-entry__number">1.</span> <span class="garage-sale-entry__address">351 Lakewood Cove N</span>
						</div>
					
						<div class="col-md-12 col-xs-12">
							<ul class="list-unstyled">
								<li>Thursday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Friday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Saturday, August 30: 12 p.m. - 9 p.m.</li>
								<li>Sunday, August 30: 6 p.m. - 9 p.m.</li>
								<li>Monday, August 30: 6 p.m. - 9 p.m.</li>
							</ul>	
							<p>Antiques / Collectibles, Appliances, Baby Items, Electronics, Furniture, Kid’s Clothing, Men’s / Ladies’ Clothing, Misc. Household Items, Other, Sports Equipment, Tools, Toys</p>
						</div>	
					</div>						


			</div>



			</div>




	</div>
		
			<script>
				const _C = document.querySelector('#map-list'), 
				      N = _C.children.length, NF = 30, 
							TFN = {
								'linear': function(k) { return k }, 
								'ease-in': function(k, e = 1.675) {
									return Math.pow(k, e)
								}, 
								'ease-out': function(k, e = 1.675) {
									return 1 - Math.pow(1 - k, e)
								}, 
								'ease-in-out': function(k) {
									return .5*(Math.sin((k - .5)*Math.PI) + 1)
								}, 
								'bounce-out': function(k, a = 2.75, b = 1.5) {
									return 1 - Math.pow(1 - k, a)*Math.abs(Math.cos(Math.pow(k, b)*(n + .5)*Math.PI))
								}
							};

				let i = 0, x0 = null, locked = false, w, ini, fin, rID = null, anf, n;

				function stopAni() {
				  cancelAnimationFrame(rID);
				  rID = null
				};

				function ani(cf = 0) {
				  _C.style.setProperty('--i', ini + (fin - ini)*TFN['bounce-out'](cf/anf));
					
				  if(cf === anf) {
				    stopAni();
				    return
				  }
					
				  rID = requestAnimationFrame(ani.bind(this, ++cf))
				};

				function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };

				function lock(e) {
				  x0 = unify(e).clientX;
					locked = true
				};

				function drag(e) {
				  e.preventDefault();
					
				  if(locked) {
				    let dx = unify(e).clientX - x0, f = +(dx/w).toFixed(2);
						
				    _C.style.setProperty('--i', i - f)
				  }
				};

				function move(e) {
				  if(locked) {
				    let dx = unify(e).clientX - x0, 
				        s = Math.sign(dx), 
				        f = +(s*dx/w).toFixed(2);
						
				    ini = i - s*f;

				    if((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > .2) {
				      i -= s;
				      f = 1 - f
				    }

				    fin = i;
						anf = Math.round(f*NF);
						n = 2 + Math.round(f)
				    ani();
				    x0 = null;
				    locked = false;
				  }
				};

				function size() { w = window.innerWidth };

				size();
				_C.style.setProperty('--n', N);

				addEventListener('resize', size, false);

				_C.addEventListener('mousedown', lock, false);
				_C.addEventListener('touchstart', lock, false);
				_C.addEventListener('click', lock, false);

				_C.addEventListener('mousemove', drag, false);
				_C.addEventListener('touchmove', drag, false);

				_C.addEventListener('mouseup', move, false);
				_C.addEventListener('touchend', move, false);
			</script>
	
</body>
</html>
