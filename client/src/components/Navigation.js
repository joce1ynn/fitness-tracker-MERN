import React from "react";
import Nav from "react-bootstrap/Nav";
// import { Link } from "react-router-dom";

export default function Navigation(props) {
  const { setCurrentPage } = props;
  return (
    <Nav>
      <Nav.Link
        href="#exercise"
        onClick={() => {
          setCurrentPage("Exercise");
        }}
      >
        Exercise
      </Nav.Link>
      <Nav.Link
        href="#history"
        onClick={() => {
          setCurrentPage("History");
        }}
      >
        History
      </Nav.Link>
      <Nav.Link
        href="#logout"
        onClick={() => {
          setCurrentPage("Login");
        }}
      >
        Logout
      </Nav.Link>
    </Nav>
  );
}
