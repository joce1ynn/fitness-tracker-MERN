import React, { useState } from "react";
import { Link } from "react-router-dom";

import { loginUser } from "../utils/API";
import Auth from "../utils/auth";

export default function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(false);

  // update state based on form input changes
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

    // check the response
    try {
      const response = await loginUser(formState);

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      // use authentication function
      const { token, user } = await response.json();
      Auth.login(token);
      console.log(user);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
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

          {/* --------------------login btn-------------------- */}
          <button disabled={!(formState.email && formState.password)}>Login</button>

          {/* --------------------signup link-------------------- */}
          <p>
            No account?{' '}
            <Link to="/signup">Create one</Link>

          </p>
        </form>
        {showAlert && <div>Login failed</div>}
      </div>
    </div>
  );
}
