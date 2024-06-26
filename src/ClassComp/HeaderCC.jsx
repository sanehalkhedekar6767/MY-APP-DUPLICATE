import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


class HeaderCC extends Component {
  render() {
    return (
      <div>
        <h1>This is using Class Component </h1>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">HTML</Nav.Link>
                <Nav.Link href="#link">CSS</Nav.Link>
                <Nav.Link href="#link">JAVASCRIPT</Nav.Link>
                <Nav.Link href="#link">REACT JS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default HeaderCC;
