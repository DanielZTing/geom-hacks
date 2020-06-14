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
		7.50,
		8.25,
		8.70,
		9.20,
		10.20,
		10.95,
		11.95,
		12.30,
		12.80,
		13.60,
		14.95,
		16.25,
		17.25,
		18.30,
		18.95,
		19.60,
		20.50,
		20.85,
		21.45,
		22.35,
		25.00,
		29.30,
		31.60,
		33.35,
		34.80,
		36.05,
		38.40,
		41.30,
		44.20,
		47.15,
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
					quantity: 0,
					dimensions: { x: 8.128, y: 8.128, z: 12.7 },
					color: "#f44336",
					weight: 1.1625,
					cost: 178,
				},
				"Toilet Paper": {
					quantity: 0,
					dimensions: { x: 5.08, y: 5.08, z: 5.08 },
					color: "#FF9800",
					weight: 1,
					cost: 60,
				},
				"Hand Sanitizer": {
					quantity: 0,
					dimensions: { x: 5, y: 3, z: 12 },
					color: "#FFEB3B",
					weight: 0.55125,
					cost: 688,
				},
				Tylenol: {
					quantity: 0,
					dimensions: { x: 9.652, y: 5.08, z: 5.08 },
					color: "#4CAF50",
					weight: 0.21875,
					cost: 947,
				},
				Advil: {
					quantity: 0,
					dimensions: { x: 10.16, y: 5.08, z: 4.826 },
					color: "#2196F3",
					weight: 0.0375,
					cost: 847,
				},
				"Rubbing Alcohol Wipes": {
					quantity: 0,
					dimensions: { x: 15, y: 5, z: 5 },
					color: "#3F51B5",
					weight: 0.2,
					cost: 999,
				},
				"Rubbing Alcohol": {
					quantity: 0,
					dimensions: { x: 8.89, y: 8.89, z: 20.32 },
					color: "#9C27B0",
					weight: 2.25,
					cost: 2898,
				},
				"Wet Wipes": {
					quantity: 0,
					dimensions: { x: 15, y: 4, z: 7 },
					color: "#795548",
					weight: 0.625,
					cost: 1449,
				},
				"Tissue Box": {
					quantity: 0,
					dimensions: { x: 9, y: 5, z: 5 },
					color: "#9E9E9E",
					weight: 0.775,
					cost: 1358,
				},
				Gloves: {
					quantity: 0,
					dimensions: { x: 21, y: 12, z: 6 },
					color: "#607D8B",
					weight: 0.9125,
					cost: 1849,
				},
				Masks: {
					quantity: 0,
					dimensions: { x: 17.78, y: 10.16, z: 7.62 },
					color: "#009688",
					weight: 0.4,
					cost: 2994,
				},
			},
			image: "",
			boxCost: "",
			totalCost: "",
		};
	}

	handleChange(item, quantity) {
		if (quantity > -1)
			this.state.items[item]["quantity"] = Number(quantity);

		this.state.totalCost = 0;
		Object.keys(this.state.items).map((element) => (
			this.state.totalCost += this.state.items[element]["quantity"] * this.state.items[element]["cost"]
		));
		// console.log(this.state);
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
				key:
					"JDYOJNGkVd5Zg4U42E3bT7htL350I0oYGBN5ufUbFaMrr5Kh_CmBc_Q4v6n_jhiG",
				imgSize: 200,
				itemSets: Object.values(this.state.items),
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
				this.setState({ image: response.data.svgs });
				this.setState({ boxCost: response.data.totalCost });
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
				<h1>Praccurate</h1>
				<p>Total cost: ${(this.state.totalCost + this.state.boxCost)/100}</p>
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
