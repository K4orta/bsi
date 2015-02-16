'use strict';

import { Store } from 'flummox';
import Immutable from 'immutable';

export default class RouteStore extends Store {
	constructor(flux) {
		super();
		let actionIds = flux.getActionIds('routes');

		this.register(actionIds.getRoutes, this.updateRouteList);
		this.register(actionIds.setActiveRoute, this.activeRoute);
		this.state = {
			activeRoute: undefined,
			routes: Immutable.List()
		};
	}

	updateRouteList({routes}) {
		this.setState({
			routes: Immutable.fromJS(routes)
		});
	}

	activeRoute(action) {
		console.log(this.state.activeRoute)
		return this.state.activeRoute;
	} 

	getRoutes() {
		return this.state.routes;
	}
};