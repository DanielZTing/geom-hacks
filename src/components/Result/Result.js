import React from "react";
import "./Result.css"
import axios from "axios";

const Result = (props) => {
	console.log(props.response)
	return (
		<div>
			{Object.keys(props.response).map((element) => (
				<div dangerouslySetInnerHTML={{ __html: props.response[element] }} />
			))}
		</div>
	);
};

export default Result;
