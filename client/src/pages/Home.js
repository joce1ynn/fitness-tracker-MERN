import React from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Your Daily Workout Partner</h1>
      <p>
        Cardio? Resistance? Or both? Track your daily exercises and stay fit
        with us.
      </p>
      <button onClick={() => navigate("/signup")}>Get Started</button>
      <button onClick={() => navigate("/exercise")}>Add Exercise</button>
    </Container>
  );
}
