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
  const [formValid, setFormValid] = useState(false)

  const validateForm = () => {
    if (exerciseType === "cardio") {
      (cardioForm.name && cardioForm.distance && cardioForm.duration) ?
        setFormValid(true) : setFormValid(false)
    }

    else if (exerciseType === "resistance") {
      (resistanceForm.name && resistanceForm.weight && resistanceForm.sets && resistanceForm.reps) ?
        setFormValid(true) : setFormValid(false)
    }
  }

  const handleTypeChange = (event) => {
    setExerciseType(event.target.value)
  }

  const handleCardioChange = (event) => {
    const { name, value } = event.target;
    setCardioForm({ ...cardioForm, [name]: value })
    validateForm();
  }

  const handleResistanceChange = (event) => {
    const { name, value } = event.target;
    setResistanceForm({ ...resistanceForm, [name]: value })
    validateForm();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (formValid) {
    //   // Submit the form
    // }

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
        <input type="submit" value="Add" disabled={!formValid} />
      </form>
    </div>
  );
}


