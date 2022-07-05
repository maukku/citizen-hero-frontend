import React, { useState } from "react";
import BlueButton from "../shared/BlueButton";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleEmailInputChange = (event) => {
    setValues({ email: event.target.value });
  };

  const handlePasswordInputChange = (event) => {
    setValues({ password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit} className="Login-form">
        <label>Email </label>
        <br />
        <input
          type="text"
          name="email"
          value={values.email}
          required
          onChange={handleEmailInputChange}
        />

        <br />
        <br />
        <label>Password </label>
        <br />
        <input
          type="password"
          name="pass"
          value={values.password}
          required
          onChange={handlePasswordInputChange}
        />

        <br />
        <br />
        <BlueButton text={"Login"} />
      </form>
    </div>
  );
}

export default Login;
