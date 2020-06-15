import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import boatImage from '../src/boatImage.png';
import "./Jumbotron.css";

export const Jumbotron = () => (
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>COVID-AID</p>
      </Container>
    </Jumbo>
)