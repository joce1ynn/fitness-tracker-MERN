import React, { useState } from "react";

export default function Signup() {
  // set up the orginal state of the form
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

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
  };

  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
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
          <button className="btn">Create your account</button>

          {/* --------------------login link-------------------- */}
          <p>
            Already have an account?
            <button>Log in.</button>
          </p>
        </form>
      </div>
    </div>
  );
}
