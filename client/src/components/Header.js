import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// cant use <a> in react, instead, use <link> from react router dom
import { Link } from "react-router-dom";

import Auth from "../utils/auth"

export default function Header() {
  // logour function
  const logout = event => {
    event.preventDefault()
    Auth.logout()
  }

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
          {Auth.loggedIn() ? (
            <>
              {/* use eventKey to show navbar style from react bootstrap */}
              < Nav.Link as={Link} to="/history" eventKey="1">
                History
              </Nav.Link>
              <Nav.Link as={Link} to="/exercise" eventKey="2">
                Exercise
              </Nav.Link>
              <Nav.Link as={Link} to="/" eventKey="3" onClick={logout}>
                Logout
              </Nav.Link></>) : (<></>)}
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
}
