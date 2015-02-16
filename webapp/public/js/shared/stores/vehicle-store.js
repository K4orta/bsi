import { Store } from 'flummox';
import Immutable from 'immutable';

export default class VehicleStore extends Store {
	constructor(flux) {
		super();
		let actionIds = flux.getActionIds('vehicles');

		this.register(actionIds.getVehicles, this.updateVehicles)

		this.state = {
			route: undefined,
			vehicles: Immutable.List()
		}
	}

	getVehicles() {
		return this.state;
	}

	updateVehicles(action) {
		this.setState({
			route: action.route,
			vehicles: Immutable.fromJS(action.vehicles)
		});
	}
}