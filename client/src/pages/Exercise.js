import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Cardio from '../components/Cardio';
import Resistance from '../components/Resistance';
import Auth from "../utils/auth";
import { createCardio, createResistance } from '../utils/API';

export default function Exercise() {
  const [exerciseType, setExerciseType] = useState("default")
  const [cardioForm, setCardioForm] = useState({
    name: "",
    distance: "",
    duration: "",
    date: ""
  })
  const [resistanceForm, setResistanceForm] = useState({
    name: "",
    weight: "",
    sets: "",
    reps: "",
    date: ""
  })

  const loggedIn = Auth.loggedIn();

  const validateForm = (form, type) => {
    if (type === "cardio") {
      return form.name && form.distance && form.duration && form.date;
    } else if (type === "resistance") {
      return form.name && form.weight && form.sets && form.reps && form.date;
    }
    return false;
  }

  const handleTypeChange = (event) => {
    setExerciseType(event.target.value);
  }

  const handleCardioChange = (event) => {
    const { name, value } = event.target;
    setCardioForm({ ...cardioForm, [name]: value })
  }

  const handleResistanceChange = (event) => {
    const { name, value } = event.target;
    setResistanceForm({ ...resistanceForm, [name]: value })

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    //get token
    const token = loggedIn ? Auth.getToken() : null;
    if (!token) return false;

    // cardio submit
    if (validateForm(cardioForm, exerciseType)) {
      try {
        const response = await createCardio(cardioForm, token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const cardioData = await response.json()
        console.log(cardioData)
      } catch (err) {
        console.error(err)
      }
    }

    // resistance submit
    else if (validateForm(resistanceForm, exerciseType)) {
      try {
        const response = await createResistance(resistanceForm, token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const resistanceData = await response.json()
        console.log(resistanceData)
      } catch (err) {
        console.error(err)
      }
    }

    // clear form input
    setCardioForm({
      name: "",
      distance: "",
      duration: "",
      date: ""

    });
    setResistanceForm({
      name: "",
      weight: "",
      sets: "",
      reps: "",
      date: ""
    });
  }

  // If the user is not logged in, redirect to the login page
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Add Exercise</h2>
      <form onSubmit={handleSubmit}>
        <div className='type'>
          <label>Type:</label>
          <select value={exerciseType} onChange={handleTypeChange}>
            <option disabled value="default">Select Exercise Type</option>
            <option value="cardio" >Cardio</option>
            <option value="resistance" >Resistance</option>
          </select>
        </div>
        {/* Render the component based on the selected option */}
        {exerciseType === 'cardio' &&
          <Cardio cardioForm={cardioForm} handleCardioChange={handleCardioChange} />}
        {exerciseType === 'resistance' &&
          <Resistance resistanceForm={resistanceForm} handleResistanceChange={handleResistanceChange} />}
        <input type="submit" value="Add"
          disabled={!validateForm(cardioForm, exerciseType) && !validateForm(resistanceForm, exerciseType)} />
      </form>
    </div>
  );
}


