import React from 'react';
import { State } from 'react-router';
import StopRenderer from '../shared/utils/stop-render';

let map,
	stops;

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
		}
	},
	componentWillReceiveProps() {
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