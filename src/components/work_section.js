import React, { Component } from 'react';

export default class work_section extends Component {
	render() {
		return (
			<div className="section-info mt-2">
				<h2 className="main-heading">Work Experiencie</h2>

				<div className="info-card">
					<h3 className="secondary-heading">Web developer</h3>
					<h5 className="sub-heading">Ticktaps</h5>
					<p className="date">
						<i class="far fa-calendar-alt pr-2" /> 11/2020 - 03/2021
					</p>
					<p className="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus, turpis sit amet dapibus
						vehicula, ante enim luctus enim, sed vehicula massa quam ut leo. Nunc dignissim erat non
						pellentesque tempor. Etiam id diam tempus, finibus dui interdum, semper sapien. Fusce mollis
						tempus orci posuere viverra. Pellentesque malesuada magna quis neque efficitur aliquam. Nullam
						imperdiet nisi orci. Proin nisl sapien, iaculis eget pharetra at, interdum sed lectus. Duis
						mattis felis sit amet turpis condimentum imperdiet. Phasellus sed quam efficitur, facilisis
						lacus at, scelerisque est. Nunc quis consequat velit.
					</p>
				</div>
			</div>
		);
	}
}
