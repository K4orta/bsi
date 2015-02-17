var React = require('react'),
	Map = require('./map.react');
import RouteList from '../shared/components/route-list.react';
// import RouteManager from '../shared/components/transit-route.react';
import TimeControl from '../shared/components/time-control.react';

var Index = React.createClass({
	render: function() {
		return (
			<div> 
				<Map />
				<RouteList />
				<TimeControl />
			</div>
		);
	}
});

module.exports = Index;