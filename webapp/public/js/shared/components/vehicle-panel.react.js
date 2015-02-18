import React from 'react';
import VehicleList from './vehicle-list.react';
import FluxComponent from 'flummox/component';

export default React.createClass({
	render() {
		return (
			<div className='vehicle-panel'>
				<FluxComponent connectToStores={['vehicles']}>
					<VehicleList />
				</FluxComponent>
			</div>
		);
	}
});