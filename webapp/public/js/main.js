var L = require('leaflet'); 
var map = L.map('map');

L.tileLayer('http://{s}.tiles.mapbox.com/v3/esywong.knhb1ae0/{z}/{x}/{y}.png', {
	maxZoom: 18
}).addTo(map);

map.setView([37.7816579, -122.4045532], 15);