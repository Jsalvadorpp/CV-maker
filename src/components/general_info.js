import React, { Component } from 'react';

export default class general_info extends Component {
	render() {
		return (
			<div className="general-info">
				<h1 className="main-heading">JOHN DOE</h1>
				<h5 className="sub-heading">
					<span>Title: </span>Ing. Electronico
				</h5>
				<h5 className="sub-heading">
					<span>Email: </span>johndoe@hotmail.com
				</h5>
				<h5 className="sub-heading">
					<span>Phone number: </span>04243748732
				</h5>
			</div>
		);
	}
}
