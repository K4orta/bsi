import React from 'react';
import L from 'leaflet';
import request from 'superagent';

let Map = React.createClass({
	componentDidMount() {
		var map = L.map('map');

		L.tileLayer('http://{s}.tiles.mapbox.com/v3/esywong.knhb1ae0/{z}/{x}/{y}.png', {
			maxZoom: 18
		}).addTo(map);

		map.setView([37.7816579, -122.4045532], 13);

		request
			.get('/stops/71')
			.set('Accepts', 'application/json')
			.end(function(err, res) {
				res.body.paths.forEach(function(path) {
					L.polyline(path.points).addTo(map);
				});
			});
	},
	render() {
		return (
			<div id='map'></div>
		);
	}
});

export default Map;