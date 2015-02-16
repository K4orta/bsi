import React from 'react';
import { State } from 'react-router';
import StopRenderer from '../shared/utils/stop-render';
import VehicleRenderer from '../shared/utils/vehicles-renderer';

let map,
	stops,
	vehicles;

let Map = React.createClass({
	mixins: [ State ],
	componentDidMount() {
		if (this.context.mapLib !== undefined) {
			let L = this.context.mapLib;		
			map = L.map('map');
			
			L.tileLayer('http://{s}.tiles.mapbox.com/v3/esywong.knhb1ae0/{z}/{x}/{y}.png', {
				maxZoom: 18
			}).addTo(map);

			map.setView([37.7816579, -122.4045532], 13);
			
			// Pass flux to stop renderer
			stops = StopRenderer(this.context.flux, map);
			stops.render(this.getParams().slug);

			vehicles = VehicleRenderer(this.context.flux, map);
			vehicles.setRoute(this.getParams().slug);
		}
	},
	componentWillReceiveProps() {
		vehicles.setRoute(this.getParams().slug);
		stops.render(this.getParams().slug);
	},
	contextTypes: {
		flux: React.PropTypes.object.isRequired,
		mapLib: React.PropTypes.object
	},
	render() {
		return (
			<div id='map'></div>
		);
	}
});

export default Map;