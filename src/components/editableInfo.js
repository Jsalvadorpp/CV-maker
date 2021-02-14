import React, { Component } from 'react';
import EDIT_BTN from './edit_btn';

export default class editableInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayInput: false
		};

		this.input_ref = React.createRef();
		this.edit_btn = React.createRef();
	}

	componentDidMount() {
		document.addEventListener('click', this.onClickOutside);
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.onClickOutside);
	}

	onClickOutside = (e) => {
		if (this.input_ref.current && this.input_ref.current !== e.target) {
			if (!this.edit_btn.current.contains(e.target)) {
				this.setState({ ...this.state, displayInput: false });
			}
		}
	};

	render() {
		const { displayInput } = this.state;

		return (
			<div className="d-flex align-items-center">
				{displayInput ? '' : this.props.text}
				{displayInput ? (
					<input
						type="text"
						value={this.props.text}
						className="form-control"
						ref={this.input_ref}
						onChange={(e) => this.props.setText(e.target.value)}
					/>
				) : (
					''
				)}

				<EDIT_BTN
					ref_context={this.edit_btn}
					enableInput={() => this.setState({ ...this.state, displayInput: true })}
				/>
			</div>
		);
	}
}
