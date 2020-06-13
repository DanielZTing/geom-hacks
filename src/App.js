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
				"Canned Food": { quantity: 1, dimensions: [7.5, 7.5, 13] },
				"Toilet Paper": { quantity: 0, dimensions: [12, 12, 12] },
				"Hand Sanitizer": { quantity: 0, dimensions: [27, 11, 8] },
			},
			image: "",
			quantity: 5,
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
			.post("https://api.paccurate.io/", {
				itemSets: [
					{
						refId: 0,
						color: "tomato",
						weight: 2,
						dimensions: {
							x: 5,
							y: 6,
							z: 4,
						},
						quantity: this.state.quantity,
					},
					// (this.props.items).map()
				],
				boxTypes: [
					{
						weightMax: 150,
						name: "5x6x8",
						dimensions: {
							x: 12,
							y: 15,
							z: 20,
						},
					},
				],
				includeScripts: false,
			})
			.then((response) => {
				console.log(response);
				this.setState({ image: response.data.svgs });
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

					<Item
						name="Orange Cube"
						value={this.state.quantity}
						onChange={(quantity) =>
							this.handleChange(quantity)
						}
					/>
				</div>
				<div id="results">
					<h1>Results</h1>
					<Result response={this.state.image} />
				</div>
			</div>
		);
	}
}

export default App;
