import React from "react";
import "./Result.css"
import axios from "axios";

const Result = (props) => {
	console.log(props.response)
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: props.response }} />
		</div>
	);
};

export default Result;
