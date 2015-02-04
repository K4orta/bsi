var React = require('react'),
	Router = require('react-router'),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	Index = require('./index.react'),
	RouteHandler = Router.RouteHandler;


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
	</Route>
);

module.exports = function() {
	Router.run(routes, function(Handler) {
		React.render(<Handler />, document.querySelector('.content'));
	});
};

