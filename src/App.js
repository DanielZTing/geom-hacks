import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item/Item.js";
import Result from "./components/Result/Result.js";
import axios from "axios";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// NOTE: Dimensions are in cm, order shouldn't matter if I'm reading the docs right.
			// FIXME: Nobody would really donate one item, they would buy them in packs? Can account for this later.
			items: {
				"Canned Food": { quantity: 0, dimensions: [7.5, 7.5, 13] },
				"Toilet Paper": { quantity: 0, dimensions: [12, 12, 12] },
				"Hand Sanitizer": { quantity: 0, dimensions: [27, 11, 8] },
			},
			response: ''
		};
	}

	handleChange(item, quantity) {
		this.state[item]["quantity"] = quantity;
	}

	handleChange() {
		alert("hi");
	}

	componentDidMount() {
		axios
			.get("https://dog.ceo/api/breeds/image/random")
			.then((response) => {
				this.setState({ responce: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="App">
				<div id="items">
					{Object.keys(this.state.items).map((item) => (
						<Item
							name={item}
							value={this.state.items[item]["quantity"]}
							onChange={(item, quantity) =>
								this.handleChange(item, quantity)
							}
						/>
					))}
				</div>
				<div id="results">
					<h1>Results</h1>
					<Result response={this.state.response} />
				</div>
			</div>
		);
	}
}

export default App;
