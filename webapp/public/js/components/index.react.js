var React = require('react'),
	Map = require('./map.react');
import RouteList from '../shared/components/route-list.react';
// import RouteManager from '../shared/components/transit-route.react';

var Index = React.createClass({
	render: function() {
		return (
			<div> 
				<Map />
				<RouteList />
			</div>
		);
	}
});

module.exports = Index;