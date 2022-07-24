import React, { useState } from "react";
import BlueButton from "../shared/BlueButton";

function Subscription() {
  const [values, setValues] = useState({
    email: "",
    name: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleEmailInputChange = (event) => {
    setValues({ email: event.target.value });
  };

  const handleNameInputChange = (event) => {
    setValues({ name: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="BasicContainer">
      <div className="Title">Subscribe to our Vote Reminder</div>

      <form onSubmit={handleSubmit} className="Newsletter">
        <div>
          <label htmlFor="name">First Name </label>

          <input
            type="text"
            name="name"
            className="TextBox"
            style={{ width: "200px" }}
            value={values.name}
            required
            onChange={handleNameInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Email</label>
          <input
            type="text"
            name="email"
            className="TextBox"
            style={{ width: "200px" }}
            value={values.email}
            required
            onChange={handleEmailInputChange}
          />
        </div>
        <br />
        <BlueButton text={"Subscribe"}></BlueButton>
      </form>
    </div>
  );
}

export default Subscription;
