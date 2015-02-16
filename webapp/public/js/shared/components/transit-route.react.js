import React from 'react';
import { State } from 'react-router';
import request from 'superagent';

let TransitRoute = React.createClass({
	mixins: [State],
	contextTypes: {
		mapLib: React.PropTypes.object
	},
	getInitialState() {
		let params = this.getParams();
		return {
			activeRoute: params.slug
		};
	},
	componentWillReceiveProps() {
		this.setState({
			activeRoute: this.getParams().slug
		});
	},
	render() {
		request
			.get(`/stops/${this.state.activeRoute}`)
			.set('Accepts', 'application/json')
			.end(function(err, res) {
				console.log(res.body.paths);
				res.body.paths.forEach(function(path) {
					// console.log(path);
					// L.polyline(path.points).addTo(map);
				});
			});


		return (
			<div/>
		); 
	}
});

export default TransitRoute;  