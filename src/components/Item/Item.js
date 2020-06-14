import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import "./Item.css";

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = props;
	}

	render() {
		return (
			<div className="Item">
                {/* <Typography>{this.props.name}</Typography> */}
				<TextField
					type="number"
					id="amount"
					name="amount"
					min="0"
					max="999"
					variant="filled"
					label={this.props.name}
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
