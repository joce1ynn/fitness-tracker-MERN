import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Resistance() {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <div className='resistance-form'>
            <div className="res-name">
                <label>Name:</label>
                <input type="text" name="res-name" id="res-name" placeholder="Bench Press" />
            </div>
            <div className="weight">
                <label>Weight (lbs):</label>
                <input type="number" name="weight" id="weight" placeholder="0" />
            </div>
            <div className="sets">
                <label>Sets:</label>
                <input type="number" name="sets" id="sets" placeholder="0" />
            </div>
            <div className="reps">
                <label>Reps:</label>
                <input type="number" name="reps" id="reps" placeholder="0" />
            </div>
            <div className="date">
                <label>Date:</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </div>
    )
}
