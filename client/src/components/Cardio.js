import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Cardio(props) {


    const [startDate, setStartDate] = useState(new Date())
    return (
        <div className='cardio-form'>
            <div className="cardio-name">
                <label >Name:</label>
                <input type="text" name="name" id="name" placeholder="Running"
                    value={props.cardioForm.name} onChange={props.handleCardioChange} />
            </div>
            <div className="distance">
                <label >Distance (miles):</label>
                <input type="number" name="distance" id="distance" placeholder="0"
                    value={props.cardioForm.distance} onChange={props.handleCardioChange} />
            </div>
            <div className="duration">
                <label >Duration (minutes):</label>
                <input type="number" name="duration" id="duration" placeholder="0"
                    value={props.cardioForm.duration} onChange={props.handleCardioChange} />
            </div>
            <div className="date">
                <label >Date:</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                />
            </div>
        </div>
    )
}
