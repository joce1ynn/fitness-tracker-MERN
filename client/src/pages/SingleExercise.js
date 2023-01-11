import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import Auth from '../utils/auth';
import { getCardioById, getResistanceById } from '../utils/API';

export default function SingleExercise() {
    const { id } = useParams();
    const [cardioData, setCardioData] = useState({})
    const [resistanceData, setResistanceData] = useState({})


    const loggedIn = Auth.loggedIn();

    useEffect(() => {
        const displayExercise = async (exerciseId) => {
            const token = loggedIn ? Auth.getToken() : null;
            if (!token) return false;

            try {
                const response = await getCardioById(exerciseId, token);

                const cardio = await response.json()
                setCardioData(cardio)
            } catch (err) {
                console.error(err);
                // get resistance data instead
                if (err.response && err.response.status === 404) {
                    try {
                        const response = await getResistanceById(exerciseId, token);

                        const resistance = await response.json()

                        setResistanceData(resistance)
                    } catch (err) { console.error(err) }
                }
            }
        }
        displayExercise(id);
    }, [id, loggedIn])

    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            {cardioData && (<div className='cardio-div'>
                <p>Date:{cardioData.date}</p>
                <p>Type:Cardio</p>
                <p>Name:{cardioData.name}</p>
                <p>Distance:{cardioData.distance}</p>
                <p>Duration:{cardioData.duration}</p>
                <button>Delete</button>
            </div>)}
            {resistanceData && (<div className='resistance-div'>
                <p>Date:{resistanceData.date}</p>
                <p>Type:Resistance</p>
                <p>Name:{resistanceData.name}</p>
                <p>Weight:{resistanceData.weight}</p>
                <p>Sets:{resistanceData.sets}</p>
                <p>Reps:{resistanceData.reps}</p>
                <button>Delete</button>
            </div>)}
        </div>

    )
}
