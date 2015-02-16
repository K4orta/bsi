'use strict';

import { Store } from 'flummox';
import Immutable from 'immutable';

export default class StopStore extends Store {
	constructor(flux) {
		super();
		let actionIds = flux.getActionIds('stops');

		this.register(actionIds.getStops, this.updateStops);
		this.state = {
			stops: Immutable.Map()
		};
	}

	updateStops({route, stops}) {
		let newStops = {};
		newStops[route] = stops;
		this.setState({
			stops: this.state.stops.merge(Immutable.fromJS(newStops))
		});
	}

	getStops(route) {
		return this.state.stops.get(route);
	}
};