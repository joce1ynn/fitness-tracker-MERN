import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Cardio(props) {
    const { cardioForm, handleCardioChange } = props;
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = date => {
        setStartDate(date);
        handleCardioChange({
            target: { name: "date", value: date }
        })
    }

    return (
        <div className='cardio-form'>
            <div className="cardio-name">
                <label >Name:</label>
                <input type="text" name="name" id="name" placeholder="Running"
                    value={cardioForm.name} onChange={handleCardioChange} />
            </div>
            <div className="distance">
                <label >Distance (miles):</label>
                <input type="number" name="distance" id="distance" placeholder="0"
                    value={cardioForm.distance} onChange={handleCardioChange} />
            </div>
            <div className="duration">
                <label >Duration (minutes):</label>
                <input type="number" name="duration" id="duration" placeholder="0"
                    value={cardioForm.duration} onChange={handleCardioChange} />
            </div>
            <div className="date">
                <label >Date:</label>
                <DatePicker selected={startDate}
                    value={cardioForm.date}
                    onChange={handleDateChange}
                />
            </div>
        </div>
    )
}
