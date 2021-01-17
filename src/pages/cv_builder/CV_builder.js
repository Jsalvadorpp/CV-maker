import React, { Component } from 'react';

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

						<div className="section-info mt-2">
							<h2 className="main-heading">Work Experiencie</h2>

							<div className="info-card">
								<h3 className="secondary-heading">Web developer</h3>
								<h5 className="sub-heading">Ticktaps</h5>
								<p className="date">
									<i class="far fa-calendar-alt pr-2" /> 11/2020 - 03/2021
								</p>
								<p className="description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus, turpis sit amet
									dapibus vehicula, ante enim luctus enim, sed vehicula massa quam ut leo. Nunc
									dignissim erat non pellentesque tempor. Etiam id diam tempus, finibus dui interdum,
									semper sapien. Fusce mollis tempus orci posuere viverra. Pellentesque malesuada
									magna quis neque efficitur aliquam. Nullam imperdiet nisi orci. Proin nisl sapien,
									iaculis eget pharetra at, interdum sed lectus. Duis mattis felis sit amet turpis
									condimentum imperdiet. Phasellus sed quam efficitur, facilisis lacus at, scelerisque
									est. Nunc quis consequat velit.
								</p>
							</div>
						</div>

						<div className="education-info section-info">
							<h2 className="main-heading">Education</h2>

							<div className="info-card">
								<h3 className="secondary-heading">Electronic engineer</h3>
								<h5 className="sub-heading">UNEXPO</h5>
								<p className="date">
									<i class="far fa-calendar-alt pr-2" /> 11/2020 - 03/2021
								</p>
							</div>
						</div>
					</div>

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
				</div>
			</div>
		);
	}
}
