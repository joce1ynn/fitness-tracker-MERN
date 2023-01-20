import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { getCardioById, getResistanceById, deleteCardio, deleteResistance } from '../utils/API';
import { formatDate } from '../utils/dateFormat';
import Header from "./Header";

export default function SingleExercise() {
    const { id, type } = useParams();
    const [cardioData, setCardioData] = useState({})
    const [resistanceData, setResistanceData] = useState({})
    const [deleted, setDeleted] = useState(false)

    const loggedIn = Auth.loggedIn();
    const navigate = useNavigate()

    useEffect(() => {
        const displayExercise = async (exerciseId) => {
            //get token
            const token = loggedIn ? Auth.getToken() : null;
            if (!token) return false;

            // fetch cardio data by id
            if (type === "cardio") {
                try {
                    const response = await getCardioById(exerciseId, token);
                    if (!response.ok) { throw new Error('something went wrong!') }

                    const cardio = await response.json()
                    cardio.date = formatDate(cardio.date)
                    setCardioData(cardio)
                } catch (err) { console.error(err) }
            }

            // fetch resistance data by id
            else if (type === "resistance") {
                try {
                    const response = await getResistanceById(exerciseId, token);
                    if (!response.ok) { throw new Error('something went wrong!') }

                    const resistance = await response.json()
                    resistance.date = formatDate(resistance.date)
                    setResistanceData(resistance)
                } catch (err) { console.error(err) }
            }
        }
        displayExercise(id)
    }, [id, type, loggedIn])

    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    const handleDeleteExercise = async (exerciseId) => {
        const token = loggedIn ? Auth.getToken() : null;
        if (!token) return false;
        // delete cardio data
        if (type === "cardio") {
            try {
                const response = await deleteCardio(exerciseId, token);
                if (!response.ok) { throw new Error('something went wrong!') }
            }
            catch (err) { console.error(err) }
        }

        // delete resistance data
        else if (type === "resistance") {
            try {
                const response = await deleteResistance(exerciseId, token);
                if (!response.ok) { throw new Error('something went wrong!') }
            }
            catch (err) { console.error(err) }
        }

        setDeleted(true)
    }

    return (
        <div>
            <Header />
            {deleted ?
                (<div>
                    <h3>Exercise is deleted!</h3>
                    <button onClick={() => navigate("/history")}>Go Back</button>
                </div>) :
                (<>
                    <h2 className='title text-center'>History</h2>
                    {type === "cardio" && (<div className='cardio-div'>
                        <p>Date: {cardioData.date}</p>
                        <p>Type: Cardio</p>
                        <p>Name: {cardioData.name}</p>
                        <p>Distance: {cardioData.distance} miles</p>
                        <p>Duration: {cardioData.duration} minutes</p>
                        <button onClick={() => handleDeleteExercise(id)}>Delete Exercise</button>
                        <button onClick={() => { navigate("/history") }}>Back</button>

                    </div>)}
                    {type === "resistance" && (<div className='resistance-div'>
                        <p>Date: {resistanceData.date}</p>
                        <p>Type: Resistance</p>
                        <p>Name: {resistanceData.name}</p>
                        <p>Weight: {resistanceData.weight} lbs</p>
                        <p>Sets: {resistanceData.sets}</p>
                        <p>Reps: {resistanceData.reps}</p>
                        <button onClick={() => handleDeleteExercise(id)}>Delete Exercise</button>
                        <button onClick={() => { navigate("/history") }}>Back</button>

                    </div>)}
                </>)}

        </div>

    )
}
