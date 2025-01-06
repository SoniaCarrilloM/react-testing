import React from "react";
import { useState } from "react";
import "./App.css";
import validator from "validator";

function App() {
  const [signupInput, setSignInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSignInput({
      ...signupInput,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState("");

  //validate all of our inputs
  const handleClick = () => {
    e.preventDefault();
    if (!validator.isEmail(signupInput.email)) {
      return setError("The email you wrote is invalid");
    }
    if (signupInput.password.length < 6) {
      return setError("The password should be at least 6 characters long");
    }
    if (signupInput.password !== signupInput.confirmPassword) {
      return setError("The passwords don't match. Try again.");
    }

  
  };



  return (
    <div className="container my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={signupInput.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={signupInput.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="confirm-password"
            value={signupInput.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
        <h1>Registration Form</h1>
      </form>
    </div>
  );
}

export default App;
