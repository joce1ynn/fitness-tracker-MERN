import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';

import { getMe } from '../utils/API';
import Auth from "../utils/auth"
import { formatDate } from '../utils/dateFormat';

export default function History() {
  const [userData, setUserData] = useState({});
  const [exerciseData, setExerciseData] = useState([])

  const loggedIn = Auth.loggedIn();

  // everytime loggedIn/userdata changes, the getuserdata runs
  useEffect(() => {
    const getUserData = async () => {
      try {
        //get token
        const token = loggedIn ? Auth.getToken() : null;
        if (!token) return false;

        const response = await getMe(token)

        if (!response.ok) {
          throw new Error("something went wrong!")
        }

        const user = await response.json()

        // combine cardio and resistance data together
        if (user.cardio && user.resistance) {
          const cardio = user.cardio;
          const resistance = user.resistance;
          const exercise = cardio.concat(resistance);

          // sort exercise data by date
          exercise.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
          })

          //format date in exercise data
          exercise.forEach(item => {
            item.date = formatDate(item.date)
          });

          setUserData(user);
          setExerciseData(exercise)
        }
      } catch (err) { console.error(err) }
    };
    getUserData();
  }, [loggedIn, userData])

  // If the user is not logged in, redirect to the login page
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  let currentDate;
  return (
    <div>
      <h2>History</h2>
      <h3>
        {exerciseData.length ? null : "No exercise data yet!"}
      </h3>
      <div>
        {exerciseData.map((exercise) => {
          let dateToDisplay;
          if (exercise.date !== currentDate) {
            currentDate = exercise.date;
            dateToDisplay = exercise.date;
          }
          return (
            <div className='exercise-div' key={exercise._id}>
              <div className='date'>{dateToDisplay}</div>
              <Link to={`/exercise/${exercise.type}/${exercise._id}`} className='exercise'>
                <p>{exercise.name}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
