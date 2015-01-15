var L = require('leaflet'); 
var map = L.map('map');
var request = require('superagent')

L.tileLayer('http://{s}.tiles.mapbox.com/v3/esywong.knhb1ae0/{z}/{x}/{y}.png', {
	maxZoom: 18
}).addTo(map);

map.setView([37.7816579, -122.4045532], 15);
L.Icon.Default.imagePath = "/vendor/leaflet/dist/images";

request
	.get('/stops')
	.set('Accepts', 'application/json')
	.end(function(err, res) {
		res.body.stops.forEach(function(stop) {
			L.marker([stop.lat, stop.lng]).addTo(map);
		});
	});