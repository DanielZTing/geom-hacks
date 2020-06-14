import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item/Item.js";
import Result from "./components/Result/Result.js";
import axios from "axios";
import 'fontsource-roboto';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// NOTE: Dimensions are in cm, order shouldn't matter if I'm reading the docs right.
			// Weight is in LB
			// FIXME: Nobody would really donate one item, they would buy them in packs? Can account for this later.
			items: {
				"Canned Food": {
					quantity: 10,
					dimensions: { x: 7.5, y: 7.5, z: 13 },
					color: "brown",
					refId: 1,
					weight: 2,
				},
				"Toilet Paper": {
					quantity: 3,
					dimensions: { x: 12, y: 12, z: 12 },
					color: "yellow",
					refId: 2,
					weight: 0.5,
				},
				"Hand Sanitizer": {
					quantity: 5,
					dimensions: { x: 27, y: 11, z: 8 },
					color: "blue",
					refId: 3,
					weight: 0.7,
				},
			},
			image: "",
			quantity: 5,
		};
	}

	handleChange(item, quantity) {
		this.state.items[item]["quantity"] = Number(quantity);
		console.log(this.state);
		this.apiCall();

		// let temp = this.state.items;
		// temp[item].quantity = quantity;
		// this.setState({
		// 	items: temp,
		// 	image: "",
		// 	quantity: 5,
		// });
	}

	apiCall() {
		axios
			.post("https://api.paccurate.io/", {
				authorization:
					"JDYOJNGkVd5Zg4U42E3bT7htL350I0oYGBN5ufUbFaMrr5Kh_CmBc_Q4v6n_jhiG",
				itemSets: [
					// {
					// 	refId: 0,
					// 	color: "tomato",
					// 	weight: 2,
					// 	dimensions: {
					// 		x: 5,
					// 		y: 6,
					// 		z: 4,
					// 	},
					// 	// quantity: this.state.items["Canned Food"]["quantity"],
					// 	quantity: 2,
					// },
					// this.state.items.map(item),
					this.state.items["Canned Food"],
					this.state.items["Toilet Paper"],
					this.state.items["Hand Sanitizer"],
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
				this.setState({ image: "" });
				this.setState({ image: response.data.svgs });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.apiCall();
	}

	render() {
		return (
			<div className="App">
				<div id="items" class="split left">
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
				<div id="results" class="split right">
					<Result response={this.state.image} />
				</div>
			</div>
		);
	}
}

export default App;
