import L from 'leaflet';

let StopRenderer = (flux, map) => {
	let stopActions = flux.getActions('stops'),
		stopStore = flux.getStore('stops');
	let currentRoute = undefined,
		paths = [];

	let that = {
		render(route) {
			currentRoute = route;
			if (currentRoute === undefined ) {
				return;
			}

			let stops = stopStore.getStops(currentRoute);
			
			if ( stops === undefined) {
				stopActions.getStops(currentRoute);
				return;
			}

			paths.forEach((path) => {
				map.removeLayer(path);
			});
			paths = [];

			stops.get('paths').forEach((path) => {
				paths.push(L.polyline(path.get('points').toJS()).addTo(map));
			});
		}
	};

	stopStore.addListener('change', () => {
		that.render(currentRoute);
	});
	return that;
};

export default StopRenderer;