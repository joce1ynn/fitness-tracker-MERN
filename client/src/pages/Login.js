import React, { useState } from "react";

export default function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });

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
          <button className="btn">Login</button>

          {/* --------------------signup link-------------------- */}
          <p>
            No account?
            <button>Create one.</button>
          </p>
        </form>
      </div>
    </div>
  );
}
