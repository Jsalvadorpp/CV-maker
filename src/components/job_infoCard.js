import React, { Component } from 'react';

export default class job_infoCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			jobTitle: 'web developer',
			place: 'Google',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus, turpis sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus, turpis sit amet dapibus jdia gu545n gn5gu 4n g4i 5p l32pk 2jndfsj',
			date: '11/2020 - 03/2026'
		};
	}

	render() {
		const { jobTitle, place, description, date } = this.state;

		return (
			<div className="info-card">
				<div className="d-flex align-items-center justify-content-between">
					<h3 className="secondary-heading">{jobTitle}</h3>
					<button className="btn btn-danger ms-2" onClick={this.props.onDelete}>
						X
					</button>
				</div>

				<h5 className="sub-heading">{place}</h5>
				<p className="date">
					<i className="far fa-calendar-alt pr-2" /> {date}
				</p>
				<p className="description">{description}</p>
			</div>
		);
	}
}
