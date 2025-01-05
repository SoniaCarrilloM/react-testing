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
            type="eamil"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <h1>Registration Form</h1>
      </form>
    </div>
  );
};

export default App;
