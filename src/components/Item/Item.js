import React from "react";
import "./Item.css";

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = props;
	}

	render() {
		return (
			<div className="Item">
				<label>{this.props.name}</label>
				<input
					type="number"
					id="amount"
					name="amount"
					min="0"
					max="999"
					onChange={(event) =>
						this.props.onChange(this.props.name, event.target.value)
					}
					defaultValue={this.props.value}
				/>
			</div>
		);
	}
}

export default Item;
