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
					quantity: 0,
					dimensions: { x: 8.128, y: 8.128, z: 12.7 },
					color: "#f44336",
					weight: 1.1625,
				},
				"Toilet Paper": {
					quantity: 0,
					dimensions: { x: 33.528, y: 11.176, z: 20.32 },
					color: "#E91E63",
					weight: 1.92,
				},
				"Hand Sanitizer": {
					quantity: 0,
					dimensions: { x: 5, y: 3, z: 12 },
					color: "#9C27B0",
					weight: 0.55125,
				},
				"Tylenol": {
					quantity: 0,
					dimensions: { x: 9.652, y: 5.08, z: 5.08 },
					color: "#3F51B5",
					weight: 0.21875,
				},
				"Advil": {
					quantity: 0,
					dimensions: { x: 10.16, y: 5.08, z: 4.826 },
					color: "#2196F3",
					weight: 0.0375,
				},
				"Rubbing Alcohol Wipes": {
					quantity: 0,
					dimensions: { x: 15, y: 5, z: 5 },
					color: "#00BCD4",
					weight: 0.2,
				},
				"Rubbing Alcohol": {
					quantity: 0,
					dimensions: { x: 8.89, y: 8.89, z: 20.32 },
					color: "#4CAF50",
					weight: 2.25,
				},
				"Wet Wipes": {
					quantity: 0,
					dimensions: { x: 15, y: 4, z: 7 },
					color: "#CDDC39",
					weight: 0.625,
				},
				"Tissue Box": {
					quantity: 0,
					dimensions: { x: 9, y: 5, z: 5},
					color: "#FF9800",
					weight: 0.775,
				},
				"Gloves": {
					quantity: 0,
					dimensions: { x: 21, y: 12, z: 6 },
					color: "#795548",
					weight: 0.9125,
				},
				"Masks": {
					quantity: 0,
					dimensions: { x: 17.78, y: 10.16, z: 7.62},
					color: "#607D8B",
					weight: 0.4,
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
