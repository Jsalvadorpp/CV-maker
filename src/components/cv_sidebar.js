import React, { Component } from 'react';

export default class cv_sidebar extends Component {
	render() {
		return (
			<div className="col-4 skills-section">
				<div className="profile-img-container">
					<div className="d-flex justify-content-center mb-2">
						<img className="profile-img" src={'/images/unknown.jpeg'} alt="person-avatar" />
					</div>

					<button className="btn btn-secondary">upload image</button>
				</div>

				<div className="skills-info">
					<h2 className="main-heading">Skills</h2>
					<ul className="skills-list">
						<li className="skill-cell">skill 1igbdshfdshbfds</li>
						<li className="skill-cell">skill super login asd</li>
						<li className="skill-cell">skill proa bdhsadbsa</li>
						<li className="skill-cell">progrtamming</li>
						<li className="skill-cell">progg</li>
					</ul>
				</div>
			</div>
		);
	}
}
