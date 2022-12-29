import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Resistance(props) {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <div className='resistance-form'>
            <div className="res-name">
                <label>Name:</label>
                <input type="text" name="name" id="name" placeholder="Bench Press"
                    value={props.resistanceForm.name} onChange={props.handleResistanceChange} />
            </div>
            <div className="weight">
                <label>Weight (lbs):</label>
                <input type="number" name="weight" id="weight" placeholder="0"
                    value={props.resistanceForm.weight} onChange={props.handleResistanceChange} />
            </div>
            <div className="sets">
                <label>Sets:</label>
                <input type="number" name="sets" id="sets" placeholder="0"
                    value={props.resistanceForm.sets} onChange={props.handleResistanceChange} />
            </div>
            <div className="reps">
                <label>Reps:</label>
                <input type="number" name="reps" id="reps" placeholder="0"
                    value={props.resistanceForm.reps} onChange={props.handleResistanceChange} />
            </div>
            <div className="date">
                <label>Date:</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </div>
    )
}
