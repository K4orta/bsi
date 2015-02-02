var React = require('react'),
	Map = require('./map.react');

var Index = React.createClass({
	render: function() {
		return (
			<div> 
				<Map />
			</div>
		);
	}
});

module.exports = Index;