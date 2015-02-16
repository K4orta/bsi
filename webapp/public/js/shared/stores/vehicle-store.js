import { Store } from 'flummox';
import Immutable from 'immutable';

export default class VehicleStore extends Store {
	constructor(flux) {
		super();

		this.state = {
			vehicles: Immutable.List()
		}
	}

	getVehicles() {
		return this.state;
	}

	updateVehicles(route) {

	}
}