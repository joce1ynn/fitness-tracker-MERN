import React from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth"

export default function Home() {
  const navigate = useNavigate();
  const loggedIn = Auth.loggedIn()
  return (
    <Container>
      <h1>Your Daily Workout Partner</h1>
      <p>
        Cardio? Resistance? Or both? Track your daily exercises and stay fit
        with us.
      </p>

      {loggedIn ?
        (<button onClick={() => navigate("/exercise")}>Add Exercise</button>) :
        (<button onClick={() => navigate("/signup")}>Get Started</button>)}
    </Container>
  );
}
