import React from 'react'

export default function Exercise() {
  return (
    <div>
      <h2>Add Exercise</h2>
      <form>
        <div className='type'>
          <label>Type:</label>
          <select>
            <option>Select Exercise Type</option>
            <option>Cardio</option>
            <option>Resistance</option>
          </select></div>
        <div className='cardio-form'>
          <div className="cardio-name">
            <label for="cardio-name">Name:</label>
            <input type="text" name="cardio-name" id="cardio-name" placeholder="Running" />
          </div>
          <div className="distance">
            <label for="distance">Distance (miles):</label>
            <input type="number" name="distance" id="distance" placeholder="0" />
          </div>
          <div className="duration">
            <label for="duration">Duration (minutes):</label>
            <input type="number" name="duration" id="duration" placeholder="0" />
          </div>
          <div className="date">
            <label for="date">Date:</label>
            <input type="text" name="date" id="date" placeholder="mm/dd/yyyy" />
          </div>
        </div>
        <div className='resistance-form'>
          <div className="res-name">
            <label for="name">Name:</label>
            <input type="text" name="res-name" id="res-name" placeholder="Bench Press" />
          </div>
          <div className="weight">
            <label for="weight">Weight (lbs):</label>
            <input type="number" name="weight" id="weight" placeholder="0" />
          </div>
          <div className="sets">
            <label for="sets">Sets:</label>
            <input type="number" name="sets" id="sets" placeholder="0" />
          </div>
          <div className="reps">
            <label for="reps">Reps:</label>
            <input type="number" name="reps" id="reps" placeholder="0" />
          </div>
          <div className="date">
            <label for="date">Date:</label>
            <input type="text" name="date" id="date" placeholder="mm/dd/yyyy" />
          </div>
        </div>
        <div className='exercise-btn'>
          <button >Add</button>
        </div>
      </form>
    </div>
  )
}
