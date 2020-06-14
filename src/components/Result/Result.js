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
		<div>
			{Object.keys(props.response).map((element) => (
				<div
					dangerouslySetInnerHTML={{
						__html: props.response[element],
					}}
					style={styleObj}
				/>
			))}
		</div>
	);
};

export default Result;
