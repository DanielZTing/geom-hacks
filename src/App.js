import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item/Item.js";
import Result from "./components/Result/Result.js";
import axios from "axios";
import "fontsource-roboto";

const uspsRate = {
	carrier: "USPS",
	rates: [
		750,
		825,
		870,
		920,
		1020,
		1095,
		1195,
		1230,
		1280,
		1360,
		1495,
		1625,
		1725,
		1830,
		1895,
		1960,
		2050,
		2085,
		2145,
		2235,
		2500,
		2930,
		3160,
		3335,
		3480,
		3605,
		3840,
		4130,
		4420,
		4715,
	],
	weights: [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		20,
		25,
		30,
		35,
		40,
		45,
		50,
		55,
		60,
		65,
		70,
	],
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// NOTE: Dimensions are in cm, order shouldn't matter if I'm reading the docs right.
			// Weight is in LB
			// Price is in USD cents
			// FIXME: Nobody would really donate one item, they would buy them in packs? Can account for this later.
			items: {
				"Canned Food": {
					quantity: 5,
					dimensions: { x: 7.5, y: 7.5, z: 13 },
					color: "brown",
					weight: 2,
				},
				"Toilet Paper": {
					quantity: 3,
					dimensions: { x: 12, y: 12, z: 12 },
					color: "yellow",
					weight: 0.5,
				},
				"Hand Sanitizer": {
					quantity: 5,
					dimensions: { x: 27, y: 11, z: 8 },
					color: "blue",
					weight: 0.7,
				},
			},
			image: "",
			tooLarge: false,
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
				imgSize: 200,
				itemSets: [
					// this.state.items.map(item),
					this.state.items["Canned Food"],
					this.state.items["Toilet Paper"],
					this.state.items["Hand Sanitizer"],
				],
				boxTypes: [
					{
						name: "USPS Small",
						weightMax: 70,
						dimensions: {
							x: 21.9075,
							y: 13.6525,
							z: 4.1275,
						},
						price: 830,
						rateTable: uspsRate,
					},
					{
						name: "USPS Medium 1",
						weightMax: 70,
						dimensions: {
							x: 27.94,
							y: 21.59,
							z: 13.97,
						},
						price: 1505,
						rateTable: uspsRate,
					},
					{
						name: "USPS Medium 2",
						weightMax: 70,
						dimensions: {
							x: 34.6075,
							y: 30.1625,
							z: 8.5725,
						},
						price: 1505,
						rateTable: uspsRate,
					},
					{
						name: "USPS Medium 2",
						weightMax: 70,
						dimensions: {
							x: 34.6075,
							y: 30.1625,
							z: 8.5725,
						},
						price: 1505,
						rateTable: uspsRate,
					},
					{
						name: "USPS Large 1",
						weightMax: 70,
						dimensions: {
							x: 30.48,
							y: 30.48,
							z: 13.97,
						},
						price: 2110,
						rateTable: uspsRate,
					},
					{
						name: "USPS Large 2",
						weightMax: 70,
						dimensions: {
							x: 60.16625,
							y: 29.845,
							z: 7.62,
						},
						price: 2110,
						rateTable: uspsRate,
					},
				],
				includeScripts: false,
			})
			.then((response) => {
				console.log(response);
				this.setState({ image: "" });
				this.setState({ image: response.data.svgs });
				this.setState({ tooLarge: false });
				// this.setState({ tooLarge: response.data. });
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
