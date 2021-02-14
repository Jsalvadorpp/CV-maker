import React, { Component } from 'react';
import EditableInfo from './editableInfo';

export default class general_info extends Component {
	constructor(props) {
		super(props);

		this.state = {
			personal_info: {
				name: 'your name',
				title: 'Ing. Electronico',
				email: 'johndoe@hotmail.com',
				phone: '04243748732'
			}
		};
	}

	setInfo = (value, attr) => {
		let newData = this.state.personal_info;
		newData[attr] = value;
		this.setState(newData);
	};

	render() {
		const { personal_info, displayInput } = this.state;

		return (
			<div className="general-info">
				<h1 className="main-heading">
					<EditableInfo text={personal_info.name} setText={(value) => this.setInfo(value, 'name')} />
				</h1>
				<h5 className="sub-heading">
					<span>Title: </span>
					<EditableInfo text={personal_info.title} setText={(value) => this.setInfo(value, 'title')} />
				</h5>
				<h5 className="sub-heading">
					<span>Email: </span>
					<EditableInfo text={personal_info.email} setText={(value) => this.setInfo(value, 'email')} />
				</h5>
				<h5 className="sub-heading">
					<span>Phone number: </span>
					<EditableInfo text={personal_info.number} setText={(value) => this.setInfo(value, 'number')} />
				</h5>
			</div>
		);
	}
}
