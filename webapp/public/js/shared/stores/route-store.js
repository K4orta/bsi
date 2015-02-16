'use strict';

import { Store } from 'flummox';
import Immutable from 'immutable';

export default class RouteStore extends Store {
	constructor(flux) {
		super();
		let actionIds = flux.getActionIds('routes');

		this.register(actionIds.getRoutes, this.updateRouteList);
		this.state = {
			routes: Immutable.List()
		};
	}

	updateRouteList({routes}) {
		this.setState({
			routes: Immutable.fromJS(routes)
		});
	}

	getRoutes() {
		return this.state.routes;
	}
};