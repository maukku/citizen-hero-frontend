import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlueButton from "../shared/BlueButton";

function SignUp() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleEmailInputChange = (event) => {
    setValues({ email: event.target.value });
  };

  const handleFirstNameInputChange = (event) => {
    setValues({ firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setValues({ lastName: event.target.value });
  };

  const handlePasswordInputChange = (event) => {
    setValues({ password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="BasicContainer ">
      <div className="Title">Join us</div>

      <form onSubmit={handleSubmit}>
        <div className="SignUp">
          <div>
            <label htmlFor="firstName">First Name </label>

            <input
              type="text"
              name="firstName"
              className="TextBox"
              style={{ width: "200px" }}
              value={values.firstName}
              required
              onChange={handleFirstNameInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name </label>

            <input
              type="text"
              name="lastName"
              className="TextBox"
              style={{ width: "200px" }}
              value={values.lastName}
              required
              onChange={handleLastNameInputChange}
            />
          </div>
          <div style={{display:"grid"}}>
            <label htmlFor="email">Email </label>
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
          <div>
            <label htmlFor="password">Password </label>

            <input
              type="password"
              name="pass"
              style={{ width: "200px" }}
              className="TextBox"
              value={values.password}
              required
              onChange={handlePasswordInputChange}
            />
          </div>
        </div>
        <BlueButton text={"Create Account"} />
      </form>
    </div>
  );
}

export default SignUp;
