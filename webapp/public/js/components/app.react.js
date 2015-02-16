var React = require('react'),
	Router = require('react-router'),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	Index = require('./index.react'),
	RouteHandler = Router.RouteHandler;

import Flux from '../shared/flux';

var App = React.createClass({
	render: function() {
		return (
			<div>
				<nav>Hey there!!</nav>
				<RouteHandler />
			</div>
		);
	}
});

var routes = (
	<Route path='/' handler={App}>
		<DefaultRoute handler={Index}/>
		<Route path='/route/:slug' handler={Index} />
	</Route>
);


module.exports = (mapLib) => {
	let flux = new Flux();	
	Router.run(routes, (Handler, state) => {
		React.withContext({flux, mapLib}, () => {
			React.render(<Handler />, document.querySelector('.content'));
		});
	});
};

