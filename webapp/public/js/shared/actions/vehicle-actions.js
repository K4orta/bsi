import {Actions} from 'flummox';
import request from 'superagent';

export default class VehicleActions extends Actions {
	async getVehicles(route) {
		let resp = await request
			.get(`/routes/${route}`)
			.exec();
		return {
			route: route,
			vehicles: resp.body
		};
	}
}