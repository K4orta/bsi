import { Store } from 'flummox';
import Immutable from 'immutable';

export default class VehicleStore extends Store {
	constructor(flux) {
		super();
		let actionIds = flux.getActionIds('vehicles');

		this.register(actionIds.getVehicles, this.updateVehicles)
		this.register(actionIds.changeTimeOffset, this.setTimeOffset)

		this.state = {
			timeOffset: 0,
			route: undefined,
			vehicles: Immutable.List(),
			hiddenVehicles: []
		}
	}

	getVehicles() {
		return this.state;
	}

	getTimeOffset() {
		if ( this.state.timeOffset === 0 ) {
			return Infinity;
		}
		return Date.now() + (this.state.timeOffset * 500 * 30);
	}

	setTimeOffset({offset}) {
		this.setState({
			timeOffset: offset
		});
	}

	updateVehicles(action) {
		this.setState({
			route: action.route,
			vehicles: Immutable.fromJS(action.vehicles)
		});
	}

	toggleHiddenVehice() {

	}
}