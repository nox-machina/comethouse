import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
    return (
        //default nav
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Comet-House</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;