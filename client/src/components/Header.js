import React from "react";
import Navigation from "./Navigation";
import Navbar from "react-bootstrap/Navbar";

export default function Header(props) {
  return (
    <Navbar
      collapseOnSelect
      className="navbar"
      variant="dark"
      expand="sm"
      aria-current="true"
    >
      <Navbar.Brand>Fitness Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className=" justify-content-end"
      >
        <Navigation setCurrentPage={props.setCurrentPage}></Navigation>
      </Navbar.Collapse>
    </Navbar>
  );
}
