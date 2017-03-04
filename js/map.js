var locations = [
['Dublin, Ireland', 53.3498053, -6.260309699999993],
['Belfast, UK', 54.59728500000001, -5.930119999999988],
['Cork, Ireland', 51.8968917, -8.486315699999977],
['Galway, Ireland', 53.270668, -9.056790500000034],
['Edinburgh, UK', 55.953252, -3.188266999999996],
['Copenhagen, Denmark', 55.6760968, 12.568337100000008],
['London, UK', 51.5073509, -0.12775829999998223],
['Amsterdam, Netherlands', 52.3702157, 4.895167899999933],
['Paris, France', 48.856614, 2.3522219000000177],
['Berlin, Germany', 52.52000659999999, 13.404953999999975],
['Lisbon, Portugal', 38.7222524, -9.139336599999979],
['Madrid, Spain', 40.4167754, -3.7037901999999576],
['Barcelona, Spain', 41.3850639, 2.1734034999999494],
['Krakow, Poland', 50.06465009999999, 19.94497990000002],
['Auschwitz, Poland', 50.03062850000001, 19.198602800000003],
['Budapest, Hungary', 47.497912, 19.04023499999994],
['Prague, Czech Rep', 50.0755381, 14.43780049999998],
['Riga, Latvia', 56.9496487, 24.10518639999998],
['Rome, Italy', 41.9027835, 12.496365500000024],
['Venice, Italy', 45.4408474, 12.31551509999997],
['Trieste, Italy', 45.6495264, 13.77681819999998],
['Novalja, Croatia', 44.5561811, 14.885424199999989],
['Zadar, Croatia', 44.119371, 15.231364799999938],
['Krka Forest, Croatia', 43.8666017, 15.972483799999964],
['San Francisco, California', 37.7749295, -122.41941550000001],
['San Diego, California', 32.715738, -117.16108380000003],
['Los Angeles, California', 34.0522342, -118.2436849],
['Portland, Oregon', 45.5230622, -122.67648159999999],
['Seattle, Washington', 47.6062095, -122.3320708],
['Washington DC, DC', 38.9071923, -77.03687070000001],
['Miami, Florida', 25.7616798, -80.19179020000001],
['Puerto Vallarta, Mexico', 20.653407, -105.2253316],
['Las Vegas, Nevada', 36.1699412, -115.13982959999998],
['Reno, Nevada', 39.5296329, -119.8138027],
['Tahoe, Nevada', 39.0968493, -120.0323507],
['Bucharest, Romania', 44.4268, 26.1025],
['Vienna, Austria', 48.2082, 16.3738],
['Glasgow, Scotland', 55.8642, -4.2518]
];

function initialize() {

	var myCenter = new google.maps.LatLng(38.7223, 9.1393);
	var mapProp = {
		center: myCenter,
		zoom: 2,
		minzoom: 1,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"), mapProp);

	var infowindow = new google.maps.InfoWindow();

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

		marker.setMap(map);
	}
}

initialize();
