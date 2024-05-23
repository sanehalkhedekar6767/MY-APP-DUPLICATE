import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class ReactCC extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>React JS Tutorial</Card.Title>
          <Card.Text>
            React, sometimes referred to as a frontend JavaScript framework, is
            a JavaScript library created by Facebook. React is a tool for
            building UI components.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ReactCC;
