import { template } from "../data/customTemplateData";
import { useState } from "react";

function CustomMessageForm() {
  const [values, setValues] = useState({
    role: "parent",
    location: "",
    reason: "",
    contact: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleRoleInputChange = (event) => {
    setValues({ role: event.target.value });
  };

  const handleLocationInputChange = (event) => {
    setValues({ ...values, location: event.target.value });
  };
  const handleReasonInputChange = (event) => {
    setValues({ ...values, reason: event.target.value });
  };

  const handleContactWayInputChange = (event) => {
    setValues({ ...values, contact: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form
        className="formContainer"
        action=""
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <h3 className="horizontal-center">Citizen Hero</h3>

        {/* Role */}
        <label htmlFor="role">I 'am a </label>
        <select
          id="role"
          name="role"
          value={values.role}
          onChange={handleRoleInputChange}
        >
          <option value="parent" selected>
            parent
          </option>
          <option value="young">young</option>
          <option value="busines person">busines person</option>
          <option value="other">other</option>
        </select>
        {/* Location */}
        <label htmlFor="location"> from </label>
        <input
          type="text"
          name="location"
          for="location"
          value={values.location}
          placeholder="Berlin Neuköln"
          onChange={handleLocationInputChange}
        />

        {submitted && !values.role ? (
          <div className="formError">Please enter your role</div>
        ) : null}
        {submitted && !values.location ? (
          <div className="formError">Please enter your location</div>
        ) : null}
 <br />
        {/* Reason */}

          I care about this issue because
          <input
            type="text"
            name="reason"
            value={values.reason}
            onChange={handleReasonInputChange}
          />
   
        {submitted && !values.reason ? (
          <div className="formError">Please enter your reason</div>
        ) : null}
        {/* Contact */}
        <p>I would like to be contacted by the representative</p>
        <input
          type="checkbox"
          id="email"
          name="conactby"
          value="email"
          checked={values.contact === "email"}
          onChange={handleContactWayInputChange}
        />
        <label for="email">by email</label>
        <br />
        <input
          type="checkbox"
          id="post"
          name="conactby"
          value="post"
          checked={values.contact === "post"}
          onChange={handleContactWayInputChange}
        />
        <label for="post">by post</label>
        <br />

        <input
          type="checkbox"
          id="call"
          name="conactby"
          value="call"
          checked={values.contact === "call"}
          onChange={handleContactWayInputChange}
        />
        <label for="call">by phone call</label>

        {submitted && !values.contact ? (
          <div className="formError">
            Please indicate how you would like to be contacted
          </div>
        ) : null}
        <br />
        <button type="submit" value="Generate personalized message">
          Generate personalized message
        </button>
        <br />
      </form>
    </>
  );
}

export default CustomMessageForm;
