function initMap() {

	var broadway = {
		info: '<strong>Village Burger - Dunwoody</strong><br>\
					1426 Dunwoody Village Parkway<br> Dunwoody, GA 30328<br>\
					<a href="https://goo.gl/maps/rbxBQab72zA2">Get Directions</a>',
		lat: 33.949741,
		long: -84.332842
	};

	var belmont = {
		info: '<strong>Village Burger - Johns Creek</strong><br>\
					3005 Old Alabama Rd<br> Alpharetta, GA 30022<br>\
					<a href="https://goo.gl/maps/eQxM9LMv4TT2">Get Directions</a>',
		lat: 34.020322,
		long: -84.272086
	};

	var sheridan = {
		info: '<strong>Village Burger - Tucker</strong><br>\r\
					2329 Main St<br> Tucker, GA 30084<br>\
					<a href="https://goo.gl/maps/ymN5AVEWmX72">Get Directions</a>',
		lat: 33.853267,
		long:  -84.214064
	};

	var locations = [
      [broadway.info, broadway.lat, broadway.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: new google.maps.LatLng(33.969186, -84.253071),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
