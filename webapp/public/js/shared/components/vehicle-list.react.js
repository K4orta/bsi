import React from 'react';
import { uniq } from 'lodash';

export default React.createClass({
	render() {
		let jsVehicles = this.props.vehicles.toJS();
		let vehicles = uniq(jsVehicles.map((v) => v.id)).map((v) => {	
			return (
				<li key={v} className='vehicle-panel__list__item'>
					<label for={v}>
						<input name={v} type='checkbox' />
						{v}
					</label>
				</li>
			);
		});
		
		return (
			<ul className='vehicle-panel__list'>
				{vehicles}
			</ul>
		);
	}
});