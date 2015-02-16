import React from 'react';
import FluxComponent from 'flummox/component';
import { Link } from 'react-router'
import slug from 'slug';

let RouteList = React.createClass({
	componentDidMount() {
		let routeActions = this.context.flux.getActions('routes');
		routeActions.getRoutes();
	},
	contextTypes: {
		flux: React.PropTypes.object.isRequired,
	},
	render() {
		return (
			<FluxComponent connectToStores={'routes'}>
				<RouteItem />
			</FluxComponent>
		);
	}
});

let RouteItem = React.createClass({
	render() {
		let items = this.props.routes.toArray().map((route) => {
			return (
				<li key={route} className='route-list__item'>
					<Link to={slugRoute(route)}>
						{route}
					</Link>
				</li> 
			);
		});
		return (
			<ul className='route-list'>
				{items}
			</ul>
		);
	}
});

let slugRoute = (name) => `/route/${slug(name)}`;

export default RouteList;