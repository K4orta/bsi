import {Actions} from 'flummox';
import request from 'superagent';

export default class RouteActions extends Actions {
	async getRoutes() {
		let resp = await request
			.get('/routes')
			.exec();
		return {
			routes: resp.body
		};
	}
}