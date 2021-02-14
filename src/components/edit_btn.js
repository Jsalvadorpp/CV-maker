import React, { Component } from 'react';

export default class edit_btn extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<button ref={this.props.ref_context} className="edit-btn btn btn-primary" onClick={this.props.enableInput}>
				<i className="fas fa-edit" />
			</button>
		);
	}
}
