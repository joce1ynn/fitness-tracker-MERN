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
      {Auth.loggedIn() ? (<>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-end">
          <Nav>
            {/* use eventKey to show navbar style from react bootstrap */}
            <Nav.Link as={Link} to="/exercise" eventKey="1">
              Exercise
            </Nav.Link>
            < Nav.Link as={Link} to="/history" eventKey="2">
              History
            </Nav.Link>
            <Nav.Link as={Link} to="/" eventKey="3" onClick={logout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>) : null}

    </Navbar >
  );
}
