import React, { useState } from "react";
import { loginUser } from "../utils/API";

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

      const { user } = await response.json();
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
          <button>Login</button>

          {/* --------------------signup link-------------------- */}
          <p>
            No account?
            <button className="link-btn">Create one.</button>
          </p>
        </form>
        {showAlert && <div>Login failed</div>}
      </div>
    </div>
  );
}
