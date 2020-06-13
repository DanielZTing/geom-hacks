import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item/Item.js";
import Result from './components/Result/Result.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// NOTE: Dimensions are in cm, order shouldn't matter if I'm reading the docs right.
			// FIXME: Nobody would really donate one item, they would buy them in packs? Can account for this later.
			"Canned Food": {"quantity": 0, "dimensions": [7.5, 7.5, 13]},
			"Toilet Paper": {"quantity": 0, "dimensions": [12, 12, 12]},
			"Hand Sanitizer": {"quantity": 0, "dimensions": [27, 11, 8]},
		};
	}

	handleChange(item, quantity) {
		this.state[item]["quantity"] = quantity;
	}

	render() {
		return (
			<div className="App">
				<div id="items">
					{Object.keys(this.state).map((item) =>
						<Item name={item} value={this.state[item]["quantity"]} onChange={(item, quantity) => this.handleChange(item, quantity)} />
					)}
				</div>
				<div id="results">
			<h1>Results</h1>
			<Result />
				</div>
			</div>
		);
	}
}

export default App;
