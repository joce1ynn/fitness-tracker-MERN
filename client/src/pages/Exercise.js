import React, { useState } from 'react'
import Cardio from '../components/Cardio';
import Resistance from '../components/Resistance';

export default function Exercise() {
  const [exerciseType, setExerciseType] = useState("default")
  const [cardioForm, setCardioForm] = useState({
    name: "",
    distance: "",
    duration: ""
  })
  const [resistanceForm, setResistanceForm] = useState({
    name: "",
    weight: "",
    sets: "",
    reps: ""
  })

  const validateForm = (form, type) => {
    if (type === "cardio") {
      return form.name && form.distance && form.duration;
    } else if (type === "resistance") {
      return form.name && form.weight && form.sets && form.reps;
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm(cardioForm, exerciseType)) {
      console.log("cardio form is valid");
    } else if (validateForm(resistanceForm, exerciseType)) {
      console.log("resistance form is valid");
    }

    setCardioForm({
      name: "",
      distance: "",
      duration: ""
    });

    setResistanceForm({
      name: "",
      weight: "",
      sets: "",
      reps: ""
    });
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


