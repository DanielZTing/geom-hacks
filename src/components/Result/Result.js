import React from "react";

const Result = (props) => {
	return (
		<div>
			<h2>API Call</h2>
			<p>{props.response}</p>
		</div>
	);
};

export default Result;
