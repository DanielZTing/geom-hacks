import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import boatImage from "../src/boatImage.png";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Styles = styled.div`
	.jumbo {
		background: url(${boatImage}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		height: 800px;
		position: relative;
		z-index: 6;
		text-align: center;
		font-size: 50px;
	}
	.overlay {
		background-color: #000;
		opacity: 0.4;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 4;
	}

	h1 {
		z-index: 10;
    color: white;
	}

	#icon {
		top: 75vh;
		color: white;
		font-size: 72px;
		z-index: 10;
	}
`;

export const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
			<Container>
				<h1>Compacctly</h1>
				<div id="icon">
					<ExpandMoreIcon fontSize="inherit" />
				</div>
			</Container>
		</Jumbo>
	</Styles>
);

export default Jumbotron;
