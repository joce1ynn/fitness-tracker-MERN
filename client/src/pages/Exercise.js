import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Auth from "../utils/auth";
import Header from "../components/Header";
import cardioIcon from "../assets/images/cardio.png"
import resistanceIcon from "../assets/images/resistance.png"


export default function Exercise() {
  const loggedIn = Auth.loggedIn();
  const navigate = useNavigate()


  // If the user is not logged in, redirect to the login page
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <div className="exercise d-flex flex-column align-items-center">
        <h2 className='title'>Add Exercise</h2>
        <div className='cardio-div'>
          <button className='exercise-btn' onClick={() => navigate("/exercise/cardio")}>
            <img alt="cardio" src={cardioIcon} className="exercise-icon" />
            <p>Cardio</p>
          </button>
        </div>
        <div className='resistance-div'>
          <button className='exercise-btn' onClick={() => navigate("/exercise/resistance")}>
            <img alt="resistance" src={resistanceIcon} className="exercise-icon" />
            <p>Resistance</p>
          </button>
        </div>
      </div>
    </div>
  );
}


