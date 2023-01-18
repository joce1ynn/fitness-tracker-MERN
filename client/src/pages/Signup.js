import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../utils/API";
import Auth from "../utils/auth";
import Header from "../components/Header";


export default function Signup() {
  // set up the orginal state of the form
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  // update state based on form input
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch to handle errors
    try {
      // create new users
      const response = await createUser(formState);

      // check the response
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      // get token and user data from server
      const { token, user } = await response.json();
      // use authenticaiton functionality
      Auth.login(token);

      console.log(user);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };

  return (

    <div className="signup d-flex flex-column align-items-center justify-content-center text-center">
      <Header />
      <form onSubmit={handleFormSubmit} className="signup-form d-flex flex-column">
        {/* --------------------username-------------------- */}
        <label htmlFor="username">Username</label>
        <input
          className="form-input"
          value={formState.username}
          placeholder="Your username"
          name="username"
          type="username"
          onChange={handleChange}
        />

        {/* --------------------email-------------------- */}
        <label htmlFor="email">Email</label>
        <input
          className="form-input"
          value={formState.email}
          placeholder="youremail@gmail.com"
          name="email"
          type="email"
          onChange={handleChange}
        />

        {/* -------------------- password-------------------- */}
        <label htmlFor="password">Password</label>
        <input
          className="form-input"
          value={formState.password}
          placeholder="********"
          name="password"
          type="password"
          onChange={handleChange}
        />

        {/* --------------------sign up btn-------------------- */}
        <div className="btn-div">
          <button disabled={!(formState.username && formState.email && formState.password)}
            className="signup-btn mx-auto my-auto"
          >Create your account</button>
        </div>

        {/* --------------------login link-------------------- */}
        <p className="link-btn">
          Already have an account?{' '}
          <Link to="/login">Log in</Link>
        </p>
        {showAlert && <div className="message">Signup failed</div>}
      </form>
    </div>
  );
}
