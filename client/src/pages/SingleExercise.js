import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import Auth from '../utils/auth';
import { getCardioById, getResistanceById } from '../utils/API';
import { formatDate } from '../utils/dateFormat';

export default function SingleExercise() {
    const { id, type } = useParams();
    const [cardioData, setCardioData] = useState({})
    const [resistanceData, setResistanceData] = useState({})

    const loggedIn = Auth.loggedIn();

    useEffect(() => {
        // fetch cardio data by id
        if (type === "cardio") {
            const displayCardio = async (cardioId) => {
                const token = loggedIn ? Auth.getToken() : null;
                if (!token) return false;

                try {
                    const response = await getCardioById(cardioId, token);
                    const cardio = await response.json()
                    cardio.date = formatDate(cardio.date)
                    setCardioData(cardio)
                } catch (err) { console.error(err) }

            }
            displayCardio(id);
        }

        // fetch resistance data by id
        else if (type === "resistance") {
            const displayResistance = async (resistanceId) => {
                const token = loggedIn ? Auth.getToken() : null;
                if (!token) return false;

                try {
                    const response = await getResistanceById(resistanceId, token);
                    const resistance = await response.json()
                    resistance.date = formatDate(resistance.date)
                    setResistanceData(resistance)
                } catch (err) { console.error(err) }
            }
            displayResistance(id);
        }
    }, [id, type, loggedIn])

    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            {type === "cardio" && (<div className='cardio-div'>
                <p>Date: {cardioData.date}</p>
                <p>Type: Cardio</p>
                <p>Name: {cardioData.name}</p>
                <p>Distance: {cardioData.distance}</p>
                <p>Duration: {cardioData.duration}</p>
                <button>Delete</button>
            </div>)}
            {type === "resistance" && (<div className='resistance-div'>
                <p>Date: {resistanceData.date}</p>
                <p>Type: Resistance</p>
                <p>Name: {resistanceData.name}</p>
                <p>Weight: {resistanceData.weight}</p>
                <p>Sets: {resistanceData.sets}</p>
                <p>Reps: {resistanceData.reps}</p>
                <button>Delete</button>
            </div>)}
        </div>

    )
}
