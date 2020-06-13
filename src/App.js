import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item/Item.js";
import Result from './components/Result/Result.js';

function App() {
	return (
		<div className="App">
			<div id="items">
				<Item name="Canned Food" value="0" />
				<Item name="Toliet Paper" value="0" />
				<Item name="Hand Sanitizer" value="0" />
			</div>
			<div id="results">
        <h1>Results</h1>
        <Result />
			</div>
		</div>
	);
}

export default App;
