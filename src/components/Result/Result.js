import React from "react";
import "./Result.css";
import axios from "axios";

const styleObj = {
	width: "200px",
	height: "200px",
	stroke: "#666",
	strokeDasharray: "2, 1",
	strokeWidth: 1,
};

const Result = (props) => {
	console.log(props.response);
	return (
		<div
			dangerouslySetInnerHTML={{ __html: props.response }}
			style={styleObj}
		/>
	);
};

export default Result;
