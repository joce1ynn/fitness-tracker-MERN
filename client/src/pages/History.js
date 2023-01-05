import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { getMe } from '../utils/API';
import Auth from "../utils/auth"

export default function History() {
  const [userData, setUserData] = useState({});

  const loggedIn = Auth.loggedIn();


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
      setUserData(user);
      console.log(userData);
    } catch (err) { console.error(err) }
  }

  getUserData()


  // If the user is not logged in, redirect to the login page
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>History</h2>
      <div>
        <div className='date'>

        </div>
        <div className='exercise'>Exercise data</div>
        <button>Show More</button>
      </div>
    </div>
  )
}
