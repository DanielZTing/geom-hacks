import React from "react";
import "./Item.css";

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = props;
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		return (
			<div className="Item">
                <h3>{this.props.name}</h3>
				<label for="amount">Enter the amount</label>
				<br />
				<input
					type="number"
                    id="amount"
                    name="amount"
					onChange={this.handleChange}
					defaultValue={this.props.value}
				/>
				<h3>Output</h3>
				<div>{this.state.value}</div>
			</div>
		);
	}
}

export default Item;
