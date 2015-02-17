import L from 'leaflet';
import Immutable from 'immutable';
import _ from 'lodash';

export default (flux, map, options) => {
	let that = {},
		currentRoute = undefined,
		vehicleStore = flux.getStore('vehicles'),
		vehicleActions = flux.getActions('vehicles'),
		renderedVehicles = [];

	that.setRoute = (route) => {
		if ( route !== currentRoute ) {
			currentRoute = route;
			vehicleActions.getVehicles(currentRoute);
		}
	};

	L.Icon.Default.imagePath = '/vendor/leaflet/dist/images';

	that.render = () => {
		renderedVehicles.forEach((v) => {
			map.removeLayer(v);
		});
		renderedVehicles = [];

		let vehicles = vehicleStore.getVehicles().vehicles.toJS();

		that.currentVehicles(vehicles, vehicleStore.getTimeOffset()).forEach((vehicle) => {
			let m = L.marker([vehicle.lat, vehicle.lng]).addTo(map);
			
			m.bindPopup(`
				ID: ${vehicle.id}
				predictalbe: ${vehicle.predictalbe}
				leadingVehicleId: ${vehicle.leadingVehicleId}
				secsSinceReport: ${vehicle.secsSinceReport}
				`);

			renderedVehicles.push(m);
		});
	};

	that.currentVehicles = (vehicles, time=Infinity) => {
		let ret = {};
		vehicles.forEach((v) => {
			let nt = Date.parse(v.timeLogged);
			if (nt < time) {
				if(ret[v.id] === undefined) {
					ret[v.id] = v;
				} else if (nt > Date.parse(ret[v.id].timeLogged)) {
					ret[v.id] = v;
				}
			}
		});

		return _.values(ret).filter((v) => v.leadingVehicleId === "");
	};

	vehicleStore.addListener('change', that.render);

	return that;
}