import { Flummox } from 'flummox';

import RouteActions from './actions/route-actions';
import StopActions from './actions/stop-actions';
import RouteStore from './stores/route-store';
import StopStore from './stores/stop-store';

import VehicleActions from './actions/vehicle-actions';
import VehicleStore from './stores/vehicle-store';

export default class Flux extends Flummox {
	constructor() {
		super();

		this.createActions('routes', RouteActions);
		this.createActions('stops', StopActions);
		this.createStore('routes', RouteStore, this);
		this.createStore('stops', StopStore, this);

		this.createActions('vehicles', VehicleActions);
		this.createStore('vehicles', VehicleStore, this);
	}
}