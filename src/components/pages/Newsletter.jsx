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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'https://polar-mountain-34312.herokuapp.com/subscribers/create';
    //const url = 'http://localhost:3000/subscribers/create';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
  
      body: JSON.stringify({
        firstName: values.name,
        email: values.email
      }),
    };
    //Database saves Subscribers, but returns an error. This has to be fixed. Right now we ducktaped it to give at least visual feedback
    fetch(url, requestOptions)
      .then(response => alert('Submitted successfully'))
      .catch(error => console.log(error)); alert('Welcome on board')
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
