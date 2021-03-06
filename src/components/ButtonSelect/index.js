/* eslint-disable react/prop-types */

import React from 'react';
import './buttonSelect.scss'

export default function ButtonSelect({ onChange }) {
	return (
		<div className="switch-field-register">
			<input type="radio"
				variant="secondary"
				name="role"
				value="hall"
				id="hall"
				onChange={onChange}
				className="radio-btn" />
			<label htmlFor="hall">Salão</label>
			<input type="radio"
				variant="secondary"
				name="role"
				value="kitchen"
				id="kitchen"
				onChange={onChange}
				className="radio-btn" />
			<label htmlFor="kitchen">Cozinha</label>
		</div>
	)
}