import React, { Component } from 'react';
import GENERAL_INFO from '../../components/general_info';
import WORK_SECTION from '../../components/work_section';
import EDUCATION_SECTION from '../../components/education';
import CV_SIDEBAR from '../../components/cv_sidebar';

//styles
import './style.css';

export default class CV_builder extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="row mx-0">
					<div className="col-8 px-0">
						<GENERAL_INFO />
						<WORK_SECTION />
						<EDUCATION_SECTION />
					</div>

					<CV_SIDEBAR />
				</div>
			</div>
		);
	}
}
