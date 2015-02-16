import {Actions} from 'flummox';
import request from 'superagent';

export default class StopActions extends Actions {
	async getStops(route) {
		let resp = await request
			.get(`/stops/${route}`)
			.exec();
		return {
			route: route,
			stops: resp.body
		};
	}
}