import React from "react";
import "./App.css";

const App = () => {
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
            aria-describedby="emailHelp"
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
            aria-describedby="passwordHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm-password"
            className="form-control"
            id="confirm-
            password"
            aria-describedby="passwordHelp"
          />
        </div>
        <h1>Registration Form</h1>
      </form>
    </div>
  );
};

export default App;
