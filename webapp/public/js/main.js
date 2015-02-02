// var L = require('leaflet'); 
// var map = L.map('map');
// var request = require('superagent'),
var App = require('./components/app.react');

// L.tileLayer('http://{s}.tiles.mapbox.com/v3/esywong.knhb1ae0/{z}/{x}/{y}.png', {
// 	maxZoom: 18
// }).addTo(map);

// map.setView([37.7816579, -122.4045532], 15);
// L.Icon.Default.imagePath = "/vendor/leaflet/dist/images";

// request
// 	.get('/stops/71')
// 	.set('Accepts', 'application/json')
// 	.end(function(err, res) {
// 		res.body.paths.forEach(function(path) {
// 			L.polyline(path.points).addTo(map);
// 		});
// 	});

// request
// 	.get('/routes/71')
// 	.set('Accepts', 'application/json')
// 	.end(function(err, res) {
// 		res.body.forEach(function(vehicle) {
// 			var m = L.marker([vehicle.lat, vehicle.lng]).addTo(map);
// 			// console.log(vehicle);
// 			m.bindPopup(vehicle.id)
// 		});
// 	});

App();