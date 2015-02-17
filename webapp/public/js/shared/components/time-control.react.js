import React from 'react';
import FluxCompenent from 'flummox/component';

let vehicleActions;

export default React.createClass({
	componentDidMount() {
		vehicleActions = this.context.flux.getActions('vehicles');
	},
	contextTypes: {
		flux: React.PropTypes.object.isRequired
	},
	render() {
		return (
			<div className='time-control'>
				<FluxCompenent connectToStores={'vehicles'}>
					<TimeSlider onChange={this._positionChanged} />
				</FluxCompenent>
			</div>
		);
	},
	_positionChanged(e) {
		vehicleActions.changeTimeOffset(e.currentTarget.value - 100);
	}
});

let TimeSlider = React.createClass({
	componentDidMount() {
		this.refs.slider.getDOMNode().value = 100 - this.props.timeOffset;
	},
	render() {
		return (
			<input type='range' ref='slider' onChange={this.props.onChange} />
		);
	}
});