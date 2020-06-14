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
	return (
		<div>
			{Object.keys(props.response).map((element) => (
				<div>
					{console.log(element)}
					<div
						dangerouslySetInnerHTML={{
							__html: props.response[element],
						}}
						style={styleObj}
					/>
					{/* {console.log(props.names[element])} */}
					<h2>{props.names[element]}</h2>
				</div>
			))}
		</div>
	);
};

export default Result;
