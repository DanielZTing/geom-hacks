import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item/Item.js";
import Result from './components/Result/Result.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"Canned Food": 0,
			"Toilet Paper": 0,
			"Hand Sanitizer": 0,
		}
	}

	handleChange() {
		alert('hi')
	}

	render() {
		return (
			<div className="App">
				<div id="items">
					{Object.keys(this.state).map((item) =>
						<Item name={item} value={this.state[item]} onChange={() => this.handleChange({item})} />
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
