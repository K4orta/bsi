import { Store } from 'flummox';
import Immutable from 'immutable';
import assign from 'object-assign';
import { groupBy } from 'lodash';

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

	updateVehicles({route, vehicles}) {
		let buffed = vehicles.map((v) => {
			return assign(v, {
				postTime: Date.parse(v.timeLogged),
				visible: true
			});
		});

		this.setState({
			route: route,
			vehicles: Immutable.fromJS(buffed)
		});
	}

	getTimedVehicles() {
		return groupBy(this.state.vehicles, (v) => v.postTime);
	}

	toggleHiddenVehice({id, show}) {

	}
}