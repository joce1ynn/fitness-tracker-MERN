import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Brand as={Link} to="/">
        Fitness Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className=" justify-content-end"
      >
        <Nav>
          <Nav.Link as={Link} to="/history" eventKey="1">
            History
          </Nav.Link>
          <Nav.Link as={Link} to="/exercise" eventKey="2">
            Exercise
          </Nav.Link>
          <Nav.Link as={Link} to="/" eventKey="3">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
