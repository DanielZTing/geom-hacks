import React from "react";
import "./Result.css"
import axios from "axios";

const Result = (props) => {
	return (
		<div>
			<h2>API Call</h2>
			<div dangerouslySetInnerHTML={{ __html: props.response }} />
		</div>
	);
};

export default Result;
