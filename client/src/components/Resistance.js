import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Auth from "../utils/auth";
import { createResistance } from '../utils/API';
import Header from "./Header";
import resistanceIcon from "../assets/images/resistance.png"

export default function Resistance() {
    const [resistanceForm, setResistanceForm] = useState({
        name: "",
        weight: "",
        sets: "",
        reps: "",
        date: ""
    })
    const [startDate, setStartDate] = useState(new Date());
    const [message, setMessage] = useState("");
    const loggedIn = Auth.loggedIn();
    const navigate = useNavigate();

    const handleDateChange = date => {
        setStartDate(date);
        handleResistanceChange({
            target: { name: "date", value: date }
        })
    }

    const handleResistanceChange = (event) => {
        const { name, value } = event.target;
        setResistanceForm({ ...resistanceForm, [name]: value })

    }

    const validateForm = (form) => {
        return form.name && form.weight && form.sets && form.reps && form.date;
    }

    const handleResistanceSubmit = async (event) => {
        event.preventDefault();

        //get token
        const token = loggedIn ? Auth.getToken() : null;
        if (!token) return false;

        // get user id 
        const userId = Auth.getUserId();

        // resistance submit
        if (validateForm(resistanceForm)) {
            try {
                // add userid to resistance form
                resistanceForm.userId = userId;

                const response = await createResistance(resistanceForm, token);

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }

                setMessage("Resistance successfully created!")
                setTimeout(() => {
                    setMessage("")
                }, 3000);

            } catch (err) {
                console.error(err)
            }
        }

        // clear form input
        setResistanceForm({
            name: "",
            weight: "",
            sets: "",
            reps: "",
            date: ""
        });
    }

    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <div className="cardio d-flex flex-column align-items-center">
                <h2 className='title text-center'>Add Exercise</h2>
                <img alt="resistance" src={resistanceIcon} className="exercise-icon" />
                <h3>Resistance</h3>
                <form className='resistance-form' onSubmit={handleResistanceSubmit}>
                    <div className="res-name">
                        <label>Name:</label>
                        <input type="text" name="name" id="name" placeholder="Bench Press"
                            value={resistanceForm.name} onChange={handleResistanceChange} />
                    </div>
                    <div className="weight">
                        <label>Weight (lbs):</label>
                        <input type="number" name="weight" id="weight" placeholder="0"
                            value={resistanceForm.weight} onChange={handleResistanceChange} />
                    </div>
                    <div className="sets">
                        <label>Sets:</label>
                        <input type="number" name="sets" id="sets" placeholder="0"
                            value={resistanceForm.sets} onChange={handleResistanceChange} />
                    </div>
                    <div className="reps">
                        <label>Reps:</label>
                        <input type="number" name="reps" id="reps" placeholder="0"
                            value={resistanceForm.reps} onChange={handleResistanceChange} />
                    </div>
                    <div className="date">
                        <label>Date:</label>
                        <DatePicker selected={startDate}
                            value={resistanceForm.date}
                            onChange={handleDateChange} />
                    </div>
                    <input type="submit" value="Add"
                        disabled={!validateForm(resistanceForm)} />
                    <button onClick={() => { navigate("/exercise") }}>Back</button>
                    <p>{message}</p>
                </form>
            </div>
        </div>
    )
}
