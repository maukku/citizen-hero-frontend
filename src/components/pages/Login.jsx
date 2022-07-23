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
    <div className="BasicContainer">
      <div className="Title">Log in</div>
      <form onSubmit={handleSubmit} >
        <label>Email </label>
        <br />
        <input
          type="text"
          name="email"
          className="TextBox"
          style={{ width: "200px" }}
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
          style={{ width: "200px" }}
          className="TextBox"
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
