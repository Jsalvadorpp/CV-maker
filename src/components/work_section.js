import React, { Component } from 'react';
import Job_infoCard from './job_infoCard';

export default class work_section extends Component {
	constructor(props) {
		super(props);

		this.state = {
			jobs: []
		};
	}

	add_job = () => {
		let newData = this.state;
		newData.jobs.push('');
		this.setState(newData);
	};
	remove_job = () => {
		let newData = this.state;
		newData.jobs.pop();
		this.setState(newData);
	};

	render() {
		const { jobs } = this.state;
		return (
			<div className="section-info mt-2">
				<div className="d-flex align-items-center">
					<h2 className="main-heading mb-0">Work Experiencie</h2>
					<button className="btn btn-primary ms-2" onClick={this.add_job}>
						+
					</button>
				</div>

				{jobs.map((job) => <Job_infoCard onDelete={this.remove_job} />)}
			</div>
		);
	}
}
